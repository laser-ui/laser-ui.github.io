import{r as c,u as ft,a as _t,b as ht,d as mt,P as bt,e as vt,c as pe,l as j,R as gt,Y as xt,Z as te,_ as St,g as jt,$ as Ie,a0 as se,a1 as ke,h as yt,i as wt,k as fe,m as L,j as l,p as Et,I as B,a2 as It,a3 as kt,q as Re,a4 as Rt,n as Dt,a5 as _e,W as Ct}from"./index-a7d7e0e1.js";import{u as Nt}from"./useForkRef-a85e7e71.js";import{S as Mt}from"./cancel-7e800541.js";import{S as Pt}from"./add-b3f3883d.js";import{S as Wt}from"./keyboard_arrow_down-f1039ef5.js";import{S as Lt}from"./search-c2445d99.js";import{i as zt}from"./isPrintableCharacter-1b5c27a6.js";import{T as De}from"./Tag-a1feef36.js";import{V as At}from"./VirtualScroll-9695b948.js";import{C as $t}from"./Checkbox-931579e0.js";import{E as Ce}from"./Empty-224174a2.js";const Tt={select:"^select","select.is-expanded":"is-expanded","select.is-disabled":"is-disabled","select--small":"^select--small","select--medium":"^select--medium","select--large":"^select--large",select__container:"^select__container",select__content:"^select__content",select__search:"^select__search","select__placeholder-wrapper":"^select__placeholder-wrapper",select__placeholder:"^select__placeholder","select__multiple-count":"^select__multiple-count",select__close:"^select__close",select__clear:"^select__clear",select__icon:"^select__icon",select__arrow:"^select__arrow","select-popup":"^select-popup","select-popup__loading":"^select-popup__loading","select-popup__loading--empty":"^select-popup__loading--empty",select__list:"^select__list",select__option:"^select__option","select__option.is-selected":"is-selected","select__option.is-disabled":"is-disabled","select__option-prefix":"^select__option-prefix","select__option-content":"^select__option-content","select__option-group":"^select__option-group","select__option-group-label":"^select__option-group-label",select__empty:"^select__empty"},z=Symbol();function Vt(Ne,Me){const{styleOverrides:Pe,styleProvider:D,formControl:m,list:C,model:We,defaultModel:Le,visible:ze,defaultVisible:Ae,placeholder:he,multiple:d=!1,searchable:y=!1,searchValue:$e,defaultSearchValue:Te,clearable:Ve=!1,loading:G=!1,size:Fe,disabled:Oe=!1,monospaced:Ue=!0,virtual:A=!1,escClosable:He=!0,customItem:me,customSelected:N,customSearch:w,createItem:le,inputRef:Be,inputRender:be,onModelChange:ne,onVisibleChange:Ge,onSearch:Ke,onClear:ie,onCreateItem:oe,onScrollBottom:Ye,afterVisibleChange:M,...p}=ft("Select",Ne),P=_t(),o=ht(Tt,{select:D==null?void 0:D.select,"select-popup":D==null?void 0:D["select-popup"]},Pe),g=mt(),{t:K}=bt(),ve=c.useId(),ge=`${P}-select-list-${ve}`,$=e=>`${P}-select-item-${e}-${ve}`,{pageScrollRef:qe,contentResizeRef:Ze}=vt(),E=c.useRef(null),b=c.useRef(null),I=c.useRef(null),Y=c.useRef(null),Je=Nt(Y,Be),T=c.useRef(null),V=c.useMemo(()=>{const e=new Map,s=t=>{for(const n of t)e.set(n.value,n),n.children&&s(n.children)};return s(C),e},[C]),[a,x]=pe(Ae??!1,ze,Ge),[F,Qe]=pe(Te??"",$e,Ke),k=c.useCallback(e=>!e.disabled&&!e.children,[]),[q,Z]=pe(Le??(d?[]:null),We,e=>{ne&&(d?ne(e,e.map(s=>V.get(s))):ne(e,j.isNull(e)?null:V.get(e)))},void 0,m==null?void 0:m.control),v=c.useMemo(()=>d?new Set(q):q,[q,d]),J=e=>{d?Z(s=>{const t=s.findIndex(n=>n===e);t!==-1?s.splice(t,1):s.push(e)}):(Z(e),x(!1))},{size:ce,disabled:W}=gt({size:Fe,disabled:Oe||(m==null?void 0:m.control.disabled)}),O=F.length>0,ae=d?v.size>0:!j.isNull(v),re=(()=>{if(!O)return[];const e=j.isUndefined(w==null?void 0:w.filter)?i=>i.label.includes(F):i=>w.filter(F,i),s=w==null?void 0:w.sort;let t=le==null?void 0:le(F);t&&(t={...t,[z]:!0});let n=[];return C.forEach(i=>{if(!i.children)t&&i.value===t.value&&(t=void 0),e(i)&&n.push(i);else{const u=[];i.children.forEach(h=>{t&&h.value===t.value&&(t=void 0),e(h)&&u.push(h)}),n=n.concat(u)}}),s&&n.sort(s),t&&n.unshift(t),n})(),U=O?re:C,[Xe,et]=xt(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[xe,tt]=c.useState(),st=(()=>{let e;return xe&&(e=V.get(xe.value),e&&k(e))||(ae&&(e=te(C,s=>k(s)&&d?v.has(s.value):v===s.value)),j.isUndefined(e)&&(e=te(C,s=>k(s)))),e})(),[de,lt]=c.useState(),nt=(()=>{if(de&&te(re,e=>k(e)&&e.value===de.value))return de;if(O)return te(re,e=>k(e))})(),f=O?nt:st,Se=e=>{O?lt(e):tt(e)},je=e=>{if(!j.isUndefined(e)){const s=Object.assign({},e);delete s[z],oe==null||oe(s)}},it=St(a),ot=`calc(var(--${P}-zindex-fixed) + ${it})`,Q=c.useRef(),S=jt(()=>{if(a&&E.current&&b.current)if(Ue){const e=Math.min(E.current.offsetWidth,Ie.windowSize.width-se*2),s=b.current.offsetHeight,t=ke(E.current,{width:e,height:s},{placement:"bottom",inWindow:se});Q.current=t.transformOrigin,g.classes.position&&b.current.classList.toggle(g.classes.position,!1),g.replaceRule("position",{top:t.top,left:t.left,width:e}),b.current.classList.toggle(g.classes.position,!0)}else{const e=E.current.offsetWidth,s=b.current.offsetHeight,t=Ie.windowSize.width-se*2,n=Math.min(Math.max(b.current.scrollWidth,e),t),i=ke(E.current,{width:n,height:s},{placement:"bottom-left",inWindow:se});Q.current=i.transformOrigin,g.classes.position&&b.current.classList.toggle(g.classes.position,!1),g.replaceRule("position",{top:i.top,left:i.left,minWidth:Math.min(e,t),maxWidth:t}),b.current.classList.toggle(g.classes.position,!0)}}),ct=yt(S,!a);wt(qe,"scroll",S,{passive:!0},!a||ct),fe(E,S,void 0,!a),fe(b,S,void 0,!a),fe(Ze,S,void 0,!a),c.useImperativeHandle(Me,()=>({updatePosition:S}),[S]);const X=e=>{document.activeElement===Y.current&&e.target!==Y.current&&e.button===0&&e.preventDefault()},R=c.useRef(),ee=y&&a,ye=Ve&&ae&&!a&&!G&&!W,we=et(c.createElement(y?"input":"div",Object.assign({...L(o("select__search"),{style:{opacity:ee?void 0:0,zIndex:ee?void 0:-1}}),...m==null?void 0:m.inputAria,ref:Je,tabIndex:W?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":a,"aria-controls":ge,onBlur:()=>{x(!1)},onKeyDown:e=>{if(e.code==="Escape")a&&He&&(e.stopPropagation(),e.preventDefault(),x(!1));else{const s=t=>{var n,i,u,h;if(I.current){let _;switch(t){case"next":_=(n=T.current)==null?void 0:n.scrollToStep(I.current,1);break;case"prev":_=(i=T.current)==null?void 0:i.scrollToStep(I.current,-1);break;case"first":_=(u=T.current)==null?void 0:u.scrollToStart(I.current);break;case"last":_=(h=T.current)==null?void 0:h.scrollToEnd(I.current);break}_&&(Se(_),A===!1&&(R.current=()=>{const r=document.getElementById($(_.value));r&&Ct(r,I.current)},a&&(R.current(),R.current=void 0)))}};if(a)switch(e.code){case"ArrowUp":{e.preventDefault(),s("prev");break}case"ArrowDown":{e.preventDefault(),s("next");break}case"Home":{e.preventDefault(),s("first");break}case"End":{e.preventDefault(),s("last");break}default:{(e.code==="Enter"||e.code==="Space"&&!y)&&(e.preventDefault(),f&&(f[z]&&je(f),J(f.value)));break}}else if(!(y&&["Home","End","Enter","Space"].includes(e.code)))switch(e.code){case"End":case"ArrowUp":{e.preventDefault(),x(!0),s("last");break}case"Home":case"ArrowDown":{e.preventDefault(),x(!0),s("first");break}case"Enter":case"Space":{e.preventDefault(),x(!0);break}default:{zt(e.key)&&x(!0);break}}}},onChange:e=>{y&&Qe(e.currentTarget.value)}},y?{type:"text",value:F,autoComplete:"off",disabled:W}:{}))),[at,rt,dt]=(()=>{let e=null,s=null,t;if(d){const n=[];for(const i of q){const u=V.get(i);u&&n.push(u)}s=l.jsx(Et,{list:n.map(i=>{const{label:u,value:h,disabled:_}=i,r=N?N(i):u;return{id:h,title:r,type:"item",disabled:_}}),onClick:i=>(J(i),!1),children:l.jsx(De,{tabIndex:-1,size:ce,children:v.size})}),e=n.map(i=>l.jsxs(De,{size:ce,children:[N?N(i):i.label,!(i.disabled||W)&&l.jsx("div",{...o("select__close"),role:"button","aria-label":K("Close"),onClick:u=>{u.stopPropagation(),J(i.value)},children:l.jsx(B,{children:l.jsx(It,{})})})]},i.value))}else if(!j.isNull(v)){const n=V.get(v);n&&(t=n.label,e=N?N(n):t)}return[e,s,t]})(),ut=kt({compose:{disabled:W},form:m}),pt=c.useMemo(()=>({list:U,itemKey:e=>e.value,itemSize:j.isNumber(A)?A:32,itemEmptySize:32,itemNested:e=>e.children,itemFocusable:k}),[k,U,A]);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{...p,...L(o("select",`select--${ce}`,{"select.is-expanded":a,"select.is-disabled":W}),{className:p.className,style:p.style}),...ut,ref:E,onMouseDown:e=>{var s;(s=p.onMouseDown)==null||s.call(p,e),X(e)},onMouseUp:e=>{var s;(s=p.onMouseUp)==null||s.call(p,e),X(e)},onClick:e=>{var s,t;(s=p.onClick)==null||s.call(p,e),(t=Y.current)==null||t.focus({preventScroll:!0}),x(n=>y?!0:!n)},children:[l.jsxs("div",{...o("select__container"),title:dt,children:[be?be(we):we,!ee&&(ae?l.jsx("div",{...o("select__content"),children:at}):he?l.jsx("div",{...o("select__placeholder-wrapper"),children:l.jsx("div",{...o("select__placeholder"),children:he})}):null)]}),d&&l.jsx("div",{...o("select__multiple-count"),onClick:e=>{e.stopPropagation()},children:rt}),ye&&l.jsx("div",{...o("select__clear"),role:"button","aria-label":K("Clear"),onClick:e=>{e.stopPropagation(),Z(d?[]:null),ie==null||ie()},children:l.jsx(B,{children:l.jsx(Mt,{})})}),l.jsx("div",{...L(o("select__icon"),{style:{visibility:ye?"hidden":void 0}}),children:l.jsx(B,{children:G?l.jsx(Re,{}):ee?l.jsx(Lt,{}):l.jsx(Wt,{...o("select__arrow")})})})]}),l.jsx(Rt,{selector:()=>{let e=document.getElementById(`${P}-select-root`);return e||(e=document.createElement("div"),e.id=`${P}-select-root`,document.body.appendChild(e)),e},children:l.jsx(Dt,{enter:a,during:_e,afterRender:()=>{var e;S(),(e=R.current)==null||e.call(R),R.current=void 0},afterEnter:()=>{M==null||M(!0)},afterLeave:()=>{M==null||M(!1)},children:e=>{let s={};switch(e){case"enter":s={transform:"scaleY(0.7)",opacity:0};break;case"entering":s={transition:["transform","opacity"].map(t=>`${t} ${_e}ms ease-out`).join(", "),transformOrigin:Q.current};break;case"leaving":s={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(t=>`${t} ${_e}ms ease-in`).join(", "),transformOrigin:Q.current};break;case"leaved":s={display:"none"};break}return l.jsxs("div",{...L(o("select-popup"),{style:{zIndex:ot,...s}}),ref:b,onMouseDown:t=>{X(t)},onMouseUp:t=>{X(t)},children:[G&&l.jsx("div",{...o("select-popup__loading",{"select-popup__loading--empty":U.length===0}),children:l.jsx(B,{children:l.jsx(Re,{})})}),G&&U.length===0?null:l.jsx(At,{...pt,ref:T,enable:A!==!1,listSize:264,listPadding:4,itemRender:(t,n,i,u,h)=>{const{label:_,value:r,disabled:ue}=t,Ee=me?me(t):_;if(h)return c.createElement("ul",{...o("select__option-group"),key:r,role:"group","aria-labelledby":$(r)},c.createElement("li",{...o("select__option-group-label"),key:r,id:$(r),role:"presentation"},l.jsx("div",{...o("select__option-content"),children:Ee})),h);let H=!1;return d?H=v.has(r):H=v===r,c.createElement("li",{...L(o("select__option",{"select__option.is-selected":!d&&H,"select__option.is-disabled":ue}),{style:{paddingLeft:u.length===0?void 0:12+8}}),...i,key:r,id:$(r),title:(t[z]?K("Create")+" ":"")+_,role:"option","aria-selected":H,"aria-disabled":ue,onClick:()=>{t[z]&&je(t),Se(t),J(r)}},Xe&&(f==null?void 0:f.value)===r&&l.jsx("div",{className:`${P}-focus-outline`}),t[z]?l.jsx("div",{...o("select__option-prefix"),children:l.jsx(B,{theme:"primary",children:l.jsx(Pt,{})})}):d?l.jsx("div",{...o("select__option-prefix"),children:l.jsx($t,{model:H,disabled:ue})}):null,l.jsx("div",{...o("select__option-content"),children:Ee}))},itemFocused:f==null?void 0:f.value,itemEmptyRender:()=>l.jsx("li",{...L(o("select__empty"),{style:{paddingLeft:12+8}}),children:l.jsx("div",{...o("select__option-content"),children:K("No Data")})}),itemInAriaSetsize:t=>!t.children,placeholder:"li",onScrollEnd:Ye,children:(t,n)=>l.jsx("ul",{...o("select__list"),ref:I,id:ge,tabIndex:-1,role:"listbox","aria-multiselectable":d,"aria-activedescendant":j.isUndefined(f)?void 0:$(f.value),onScroll:n,children:U.length===0?l.jsx(Ce,{style:{padding:"12px 0"},image:Ce.SIMPLE_IMG}):t})})]})}})})]})}const Qt=c.forwardRef(Vt);export{Qt as S};
