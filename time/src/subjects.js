import * as THREE from 'three';
import {createChronicleObject} from './object-templates.js';
import {pointTexture} from '/engine/renderer/effects.js';
import {solid,object,rod,label,glow,line,orbit,surfaceTexture} from '/engine/renderer/subjects.js';
const sphere=(r,material,x=0,y=0,z=0)=>object(new THREE.SphereGeometry(r,64,48),material,x,y,z);
let seed=39;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
function points(count,distribution,color,size=3){const data=[];for(let i=0;i<count;i++)data.push(...distribution(i));const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(data,3));return new THREE.Points(geo,new THREE.PointsMaterial({map:pointTexture(),color,size,transparent:true,opacity:.8,depthWrite:false,blending:THREE.AdditiveBlending}));}
function primordial(){const group=new THREE.Group();const cloud=points(2500,()=>{const p=new THREE.Vector3(random()-.5,random()-.5,random()-.5).normalize().multiplyScalar(random()**.6*7);return[p.x,p.y,p.z];},0xffb764,4);group.add(cloud,glow(0xffb150,8,.7));const rays=[];for(let i=0;i<100;i++){const p=new THREE.Vector3(random()-.5,random()-.5,random()-.5).normalize();rays.push(p.x*2,p.y*2,p.z*2,p.x*8,p.y*8,p.z*8);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(rays,3));group.add(new THREE.LineSegments(geo,new THREE.LineBasicMaterial({color:0xffcc89,transparent:true,opacity:.17})));return{group,update(delta,time){cloud.rotation.y+=delta*.01;cloud.scale.setScalar(.95+Math.sin(time*.35)*.035);}};}
function recombination(){const group=new THREE.Group(),photons=[];const nucleusMat=new THREE.MeshBasicMaterial({color:0xeeb98a});for(let i=0;i<7;i++){const atom=new THREE.Group(),a=i/7*Math.PI*2;atom.position.set(Math.cos(a)*3.6,Math.sin(a)*2.6,(i%3-1)*.7);atom.add(sphere(.12,nucleusMat),glow(0xffd4aa,.8,.3));for(let j=0;j<2;j++){const ring=object(new THREE.TorusGeometry(.67,.007,5,100),new THREE.MeshBasicMaterial({color:0x7fb9e3,transparent:true,opacity:.65}));ring.rotation.set(j*.9,.5,j*1.2);atom.add(ring);}group.add(atom);const photon=glow(0xffe5a5,.21,.9);group.add(photon);photons.push(photon);}
 const tag=label('H · 氢原子形成 / 光子自由传播','#c8def1',6);tag.position.set(0,-4.1,0);group.add(tag);return{group,update(delta,time){photons.forEach((p,i)=>{const phase=(time*.2+i*.137)%1,a=i/7*Math.PI*2;p.position.set(Math.cos(a)*(1+phase*8),Math.sin(a)*(1+phase*5),.3);p.material.opacity=1-phase;});}};}
