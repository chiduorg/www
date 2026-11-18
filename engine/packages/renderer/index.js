import * as THREE from 'three';
import { clamp } from '../quantities/index.js';
import {disposeObject} from './assets.js';
import {createStudioEnvironment} from './studio.js';
import {stageColors,watchTheme} from './theme.js';

// 只负责通用视口、输入、画质和按需渲染；不包含任何空间对象知识。
export function createViewport(canvas, { onScale, onRotate, onResize,studioLighting=false } = {}) {
  const events=new AbortController();let cleaned=false;
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: false, powerPreference: 'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  const initialTheme=stageColors();
  renderer.setClearColor(initialTheme.background, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = initialTheme.exposure;
  const stopThemeWatch=watchTheme(theme=>{
    if(disposed)return;
    const colors=stageColors(theme);
    renderer.setClearColor(colors.background,1);
    renderer.toneMappingExposure=colors.exposure;
    render();
  });
  const scene = new THREE.Scene();
  let environmentTarget=null;
  if(studioLighting)try{environmentTarget=createStudioEnvironment(renderer);scene.environment=environmentTarget.texture;scene.environmentIntensity=.75;}catch(error){console.warn('柔光环境不可用，保留基础照明。',error);}
  const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, .1, 200);
  camera.position.set(0, 0, 35);
  const world = new THREE.Group();
  scene.add(world);
  let frame = 0, disposed = false, animation = 0, animate = null, last = 0, lastPaint = 0;
  let sampleStart=performance.now(),sampleFrames=0,totalFrames=0,slowSamples=0;
  function failRenderer(error){if(disposed)return;disposed=true;canvas.dataset.renderState='failed';console.warn('3D画面切换为图文模式',error);dispatchEvent(new Event('atlas-viewport-lost'));canvas.dispatchEvent(new CustomEvent('viewport-lost'));}
  function draw(){
    try{renderer.render(scene,camera);totalFrames++;sampleFrames++;canvas.dataset.frames=String(totalFrames);const now=performance.now(),elapsed=now-sampleStart;
      if(elapsed>=1000){const fps=sampleFrames*1000/elapsed;canvas.dataset.fps=fps.toFixed(1);canvas.dataset.drawCalls=String(renderer.info.render.calls);canvas.dataset.triangles=String(renderer.info.render.triangles);canvas.dataset.geometries=String(renderer.info.memory.geometries);canvas.dataset.textures=String(renderer.info.memory.textures);canvas.dataset.pixelRatio=String(renderer.getPixelRatio());
        if(animate&&!document.hidden){slowSamples=fps<24?slowSamples+1:0;if(slowSamples>=3&&renderer.getPixelRatio()>1){renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()-.25));slowSamples=0;}}
        sampleStart=now;sampleFrames=0;
      }
    }catch(error){failRenderer(error);}
  }
  const render = () => {
    if (disposed || frame) return;
    frame = requestAnimationFrame(() => {frame=0;if(!disposed)draw();});
  };
  const observer = new ResizeObserver(() => {
    const {width, height} = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    camera.left = -10; camera.right = 10; camera.top = 10 / aspect; camera.bottom = -10 / aspect;
    camera.updateProjectionMatrix();
    onResize?.(aspect);
    render();
  });
  observer.observe(canvas);
  function tick(now) {
    animation = 0;
    if(disposed || !animate || document.hidden) return;
    if(now-lastPaint >= 1000/30) {
      const delta = last ? Math.min((now-last)/1000,.08) : 0;
      last = now;lastPaint=now-((now-lastPaint)%(1000/30));
      try{animate(delta,now/1000);draw();}catch(error){failRenderer(error);}
    }
    animation=requestAnimationFrame(tick);
  }
  function setAnimation(callback) {
    animate=callback;cancelAnimationFrame(animation);animation=0;last=0;lastPaint=0;
    sampleStart=performance.now();sampleFrames=0;canvas.dataset.renderState=animate?(document.hidden?'hidden':'animating'):'paused';
    if(animate && !document.hidden) animation=requestAnimationFrame(tick);
  }
  const visibility=()=>{cancelAnimationFrame(animation);animation=0;last=0;lastPaint=0;sampleStart=performance.now();sampleFrames=0;canvas.dataset.renderState=document.hidden?'hidden':animate?'animating':'paused';if(document.hidden)canvas.dataset.fps='0';if(animate&&!document.hidden)animation=requestAnimationFrame(tick);};
  document.addEventListener('visibilitychange',visibility);
  canvas.addEventListener('wheel', event => { event.preventDefault(); onScale?.(clamp(event.deltaY, -120, 120) * .0018); }, {passive:false,signal:events.signal});
  const pointers = new Map();
  let lastDistance = 0;
  canvas.addEventListener('pointerdown', event => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, {x:event.clientX, y:event.clientY});
    lastDistance = 0;
  },{signal:events.signal});
  canvas.addEventListener('pointermove', event => {
    const previous = pointers.get(event.pointerId);
    if (!previous) return;
    pointers.set(event.pointerId, {x:event.clientX, y:event.clientY});
    if (pointers.size === 2) {
      const [a,b] = [...pointers.values()];
      const distance = Math.hypot(a.x-b.x,a.y-b.y);
      if (lastDistance && distance) onScale?.(-Math.log10(distance / lastDistance));
      lastDistance = distance;
    } else {
      onRotate?.((event.clientX-previous.x)*.006,(event.clientY-previous.y)*.006);
    }
    render();
  },{signal:events.signal});
  for (const name of ['pointerup','pointercancel','lostpointercapture']) canvas.addEventListener(name, e => {pointers.delete(e.pointerId);lastDistance=0;},{signal:events.signal});
  const lost = event => { event.preventDefault(); disposed = true; dispatchEvent(new Event('atlas-viewport-lost'));canvas.dispatchEvent(new CustomEvent('viewport-lost')); };
  canvas.addEventListener('webglcontextlost', lost,{signal:events.signal});
  const hide=event=>{if(!event.persisted)viewport.dispose();};addEventListener('pagehide',hide);
  const viewport={ scene, camera, world, renderer, render, setAnimation, dispose() {if(cleaned)return;cleaned=true;disposed=true;canvas.dataset.renderState='disposed';events.abort();observer.disconnect();cancelAnimationFrame(frame);cancelAnimationFrame(animation);document.removeEventListener('visibilitychange',visibility);removeEventListener('pagehide',hide);stopThemeWatch();disposeObject(scene);environmentTarget?.dispose();renderer.dispose();} };
  return viewport;
}
