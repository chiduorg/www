import * as THREE from 'three';
import {pointTexture,glowSprite} from '/engine/renderer/effects.js';
import {createEpochBackdrop,epochFor,epochs} from './backdrop.js';
import {createSubjectGallery} from '/engine/renderer/subjects.js';
import {timeSubjects} from './subjects.js';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';
export function createTimeScene(viewport){
  const {scene,world}=viewport,texture=pointTexture(),backdrop=createEpochBackdrop(scene),gallery=createSubjectGallery(viewport,timeSubjects),root=new THREE.Group();world.add(root);root.position.set(.9,-.4,0);root.rotation.set(.63,-.15,-.24);
  const rings=[],colors=[0xdeb178,0x9378aa,0x789dbc,0xb5cbd6,0x8772ad,0xc89e76,0x788cab];
  for(let i=0;i<7;i++){
    const radius=1.9+i*.75;const ring=new THREE.Mesh(new THREE.TorusGeometry(radius,.008,6,220),new THREE.MeshBasicMaterial({color:colors[i],transparent:true,opacity:.28}));ring.rotation.set(i*.045,i*.024,0);root.add(ring);rings.push(ring);
    const marks=[];for(let j=0;j<96;j++){const a=j/96*Math.PI*2,r=radius+.02;marks.push(Math.cos(a)*r,Math.sin(a)*r,0,Math.cos(a)*(r+(j%8===0?.12:.045)),Math.sin(a)*(r+(j%8===0?.12:.045)),0);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(marks,3));const ticks=new THREE.LineSegments(geo,new THREE.LineBasicMaterial({color:colors[i],transparent:true,opacity:.2}));ticks.rotation.copy(ring.rotation);root.add(ticks);
  }
  const core=glowSprite(texture,0xffd59b,3.2,.6);root.add(core);const center=new THREE.Mesh(new THREE.SphereGeometry(.1,24,16),new THREE.MeshBasicMaterial({color:0xffe0af}));root.add(center);
  const positions=[],particleColors=[];let seed=91;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<4200;i++){const r=Math.pow(rand(),.55)*7.5,a=rand()*Math.PI*2;positions.push(Math.cos(a)*r,Math.sin(a)*r,(rand()-.5)*2);const color=new THREE.Color().setHSL(.11+rand()*.48,.15+rand()*.35,.45+rand()*.45);particleColors.push(color.r,color.g,color.b);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(particleColors,3));const stars=new THREE.Points(geometry,new THREE.PointsMaterial({map:texture,vertexColors:true,size:2.4,transparent:true,opacity:.75,depthWrite:false,blending:THREE.AdditiveBlending}));root.add(stars);
  const backgroundPositions=[];for(let i=0;i<1000;i++)backgroundPositions.push((rand()-.5)*50,(rand()-.5)*60,-20-rand()*15);const bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.Float32BufferAttribute(backgroundPositions,3));const bgStars=new THREE.Points(bg,new THREE.PointsMaterial({map:texture,color:0x8babc8,size:1.8,transparent:true,opacity:.5,depthWrite:false,blending:THREE.AdditiveBlending}));scene.add(bgStars);
  const layouts=[];
  for(let stage=0;stage<8;stage++){
    const array=new Float32Array(positions.length);
    for(let i=0;i<4200;i++){
      const a=rand()*Math.PI*2,r=Math.sqrt(rand())*7.6;let x,y,z;
      if(stage===0){const u=rand()*2-1,v=Math.sqrt(1-u*u);x=Math.cos(a)*v*r;y=u*r;z=Math.sin(a)*v*r;}
      else if(stage===1){x=(rand()-.5)*20;y=Math.sin(x*.65+i*.04)*2+(rand()-.5)*2;z=(rand()-.5)*7;}
      else if(stage===2){x=(rand()-.5)*24;y=(rand()-.5)*17;z=(rand()-.5)*8;}
      else if(stage===3){const cluster=i%5,angle=cluster*2.3;const spread=rand()**2*2.3;x=Math.cos(angle)*5+Math.cos(a)*spread;y=Math.sin(angle)*3+Math.sin(a)*spread;z=(rand()-.5)*spread;}
      else if(stage===4){const arm=i%3/3*Math.PI*2+r*.68+(rand()-.5)*.5;x=Math.cos(arm)*r;y=Math.sin(arm)*r;z=(rand()-.5)*.24;}
      else if(stage===5){const arm=a+r*.7;x=Math.cos(arm)*r;y=Math.sin(arm)*r;z=(rand()-.5)*.12;}
      else if(stage===6){const u=rand()*2-1,v=Math.sqrt(1-u*u),radius=4.8+Math.sin(a*9+u*8)*.08;x=Math.cos(a)*v*radius;y=u*radius;z=Math.sin(a)*v*radius;}
      else{const branch=i%9,f=rand(),ax=Math.sin(branch*9.3)*8,ay=Math.cos(branch*7.1)*5,bx=Math.sin((branch+1)*9.3)*8,by=Math.cos((branch+1)*7.1)*5;x=ax+(bx-ax)*f+(rand()-.5)*.55;y=ay+(by-ay)*f+(rand()-.5)*.55;z=(rand()-.5)*1.5;}
      array[i*3]=x;array[i*3+1]=y;array[i*3+2]=z;
    }
    layouts.push(array);
  }
  const diffuse=new THREE.Points(geometry,new THREE.PointsMaterial({map:texture,vertexColors:true,size:12,transparent:true,opacity:.08,depthWrite:false,blending:THREE.AdditiveBlending}));root.add(diffuse);
  const ocean=new THREE.Mesh(new THREE.SphereGeometry(4.66,64,48),new THREE.MeshPhongMaterial({color:0x0b3c49,emissive:0x062f30,shininess:70,transparent:true,opacity:.7}));root.add(ocean);const ambient=new THREE.AmbientLight(0x8ab6d3,.5);scene.add(ambient);const key=new THREE.DirectionalLight(0xadc6df,2);key.position.set(-8,5,9);scene.add(key);
  let lightMode=currentTheme()==='light';
  const applyTheme=theme=>{
    lightMode=theme==='light';
    ambient.intensity=lightMode?.9:.5;key.intensity=lightMode?1.45:2;
    ambient.color.set(lightMode?0xffffff:0x8ab6d3);key.color.set(lightMode?0xffe9d4:0xadc6df);
    stars.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
    stars.material.color.set(lightMode?0x536b7a:0xffffff);
    diffuse.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
    diffuse.material.color.set(lightMode?0x536b7a:0xffffff);
    bgStars.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
    bgStars.material.color.set(lightMode?0x708896:0x8babc8);
    stars.material.opacity=lightMode?.26:.85;
    diffuse.material.opacity=lightMode?.05:.09;
    bgStars.material.opacity=lightMode?.18:.5;
  };
  applyTheme(currentTheme());
  const stopThemeWatch=watchTheme(applyTheme);
  let elapsed=0,phase=.65,current=-1,target=null,morphing=false;
  return {
    dispose(){stopThemeWatch();backdrop.dispose();gallery.dispose();},
    setEntry(entry,seconds,immediate=false){const subject=gallery.show(entry);root.visible=!subject;if(subject){morphing=false;const contexts={'forest-canopy':'forest-world','ice-landscape':'ice-world','fossil-study':'geological-record','catastrophe-section':'geological-record','settlement-workshop':'settlement-world','scientific-instrument':'laboratory-world','information-network':'network-world'};const key=contexts[entry.visual?.template]||subject.backdrop,index=epochs.findIndex(epoch=>epoch.key===key);backdrop.setStage(index<0?epochFor(seconds):index,immediate);document.body.dataset.scenePhase=key;return subject;}const reference=this.setAge(seconds,immediate);return{...reference,label:'参考时代图景 · '+reference.label,note:'本条目暂未配置专属模型，展示相近时代的参考图景。',specific:false};},
    setAge(seconds,immediate=false){const age=Math.log10(Math.max(seconds,1e-44));phase=Math.max(0,Math.min(1,(age+44)/61.64));const stage=epochFor(seconds);backdrop.setStage(stage,immediate);document.body.dataset.scenePhase=epochs[stage].key;if(current!==stage){target=layouts[stage];morphing=!immediate&&current>=0;if(!morphing){geometry.attributes.position.array.set(target);geometry.attributes.position.needsUpdate=true;}current=stage;const palette=[0xff8a35,0xffaa55,0xb07c77,0x7ab9ff,0xb196ed,0xffc16a,0x57e2ca,0x9bb6f1],color=new THREE.Color(palette[stage]);core.material.color.copy(color);center.material.color.copy(color);const c=geometry.attributes.color.array;for(let i=0;i<4200;i++){const variation=.45+(i%17)/17*.55;c[i*3]=color.r*variation;c[i*3+1]=color.g*variation;c[i*3+2]=color.b*variation;}geometry.attributes.color.needsUpdate=true;stars.material.size=[4.3,3.1,1.6,4.8,2.8,3.2,2.7,2.5][stage];stars.material.opacity=lightMode?(stage===2?.05:.26):(stage===2?.12:.85);diffuse.material.opacity=lightMode?(stage===2?.01:.05):(stage===2?.015:stage===3?.16:.09);core.visible=stage!==6&&stage!==7;center.visible=[0,1,5].includes(stage);core.scale.setScalar(stage===0?7:stage===2?3:stage===5?4.6:2.5);ocean.visible=stage===6;rings.forEach((ring,i)=>{ring.material.opacity=stage===5?.5:stage===0?.13:stage===2?.035:stage===6?0:.055;ring.material.color.set(palette[stage]);});root.scale.setScalar(stage===3?.92:1);}return epochs[stage];},
    update(delta){elapsed+=delta;backdrop.update(delta);gallery.update(delta);if(gallery.isActive())return;if(morphing){const p=geometry.attributes.position.array;let error=0;for(let i=0;i<p.length;i++){const difference=target[i]-p[i];p[i]+=difference*Math.min(1,delta*4);error+=Math.abs(difference);}geometry.attributes.position.needsUpdate=true;if(error<.5)morphing=false;}root.rotation.z=-.24+elapsed*.006;stars.rotation.z=current===6?elapsed*.008:-elapsed*.003;diffuse.rotation.copy(stars.rotation);core.material.opacity=(current===2?.13:.55)+Math.sin(elapsed*.7)*.05;},
    rotate(dx,dy){if(gallery.isActive())gallery.rotate(dx,dy);else{root.rotation.y+=dx;root.rotation.x+=dy;}}
  };
}
