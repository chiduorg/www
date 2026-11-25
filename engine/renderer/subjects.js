import * as THREE from 'three';
import {pointTexture,glowSprite} from './effects.js';
import {createTextureStore,disposeObject} from './assets.js';
import {standard} from './materials.js';
const textures=createTextureStore();
export function surfaceTexture(file,invalidate=()=>{}){return textures.load(file,{onReady:invalidate});}
export const solid=(color,options={})=>standard(color,options);
export const object=(geometry,material,x=0,y=0,z=0)=>{const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);return mesh;};
export function rod(a,b,radius,material){const direction=new THREE.Vector3().subVectors(b,a),mesh=object(new THREE.CylinderGeometry(radius,radius,direction.length(),18),material);mesh.position.copy(a.clone().add(b).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());return mesh;}
export function label(text,color='#b4d7f5',width=3){const canvas=document.createElement('canvas');canvas.width=768;canvas.height=144;const c=canvas.getContext('2d');c.font='44px Segoe UI, Microsoft YaHei, sans-serif';c.textAlign='center';c.fillStyle=color;c.fillText(text,384,86,720);const map=new THREE.CanvasTexture(canvas),sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,transparent:true,depthWrite:false}));sprite.scale.set(width,width*144/768,1);return sprite;}
export function glow(color,size,opacity=.4){return glowSprite(pointTexture(),color,size,opacity);}
export function line(points,color=0x7cabc8,opacity=.6){return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p))),new THREE.LineBasicMaterial({color,transparent:true,opacity}));}
export function orbit(radius,color=0x849fbf,opacity=.35){const points=[];for(let i=0;i<=180;i++){const a=i/180*Math.PI*2;points.push([Math.cos(a)*radius,0,Math.sin(a)*radius]);}return line(points,color,opacity);}
export function createSubjectGallery(viewport,builders,{cacheLimit=8}={}){
 const root=new THREE.Group();root.rotation.set(.16,-.2,0);viewport.world.add(root);const cache=new Map();let active=null,activeKey=null,time=0;const resize=()=>{const mobile=innerWidth<600;root.scale.setScalar(mobile?1.8:.72);root.position.set(mobile?0:.8,mobile?-.8:1,0);root.traverse(child=>{if(child.userData.hudLabel)child.visible=false;});};addEventListener('resize',resize);resize();
 return {
  show(entry){const sceneKey=entry.visual?.scene,key=sceneKey+':'+entry.id;if(!sceneKey||!builders[sceneKey]){root.visible=false;active=null;activeKey=null;return null;}if(key!==activeKey){root.clear();if(!cache.has(key))cache.set(key,builders[sceneKey](()=>viewport.render(),entry));active=cache.get(key);cache.delete(key);cache.set(key,active);while(cache.size>cacheLimit){const oldest=cache.keys().next().value;disposeObject(cache.get(oldest).group);cache.delete(oldest);}root.add(active.group);activeKey=key;time=0;resize();}root.visible=true;return{key:sceneKey,label:entry.visual.caption,note:entry.visual.note,backdrop:entry.visual.backdrop,specific:true};},
  update(delta){time+=delta;active?.update?.(delta,time);},
  rotate(dx,dy){root.rotation.y+=dx;root.rotation.x+=dy;},
  isActive(){return root.visible&&!!active;},
  dispose(){removeEventListener('resize',resize);for(const subject of cache.values())disposeObject(subject.group);cache.clear();root.clear();root.removeFromParent();active=null;}
 };
}
