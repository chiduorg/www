import * as THREE from 'three';
import {createTextureStore} from '/engine/renderer/assets.js';
import {entryKey} from '/engine/content/presentation.js';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';
import {createSpatialObject} from './object-templates.js';
import {createFeaturedOverride} from './featured-overrides.js';
import {attachExternalModel} from './external-models.js';
let seed=74;
const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const sphere=new THREE.SphereGeometry(1,128,96);
const textures=createTextureStore({invalidate:()=>invalidate()});
let invalidate=()=>{};
export function setModelInvalidation(callback){invalidate=callback;}
function texture(name,color=true){return textures.load(name,{color});}
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,metalness:.05,...extra});
const mesh=(geo,material)=>new THREE.Mesh(geo,material);
const sunDirection=new THREE.Vector3(-.9,.6,1.5).normalize();
const vertex=`varying vec2 vUv; varying vec3 vNormal; varying vec3 vPosition;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 p=modelMatrix*vec4(position,1.);vPosition=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`;
function atmosphere(radius=1.027,color=0x478ef0,strength=.6){return mesh(new THREE.SphereGeometry(radius,96,64),new THREE.ShaderMaterial({vertexShader:vertex,transparent:true,depthWrite:false,side:THREE.BackSide,blending:THREE.AdditiveBlending,uniforms:{tint:{value:new THREE.Color(color)},lightDirection:{value:sunDirection},strength:{value:strength}},fragmentShader:`uniform vec3 tint;uniform vec3 lightDirection;uniform float strength;varying vec3 vNormal;varying vec3 vPosition;void main(){vec3 n=normalize(vNormal),view=normalize(cameraPosition-vPosition);float rim=pow(max(0.,1.-abs(dot(n,view))),3.5);float day=.2+.8*max(dot(n,lightDirection),0.);gl_FragColor=vec4(tint,rim*day*strength);}`}));}
function earth(){
  const root=new THREE.Group();root.rotation.set(0,-.8,.12);
  root.add(mesh(sphere,new THREE.ShaderMaterial({uniforms:{dayMap:{value:texture('earth-day.jpg')},nightMap:{value:texture('earth-night.jpg')},lightDirection:{value:sunDirection}},vertexShader:vertex,
  fragmentShader:`uniform sampler2D dayMap;uniform sampler2D nightMap;uniform vec3 lightDirection;varying vec2 vUv;varying vec3 vNormal;varying vec3 vPosition;
  void main(){vec3 n=normalize(vNormal),view=normalize(cameraPosition-vPosition);float d=dot(n,lightDirection),sunlight=smoothstep(-.1,.8,d);vec3 day=texture2D(dayMap,vUv).rgb,night=texture2D(nightMap,vUv).rgb;float ocean=smoothstep(.02,.15,day.b-day.r);vec3 c=day*(.025+sunlight*1.05);float darkness=1.-smoothstep(-.24,.12,d);c+=night*darkness*1.15;float spec=pow(max(dot(reflect(-lightDirection,n),view),0.),48.)*ocean*max(d,0.);c+=vec3(.8,.87,1.)*spec*.35;float rim=pow(1.-max(dot(n,view),0.),4.5);c+=vec3(.055,.19,.45)*rim*(.3+.7*sunlight);gl_FragColor=vec4(c,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`})));
  const clouds=mesh(new THREE.SphereGeometry(1.006,96,64),new THREE.MeshPhongMaterial({color:0xffffff,alphaMap:texture('earth-clouds.jpg',false),transparent:true,opacity:.79,depthWrite:false,shininess:5}));clouds.rotation.y=.035;root.add(clouds,atmosphere());return root;
}
const softDot=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.12,'rgba(255,255,255,.9)');r.addColorStop(.35,'rgba(255,255,255,.2)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);})();
function glow(color,size,opacity=.4){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:softDot,color,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending}));s.scale.set(size,size,1);return s;}
function galaxy(){
  const root=new THREE.Group(),positions=[],colors=[];
  for(let i=0;i<18000;i++){
    const r=Math.pow(random(),1.25),arm=(i%4)/4*Math.PI*2+r**.65*5.2;
    const scatter=(random()+random()+random()-1.5)*(.32+r*.4);
    const angle=arm+scatter+(i%7===0?(random()-.5)*2:0);
    positions.push(Math.cos(angle)*r,(random()-.5)*.07*(1-r),Math.sin(angle)*r);
    const color=new THREE.Color().setHSL(.59-(1-r)**4*.47,.23+random()*.3,.45+random()*.4);
    colors.push(color.r,color.g,color.b);
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  root.add(new THREE.Points(geo,new THREE.PointsMaterial({map:softDot,size:2,vertexColors:true,transparent:true,opacity:.75,depthWrite:false,blending:THREE.AdditiveBlending})),new THREE.Points(geo,new THREE.PointsMaterial({map:softDot,size:7,vertexColors:true,transparent:true,opacity:.065,depthWrite:false,blending:THREE.AdditiveBlending})),glow(0xffd9a2,.5,.65));
  const tilted=new THREE.Group();root.rotation.x=.62;root.rotation.z=.22;tilted.add(root);return tilted;
}
export function createObject(entry){
  if(!Number.isFinite(entry.quantity?.value)||entry.quantity.value<=0)throw new Error('该条目没有可比较的空间长度');
  const override=createFeaturedOverride(entry);if(override)return override;
  if(entry.visual?.scene==='space.object')return createSpatialObject(entry,entry.visual);
  const group=new THREE.Group(),id=entryKey(entry);
  if(id==='earth')group.add(earth());
  else if(['moon','jupiter','saturn'].includes(id)){group.add(mesh(sphere,new THREE.MeshPhongMaterial({map:texture(id+'.jpg'),bumpMap:id==='moon'?texture('moon.jpg',false):null,bumpScale:id==='moon'?.012:0,shininess:id==='moon'?1:8,specular:0x181818})));if(id==='saturn'){const geometry=new THREE.RingGeometry(1.15,2.05,180);const positions=geometry.attributes.position,uv=geometry.attributes.uv;for(let i=0;i<positions.count;i++){const radius=Math.hypot(positions.getX(i),positions.getY(i));uv.setXY(i,(radius-1.15)/.9,.5);}const ring=mesh(geometry,new THREE.MeshBasicMaterial({map:texture('saturn-ring.png'),side:THREE.DoubleSide,transparent:true,opacity:.94,depthWrite:false}));ring.rotation.set(Math.PI*.32,.15,-.3);group.add(ring);}}
  else if(id==='sun'){group.add(mesh(sphere,new THREE.MeshBasicMaterial({map:texture('sun.jpg'),color:0xffd4a0})),glow(0xff7624,3.6,.6),glow(0xffac54,2.6,.35),atmosphere(1.055,0xff9d38,.75));}
  else if(id==='milky-way')group.add(galaxy());
  else if(id==='observable-universe'){const positions=[],colors=[];for(let i=0;i<7500;i++){const a=random()*Math.PI*2,u=random()*2-1,r=Math.cbrt(random()),v=Math.sqrt(1-u*u);positions.push(Math.cos(a)*v*r,u*r,Math.sin(a)*v*r);const c=new THREE.Color().setHSL(.52+random()*.16,.3,.5+random()*.4);colors.push(c.r,c.g,c.b);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));group.add(new THREE.Points(g,new THREE.PointsMaterial({map:softDot,size:1.9,transparent:true,depthWrite:false,vertexColors:true,blending:THREE.AdditiveBlending})),mesh(sphere,new THREE.MeshBasicMaterial({color:0x6085a6,transparent:true,opacity:.025,wireframe:true})));}
  else if(id==='solar-system'){group.add(mesh(new THREE.SphereGeometry(.025,24,24),new THREE.MeshBasicMaterial({color:0xffd497})),glow(0xffc56d,.2,.8));for(let i=1;i<9;i++){const points=[],r=(i/9)**1.3;for(let j=0;j<180;j++){const a=j/180*Math.PI*2;points.push(new THREE.Vector3(Math.cos(a)*r,0,Math.sin(a)*r));}group.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:0x57687f,transparent:true,opacity:.55})));const a=i*1.75,p=mesh(new THREE.SphereGeometry(i<5?.008:.016,16,12),mat(i<5?'#b9aa92':'#beb09f'));p.position.set(Math.cos(a)*r,0,Math.sin(a)*r);group.add(p);}const tilted=new THREE.Group();group.rotation.x=.5;group.rotation.z=.15;tilted.add(group);return tilted;}
  else if(id==='dna'){const curves=[[],[]];for(let i=0;i<70;i++){const t=i/69;for(let side=0;side<2;side++)curves[side].push(new THREE.Vector3(Math.cos(t*15+side*Math.PI)*.34,t*1.8-.9,Math.sin(t*15+side*Math.PI)*.34));if(i%3===0){const a=curves[0].at(-1),b=curves[1].at(-1),c=mesh(new THREE.CylinderGeometry(.019,.019,a.distanceTo(b),10),mat(i%2?'#c4a57c':'#aa8ebd'));c.position.copy(a.clone().add(b).multiplyScalar(.5));c.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize());group.add(c);}}curves.forEach((p,i)=>group.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p),150,.035,10,false),mat(i?'#deb186':'#84cdd6',{metalness:.25,roughness:.35}))));}
  else if(id==='cell'){
    // CC0 解剖教学模型：切片式细胞，含核、线粒体、高尔基体与内质网；保留极淡的细胞膜辉光。
    const placeholder=mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
    group.add(placeholder,atmosphere(1.06,0x71c6bf,.2));
    attachExternalModel(group,'/media/models/cell-real.glb',{fit:2.15,onReady:()=>group.remove(placeholder)});
    group.userData.framePadding=.62;group.userData.motionRate=.012;
  }
  else if(id==='virus'){
    // 包膜病毒示意：带轻微起伏的脂质包膜、内部核衣壳与糖蛋白刺突；不是某一种病毒的精确结构。
    const envelopeGeo=new THREE.SphereGeometry(1,96,64),pos=envelopeGeo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i),n=Math.sin(x*7.5+y*5.2)*Math.sin(z*6.1-y*4.4)*.022;
      const len=Math.sqrt(x*x+y*y+z*z)||1;pos.setXYZ(i,x*(1+n)/len,y*(1+n)/len,z*(1+n)/len);
    }
    envelopeGeo.computeVertexNormals();
    const envelope=mesh(envelopeGeo,new THREE.MeshPhysicalMaterial({color:0x7fa9b8,transparent:true,opacity:.38,roughness:.32,metalness:.02,side:THREE.DoubleSide,depthWrite:false,clearcoat:.75,clearcoatRoughness:.18}));
    group.add(envelope,atmosphere(1.035,0x8fd4de,.22));
    // 包膜表面的蛋白颗粒，先给表面一层细密质感，避免“光滑塑料球”。
    const bumps=new THREE.InstancedMesh(new THREE.SphereGeometry(.022,8,6),mat('#9fc6cb',{roughness:.45}),360),matrix=new THREE.Matrix4();
    for(let i=0;i<360;i++){const a=Math.PI*(3-Math.sqrt(5))*i,y=1-(i/359)*2,r=Math.sqrt(1-y*y);matrix.makeTranslation(Math.cos(a)*r*1.005,y*1.005,Math.sin(a)*r*1.005);bumps.setMatrixAt(i,matrix);}group.add(bumps);
    const capsid=mesh(new THREE.SphereGeometry(.58,64,48),mat('#64828b',{roughness:.55,metalness:.05,transparent:true,opacity:.9}));
    group.add(capsid);
    // 核衣壳内部的遗传物质：一条细的螺旋，不追求真实碱基对数量。
    const rnaPoints=[];
    for(let i=0;i<80;i++){const t=i/79;rnaPoints.push(new THREE.Vector3(Math.cos(t*22)*.16*(1-t*.45),t*.82-.41,Math.sin(t*22)*.16*(1-t*.45)));}
    group.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rnaPoints),120,.018,8,false),mat('#cf9da7',{roughness:.4,metalness:.1})));
    // 糖蛋白刺突：锥形茎 + 顶端球状受体结合域，沿球面均匀分布。
    for(let i=0;i<60;i++){
      const a=Math.PI*(3-Math.sqrt(5))*i,y=1-(i/59)*2,r=Math.sqrt(1-y*y),p=new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r);
      const head=mesh(new THREE.SphereGeometry(.065+(i%4)*.006,18,14),mat(i%3===0?'#789fa5':'#6f969c',{roughness:.45,metalness:.03}));
      const stem=mesh(new THREE.CylinderGeometry(.022,.012,.52,12),mat('#7ba7ad',{roughness:.42,metalness:.04}));
      stem.position.copy(p.clone().multiplyScalar(1.27));stem.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),p);
      head.position.copy(p.clone().multiplyScalar(1.54));group.add(stem,head);
    }
    group.add(glow(0x9dd9e4,2.9,.16));
    group.userData.framePadding=.92;group.userData.motionRate=.016;
  }
  else if(id==='atom'){
    // 量子模型示意：氢原子 1s 球对称概率云 + 2p 激发态双叶；不画行星式轨道。
    const group=new THREE.Group();
    // 氢-1 原子核只有一个质子，没有中子；核的半径在画面中被刻意放大，否则不可见。
    const nucleus=mesh(new THREE.SphereGeometry(.045,32,24),mat('#d98b76',{roughness:.28,metalness:.12,emissive:'#4a130c',emissiveIntensity:.45}));
    group.add(nucleus,glow(0xff9d7a,.32,.45));
    const cloudPoints=[],cloudColors=[],pPositions=[];
    const push=(p,c)=>{cloudPoints.push(p.x,p.y,p.z);cloudColors.push(c.r,c.g,c.b);};
    const sColor=new THREE.Color(0x74b8d8),pColor=new THREE.Color(0xd7a96e);
    // 1s：球对称的径向概率分布，越靠外点越稀。
    for(let i=0;i<3600;i++){
      const u=random()*2-1,a=random()*Math.PI*2,r=Math.pow(random(),.68)*1.55,v=Math.sqrt(1-u*u);
      push(new THREE.Vector3(Math.cos(a)*v*r,u*r,Math.sin(a)*v*r),sColor);
    }
    // 2p：沿 x / y / z 的三组双叶哑铃形，表示激发态的方向性。
    for(const axis of ['x','y','z']) for(let i=0;i<900;i++){
      const sign=i%2?1:-1,spread=Math.pow(random(),1.6)*.45,t=(random()-.5)*.38;
      const p=axis==='x'?new THREE.Vector3(sign*(1.2+spread),t,(random()-.5)*.34):axis==='y'?new THREE.Vector3((random()-.5)*.34,sign*(1.2+spread),t):new THREE.Vector3(t,(random()-.5)*.34,sign*(1.2+spread));
      push(p,pColor);pPositions.push(p.x,p.y,p.z);
    }
    const cloudGeo=new THREE.BufferGeometry();cloudGeo.setAttribute('position',new THREE.Float32BufferAttribute(cloudPoints,3));cloudGeo.setAttribute('color',new THREE.Float32BufferAttribute(cloudColors,3));
    const cloud=new THREE.Points(cloudGeo,new THREE.PointsMaterial({map:softDot,size:2.4,vertexColors:true,transparent:true,opacity:.9,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,sizeAttenuation:false}));cloud.renderOrder=5;
    const halo=new THREE.Points(cloudGeo,new THREE.PointsMaterial({map:softDot,size:7,vertexColors:true,transparent:true,opacity:.12,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,sizeAttenuation:false}));halo.renderOrder=4;
    const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.Float32BufferAttribute(pPositions,3));
    const pCloud=new THREE.Points(pGeo,new THREE.PointsMaterial({map:softDot,color:0xe0b273,size:3.4,transparent:true,opacity:.9,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,sizeAttenuation:false}));pCloud.renderOrder=6;
    group.add(cloud,halo,pCloud,glow(0x86cbff,1.15,.22));
    if(typeof window!=='undefined')window.__atomGroup=group;
    group.userData.framePadding=.06;group.userData.update=(delta,elapsed)=>{cloud.rotation.y=elapsed*.08;halo.rotation.y=elapsed*.08;nucleus.rotation.y=elapsed*.2;};
    return group;
  }
  else if(id==='human'){
    // CC0 写实人体基础网格：1.80 m A-pose，按条目口径缩放到 1.70 m；保留不可见占位盒稳定尺度。
    const group=new THREE.Group();
    const placeholder=mesh(new THREE.BoxGeometry(.62,1.7,.34),new THREE.MeshBasicMaterial({visible:false}));
    group.add(placeholder);
    attachExternalModel(group,'/media/models/human-real.glb',{fit:1.7,axis:'y',onReady:()=>group.remove(placeholder)});
    group.userData.framePadding=.24;
    group.userData.reference={start:[0,-.85,0],end:[0,.85,0],length:1.7,axis:'y',kind:'chosen-reference-height'};
    return group;
  }
  else{group.add(mesh(id==='sand-grain'?new THREE.IcosahedronGeometry(1,2):sphere,mat(id==='sand-grain'?'#d1bda0':'#92a9c7',{roughness:id==='sand-grain'?.95:.3,metalness:.15})));if(id==='planck'||id==='proton')group.add(glow(0x9db6ff,2.8,.3));}
  const wrapper=new THREE.Group();wrapper.add(group);
  wrapper.userData.motionRate=id==='earth'?.045:id==='sun'?.012:id==='jupiter'?.055:id==='saturn'?.035:id==='milky-way'?.009:.018;
  wrapper.userData.framePadding=group.userData.framePadding;
  wrapper.userData.frameSize=group.userData.frameSize;
  wrapper.userData.reference=group.userData.reference;
  if(id==='atom'&&typeof window!=='undefined')window.__atomWrapper=wrapper;
  wrapper.userData.spinPath=id==='earth'?[0,0]:[0];
  wrapper.userData.kind=id;
  wrapper.userData.update=group.userData.update;
  wrapper.userData.parameters=group.userData.parameters;
  return wrapper;
}
export function animateObject(model,delta){
  if(model.userData.update){model.userData.elapsed=(model.userData.elapsed||0)+delta;model.userData.update(delta,model.userData.elapsed);return;}
  if(!model.userData.motionRate)return;
  let target=model;
  for(const index of model.userData.spinPath)target=target.children[index];
  target.rotation.y+=delta*model.userData.motionRate;
  if(model.userData.kind==='earth'&&target.children[1])target.children[1].rotation.y+=delta*.008;
}
export function decorateScene(scene){
  const ambient=new THREE.AmbientLight(0x94a7cb,.32);scene.add(ambient);
  const key=new THREE.DirectionalLight(0xfff5e7,3.1);key.position.copy(sunDirection.clone().multiplyScalar(10));scene.add(key);
  const fill=new THREE.DirectionalLight(0x6e95e5,.12);fill.position.set(5,-2,-7);scene.add(fill);
  const p=[],colors=[];for(let i=0;i<1200;i++){p.push((random()-.5)*65,(random()-.5)*65,-18-random()*15);const c=new THREE.Color().setHSL(.56+random()*.1,.1+random()*.2,.25+random()*.55);colors.push(c.r,c.g,c.b);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const dust=new THREE.Points(g,new THREE.PointsMaterial({map:softDot,vertexColors:true,size:1.25,transparent:true,opacity:.6,depthWrite:false,blending:THREE.AdditiveBlending}));scene.add(dust);
  const apply=theme=>{
    const light=theme==='light';
    ambient.color.set(light?0xffffff:0x94a7cb);ambient.intensity=light?.72:.32;
    key.color.set(light?0xffe9cf:0xfff5e7);key.intensity=light?2.35:3.1;
    fill.color.set(light?0xcfe2f2:0x6e95e5);fill.intensity=light?1.1:.12;
    dust.material.blending=light?THREE.NormalBlending:THREE.AdditiveBlending;
    dust.material.opacity=light?.2:.6;dust.material.color.set(light?0x61798a:0xffffff);
  };
  apply(currentTheme());
  const stop=watchTheme(apply);
  scene.userData.stopSpaceTheme=stop;
  return apply;
}
