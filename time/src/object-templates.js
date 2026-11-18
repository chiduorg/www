import * as THREE from 'three';
import {solid, object, rod, line, orbit} from '/engine/renderer/subjects.js';

// Procedural illustrations, not measured reconstructions. No particle or animal
// trajectory encodes a physical velocity, elapsed duration, or spatial scale.
const TAU=Math.PI*2;
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const metal=()=>solid('#b5c7d0',{metalness:.75,roughness:.27});
const ink=()=>solid('#203343',{metalness:.3,roughness:.66});
const warm=()=>solid('#b78b61',{metalness:.6,roughness:.4});
const glass=(c='#91c5dc',a=.13)=>solid(c,{transparent:true,opacity:a,depthWrite:false,roughness:.16,side:THREE.DoubleSide});
const lit=c=>solid(c,{emissive:c,emissiveIntensity:.55,roughness:.5});
const ball=(r,m,x=0,y=0,z=0)=>object(new THREE.SphereGeometry(r,24,16),m,x,y,z);
const block=(x,y,z,m,px=0,py=0,pz=0)=>object(new THREE.BoxGeometry(x,y,z),m,px,py,pz);
const cyl=(r,h,m,x=0,y=0,z=0,r2=r)=>object(new THREE.CylinderGeometry(r,r2,h,36),m,x,y,z);
const ring=(r,t,m,x=0,y=0,z=0)=>object(new THREE.TorusGeometry(r,t,8,64),m,x,y,z);
const path=(p,r,m)=>object(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p.map(v=>V(...v))),48,r,7,false),m);
function seeded(key){let s=2166136261;for(const c of key)s=Math.imul(s^c.charCodeAt(0),16777619);return()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};}
function dust(n,c,fn){const a=[];for(let i=0;i<n;i++)a.push(...fn(i));const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(a,3));return new THREE.Points(geo,new THREE.PointsMaterial({color:c,size:.045,transparent:true,opacity:.72,depthWrite:false,blending:THREE.AdditiveBlending}));}
function pedestal(g,w=5,z=3){g.add(block(w,.14,z,ink(),0,-2.25),block(w*.94,.04,z*.94,metal(),0,-2.15));}
function wave(g,c,y=0,z=0,amplitude=.3){g.add(path(Array.from({length:45},(_,i)=>{const x=-3+i/44*6;return[x,y+Math.sin(x*4)*amplitude,z];}),.016,lit(c)));}
function grain(g,p,c,r=.12){g.add(ball(r,lit(c),...p));}
function dataLabel(text,color,width){const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=144;const ctx=canvas.getContext('2d');let size=44;ctx.font=`${size}px Segoe UI, Microsoft YaHei, sans-serif`;while(size>24&&ctx.measureText(text).width>970)ctx.font=`${--size}px Segoe UI, Microsoft YaHei, sans-serif`;ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(text,512,88);const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false}));sprite.scale.set(width,width*144/1024,1);return sprite;}
function frond(g,x,y,z,size=1,material=solid('#4f9e88')){const f=new THREE.Group();f.position.set(x,y,z);f.scale.setScalar(size);g.add(f);f.add(rod(V(0,0,0),V(0,1.8,0),.025,warm()));for(let j=0;j<7;j++)for(const s of [-1,1]){const q=ball(.25,material,s*(.12+j*.035),.25+j*.2,0);q.scale.set(1,.2,.35);q.rotation.z=s*.4;f.add(q);}return f;}