const starTextureCache=new Map();
function starTexture(hex){
 if(starTextureCache.has(hex))return starTextureCache.get(hex);
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=256;
 const ctx=canvas.getContext('2d'),base=new THREE.Color(hex),hsl={};base.getHSL(hsl);
 ctx.fillStyle=`#${base.getHexString()}`;ctx.fillRect(0,0,512,256);
 // 米粒组织：大量低对比对流元胞，让恒星表面不是纯色球。
 for(let i=0;i<3600;i++){
  const x=random()*512,y=random()*256,r=1.2+random()*8,a=.03+random()*.10;
  const light=random()>.42;
  ctx.fillStyle=`hsla(${hsl.h*360+random()*12-6},${Math.min(1,hsl.s*100+random()*10)}%,${Math.min(96,hsl.l*100+(light?random()*18:-random()*12))}%,${a})`;
  ctx.beginPath();ctx.ellipse(x,y,r,r*(.35+random()*.4),random()*Math.PI,0,Math.PI*2);ctx.fill();
 }
 // 临边昏暗：中心亮、边缘略暗，制造球体的体积感。
 // 只用极轻的中心增亮，不做“行星式”明暗球体。
 const dark=ctx.createRadialGradient(256,128,0,256,128,260);
 dark.addColorStop(0,'rgba(255,255,255,0.08)');dark.addColorStop(.55,'rgba(255,255,255,0.02)');dark.addColorStop(.86,'rgba(0,0,0,0.10)');dark.addColorStop(1,'rgba(0,0,0,0)');
 ctx.fillStyle=dark;ctx.fillRect(0,0,512,256);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=THREE.RepeatWrapping;
 starTextureCache.set(hex,texture);return texture;
}
const flareTexture=(()=>{const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');const radial=g.createRadialGradient(128,128,0,128,128,126);radial.addColorStop(0,'rgba(255,255,255,.9)');radial.addColorStop(.18,'rgba(255,255,255,.35)');radial.addColorStop(.55,'rgba(255,255,255,.06)');radial.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=radial;g.fillRect(0,0,256,256);
  for(let i=0;i<4;i++){const a=i*Math.PI/2,long=i%2?1.0:1.9;const grd=g.createLinearGradient(128-Math.cos(a)*128*long,128-Math.sin(a)*128*long,128+Math.cos(a)*128*long,128+Math.sin(a)*128*long);grd.addColorStop(0,'rgba(255,255,255,0)');grd.addColorStop(.48,'rgba(255,255,255,.22)');grd.addColorStop(.5,'rgba(255,255,255,.85)');grd.addColorStop(.52,'rgba(255,255,255,.22)');grd.addColorStop(1,'rgba(255,255,255,0)');g.strokeStyle=grd;g.lineWidth=2.2;g.beginPath();g.moveTo(128-Math.cos(a)*128*long,128-Math.sin(a)*128*long);g.lineTo(128+Math.cos(a)*128*long,128+Math.sin(a)*128*long);g.stroke();}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const coreTexture=(()=>{const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');const radial=g.createRadialGradient(128,128,0,128,128,128);radial.addColorStop(0,'rgba(255,255,255,1)');radial.addColorStop(.2,'rgba(255,255,255,.9)');radial.addColorStop(.5,'rgba(255,255,255,.28)');radial.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=radial;g.fillRect(0,0,256,256);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
function firstStars(){
  const group=new THREE.Group(),stars=[];
  const palette=[0xbcd9ff,0xeaf4ff,0xffdfb8,0xa9ceff,0xfff1d2,0xd3e5ff];
  for(let i=0;i<7;i++){
    const radius=[1.05,.56,.72,.42,.88,.35,.48][i];
    const x=i===0?0:Math.sin(i*7.2)*5.2,z=i===0?0:Math.cos(i*5.7)*1.8,y=i===0?0:Math.sin(i*3.4)*2.4;
    const core=sphere(radius,new THREE.MeshBasicMaterial({map:starTexture(palette[i]),color:0xffffff,toneMapped:false}),x,y,z);
    const hot=new THREE.Sprite(new THREE.SpriteMaterial({map:coreTexture,color:0xffe7c4,transparent:true,opacity:.32,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending}));hot.scale.set(radius*1.35,radius*1.35,1);hot.position.set(x,y,z);hot.renderOrder=10;
    core.scale.set(1.05,1,1.02);
    const corona=glow(palette[i],radius*4.6,.52);corona.position.set(x,y,z);
    const outer=glow(0x7aa7da,radius*10,.12);outer.position.set(x,y,z);
    const flare=new THREE.Sprite(new THREE.SpriteMaterial({map:flareTexture,color:palette[i],transparent:true,opacity:.28,depthWrite:false,blending:THREE.AdditiveBlending}));flare.scale.set(radius*7,radius*7,1);flare.position.set(x,y,z);
    // 四向衍射星芒，模拟望远镜中的亮星，不是物理结构。
    const rays=[];
    for(let j=0;j<4;j++){const a=j*Math.PI/2+Math.PI/4,length=radius*(j%2?2.6:3.8);rays.push(x,y,z,x+Math.cos(a)*length,y+Math.sin(a)*length,z);}
    const rayGeo=new THREE.BufferGeometry();rayGeo.setAttribute('position',new THREE.Float32BufferAttribute(rays,3));
    const ray=new THREE.LineSegments(rayGeo,new THREE.LineBasicMaterial({color:palette[i],transparent:true,opacity:.12,blending:THREE.AdditiveBlending}));
    group.add(core,hot,corona,outer,flare,ray);
    stars.push({core,hot,corona,outer,flare,ray,phase:i*.9,speed:.35+i*.07});
  }
  const gas=points(2600,()=>{const r=2.1+random()*4.8,a=random()*Math.PI*2;return[Math.cos(a)*r,Math.sin(a)*r*.55,(random()-.5)*3.4];},0x78a6d6,2.2);
  const dust=points(1300,()=>{const r=.7+random()*6,a=random()*Math.PI*2;return[Math.cos(a)*r,Math.sin(a)*r*.8,(random()-.5)*4];},0xc4a888,1.4);
  const distant=points(900,()=>[(random()-.5)*19,(random()-.5)*12,-4-random()*7],0xdce9ff,1.15);
  group.add(gas,dust,distant);
  return{group,update(delta,time){
    gas.rotation.z+=delta*.012;dust.rotation.z-=delta*.008;distant.rotation.y+=delta*.002;
    stars.forEach((s,i)=>{const pulse=.44+Math.sin(time*.5+s.phase)*.06;s.corona.material.opacity=pulse;s.hot.material.opacity=.30+Math.sin(time*.42+s.phase)*.05;s.outer.material.opacity=.08+Math.sin(time*.32+s.phase)*.02;s.flare.material.opacity=.24+Math.sin(time*.44+s.phase)*.05;s.ray.material.opacity=.08+Math.sin(time*.6+s.phase)*.03;s.core.rotation.y+=delta*s.speed;});
  }};
}
function galaxy(radius,color){const group=new THREE.Group(),stars=points(2200,i=>{const r=random()**.8*radius,a=i%3/3*Math.PI*2+r*1.4+(random()-.5)*.4;return[Math.cos(a)*r,(random()-.5)*.13,Math.sin(a)*r];},color,2.8);group.add(stars,glow(0xffd4a0,radius*.65,.4));return group;}
function galaxies(){const group=new THREE.Group(),a=galaxy(3.6,0xb7acf5),b=galaxy(2.1,0xa4c7ed),c=galaxy(1.3,0xe1bf9e);a.position.set(-.8,-.4,.3);a.rotation.set(.65,0,.15);b.position.set(3.7,2,-1.5);b.rotation.set(.8,.3,-.4);c.position.set(-4.7,2,-2);c.rotation.x=.8;group.add(a,b,c);return{group,update(delta,time){a.rotation.y+=delta*.012;b.rotation.y-=delta*.018;c.rotation.y+=delta*.02;}};}
function solarSystem(invalidate){const group=new THREE.Group(),disk=new THREE.Group();disk.rotation.set(.55,0,-.18);group.add(disk);disk.add(sphere(.95,new THREE.MeshBasicMaterial({map:surfaceTexture('sun.jpg',invalidate),color:0xffdfae})),glow(0xffa959,3.5,.35));const bodies=[];const names=['水星','金星','地球','火星','木星','土星'];const radii=[1.7,2.4,3.1,3.8,5,6.2];for(let i=0;i<6;i++){const r=radii[i];disk.add(orbit(r,0xb4a17e,.3));const name=names[i],planet=sphere(i===4?.44:i===5?.36:.16,solid([0xa99e8e,0xceb98b,0x477fa0,0xa46545,0xc3a786,0xc9b99b][i],{map:i===2?surfaceTexture('earth-day.jpg',invalidate):i===4?surfaceTexture('jupiter.jpg',invalidate):null}));disk.add(planet);const text=label(name,'#9fb9d0',1.25);disk.add(text);bodies.push({planet,text,r,angle:i*2.1,speed:.1/(1+i*.55)});if(i===5){const ring=object(new THREE.TorusGeometry(.59,.04,7,90),solid(0xbbae91,{transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;planet.add(ring);}}
 const dust=points(1500,()=>{const r=1.5+random()*5,a=random()*Math.PI*2;return[Math.cos(a)*r,(random()-.5)*.07,Math.sin(a)*r];},0xc9ad7d,1.8);disk.add(dust);return{group,update(delta,time){dust.rotation.y-=delta*.005;bodies.forEach(b=>{b.angle+=delta*b.speed;b.planet.position.set(Math.cos(b.angle)*b.r,0,Math.sin(b.angle)*b.r);b.text.position.copy(b.planet.position);b.text.position.y=.4;});}};}
function firstLife(){const group=new THREE.Group(),cells=[];for(let i=0;i<3;i++){const cell=new THREE.Group(),r=i===0?1.8:i===1?1.05:.8;cell.position.set(i===0?-.9:i===1?2.7:-3,i===0?0:i===1?1.1:-1.5,(i-1)*.5);cell.add(sphere(r,solid(0x73bcb5,{transparent:true,opacity:.16,roughness:.15,side:THREE.DoubleSide,depthWrite:false})));const molecule=[];for(let j=0;j<60;j++){const a=j/60*Math.PI*4;molecule.push([Math.cos(a)*r*.42,Math.sin(a)*r*.42,(j/60-.5)*r]);}cell.add(line(molecule,0xe1bf89,.9));const beads=new THREE.InstancedMesh(new THREE.SphereGeometry(.045,8,6),solid(0x89c8bb),100),matrix=new THREE.Matrix4();for(let j=0;j<100;j++){const a=j*2.39996,u=1-2*(j+.5)/100,v=Math.sqrt(1-u*u);matrix.makeTranslation(Math.cos(a)*v*r,u*r,Math.sin(a)*v*r);beads.setMatrixAt(j,matrix);}cell.add(beads);group.add(cell);cells.push(cell);}
 const floor=object(new THREE.CircleGeometry(7,100),solid(0x1c625f,{transparent:true,opacity:.16,side:THREE.DoubleSide}),0,-3,0);floor.rotation.x=-Math.PI/2;group.add(floor);for(let r=2;r<7;r+=1){const ring=orbit(r,0x65aaa2,.13);ring.position.y=-2.97;group.add(ring);}return{group,update(delta,time){cells.forEach((c,i)=>{c.rotation.y+=delta*(.05+i*.015);c.position.y+=(Math.sin(time*.5+i)*delta*.04);});}};}
function trilobite(){const group=new THREE.Group(),shell=solid(0x7c9a9c,{roughness:.72,metalness:.12}),leg=solid(0x4d717b);for(let i=0;i<10;i++){const z=-1.8+i*.36,w=.25+Math.sin((i+1)/11*Math.PI)*.7;const segment=sphere(w,shell,0,0,z);segment.scale.set(1,.28,.35);group.add(segment);for(const side of [-1,1])group.add(rod(new THREE.Vector3(side*w*.6,-.08,z),new THREE.Vector3(side*(w+.38),-.26,z-.16),.035,leg));}const head=sphere(.88,shell,0,.04,1.8);head.scale.set(1,.4,.7);group.add(head);for(const side of [-1,1]){group.add(sphere(.065,solid(0x112d38),side*.48,.29,2));group.add(line([[side*.42,.1,2.2],[side*.75,.12,2.7],[side*1.05,.2,2.95]],0x84b2be,.8));}return group;}
function cambrian(){const group=new THREE.Group(),large=trilobite();group.rotation.x=.65;group.position.y=.65;large.scale.setScalar(1.3);large.rotation.set(.2,.25,-.1);large.position.y=-1.15;group.add(large);for(let i=0;i<2;i++){const creature=trilobite();creature.scale.setScalar(.7+i*.15);creature.position.set(i===0?-3.4:3.6,-1.4,-2);creature.rotation.y=i===0?1.1:-1.1;group.add(creature);}const terrain=new THREE.PlaneGeometry(40,40,70,50);const p=terrain.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,Math.sin(p.getX(i)*1.1)*.11+Math.cos(p.getY(i)*1.4)*.15);terrain.computeVertexNormals();const floor=object(terrain,solid(0x244b50,{roughness:1,transparent:true,opacity:.35}),0,-1.6,0);floor.rotation.x=-Math.PI/2;group.add(floor);return{group,update(delta,time){large.rotation.y=.25+Math.sin(time*.1)*.03;}};}
function present(invalidate){const group=new THREE.Group(),planet=new THREE.Group();planet.rotation.set(.1,-.7,.12);const earth=sphere(3.65,new THREE.MeshPhongMaterial({map:surfaceTexture('earth-day.jpg',invalidate),shininess:20,specular:0x426080}));planet.add(earth);const clouds=sphere(3.68,new THREE.MeshPhongMaterial({color:0xffffff,alphaMap:surfaceTexture('earth-clouds.jpg',invalidate),transparent:true,opacity:.55,depthWrite:false}));planet.add(clouds);const atmosphere=sphere(3.74,new THREE.MeshBasicMaterial({color:0x609cde,transparent:true,opacity:.12,side:THREE.BackSide,depthWrite:false}));planet.add(atmosphere);group.add(planet);const moon=sphere(.96,new THREE.MeshPhongMaterial({map:surfaceTexture('moon.jpg',invalidate),shininess:1}),-5.2,-2.2,0);group.add(moon);return{group,update(delta){planet.rotation.y+=delta*.035;clouds.rotation.y+=delta*.008;moon.rotation.y+=delta*.01;}};}
export const timeSubjects={'time.object':(invalidate,entry)=>createChronicleObject(entry,invalidate,entry.visual),'time.big-bang':primordial,'time.recombination':recombination,'time.first-stars':firstStars,'time.galaxy-formation':galaxies,'time.solar-system':solarSystem,'time.first-life':firstLife,'time.cambrian':cambrian,'time.present':present};
