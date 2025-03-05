import{Q as We}from"./QList.js";import{a7 as $e,a8 as z,n as Fe,a9 as Ve,aa as W,ab as G,aT as me,aS as Z,ac as ne,ae as ee,ad as Xe,b as je,aU as Ye,aj as He,aV as Ue,ak as Re,af as Ke,i as Je,e as te,u as L,d as v,aW as Ge,aX as Ze,w as y,o as et,$ as he,k as tt,an as at,h as $,al as pe,f as rt,l as nt,g as it,aY as ot,_ as ie,B as O,E as B,C as T,Q as st,F as E,G as V,a4 as ge,a6 as lt,N as ut,R as dt,L as ct,J as ft,aZ as ye,aJ as be,H as vt,I as mt,M as ht,a_ as pt,V as gt}from"./index.js";import{c as yt}from"./selection.js";import{b as F}from"./format.js";import{Q as bt}from"./QImg.js";import{Q as we,b as wt,a as _t}from"./QItem.js";const oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},St=Object.keys(oe);oe.all=!0;function _e(t){const n={};for(const s of St)t[s]===!0&&(n[s]=!0);return Object.keys(n).length===0?oe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const kt=["INPUT","TEXTAREA"];function Se(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&kt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function ae(t,n,s){const o=ne(t);let e,r=o.left-n.event.x,l=o.top-n.event.y,c=Math.abs(r),h=Math.abs(l);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?e=r<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=l<0?"up":"down":d.up===!0&&l<0?(e="up",c>h&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.down===!0&&l>0?(e="down",c>h&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.left===!0&&r<0?(e="left",c<h&&(d.up===!0&&l<0?e="up":d.down===!0&&l>0&&(e="down"))):d.right===!0&&r>0&&(e="right",c<h&&(d.up===!0&&l<0?e="up":d.down===!0&&l>0&&(e="down")));let i=!1;if(e===void 0&&s===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,i=!0,e==="left"||e==="right"?(o.left-=r,c=0,r=0):(o.top-=l,h=0,l=0)}return{synthetic:i,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:o,direction:e,isFirst:n.event.isFirst,isFinal:s===!0,duration:Date.now()-n.event.time,distance:{x:c,y:h},offset:{x:r,y:l},delta:{x:o.left-n.event.lastX,y:o.top-n.event.lastY}}}}let Ct=0;const re=$e({name:"touch-pan",beforeMount(t,{value:n,modifiers:s}){if(s.mouse!==!0&&z.has.touch!==!0)return;function o(r,l){s.mouse===!0&&l===!0?Xe(r):(s.stop===!0&&Z(r),s.prevent===!0&&me(r))}const e={uid:"qvtp_"+Ct++,handler:n,modifiers:s,direction:_e(s),noop:Fe,mouseStart(r){Se(r,e)&&Ve(r)&&(W(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(Se(r,e)){const l=r.target;W(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,l){if(z.is.firefox===!0&&G(t,!0),e.lastEvt=r,l===!0||s.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&me(d),r.cancelBubble===!0&&Z(d),Object.assign(d,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:d}}Z(r)}const{left:c,top:h}=ne(r);e.event={x:c,y:h,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:h}},move(r){if(e.event===void 0)return;const l=ne(r),c=l.left-e.event.x,h=l.top-e.event.y;if(c===0&&h===0)return;e.lastEvt=r;const d=e.event.mouse===!0,i=()=>{o(r,d);let g;s.preserveCursor!==!0&&s.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),yt(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),d===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{C(),f()},50):C()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&o(r,e.event.mouse);const{payload:g,synthetic:f}=ae(r,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=f===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(r);return}const S=Math.abs(c),p=Math.abs(h);S!==p&&(e.direction.horizontal===!0&&S>p||e.direction.vertical===!0&&S<p||e.direction.up===!0&&S<p&&h<0||e.direction.down===!0&&S<p&&h>0||e.direction.left===!0&&S>p&&c<0||e.direction.right===!0&&S>p&&c>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,l){if(e.event!==void 0){if(ee(e,"temp"),z.is.firefox===!0&&G(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ae(r===void 0?e.lastEvt:r,e).payload);const{payload:c}=ae(r===void 0?e.lastEvt:r,e,!0),h=()=>{e.handler(c)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,s.mouse===!0){const r=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";W(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}z.has.touch===!0&&W(e,"main",[[t,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const s=t.__qtouchpan;s!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&s.end(),s.handler=n.value),s.direction=_e(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ee(n,"main"),ee(n,"temp"),z.is.firefox===!0&&G(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}}),ke=150,qt=je({name:"QDrawer",inheritAttrs:!1,props:{...Ye,...He,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ue,"onLayout","miniState"],setup(t,{slots:n,emit:s,attrs:o}){const e=it(),{proxy:{$q:r}}=e,l=Re(t,r),{preventBodyScroll:c}=ot(),{registerTimeout:h,removeTimeout:d}=Ke(),i=Je(nt,te);if(i===te)return console.error("QDrawer needs to be child of QLayout"),te;let S,p=null,g;const f=L(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),C=v(()=>t.mini===!0&&f.value!==!0),w=v(()=>C.value===!0?t.miniWidth:t.width),m=L(t.showIfAbove===!0&&f.value===!1?!0:t.modelValue===!0),se=v(()=>t.persistent!==!0&&(f.value===!0||xe.value===!0));function le(a,u){if(Ce(),a!==!1&&i.animate(),_(0),f.value===!0){const b=i.instances[N.value];b!==void 0&&b.belowBreakpoint===!0&&b.hide(!1),q(1),i.isContainer.value!==!0&&c(!0)}else q(0),a!==!1&&R(!1);h(()=>{a!==!1&&R(!0),u!==!0&&s("show",a)},ke)}function ue(a,u){qe(),a!==!1&&i.animate(),q(0),_(M.value*w.value),K(),u!==!0?h(()=>{s("hide",a)},ke):d()}const{show:X,hide:P}=Ge({showing:m,hideOnRouteChange:se,handleShow:le,handleHide:ue}),{addToHistory:Ce,removeFromHistory:qe}=Ze(m,P,se),I={belowBreakpoint:f,hide:P},k=v(()=>t.side==="right"),M=v(()=>(r.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),de=L(0),D=L(!1),j=L(!1),ce=L(w.value*M.value),N=v(()=>k.value===!0?"left":"right"),Y=v(()=>m.value===!0&&f.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),H=v(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(k.value?"R":"L")!==-1||r.platform.is.ios===!0&&i.isContainer.value===!0),A=v(()=>t.overlay===!1&&m.value===!0&&f.value===!1),xe=v(()=>t.overlay===!0&&m.value===!0&&f.value===!1),Be=v(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&D.value===!1?" hidden":"")),Te=v(()=>({backgroundColor:`rgba(0,0,0,${de.value*.4})`})),fe=v(()=>k.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Me=v(()=>k.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),De=v(()=>{const a={};return i.header.space===!0&&fe.value===!1&&(H.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&Me.value===!1&&(H.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),Le=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${ce.value}px)`};return f.value===!0?a:Object.assign(a,De.value)}),Ee=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=v(()=>`q-drawer q-drawer--${t.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(H.value===!0||A.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),Pe=v(()=>{const a=r.lang.rtl===!0?t.side:N.value;return[[re,Ne,void 0,{[a]:!0,mouse:!0}]]}),Ae=v(()=>{const a=r.lang.rtl===!0?N.value:t.side;return[[re,ve,void 0,{[a]:!0,mouse:!0}]]}),ze=v(()=>{const a=r.lang.rtl===!0?N.value:t.side;return[[re,ve,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Qe(f,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}y(f,a=>{a===!0?(S=m.value,m.value===!0&&P(!1)):t.overlay===!1&&t.behavior!=="mobile"&&S!==!1&&(m.value===!0?(_(0),q(0),K()):X(!1))}),y(()=>t.side,(a,u)=>{i.instances[u]===I&&(i.instances[u]=void 0,i[u].space=!1,i[u].offset=0),i.instances[a]=I,i[a].size=w.value,i[a].space=A.value,i[a].offset=Y.value}),y(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),y(()=>t.behavior+t.breakpoint,U),y(i.isContainer,a=>{m.value===!0&&c(a!==!0),a===!0&&U()}),y(i.scrollbarWidth,()=>{_(m.value===!0?0:void 0)}),y(Y,a=>{x("offset",a)}),y(A,a=>{s("onLayout",a),x("space",a)}),y(k,()=>{_()}),y(w,a=>{_(),J(t.miniToOverlay,a)}),y(()=>t.miniToOverlay,a=>{J(a,w.value)}),y(()=>r.lang.rtl,()=>{_()}),y(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ie(),i.animate())}),y(C,a=>{s("miniState",a)});function _(a){a===void 0?he(()=>{a=m.value===!0?0:w.value,_(M.value*a)}):(i.isContainer.value===!0&&k.value===!0&&(f.value===!0||Math.abs(a)===w.value)&&(a+=M.value*i.scrollbarWidth.value),ce.value=a)}function q(a){de.value=a}function R(a){const u=a===!0?"remove":i.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Ie(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,p=setTimeout(()=>{p=null,j.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(a){if(m.value!==!1)return;const u=w.value,b=F(a.distance.x,0,u);if(a.isFinal===!0){b>=Math.min(75,u)===!0?X():(i.animate(),q(0),_(M.value*u)),D.value=!1;return}_((r.lang.rtl===!0?k.value!==!0:k.value)?Math.max(u-b,0):Math.min(0,b-u)),q(F(b/u,0,1)),a.isFirst===!0&&(D.value=!0)}function ve(a){if(m.value!==!0)return;const u=w.value,b=a.direction===t.side,Q=(r.lang.rtl===!0?b!==!0:b)?F(a.distance.x,0,u):0;if(a.isFinal===!0){Math.abs(Q)<Math.min(75,u)===!0?(i.animate(),q(1),_(0)):P(),D.value=!1;return}_(M.value*Q),q(F(1-Q/u,0,1)),a.isFirst===!0&&(D.value=!0)}function K(){c(!1),R(!0)}function x(a,u){i.update(t.side,a,u)}function Qe(a,u){a.value!==u&&(a.value=u)}function J(a,u){x("size",a===!0?t.miniWidth:u)}return i.instances[t.side]=I,J(t.miniToOverlay,w.value),x("space",A.value),x("offset",Y.value),t.showIfAbove===!0&&t.modelValue!==!0&&m.value===!0&&t["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),et(()=>{s("onLayout",A.value),s("miniState",C.value),S=t.showIfAbove===!0;const a=()=>{(m.value===!0?le:ue)(!1,!0)};if(i.totalWidth.value!==0){he(a);return}g=y(i.totalWidth,()=>{g(),g=void 0,m.value===!1&&t.showIfAbove===!0&&f.value===!1?X(!1):a()})}),tt(()=>{g!==void 0&&g(),p!==null&&(clearTimeout(p),p=null),m.value===!0&&K(),i.instances[t.side]===I&&(i.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];f.value===!0&&(t.noSwipeOpen===!1&&a.push(at($("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Pe.value)),a.push(pe("div",{ref:"backdrop",class:Be.value,style:Te.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",t.noSwipeBackdrop!==!0&&m.value===!0,()=>ze.value)));const u=C.value===!0&&n.mini!==void 0,b=[$("div",{...o,key:""+u,class:[Ee.value,o.class]},u===!0?n.mini():rt(n.default))];return t.elevated===!0&&m.value===!0&&b.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(pe("aside",{ref:"content",class:Oe.value,style:Le.value},b,"contentclose",t.noSwipeClose!==!0&&f.value===!0,()=>Ae.value)),$("div",{class:"q-drawer-container"},a)}}}),xt={__name:"NavLink",props:{icon:{type:String,default:null},img:{type:String,default:null},title:{type:String,default:""},link:{type:String,default:"#"}},setup(t,{expose:n}){n();const e={storeSettings:O(),props:t,get useStoreSettings(){return O}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Bt(t,n,s,o,e,r){return o.props.link==="#"?(B(),T(st,{key:0,color:"grey"})):(B(),T(_t,{key:1,clickable:"",to:o.props.link,class:ge(["text-white",o.storeSettings.dir.dir==="rtl"?"q-pr-xs":"q-pl-sm"]),"active-class":"active",title:o.props.title,"aria-label":o.props.title},{default:E(()=>[V(we,{avatar:"",class:ge(o.storeSettings.dir.dir==="rtl"?"q-px-xs":"q-pr-sm"),style:{"min-width":"0"}},{default:E(()=>[o.props.icon?(B(),T(lt,{key:0,name:o.props.icon},null,8,["name"])):o.props.img?(B(),T(bt,{key:1,src:o.props.img,"no-spinner":"","no-native-menu":"","no-transition":"",width:"24px"},null,8,["src"])):ut("",!0)]),_:1},8,["class"]),V(we,null,{default:E(()=>[V(wt,null,{default:E(()=>[dt(ct(o.props.title),1)]),_:1}),n[0]||(n[0]=ft("div",{class:"gradient-mask"},null,-1))]),_:1})]),_:1},8,["to","class","title","aria-label"]))}const Tt=ie(xt,[["render",Bt],["__scopeId","data-v-c27db921"],["__file","NavLink.vue"]]),Mt={__name:"DrawerMenu",setup(t,{expose:n}){n();const{t:s}=ye(),o=O(),e=be(),r=v(()=>[{title:s("Избранное"),icon:"hotel_class",link:"/favorites"},{title:s("Заметки"),icon:"description",link:"/notes"},{},...e.active.map(c=>({title:c.getName(o.settings.fromLanguage),icon:c.style?.icon,img:c.style?.img,link:"/topic/"+c.id})),{},{title:s("Настройки"),icon:"settings",link:"/settings"}]),l={t:s,storeSettings:o,storeTopics:e,navLinks:r,computed:v,get useI18n(){return ye},get useStoreSettings(){return O},get useStoreTopics(){return be},NavLink:Tt};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Dt(t,n,s,o,e,r){return B(),T(qt,{class:"bg-primary hide-scrollbar",width:o.storeSettings.elementSizes.drawerFullWidth,"mini-width":o.storeSettings.elementSizes.drawerMiniWidth,breakpoint:0,"show-if-above":"",side:o.storeSettings.dir.side,mini:o.storeSettings.settings.drawerMini},{default:E(()=>[V(We,{separator:"",style:{"overflow-x":"hidden"}},{default:E(()=>[(B(!0),vt(mt,null,ht(o.navLinks,l=>(B(),T(o.NavLink,pt({key:l.title,ref_for:!0},l),null,16))),128))]),_:1})]),_:1},8,["width","mini-width","side","mini"])}const Wt=ie(Mt,[["render",Dt],["__file","DrawerMenu.vue"]]),Lt={__name:"DrawerToggleBtn",setup(t,{expose:n}){n();const o={storeSettings:O(),get useStoreSettings(){return O}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function Et(t,n,s,o,e,r){return B(),T(gt,{onClick:n[0]||(n[0]=l=>o.storeSettings.settings.drawerMini=!o.storeSettings.settings.drawerMini),icon:o.storeSettings.settings.drawerMini?"keyboard_double_arrow_right":"keyboard_double_arrow_left",padding:"sm sm",title:"Только значки / +надписи","aria-label":"Toggle left drawer",dense:""},null,8,["icon"])}const $t=ie(Lt,[["render",Et],["__file","DrawerToggleBtn.vue"]]);export{Wt as D,re as T,$t as a,_e as g,Se as s};
