import * as THREE from 'three';
import {solid, object, rod, label, glow, line, orbit} from '/engine/renderer/subjects.js';

// Geometry is an explanatory object, never a simulation of a material's colour,
// particle speed, radiation spectrum, dimensions or reaction rate.
const TAU = Math.PI * 2;
const V = (x,y,z) => new THREE.Vector3(x,y,z);
const chrome = () => solid('#b7c7d2',{metalness:.83,roughness:.25});
const dark = () => solid('#172737',{metalness:.55,roughness:.38});
const glass = (color='#a4dbed',opacity=.15) => solid(color,{transparent:true,opacity,roughness:.12,metalness:.06,depthWrite:false,side:THREE.DoubleSide});
const hot = color => solid(color,{emissive:color,emissiveIntensity:.8,roughness:.48});
const sphere = (r,mat,x=0,y=0,z=0) => object(new THREE.SphereGeometry(r,36,24),mat,x,y,z);
const box = (x,y,z,mat,px=0,py=0,pz=0) => object(new THREE.BoxGeometry(x,y,z),mat,px,py,pz);
const cylinder = (r,h,mat,x=0,y=0,z=0,r2=r) => object(new THREE.CylinderGeometry(r,r2,h,40),mat,x,y,z);
function ring(r,t,mat,x=0,y=0,z=0){return object(new THREE.TorusGeometry(r,t,10,72),mat,x,y,z);}
function tube(points,r,mat){return object(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>V(...p))),56,r,8,false),mat);}
function rim(r,color){const m=new THREE.ShaderMaterial({uniforms:{c:{value:new THREE.Color(color)}},vertexShader:'varying vec3 n; varying vec3 v; void main(){vec4 p=modelViewMatrix*vec4(position,1.); n=normalize(normalMatrix*normal); v=normalize(-p.xyz); gl_Position=projectionMatrix*p;}',fragmentShader:'uniform vec3 c; varying vec3 n; varying vec3 v; void main(){float a=pow(1.-abs(dot(normalize(n),normalize(v))),3.); gl_FragColor=vec4(c,a*.48);}',transparent:true,depthWrite:false,side:THREE.FrontSide,blending:THREE.AdditiveBlending});return sphere(r,m);}
function points(count,color,shape='sphere',radius=2.8){const a=[];for(let i=0;i<count;i++){const u=(i*.61803398875)%1,v=(i*.41421356237)%1,w=(i*.754877666)%1;if(shape==='disk'){const t=u*TAU,r=radius*(.35+.65*v);a.push(Math.cos(t)*r,(w-.5)*.12,Math.sin(t)*r);}else if(shape==='column')a.push((u-.5)*radius,(v-.5)*radius*2,(w-.5)*radius);else{const z=1-2*u,t=v*TAU,s=Math.sqrt(1-z*z),r=radius*(.78+.22*w);a.push(s*Math.cos(t)*r,z*r,s*Math.sin(t)*r);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(a,3));return new THREE.Points(g,new THREE.PointsMaterial({color,size:.045,transparent:true,opacity:.72,depthWrite:false,blending:THREE.AdditiveBlending}));}
function tagged(group,text,y,width=4.8,color='#c9dfeb'){const s=label(String(text),color,width);s.position.set(0,y,.5);group.add(s);return s;}
function feet(g,w=3,h=-2.1){g.add(box(w,.16,2,dark(),0,h,0));for(const x of [-w/2+.25,w/2-.25])g.add(cylinder(.13,.35,chrome(),x,h-.2,.65),cylinder(.13,.35,chrome(),x,h-.2,-.65));}
function gauge(g,x,y,z){g.add(cylinder(.34,.15,chrome(),x,y,z));const f=object(new THREE.CircleGeometry(.28,32),solid('#e2e9e6'),x,y+.09,z);f.rotation.x=-Math.PI/2;g.add(f);g.add(rod(V(x,y+.1,z),V(x+.17,y+.11,z-.12),.018,hot('#edac63')));}

function metalFurnace(g,c,motions){
 const steel=chrome(),insulation=solid('#738087',{roughness:.9}),em=hot(c.color);
 feet(g,4.5,-2.3);g.add(box(4.3,.36,3,steel,0,-1.9),box(4.3,.32,3,steel,0,1.8),box(.35,3.5,3,steel,-2,0),box(.35,3.5,3,steel,2,0));
 g.add(box(3.6,3, .25,insulation,0,0,-1.35));for(const y of [-1.25,1.1]){const coil=tube(Array.from({length:40},(_,i)=>[-1.55+i*.08,y+Math.sin(i*Math.PI)*.07,-1.05]),.045,em);g.add(coil);}
 const crucible=cylinder(.98,.6,solid('#353b43'),0,-1.25,0,1.1);g.add(crucible);const sample=c.profile==='glass'?sphere(.85,solid(c.color,{transparent:true,opacity:.8,roughness:.12})):c.profile==='carbon'?box(1.35,1,1,solid('#303640',{roughness:.88}),0,-.5):cylinder(.7,.8,solid(c.sampleColor||'#c5cbd0',{metalness:.7,roughness:.23}),0,-.56);
 if(c.profile==='glass')sample.position.y=-.5;g.add(sample,glow(c.color,3.6,.16));g.add(rod(V(1.45,1.7,.5),V(.4,-.15,.4),.035,steel));
 const shield=box(3.75,2.7,.04,glass('#9cc4db',.07),0,.05,1.45);g.add(shield);for(const x of [-1.7,1.7])g.add(box(.05,2.7,.07,steel,x,.05,1.5));
 motions.push((d,t)=>{em.emissiveIntensity=.68+.12*Math.sin(t*.8);});
}
function cryoInstrument(g,c,motions){
 const copper=solid('#c78e66',{metalness:.8,roughness:.25}),steel=chrome();g.add(cylinder(2.1,.22,steel,0,2.4));
 for(const y of [1.7,.65,-.5,-1.5]){g.add(cylinder(1.3+(y+1.5)*.18,.13,copper,0,y));for(const x of [-.9,.9])g.add(rod(V(x,y,0),V(x,y+.9,0),.04,steel));}
 for(let i=0;i<4;i++){const a=i*TAU/4;g.add(tube(Array.from({length:42},(_,j)=>{const t=j/41;return[Math.cos(a+t*TAU*2)*(.7-.3*t),2.3-3.9*t,Math.sin(a+t*TAU*2)*(.7-.3*t)];}),.025,copper));}
 g.add(cylinder(1.98,4.8,glass('#9cd9eb',.075)),ring(2,.06,steel,0,-2.4));const lower=c.profile==='demagnetization'?cylinder(.32,1,solid('#d29466'),0,-1.8):box(.62,.13,.48,solid('#283c63',{metalness:.45}),0,-1.75);g.add(lower);
 if(c.profile==='thermometer'){g.add(rod(V(0,-1.7,0),V(0,-2.7,0),.07,steel),sphere(.16,hot(c.color),0,-2.7));}else if(c.profile==='demagnetization'){for(const x of [-.55,.55]){const q=ring(.42,.1,solid('#a5b8d0'),x,-1.7);q.rotation.y=Math.PI/2;g.add(q);}}
 const pulse=glow(c.color,2.7,.17);pulse.position.y=-1.6;g.add(pulse);motions.push((d,t)=>{pulse.material.opacity=.13+.035*Math.sin(t*.5);});
}
function phaseVessel(g,c,motions){
 const steel=chrome();feet(g,3,-2.5);
 if(c.profile==='room'){g.add(box(3.8,4,.16,solid('#304c5d'),0,0,-.4));for(const x of [-1.5,1.5])g.add(box(.09,3.5,.2,steel,x,.1,-.2));g.add(box(3,.09,.2,steel,0,.1,-.2));g.add(cylinder(.1,2.7,glass(),0,0,.15),sphere(.28,hot(c.color),0,-1.5,.15),cylinder(.045,1.5,hot(c.color),0,-.7,.15));for(let i=0;i<12;i++)g.add(box(.16,.025,.06,steel,.28,-1.2+i*.23,.2));return;}
 g.add(cylinder(1.3,3.3,glass(c.color,.13),0,-.1),cylinder(1.35,.14,steel,0,-1.8),cylinder(1.35,.14,steel,0,1.6),cylinder(.23,.72,steel,0,2),box(.9,.1,.12,solid('#b47d49'),0,2.35));
 // At the critical point a sharp liquid/gas meniscus would be misleading.
 const liquid=c.profile==='critical'?cylinder(1.21,3.15,glass(c.color,.18),0,-.1):cylinder(1.21,c.profile==='crystal'?1.1:1.6,solid(c.color,{transparent:true,opacity:.5,roughness:.18}),0,-.88);g.add(liquid);gauge(g,1.45,1.75,0);g.add(tube([[0,2.1,0],[.8,2.6,0],[1.45,2.25,0],[1.45,1.75,0]],.06,steel));
 if(c.profile==='crystal'){const p=object(new THREE.OctahedronGeometry(.7),solid('#dcecf1',{roughness:.3}),0,-.5,.15);g.add(p);motions.push((d)=>{p.rotation.y+=d*.07;});}
 const vapor=points(50,c.color,'column',1.2);vapor.position.y=.1;g.add(vapor);motions.push((d,t)=>{vapor.rotation.y=t*.06;vapor.position.y=.12+Math.sin(t*.45)*.08;});
}
function superconductor(g,c,motions){
 feet(g,4.5,-1.7);const board=box(3.4,.18,2.6,solid('#183c50',{metalness:.35}),0,-.8);g.add(board);for(let i=0;i<6;i++)g.add(rod(V(-1.5,-.67,-1+i*.4),V(1.5,-.67,-1+i*.4),.014,solid('#c59c63')));
 if(c.profile==='squid'){const loop=ring(.75,.08,solid('#d3e4ea'),0,-.5);loop.rotation.x=-Math.PI/2;g.add(loop,box(.25,.18,.16,hot(c.color),-.65,-.4,0),box(.25,.18,.16,hot(c.color),.65,-.4,0));for(const x of [-1,1])g.add(rod(V(x,-.6,0),V(x*1.8,.8,.2),.035,chrome()));}
 else {const chip=c.profile==='niobium'?cylinder(.8,.22,chrome(),0,-.55):box(1.6,.2,1.4,solid('#24313d'),0,-.55);g.add(chip);const magnet=cylinder(.55,.7,solid('#ba6a57',{metalness:.55}),0,.65);g.add(magnet);motions.push((d,t)=>{magnet.position.y=.65+Math.sin(t*.65)*.07;});}
 for(const x of [-1,0,1]){const arc=tube([[-1.5+x*.15,-.5,-.4],[x*.6,1.7,-.4],[1.5+x*.15,-.5,-.4]],.012,hot(c.color));g.add(arc);}g.add(cylinder(2.1,2.7,glass('#94d0e9',.06),0,-.15));
}
function kitchen(g,c,motions){
 const steel=chrome();feet(g,4.7,-2.2);
 if(c.profile==='oil'){g.add(cylinder(1.6,.24,dark(),0,-1),cylinder(1.4,.26,steel,0,-.76),cylinder(1.3,.06,solid('#d9a84d',{transparent:true,opacity:.75}),0,-.59),rod(V(1.25,-.75,0),V(2.9,-.5,0),.12,dark()));const smoke=points(70,'#d3d6ce','column',1.8);smoke.position.y=.8;g.add(smoke);motions.push((d,t)=>{smoke.rotation.y=t*.05;smoke.position.y=.8+Math.sin(t*.35)*.12;});return;}
 g.add(box(4.6,3.8,2.7,solid('#6d7b85',{metalness:.65}),0,0,-.4),box(3.9,2.7,.1,dark(),0,-.25,1.02),box(3.65,2.5,.04,glass('#d2aa81',.2),0,-.25,1.13));for(const x of [-1.7,1.7])g.add(cylinder(.16,.11,dark(),x,1.5,1.05));
 for(let i=0;i<7;i++)g.add(rod(V(-1.7,-1,-.9+i*.27),V(1.7,-1,-.9+i*.27),.025,steel));const loaf=sphere(.87,solid('#b77b3b',{roughness:.9}),0,-.35,0);loaf.scale.set(1.5,.65,.8);g.add(loaf);for(let i=0;i<3;i++)g.add(tube([[-.6+i*.6,-.02,-.45],[-.4+i*.6,.15,0],[-.2+i*.6,-.02,.45]],.025,solid('#e6c18a')));g.add(box(2.2,.13,.16,steel,0,.6,1.35),glow(c.color,3.5,.13));
}
function burner(g,c,motions){
 feet(g,3,-2.2);const steel=chrome();g.add(cylinder(.55,2.4,steel,0,-.5),cylinder(.8,.22,dark(),0,-1.7),rod(V(0,-1.3,0),V(1.5,-1.3,0),.12,steel),box(.6,.1,.1,solid('#bc8b55'),1,-.9));
 if(c.profile==='torch'){g.add(tube([[1.3,-1.3,0],[2.4,-1.6,0],[2.4,-2.1,.7]],.1,solid('#a84c47')),tube([[-.3,-1.3,0],[-1.7,-1.7,0],[-2,-2.1,.7]],.1,solid('#477b67')));}
 const flame=cylinder(.02,2.6,glass(c.color,.48),0,1.65,0,.7),inner=cylinder(.01,1.1,hot('#bbebff'),0,.9,0,.27);g.add(flame,inner);const halo=glow(c.color,3.9,.22);halo.position.y=1.3;g.add(halo);motions.push((d,t)=>{flame.scale.set(1+Math.sin(t*3)*.035,1+Math.sin(t*2.3)*.04,1);halo.material.opacity=.18+.03*Math.sin(t*2);});
}
function rocket(g,c,motions){
 const steel=chrome();g.add(cylinder(.85,1.7,steel,0,1.4),cylinder(.82,.18,dark(),0,.55));const bell=object(new THREE.CylinderGeometry(.7,1.8,2.1,56,1,true,0,Math.PI*1.65),steel,0,-.6);g.add(bell);for(let i=0;i<12;i++){const a=i*TAU/12;g.add(tube([[Math.cos(a)*.85,2.2,Math.sin(a)*.85],[Math.cos(a)*1.2,.3,Math.sin(a)*1.2],[Math.cos(a)*1.82,-1.65,Math.sin(a)*1.82]],.035,solid('#8b9caa')));}
 for(const x of [-1,1]){g.add(tube([[x*.7,1.9,0],[x*1.6,2.5,0],[x*2,1.5,0],[x*1.1,.7,0]],.16,steel),sphere(.45,dark(),x*1.8,2,0));}
 const flame=cylinder(.5,2.3,hot(c.color),0,.45,0,.25);flame.scale.z=.7;g.add(flame);const mist=points(90,c.color,'column',1);mist.position.y=-1.6;g.add(mist);motions.push((d,t)=>{flame.scale.x=1+Math.sin(t*4)*.045;mist.rotation.y=t*.2;});
}
function planet(g,c,motions){
 const color=c.color;
 if(c.profile==='lava'){g.add(cylinder(3,.55,solid('#34343b',{roughness:1}),0,-1),tube([[-2.8,-.65,-1.3],[-1.5,-.62,-.2],[0,-.6,-.6],[1,-.58,.6],[2.7,-.6,1.2]],.32,hot(color)));for(let i=0;i<9;i++){const r=object(new THREE.DodecahedronGeometry(.3+(i%3)*.15),solid('#414149'),-2+i*.5,-.45,1.1*Math.sin(i*2));g.add(r);}const h=glow(color,5,.18);h.position.y=-.5;g.add(h);motions.push((d,t)=>{h.material.opacity=.12+.04*Math.sin(t*.7);});return;}
 if(c.profile==='lightning'){for(let i=0;i<6;i++){const cloud=sphere(.9,solid('#718096',{roughness:1}),-2+i*.75,1.5+.25*Math.sin(i),.3*Math.cos(i));cloud.scale.y=.55;g.add(cloud);}const bolt=line([[-.3,1.1,0],[-.7,.2,0],[0,.3,0],[-.5,-.7,0],[.05,-.5,0],[-.8,-2,0]],'#b9d5ff',1);g.add(bolt,line([[-.5,-.7,0],[.5,-1,0],[1,-1.7,0]],'#a0c9ff',.7));const h=glow('#bbd8ff',5,.25);g.add(h);motions.push((d,t)=>{h.material.opacity=.08+.2*Math.pow(Math.max(0,Math.sin(t*1.3)),12);});return;}
 const world=sphere(2.2,solid(c.profile==='venus'?'#b89160':c.profile==='mars'?'#ad654b':c.profile==='pluto'?'#b0aaa0':'#346884',{roughness:.85}));g.add(world,rim(2.28,color));
 for(let i=0;i<5;i++){const a=i*1.37;const patch=sphere(.6,solid(c.profile==='mars'?'#77473c':c.profile==='venus'?'#dbb47a':'#d2dcda',{roughness:1}),Math.cos(a)*1.85,Math.sin(a)*1.4,1);patch.scale.set(1,.45,.25);world.add(patch);}
 if(c.profile==='core'){world.material=glass('#9bb8b9',.12);for(const [r,co] of [[1.65,'#ad6040'],[1.15,'#dfad60'],[.65,'#ffe1a4']])g.add(sphere(r,solid(co,{emissive:co,emissiveIntensity:.17})));}
 if(c.profile==='venus'){for(let i=0;i<7;i++){const b=ring(2.2,.06,glass('#f3d598',.55));b.rotation.x=i*.25;b.rotation.y=i*.35;world.add(b);}}
 if(c.profile==='antarctic'){const ice=sphere(1.5,solid('#e3edf0'),0,1.4,.1);ice.scale.y=.45;world.add(ice);g.add(rod(V(1,1.5,1.5),V(1,2.8,1.5),.035,chrome()),box(.35,.22,.25,solid('#cda867'),1,2.65,1.5));}
 if(c.profile==='thermosphere'){for(const r of [2.6,3,3.4]){const o=orbit(r,'#72c8ed',.32);o.rotation.x=.3;g.add(o);}const satellite=box(.3,.25,.2,chrome(),2.9,1.2,0);g.add(satellite,box(1,.025,.3,solid('#28567c'),2.9,1.2,0));}
 motions.push((d)=>{world.rotation.y+=d*.035;});
}
function stellar(g,c,motions){
 const star=new THREE.Group();g.add(star);const photosphere=sphere(2.1,hot(c.color));star.add(photosphere,rim(2.19,c.color));const grains=points(180,c.grainColor||'#fff1d0','sphere',2.12);star.add(grains);const aura=glow(c.color,6.4,.22);g.add(aura);
 if(c.profile==='vega'){star.scale.set(1.15,.86,1.15);g.add(rod(V(0,-2.9,0),V(0,2.9,0),.016,solid('#88aabb')));}
 if(c.profile==='sunspot'){const spot=sphere(.65,solid('#4f231a'),.6,.25,1.95);spot.scale.z=.16;star.add(spot);const pen=ring(.67,.1,solid('#b45e2e'),.6,.25,2.02);star.add(pen);}
 if(['corona','chromosphere','transition'].includes(c.profile)){for(let i=0;i<9;i++){const a=i*TAU/9,outer=c.profile==='corona'?3.25:2.6;const arc=tube([[Math.cos(a)*1.9,Math.sin(a)*1.9,0],[Math.cos(a+.15)*outer,Math.sin(a+.15)*outer,.6],[Math.cos(a+.33)*1.95,Math.sin(a+.33)*1.95,0]],.022,hot(c.profile==='corona'?'#a3cce9':'#ff9e80'));g.add(arc);}if(c.profile==='corona')photosphere.material=solid('#243b50');}
 if(c.profile==='brown'){photosphere.material=solid('#6b4645',{emissive:'#784333',emissiveIntensity:.22});for(const y of [-1,-.2,.6]){const b=ring(Math.sqrt(4.45-y*y),.07,glass('#be9b8a',.3),0,y);b.rotation.x=Math.PI/2;star.add(b);}}
 motions.push((d,t)=>{star.rotation.y+=d*.035;grains.rotation.y+=d*.009;aura.material.opacity=.18+.025*Math.sin(t*.45);});
}
function compact(g,c,motions){
 const star=sphere(1.15,hot(c.color));g.add(star,rim(1.21,c.color),glow(c.color,4.5,.22));const magnet=new THREE.Group();magnet.rotation.z=.3;g.add(magnet);
 if(c.profile!=='white-dwarf'){for(const s of [-1,1])for(let i=0;i<3;i++){const a=i*TAU/3;magnet.add(tube([[0,s*1,0],[Math.cos(a)*2.4,s*2.3,Math.sin(a)*2.4],[Math.cos(a)*2.6,-s*1.8,Math.sin(a)*2.6],[0,-s*1,0]],.012,hot('#6aa3cb')));}for(const s of [-1,1]){magnet.add(sphere(.25,hot('#fff0d4'),0,s*1.07,0));if(c.profile==='pulsar'){const b=cylinder(.05,2.4,glass('#a9d9ff',.22),0,s*2.2,0,.65);if(s<0)b.rotation.z=Math.PI;magnet.add(b);}}}
 else {const o=orbit(2.6,'#a9b8d4',.35);o.rotation.x=.4;g.add(o);const grains=points(80,'#d4e9ff','sphere',1.17);g.add(grains);}
 motions.push((d)=>{magnet.rotation.y+=d*(c.profile==='pulsar'?.45:.07);star.rotation.y+=d*.04;});
}
function accretion(g,c,motions){
 const disk=new THREE.Group();disk.rotation.set(.3,0,.2);g.add(disk);g.add(sphere(.8,solid('#05080f',{roughness:1})));for(let i=0;i<13;i++){const r=.95+i*.17,co=new THREE.Color(c.color).lerp(new THREE.Color('#854f5b'),i/17);const q=ring(r,.065,hot(co));q.rotation.x=Math.PI/2;disk.add(q);}disk.add(points(150,'#ffcca1','disk',3.1));
 for(const s of [-1,1]){const jet=cylinder(.12,2.6,glass('#9cbcff',.17),0,s*1.8,0,.5);if(s<0)jet.rotation.z=Math.PI;g.add(jet);}g.add(glow(c.color,4,.22));motions.push((d)=>{disk.rotation.y+=d*.09;});
}
function stellarEvent(g,c,motions){
 const shell=new THREE.Group();g.add(shell);g.add(sphere(.5,hot('#e7efff')),glow(c.color,6,.3));for(let i=0;i<5;i++){const q=ring(1.1+i*.43,.035,hot(c.color));q.rotation.set(i*.63,i*.41,i*.7);shell.add(q);}const debris=points(170,c.color,'sphere',2.9);shell.add(debris);for(const s of [-1,1]){const jet=cylinder(.03,2.4,glass(c.profile==='kilonova'?'#d7aee5':'#a0c6ff',.3),0,s*1.7,0,.65);if(s<0)jet.rotation.z=Math.PI;g.add(jet);}if(c.profile==='kilonova'){g.add(sphere(.24,hot('#e3e5ff'),-.6,0),sphere(.24,hot('#e3e5ff'),.6,0));}motions.push((d,t)=>{shell.rotation.y+=d*.035;shell.scale.setScalar(1+Math.sin(t*.3)*.025);});
}
function nebula(g,c,motions){
 g.add(sphere(.18,hot('#e4d2ba')),glow('#b5ceee',5,.12));const lobes=new THREE.Group();g.add(lobes);for(const s of [-1,1]){const cone=cylinder(1.3,2.7,glass(c.color,.16),0,s*1.4,0,.12);if(s<0)cone.rotation.z=Math.PI;lobes.add(cone);for(let i=0;i<4;i++){const r=ring(.4+i*.25,.018,hot(c.color),0,s*(.5+i*.55));r.rotation.x=Math.PI/2;lobes.add(r);}}lobes.rotation.z=-.45;const dust=points(120,c.color,'sphere',2.8);g.add(dust);motions.push((d)=>{dust.rotation.y+=d*.012;});
}
function radiation(g,c,motions){
 const sky=new THREE.Group();g.add(sky);for(let i=0;i<7;i++){const q=orbit(2.9,'#789bb4',.25);q.rotation.x=i*Math.PI/7;sky.add(q);}for(let i=0;i<9;i++){const q=ring(2.9*Math.sin((i+1)*Math.PI/10),.012,solid('#59738c',{transparent:true,opacity:.45}),0,2.9*Math.cos((i+1)*Math.PI/10));q.rotation.x=Math.PI/2;sky.add(q);}sky.add(points(150,c.color,'sphere',2.86));
 if(c.profile==='neutrino'){for(let i=0;i<6;i++){const y=(i-2.5)*.65;g.add(line([[-3,y,-.5],[0,y+.2,.3],[3,y+.4,1]],'#a4c4d9',.5));const marker=object(new THREE.OctahedronGeometry(.07),hot(c.color),-2+i*.7,y,0);g.add(marker);}}else{for(let i=0;i<8;i++){const p=sphere(.14,solid(i%2?'#d78d66':'#729fd1'),Math.cos(i*2)*2.6,Math.sin(i*2)*2,Math.sin(i*1.7));sky.add(p);}}
 motions.push((d)=>{sky.rotation.y+=d*.015;});
}
function reaction(g,c,motions){
 if(c.profile==='tokamak'){const steel=chrome();const q=ring(2,.6,steel);q.rotation.x=.7;g.add(q);for(let i=0;i<12;i++){const a=i*TAU/12;const coil=ring(.8,.13,solid('#bd9269'),Math.cos(a)*2,Math.sin(a)*2,0);coil.rotation.y=a;g.add(coil);}const plasma=ring(2,.15,hot(c.color));plasma.rotation.x=.7;g.add(plasma);g.add(box(3,.25,2,dark(),0,-2.6),glow(c.color,5,.12));motions.push((d,t)=>{plasma.material.emissiveIntensity=.65+.12*Math.sin(t*.8);});return;}
 if(c.profile==='stellar-burning'){for(const [r,col] of [[2.4,'#596982'],[1.7,'#bf8461'],[1.0,c.color]])g.add(sphere(r,glass(col,r===1?.65:.12)));for(let i=0;i<6;i++){const a=i*TAU/6;const seed=object(new THREE.IcosahedronGeometry(.2),hot(c.color),Math.cos(a)*1.4,Math.sin(a)*1.4,1);g.add(seed);g.add(line([[Math.cos(a)*1.4,Math.sin(a)*1.4,1],[0,0,.7]],'#e8c5a0',.5));}g.add(glow(c.color,4,.25));}
 else {const lattice=new THREE.Group();g.add(lattice);for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){lattice.add(sphere(.09,hot((x+y+z)%2?c.color:'#c7dcf3'),x*1.3,y*1.3,z*1.3));if(x<1)lattice.add(rod(V(x*1.3,y*1.3,z*1.3),V((x+1)*1.3,y*1.3,z*1.3),.009,solid('#6d7eab')));}for(let i=0;i<3;i++){const q=ring(2.65,.025,hot(c.color));q.rotation.set(i*.8,i*.6,i);g.add(q);}g.add(points(90,c.color,'sphere',2.9));motions.push((d)=>{lattice.rotation.y+=d*.06;});}
}
function filament(g,c,motions){
 const steel=chrome(),bulb=sphere(2,glass('#c8deea',.12),0,.5);bulb.scale.y=1.18;g.add(bulb,cylinder(.7,1.1,steel,0,-1.8),cylinder(.5,.2,dark(),0,-2.45));for(let i=0;i<5;i++){const q=ring(.7,.045,solid('#72818c'),0,-1.4-i*.19);q.rotation.x=Math.PI/2;g.add(q);}for(const x of [-.6,.6])g.add(rod(V(x*.4,-1.4,0),V(x,.45,0),.03,steel));const ribbon=tube(Array.from({length:70},(_,i)=>{const t=i/69;return[-.6+1.2*t,.45+Math.sin(t*TAU*9)*.22,Math.cos(t*TAU*9)*.16];}),.026,hot(c.color));g.add(ribbon);const halo=glow(c.color,4.2,.23);halo.position.y=.45;g.add(halo);motions.push((d,t)=>{halo.material.opacity=.2+.015*Math.sin(t*.6);});
}