function quantumField(g,c,m){
 const sheet=new THREE.Group();sheet.rotation.set(-.38,.1,0);g.add(sheet);
 for(let j=-4;j<=4;j++){const p=[];for(let i=0;i<=30;i++){const x=-3+i*.2,z=j*.65;p.push([x,Math.sin(x*1.7+z)*.22,z]);}sheet.add(line(p,c.color,.42));}
 for(let i=-4;i<=4;i++)sheet.add(line(Array.from({length:31},(_,j)=>{const z=-3+j*.2;return[i*.65,Math.sin(i*1.1+z)*.22,z];}),c.color,.3));
 if(c.profile==='inflation'){for(let k=0;k<3;k++){const r=ring(.7+k*.7,.025,lit(c.color));r.rotation.x=Math.PI/2;r.position.y=.8;sheet.add(r);m.push((d,t)=>r.scale.setScalar(1+Math.sin(t*.4+k)*.06));}}
 else if(c.profile==='unification'){for(let k=0;k<3;k++){const loop=path(Array.from({length:49},(_,j)=>{const a=j/48*TAU;return[Math.cos(a)*1.5,1+Math.sin(a*2+k)*.4,Math.sin(a)*1.5];}),.035,lit(['#e6b877','#a0c7e9',c.color][k]));loop.rotation.y=k*TAU/3;g.add(loop);}}
 else {const frame=block(1.3,1.3,1.3,glass(c.color,.1),0,1,0);g.add(frame);for(const x of [-.65,.65])for(const z of [-.65,.65])g.add(rod(V(x,.35,z),V(x,1.65,z),.025,metal()));}
 m.push((d,t)=>sheet.rotation.y=.1+Math.sin(t*.2)*.05);
}
function particleReaction(g,c,m){
 if(c.profile==='molecule'){const pair=new THREE.Group();g.add(pair);pair.add(ball(.7,solid('#a4b8d4'),-.7,0,0),ball(.38,solid(c.color),.8,0,0),rod(V(-.7,0,0),V(.8,0,0),.055,metal()));for(let i=0;i<3;i++){const q=ring(1.7,.012,glass(c.color,.65));q.rotation.set(i*.8,.4,i*.5);pair.add(q);}m.push((d,t)=>pair.rotation.y=t*.04);return;}
 const tracks=new THREE.Group();g.add(tracks);const count=c.profile==='hadron'?6:4;
 for(let i=0;i<count;i++){const y=(i-(count-1)/2)*.7;const p=[[-3,y,-.5],[-1.2,y+.15,0],[.2,y,.4],[2.8,y-.1,-.2]];tracks.add(path(p,.012,lit(i%2?c.color:'#7399bb')));const q=new THREE.Group();tracks.add(q);if(c.profile==='hadron'){for(let k=0;k<3;k++)q.add(ball(.11,lit(['#edac7a','#9ac8de','#c6a0d2'][k]),Math.cos(k*TAU/3)*.15,Math.sin(k*TAU/3)*.15,0));q.add(ball(.3,glass(c.color,.08)));}else q.add(ball(c.profile==='muon'?.18:.13,lit(i%2?c.color:'#d8c7a4')));m.push((d,t)=>{const phase=(t*.09+i*.19)%1;q.position.set(-2.7+5.4*phase,y+Math.sin(phase*TAU)*.12,.25);});}
 const gate=ring(2.2,.035,metal());gate.rotation.y=Math.PI/2;g.add(gate);for(const x of [-2.5,2.5]){const q=ring(1.5,.012,solid(c.color,{transparent:true,opacity:.25}));q.rotation.y=Math.PI/2;q.position.x=x;g.add(q);}
}
function nuclearNetwork(g,c,m){
 const centers=[[-2.4,.5,0],[0,-.5,.2],[2.3,.55,0]],n=c.profile==='lithium'?7:c.profile==='barrier'?2:4;
 for(let j=0;j<3;j++){const cluster=new THREE.Group();cluster.position.set(...centers[j]);g.add(cluster);const amount=j===2?n:j+1;for(let i=0;i<amount;i++){const a=i*2.39996,r=i===0?0:.3;cluster.add(ball(.22,solid(i%2?'#9fc9df':c.color,{roughness:.45}),Math.cos(a)*r,Math.sin(a)*r,(i%2-.5)*.25));}const shell=ring(.7,.012,solid(c.color,{transparent:true,opacity:.38}));cluster.add(shell);m.push((d,t)=>cluster.rotation.y=t*.08+j*.5);}
 for(let j=0;j<2;j++)g.add(path([[centers[j][0]+.6,centers[j][1],0],[centers[j][0]+1.2,1.35,0],[centers[j+1][0]-.6,centers[j+1][1],0]],.018,lit(c.color)));
 if(c.profile==='barrier'){const shield=block(.06,3,2.5,glass('#8facbe',.13),1.05,.2,0);g.add(shield);wave(g,'#e2c69a',1.65,.1,.1);}
 for(let i=0;i<4;i++){const q=orbit(2.8,c.color,.12);q.rotation.set(i*.4,0,i*.5);g.add(q);}
}
function radiationFront(g,c,m){
 const sheet=block(5.7,3.5,.05,glass('#6592ae',.06),0,0,-.8);g.add(sheet);for(let j=0;j<6;j++)wave(g,j%2?c.color:'#7a9fba',-1.5+j*.6,-.4+j*.08,.12);
 if(c.profile==='acoustic'){for(let i=0;i<5;i++){const q=ring(.45+i*.48,.018,lit(c.color));q.position.z=.3;g.add(q);m.push((d,t)=>q.scale.setScalar(1+Math.sin(t*.3)*.025));}}
 else {for(let i=0;i<9;i++){const y=(i%3-1)*1.05,z=Math.floor(i/3)*.5;const track=line([[-3,y,z],[3,y+.25,z]],'#729aaf',.25);g.add(track);const q=object(new THREE.OctahedronGeometry(.09),lit(c.color));g.add(q);m.push((d,t)=>q.position.set(((t*.35+i*.63)%6)-3,y+.12,z));}if(c.profile==='photon'){for(let k=0;k<5;k++){const q=ball(.2,solid(k%2?'#c99870':'#6a93b4'),-2+k,1.5,.6);g.add(q);}}}
}
function cosmicWeb(g,c,m,rng){
 const nodes=[];for(let i=0;i<12;i++)nodes.push(V((rng()-.5)*6,(rng()-.5)*4,(rng()-.5)*3));
 for(let i=0;i<nodes.length;i++){const a=nodes[i];g.add(ball(i%3===0?.2:.075,lit(c.color),a.x,a.y,a.z));const halo=ring(c.profile==='halo'?.5:.24,.01,solid(c.color,{transparent:true,opacity:.2}));halo.position.copy(a);halo.rotation.set(i*.8,i*.5,0);g.add(halo);for(let j=i+1;j<nodes.length;j++)if(a.distanceTo(nodes[j])<3.2)g.add(path([[a.x,a.y,a.z],[(a.x+nodes[j].x)/2,(a.y+nodes[j].y)/2+.18,(a.z+nodes[j].z)/2],[nodes[j].x,nodes[j].y,nodes[j].z]],.013,glass(c.color,.3)));}
 const p=dust(180,c.color,()=>[(rng()-.5)*6,(rng()-.5)*4,(rng()-.5)*3]);g.add(p);m.push((d,t)=>{p.rotation.y=Math.sin(t*.12)*.035;});
 if(c.profile==='expansion'){for(const s of [-1,1])g.add(rod(V(s*1.3,-2.1,0),V(s*3,-2.1,0),.025,lit(c.color)));}
}
function miniGalaxy(radius,c,rng){const disk=new THREE.Group();disk.add(dust(300,c,i=>{const r=Math.sqrt(rng())*radius,a=(i%3)*TAU/3+r*1.6+(rng()-.5)*.35;return[Math.cos(a)*r,(rng()-.5)*.12,Math.sin(a)*r];}),ball(radius*.17,lit('#f4d5b1')));return disk;}
function galaxyAssembly(g,c,m,rng){
 if(c.profile==='cluster'){for(let i=0;i<7;i++){const a=i*2.4,small=miniGalaxy(.45+(i%3)*.13,c.color,rng);small.position.set(Math.cos(a)*(i?2.2:0),Math.sin(a)*1.5,(i%3-1)*.8);small.rotation.set(.6+i*.1,i*.3,0);g.add(small);m.push((d,t)=>small.rotation.y=t*(.015+i*.002));}return;}
 const disk=miniGalaxy(2.5,c.color,rng);disk.rotation.set(.45,0,.15);g.add(disk);if(c.profile==='thick-disc'){const rim=ring(2.2,.14,glass(c.color,.16));rim.rotation.x=Math.PI/2;disk.add(rim);g.add(line([[-2.8,-1.5,0],[2.8,-1.5,0]],'#b79274',.35));}else for(const s of [-1,1]){const small=miniGalaxy(.75,c.color,rng);small.position.set(s*2.6,s*.8,-1);small.rotation.x=.8;g.add(small);g.add(path([[s*3,s*.8,-1],[s*2,1.8,0],[s*.9,.2,0]],.014,glass(c.color,.4)));}m.push((d,t)=>disk.rotation.y=t*.025);
}
function accretionEngine(g,c,m){
 const disk=new THREE.Group();disk.rotation.set(.45,0,.22);g.add(disk);g.add(ball(.72,solid('#030812',{roughness:1})));for(let i=0;i<12;i++){const q=ring(.9+i*.13,.045,lit(new THREE.Color(c.color).lerp(new THREE.Color('#8b647d'),i/16)));q.rotation.x=Math.PI/2;disk.add(q);}
 const arcs=new THREE.Group();disk.add(arcs);for(let i=0;i<3;i++){const a=i*TAU/3;arcs.add(ball(.09,lit('#f6dabc'),Math.cos(a)*1.7,0,Math.sin(a)*1.7));}
 if(c.profile==='quasar')for(const s of [-1,1]){const jet=cyl(.07,2.7,glass('#a2d7ed',.22),0,s*1.8,0,.5);if(s<0)jet.rotation.z=Math.PI;g.add(jet);}
 else {const slit=block(4.8,.06,.08,solid('#90aec4'),0,-2,0);g.add(slit);for(let i=0;i<7;i++)g.add(block(.035,.3+(i%3)*.13,.08,lit(c.color),-2+i*.65,-1.8,0));}
 m.push((d,t)=>arcs.rotation.y=t*.18);
}
function stellarCycle(g,c,m,rng){
 if(c.profile==='enrichment'){const shell=new THREE.Group();g.add(shell);for(let i=0;i<5;i++){const q=ring(.8+i*.42,.022,lit(c.color));q.rotation.set(i*.65,i*.4,0);shell.add(q);}g.add(ball(.35,lit('#dfebf5')));const grain=dust(180,c.color,()=>{const a=rng()*TAU,z=(rng()-.5)*2,r=1.6+rng();return[Math.cos(a)*r,z,Math.sin(a)*r];});g.add(grain);m.push((d,t)=>{shell.rotation.y=t*.02;grain.rotation.y=-t*.025;});}
 else {for(let k=0;k<7;k++){const a=k*2.4,x=Math.cos(a)*(k?2.2:0),y=Math.sin(a)*1.4;g.add(ball(k?.15:.55,lit(k%2?c.color:'#cedcf0'),x,y,(k%3-1)*.6));}for(let i=0;i<4;i++)g.add(path([[-3,-1.7+i*.7,-1],[-1,.4+i*.15,0],[1,-.1+i*.3,.2],[3,1.6-i*.4,-.5]],.09,glass(c.color,.12)));m.push((d,t)=>g.rotation.y=Math.sin(t*.1)*.035);}
}
function planetFoundry(g,c,m,rng){
 const world=new THREE.Group();g.add(world);world.add(ball(1.5,solid('#5a5d64',{roughness:.87})));for(let i=0;i<7;i++){const q=ring(1.5,.02,lit('#c48e61'));q.rotation.set(i*.6,i*.4,i*.3);world.add(q);}
 if(c.profile==='impact'){const moon=object(new THREE.DodecahedronGeometry(.6,1),solid('#9a8372'),2.5,1.2,.1);g.add(moon);g.add(path([[2.8,1.7,.2],[2,1,0],[1.2,.6,0]],.025,lit(c.color)));const ejecta=dust(100,c.color,()=>{const a=rng()*TAU;return[1+rng()*1.8,Math.sin(a)*rng()*1.4,Math.cos(a)*rng()];});g.add(ejecta);m.push((d,t)=>ejecta.rotation.x=Math.sin(t*.3)*.025);}
 else {const dustRing=dust(230,c.color,()=>{const a=rng()*TAU,r=2+rng();return[Math.cos(a)*r,(rng()-.5)*.15,Math.sin(a)*r];});g.add(dustRing);m.push((d,t)=>dustRing.rotation.y=t*.025);}
 m.push((d,t)=>world.rotation.y=t*.025);
}
function oceanSection(g,c,m){
 if(c.profile==='core'){pedestal(g,5,3);for(let j=0;j<11;j++)g.add(cyl(.55,.26,solid(['#a78b6b','#7d735f','#b09e7a'][j%3]),-.7,-1.7+j*.28));g.add(cyl(.58,3.4,glass('#bad1d7',.08),-.7,-.2));g.add(rod(V(1.1,-1.8,0),V(1.1,1.3,0),.055,metal()),ball(.2,lit(c.color),1.1,-1.65,0));for(let j=0;j<9;j++)g.add(block(.22,.02,.05,metal(),1.38,-1.2+j*.27,0));const pointer=block(.5,.035,.08,lit(c.color),.1,.3,.2);g.add(pointer);m.push((d,t)=>pointer.position.y=.3+Math.sin(t*.3)*.04);return;}
 pedestal(g,5.8,3.8);const rock=solid('#6a746f',{roughness:.95}),water=glass('#448caa',.35);g.add(block(5.4,.45,3.4,rock,0,-1.8),block(5.4,1.3,3.4,water,0,-.95));for(let i=0;i<7;i++){const x=-2.4+i*.8;g.add(object(new THREE.ConeGeometry(.65,.7+(i%3)*.25,5),rock,x,-1.45,-1));}
 for(let j=0;j<4;j++){const q=path(Array.from({length:35},(_,i)=>[-2.6+i/34*5.2,-.25+Math.sin(i*.5+j)*.04,-1.3+j*.85]),.015,solid('#91cbcd',{transparent:true,opacity:.6}));g.add(q);m.push((d,t)=>q.position.y=Math.sin(t*.4+j)*.025);}
 const crystal=object(new THREE.OctahedronGeometry(.5),solid(c.color,{metalness:.3,roughness:.25}),1.8,.65,.4);crystal.scale.set(.6,1.4,.6);g.add(crystal,rod(V(1.8,-1,.4),V(1.8,.05,.4),.018,metal()));m.push((d,t)=>crystal.rotation.y=t*.06);
}
function atmosphereSection(g,c,m){
 if(c.profile==='magnetic'){g.add(ball(1.4,solid('#315765')));for(let j=0;j<6;j++){const a=j*TAU/6;g.add(path([[0,1.35,0],[Math.cos(a)*2.6,.7,Math.sin(a)*2.6],[Math.cos(a)*2.6,-.7,Math.sin(a)*2.6],[0,-1.35,0]],.018,lit(c.color)));}const needle=rod(V(-.8,0,0),V(.8,0,0),.07,warm());needle.position.set(0,-2.1,0);g.add(needle,ring(1,.025,metal(),0,-2.1,0));m.push((d,t)=>needle.rotation.y=Math.sin(t*.2)*.06);return;}
 const earth=ball(1.65,solid('#315765'));earth.position.y=-.75;g.add(earth);for(let i=0;i<6;i++){const q=ring(1.7+i*.18,.013,glass(c.color,.35));q.rotation.x=Math.PI/2;q.position.y=-.75;g.add(q);}
 for(let k=0;k<7;k++){const a=k/7*TAU,x=Math.cos(a)*2.3,y=Math.sin(a)*1.5+.5;const molecule=new THREE.Group();molecule.position.set(x,y,.4);molecule.add(ball(.11,lit(c.color),-.12,0),ball(.11,lit(c.color),.12,0));g.add(molecule);m.push((d,t)=>molecule.rotation.z=t*.07+k);}
 for(let j=0;j<4;j++)g.add(line([[-2.8+j*.7,2.5,-.4],[-1.2+j*.7,.8,-.4]],'#e4c799',.25));
}
function iceLandscape(g,c,m){
 pedestal(g,6,3.8);g.add(block(5.7,.5,3.5,solid('#346573'),0,-1.8));const ice=solid('#b9dbe3',{roughness:.65});for(let i=0;i<8;i++){const x=-2.5+i*.7,h=.5+(i%3)*.3;g.add(block(.72,h,2.2,ice,x,-1.4+h/2,-.3));const peak=object(new THREE.ConeGeometry(.8,1.1+(i%2)*.4,5),ice,x,-.1,-.8);g.add(peak);}
 const p=dust(65,'#d5ebf2',i=>[-2.8+(i*.618%1)*5.6,.5+(i*.414%1)*1.5,-1.2+(i*.754%1)*2.8]);g.add(p);m.push((d,t)=>p.position.y=-((t*.06)%1));if(c.profile==='glacial-maximum')for(let i=0;i<5;i++)g.add(path([[-2.5+i,-1.28,.8],[-2.3+i,-1.2,1.1],[-2.5+i,-1.3,1.5]],.015,solid('#749eb4')));
}
function catastropheSection(g,c,m,rng){
 pedestal(g,6,3.6);const earth=solid('#665b55',{roughness:1});for(let j=0;j<3;j++)g.add(block(5.8,.28,3.3,solid(['#485e63','#796657','#a1876f'][j]),0,-1.8+j*.28));
 if(c.profile==='marine'){g.add(block(5.8,1.3,3.2,glass('#4b8194',.25),0,-.45));for(let j=0;j<5;j++)frond(g,-2+j, -.9,.5,.6,solid('#547e73'));for(let j=0;j<3;j++)g.add(path([[-2+j*1.6,-.9,-.4],[-2.3+j*1.6,.1,-.4],[-1.8+j*1.6,.35,-.4]],.07,earth));}
 else if(c.profile==='impact'||c.profile==='bombardment'){const crater=ring(.8,.25,earth,.25,-.7,0);crater.rotation.x=Math.PI/2;g.add(crater);for(let j=0;j<(c.profile==='bombardment'?5:1);j++){const rock=object(new THREE.DodecahedronGeometry(.25+j*.03),earth,2-j*.8,1.6+j*.05,-.7);g.add(rock,line([[2.5-j*.8,2.4,-.7],[.4-j*.1,-.6,0]],c.color,.3));}}
 else {const volcano=object(new THREE.CylinderGeometry(.25,1.4,1.6,8),earth,0,-.1,0);g.add(volcano);g.add(path([[0,.72,0],[.4,.1,.8],[1.3,-.7,1]],.08,lit(c.color)));const smoke=dust(90,'#9d8e82',()=>[(rng()-.5)*1.2,.8+rng()*1.2,(rng()-.5)*.8]);g.add(smoke);m.push((d,t)=>smoke.position.x=Math.sin(t*.2)*.14);}
 const marker=block(5.9,.035,3.35,solid(c.color,{transparent:true,opacity:.7}),0,-1.03);g.add(marker);m.push((d,t)=>{marker.material.opacity=.5+Math.sin(t*.3)*.06;marker.position.y=-1.03+Math.sin(t*.3)*.008;});
}
function fossilStudy(g,c,m){
 const slab=new THREE.Group();slab.rotation.x=.58;g.add(slab);slab.add(block(5.6,.35,3.8,solid('#8c8170',{roughness:1}),0,-.4));for(let j=0;j<4;j++)slab.add(block(5.65,.05,3.85,solid(j%2?'#736a60':'#a1947f'),0,-.7-j*.1));const bone=solid('#d6c7a5',{roughness:.8});
 if(c.profile==='benthic'){for(let j=0;j<6;j++){const x=-1.8+(j%3)*1.8,z=-.8+Math.floor(j/3)*1.6;const shell=ball(.5,bone,x,0,z);shell.scale.set(1,.25,.8);slab.add(shell);for(let k=0;k<6;k++){const a=k/5*Math.PI;slab.add(rod(V(x,-.02,z-.15),V(x+Math.cos(a)*.45,.07,z+Math.sin(a)*.35),.012,solid('#a4967c')));}}}
 else if(c.profile==='ediacaran'){for(let j=0;j<3;j++){const x=-1.8+j*1.8;slab.add(rod(V(x,-.15,-1.3),V(x,-.15,1.2),.035,bone));for(let k=0;k<8;k++)for(const s of [-1,1])slab.add(rod(V(x,-.14,-1.1+k*.3),V(x+s*Math.sin((k+1)/9*Math.PI)*.48,-.12,-.95+k*.3),.035,bone));}}
 else if(c.profile==='dinosaur'){slab.add(path([[-2.3,.15,0],[-1,.4,0],[.5,.5,0],[1.4,1.8,0],[2,1.9,0]],.08,bone));for(let j=0;j<7;j++)for(const s of [-1,1])slab.add(rod(V(-.9+j*.22,.45,0),V(-.8+j*.22,.2,s*.5),.03,bone));for(const s of [-1,1]){slab.add(rod(V(-.6,.35,s*.2),V(-.9,-.1,s*.7),.06,bone),rod(V(.5,.4,s*.2),V(.8,-.1,s*.6),.05,bone));}slab.add(ball(.2,bone,2,1.9,0));}
 else if(c.profile==='mandible'){slab.add(path([[-1.4,.1,-.6],[-1.25,.2,.5],[0,.1,1],[1.25,.2,.5],[1.4,.1,-.6]],.15,bone));for(const s of [-1,1])for(let j=0;j<5;j++)slab.add(block(.17,.22,.2,bone,s*(.3+j*.2),.3,.8-j*.25));}
 else if(c.profile==='fish'){for(let j=0;j<14;j++){const x=-2.1+j*.3;slab.add(ball(.08,bone,x,-.12,0));for(const s of [-1,1])slab.add(rod(V(x,-.1,0),V(x+.2,-.08,s*Math.sin(j/14*Math.PI)*.75),.025,bone));}const skull=ball(.38,bone,2,-.05,0);skull.scale.set(1.2,.3,.8);slab.add(skull);}
 else if(c.profile==='bird'){slab.add(rod(V(-.8,-.05,0),V(.8,-.05,0),.065,bone));for(const s of [-1,1]){slab.add(rod(V(0,-.05,0),V(-.5,-.05,s*1.3),.05,bone));for(let j=0;j<6;j++)slab.add(rod(V(-.5,-.05,s*.8),V(-2+j*.27,-.04,s*(1.1+j*.12)),.018,bone));}}
 else if(c.profile==='tooth'){for(let j=0;j<6;j++){const tooth=object(new THREE.ConeGeometry(.23,.7+(j%2)*.25,8),bone,-1.8+j*.65,.3,0);slab.add(tooth);}slab.add(path([[-2,-.1,0],[-.7,-.15,.35],[1,-.15,.3],[2,-.1,0]],.18,bone));}
 else if(c.profile==='skull'){const skull=ball(.85,bone,0,.4,0);skull.scale.set(1,.9,.75);slab.add(skull);for(const s of [-1,1])slab.add(ball(.2,ink(),s*.34,.4,.56));slab.add(block(.8,.2,.5,bone,0,-.2,.6));for(let i=0;i<5;i++)slab.add(block(.08,.16,.06,solid('#eee1c2'),-.25+i*.13,-.15,.88));}
 else {for(const s of [-1,1])for(let j=0;j<2;j++){const x=s*(.9+j*.5),z=(j-.5)*1.5;slab.add(ball(.26,bone,x,-.05,z));for(let k=0;k<4;k++)slab.add(rod(V(x,-.04,z),V(x+s*(.3+k*.08),-.04,z+(k-1.5)*.16),.035,bone));}}
 const lens=ring(.6,.055,metal(),2.2,1.4,.6);lens.rotation.x=.35;g.add(lens,rod(V(2.2,.8,.6),V(2.6,-.5,1),.065,warm()));m.push((d,t)=>lens.rotation.z=Math.sin(t*.2)*.025);
}
function microbialStudy(g,c,m){
 if(c.profile==='filament'){for(let j=0;j<10;j++){const cell=cyl(.35,.55,glass(c.color,.4),-2.5+j*.55,.2+Math.sin(j*.8)*.2,0);cell.rotation.z=Math.PI/2;g.add(cell);g.add(ring(.3,.025,solid(c.color),-2.5+j*.55,.2+Math.sin(j*.8)*.2,0));}m.push((d,t)=>g.rotation.y=Math.sin(t*.15)*.06);return;}
 const cell=new THREE.Group();g.add(cell);const shell=ball(1.7,glass(c.color,.2));shell.scale.set(1.3,.8,.8);cell.add(shell);if(c.profile==='thylakoid'){for(let i=0;i<6;i++){const q=cyl(.8,.055,solid('#6eaa86'),-.7+i*.24,0,0);q.rotation.z=Math.PI/2;cell.add(q);}}
 else if(c.profile==='ancestor'){cell.add(path(Array.from({length:55},(_,j)=>{const a=j/54*TAU*3;return[Math.cos(a)*.55,Math.sin(a)*.42,(j/54-.5)*1.2];}),.025,lit('#d5bd91')));for(let j=0;j<18;j++)cell.add(ball(.045,solid('#a2c7b0'),Math.cos(j*2.4)*1.25,Math.sin(j*2.4)*.7,(j%5-2)*.16));}
 else {const nucleus=ball(.55,solid('#ad88b4',{transparent:true,opacity:.65}),-.4,.15,.15);cell.add(nucleus);for(let j=0;j<6;j++){const q=ball(.23,solid('#c19d70'),Math.cos(j)*1.1,Math.sin(j)*.7,.25);q.scale.x=1.6;cell.add(q);}cell.add(path(Array.from({length:40},(_,j)=>{const a=j/39*TAU*2;return[Math.cos(a)*.5,Math.sin(a)*.45,j/39-.5];}),.025,lit('#d6c59d')));}
 for(let j=0;j<4;j++)g.add(rod(V(-1.8,-1.4+j*.08,0),V(1.8,-1.4+j*.08,0),.012,solid('#4b6c74')));m.push((d,t)=>cell.rotation.y=t*.035);
}
function forestCanopy(g,c,m,rand){
 pedestal(g,6,3.5);g.add(block(5.8,.22,3.3,solid('#394c3b'),0,-1.88));
 const bark=solid('#76654e',{roughness:.95}),foliage=[solid(c.color,{roughness:.95}),solid('#466e58',{roughness:.95}),solid('#70937a',{roughness:.9})];
 for(let j=0;j<7;j++){const x=-2.4+j*.8,z=Math.sin(j*2)*.85;
  if(c.profile==='spores'){frond(g,x,-1.7,z,.55+(j%3)*.15,foliage[j%3]);}
  else if(c.profile==='flowers'){const h=.2+(j%2)*.4;g.add(rod(V(x,-1.7,z),V(x,h,z),.025,foliage[0]));for(let k=0;k<5;k++){const a=k*TAU/5,p=ball(.17,solid('#cfacb5'),x+Math.cos(a)*.21,h,z+Math.sin(a)*.21);p.scale.y=.3;g.add(p);}g.add(ball(.09,solid('#e5c78b'),x,h+.03,z));}
  else {const h=2.1+rand()*.8;g.add(cyl(.045,h,bark,x,-1.7+h/2,z,.11));
   for(let k=0;k<5;k++){const a=k*2.4+j*.7,y=-.8+k*.43,r=(1-k*.12)*.48;const end=V(x+Math.cos(a)*r,y+.08,z+Math.sin(a)*r);g.add(rod(V(x,y-.12,z),end,.025,bark));const crown=object(new THREE.IcosahedronGeometry(.52,1),foliage[(k+j)%3],end.x,end.y+.22,end.z);crown.scale.set(1-k*.09,.55+k*.03,.75-k*.05);crown.rotation.y=a;g.add(crown);}
   const tip=object(new THREE.IcosahedronGeometry(.35,1),foliage[j%3],x,h-1.8,z);tip.scale.set(.5,1,.5);g.add(tip);
   if(c.profile==='seeds')g.add(object(new THREE.OctahedronGeometry(.13),solid('#b68f5f'),x+.35,-1.6,z+.4));
  }
 }
 for(let i=0;i<8;i++){const rock=object(new THREE.IcosahedronGeometry(.18+rand()*.16,0),solid('#6e7565',{roughness:1}),-2.5+rand()*5,-1.68,-1.25+rand()*2.5);rock.scale.y=.45;g.add(rock);}
 if(!['spores','flowers'].includes(c.profile))for(let i=0;i<4;i++)frond(g,-2+1.3*i,-1.7,1.1,.25,foliage[1]);
 m.push((d,t)=>g.rotation.y=Math.sin(t*.09)*.025);
}
function settlementWorkshop(g,c,m){
 pedestal(g,6,3.5);if(c.profile==='writing'){g.rotation.x=.35;const tablet=block(3.7,.4,2.9,solid('#b99770'),0,-.6);tablet.rotation.z=.08;g.add(tablet);for(let y=0;y<5;y++)for(let x=0;x<9;x++){const mark=object(new THREE.ConeGeometry(.055,.2,3),solid('#695846'),-1.5+x*.34,-.36,-1.1+y*.5);mark.rotation.z=Math.PI/2;g.add(mark);}g.add(rod(V(1,-.2,1),V(2.4,1.5,1),.06,warm()));}
 else if(c.profile==='bronze'){const bowl=cyl(.7,.3,warm(),-1,-.6,0,.9);g.add(bowl);const axe=block(.75,.12,.45,solid('#ac9568',{metalness:.75}),1.1,.4,0);axe.rotation.z=.3;g.add(axe,rod(V(.6,-1.6,0),V(1.4,.9,0),.07,warm()));for(let i=0;i<4;i++)g.add(cyl(.14,.5,solid('#c79f6e'),-.7+i*.4,-1.7,1));}
 else {for(let j=0;j<6;j++){const x=-2+j*.8;g.add(path([[x,-1.9,-1.4],[x,-1.7,0],[x,-1.9,1.4]],.07,solid('#907b58')));for(let i=0;i<3;i++){const z=-.9+i*.85;g.add(rod(V(x,-1.6,z),V(x,-.25,z),.025,solid('#aeaa6a')));for(const s of [-1,1])g.add(rod(V(x,-.6,z),V(x+s*.2,-.35,z),.035,solid('#d0bc83')));}}const roof=object(new THREE.ConeGeometry(.9,.8,4),solid('#937957'),1.7,.6,-1);roof.rotation.y=Math.PI/4;g.add(roof,block(1.1,1.3,1.1,solid('#84755d'),1.7,-.45,-1));}
 m.push((d,t)=>g.rotation.y=Math.sin(t*.1)*.02);
}
function scientificInstrument(g,c,m){
 pedestal(g,5.5,3.5);if(c.profile==='steam'){const boiler=cyl(.8,2.3,solid('#b48b65',{metalness:.7}),-.5,-.4,0);boiler.rotation.z=Math.PI/2;g.add(boiler);g.add(cyl(.2,1.4,ink(),-1.1,1,0));const flywheel=new THREE.Group();flywheel.position.set(1.6,-.1,.5);g.add(flywheel);flywheel.add(ring(.95,.09,metal()));for(let k=0;k<8;k++){const a=k*TAU/8;flywheel.add(rod(V(),V(Math.cos(a)*.9,Math.sin(a)*.9,0),.035,warm()));}g.add(rod(V(-.2,.1,.5),V(1.6,.1,.5),.045,metal()));m.push((d,t)=>flywheel.rotation.z=t*.3);}
 else {const stand=new THREE.Group();g.add(stand);stand.add(cyl(.1,2.5,warm(),0,-.9));for(let k=0;k<3;k++){const a=k*TAU/3;stand.add(rod(V(0,-.7,0),V(Math.cos(a)*1.6,-2,Math.sin(a)*1.6),.06,warm()));}const tube=cyl(.35,3.3,warm(),0,.8);tube.rotation.z=-.8;stand.add(tube);for(let i=0;i<4;i++){const q=ring(.35,.025,metal(),Math.sin(.8)*(-1.3+i*.85),.8+Math.cos(.8)*(-1.3+i*.85),0);q.rotation.z=-.8;q.rotation.x=Math.PI/2;stand.add(q);}stand.add(block(1.1,.07,.8,solid('#b9ac92'),1.6,-1,.5));m.push((d,t)=>stand.rotation.y=Math.sin(t*.12)*.035);}
}
function informationNetwork(g,c,m){
 if(['genome','crispr'].includes(c.profile)){const dna=new THREE.Group();g.add(dna);for(let j=0;j<30;j++){const y=-2.5+j/29*5,a=j*.55;for(const s of [-1,1])dna.add(ball(.085,lit(s<0?c.color:'#ccac83'),s*Math.cos(a)*.6,y,s*Math.sin(a)*.6));if(j%2===0)dna.add(rod(V(-Math.cos(a)*.6,y,-Math.sin(a)*.6),V(Math.cos(a)*.6,y,Math.sin(a)*.6),.035,solid(j%4?c.color:'#ad8eb7')));}if(c.profile==='crispr'){const jaw=block(1.5,.6,1.1,glass('#a3b7c9',.3),.8,.2,0);g.add(jaw);g.add(path([[2.4,1.4,0],[1.5,.8,0],[.8,.3,0]],.06,solid('#d8ba83')));}else for(const s of [-1,1])g.add(block(1.15,3.4,.12,solid('#2d4b5d'),s*2,0,-.6));m.push((d,t)=>dna.rotation.y=t*.06);return;}
 const nodes=[[-2,1,0],[2,1,-.5],[-2,-1.3,-.4],[2,-1.3,.4],[0,0,1]];nodes.forEach((p,i)=>{const computer=new THREE.Group();computer.position.set(...p);g.add(computer);computer.add(block(.9,.65,.55,metal()),block(.7,.4,.025,solid(c.color,{emissive:c.color,emissiveIntensity:.2}),0,.02,.29),block(1,.08,.65,ink(),0,-.45,.1));});for(let i=0;i<nodes.length;i++){const a=V(...nodes[i]),b=V(...nodes[(i+1)%nodes.length]);g.add(rod(a,b,.015,solid('#668b9f')));const packet=block(.11,.11,.11,lit(c.color));g.add(packet);m.push((d,t)=>packet.position.copy(a).lerp(b,(t*.12+i*.19)%1));}
}
function spaceObservatory(g,c,m){
 if(c.profile==='interferometer'){pedestal(g,6,5);const center=V(-1.5,-1,0);for(const end of [V(2.8,-1,0),V(-1.5,-1,-3.2)]){g.add(rod(center,end,.09,metal()),rod(center.clone().add(V(0,.13,0)),end.clone().add(V(0,.13,0)),.012,lit(c.color)));g.add(block(.45,.6,.45,ink(),end.x,end.y,end.z));}g.add(block(.8,.6,.8,metal(),center.x,-1,0));for(let j=0;j<4;j++){const q=path(Array.from({length:35},(_,i)=>[-2.4+i*.16,.3+Math.sin(i*.55+j)*.18,-2+j]),.012,solid('#9fbccf'));g.add(q);m.push((d,t)=>q.position.y=Math.sin(t*.7+j)*.04);}}
 else {const telescope=new THREE.Group();telescope.rotation.set(-.3,.25,.1);g.add(telescope);const gold=solid('#c8ac68',{metalness:.75,roughness:.28});for(let row=-2;row<=2;row++)for(let col=-2;col<=2;col++){if(Math.max(Math.abs(row),Math.abs(col),Math.abs(row+col))>2||(!row&&!col))continue;const tile=object(new THREE.CylinderGeometry(.42,.42,.05,6),gold,col*.74+row*.37,row*.65,0);tile.rotation.x=Math.PI/2;telescope.add(tile);}for(const p of [[-1.5,-1,0],[1.5,-1,0],[0,1.6,0]])telescope.add(rod(V(...p),V(0,0,1.65),.025,metal()));telescope.add(cyl(.18,.25,ink(),0,0,1.65));for(let j=0;j<5;j++){const shield=block(4.4-j*.12,.025,2.3-j*.08,solid(j%2?'#b4b2c0':'#8d879c',{metalness:.65,roughness:.4}),0,-1.8-j*.12,-.7);shield.rotation.z=.08;g.add(shield);}m.push((d,t)=>telescope.rotation.y=.25+Math.sin(t*.09)*.035);}
}

