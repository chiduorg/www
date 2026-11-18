import {createSceneField} from '/engine/renderer/effects.js';
export const thermalScenes=[
  {key:'quantum-cold',label:'量子低温 · 静谧晶格光纹'},
  {key:'deep-cold',label:'极低温 · 冰蓝冷雾'},
  {key:'frost',label:'低温 · 霜纹与慢粒子'},
  {key:'everyday',label:'日常温区 · 柔和水波'},
  {key:'heat-flow',label:'高温 · 蒸腾与上升热流'},
  {key:'stellar-surface',label:'恒星表面温区 · 炽热湍流'},
  {key:'stellar-core',label:'恒星核心温区 · 高能光流'},
  {key:'extreme',label:'极端高温 · 紫白光海'},
  {key:'cryo-lab',label:'低温实验 · 冷雾与仪器'},
  {key:'kitchen-steam',label:'厨房与相变 · 蒸汽与水面'},
  {key:'furnace-room',label:'热工实验 · 炉壁与余烬'},
  {key:'planet-horizon',label:'行星环境 · 大气与地平线'},
  {key:'nebular-cloud',label:'星云 · 弥散气体'}
];
export function thermalStage(k){const t=k*(1+1e-8);return t<1e-3?0:t<100?1:t<273?2:t<373?3:t<3000?4:t<1e6?5:t<1e10?6:7;}
export function createThermalBackdrop(scene){return createSceneField(scene,`
float lattice(vec2 p){vec2 q=p*5.;float a=abs(sin(q.x*2.))+abs(sin(q.y*2.));float b=abs(sin(q.x*1.73+q.y));return exp(-min(a,b)*32.);}
vec3 field(vec2 p,float stage,float t){
 float n=fbm(p*3.+vec2(t*.014,-t*.02));vec3 c=vec3(.002,.005,.013);
 if(stage>7.5){
  if(stage<8.5){float tubes=pow(.5+.5*cos(p.x*12.),30.);float fog=pow(fbm(p*3.+vec2(t*.013,-t*.008)),3.);c+=vec3(.035,.1,.15)*n*.5+vec3(.1,.26,.38)*tubes*.08+vec3(.1,.24,.28)*fog*.6;}
  else if(stage<9.5){float steam=pow(fbm(vec2(p.x*3.+sin(p.y*2.+t*.08)*.2,p.y*2.-t*.08)),3.);float water=pow(.5+.5*sin(p.y*25.+sin(p.x*3.)-t*.12),8.)*(1.-smoothstep(-.35,-.1,p.y));c+=vec3(.08,.12,.12)*n*.45+vec3(.28,.3,.28)*steam*.35+vec3(.05,.2,.23)*water*.12;}
  else if(stage<10.5){vec2 brick=p*vec2(6.,8.);brick.x+=mod(floor(brick.y),2.)*.5;float joints=min(abs(fract(brick.x)-.5),abs(fract(brick.y)-.5));float mortar=smoothstep(.02,.05,joints);c+=vec3(.18,.06,.018)*mortar*n*.45;float glow=exp(-pow(p.y+.4,2.)*4.);c+=vec3(.4,.11,.015)*glow*pow(n,2.)*.7;float ember=step(.994,noise(vec2(p.x*90.,p.y*45.-t*.12)));c+=vec3(.9,.35,.08)*ember*glow*.4;}
  else if(stage<11.5){float h=-.35+.09*p.x*p.x;float atmosphere=exp(-abs(p.y-h)*9.);c+=vec3(.03,.085,.15)*n*.35+vec3(.12,.24,.3)*atmosphere*.4;float land=1.-smoothstep(h-.03,h+.02,p.y);c+=vec3(.075,.08,.09)*land*n*.7;}
  else{float cloud=pow(fbm(rot(.3)*p*2.+t*.003),3.);float wisps=pow(.5+.5*sin(p.x*3.+p.y*5.+n*8.),8.);c+=vec3(.14,.08,.24)*cloud*.8+vec3(.08,.26,.31)*cloud*wisps*.7;}
 }else if(stage<.5){
  vec2 q=rot(.3)*p;float grid=lattice(q);float ice=pow(max(0.,1.-abs(sin(q.x*7.)*cos(q.y*5.))),22.);c+=vec3(.055,.12,.34)*n*.5+vec3(.17,.42,.85)*grid*.18+vec3(.1,.25,.55)*ice*.13;
 }else if(stage<1.5){
  float frost=pow(noise(rot(.6)*p*10.),6.);float curtain=pow(.5+.5*sin(p.x*7.+sin(p.y*2.+t*.06)),4.);c+=vec3(.035,.16,.27)*n*.5+vec3(.07,.36,.5)*curtain*exp(-abs(p.y)*1.2)*.18+vec3(.25,.55,.8)*frost*.22;
 }else if(stage<2.5){
  float crack=pow(max(0.,1.-abs(sin(p.x*5.+p.y*7.)+sin(p.x*8.-p.y*3.))),25.);c+=vec3(.04,.18,.24)*n*.5+vec3(.15,.5,.55)*crack*.16;
 }else if(stage<3.5){
  float waves=sin(p.x*9.+t*.17+sin(p.y*4.))+sin(p.y*13.-t*.12);float caustic=pow(.5+.5*cos(waves+n*6.),9.);c+=vec3(.025,.15,.2)*n*.6+vec3(.06,.36,.36)*caustic*.15;
 }else if(stage<4.5){
  float steam=pow(fbm(vec2(p.x*5.+sin(p.y+t*.15)*.6,p.y*2.-t*.2)),3.);float current=pow(.5+.5*sin(p.x*7.+n*5.+p.y*3.-t*.15),8.);c+=vec3(.28,.12,.065)*n*.2+vec3(.24,.32,.37)*steam*.4+vec3(.9,.34,.1)*current*.06;
 }else if(stage<5.5){
  float flow=fbm(vec2(p.x*4.+sin(p.y*4.-t*.25)*.3,p.y*3.-t*.18));float fire=pow(max(0.,sin(p.x*11.+flow*10.+p.y*3.)),4.);c+=vec3(.65,.07,.009)*pow(flow,2.)*.7+vec3(1.,.4,.04)*fire*flow*.23;
 }else if(stage<6.5){
  vec2 q=rot(t*.016)*p;float stream=pow(.5+.5*sin(q.x*13.+sin(q.y*5.+t*.4)*3.+n*8.),8.);c+=vec3(.1,.12,.5)*n*.45+vec3(.4,.6,1.)*stream*.22+vec3(.65,.26,.5)*pow(n,5.)*.2;
 }else{
  float energy=pow(.5+.5*sin(p.x*16.+p.y*9.+n*9.-t*.5),9.);float pulse=.7+.3*sin(t*.3);c+=vec3(.28,.09,.4)*n*.6+vec3(.7,.65,1.)*energy*.2*pulse+vec3(.2,.3,.6)*exp(-length(p)*1.4)*.25;
 }
 return c;
}`);}