function phaseDiagram(g,c,motions){
 const tint=c.color||'#d8825a';feet(g,4.6,-2.3);
 g.add(box(4.4,3.4,.16,solid('#24384a'),0,.1,-.3));
 g.add(box(1.5,1.5,.04,solid('#82b7cc',{transparent:true,opacity:.22}),-1.15,.9,-.2));
 g.add(box(1.5,1.5,.04,solid('#d6a36f',{transparent:true,opacity:.22}),.95,.9,-.2));
 g.add(box(2.3,1.8,.04,solid('#8fb59b',{transparent:true,opacity:.22}),-.7,-1.05,-.2));
 g.add(rod(V(-1.9,-1.6,-.18),V(2,-1.6,-.18),.03,chrome()),rod(V(-1.9,-1.6,-.18),V(-1.9,1.9,-.18),.03,chrome()));
 g.add(tube([[-1.9,-1.2,-.16],[-.4,-.1,-.16],[.6,.4,-.16],[1.9,1.8,-.16]],.022,hot(tint)));
 g.add(tube([[-1.9,-1.6,-.16],[-.6,-.2,-.16],[.2,.4,-.16],[1.9,1.6,-.16]],.016,solid('#b5c7d0')));
 const marker=sphere(.12,hot('#f6d9aa'),.2,.4,-.13);g.add(marker,glow('#f6d9aa',1.6,.25));
 motions.push((d,t)=>{marker.scale.setScalar(1+Math.sin(t*.9)*.08);});
}
function thermometer(g,c,motions){
 const tint=c.color||'#d8825a';feet(g,3,-2.3);
 g.add(cylinder(.62,.22,chrome(),0,-2.1),sphere(.5,hot(tint),0,-1.5));
 g.add(cylinder(.16,3.4,glass('#cfe4ee',.35),0,.2),cylinder(.12,2.6,solid(tint,{emissive:tint,emissiveIntensity:.35}),0,0));
 for(let i=0;i<12;i++){const y=-.8+i*.25;g.add(box(.3,.025,.03,chrome(),.36,y,0));}
 const needle=box(.55,.035,.05,hot(tint),.48,1.2,.05);g.add(needle,glow(tint,2.2,.14));
 motions.push((d,t)=>{needle.position.y=1.2+Math.sin(t*.5)*.06;});
}
function heatMap(g,c,motions){
 const tint=c.color||'#93bfb0';feet(g,5,-2.3);
 g.add(box(5.2,3.4,.18,solid('#1d3140'),0,.1,-.4));
 const bands=[['#3b6a9c',-1.1],['#5f97b3',-.55],['#93bfb0',0],['#d3b77d',.55],['#c97a5f',1.1]];
 for(const [color,y] of bands)g.add(box(4.9,.5,.1,solid(color,{emissive:color,emissiveIntensity:.12}),0,y,-.28));
 for(let i=0;i<8;i++)g.add(line([[-2.4,-1.35+i*.34,-.22],[2.4,-1.15+i*.34,-.22]],'#e6f1f4',.25));
 g.add(rod(V(-2.4,-1.7,-.2),V(-2.4,1.7,-.2),.04,chrome()));
 for(let i=0;i<5;i++)g.add(rod(V(-2.4,-1.4+i*.7,-.2),V(-2.1,-1.4+i*.7,-.2),.025,chrome()));
 const probe=sphere(.1,hot('#f2d6a2'),2.1,.6,-.15);g.add(probe,glow(tint,1.6,.2));
 motions.push((d,t)=>{probe.position.y=.6+Math.sin(t*.35)*.5;});
}
function combustion(g,c,motions){
 const tint=c.color||'#e0834f';
 if(c.profile==='incinerator'){
  feet(g,4,-2.2);g.add(box(4.4,3.2,2.6,solid('#5c6870',{metalness:.6}),0,0,-.2),box(3.4,2.2,.1,glass('#e2aa72',.2),0,-.2,1.15));
  for(let i=0;i<4;i++)g.add(rod(V(-1.6,-.8,-.6+i*.42),V(1.6,-.8,-.6+i*.42),.04,chrome()));
  const flame=cylinder(.55,1.5,hot(tint),0,-.1,0,.2);g.add(flame,glow(tint,3.4,.2));
  motions.push((d,t)=>{flame.scale.x=1+Math.sin(t*3)*.05;});
 }else{
  feet(g,6,-2.2);
  const bark=solid('#6b503a',{roughness:1});
  for(let i=0;i<5;i++)g.add(cylinder(.16,1.4,bark,-2+i*1,-.8,Math.sin(i)*.3,.1));
  const flames=new THREE.Group();g.add(flames);
  for(let i=0;i<7;i++){const x=-2.2+i*.72,y=-.9;flames.add(cylinder(.02,1.4,glass(tint,.45),x,y,Math.sin(i)*.3,.35),cylinder(.01,.7,hot('#f2cf8a'),x,y-.1,Math.sin(i)*.3,.18));}
  const smoke=points(90,'#9aa0a0','column',2.2);smoke.position.y=1.2;g.add(smoke);
  motions.push((d,t)=>{flames.rotation.y=Math.sin(t*.2)*.05;smoke.rotation.y=t*.03;});
 }
}