function geologicSection(g,c,m){
  pedestal(g,5.8,3.6);
  const layers=[['#2f4858',.7],['#5b7c8c',.55],['#8b7a5f',.6],['#b09a74',.5],['#c9b98f',.45],['#7f8a63',.35]];
  let y=-1.9;
  for(const [color,height] of layers){g.add(block(5.4,height,2.2,solid(color,{roughness:1}),0,y+height/2));y+=height;}
  const top=y;
  g.add(block(4.2,.05,2.4,solid(c.color,{roughness:.8}),0,top+.03));
  for(let i=0;i<4;i++)g.add(object(new THREE.ConeGeometry(.28,.6,5),solid('#8f9b84'),-1.5+i*.85,top+.3,-.2));
  g.add(cyl(.1,3.6,solid('#d6c9ae'),2.15,0,0));
  g.add(line([[-2.6,top-.62,-1.6],[2.6,top-.62,1.5]],'#e3cf9d',.3));
  m.push((d,t)=>{});
}
function chronometer(g,c,m){
  pedestal(g,4.6,3.2);
  if(c.variant==='hourglass'){
    const steel=metal();
    g.add(cyl(.9,.05,steel,0,1.9),cyl(.9,.05,steel,0,-1.9));
    for(const s of [-1,1])g.add(rod(V(s*.85,-1.9,0),V(s*.85,1.9,0),.035,steel));
    g.add(object(new THREE.ConeGeometry(.62,1.5,32,1,true),glass(c.color,.22),0,1.05,0),object(new THREE.ConeGeometry(.62,1.5,32,1,true),glass(c.color,.22),0,-1.05,0).rotateX(Math.PI));
    const sand=dust(70,c.color,()=>[(Math.random()-.5)*.05,-.8+(Math.random())*1.6,(Math.random()-.5)*.05]);g.add(sand);
    m.push((d,t)=>{sand.rotation.y=t*.05;});
  } else if(c.variant==='calendar'){
    g.add(block(4.4,2.9,.2,solid('#26415a'),0,.1,-.6));
    for(let row=0;row<3;row++)for(let col=0;col<5;col++){const on=(row*5+col)%7===0;g.add(block(.62,.5,.05,solid(on?c.color:'#a9c3d2',{emissive:on?c.color:'#26415a',emissiveIntensity:.2}),-1.44+col*.72,.95-row*.8,-.46));}
    const sun=ball(.14,lit('#e5c483'),2.3,1.7,-.4);g.add(sun);
    g.add(path([[2.3,-1.2,-.4],[1.6,1.9,-.4],[.2,2.2,-.4]],.012,glass('#e5c483',.5)));
    m.push((d,t)=>{sun.position.x=2.3-Math.sin(t*.25)*.5;});
  } else {
    g.add(cyl(2.1,.16,metal(),0,0,0));
    g.add(cyl(1.85,.05,solid('#e2e9e6'),0,.1,0));
    for(let i=0;i<12;i++){const a=i/12*TAU;g.add(rod(V(Math.cos(a)*1.55,.14,Math.sin(a)*1.55),V(Math.cos(a)*1.82,.14,Math.sin(a)*1.82),.026,ink()));}
    const pivot=new THREE.Group();pivot.position.set(0,.17,0);g.add(pivot);
    pivot.add(rod(V(),V(.9,0,-.35),.035,ink()),rod(V(),V(-.35,0,.62),.05,ink()));
    g.add(rod(V(-1.9,-1.5,0),V(-1.9,1.4,0),.06,metal()),ball(.18,metal(),-1.9,1.55));
    m.push((d,t)=>{pivot.rotation.y=-t*.15;});
  }
}
function lineageTree(g,c,m){
  pedestal(g,5.8,3.6);
  const trunk=solid('#8a7a62',{roughness:.9}),leaf=solid(c.color,{roughness:.7}),nodes=[];
  g.add(path([[-2.2,-1.4,0],[-.9,-.6,.2],[.5,.2,-.2],[1.9,1.2,.1]],.09,trunk));
  for(let i=0;i<4;i++){
    const x=-1.5+i*1.1,y=-.9+i*.7;
    g.add(path([[x,y,0],[x+.5,y+.9,.4],[x+.9,y+1.3,.5]],.05,trunk));
    const node=ball(.18,leaf,x+.92,y+1.36,.5);g.add(node);nodes.push(node);
  }
  for(let i=0;i<3;i++){const x=-.6+i*1.4;g.add(path([[x,.2+i*.2,0],[x-.4,-.7-i*.1,.3],[x-.7,-1.2-i*.2,.4]],.04,trunk));g.add(ball(.12,leaf,x-.72,-1.24-i*.2,.4));}
  m.push((d,t)=>{for(let i=0;i<nodes.length;i++)nodes[i].scale.setScalar(1+Math.sin(t*.6+i)*.06);});
}
function futureArc(g,c,m){
  pedestal(g,6,3.6);
  for(let i=0;i<26;i++){
    const t=i/25,x=-2.6+t*5.2,y=1.9-t*3.6,tint=new THREE.Color(c.color).lerp(new THREE.Color('#151d2b'),t);
    g.add(ball(.16*(1-t*.85),lit(tint),x,y,-.2+Math.sin(i*1.7)*.25));
  }
  g.add(path([[-2.6,1.9,-.2],[0,.4,-.1],[2.6,-1.7,0]],.012,glass(c.color,.35)));
  const cone=object(new THREE.ConeGeometry(1.5,3.4,24,1,true),glass(c.color,.07),2.2,-.7,.5);cone.rotation.z=-.6;g.add(cone);
  m.push((d,t)=>{cone.rotation.y=t*.06;});
}
function impactRecord(g,c,m){
  pedestal(g,6,3.8);
  for(let j=0;j<3;j++)g.add(block(5.8,.36,3.4,solid(['#46565a','#7a6b58','#a08a6d'][j]),0,-1.8+j*.36));
  g.add(object(new THREE.CylinderGeometry(.55,1.05,.42,24,1,true),solid('#4e4a43',{roughness:1,side:THREE.DoubleSide}),0,.25,0));
  for(let i=0;i<9;i++){const a=i/9*TAU;g.add(path([[0,.4,0],[Math.cos(a)*1.4,.7,Math.sin(a)*1.4],[Math.cos(a)*2.5,.55,Math.sin(a)*2.5]],.05,solid('#8b7a63')));}
  const dustCloud=dust(90,c.color,()=>[(Math.random()-.5)*4.4,.9+(Math.random()-.5)*1.4,(Math.random()-.5)*3]);g.add(dustCloud);
  g.add(block(5.9,.045,3.45,solid(c.color,{transparent:true,opacity:.65}),0,-.72));
  m.push((d,t)=>{dustCloud.rotation.y=t*.05;});
}

