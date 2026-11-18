import * as THREE from 'three';
import {disposeObject} from './assets.js';
// 本地生成柔光反射环境，不使用外部HDR图片；只改变材质受光，不替换站点背景。
export function createStudioEnvironment(renderer){
 const room=new THREE.Scene();room.background=new THREE.Color(.06,.075,.09);
 const box=new THREE.Mesh(new THREE.BoxGeometry(14,10,14),new THREE.MeshBasicMaterial({color:new THREE.Color(.16,.2,.23),side:THREE.BackSide}));room.add(box);
 const panels=[{size:[4,6],position:[-5,1,1],color:[2.5,2.8,3.1]},{size:[3,5],position:[5,2,-1],color:[2.5,2.2,1.9]},{size:[7,4],position:[0,4,0],color:[3.2,3.3,3.5]},{size:[3,2],position:[1,-3,4],color:[.6,.8,1]}];
 for(const panel of panels){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(...panel.size),new THREE.MeshBasicMaterial({color:new THREE.Color(...panel.color),side:THREE.DoubleSide}));mesh.position.set(...panel.position);mesh.lookAt(0,0,0);room.add(mesh);}
 const generator=new THREE.PMREMGenerator(renderer);
 try{return generator.fromScene(room,.04,.1,100);}finally{generator.dispose();disposeObject(room);}
}
