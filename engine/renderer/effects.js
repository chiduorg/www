import * as THREE from 'three';
import {currentTheme,watchTheme} from './theme.js';
export function pointTexture(){const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const c=canvas.getContext('2d'),g=c.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'#fff');g.addColorStop(.18,'#ffffffdd');g.addColorStop(.5,'#ffffff33');g.addColorStop(1,'#ffffff00');c.fillStyle=g;c.fillRect(0,0,64,64);return new THREE.CanvasTexture(canvas);}
export function glowSprite(texture,color,size,opacity=.5){const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,color,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending}));sprite.scale.set(size,size,1);return sprite;}
export function createMist(scene,a=0x5c3c2c,b=0x1c4058){
  const uniforms={time:{value:0},a:{value:new THREE.Color(a)},b:{value:new THREE.Color(b)}};
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShaderMaterial({depthWrite:false,uniforms,vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 v;uniform float time;uniform vec3 a;uniform vec3 b;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+1.),f.x),f.y);}void main(){vec2 p=(v-.5)*5.;float fog=n(p*2.+time*.002)*.5+n(p*4.-time*.003)*.25+n(p*8.)*.125;float cloud=pow(fog,2.)*exp(-abs(p.y+p.x*.3)*1.3);vec3 c=vec3(.003,.006,.013)+a*cloud*.9+b*pow(fog,3.)*.3;gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));plane.position.z=-50;scene.add(plane);
  return {update(t){uniforms.time.value=t;},colors(a,b){uniforms.a.value.set(a);uniforms.b.value.set(b);}};
}
// 各站提供自己的图景函数，共享全屏绘制与可暂停的过渡。
export function createSceneField(scene,fragment){
  const uniforms={uTime:{value:0},uFrom:{value:0},uTo:{value:0},uBlend:{value:1},uAspect:{value:innerWidth/innerHeight},uTheme:{value:currentTheme()==='light'?1:0}};
  const material=new THREE.ShaderMaterial({depthWrite:false,depthTest:false,uniforms,
    vertexShader:'varying vec2 uvField;void main(){uvField=uv;gl_Position=vec4(position.xy,.999,1.);}',
    fragmentShader:`varying vec2 uvField;uniform float uTime;uniform float uFrom;uniform float uTo;uniform float uBlend;uniform float uAspect;uniform float uTheme;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
    float fbm(vec2 p){return noise(p)*.57+noise(p*2.03+3.7)*.28+noise(p*4.1-1.3)*.15;}
    mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
    ${fragment}
    vec3 lightStage(vec3 c){
      c=clamp(c,0.,1.);
      vec3 paper=vec3(.958,.968,.976);
      vec3 ink=clamp(paper-(1.-c)*.64,0.,1.);
      float l=max(max(c.r,c.g),c.b);
      vec3 hue=c/(l+1e-4);
      return clamp(mix(ink,hue*.74+.23,.18*smoothstep(.10,.85,l)),0.,1.);
    }
    void main(){vec2 p=(uvField-.5)*vec2(uAspect,1.)*2.;vec3 color=field(p,uTo,uTime);if(uBlend<.999)color=mix(field(p,uFrom,uTime),color,smoothstep(0.,1.,uBlend));if(uTheme>.5)color=lightStage(color);float vignette=1.-smoothstep(.35,2.2,length(p))*(uTheme>.5?.12:.4);gl_FragColor=vec4(color*vignette,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`
  });
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(2,2),material);plane.frustumCulled=false;plane.renderOrder=-100;scene.add(plane);
  const resize=()=>{uniforms.uAspect.value=innerWidth/innerHeight;};addEventListener('resize',resize);
  const stopThemeWatch=watchTheme(theme=>{uniforms.uTheme.value=theme==='light'?1:0;});
  let stage=-1,elapsed=0;
  return {setStage(next,immediate=false){if(stage===next){if(immediate)uniforms.uBlend.value=1;return;}uniforms.uFrom.value=stage<0?next:stage;uniforms.uTo.value=next;uniforms.uBlend.value=stage<0||immediate?1:0;stage=next;},update(delta){elapsed+=delta;uniforms.uTime.value=elapsed;uniforms.uBlend.value=Math.min(1,uniforms.uBlend.value+delta*1.1);},dispose(){stopThemeWatch();removeEventListener('resize',resize);plane.geometry.dispose();material.dispose();scene.remove(plane);}};
}
