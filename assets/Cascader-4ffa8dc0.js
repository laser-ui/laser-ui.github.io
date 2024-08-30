import{r as n,g as Me,l as W,A as Be,j as s,I as re,p as De,E as da,u as ua,a as pa,b as fa,d as _a,v as ha,e as ba,c as we,x as ma,F as xa,G as Ce,H as ga,R as va,W as Ue,J as Sa,h as ka,i as Ie,m as me,o as ja,K as ya,L as Ea,P as wa,k as Ca,M as Re}from"./index-f0b62949.js";import{u as Ia}from"./useForkRef-fc94542c.js";import{S as Ra}from"./cancel-cd307695.js";import{S as Da}from"./keyboard_arrow_down-4fcc4b5d.js";import{S as Na}from"./search-027cb5a6.js";import{V as Ge}from"./VirtualScroll-2434309e.js";import{C as Ye}from"./Checkbox-86e74fa8.js";import{E as xe}from"./Empty-f3671a78.js";import{g as Ne}from"./utils-c2ed83c6.js";import{T as R,M as Ma,S as Pa}from"./single-node-19c90d0d.js";import{B as Ta}from"./BaseInput-12450562.js";import{i as La}from"./isPrintableCharacter-1b5c27a6.js";import{T as Oe}from"./Tag-115470ea.js";function Aa(Y,ee){const{namespace:ae,styled:p,id:x,list:y,customItem:$,itemId:V,itemSelected:k,itemFocused:_,multiple:P,virtual:l,focusVisible:D,onFocus:J,onClick:j,_root:E=!0}=Y,m=n.useRef(null),g=n.useRef(null),d=n.useRef(null),T=_&&y.findIndex(a=>a.id===_.id)!==-1,o=(()=>{if(_)for(const a of y){if(_.id===a.id)return a;let f=_;for(;f.parent;)if(f=f.parent,f.id===a.id)return a}})(),h=Me(a=>{var f,q,z,w,Z,te,ie;if(m.current){let v;if(E&&W.isUndefined(_))switch(a){case"first":case"next":v=(f=g.current)==null?void 0:f.scrollToStart(m.current);break;case"last":case"prev":v=(q=g.current)==null?void 0:q.scrollToEnd(m.current);break}else if(T)switch(a){case"next":v=(z=g.current)==null?void 0:z.scrollToStep(m.current,1);break;case"prev":v=(w=g.current)==null?void 0:w.scrollToStep(m.current,-1);break;case"first":v=(Z=g.current)==null?void 0:Z.scrollToStart(m.current);break;case"last":v=(te=g.current)==null?void 0:te.scrollToEnd(m.current);break;case"prev-level":o&&o.parent&&(v=o.parent);break;case"next-level":if(o&&o.children){for(const L of o.children)if(L.enabled){v=L;break}}break;default:a instanceof HTMLElement&&m.current&&Be(a,m.current);break}else v=(ie=d.current)==null?void 0:ie.call(d,a);return v}});n.useImperativeHandle(ee,()=>h,[h]);const N=n.useMemo(()=>({list:y,itemKey:a=>a.id,itemSize:W.isNumber(l)?l:32,itemFocusable:a=>a.enabled}),[y,l]);return s.jsxs(s.Fragment,{children:[s.jsx(Ge,{...N,ref:g,enable:l!==!1,listSize:264,listPadding:4,itemRender:(a,f,q)=>{let z=!1;if(a.children&&k){let w=k;for(;w.parent;)if(w=w.parent,w.id===a.id){z=!0;break}}return n.createElement("li",{...p("cascader__option",{"cascader__option.is-focused":a.id===(o==null?void 0:o.id),"cascader__option.is-selected":!P&&a.checked,"cascader__option.is-disabled":a.disabled}),...q,key:a.id,id:V(a.id),title:a.origin.label,role:"option","aria-selected":a.checked,"aria-disabled":a.disabled,onClick:()=>{J(a),P&&!a.isLeaf||j(a)}},D&&(_==null?void 0:_.id)===a.id&&s.jsx("div",{className:`${ae}-focus-outline`}),z&&s.jsx("div",{...p("cascader__option-dot")}),P&&s.jsx("div",{...p("cascader__option-prefix"),children:s.jsx(Ye,{model:a.checked,disabled:a.disabled,indeterminate:a.indeterminate,onClick:w=>{w.stopPropagation(),J(a),j(a)}})}),s.jsx("div",{...p("cascader__option-content"),children:$?$(a.origin):a.origin.label}),!a.isLeaf&&s.jsx("div",{...p("cascader__option-icon"),children:s.jsx(re,{children:a.origin.loading?s.jsx(De,{}):s.jsx(da,{})})}))},itemFocused:o==null?void 0:o.id,placeholder:"li",children:(a,f)=>s.jsx("ul",{...p("cascader__list","cascader__list--inline"),ref:m,id:x,tabIndex:-1,role:"listbox","aria-multiselectable":P,"aria-activedescendant":E&&!W.isUndefined(_)?V(_.id):void 0,onScroll:f,children:y.length===0?s.jsx(xe,{style:{padding:"12px 28px"},image:xe.SIMPLE_IMG}):a})}),o&&!o.origin.loading&&o.children&&s.jsx(Je,{...Y,_root:!1,ref:d,id:void 0,list:o.children})]})}const Je=n.forwardRef(Aa);function Fa(Y,ee){const{namespace:ae,styled:p,id:x,list:y,customItem:$,itemId:V,itemFocused:k,multiple:_,onlyLeafSelectable:P,virtual:l,focusVisible:D,onClick:J}=Y,j=n.useRef(null),E=n.useRef(null),m=Me(d=>{var T,o,h,N;if(j.current){let a;switch(d){case"next":a=(T=E.current)==null?void 0:T.scrollToStep(j.current,1);break;case"prev":a=(o=E.current)==null?void 0:o.scrollToStep(j.current,-1);break;case"first":a=(h=E.current)==null?void 0:h.scrollToStart(j.current);break;case"last":a=(N=E.current)==null?void 0:N.scrollToEnd(j.current);break;default:d instanceof HTMLElement&&j.current&&Be(d,j.current);break}return a}});n.useImperativeHandle(ee,()=>m,[m]);const g=n.useMemo(()=>({list:y,itemKey:d=>d.value,itemSize:W.isNumber(l)?l:32,itemFocusable:d=>d[R].enabled}),[y,l]);return s.jsx(Ge,{...g,ref:E,enable:l!==!1,listSize:264,listPadding:4,itemRender:(d,T,o)=>{const h=d[R];let N=h.checked;if(!P){let a=h;for(;a.parent;)if(a=a.parent,a.id===d.value){N=!0;break}}return n.createElement("li",{...p("cascader__option",{"cascader__option.is-selected":!_&&N,"cascader__option.is-disabled":h.disabled}),...o,key:d.value,id:V(d.value),title:d.label,role:"option","aria-selected":h.checked,"aria-disabled":h.disabled,onClick:()=>{J(d)}},D&&(k==null?void 0:k.value)===d.value&&s.jsx("div",{className:`${ae}-focus-outline`}),_&&s.jsx("div",{...p("cascader__option-prefix"),children:s.jsx(Ye,{model:h.checked,disabled:h.disabled})}),s.jsx("div",{...p("cascader__option-content"),children:$?$(h.origin):Ne(h)}))},itemFocused:k==null?void 0:k.value,placeholder:"li",children:(d,T)=>s.jsx("ul",{...p("cascader__list"),ref:j,id:x,tabIndex:-1,role:"listbox","aria-multiselectable":_,"aria-activedescendant":W.isUndefined(k)?void 0:V(k.value),onScroll:T,children:y.length===0?s.jsx(xe,{style:{padding:"12px 28px"},image:xe.SIMPLE_IMG}):d})})}const Wa=n.forwardRef(Fa),za={cascader:"^cascader","cascader.is-expanded":"is-expanded","cascader.is-disabled":"is-disabled","cascader--small":"^cascader--small","cascader--medium":"^cascader--medium","cascader--large":"^cascader--large",cascader__container:"^cascader__container",cascader__content:"^cascader__content",cascader__search:"^cascader__search","cascader__placeholder-wrapper":"^cascader__placeholder-wrapper",cascader__placeholder:"^cascader__placeholder","cascader__multiple-count":"^cascader__multiple-count",cascader__close:"^cascader__close",cascader__clear:"^cascader__clear",cascader__icon:"^cascader__icon",cascader__arrow:"^cascader__arrow","cascader-popup":"^cascader-popup","cascader-popup__content":"^cascader-popup__content","cascader-popup__loading":"^cascader-popup__loading","cascader-popup__loading--empty":"^cascader-popup__loading--empty",cascader__list:"^cascader__list","cascader__list--inline":"^cascader__list--inline",cascader__option:"^cascader__option","cascader__option.is-focused":"is-focused","cascader__option.is-selected":"is-selected","cascader__option.is-disabled":"is-disabled","cascader__option-dot":"^cascader__option-dot","cascader__option-prefix":"^cascader__option-prefix","cascader__option-content":"^cascader__option-content","cascader__option-icon":"^cascader__option-icon",cascader__empty:"^cascader__empty"};function Ha(Y,ee){const{styleOverrides:ae,styleProvider:p,formControl:x,list:y,model:$,defaultModel:V,visible:k,defaultVisible:_,placeholder:P,multiple:l=!1,searchable:D=!1,searchValue:J,defaultSearchValue:j,onlyLeafSelectable:E=!0,clearable:m=!1,loading:g=!1,size:d,disabled:T=!1,virtual:o=!1,escClosable:h=!0,customItem:N,customSelected:a,customSearch:f,inputRef:q,inputRender:z,popupRender:w,onModelChange:Z,onVisibleChange:te,onSearch:ie,onClear:v,onFirstFocus:L,afterVisibleChange:Q,...C}=ua("Cascader",Y),K=pa(),b=fa(za,{cascader:p==null?void 0:p.cascader,"cascader-popup":p==null?void 0:p["cascader-popup"]},ae),ne=_a(),{t:Pe}=ha(),Te=n.useId(),ge=`${K}-cascader-list-${Te}`,ve=e=>`${K}-cascader-item-${e}-${Te}`,{contentResizeRef:qe}=ba(),se=n.useRef(null),U=n.useRef(null),le=n.useRef(null),Ze=Ia(le,q),ce=n.useRef(null),oe=n.useRef({itemFocused:new Set}),[de,O]=n.useMemo(()=>{const e=y.map(r=>l?new Ma(r,t=>t.value,{disabled:r.disabled}):new Pa(r,t=>t.value,{disabled:r.disabled})),c=new Map,i=r=>{for(const t of r)c.set(t.id,t),t.children&&i(t.children)};return i(e),[e,c]},[y,l]),[S,A]=we(_??!1,k,te),[ue,Qe]=we(j??"",J,ie),[pe,H]=we(V??(l?[]:null),$,e=>{Z&&(l?Z(e,e.map(c=>O.get(c).origin)):Z(e,W.isNull(e)?null:O.get(e).origin))},void 0,x==null?void 0:x.control),I=n.useMemo(()=>l?new Set(pe):pe,[pe,l]),Le=e=>{if(l){const c=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",I);H(Array.from(c.keys()))}else(e.isLeaf||!E)&&H(e.id),e.isLeaf&&A(!1)},Ae=e=>{if(l){const c=e[R].changeStatus(e[R].checked?"UNCHECKED":"CHECKED",I);H(Array.from(c.keys()))}else H(e[R].id),A(!1)};O.forEach(e=>{e.updateStatus(I)});const{size:Se,disabled:X}=ma({size:d,disabled:T||(x==null?void 0:x.control.disabled)}),F=ue.length>0,fe=l?I.size>0:!W.isNull(I),_e=(()=>{if(!F)return[];const e=W.isUndefined(f==null?void 0:f.filter)?t=>t.label.includes(ue):t=>f.filter(ue,t),c=f==null?void 0:f.sort,i=[],r=t=>{t.forEach(u=>{(!l&&!E||u.isLeaf)&&e(u.origin)&&i.push({label:Ne(u),value:u.id,disabled:u.disabled,[R]:u}),u.children&&r(u.children)})};return r(de),c&&i.sort((t,u)=>c(t[R].origin,u[R].origin)),i})(),Fe=F?_e.length===0:de.length===0,[We,Xe]=xa(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[ze,ea]=n.useState(),He=e=>{oe.current.itemFocused.has(e.id)||(oe.current.itemFocused.add(e.id),L==null||L(e.id,e.origin)),ea(e)},ke=(()=>{if(ze){const e=O.get(ze.id);if(e&&e.enabled)return e}if(fe)return Ce(de,e=>e.enabled&&e.checked)})(),[je,aa]=n.useState(),$e=e=>{oe.current.itemFocused.has(e.value)||(oe.current.itemFocused.add(e.value),L==null||L(e.value,e[R].origin)),aa(e)},ye=(()=>{if(je&&Ce(_e,e=>e[R].enabled&&e.value===je.value))return je;if(F)return Ce(_e,e=>e[R].enabled)})(),sa=ga(S),ca=`calc(var(--${K}-zindex-fixed) + ${sa})`,Ee=n.useRef(),B=Me(()=>{if(S&&se.current&&U.current){const e=U.current.offsetHeight,c=va.windowSize.width-Ue*2,i=Math.min(U.current.scrollWidth,c),r=Sa(se.current,{width:i,height:e},{placement:"bottom-left",inWindow:Ue});Ee.current=r.transformOrigin,ne.classes.position&&U.current.classList.toggle(ne.classes.position,!1),ne.replaceRule("position",{top:r.top,left:r.left,maxWidth:c}),U.current.classList.toggle(ne.classes.position,!0)}});ka(se,B,!S),Ie(se,B,void 0,!S),Ie(U,B,void 0,!S),Ie(qe,B,void 0,!S),n.useImperativeHandle(ee,()=>({updatePosition:B}),[B]);const he=e=>{document.activeElement===le.current&&e.target!==le.current&&e.button===0&&e.preventDefault()},G=n.useRef(),be=D&&S,Ve=m&&fe&&!S&&!g&&!X,Ke=Xe(n.createElement(D?Ta:"div",Object.assign({...me(b("cascader__search"),{style:{opacity:be?void 0:0,zIndex:be?void 0:-1}}),...x==null?void 0:x.inputAria,ref:Ze,tabIndex:X?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":S,"aria-controls":ge,onBlur:()=>{A(!1)},onKeyDown:e=>{if(e.code==="Escape")S&&h&&(e.stopPropagation(),e.preventDefault(),A(!1));else{const c=i=>{if(ce.current){const r=ce.current(i);r&&(F?$e(r):He(r),o===!1&&!i.includes("level")&&(G.current=()=>{const t=document.getElementById(ve(F?r.value:r.id));t&&ce.current(t)},S&&(G.current(),G.current=void 0)))}};if(S)switch(e.code){case"ArrowUp":{e.preventDefault(),c("prev");break}case"ArrowDown":{e.preventDefault(),c("next");break}case"ArrowLeft":{F||(e.preventDefault(),c("prev-level"));break}case"ArrowRight":{F||(e.preventDefault(),c("next-level"));break}case"Home":{e.preventDefault(),c("first");break}case"End":{e.preventDefault(),c("last");break}default:{(e.code==="Enter"||e.code==="Space"&&!D)&&(e.preventDefault(),F?ye&&Ae(ye):ke&&Le(ke));break}}else if(!(D&&["Home","End","Enter","Space"].includes(e.code)))switch(e.code){case"End":case"ArrowUp":{e.preventDefault(),A(!0),c("last");break}case"Home":case"ArrowDown":{e.preventDefault(),A(!0),c("first");break}case"Enter":case"Space":{e.preventDefault(),A(!0);break}default:{La(e.key)&&A(!0);break}}}}},D?{type:"text",value:ue,autoComplete:"off",disabled:X,onValueChange:e=>{Qe(e)}}:{}))),[ra,ta,ia]=(()=>{let e=null,c=null,i;if(l){const r=pe.map(t=>{const u=O.get(t);return{value:t,label:a?a(t,u==null?void 0:u.origin):u?u.origin.label:String(t),node:u}});c=s.jsx(ja,{list:r.map(({value:t,label:u,node:M})=>({id:t,title:u,type:"item",disabled:M==null?void 0:M.origin.disabled})),onClick:t=>(H(u=>{u.splice(u.findIndex(M=>M===t),1)}),!1),children:s.jsx(Oe,{tabIndex:-1,size:Se,children:I.size})}),e=r.map(({value:t,label:u,node:M})=>s.jsxs(Oe,{size:Se,children:[u,!(M!=null&&M.disabled||X)&&s.jsx("div",{...b("cascader__close"),role:"button","aria-label":Pe("Close"),onClick:la=>{la.stopPropagation();const oa=M.changeStatus("UNCHECKED",I);H(Array.from(oa.keys()))},children:s.jsx(re,{children:s.jsx(ya,{})})})]},t))}else if(!W.isNull(I)){const r=O.get(I);e=i=a?a(I,r==null?void 0:r.origin):r?Ne(r):String(I)}return[e,c,i]})(),na=Ea({compose:{disabled:X},form:x});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{...C,...me(b("cascader",`cascader--${Se}`,{"cascader.is-expanded":S,"cascader.is-disabled":X}),{className:C.className,style:C.style}),...na,ref:se,onMouseDown:e=>{var c;(c=C.onMouseDown)==null||c.call(C,e),he(e)},onMouseUp:e=>{var c;(c=C.onMouseUp)==null||c.call(C,e),he(e)},onClick:e=>{var c,i;(c=C.onClick)==null||c.call(C,e),(i=le.current)==null||i.focus({preventScroll:!0}),A(r=>D?!0:!r)},children:[s.jsxs("div",{...b("cascader__container"),title:ia,children:[z?z(Ke):Ke,!be&&(fe?s.jsx("div",{...b("cascader__content"),children:ra}):P?s.jsx("div",{...b("cascader__placeholder-wrapper"),children:s.jsx("div",{...b("cascader__placeholder"),children:P})}):null)]}),l&&s.jsx("div",{...b("cascader__multiple-count"),onClick:e=>{e.stopPropagation()},children:ta}),Ve&&s.jsx("div",{...b("cascader__clear"),role:"button","aria-label":Pe("Clear"),onClick:e=>{e.stopPropagation(),v==null||v(),H(l?[]:null)},children:s.jsx(re,{children:s.jsx(Ra,{})})}),s.jsx("div",{...me(b("cascader__icon"),{style:{visibility:Ve?"hidden":void 0}}),children:s.jsx(re,{children:g?s.jsx(De,{}):be?s.jsx(Na,{}):s.jsx(Da,{...b("cascader__arrow")})})})]}),s.jsx(wa,{selector:()=>{let e=document.getElementById(`${K}-cascader-root`);return e||(e=document.createElement("div"),e.id=`${K}-cascader-root`,document.body.appendChild(e)),e},children:s.jsx(Ca,{enter:S,during:Re,afterRender:()=>{var e;B(),(e=G.current)==null||e.call(G),G.current=void 0},afterEnter:()=>{Q==null||Q(!0)},afterLeave:()=>{Q==null||Q(!1)},children:e=>{let c={};switch(e){case"enter":c={transform:"scaleY(0.7)",opacity:0};break;case"entering":c={transition:["transform","opacity"].map(i=>`${i} ${Re}ms ease-out`).join(", "),transformOrigin:Ee.current};break;case"leaving":c={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(i=>`${i} ${Re}ms ease-in`).join(", "),transformOrigin:Ee.current};break;case"leaved":c={display:"none"};break}return s.jsx("div",{...me(b("cascader-popup"),{style:{zIndex:ca,...c}}),ref:U,onMouseDown:i=>{he(i)},onMouseUp:i=>{he(i)},children:(()=>{const i=s.jsxs("div",{...b("cascader-popup__content"),children:[g&&s.jsx("div",{...b("cascader-popup__loading",{"cascader-popup__loading--empty":Fe}),children:s.jsx(re,{children:s.jsx(De,{})})}),g&&Fe?null:F?s.jsx(Wa,{ref:ce,namespace:K,styled:b,id:ge,list:_e,customItem:N,itemId:ve,itemFocused:ye,multiple:l,onlyLeafSelectable:E,virtual:o,focusVisible:We,onClick:r=>{$e(r),Ae(r)}}):s.jsx(Je,{ref:ce,namespace:K,styled:b,id:ge,list:de,customItem:N,itemId:ve,itemSelected:!l&&fe?O.get(I):void 0,itemFocused:ke,multiple:l,virtual:o,focusVisible:We,onFocus:He,onClick:Le})]});return w?w(i):i})()})}})})]})}const es=n.forwardRef(Ha);export{es as C};
