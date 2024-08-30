import{r as o,g as Ye,A as ft,l as I,j as s,u as _t,a as ht,b as mt,d as bt,v as gt,e as xt,c as le,x as vt,F as St,G as ne,H as kt,R as Et,W as Oe,J as wt,h as yt,i as Ee,m as oe,o as jt,I as ce,K as It,L as Ct,p as Ke,P as Rt,k as Nt,M as we}from"./index-f0b62949.js";import{u as Dt}from"./useForkRef-fc94542c.js";import{S as Tt}from"./cancel-cd307695.js";import{S as Mt}from"./keyboard_arrow_down-4fcc4b5d.js";import{S as Pt}from"./search-027cb5a6.js";import{g as ye}from"./utils-c2ed83c6.js";import{T as S,M as At,S as Lt}from"./single-node-19c90d0d.js";import{V as Wt}from"./VirtualScroll-2434309e.js";import{C as Ft}from"./Checkbox-86e74fa8.js";import{E as Be}from"./Empty-f3671a78.js";import{T as zt}from"./TreePanel-454e0b35.js";import{B as Ht}from"./BaseInput-12450562.js";import{i as $t}from"./isPrintableCharacter-1b5c27a6.js";import{T as Ge}from"./Tag-115470ea.js";function Vt(ae,de){const{namespace:ue,styled:f,id:m,list:L,customItem:K,itemId:B,itemFocused:x,multiple:V,onlyLeafSelectable:pe,virtual:W,focusVisible:G,onClick:a}=ae,p=o.useRef(null),C=o.useRef(null),Y=Ye(c=>{var R,k,_,N;if(p.current){let d;switch(c){case"next":d=(R=C.current)==null?void 0:R.scrollToStep(p.current,1);break;case"prev":d=(k=C.current)==null?void 0:k.scrollToStep(p.current,-1);break;case"first":d=(_=C.current)==null?void 0:_.scrollToStart(p.current);break;case"last":d=(N=C.current)==null?void 0:N.scrollToEnd(p.current);break;default:c instanceof HTMLElement&&p.current&&ft(c,p.current);break}return d}});o.useImperativeHandle(de,()=>Y,[Y]);const F=o.useMemo(()=>({list:L,itemKey:c=>c.value,itemSize:I.isNumber(W)?W:32,itemFocusable:c=>c[S].enabled}),[L,W]);return s.jsx(Wt,{...F,ref:C,enable:W!==!1,listSize:264,listPadding:4,itemRender:(c,R,k)=>{const _=c[S];let N=_.checked;if(!pe){let d=_;for(;d.parent;)if(d=d.parent,d.id===c.value){N=!0;break}}return o.createElement("li",{...f("tree__option",{"tree__option.is-selected":!V&&N,"tree__option.is-disabled":_.disabled}),...k,key:c.value,id:B(c.value),title:c.label,role:"option","aria-selected":_.checked,"aria-disabled":_.disabled,onClick:()=>{a(c)}},G&&(x==null?void 0:x.value)===c.value&&s.jsx("div",{className:`${ue}-focus-outline`}),V&&s.jsx("div",{...f("tree__option-checkbox"),children:s.jsx(Ft,{model:_.checked,disabled:_.disabled})}),s.jsx("div",{...f("tree__option-content"),children:K?K(_.origin):ye(_)}))},itemFocused:x==null?void 0:x.value,placeholder:"li",children:(c,R)=>s.jsx("ul",{...f("tree"),ref:p,id:m,tabIndex:-1,role:"listbox","aria-multiselectable":V,"aria-activedescendant":I.isUndefined(x)?void 0:B(x.value),onScroll:R,children:L.length===0?s.jsx(Be,{style:{padding:"12px 28px"},image:Be.SIMPLE_IMG}):c})})}const Ut=o.forwardRef(Vt),Ot={"tree-select":"^tree-select","tree-select.is-expanded":"is-expanded","tree-select.is-disabled":"is-disabled","tree-select--small":"^tree-select--small","tree-select--medium":"^tree-select--medium","tree-select--large":"^tree-select--large","tree-select__container":"^tree-select__container","tree-select__content":"^tree-select__content","tree-select__search":"^tree-select__search","tree-select__placeholder-wrapper":"^tree-select__placeholder-wrapper","tree-select__placeholder":"^tree-select__placeholder","tree-select__multiple-count":"^tree-select__multiple-count","tree-select__close":"^tree-select__close","tree-select__clear":"^tree-select__clear","tree-select__icon":"^tree-select__icon","tree-select__arrow":"^tree-select__arrow","tree-select-popup":"^tree-select-popup","tree-select-popup__content":"^tree-select-popup__content","tree-select-popup__loading":"^tree-select-popup__loading","tree-select-popup__loading--empty":"^tree-select-popup__loading--empty",tree:"^tree","tree--line":"^tree--line",tree__group:"^tree__group","tree__group--root":"^tree__group--root",tree__option:"^tree__option","tree__option.is-selected":"is-selected","tree__option.is-disabled":"is-disabled","tree__option--root":"^tree__option--root","tree__option--first":"^tree__option--first","tree__option-dot":"^tree__option-dot","tree__option-icon":"^tree__option-icon","tree__option-arrow":"^tree__option-arrow","tree__option-arrow.is-expand":"is-expand","tree__option-checkbox":"^tree__option-checkbox","tree__option-content":"^tree__option-content",tree__empty:"^tree__empty"};function Kt(ae,de){const{styleOverrides:ue,styleProvider:f,formControl:m,list:L,model:K,defaultModel:B,expands:x,defaultExpands:V,visible:pe,defaultVisible:W,placeholder:G,multiple:a=!1,searchable:p=!1,searchValue:C,defaultSearchValue:Y,onlyLeafSelectable:F=!0,showLine:c=!1,clearable:R=!1,loading:k=!1,size:_,disabled:N=!1,virtual:d=!1,escClosable:Je=!0,customItem:je,customSelected:J,customSearch:D,inputRef:qe,inputRender:Ie,popupRender:Ce,onModelChange:fe,onFirstExpand:_e,onExpandsChange:Re,onVisibleChange:Ze,onSearch:Qe,onClear:he,afterVisibleChange:z,onScrollBottom:Xe,...b}=_t("TreeSelect",ae),T=ht(),u=mt(Ot,{"tree-select":f==null?void 0:f["tree-select"],tree:f==null?void 0:f.tree,"tree-select-popup":f==null?void 0:f["tree-select-popup"]},ue),q=bt(),Ne=o.useRef({expands:new Set}),{t:De}=gt(),Te=o.useId(),me=`${T}-tree-select-list-${Te}`,be=e=>`${T}-tree-select-item-${e}-${Te}`,{contentResizeRef:et}=xt(),H=o.useRef(null),M=o.useRef(null),Z=o.useRef(null),tt=Dt(Z,qe),U=o.useRef(null),[O,y]=o.useMemo(()=>{const e=L.map(l=>a?new At(l,i=>i.value,{disabled:l.disabled}):new Lt(l,i=>i.value,{disabled:l.disabled})),t=new Map,r=l=>{for(const i of l)t.set(i.id,i),i.children&&r(i.children)};return r(e),[e,t]},[L,a]),[h,E]=le(W??!1,pe,Ze),[Q,st]=le(Y??"",C,Qe),[X,j]=le(B??(a?[]:null),K,e=>{fe&&(a?fe(e,e.map(t=>y.get(t).origin)):fe(e,I.isNull(e)?null:y.get(e).origin))},void 0,m==null?void 0:m.control),g=o.useMemo(()=>a?new Set(X):X,[X,a]),Me=e=>{if(a){const t=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",g);j(Array.from(t.keys()))}else(e.isLeaf||!F)&&(j(e.id),E(!1))},Pe=e=>{if(a){const t=e[S].changeStatus(e[S].checked?"UNCHECKED":"CHECKED",g);j(Array.from(t.keys()))}else j(e[S].id),E(!1)};y.forEach(e=>{e.updateStatus(g)});const[Ae,Le]=le(V??[],x,e=>{Re&&Re(e,e.map(t=>y.get(t).origin))}),ee=o.useMemo(()=>new Set(Ae),[Ae]),{size:ge,disabled:$}=vt({size:_,disabled:N||(m==null?void 0:m.control.disabled)}),w=Q.length>0,te=a?g.size>0:!I.isNull(g),se=(()=>{if(!w)return[];const e=I.isUndefined(D==null?void 0:D.filter)?i=>i.label.includes(Q):i=>D.filter(Q,i),t=D==null?void 0:D.sort,r=[],l=i=>{i.forEach(n=>{(!a&&!F||n.isLeaf)&&e(n.origin)&&r.push({label:ye(n),value:n.id,disabled:n.disabled,[S]:n}),n.children&&l(n.children)})};return l(O),t&&r.sort((i,n)=>t(i[S].origin,n[S].origin)),r})(),We=w?se.length===0:O.length===0,[Fe,rt]=St(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[ze,He]=o.useState(),xe=(()=>{let e;return ze&&(e=y.get(ze.id),e&&e.enabled)||(te&&(e=ne(O,t=>t.enabled&&t.checked,t=>ee.has(t.id)&&t.children)),I.isUndefined(e)&&(e=ne(O,t=>t.enabled,t=>ee.has(t.id)&&t.children))),e})(),[ve,$e]=o.useState(),Se=(()=>{if(ve&&ne(se,e=>e[S].enabled&&e.value===ve.value))return ve;if(w)return ne(se,e=>e[S].enabled)})(),it=kt(h),lt=`calc(var(--${T}-zindex-fixed) + ${it})`,ke=o.useRef(),P=Ye(()=>{if(h&&H.current&&M.current){const e=H.current.offsetWidth,t=M.current.offsetHeight,r=Et.windowSize.width-Oe*2,l=Math.min(M.current.scrollWidth,r),i=wt(H.current,{width:l,height:t},{placement:"bottom-left",inWindow:Oe});ke.current=i.transformOrigin,q.classes.position&&M.current.classList.toggle(q.classes.position,!1),q.replaceRule("position",{top:i.top,left:i.left,minWidth:Math.min(e,r),maxWidth:r}),M.current.classList.toggle(q.classes.position,!0)}});yt(H,P,!h),Ee(H,P,void 0,!h),Ee(M,P,void 0,!h),Ee(et,P,void 0,!h),o.useImperativeHandle(de,()=>({updatePosition:P}),[P]);const re=e=>{document.activeElement===Z.current&&e.target!==Z.current&&e.button===0&&e.preventDefault()},nt=e=>{const t=ee.has(e.id);e.origin.loading||(t?Le(r=>{r.splice(r.findIndex(l=>l===e.id),1)}):(Ne.current.expands.has(e.id)||(Ne.current.expands.add(e.id),_e==null||_e(e.id,e.origin)),Le(r=>{r.push(e.id)})))},A=o.useRef(),ie=p&&h,Ve=R&&te&&!h&&!k&&!$,Ue=rt(o.createElement(p?Ht:"div",Object.assign({...oe(u("tree-select__search"),{style:{opacity:ie?void 0:0,zIndex:ie?void 0:-1}}),...m==null?void 0:m.inputAria,ref:tt,tabIndex:$?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":h,"aria-controls":me,onBlur:()=>{E(!1)},onKeyDown:e=>{if(e.code==="Escape")h&&Je&&(e.stopPropagation(),e.preventDefault(),E(!1));else{const t=r=>{if(U.current){const l=U.current(r);l&&(w?$e(l):He(l),d===!1&&!r.includes("level")&&(A.current=()=>{const i=document.getElementById(be(w?l.value:l.id));i&&U.current(i)},h&&(A.current(),A.current=void 0)))}};if(h)switch(e.code){case"ArrowUp":{e.preventDefault(),t("prev");break}case"ArrowDown":{e.preventDefault(),t("next");break}case"ArrowLeft":{w||(e.preventDefault(),t("prev-level"));break}case"ArrowRight":{w||(e.preventDefault(),t("next-level"));break}case"Home":{e.preventDefault(),t("first");break}case"End":{e.preventDefault(),t("last");break}default:{(e.code==="Enter"||e.code==="Space"&&!p)&&(e.preventDefault(),w?Se&&Pe(Se):xe&&Me(xe));break}}else if(!(p&&["Home","End","Enter","Space"].includes(e.code)))switch(e.code){case"End":case"ArrowUp":{e.preventDefault(),E(!0),t("last");break}case"Home":case"ArrowDown":{e.preventDefault(),E(!0),t("first");break}case"Enter":case"Space":{e.preventDefault(),E(!0);break}default:{$t(e.key)&&E(!0);break}}}}},p?{type:"text",value:Q,autoComplete:"off",disabled:$,onValueChange:e=>{st(e)}}:{}))),[ot,ct,at]=(()=>{let e=null,t=null,r;if(a){const l=X.map(i=>{const n=y.get(i);return{value:i,label:J?J(i,n==null?void 0:n.origin):n?n.origin.label:String(i),node:n}});t=s.jsx(jt,{list:l.map(({value:i,label:n,node:v})=>({id:i,title:n,type:"item",disabled:v==null?void 0:v.origin.disabled})),onClick:i=>(j(n=>{n.splice(n.findIndex(v=>v===i),1)}),!1),children:s.jsx(Ge,{tabIndex:-1,size:ge,children:g.size})}),e=l.map(({value:i,label:n,node:v})=>s.jsxs(Ge,{size:ge,children:[n,!(v!=null&&v.disabled||$)&&s.jsx("div",{...u("tree-select__close"),role:"button","aria-label":De("Close"),onClick:ut=>{ut.stopPropagation();const pt=v.changeStatus("UNCHECKED",g);j(Array.from(pt.keys()))},children:s.jsx(ce,{children:s.jsx(It,{})})})]},i))}else if(!I.isNull(g)){const l=y.get(g);e=r=J?J(g,l==null?void 0:l.origin):l?ye(l):String(g)}return[e,t,r]})(),dt=Ct({compose:{disabled:$},form:m});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{...b,...oe(u("tree-select",`tree-select--${ge}`,{"tree-select.is-expanded":h,"tree-select.is-disabled":$}),{className:b.className,style:b.style}),...dt,ref:H,onMouseDown:e=>{var t;(t=b.onMouseDown)==null||t.call(b,e),re(e)},onMouseUp:e=>{var t;(t=b.onMouseUp)==null||t.call(b,e),re(e)},onClick:e=>{var t,r;(t=b.onClick)==null||t.call(b,e),(r=Z.current)==null||r.focus({preventScroll:!0}),E(l=>p?!0:!l)},children:[s.jsxs("div",{...u("tree-select__container"),title:at,children:[Ie?Ie(Ue):Ue,!ie&&(te?s.jsx("div",{...u("tree-select__content"),children:ot}):G?s.jsx("div",{...u("tree-select__placeholder-wrapper"),children:s.jsx("div",{...u("tree-select__placeholder"),children:G})}):null)]}),a&&s.jsx("div",{...u("tree-select__multiple-count"),onClick:e=>{e.stopPropagation()},children:ct}),Ve&&s.jsx("div",{...u("tree-select__clear"),role:"button","aria-label":De("Clear"),onClick:e=>{e.stopPropagation(),he==null||he(),j(a?[]:null)},children:s.jsx(ce,{children:s.jsx(Tt,{})})}),s.jsx("div",{...oe(u("tree-select__icon"),{style:{visibility:Ve?"hidden":void 0}}),children:s.jsx(ce,{children:k?s.jsx(Ke,{}):ie?s.jsx(Pt,{}):s.jsx(Mt,{...u("tree-select__arrow")})})})]}),s.jsx(Rt,{selector:()=>{let e=document.getElementById(`${T}-tree-select-root`);return e||(e=document.createElement("div"),e.id=`${T}-tree-select-root`,document.body.appendChild(e)),e},children:s.jsx(Nt,{enter:h,during:we,afterRender:()=>{var e;P(),(e=A.current)==null||e.call(A),A.current=void 0},afterEnter:()=>{z==null||z(!0)},afterLeave:()=>{z==null||z(!1)},children:e=>{let t={};switch(e){case"enter":t={transform:"scaleY(0.7)",opacity:0};break;case"entering":t={transition:["transform","opacity"].map(r=>`${r} ${we}ms ease-out`).join(", "),transformOrigin:ke.current};break;case"leaving":t={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(r=>`${r} ${we}ms ease-in`).join(", "),transformOrigin:ke.current};break;case"leaved":t={display:"none"};break}return s.jsx("div",{...oe(u("tree-select-popup"),{style:{zIndex:lt,...t}}),ref:M,onMouseDown:r=>{re(r)},onMouseUp:r=>{re(r)},children:(()=>{const r=s.jsxs("div",{...u("tree-select-popup__content"),children:[k&&s.jsx("div",{...u("tree-select-popup__loading",{"tree-select-popup__loading--empty":We}),children:s.jsx(ce,{children:s.jsx(Ke,{})})}),k&&We?null:w?s.jsx(Ut,{ref:U,namespace:T,styled:u,id:me,list:se,customItem:je,itemId:be,itemFocused:Se,multiple:a,onlyLeafSelectable:F,virtual:d,focusVisible:Fe,onClick:l=>{$e(l),Pe(l)}}):s.jsx(zt,{style:{maxHeight:264,padding:"4px 0"},ref:U,id:me,namespace:T,styled:u,list:O,itemId:be,itemSelected:!a&&te?y.get(g):void 0,itemFocused:xe,expands:ee,customItem:je,showLine:c,multiple:a,onlyLeafSelectable:F,disabled:!1,virtual:d===!1?void 0:{listSize:264,listPadding:4,itemSize:I.isNumber(d)?d:32},focusVisible:Fe,onNodeFocus:He,onNodeExpand:nt,onNodeClick:Me,onScrollBottom:Xe})]});return Ce?Ce(r):r})()})}})})]})}const ns=o.forwardRef(Kt);export{ns as T};
