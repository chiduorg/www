import * as THREE from 'three';
import {pointTexture,glowSprite} from '/engine/renderer/effects.js';
import {createThermalBackdrop,thermalStage,thermalScenes} from './backdrop.js';
import {createSubjectGallery} from '/engine/renderer/subjects.js';
import {thermalSubjects} from './subjects.js';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';
export function createThermalScene(viewport){
  const {scene,world}=viewport,texture=pointTexture(),backdrop=createThermalBackdrop(scene),gallery=createSubjectGallery(viewport,thermalSubjects),root=new THREE.Group();root.position.set(.8,-.3,0);world.add(root);
  const shell=new THREE.Mesh(new THREE.SphereGeometry(4.6,80,64),new THREE.ShaderMaterial({transparent:true,side:THREE.BackSide,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{tint:{value:new THREE.Color(0x6eb8ec)}},vertexShader:'varying vec3 normalWorld;varying vec3 positionWorld;void main(){normalWorld=normalize(mat3(modelMatrix)*normal);vec4 p=modelMatrix*vec4(position,1.);positionWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}',fragmentShader:'uniform vec3 tint;varying vec3 normalWorld;varying vec3 positionWorld;void main(){vec3 view=normalize(cameraPosition-positionWorld);float rim=pow(1.-abs(dot(normalize(normalWorld),view)),3.);gl_FragColor=vec4(tint,rim*.38);}'}));root.add(shell);
  const ringMaterial=new THREE.LineBasicMaterial({color:0x6886a8,transparent:true,opacity:.18});for(let i=0;i<5;i++){const y=(i-2)*1.55,r=Math.sqrt(4.58**2-y*y),points=[];for(let j=0;j<150;j++){const a=j/150*Math.PI*2;points.push(new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r));}root.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points),ringMaterial));}
  const positions=[],velocities=[],colors=[],count=460;let seed=28;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<count;i++){const p=new THREE.Vector3(rand()-.5,rand()-.5,rand()-.5).normalize().multiplyScalar(Math.cbrt(rand())*4.25);positions.push(p.x,p.y,p.z);const v=new THREE.Vector3(rand()-.5,rand()-.5,rand()-.5).normalize();velocities.push(v.x,v.y,v.z);colors.push(.5,.8,1);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));const particles=new THREE.Points(geometry,new THREE.PointsMaterial({map:texture,vertexColors:true,size:7,transparent:true,opacity:.9,depthWrite:false,blending:THREE.AdditiveBlending}));root.add(particles);
  const trailArray=new Float32Array(count*6),trailGeometry=new THREE.BufferGeometry();trailGeometry.setAttribute('position',new THREE.BufferAttribute(trailArray,3));const trails=new THREE.LineSegments(trailGeometry,new THREE.LineBasicMaterial({color:0x98c7ef,transparent:true,opacity:.15}));root.add(trails);
  const haze=glowSprite(texture,0x639ad7,10,.12);root.add(haze);
  const basePositions=new Float32Array(positions),lattice=[];
  for(let x=-4;x<=4;x++)for(let y=-4;y<=4;y++)for(let z=-4;z<=4;z++){if(Math.hypot(x,y,z)*.85<=4.15)lattice.push(x*.85,y*.85,z*.85);}
  const crystals=new THREE.Group();scene.add(crystals);const crystalMaterials=[];
  for(let i=0;i<22;i++){const geometry=new THREE.OctahedronGeometry(.3+rand()*.65,0),material=new THREE.MeshPhongMaterial({color:0x5f9bc5,emissive:0x07203d,flatShading:true,transparent:true,opacity:.17,side:THREE.DoubleSide,depthWrite:false});const crystal=new THREE.Mesh(geometry,material);crystal.position.set((rand()-.5)*22,(rand()-.5)*15,-5-rand()*8);crystal.rotation.set(rand()*3,rand()*3,rand()*3);crystal.scale.y=1.8+rand()*2;crystals.add(crystal);crystalMaterials.push(material);}
  const ambient=new THREE.AmbientLight(0x7ca6cf,.4);scene.add(ambient);const crystalLight=new THREE.DirectionalLight(0xb6d4fc,1.5);crystalLight.position.set(-4,6,8);scene.add(crystalLight);
  const corona=new THREE.Group();root.add(corona);const coronaMaterials=[];
  for(let i=0;i<8;i++){const material=new THREE.MeshBasicMaterial({color:0xff9b45,transparent:true,opacity:.25,blending:THREE.AdditiveBlending,depthWrite:false});const arc=new THREE.Mesh(new THREE.TorusGeometry(4.5+i*.13,.012,5,150,Math.PI*(1.1+i*.07)),material);arc.rotation.set(i*.7,i*.43,i*.9);corona.add(arc);coronaMaterials.push(material);}
  let lightMode=currentTheme()==='light';
  const applyTheme=theme=>{
    lightMode=theme==='light';
    ambient.intensity=lightMode?.88:.4;crystalLight.intensity=lightMode?1.35:1.5;
    ambient.color.set(lightMode?0xffffff:0x7ca6cf);crystalLight.color.set(lightMode?0xfff0dc:0xb6d4fc);
    particles.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
    particles.material.color.set(lightMode?0x4d6878:0xffffff);
    trails.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
    coronaMaterials.forEach(material=>{material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;material.opacity=lightMode?.42:.25;});
    crystalMaterials.forEach(material=>{material.color.set(lightMode?0x8fa9bc:0x5f9bc5);material.emissive.set(lightMode?0x162a38:0x07203d);material.opacity=lightMode?.24:.17;});
    shell.material.uniforms.tint.value.set(lightMode?0x9ab7c6:0x6eb8ec);
    haze.material.blending=lightMode?THREE.NormalBlending:THREE.AdditiveBlending;
  };
  applyTheme(currentTheme());
  const stopThemeWatch=watchTheme(applyTheme);
  let elapsed=0,speed=.5,temp=310,current=-1,activeName='';

  return {
    dispose(){stopThemeWatch();backdrop.dispose();gallery.dispose();},
    setEntry(entry,kelvin,immediate=false){const subject=gallery.show(entry);root.visible=!subject;if(subject){activeName=entry.title;crystals.visible=false;const contexts={'metal-furnace':'furnace-room','cryo-instrument':'cryo-lab','superconducting-sample':'cryo-lab',kitchen:'kitchen-steam','planet-environment':'planet-horizon',nebula:'nebular-cloud'};const key=contexts[entry.visual?.template]||subject.backdrop,index=thermalScenes.findIndex(state=>state.key===key);backdrop.setStage(index<0?thermalStage(kelvin):index,immediate);document.body.dataset.scenePhase=key;return subject;}activeName='';const reference=this.setTemperature(kelvin,immediate);return{...reference,label:'参考温区图景 · '+reference.label,note:'本条目暂未配置专属模型，展示同温区的参考图景。',specific:false};},
    setTemperature(kelvin,immediate=false){temp=kelvin;speed=kelvin===0?0:.03+Math.max(0,Math.min(1,(Math.log10(Math.max(kelvin,1e-10))+10)/42))*2.6;const stage=thermalStage(kelvin);backdrop.setStage(stage,immediate);document.body.dataset.scenePhase=thermalScenes[stage].key;const palette=[0x548fff,0x65cbef,0x84e0e3,0x67dbcd,0xffae62,0xff7f29,0x8aabff,0xdb9eff],color=new THREE.Color(palette[stage]);if(stage!==current){const p=geometry.attributes.position.array;for(let i=0;i<count;i++){for(let a=0;a<3;a++)p[i*3+a]=stage===0?lattice[(i*3+a)%lattice.length]:basePositions[i*3+a];if(stage===3)p[i*3+1]=p[i*3+1]*.4-1.2;if(stage===4){p[i*3]*=.65;p[i*3+2]*=.65;}const length=Math.hypot(p[i*3],p[i*3+1],p[i*3+2]);if(length>4.25)for(let a=0;a<3;a++)p[i*3+a]*=4.25/length;}geometry.attributes.position.needsUpdate=true;trailArray.fill(0);trailGeometry.attributes.position.needsUpdate=true;current=stage;}const data=geometry.attributes.color.array;for(let i=0;i<count;i++){const variation=.55+(i%11)/11*.45;data[i*3]=color.r*variation;data[i*3+1]=color.g*variation;data[i*3+2]=color.b*variation;}geometry.attributes.color.needsUpdate=true;shell.material.uniforms.tint.value.copy(color);trails.material.color.copy(color);haze.material.color.copy(color);trails.material.opacity=kelvin===0?0:Math.min(.42,.08+speed*.15);particles.material.size=[6,5,6,8,7,10,9,11][stage];haze.material.opacity=stage<3?.05:stage<5?.1:.24;crystals.visible=stage<3;corona.visible=stage>=5;coronaMaterials.forEach(material=>material.color.copy(color));ringMaterial.opacity=stage===0?.07:stage===3?.24:.1;return thermalScenes[stage];},
    update(delta){elapsed+=delta;backdrop.update(delta);gallery.update(delta);if(gallery.isActive())return;if(current>0)crystals.rotation.y=Math.sin(elapsed*.035)*.08;corona.rotation.y+=delta*.04;corona.rotation.z+=delta*.018;const p=geometry.attributes.position.array;for(let i=0;i<count;i++){const j=i*3;if(current>=5){const angle=delta*speed*.13,x=p[j],z=p[j+2];p[j]=x*Math.cos(angle)-z*Math.sin(angle);p[j+2]=x*Math.sin(angle)+z*Math.cos(angle);}for(let a=0;a<3;a++)p[j+a]+=velocities[j+a]*speed*delta;if(current===4){p[j+1]+=delta*speed*.8;if(p[j+1]>4.2)p[j+1]=-4.1;}if(current===3)p[j+1]+=Math.sin(elapsed*.65+p[j]*.8)*delta*.11;const length=Math.hypot(p[j],p[j+1],p[j+2]);if(length>4.3){const nx=p[j]/length,ny=p[j+1]/length,nz=p[j+2]/length,dot=velocities[j]*nx+velocities[j+1]*ny+velocities[j+2]*nz;velocities[j]-=2*dot*nx;velocities[j+1]-=2*dot*ny;velocities[j+2]-=2*dot*nz;for(let a=0;a<3;a++)p[j+a]*=4.29/length;}for(let a=0;a<3;a++){trailArray[i*6+a]=p[j+a];trailArray[i*6+3+a]=p[j+a]-velocities[j+a]*speed*.15;}}geometry.attributes.position.needsUpdate=true;trailGeometry.attributes.position.needsUpdate=true;},
    rotate(dx,dy){if(gallery.isActive())gallery.rotate(dx,dy);else{root.rotation.y+=dx;root.rotation.x+=dy;}},
    getSpeed(){return gallery.isActive()?'正在展示：'+activeName+' · 结构示意':temp===0?'经典热运动示意暂停':speed<.7?'缓慢的热运动':speed<1.2?'逐渐活跃的热运动':'剧烈的热运动示意';}
  };
}