const builders={'metal-furnace':metalFurnace,'cryo-instrument':cryoInstrument,'phase-vessel':phaseVessel,'superconducting-sample':superconductor,kitchen,burner,'rocket-chamber':rocket,'planet-environment':planet,'stellar-atmosphere':stellar,'compact-star':compact,'accretion-disk':accretion,'stellar-event':stellarEvent,nebula,'radiation-field':radiation,'reaction-field':reaction,'filament-lamp':filament,'phase-diagram':phaseDiagram,thermometer,'heat-map':heatMap,combustion};

export function createThermalObject(entry,invalidate=()=>{},visual=entry.visual){
 const config=visual?{...visual,color:visual.color||'#9cb6c8'}:visual;
 if(!entry?.quantity||entry.quantity.value===null||!Number.isFinite(Number(entry.quantity.value)))throw new Error('A thermal object requires an explicit comparable quantity.');
 if(!config||!builders[config.template])throw new Error(`Unknown thermal template: ${config?.template}`);
 const group=new THREE.Group(),model=new THREE.Group(),motions=[];group.name=`thermal:${entry.id}`;model.name=config.template;group.add(model);builders[config.template](model,config,motions);
 // Normalise only the object. Stable labels remain readable as different subjects replace it.
 const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(V(0,0,0)),center=bounds.getCenter(V(0,0,0));const scale=7.5/Math.max(size.x,size.y,size.z,1);model.position.copy(center).multiplyScalar(-scale);model.scale.setScalar(scale);
 tagged(group,entry.title,-4.05,5.5).userData.hudLabel=true;const readout=String(entry.displayValue||`${entry.quantity.value} ${entry.quantity.unit}`).split('（')[0].trim();tagged(group,readout.length>30?`${readout.slice(0,29)}…`:readout,-4.65,5.6,'#8fbad1').userData.hudLabel=true;
 if(config.symbol)tagged(group,config.symbol,4.15,3,'#8eacbd');
 group.userData={entryId:entry.id,template:config.template,caption:config.caption,note:config.note};invalidate();
 return{group,update(delta,time){for(const animate of motions)animate(Math.min(Math.max(delta||0,0),.1),Number.isFinite(time)?time:0);}};
}