const templates={'quantum-field':quantumField,'particle-reaction':particleReaction,'nuclear-network':nuclearNetwork,'radiation-front':radiationFront,'cosmic-web':cosmicWeb,'galaxy-assembly':galaxyAssembly,'accretion-engine':accretionEngine,'stellar-cycle':stellarCycle,'planet-foundry':planetFoundry,'ocean-section':oceanSection,'atmosphere-section':atmosphereSection,'ice-landscape':iceLandscape,'catastrophe-section':catastropheSection,'fossil-study':fossilStudy,'microbial-study':microbialStudy,'forest-canopy':forestCanopy,'settlement-workshop':settlementWorkshop,'scientific-instrument':scientificInstrument,'information-network':informationNetwork,'space-observatory':spaceObservatory,'geologic-section':geologicSection,chronometer,'lineage-tree':lineageTree,'future-arc':futureArc,'impact-record':impactRecord};
export function createChronicleObject(entry,invalidate=()=>{},visual=entry.visual){
 const config=visual?{...visual,color:visual.color||'#8fb3c9'}:visual;
 if(!entry?.quantity||!Number.isFinite(entry.quantity.value)||entry.quantity.value===null||entry.chronology?.plot===false)throw new Error('A chronicle object requires a finite, plottable time reference.');
 if(!config||!templates[config.template])throw new Error(`Unknown chronicle template: ${config?.template}`);
 const group=new THREE.Group(),model=new THREE.Group(),motions=[];group.name=`chronicle:${entry.id}`;model.name=config.template;group.add(model);templates[config.template](model,config,motions,seeded(entry.id));
 const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(V()),center=bounds.getCenter(V());const scale=7.5/Math.max(size.x,size.y,size.z,1);model.scale.setScalar(scale);model.position.copy(center).multiplyScalar(-scale);
 const title=dataLabel(entry.title,'#c4dce9',6.4);title.userData.hudLabel=true;title.position.set(0,-4.02,.5);group.add(title);const text=String(entry.displayValue||'').split('（')[0].trim(),readout=dataLabel(text.length>40?text.slice(0,39)+'…':text,'#8eb5ca',6.1);readout.userData.hudLabel=true;readout.position.set(0,-4.65,.5);group.add(readout);
 group.userData={entryId:entry.id,template:config.template,caption:config.caption,note:config.note,referenceIllustration:true};invalidate();return{group,update(delta,time){const d=Number.isFinite(delta)?Math.min(Math.max(delta,0),.1):0,t=Number.isFinite(time)?time:0;for(const fn of motions)fn(d,t);}};
}
