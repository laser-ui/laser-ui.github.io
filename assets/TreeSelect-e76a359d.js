import{r as o,g as Ye,A as ht,l as R,j as s,u as mt,a as bt,b as gt,d as xt,v as vt,e as St,c as ie,x as kt,F as Et,G as ne,H as wt,R as yt,W as Oe,J as jt,h as It,i as Rt,k as Ee,m as oe,p as Ct,I as ce,K as Nt,L as Dt,q as Ke,P as Tt,n as Mt,M as we}from"./index-3171826a.js";import{u as Pt}from"./useForkRef-56ab5261.js";import{S as Lt}from"./cancel-ffa81254.js";import{S as At}from"./keyboard_arrow_down-3f36e825.js";import{S as Wt}from"./search-a74fa008.js";import{g as ye}from"./utils-c2ed83c6.js";import{T as S,M as Ft,S as zt}from"./single-node-19c90d0d.js";import{V as Ht}from"./VirtualScroll-44475310.js";import{C as $t}from"./Checkbox-8acabd5e.js";import{E as Be}from"./Empty-8cde83cd.js";import{T as Vt}from"./TreePanel-a6090f86.js";import{B as Ut}from"./BaseInput-2e13ece1.js";import{i as Ot}from"./isPrintableCharacter-1b5c27a6.js";import{T as Ge}from"./Tag-76048dc4.js";function Kt(ae,de){const{namespace:ue,styled:_,id:m,list:A,customItem:K,itemId:B,itemFocused:x,multiple:$,onlyLeafSelectable:pe,virtual:W,focusVisible:G,onClick:a}=ae,p=o.useRef(null),C=o.useRef(null),Y=Ye(c=>{var N,k,h,D;if(p.current){let d;switch(c){case"next":d=(N=C.current)==null?void 0:N.scrollToStep(p.current,1);break;case"prev":d=(k=C.current)==null?void 0:k.scrollToStep(p.current,-1);break;case"first":d=(h=C.current)==null?void 0:h.scrollToStart(p.current);break;case"last":d=(D=C.current)==null?void 0:D.scrollToEnd(p.current);break;default:c instanceof HTMLElement&&p.current&&ht(c,p.current);break}return d}});o.useImperativeHandle(de,()=>Y,[Y]);const F=o.useMemo(()=>({list:A,itemKey:c=>c.value,itemSize:R.isNumber(W)?W:32,itemFocusable:c=>c[S].enabled}),[A,W]);return s.jsx(Ht,{...F,ref:C,enable:W!==!1,listSize:264,listPadding:4,itemRender:(c,N,k)=>{const h=c[S];let D=h.checked;if(!pe){let d=h;for(;d.parent;)if(d=d.parent,d.id===c.value){D=!0;break}}return o.createElement("li",{..._("tree__option",{"tree__option.is-selected":!$&&D,"tree__option.is-disabled":h.disabled}),...k,key:c.value,id:B(c.value),title:c.label,role:"option","aria-selected":h.checked,"aria-disabled":h.disabled,onClick:()=>{a(c)}},G&&(x==null?void 0:x.value)===c.value&&s.jsx("div",{className:`${ue}-focus-outline`}),$&&s.jsx("div",{..._("tree__option-checkbox"),children:s.jsx($t,{model:h.checked,disabled:h.disabled})}),s.jsx("div",{..._("tree__option-content"),children:K?K(h.origin):ye(h)}))},itemFocused:x==null?void 0:x.value,placeholder:"li",children:(c,N)=>s.jsx("ul",{..._("tree"),ref:p,id:m,tabIndex:-1,role:"listbox","aria-multiselectable":$,"aria-activedescendant":R.isUndefined(x)?void 0:B(x.value),onScroll:N,children:A.length===0?s.jsx(Be,{style:{padding:"12px 28px"},image:Be.SIMPLE_IMG}):c})})}const Bt=o.forwardRef(Kt),Gt={"tree-select":"^tree-select","tree-select.is-expanded":"is-expanded","tree-select.is-disabled":"is-disabled","tree-select--small":"^tree-select--small","tree-select--medium":"^tree-select--medium","tree-select--large":"^tree-select--large","tree-select__container":"^tree-select__container","tree-select__content":"^tree-select__content","tree-select__search":"^tree-select__search","tree-select__placeholder-wrapper":"^tree-select__placeholder-wrapper","tree-select__placeholder":"^tree-select__placeholder","tree-select__multiple-count":"^tree-select__multiple-count","tree-select__close":"^tree-select__close","tree-select__clear":"^tree-select__clear","tree-select__icon":"^tree-select__icon","tree-select__arrow":"^tree-select__arrow","tree-select-popup":"^tree-select-popup","tree-select-popup__content":"^tree-select-popup__content","tree-select-popup__loading":"^tree-select-popup__loading","tree-select-popup__loading--empty":"^tree-select-popup__loading--empty",tree:"^tree","tree--line":"^tree--line",tree__group:"^tree__group","tree__group--root":"^tree__group--root",tree__option:"^tree__option","tree__option.is-selected":"is-selected","tree__option.is-disabled":"is-disabled","tree__option--root":"^tree__option--root","tree__option--first":"^tree__option--first","tree__option-dot":"^tree__option-dot","tree__option-icon":"^tree__option-icon","tree__option-arrow":"^tree__option-arrow","tree__option-arrow.is-expand":"is-expand","tree__option-checkbox":"^tree__option-checkbox","tree__option-content":"^tree__option-content",tree__empty:"^tree__empty"};function Yt(ae,de){const{styleOverrides:ue,styleProvider:_,formControl:m,list:A,model:K,defaultModel:B,expands:x,defaultExpands:$,visible:pe,defaultVisible:W,placeholder:G,multiple:a=!1,searchable:p=!1,searchValue:C,defaultSearchValue:Y,onlyLeafSelectable:F=!0,showLine:c=!1,clearable:N=!1,loading:k=!1,size:h,disabled:D=!1,virtual:d=!1,escClosable:qe=!0,customItem:je,customSelected:q,customSearch:T,inputRef:Je,inputRender:Ie,popupRender:Re,onModelChange:fe,onFirstExpand:_e,onExpandsChange:Ce,onVisibleChange:Ze,onSearch:Qe,onClear:he,afterVisibleChange:z,onScrollBottom:Xe,...b}=mt("TreeSelect",ae),M=bt(),u=gt(Gt,{"tree-select":_==null?void 0:_["tree-select"],tree:_==null?void 0:_.tree,"tree-select-popup":_==null?void 0:_["tree-select-popup"]},ue),J=xt(),Ne=o.useRef({expands:new Set}),{t:De}=vt(),Te=o.useId(),me=`${M}-tree-select-list-${Te}`,be=e=>`${M}-tree-select-item-${e}-${Te}`,{pageScrollRef:et,contentResizeRef:tt}=St(),V=o.useRef(null),P=o.useRef(null),Z=o.useRef(null),st=Pt(Z,Je),U=o.useRef(null),[O,y]=o.useMemo(()=>{const e=A.map(i=>a?new Ft(i,l=>l.value,{disabled:i.disabled}):new zt(i,l=>l.value,{disabled:i.disabled})),t=new Map,r=i=>{for(const l of i)t.set(l.id,l),l.children&&r(l.children)};return r(e),[e,t]},[A,a]),[f,E]=ie(W??!1,pe,Ze),[Q,rt]=ie(Y??"",C,Qe),[X,j]=ie(B??(a?[]:null),K,e=>{fe&&(a?fe(e,e.map(t=>y.get(t).origin)):fe(e,R.isNull(e)?null:y.get(e).origin))},void 0,m==null?void 0:m.control),g=o.useMemo(()=>a?new Set(X):X,[X,a]),Me=e=>{if(a){const t=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",g);j(Array.from(t.keys()))}else(e.isLeaf||!F)&&(j(e.id),E(!1))},Pe=e=>{if(a){const t=e[S].changeStatus(e[S].checked?"UNCHECKED":"CHECKED",g);j(Array.from(t.keys()))}else j(e[S].id),E(!1)};y.forEach(e=>{e.updateStatus(g)});const[Le,Ae]=ie($??[],x,e=>{Ce&&Ce(e,e.map(t=>y.get(t).origin))}),ee=o.useMemo(()=>new Set(Le),[Le]),{size:ge,disabled:H}=kt({size:h,disabled:D||(m==null?void 0:m.control.disabled)}),w=Q.length>0,te=a?g.size>0:!R.isNull(g),se=(()=>{if(!w)return[];const e=R.isUndefined(T==null?void 0:T.filter)?l=>l.label.includes(Q):l=>T.filter(Q,l),t=T==null?void 0:T.sort,r=[],i=l=>{l.forEach(n=>{(!a&&!F||n.isLeaf)&&e(n.origin)&&r.push({label:ye(n),value:n.id,disabled:n.disabled,[S]:n}),n.children&&i(n.children)})};return i(O),t&&r.sort((l,n)=>t(l[S].origin,n[S].origin)),r})(),We=w?se.length===0:O.length===0,[Fe,lt]=Et(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[ze,He]=o.useState(),xe=(()=>{let e;return ze&&(e=y.get(ze.id),e&&e.enabled)||(te&&(e=ne(O,t=>t.enabled&&t.checked,t=>ee.has(t.id)&&t.children)),R.isUndefined(e)&&(e=ne(O,t=>t.enabled,t=>ee.has(t.id)&&t.children))),e})(),[ve,$e]=o.useState(),Se=(()=>{if(ve&&ne(se,e=>e[S].enabled&&e.value===ve.value))return ve;if(w)return ne(se,e=>e[S].enabled)})(),it=wt(f),nt=`calc(var(--${M}-zindex-fixed) + ${it})`,ke=o.useRef(),I=Ye(()=>{if(f&&V.current&&P.current){const e=V.current.offsetWidth,t=P.current.offsetHeight,r=yt.windowSize.width-Oe*2,i=Math.min(P.current.scrollWidth,r),l=jt(V.current,{width:i,height:t},{placement:"bottom-left",inWindow:Oe});ke.current=l.transformOrigin,J.classes.position&&P.current.classList.toggle(J.classes.position,!1),J.replaceRule("position",{top:l.top,left:l.left,minWidth:Math.min(e,r),maxWidth:r}),P.current.classList.toggle(J.classes.position,!0)}}),ot=It(I,!f);Rt(et,"scroll",I,{passive:!0},!f||ot),Ee(V,I,void 0,!f),Ee(P,I,void 0,!f),Ee(tt,I,void 0,!f),o.useImperativeHandle(de,()=>({updatePosition:I}),[I]);const re=e=>{document.activeElement===Z.current&&e.target!==Z.current&&e.button===0&&e.preventDefault()},ct=e=>{const t=ee.has(e.id);e.origin.loading||(t?Ae(r=>{r.splice(r.findIndex(i=>i===e.id),1)}):(Ne.current.expands.has(e.id)||(Ne.current.expands.add(e.id),_e==null||_e(e.id,e.origin)),Ae(r=>{r.push(e.id)})))},L=o.useRef(),le=p&&f,Ve=N&&te&&!f&&!k&&!H,Ue=lt(o.createElement(p?Ut:"div",Object.assign({...oe(u("tree-select__search"),{style:{opacity:le?void 0:0,zIndex:le?void 0:-1}}),...m==null?void 0:m.inputAria,ref:st,tabIndex:H?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":f,"aria-controls":me,onBlur:()=>{E(!1)},onKeyDown:e=>{if(e.code==="Escape")f&&qe&&(e.stopPropagation(),e.preventDefault(),E(!1));else{const t=r=>{if(U.current){const i=U.current(r);i&&(w?$e(i):He(i),d===!1&&!r.includes("level")&&(L.current=()=>{const l=document.getElementById(be(w?i.value:i.id));l&&U.current(l)},f&&(L.current(),L.current=void 0)))}};if(f)switch(e.code){case"ArrowUp":{e.preventDefault(),t("prev");break}case"ArrowDown":{e.preventDefault(),t("next");break}case"ArrowLeft":{w||(e.preventDefault(),t("prev-level"));break}case"ArrowRight":{w||(e.preventDefault(),t("next-level"));break}case"Home":{e.preventDefault(),t("first");break}case"End":{e.preventDefault(),t("last");break}default:{(e.code==="Enter"||e.code==="Space"&&!p)&&(e.preventDefault(),w?Se&&Pe(Se):xe&&Me(xe));break}}else if(!(p&&["Home","End","Enter","Space"].includes(e.code)))switch(e.code){case"End":case"ArrowUp":{e.preventDefault(),E(!0),t("last");break}case"Home":case"ArrowDown":{e.preventDefault(),E(!0),t("first");break}case"Enter":case"Space":{e.preventDefault(),E(!0);break}default:{Ot(e.key)&&E(!0);break}}}}},p?{type:"text",value:Q,autoComplete:"off",disabled:H,onValueChange:e=>{rt(e)}}:{}))),[at,dt,ut]=(()=>{let e=null,t=null,r;if(a){const i=X.map(l=>{const n=y.get(l);return{value:l,label:q?q(l,n==null?void 0:n.origin):n?n.origin.label:String(l),node:n}});t=s.jsx(Ct,{list:i.map(({value:l,label:n,node:v})=>({id:l,title:n,type:"item",disabled:v==null?void 0:v.origin.disabled})),onClick:l=>(j(n=>{n.splice(n.findIndex(v=>v===l),1)}),!1),children:s.jsx(Ge,{tabIndex:-1,size:ge,children:g.size})}),e=i.map(({value:l,label:n,node:v})=>s.jsxs(Ge,{size:ge,children:[n,!(v!=null&&v.disabled||H)&&s.jsx("div",{...u("tree-select__close"),role:"button","aria-label":De("Close"),onClick:ft=>{ft.stopPropagation();const _t=v.changeStatus("UNCHECKED",g);j(Array.from(_t.keys()))},children:s.jsx(ce,{children:s.jsx(Nt,{})})})]},l))}else if(!R.isNull(g)){const i=y.get(g);e=r=q?q(g,i==null?void 0:i.origin):i?ye(i):String(g)}return[e,t,r]})(),pt=Dt({compose:{disabled:H},form:m});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{...b,...oe(u("tree-select",`tree-select--${ge}`,{"tree-select.is-expanded":f,"tree-select.is-disabled":H}),{className:b.className,style:b.style}),...pt,ref:V,onMouseDown:e=>{var t;(t=b.onMouseDown)==null||t.call(b,e),re(e)},onMouseUp:e=>{var t;(t=b.onMouseUp)==null||t.call(b,e),re(e)},onClick:e=>{var t,r;(t=b.onClick)==null||t.call(b,e),(r=Z.current)==null||r.focus({preventScroll:!0}),E(i=>p?!0:!i)},children:[s.jsxs("div",{...u("tree-select__container"),title:ut,children:[Ie?Ie(Ue):Ue,!le&&(te?s.jsx("div",{...u("tree-select__content"),children:at}):G?s.jsx("div",{...u("tree-select__placeholder-wrapper"),children:s.jsx("div",{...u("tree-select__placeholder"),children:G})}):null)]}),a&&s.jsx("div",{...u("tree-select__multiple-count"),onClick:e=>{e.stopPropagation()},children:dt}),Ve&&s.jsx("div",{...u("tree-select__clear"),role:"button","aria-label":De("Clear"),onClick:e=>{e.stopPropagation(),he==null||he(),j(a?[]:null)},children:s.jsx(ce,{children:s.jsx(Lt,{})})}),s.jsx("div",{...oe(u("tree-select__icon"),{style:{visibility:Ve?"hidden":void 0}}),children:s.jsx(ce,{children:k?s.jsx(Ke,{}):le?s.jsx(Wt,{}):s.jsx(At,{...u("tree-select__arrow")})})})]}),s.jsx(Tt,{selector:()=>{let e=document.getElementById(`${M}-tree-select-root`);return e||(e=document.createElement("div"),e.id=`${M}-tree-select-root`,document.body.appendChild(e)),e},children:s.jsx(Mt,{enter:f,during:we,afterRender:()=>{var e;I(),(e=L.current)==null||e.call(L),L.current=void 0},afterEnter:()=>{z==null||z(!0)},afterLeave:()=>{z==null||z(!1)},children:e=>{let t={};switch(e){case"enter":t={transform:"scaleY(0.7)",opacity:0};break;case"entering":t={transition:["transform","opacity"].map(r=>`${r} ${we}ms ease-out`).join(", "),transformOrigin:ke.current};break;case"leaving":t={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(r=>`${r} ${we}ms ease-in`).join(", "),transformOrigin:ke.current};break;case"leaved":t={display:"none"};break}return s.jsx("div",{...oe(u("tree-select-popup"),{style:{zIndex:nt,...t}}),ref:P,onMouseDown:r=>{re(r)},onMouseUp:r=>{re(r)},children:(()=>{const r=s.jsxs("div",{...u("tree-select-popup__content"),children:[k&&s.jsx("div",{...u("tree-select-popup__loading",{"tree-select-popup__loading--empty":We}),children:s.jsx(ce,{children:s.jsx(Ke,{})})}),k&&We?null:w?s.jsx(Bt,{ref:U,namespace:M,styled:u,id:me,list:se,customItem:je,itemId:be,itemFocused:Se,multiple:a,onlyLeafSelectable:F,virtual:d,focusVisible:Fe,onClick:i=>{$e(i),Pe(i)}}):s.jsx(Vt,{style:{maxHeight:264,padding:"4px 0"},ref:U,id:me,namespace:M,styled:u,list:O,itemId:be,itemSelected:!a&&te?y.get(g):void 0,itemFocused:xe,expands:ee,customItem:je,showLine:c,multiple:a,onlyLeafSelectable:F,disabled:!1,virtual:d===!1?void 0:{listSize:264,listPadding:4,itemSize:R.isNumber(d)?d:32},focusVisible:Fe,onNodeFocus:He,onNodeExpand:ct,onNodeClick:Me,onScrollBottom:Xe})]});return Re?Re(r):r})()})}})})]})}const as=o.forwardRef(Yt);export{as as T};
