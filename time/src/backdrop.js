import {createSceneField} from '/engine/renderer/effects.js';
export const epochs=[
  {key:'primordial',label:'太初 · 炽热粒子海'},
  {key:'plasma',label:'早期宇宙 · 等离子流'},
  {key:'afterglow',label:'复合与暗时代 · 最初的余辉'},
  {key:'first-light',label:'宇宙黎明 · 第一批星光'},
  {key:'galaxies',label:'星系时代 · 螺旋与网状结构'},
  {key:'solar-disk',label:'太阳系诞生 · 尘埃盘与轨道'},
  {key:'ocean-world',label:'地球与生命 · 海洋世界'},
  {key:'living-cosmos',label:'生命与文明 · 回望星空'},
  {key:'forest-world',label:'陆地生态 · 林冠与薄雾'},
  {key:'ice-world',label:'冰期 · 冰盖与远山'},
  {key:'geological-record',label:'地质记录 · 沉积层与尘埃'},
  {key:'settlement-world',label:'人类聚落 · 丘陵与灯火'},
  {key:'laboratory-world',label:'科学工具 · 光学与测量'},
  {key:'network-world',label:'信息时代 · 连接与信号'}
];
export function epochFor(seconds){
  const t=seconds*(1+1e-8);
  return t<1e-4?0:t<1.2e13?1:t<3.15e15?2:t<3.15e16?3:t<2.9e17?4:t<3.25e17?5:t<4.2e17?6:7;
}
export function createEpochBackdrop(scene){return createSceneField(scene,`
vec3 spiral(vec2 p,vec2 center,float radius,float turn,vec3 tint,float t){
 vec2 q=(p-center)/radius;q.y*=1.8;q=rot(turn)*q;float r=length(q),a=atan(q.y,q.x);float arms=pow(.5+.5*cos(a*3.-r*10.+t*.025),13.);float disk=exp(-r*2.8);float dust=fbm(q*17.);return tint*(arms*disk*.6+exp(-r*r*20.)*.75)*(.35+dust);
}
vec3 field(vec2 p,float stage,float t){
 vec3 c=vec3(.002,.004,.012);float r=length(p-vec2(.15,0.));float n=fbm(p*3.+vec2(t*.025,-t*.014));
 if(stage>7.5){
  if(stage<8.5){
   c+=vec3(.012,.09,.065)*n*.5;
   for(int layer=0;layer<3;layer++){float f=float(layer),h=-.28+f*.14+sin(p.x*(2.+f)+f)*.07;float ground=1.-smoothstep(h-.05,h+.12,p.y);c+=vec3(.025,.095,.065)*ground*(.25+f*.15);float x=p.x*(5.+f*2.)+f*1.9;float local=abs(fract(x)-.5);float crown=1.-smoothstep(.15,.24,local+(p.y-h)*.35);c+=vec3(.025,.07,.05)*crown*smoothstep(h-.1,h+.08,p.y)*(1.-smoothstep(h+.25,h+.65,p.y));}
   float mist=exp(-pow((p.y+.1+sin(p.x*2.+t*.02)*.04)*4.,2.))*fbm(p*3.+t*.007);c+=vec3(.13,.23,.19)*mist*.2;
  }else if(stage<9.5){
   float ridge=-.15+sin(p.x*1.3)*.16+abs(sin(p.x*3.1))*.13;float ice=1.-smoothstep(ridge-.02,ridge+.03,p.y);c+=vec3(.08,.16,.22)*n*.4+vec3(.14,.25,.3)*ice*.3;float aurora=pow(.5+.5*sin(p.x*6.+sin(p.y*4.+t*.04)),5.)*exp(-abs(p.y-.35)*3.);c+=vec3(.04,.23,.23)*aurora*.15;
  }else if(stage<10.5){
   float layer=pow(.5+.5*sin(p.y*24.+sin(p.x*2.)*.9+n*2.),9.);c+=vec3(.18,.12,.075)*n*.5+vec3(.35,.21,.1)*layer*.15;float fleck=step(.995,noise(p*90.+t*.001));c+=vec3(.4,.29,.14)*fleck*.15;
  }else if(stage<11.5){
   float hills=-.25+sin(p.x*1.5)*.15+sin(p.x*3.8)*.04;float land=1.-smoothstep(hills-.03,hills+.04,p.y);c+=vec3(.06,.09,.12)*n*.5+vec3(.09,.12,.095)*land*.35;float windows=pow(.5+.5*sin(p.x*40.),30.)*exp(-pow((p.y-hills+.08)*30.,2.));c+=vec3(.9,.5,.16)*windows*.2;
  }else if(stage<12.5){
   vec2 q=rot(-.2)*p;float lens=exp(-abs(length(q-vec2(.8,.15))-.6)*55.);float grid=exp(-min(abs(sin(q.x*8.)),abs(sin(q.y*8.)))*80.);c+=vec3(.045,.1,.13)*n*.5+vec3(.15,.3,.36)*(lens*.2+grid*.04);
  }else{
   vec2 q=p*vec2(8.,6.);float grid=exp(-min(abs(sin(q.x)),abs(sin(q.y)))*45.);float packet=pow(.5+.5*sin(q.x+q.y-t*.7),24.);c+=vec3(.02,.075,.14)*n*.5+vec3(.08,.28,.4)*grid*(.09+packet*.13);
  }
 }else if(stage<.5){
  vec2 q=p+vec2(sin(p.y*3.+t*.14),cos(p.x*2.-t*.1))*.2;float turbulence=fbm(q*4.+n*2.);float waves=pow(.5+.5*sin(length(q)*20.-t*.8+turbulence*6.),5.);c+=vec3(.75,.12,.012)*pow(turbulence,2.)*.65+vec3(1.,.46,.12)*waves*.14;c+=vec3(1.,.66,.28)*exp(-r*r*2.)*.22;
 }else if(stage<1.5){
  float streams=pow(.5+.5*sin(p.y*13.+sin(p.x*4.+t*.12)*3.+n*8.-t*.3),7.);c+=vec3(.65,.055,.012)*n*.3+vec3(1.,.3,.055)*streams*.21;
 }else if(stage<2.5){
  float clouds=fbm(p*4.+vec2(.02*t,0.));float relic=pow(clouds,3.);c+=mix(vec3(.015,.01,.025),vec3(.7,.23,.065),smoothstep(.3,.85,clouds))*relic*.45;float fade=exp(-abs(p.y+p.x*.3)*3.);c+=vec3(.09,.07,.13)*fade*n*.2;
 }else if(stage<3.5){
  float cloud=pow(fbm(p*2.5+vec2(t*.007,0.)),3.);c+=vec3(.08,.16,.36)*cloud*.45;
  for(int i=0;i<5;i++){float f=float(i);vec2 center=vec2(sin(f*8.3)*1.2,cos(f*5.7)*.6);float d=length(p-center);c+=vec3(.3,.55,1.)*exp(-d*d*34.)*.27;float rays=pow(max(0.,1.-abs(p.x-center.x)*45.),3.)*exp(-abs(p.y-center.y)*14.);c+=vec3(.2,.4,.8)*rays*.1;}
 }else if(stage<4.5){
  c+=vec3(.055,.025,.12)*n*.25;c+=spiral(p,vec2(.25,-.05),.95,-.45,vec3(.4,.32,.85),t);c+=spiral(p,vec2(-1.1,.45),.4,.6,vec3(.25,.45,.7),t);c+=spiral(p,vec2(1.2,-.5),.45,-.6,vec3(.65,.42,.3),t);float web=pow(max(0.,1.-abs(sin(p.x*2.7+p.y*2.)+cos(p.y*3.4-p.x)*.8)),12.);c+=vec3(.06,.1,.2)*web*n*.16;
 }else if(stage<5.5){
  vec2 q=rot(-.25)*(p-vec2(.15,0.));q.y*=3.;float d=length(q);float disk=exp(-abs(d-.65)*4.)*pow(.5+.5*sin(d*70.+n*3.-t*.08),3.);c+=vec3(.7,.27,.08)*disk*.19+vec3(1.,.67,.3)*exp(-d*d*15.)*.6;
 }else if(stage<6.5){
  float wave=sin(p.x*8.+p.y*3.+t*.15)+sin(p.y*15.-p.x*2.-t*.11);float ridge=pow(.5+.5*cos(wave*3.+n*5.),7.);c+=vec3(.015,.18,.24)*n*.55+vec3(.04,.42,.35)*ridge*.12;float horizon=exp(-abs(p.y+.3+sin(p.x*2.)*.06)*12.);c+=vec3(.04,.25,.3)*horizon*.2;
 }else{
  float band=exp(-pow((p.y-p.x*.27)*2.3,2.));float dust=pow(fbm(rot(.3)*p*4.+vec2(t*.002,0.)),3.);c+=vec3(.12,.18,.35)*dust*band*.6+vec3(.1,.045,.19)*n*.08;c+=spiral(p,vec2(1.,.45),.3,.3,vec3(.35,.4,.7),t)*.65;
 }
 return c;
}`);}
