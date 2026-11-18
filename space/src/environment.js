import * as THREE from 'three';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';

const zones=[
  {until:-8,key:'quantum',label:'量子与原子',a:0x654687,b:0x2c617e},
  {until:-2,key:'micro',label:'微观生命',a:0x1e6065,b:0x397e69},
  {until:4,key:'human',label:'日常世界',a:0x2b4c6d,b:0x555078},
  {until:8.9,key:'planet',label:'行星空间',a:0x2c4d78,b:0x355272},
  {until:17,key:'stellar',label:'恒星之间',a:0x85533d,b:0x2d6680},
  {until:Infinity,key:'galactic',label:'星系深空',a:0x65518c,b:0x347586}
];
export function createEnvironment(scene){
  const uniforms={time:{value:0},zoom:{value:7},theme:{value:currentTheme()==='light'?1:0},colorA:{value:new THREE.Color(0x122641)},colorB:{value:new THREE.Color(0x283852)}};
  const targetA=new THREE.Color(),targetB=new THREE.Color();targetA.copy(uniforms.colorA.value);targetB.copy(uniforms.colorB.value);
  const material=new THREE.ShaderMaterial({depthWrite:false,uniforms,
    vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec2 vUv;uniform float time;uniform float zoom;uniform float theme;uniform vec3 colorA;uniform vec3 colorB;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
    float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.02+vec2(1.3,2.7);a*=.5;}return v;}
    vec3 lightStage(vec3 c){
      c=clamp(c,0.,1.);vec3 paper=vec3(.958,.968,.978);
      float l=max(max(c.r,c.g),c.b);vec3 hue=c/(l+1e-4);
      return clamp(mix(paper-(1.-c)*.60,hue*.78+.20,.18*smoothstep(.08,.85,l)),0.,1.);
    }
    void main(){vec2 p=(vUv-.5)*5.;p+=vec2(time*.0015,zoom*.012);float f=fbm(p*2.+fbm(p*1.2));float ridge=pow(max(0.,1.-abs(p.y*.8+p.x*.32+sin(p.x*1.3)*.24)),3.);float haze=pow(f,2.)*ridge;vec3 c=vec3(.005,.009,.018)+colorA*haze*.82+colorB*pow(fbm(p*2.5+3.),3.)*.24;if(theme>.5)c=lightStage(c);gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`
  });
  const fog=new THREE.Mesh(new THREE.PlaneGeometry(100,100),material);fog.position.z=-55;fog.renderOrder=-10;scene.add(fog);
  const particles=new THREE.Group();scene.add(particles);
  let seed=174;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  const canvas=document.createElement('canvas');canvas.width=canvas.height=32;const context=canvas.getContext('2d'),gradient=context.createRadialGradient(16,16,0,16,16,16);gradient.addColorStop(0,'#fff');gradient.addColorStop(.22,'#ffffffcc');gradient.addColorStop(1,'#ffffff00');context.fillStyle=gradient;context.fillRect(0,0,32,32);const dot=new THREE.CanvasTexture(canvas);
  const layers=[];
  for(let layer=0;layer<3;layer++){
    const positions=[],colors=[];
    for(let i=0;i<700;i++){positions.push((random()-.5)*46,(random()-.5)*60,-20-random()*20);const color=new THREE.Color().setHSL(.53+random()*.15,.15+random()*.25,.45+random()*.45);colors.push(color.r,color.g,color.b);}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    const stars=new THREE.Points(geometry,new THREE.PointsMaterial({map:dot,vertexColors:true,size:layer===0?2.2:1.5,transparent:true,opacity:layer===0?.75:.4,depthWrite:false,blending:THREE.AdditiveBlending}));particles.add(stars);layers.push(stars);
  }
  let elapsed=0,exponent=7,current='planet',lightStageMode=currentTheme()==='light';
  function applyTheme(theme){
    lightStageMode=theme==='light';
    uniforms.theme.value=lightStageMode?1:0;
    layers.forEach((layer,i)=>{
      layer.material.blending=lightStageMode?THREE.NormalBlending:THREE.AdditiveBlending;
      layer.material.opacity=lightStageMode?(i===0?.18:.11):undefined;
      layer.material.size=lightStageMode?(i===0?1.2:0.8):(i===0?2.2:1.5);
    });
  }
  applyTheme(currentTheme());
  const stopThemeWatch=watchTheme(applyTheme);
  return {
    setScale(value,immediate=false){exponent=value;const zone=zones.find(zone=>value<zone.until);current=zone.key;targetA.set(zone.a);targetB.set(zone.b);if(immediate){uniforms.colorA.value.copy(targetA);uniforms.colorB.value.copy(targetB);}uniforms.zoom.value=value;particles.scale.setScalar(1+Math.max(-.12,Math.min(.16,(value-7)*.004)));document.body.dataset.scaleZone=current;return zone;},
    update(delta){elapsed+=delta;uniforms.time.value=elapsed;uniforms.colorA.value.lerp(targetA,Math.min(1,delta*2));uniforms.colorB.value.lerp(targetB,Math.min(1,delta*2));layers.forEach((layer,i)=>{layer.rotation.z=Math.sin(elapsed*.007+i)*.014;layer.position.x=Math.sin(elapsed*.009+i)*.09;if(!lightStageMode)layer.material.opacity=(current==='micro'||current==='quantum'?.27:.55)+(i===0?.13:0);});},
    dispose(){stopThemeWatch();fog.geometry.dispose();material.dispose();dot.dispose();for(const stars of layers){stars.geometry.dispose();stars.material.dispose();}scene.remove(fog,particles);}
  };
}
