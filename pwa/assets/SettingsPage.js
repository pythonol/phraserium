import{b as Dt,b3 as nt,b4 as Rt,b5 as qt,b6 as Bt,n as al,u as x,d as C,w as Ve,b7 as ol,b8 as il,ar as rl,as as sl,k as Ht,$ as ae,h as E,g as Pt,b9 as dl,ba as cl,aC as fl,bb as vl,aS as Ze,a5 as le,bc as pt,bd as Te,ao as ml,aR as he,ap as Sl,ac as we,O as gl,be as bl,A as yl,_ as pl,B as ht,aw as wt,o as Vt,bf as Ct,z as _t,bg as kt,bh as At,H as Je,G as u,F as a,I as hl,bi as wl,aH as Vl,bj as Cl,bk as et,bl as _l,bm as zt,bn as Et,E as Me,V as xe,J as kl,L as N,R as A,b0 as It,bo as Al,bp as zl,a4 as El,C as Ot}from"./index.js";import{Q as Il,a as Ol,b as Tl,c as Ml}from"./QPage.js";import{Q as h,b as z,a as j}from"./QItem.js";import{Q as xl}from"./QChip.js";import{Q as Fl}from"./QMenu.js";import{r as ut}from"./rtl.js";import{n as Tt}from"./format.js";import{Q as Fe}from"./QList.js";import{Q as Ll}from"./QImg.js";import{u as Mt}from"./use-quasar.js";import"./QResizeObserver.js";import"./selection.js";const Dl=Dt({name:"QField",inheritAttrs:!1,props:{...nt,tag:{type:String,default:"label"}},emits:Rt,setup(){return qt(Bt({tagProp:!0}))}}),Y=1e3,Rl=["start","center","end","start-force","center-force","end-force"],Ut=Array.prototype.filter,ql=window.getComputedStyle(document.body).overflowAnchor===void 0?al:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const c=e.children||[];Ut.call(c,F=>F.dataset&&F.dataset.qVsAnchor!==void 0).forEach(F=>{delete F.dataset.qVsAnchor});const r=c[n];r&&r.dataset&&(r.dataset.qVsAnchor="")}))};function Ce(e,n){return e+n}function tt(e,n,c,r,F,d,m,v){const y=e===window?document.scrollingElement||document.documentElement:e,R=F===!0?"offsetWidth":"offsetHeight",f={scrollStart:0,scrollViewSize:-m-v,scrollMaxSize:0,offsetStart:-m,offsetEnd:-v};if(F===!0?(e===window?(f.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,f.scrollViewSize+=document.documentElement.clientWidth):(f.scrollStart=y.scrollLeft,f.scrollViewSize+=y.clientWidth),f.scrollMaxSize=y.scrollWidth,d===!0&&(f.scrollStart=(ut===!0?f.scrollMaxSize-f.scrollViewSize:0)-f.scrollStart)):(e===window?(f.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,f.scrollViewSize+=document.documentElement.clientHeight):(f.scrollStart=y.scrollTop,f.scrollViewSize+=y.clientHeight),f.scrollMaxSize=y.scrollHeight),c!==null)for(let w=c.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetStart+=w[R]);if(r!==null)for(let w=r.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetEnd+=w[R]);if(n!==e){const w=y.getBoundingClientRect(),_=n.getBoundingClientRect();F===!0?(f.offsetStart+=_.left-w.left,f.offsetEnd-=_.width):(f.offsetStart+=_.top-w.top,f.offsetEnd-=_.height),e!==window&&(f.offsetStart+=f.scrollStart),f.offsetEnd+=f.scrollMaxSize-f.offsetStart}return f}function xt(e,n,c,r){n==="end"&&(n=(e===window?document.body:e)[c===!0?"scrollWidth":"scrollHeight"]),e===window?c===!0?(r===!0&&(n=(ut===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):c===!0?(r===!0&&(n=(ut===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function Le(e,n,c,r){if(c>=r)return 0;const F=n.length,d=Math.floor(c/Y),m=Math.floor((r-1)/Y)+1;let v=e.slice(d,m).reduce(Ce,0);return c%Y!==0&&(v-=n.slice(d*Y,c).reduce(Ce,0)),r%Y!==0&&r!==F&&(v-=n.slice(r,m*Y).reduce(Ce,0)),v}const Bl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ft={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Bl};function Hl({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:c,virtualScrollItemSizeComputed:r}){const F=Pt(),{props:d,emit:m,proxy:v}=F,{$q:y}=v;let R,f,w,_=[],k;const L=x(0),K=x(0),q=x({}),Z=x(null),X=x(null),T=x(null),B=x({from:0,to:0}),De=C(()=>d.tableColspan!==void 0?d.tableColspan:100);r===void 0&&(r=C(()=>d.virtualScrollItemSize));const H=C(()=>r.value+";"+d.virtualScrollHorizontal),ue=C(()=>H.value+";"+d.virtualScrollSliceRatioBefore+";"+d.virtualScrollSliceRatioAfter);Ve(ue,()=>{J()}),Ve(H,oe);function oe(){fe(f,!0)}function _e(l){fe(l===void 0?f:l)}function ie(l,s){const g=n();if(g==null||g.nodeType===8)return;const M=tt(g,c(),Z.value,X.value,d.virtualScrollHorizontal,y.lang.rtl,d.virtualScrollStickySizeStart,d.virtualScrollStickySizeEnd);w!==M.scrollViewSize&&J(M.scrollViewSize),W(g,M,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Rl.indexOf(s)!==-1?s:f!==-1&&l>f?"end":"start")}function Re(){const l=n();if(l==null||l.nodeType===8)return;const s=tt(l,c(),Z.value,X.value,d.virtualScrollHorizontal,y.lang.rtl,d.virtualScrollStickySizeStart,d.virtualScrollStickySizeEnd),g=e.value-1,M=s.scrollMaxSize-s.offsetStart-s.offsetEnd-K.value;if(R===s.scrollStart)return;if(s.scrollMaxSize<=0){W(l,s,0,0);return}w!==s.scrollViewSize&&J(s.scrollViewSize),ke(B.value.from);const P=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(k[g],s.scrollViewSize/2));if(P>0&&Math.ceil(s.scrollStart)>=P){W(l,s,g,s.scrollMaxSize-s.offsetEnd-_.reduce(Ce,0));return}let V=0,p=s.scrollStart-s.offsetStart,U=p;if(p<=M&&p+s.scrollViewSize>=L.value)p-=L.value,V=B.value.from,U=p;else for(let b=0;p>=_[b]&&V<g;b++)p-=_[b],V+=Y;for(;p>0&&V<g;)p-=k[V],p>-s.scrollViewSize?(V++,U=p):U=k[V]+p;W(l,s,V,U)}function W(l,s,g,M,P){const V=typeof P=="string"&&P.indexOf("-force")!==-1,p=V===!0?P.replace("-force",""):P,U=p!==void 0?p:"start";let b=Math.max(0,g-q.value[U]),G=b+q.value.total;G>e.value&&(G=e.value,b=Math.max(0,G-q.value.total)),R=s.scrollStart;const ne=b!==B.value.from||G!==B.value.to;if(ne===!1&&p===void 0){Ae(g);return}const{activeElement:Be}=document,ee=T.value;ne===!0&&ee!==null&&ee!==Be&&ee.contains(Be)===!0&&(ee.addEventListener("focusout",qe),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",qe)})),ql(ee,g-b);const He=p!==void 0?k.slice(b,g).reduce(Ce,0):0;if(ne===!0){const re=G>=B.value.from&&b<=B.value.to?B.value.to:G;B.value={from:b,to:re},L.value=Le(_,k,0,b),K.value=Le(_,k,G,e.value),requestAnimationFrame(()=>{B.value.to!==G&&R===s.scrollStart&&(B.value={from:B.value.from,to:G},K.value=Le(_,k,G,e.value))})}requestAnimationFrame(()=>{if(R!==s.scrollStart)return;ne===!0&&ke(b);const re=k.slice(b,g).reduce(Ce,0),se=re+s.offsetStart+L.value,Pe=se+k[g];let Ee=se+M;if(p!==void 0){const We=re-He,Ie=s.scrollStart+We;Ee=V!==!0&&Ie<se&&Pe<Ie+s.scrollViewSize?Ie:p==="end"?Pe-s.scrollViewSize:se-(p==="start"?0:Math.round((s.scrollViewSize-k[g])/2))}R=Ee,xt(l,Ee,d.virtualScrollHorizontal,y.lang.rtl),Ae(g)})}function ke(l){const s=T.value;if(s){const g=Ut.call(s.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),M=g.length,P=d.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let V=l,p,U;for(let b=0;b<M;){for(p=P(g[b]),b++;b<M&&g[b].classList.contains("q-virtual-scroll--with-prev")===!0;)p+=P(g[b]),b++;U=p-k[V],U!==0&&(k[V]+=U,_[Math.floor(V/Y)]+=U),V++}}}function qe(){T.value!==null&&T.value!==void 0&&T.value.focus()}function fe(l,s){const g=1*r.value;(s===!0||Array.isArray(k)===!1)&&(k=[]);const M=k.length;k.length=e.value;for(let V=e.value-1;V>=M;V--)k[V]=g;const P=Math.floor((e.value-1)/Y);_=[];for(let V=0;V<=P;V++){let p=0;const U=Math.min((V+1)*Y,e.value);for(let b=V*Y;b<U;b++)p+=k[b];_.push(p)}f=-1,R=void 0,L.value=Le(_,k,0,B.value.from),K.value=Le(_,k,B.value.to,e.value),l>=0?(ke(B.value.from),ae(()=>{ie(l)})):ve()}function J(l){if(l===void 0&&typeof window<"u"){const p=n();p!=null&&p.nodeType!==8&&(l=tt(p,c(),Z.value,X.value,d.virtualScrollHorizontal,y.lang.rtl,d.virtualScrollStickySizeStart,d.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const s=parseFloat(d.virtualScrollSliceRatioBefore)||0,g=parseFloat(d.virtualScrollSliceRatioAfter)||0,M=1+s+g,P=l===void 0||l<=0?1:Math.ceil(l/r.value),V=Math.max(1,P,Math.ceil((d.virtualScrollSliceSize>0?d.virtualScrollSliceSize:10)/M));q.value={total:Math.ceil(V*M),start:Math.ceil(V*s),center:Math.ceil(V*(.5+s)),end:Math.ceil(V*(1+s)),view:P}}function Ke(l,s){const g=d.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+g]:r.value+"px"};return[l==="tbody"?E(l,{class:"q-virtual-scroll__padding",key:"before",ref:Z},[E("tr",[E("td",{style:{[g]:`${L.value}px`,...M},colspan:De.value})])]):E(l,{class:"q-virtual-scroll__padding",key:"before",ref:Z,style:{[g]:`${L.value}px`,...M}}),E(l,{class:"q-virtual-scroll__content",key:"content",ref:T,tabindex:-1},s.flat()),l==="tbody"?E(l,{class:"q-virtual-scroll__padding",key:"after",ref:X},[E("tr",[E("td",{style:{[g]:`${K.value}px`,...M},colspan:De.value})])]):E(l,{class:"q-virtual-scroll__padding",key:"after",ref:X,style:{[g]:`${K.value}px`,...M}})]}function Ae(l){f!==l&&(d.onVirtualScroll!==void 0&&m("virtualScroll",{index:l,from:B.value.from,to:B.value.to-1,direction:l<f?"decrease":"increase",ref:v}),f=l)}J();const ve=ol(Re,y.platform.is.ios===!0?120:35);il(()=>{J()});let ze=!1;return rl(()=>{ze=!0}),sl(()=>{if(ze!==!0)return;const l=n();R!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?xt(l,R,d.virtualScrollHorizontal,y.lang.rtl):ie(f)}),Ht(()=>{ve.cancel()}),Object.assign(v,{scrollTo:ie,reset:oe,refresh:_e}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:q,setVirtualScrollSize:J,onVirtualScrollEvt:ve,localResetVirtualScroll:fe,padVirtualScroll:Ke,scrollTo:ie,reset:oe,refresh:_e}}const Lt=e=>["add","add-unique","toggle"].includes(e),Pl=".*+?^${}()|[]\\",Ul=Object.keys(nt);function lt(e,n){if(typeof e=="function")return e;const c=e!==void 0?e:n;return r=>r!==null&&typeof r=="object"&&c in r?r[c]:r}const je=Dt({name:"QSelect",inheritAttrs:!1,props:{...Ft,...dl,...nt,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Lt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:Ft.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...Rt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:n,emit:c}){const{proxy:r}=Pt(),{$q:F}=r,d=x(!1),m=x(!1),v=x(-1),y=x(""),R=x(!1),f=x(!1);let w=null,_=null,k,L,K,q=null,Z,X,T,B;const De=x(null),H=x(null),ue=x(null),oe=x(null),_e=x(null),ie=cl(e),Re=bl(mt),W=C(()=>Array.isArray(e.options)?e.options.length:0),ke=C(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:qe,virtualScrollSliceSizeComputed:fe,localResetVirtualScroll:J,padVirtualScroll:Ke,onVirtualScrollEvt:Ae,scrollTo:ve,setVirtualScrollSize:ze}=Hl({virtualScrollLength:W,getVirtualScrollTarget:Kt,getVirtualScrollEl:ft,virtualScrollItemSizeComputed:ke}),l=Bt(),s=C(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,o=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const i=e.mapOptions===!0&&k!==void 0?k:[],S=o.map(O=>jt(O,i));return e.modelValue===null&&t===!0?S.filter(O=>O!==null):S}return o}),g=C(()=>{const t={};return Ul.forEach(o=>{const i=e[o];i!==void 0&&(t[o]=i)}),t}),M=C(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),P=C(()=>pt(s.value)),V=C(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||s.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),p=C(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),U=C(()=>W.value===0),b=C(()=>s.value.map(t=>$.value(t)).join(", ")),G=C(()=>e.displayValue!==void 0?e.displayValue:b.value),ne=C(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Be=C(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||s.value.some(ne.value))),ee=C(()=>l.focused.value===!0?e.tabindex:-1),He=C(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":d.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return v.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${v.value}`),t}),re=C(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),se=C(()=>s.value.map((t,o)=>({index:o,opt:t,html:ne.value(t),selected:!0,removeAtIndex:Qt,toggleOption:de,tabindex:ee.value}))),Pe=C(()=>{if(W.value===0)return[];const{from:t,to:o}=qe.value;return e.options.slice(t,o).map((i,S)=>{const O=me.value(i)===!0,I=$e(i)===!0,Q=t+S,D={clickable:!0,active:I,activeClass:Ie.value,manualFocus:!0,focused:!1,disable:O,tabindex:-1,dense:e.optionsDense,dark:M.value,role:"option","aria-selected":I===!0?"true":"false",id:`${l.targetUid.value}_${Q}`,onClick:()=>{de(i)}};return O!==!0&&(v.value===Q&&(D.focused=!0),F.platform.is.desktop===!0&&(D.onMousemove=()=>{d.value===!0&&Se(Q)})),{index:Q,opt:i,html:ne.value(i),label:$.value(i),selected:D.active,focused:D.focused,toggleOption:de,setOptionIndex:Se,itemProps:D}})}),Ee=C(()=>e.dropdownIcon!==void 0?e.dropdownIcon:F.iconSet.arrow.dropdown),We=C(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ie=C(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),te=C(()=>lt(e.optionValue,"value")),$=C(()=>lt(e.optionLabel,"label")),me=C(()=>lt(e.optionDisable,"disable")),Ue=C(()=>s.value.map(te.value)),Nt=C(()=>{const t={onInput:mt,onChange:Re,onKeydown:ct,onKeyup:st,onKeypress:dt,onFocus:it,onClick(o){L===!0&&he(o)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Re,t});Ve(s,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(m.value!==!0&&d.value!==!0||P.value!==!0)&&(K!==!0&&pe(),(m.value===!0||d.value===!0)&&ge(""))},{immediate:!0}),Ve(()=>e.fillInput,pe),Ve(d,Xe),Ve(W,nl);function at(t){return e.emitValue===!0?te.value(t):t}function Ge(t){if(t!==-1&&t<s.value.length)if(e.multiple===!0){const o=e.modelValue.slice();c("remove",{index:t,value:o.splice(t,1)[0]}),c("update:modelValue",o)}else c("update:modelValue",null)}function Qt(t){Ge(t),l.focus()}function ot(t,o){const i=at(t);if(e.multiple!==!0){e.fillInput===!0&&Oe($.value(t),!0,!0),c("update:modelValue",i);return}if(s.value.length===0){c("add",{index:0,value:i}),c("update:modelValue",e.multiple===!0?[i]:i);return}if(o===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const S=e.modelValue.slice();c("add",{index:S.length,value:i}),S.push(i),c("update:modelValue",S)}function de(t,o){if(l.editable.value!==!0||t===void 0||me.value(t)===!0)return;const i=te.value(t);if(e.multiple!==!0){o!==!0&&(Oe(e.fillInput===!0?$.value(t):"",!0,!0),ce()),H.value!==null&&H.value.focus(),(s.value.length===0||Te(te.value(s.value[0]),i)!==!0)&&c("update:modelValue",e.emitValue===!0?i:t);return}if((L!==!0||R.value===!0)&&l.focus(),it(),s.value.length===0){const I=e.emitValue===!0?i:t;c("add",{index:0,value:I}),c("update:modelValue",e.multiple===!0?[I]:I);return}const S=e.modelValue.slice(),O=Ue.value.findIndex(I=>Te(I,i));if(O!==-1)c("remove",{index:O,value:S.splice(O,1)[0]});else{if(e.maxValues!==void 0&&S.length>=e.maxValues)return;const I=e.emitValue===!0?i:t;c("add",{index:S.length,value:I}),S.push(I)}c("update:modelValue",S)}function Se(t){if(F.platform.is.desktop!==!0)return;const o=t!==-1&&t<W.value?t:-1;v.value!==o&&(v.value=o)}function Ne(t=1,o){if(d.value===!0){let i=v.value;do i=Tt(i+t,-1,W.value-1);while(i!==-1&&i!==v.value&&me.value(e.options[i])===!0);v.value!==i&&(Se(i),ve(i),o!==!0&&e.useInput===!0&&e.fillInput===!0&&Qe(i>=0?$.value(e.options[i]):Z,!0))}}function jt(t,o){const i=S=>Te(te.value(S),t);return e.options.find(i)||o.find(i)||t}function $e(t){const o=te.value(t);return Ue.value.find(i=>Te(i,o))!==void 0}function it(t){e.useInput===!0&&H.value!==null&&(t===void 0||H.value===t.target&&t.target.value===b.value)&&H.value.select()}function rt(t){ml(t,27)===!0&&d.value===!0&&(he(t),ce(),pe()),c("keyup",t)}function st(t){const{value:o}=t.target;if(t.keyCode!==void 0){rt(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),_!==null&&(clearTimeout(_),_=null),pe(),typeof o=="string"&&o.length!==0){const i=o.toLocaleLowerCase(),S=I=>{const Q=e.options.find(D=>String(I.value(D)).toLocaleLowerCase()===i);return Q===void 0?!1:(s.value.indexOf(Q)===-1?de(Q):ce(),!0)},O=I=>{S(te)!==!0&&I!==!0&&S($)!==!0&&ge(o,!0,()=>O(!0))};O()}else l.clearValue(t)}function dt(t){c("keypress",t)}function ct(t){if(c("keydown",t),Sl(t)===!0)return;const o=y.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),i=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(v.value!==-1||o===!0);if(t.keyCode===27){Ze(t);return}if(t.keyCode===9&&i===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&d.value===!1){we(t),ye();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ge(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&c("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(we(t),v.value=-1,Ne(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&fe.value!==void 0&&(we(t),v.value=Math.max(-1,Math.min(W.value,v.value+(t.keyCode===33?-1:1)*fe.value.view)),Ne(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(we(t),Ne(t.keyCode===38?-1:1,e.multiple));const S=W.value;if((T===void 0||B<Date.now())&&(T=""),S>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length!==0)){d.value!==!0&&ye(t);const O=t.key.toLocaleLowerCase(),I=T.length===1&&T[0]===O;B=Date.now()+1500,I===!1&&(we(t),T+=O);const Q=new RegExp("^"+T.split("").map(Ye=>Pl.indexOf(Ye)!==-1?"\\"+Ye:Ye).join(".*"),"i");let D=v.value;if(I===!0||D<0||Q.test($.value(e.options[D]))!==!0)do D=Tt(D+1,-1,S-1);while(D!==v.value&&(me.value(e.options[D])===!0||Q.test($.value(e.options[D]))!==!0));v.value!==D&&ae(()=>{Se(D),ve(D),D>=0&&e.useInput===!0&&e.fillInput===!0&&Qe($.value(e.options[D]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||i===!1))){if(t.keyCode!==9&&we(t),v.value!==-1&&v.value<S){de(e.options[v.value]);return}if(o===!0){const O=(I,Q)=>{if(Q){if(Lt(Q)!==!0)return}else Q=e.newValueMode;if(Oe("",e.multiple!==!0,!0),I==null)return;(Q==="toggle"?de:ot)(I,Q==="add-unique"),e.multiple!==!0&&(H.value!==null&&H.value.focus(),ce())};if(e.onNewValue!==void 0?c("newValue",y.value,O):O(y.value),e.multiple!==!0)return}d.value===!0?be():l.innerLoading.value!==!0&&ye()}}function ft(){return L===!0?_e.value:ue.value!==null&&ue.value.contentEl!==null?ue.value.contentEl:void 0}function Kt(){return ft()}function Wt(){return e.hideSelected===!0?[]:n["selected-item"]!==void 0?se.value.map(t=>n["selected-item"](t)).slice():n.selected!==void 0?[].concat(n.selected()):e.useChips===!0?se.value.map((t,o)=>E(xl,{key:"option-"+o,removable:l.editable.value===!0&&me.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(o)}},()=>E("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[E("span",{[Be.value===!0?"innerHTML":"textContent"]:G.value})]}function vt(){if(U.value===!0)return n["no-option"]!==void 0?n["no-option"]({inputValue:y.value}):void 0;const t=n.option!==void 0?n.option:i=>E(j,{key:i.index,...i.itemProps},()=>E(h,()=>E(z,()=>E("span",{[i.html===!0?"innerHTML":"textContent"]:i.label}))));let o=Ke("div",Pe.value.map(t));return n["before-options"]!==void 0&&(o=n["before-options"]().concat(o)),yl(n["after-options"],o)}function Gt(t,o){const i=o===!0?{...He.value,...l.splitAttrs.attributes.value}:void 0,S={ref:o===!0?H:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...i,id:o===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Nt.value};return t!==!0&&L===!0&&(Array.isArray(S.class)===!0?S.class=[...S.class,"no-pointer-events"]:S.class+=" no-pointer-events"),E("input",S)}function mt(t){w!==null&&(clearTimeout(w),w=null),_!==null&&(clearTimeout(_),_=null),!(t&&t.target&&t.target.qComposing===!0)&&(Qe(t.target.value||""),K=!0,Z=y.value,l.focused.value!==!0&&(L!==!0||R.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ge(y.value)},e.inputDebounce)))}function Qe(t,o){y.value!==t&&(y.value=t,o===!0||e.inputDebounce===0||e.inputDebounce==="0"?c("inputValue",t):_=setTimeout(()=>{_=null,c("inputValue",t)},e.inputDebounce))}function Oe(t,o,i){K=i!==!0,e.useInput===!0&&(Qe(t,!0),(o===!0||i!==!0)&&(Z=t),o!==!0&&ge(t))}function ge(t,o,i){if(e.onFilter===void 0||o!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?c("filterAbort"):(l.innerLoading.value=!0,f.value=!0),t!==""&&e.multiple!==!0&&s.value.length!==0&&K!==!0&&t===$.value(s.value[0])&&(t="");const S=setTimeout(()=>{d.value===!0&&(d.value=!1)},10);q!==null&&clearTimeout(q),q=S,c("filter",t,(O,I)=>{(o===!0||l.focused.value===!0)&&q===S&&(clearTimeout(q),typeof O=="function"&&O(),f.value=!1,ae(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(o===!0?d.value===!0&&ce():d.value===!0?Xe(!0):d.value=!0),typeof I=="function"&&ae(()=>{I(r)}),typeof i=="function"&&ae(()=>{i(r)})}))},()=>{l.focused.value===!0&&q===S&&(clearTimeout(q),l.innerLoading.value=!1,f.value=!1),d.value===!0&&(d.value=!1)})}function $t(){return E(Fl,{ref:ue,class:p.value,style:e.popupContentStyle,modelValue:d.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&U.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:M.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:We.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...re.value,onScrollPassive:Ae,onBeforeShow:gt,onBeforeHide:Xt,onShow:Yt},vt)}function Xt(t){bt(t),be()}function Yt(){ze()}function Zt(t){he(t),H.value!==null&&H.value.focus(),R.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Jt(t){he(t),ae(()=>{R.value=!1})}function el(){const t=[E(Dl,{class:`col-auto ${l.fieldClass.value}`,...g.value,for:l.targetUid.value,dark:M.value,square:!0,loading:f.value,itemAligned:!1,filled:!0,stackLabel:y.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Zt,onBlur:Jt},{...n,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return d.value===!0&&t.push(E("div",{ref:_e,class:p.value+" scroll",style:e.popupContentStyle,...re.value,onClick:Ze,onScrollPassive:Ae},vt())),E(gl,{ref:oe,modelValue:m.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:gt,onBeforeHide:tl,onHide:ll,onShow:ul},()=>E("div",{class:"q-select__dialog"+(M.value===!0?" q-select__dialog--dark q-dark":"")+(R.value===!0?" q-select__dialog--focused":"")},t))}function tl(t){bt(t),oe.value!==null&&oe.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function ll(t){ce(),l.focused.value===!1&&c("blur",t),pe()}function ul(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&H.value!==null&&H.value!==t&&H.value.focus(),ze()}function be(){m.value!==!0&&(v.value=-1,d.value===!0&&(d.value=!1),l.focused.value===!1&&(q!==null&&(clearTimeout(q),q=null),l.innerLoading.value===!0&&(c("filterAbort"),l.innerLoading.value=!1,f.value=!1)))}function ye(t){l.editable.value===!0&&(L===!0?(l.onControlFocusin(t),m.value=!0,ae(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ge(y.value):(U.value!==!0||n["no-option"]!==void 0)&&(d.value=!0))}function ce(){m.value=!1,be()}function pe(){e.useInput===!0&&Oe(e.multiple!==!0&&e.fillInput===!0&&s.value.length!==0&&$.value(s.value[0])||"",!0,!0)}function Xe(t){let o=-1;if(t===!0){if(s.value.length!==0){const i=te.value(s.value[0]);o=e.options.findIndex(S=>Te(te.value(S),i))}J(o)}Se(o)}function nl(t,o){d.value===!0&&l.innerLoading.value===!1&&(J(-1,!0),ae(()=>{d.value===!0&&l.innerLoading.value===!1&&(t>o?J():Xe(!0))}))}function St(){m.value===!1&&ue.value!==null&&ue.value.updatePosition()}function gt(t){t!==void 0&&he(t),c("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function bt(t){t!==void 0&&he(t),c("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function yt(){L=F.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?n["no-option"]!==void 0||e.onFilter!==void 0||U.value===!1:!0),X=F.platform.is.ios===!0&&L===!0&&e.useInput===!0?"fade":e.transitionShow}return fl(yt),vl(St),yt(),Ht(()=>{w!==null&&clearTimeout(w),_!==null&&clearTimeout(_)}),Object.assign(r,{showPopup:ye,hidePopup:ce,removeAtIndex:Ge,add:ot,toggleOption:de,getOptionIndex:()=>v.value,setOptionIndex:Se,moveOptionSelection:Ne,filter:ge,updateMenuPosition:St,updateInputValue:Oe,isOptionSelected:$e,getEmittingOptionValue:at,isOptionDisabled:(...t)=>me.value.apply(null,t)===!0,getOptionValue:(...t)=>te.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:s,fieldClass:C(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:De,targetRef:H,hasValue:P,showPopup:ye,floatingLabel:C(()=>e.hideSelected!==!0&&P.value===!0||typeof y.value=="number"||y.value.length!==0||pt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(m.value===!0||U.value!==!0||n["no-option"]!==void 0))return L===!0?el():$t();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{pe(),be()})},onClick(t){if(Ze(t),L!==!0&&d.value===!0){be(),H.value!==null&&H.value.focus();return}ye(t)}},getControl:t=>{const o=Wt(),i=t===!0||m.value!==!0||L!==!0;if(e.useInput===!0)o.push(Gt(t,i));else if(l.editable.value===!0){const O=i===!0?He.value:void 0;o.push(E("input",{ref:i===!0?H:void 0,key:"d_t",class:"q-select__focus-target",id:i===!0?l.targetUid.value:void 0,value:G.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...O,onKeydown:ct,onKeyup:rt,onKeypress:dt})),i===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&o.push(E("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:st}))}if(ie.value!==void 0&&e.disable!==!0&&Ue.value.length!==0){const O=Ue.value.map(I=>E("option",{value:I,selected:!0}));o.push(E("select",{class:"hidden",name:ie.value,multiple:e.multiple},O))}const S=e.useInput===!0||i!==!0?void 0:l.splitAttrs.attributes.value;return E("div",{class:"q-field__native row items-center",...S,...l.splitAttrs.listeners.value},o)},getInnerAppend:()=>e.loading!==!0&&f.value!==!0&&e.hideDropdownIcon!==!0?[E(le,{class:"q-select__dropdown-icon"+(d.value===!0?" rotate-180":""),name:Ee.value})]:null}),qt(l)}}),Nl={__name:"SettingsPage",setup(e,{expose:n}){n();const c=Mt(),r="pwa",F="0.8.13",d=x(null),m=x(!1),v=ht(),y=wt(),R=x("-"),f=x("-"),{fromLanguage:w,toLanguage:_}=v.settings;Vt(async()=>{Ct().then(T=>d.value=T?.version),k()}),_t(()=>{(w!==v.settings.fromLanguage||_!==v.settings.toLanguage)&&y.loadSearchWords()});const k=()=>{kt.objects.count().then(T=>R.value=T),At.objects.count().then(T=>f.value=T)},L=()=>{m.value=!0,zt().then(T=>{T&&q()}),setTimeout(()=>m.value=!1,500)},K=()=>{c.dialog({message:"Обновить всю Базу Данных приложения?",cancel:!0,persistent:!0,ok:{label:"Обновить",color:"orange-10"}}).onOk(()=>{Et().then(T=>{T&&q()})})};function q(){d.value=v.updates.version,k()}const X={$q:c,appMode:r,version:F,versionToUpdate:d,isChecking:m,storeSettings:v,storeEntries:y,topicCount:R,entryCount:f,fromLanguage:w,toLanguage:_,updateDbCounters:k,checkUpdates:L,updateDbData:K,onUpdated:q,deleteDb:()=>{c.dialog({html:!0,message:'Удалить Базу Данных приложения?<br><span class="text-caption">будут потеряны все пользовательские данные</span>',cancel:!0,persistent:!0,ok:{label:"Удалить",color:"red-10"}}).onOk(()=>{et.delete(),et.open(),v.resetUpdates(),v.settings.topicActiveIds=[],k()})},onMounted:Vt,onUnmounted:_t,ref:x,get useQuasar(){return Mt},get ELEMENT_SIZES(){return wl},get LANGUAGES(){return Vl},get SORT_ORDER(){return Cl},get db(){return et},get Topic(){return kt},get Entry(){return At},get useStoreSettings(){return ht},get useStoreEntries(){return wt},get getUpdateInfo(){return Ct},get forceSWupdate(){return _l},get updateData(){return zt},get updateAllData(){return Et}};return Object.defineProperty(X,"__isScriptSetup",{enumerable:!1,value:!0}),X}},Ql={class:"absolute-center"},jl={key:0},Kl={key:1};function Wl(e,n,c,r,F,d){return Me(),Je(hl,null,[u(Il,{elevated:""},{default:a(()=>[u(Tl,null,{default:a(()=>[u(xe,{flat:"",dense:"",round:"",icon:"arrow_back","aria-label":"Back",onClick:n[0]||(n[0]=m=>e.$router.back())}),u(Ml,null,{default:a(()=>[kl("div",Ql,N(e.$t("Настройки")),1)]),_:1})]),_:1})]),_:1}),u(Ol,{padding:""},{default:a(()=>[u(Fe,{bordered:"",padding:""},{default:a(()=>[u(z,{header:""},{default:a(()=>[A(N(e.$t("Язык")),1)]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"language"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>n[7]||(n[7]=[A("Main language")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(je,{modelValue:r.storeSettings.settings.fromLanguage,"onUpdate:modelValue":n[1]||(n[1]=m=>r.storeSettings.settings.fromLanguage=m),options:r.LANGUAGES,"emit-value":"","map-options":"",style:{"font-size":"100%"},behavior:"menu",standout:"",dense:""},null,8,["modelValue","options"])]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"translate"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Язык перевода")),1)]),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(je,{modelValue:r.storeSettings.settings.toLanguage,"onUpdate:modelValue":n[2]||(n[2]=m=>r.storeSettings.settings.toLanguage=m),options:r.LANGUAGES,"emit-value":"","map-options":"",style:{"font-size":"100%"},behavior:"menu",standout:"",dense:""},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),u(Fe,{bordered:"",padding:""},{default:a(()=>[u(z,{header:""},{default:a(()=>[A(N(e.$t("Отображение")),1)]),_:1}),u(j,{clickable:"",to:"/topics"},{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"checklist_rtl"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Темы")),1)]),_:1}),u(z,{caption:""},{default:a(()=>n[8]||(n[8]=[A(" Выбор используемых тем разговорника для отображения в панели навигации ")])),_:1})]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"sort"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Порядок сортировки")),1)]),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(je,{modelValue:r.storeSettings.settings.sortOrder,"onUpdate:modelValue":n[3]||(n[3]=m=>r.storeSettings.settings.sortOrder=m),options:r.SORT_ORDER,"emit-value":"","map-options":"",style:{"font-size":"100%"},behavior:"menu",standout:"",dense:""},null,8,["modelValue","options"])]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"compress"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Только транскрипция")),1)]),_:1}),u(z,{caption:""},{default:a(()=>n[9]||(n[9]=[A(" Показывать в списках только транскрипцию для экономии места ")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(It,{modelValue:r.storeSettings.settings.showOnlyT,"onUpdate:modelValue":n[4]||(n[4]=m=>r.storeSettings.settings.showOnlyT=m),color:"primary"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(Fe,{bordered:"",padding:""},{default:a(()=>[u(z,{header:""},{default:a(()=>[A(N(e.$t("Оформление")),1)]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"dark_mode"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Темный режим")),1)]),_:1}),u(z,{caption:""},{default:a(()=>n[10]||(n[10]=[A("Включить тёмную тему оформления")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(It,{modelValue:r.storeSettings.settings.darkMode,"onUpdate:modelValue":n[5]||(n[5]=m=>r.storeSettings.settings.darkMode=m),color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"format_size"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("Размер шрифта")),1)]),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(je,{modelValue:r.storeSettings.settings.fontSize,"onUpdate:modelValue":n[6]||(n[6]=m=>r.storeSettings.settings.fontSize=m),options:r.ELEMENT_SIZES.FONTS,style:{"font-size":"100%"},behavior:"menu",standout:"",dense:""},{option:a(m=>[u(j,Al(zl(m.itemProps)),{default:a(()=>[u(h,{style:El({fontSize:m.opt})},{default:a(()=>[A(N(m.opt),1)]),_:2},1032,["style"])]),_:2},1040)]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),u(Fe,{bordered:"",padding:""},{default:a(()=>[u(z,{header:""},{default:a(()=>[A(N(e.$t("Данные"))+" ",1),u(z,{class:"q-mt-sm"},{default:a(()=>[A(N(e.$t("Темы"))+": "+N(r.topicCount)+", лексемы и фразы: "+N(r.entryCount),1)]),_:1})]),_:1}),u(j,{clickable:"",to:"/backup"},{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(le,{name:"settings_backup_restore"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>n[11]||(n[11]=[A("Backup")])),_:1}),u(z,{caption:""},{default:a(()=>n[12]||(n[12]=[A(" Создание резервной копии и восстановление из неё пользовательских данных ")])),_:1})]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,null,{default:a(()=>[u(z,null,{default:a(()=>n[13]||(n[13]=[A(" Обновить базу данных ")])),_:1}),u(z,{caption:""},{default:a(()=>n[14]||(n[14]=[A(" Нажмите, чтобы принудительно обновить все данные с внешнего ресурса ")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(xe,{onClick:r.updateDbData,icon:"cloud_download",label:"Update",color:"primary"})]),_:1})]),_:1}),u(j,null,{default:a(()=>[u(h,null,{default:a(()=>[u(z,null,{default:a(()=>n[15]||(n[15]=[A("Удалить базу данных")])),_:1}),u(z,{caption:""},{default:a(()=>n[16]||(n[16]=[A(" Нажмите, чтобы полностью удалить все данные. После этого необходимо обновить данные или перезапустить приложение ")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(xe,{onClick:r.deleteDb,icon:"delete",label:"Delete",color:"negative"})]),_:1})]),_:1})]),_:1}),u(Fe,{bordered:"",padding:""},{default:a(()=>[u(z,{header:""},{default:a(()=>n[17]||(n[17]=[A("Информация, обновления")])),_:1}),u(j,{clickable:"",to:"/about"},{default:a(()=>[u(h,{avatar:""},{default:a(()=>[u(Ll,{src:"icons/pythonol.png",width:"24px"})]),_:1}),u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[A(N(e.$t("О программе")),1)]),_:1}),u(z,{caption:""},{default:a(()=>n[18]||(n[18]=[A(" Краткое описание программы, справка, информация об авторе ")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[A(N(r.appMode)+" "+N(r.version),1)]),_:1})]),_:1}),r.version===r.versionToUpdate||!r.versionToUpdate?(Me(),Ot(j,{key:0},{default:a(()=>[u(h,null,{default:a(()=>[u(z,null,{default:a(()=>[r.versionToUpdate?(Me(),Je("span",jl,"Используется актуальная версия")):(Me(),Je("span",Kl,"⚠️ Не удалось получить номер актуальной версии"))]),_:1}),u(z,{caption:""},{default:a(()=>n[19]||(n[19]=[A("Нажмите, чтобы проверить наличие обновлений")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(xe,{onClick:r.checkUpdates,loading:r.isChecking,icon:"cached",label:"Check",color:"primary"},null,8,["loading"])]),_:1})]),_:1})):(Me(),Ot(j,{key:1},{default:a(()=>[u(h,null,{default:a(()=>[u(z,null,{default:a(()=>n[20]||(n[20]=[A("Есть новая версия")])),_:1}),u(z,{caption:""},{default:a(()=>n[21]||(n[21]=[A(" Нажмите, чтобы обновить. Возможно потребуется перезапустить приложение ")])),_:1})]),_:1}),u(h,{side:""},{default:a(()=>[u(xe,{onClick:r.forceSWupdate,icon:"get_app",label:r.versionToUpdate,color:"primary"},null,8,["onClick","label"])]),_:1})]),_:1}))]),_:1})]),_:1})],64)}const ou=pl(Nl,[["render",Wl],["__file","SettingsPage.vue"]]);export{ou as default};
