import * as THREE from 'three';
// 纹理按 URL 缓存；页面离开或视口丢失时中止请求并释放位图。
export function createTextureStore({base='https://static.chidu.org/media/',invalidate=()=>{}}={}){
 const records=new Map();let disposed=false;
 const stats=()=>({pending:[...records.values()].filter(r=>r.state==='loading').length,loaded:[...records.values()].filter(r=>r.state==='ready').length,failed:[...records.values()].filter(r=>r.state==='failed').length,cancelled:[...records.values()].filter(r=>r.state==='cancelled').length});
 const publish=()=>dispatchEvent(new CustomEvent('atlas-assets',{detail:stats()}));
 const store={
  load(name,{color=true,onReady=invalidate}={}){
   if(records.has(name)){const item=records.get(name);item.callbacks.add(onReady);if(item.state==='ready')onReady();return item.texture;}
   if(disposed)throw new Error('纹理资源池已释放');
   const canvas=document.createElement('canvas');canvas.width=canvas.height=2;const ctx=canvas.getContext('2d');ctx.fillStyle=color?'#526975':'#777';ctx.fillRect(0,0,2,2);
   const texture=new THREE.Texture(canvas);texture.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;texture.needsUpdate=true;texture.anisotropy=2;
   const item={texture,state:'loading',controller:new AbortController(),callbacks:new Set([onReady]),bitmap:null};records.set(name,item);publish();
   item.promise=(async()=>{
    try{
     const response=await fetch(base+name,{signal:item.controller.signal});if(!response.ok)throw new Error('HTTP '+response.status);
     const blob=await response.blob();if(item.controller.signal.aborted)return;
     const bitmap=await createImageBitmap(blob,{imageOrientation:'flipY',premultiplyAlpha:'none'});
     if(disposed||item.controller.signal.aborted){bitmap.close();return;}
     item.bitmap=bitmap;texture.image=bitmap;texture.flipY=false;texture.needsUpdate=true;item.state='ready';for(const callback of item.callbacks)callback();
    }catch(error){if(error.name==='AbortError')item.state='cancelled';else{item.state='failed';console.warn('纹理暂不可用，保留参考材质：'+name);for(const callback of item.callbacks)callback();}}
    finally{publish();}
   })();return texture;
  },
  stats,
  async whenSettled(){await Promise.allSettled([...records.values()].map(item=>item.promise));return stats();},
  cancelPending(){for(const item of records.values())if(item.state==='loading'){item.state='cancelled';item.controller.abort();}publish();},
  dispose(){if(disposed)return;disposed=true;store.cancelPending();for(const item of records.values()){item.texture.dispose();item.bitmap?.close();}records.clear();removeEventListener('pagehide',hide);removeEventListener('atlas-viewport-lost',lost);publish();}
 };
 const hide=event=>{if(!event.persisted)store.dispose();},lost=()=>store.dispose();addEventListener('pagehide',hide);addEventListener('atlas-viewport-lost',lost);
 return store;
}
export function disposeObject(root){
 const resources=new Set();root.traverse(object=>{if(object.geometry)resources.add(object.geometry);for(const material of Array.isArray(object.material)?object.material:object.material?[object.material]:[]){resources.add(material);for(const value of Object.values(material))if(value?.isTexture)resources.add(value);for(const uniform of Object.values(material.uniforms||{}))if(uniform.value?.isTexture)resources.add(uniform.value);}});
 for(const resource of resources)resource.dispose?.();
}
