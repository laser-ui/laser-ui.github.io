import{r as n,g as Te,l as F,A as Be,j as s,I as ce,q as Ne,E as ua,u as pa,a as fa,b as _a,d as ha,v as ba,e as ma,c as Ce,x as va,F as ga,G as Ie,H as xa,R as Sa,W as Ve,J as ka,h as ja,i as ya,k as Re,m as me,p as Ea,K as wa,L as Ca,P as Ia,n as Ra,M as De}from"./index-80884ce1.js";import{u as Da}from"./useForkRef-93fa1a2c.js";import{S as Na}from"./cancel-84fb093a.js";import{S as Ta}from"./keyboard_arrow_down-2912bb7f.js";import{S as Ma}from"./search-a0c0ca01.js";import{V as Ge}from"./VirtualScroll-49c6ee83.js";import{C as Ye}from"./Checkbox-136d5673.js";import{E as ge}from"./Empty-67aa5cb6.js";import{g as ve}from"./utils-c2ed83c6.js";import{T as D,M as Pa,S as La}from"./single-node-19c90d0d.js";import{i as Aa}from"./isPrintableCharacter-1b5c27a6.js";import{T as Oe}from"./Tag-3289e6ad.js";function Fa(G,X){const{namespace:ee,styled:p,id:g,list:y,customItem:$,itemId:K,itemSelected:k,itemFocused:_,multiple:T,virtual:l,focusVisible:I,onFocus:Y,onClick:j,_root:E=!0}=G,m=n.useRef(null),x=n.useRef(null),d=n.useRef(null),M=_&&y.findIndex(a=>a.id===_.id)!==-1,o=(()=>{if(_)for(const a of y){if(_.id===a.id)return a;let f=_;for(;f.parent;)if(f=f.parent,f.id===a.id)return a}})(),h=Te(a=>{var f,q,W,w,J,re,te;if(m.current){let S;if(E&&F.isUndefined(_))switch(a){case"first":case"next":S=(f=x.current)==null?void 0:f.scrollToStart(m.current);break;case"last":case"prev":S=(q=x.current)==null?void 0:q.scrollToEnd(m.current);break}else if(M)switch(a){case"next":S=(W=x.current)==null?void 0:W.scrollToStep(m.current,1);break;case"prev":S=(w=x.current)==null?void 0:w.scrollToStep(m.current,-1);break;case"first":S=(J=x.current)==null?void 0:J.scrollToStart(m.current);break;case"last":S=(re=x.current)==null?void 0:re.scrollToEnd(m.current);break;case"prev-level":o&&o.parent&&(S=o.parent);break;case"next-level":if(o&&o.children){for(const P of o.children)if(P.enabled){S=P;break}}break;default:a instanceof HTMLElement&&m.current&&Be(a,m.current);break}else S=(te=d.current)==null?void 0:te.call(d,a);return S}});n.useImperativeHandle(X,()=>h,[h]);const N=n.useMemo(()=>({list:y,itemKey:a=>a.id,itemSize:F.isNumber(l)?l:32,itemFocusable:a=>a.enabled}),[y,l]);return s.jsxs(s.Fragment,{children:[s.jsx(Ge,{...N,ref:x,enable:l!==!1,listSize:264,listPadding:4,itemRender:(a,f,q)=>{let W=!1;if(a.children&&k){let w=k;for(;w.parent;)if(w=w.parent,w.id===a.id){W=!0;break}}return n.createElement("li",{...p("cascader__option",{"cascader__option.is-focused":a.id===(o==null?void 0:o.id),"cascader__option.is-selected":!T&&a.checked,"cascader__option.is-disabled":a.disabled}),...q,key:a.id,id:K(a.id),title:a.origin.label,role:"option","aria-selected":a.checked,"aria-disabled":a.disabled,onClick:()=>{Y(a),T&&!a.isLeaf||j(a)}},I&&(_==null?void 0:_.id)===a.id&&s.jsx("div",{className:`${ee}-focus-outline`}),W&&s.jsx("div",{...p("cascader__option-dot")}),T&&s.jsx("div",{...p("cascader__option-prefix"),children:s.jsx(Ye,{model:a.checked,disabled:a.disabled,indeterminate:a.indeterminate,onClick:w=>{w.stopPropagation(),Y(a),j(a)}})}),s.jsx("div",{...p("cascader__option-content"),children:$?$(a.origin):a.origin.label}),!a.isLeaf&&s.jsx("div",{...p("cascader__option-icon"),children:s.jsx(ce,{children:a.origin.loading?s.jsx(Ne,{}):s.jsx(ua,{})})}))},itemFocused:o==null?void 0:o.id,placeholder:"li",children:(a,f)=>s.jsx("ul",{...p("cascader__list","cascader__list--inline"),ref:m,id:g,tabIndex:-1,role:"listbox","aria-multiselectable":T,"aria-activedescendant":E&&!F.isUndefined(_)?K(_.id):void 0,onScroll:f,children:y.length===0?s.jsx(ge,{style:{padding:"12px 28px"},image:ge.SIMPLE_IMG}):a})}),o&&!o.origin.loading&&o.children&&s.jsx(qe,{...G,_root:!1,ref:d,id:void 0,list:o.children})]})}const qe=n.forwardRef(Fa);function Wa(G,X){const{namespace:ee,styled:p,id:g,list:y,customItem:$,itemId:K,itemFocused:k,multiple:_,onlyLeafSelectable:T,virtual:l,focusVisible:I,onClick:Y}=G,j=n.useRef(null),E=n.useRef(null),m=Te(d=>{var M,o,h,N;if(j.current){let a;switch(d){case"next":a=(M=E.current)==null?void 0:M.scrollToStep(j.current,1);break;case"prev":a=(o=E.current)==null?void 0:o.scrollToStep(j.current,-1);break;case"first":a=(h=E.current)==null?void 0:h.scrollToStart(j.current);break;case"last":a=(N=E.current)==null?void 0:N.scrollToEnd(j.current);break;default:d instanceof HTMLElement&&j.current&&Be(d,j.current);break}return a}});n.useImperativeHandle(X,()=>m,[m]);const x=n.useMemo(()=>({list:y,itemKey:d=>d.value,itemSize:F.isNumber(l)?l:32,itemFocusable:d=>d[D].enabled}),[y,l]);return s.jsx(Ge,{...x,ref:E,enable:l!==!1,listSize:264,listPadding:4,itemRender:(d,M,o)=>{const h=d[D];let N=h.checked;if(!T){let a=h;for(;a.parent;)if(a=a.parent,a.id===d.value){N=!0;break}}return n.createElement("li",{...p("cascader__option",{"cascader__option.is-selected":!_&&N,"cascader__option.is-disabled":h.disabled}),...o,key:d.value,id:K(d.value),title:d.label,role:"option","aria-selected":h.checked,"aria-disabled":h.disabled,onClick:()=>{Y(d)}},I&&(k==null?void 0:k.value)===d.value&&s.jsx("div",{className:`${ee}-focus-outline`}),_&&s.jsx("div",{...p("cascader__option-prefix"),children:s.jsx(Ye,{model:h.checked,disabled:h.disabled})}),s.jsx("div",{...p("cascader__option-content"),children:$?$(h.origin):ve(h)}))},itemFocused:k==null?void 0:k.value,placeholder:"li",children:(d,M)=>s.jsx("ul",{...p("cascader__list"),ref:j,id:g,tabIndex:-1,role:"listbox","aria-multiselectable":_,"aria-activedescendant":F.isUndefined(k)?void 0:K(k.value),onScroll:M,children:y.length===0?s.jsx(ge,{style:{padding:"12px 28px"},image:ge.SIMPLE_IMG}):d})})}const Ha=n.forwardRef(Wa),za={cascader:"^cascader","cascader.is-expanded":"is-expanded","cascader.is-disabled":"is-disabled","cascader--small":"^cascader--small","cascader--medium":"^cascader--medium","cascader--large":"^cascader--large",cascader__container:"^cascader__container",cascader__content:"^cascader__content",cascader__search:"^cascader__search","cascader__placeholder-wrapper":"^cascader__placeholder-wrapper",cascader__placeholder:"^cascader__placeholder","cascader__multiple-count":"^cascader__multiple-count",cascader__close:"^cascader__close",cascader__clear:"^cascader__clear",cascader__icon:"^cascader__icon",cascader__arrow:"^cascader__arrow","cascader-popup":"^cascader-popup","cascader-popup__content":"^cascader-popup__content","cascader-popup__loading":"^cascader-popup__loading","cascader-popup__loading--empty":"^cascader-popup__loading--empty",cascader__list:"^cascader__list","cascader__list--inline":"^cascader__list--inline",cascader__option:"^cascader__option","cascader__option.is-focused":"is-focused","cascader__option.is-selected":"is-selected","cascader__option.is-disabled":"is-disabled","cascader__option-dot":"^cascader__option-dot","cascader__option-prefix":"^cascader__option-prefix","cascader__option-content":"^cascader__option-content","cascader__option-icon":"^cascader__option-icon",cascader__empty:"^cascader__empty"};function $a(G,X){const{styleOverrides:ee,styleProvider:p,formControl:g,list:y,model:$,defaultModel:K,visible:k,defaultVisible:_,placeholder:T,multiple:l=!1,searchable:I=!1,searchValue:Y,defaultSearchValue:j,onlyLeafSelectable:E=!0,clearable:m=!1,loading:x=!1,size:d,disabled:M=!1,virtual:o=!1,escClosable:h=!0,customItem:N,customSelected:a,customSearch:f,inputRef:q,inputRender:W,popupRender:w,onModelChange:J,onVisibleChange:re,onSearch:te,onClear:S,onFirstFocus:P,afterVisibleChange:Z,...C}=pa("Cascader",G),U=fa(),b=_a(za,{cascader:p==null?void 0:p.cascader,"cascader-popup":p==null?void 0:p["cascader-popup"]},ee),ie=ha(),{t:Me}=ba(),Pe=n.useId(),xe=`${U}-cascader-list-${Pe}`,Se=e=>`${U}-cascader-item-${e}-${Pe}`,{pageScrollRef:Je,contentResizeRef:Ze}=ma(),ne=n.useRef(null),V=n.useRef(null),le=n.useRef(null),Qe=Da(le,q),ae=n.useRef(null),oe=n.useRef({itemFocused:new Set}),[de,O]=n.useMemo(()=>{const e=y.map(t=>l?new Pa(t,r=>r.value,{disabled:t.disabled}):new La(t,r=>r.value,{disabled:t.disabled})),c=new Map,i=t=>{for(const r of t)c.set(r.id,r),r.children&&i(r.children)};return i(e),[e,c]},[y,l]),[v,L]=Ce(_??!1,k,re),[ue,Xe]=Ce(j??"",Y,te),[pe,H]=Ce(K??(l?[]:null),$,e=>{J&&(l?J(e,e.map(c=>O.get(c).origin)):J(e,F.isNull(e)?null:O.get(e).origin))},void 0,g==null?void 0:g.control),R=n.useMemo(()=>l?new Set(pe):pe,[pe,l]),Le=e=>{if(l){const c=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",R);H(Array.from(c.keys()))}else(e.isLeaf||!E)&&H(e.id),e.isLeaf&&L(!1)},Ae=e=>{if(l){const c=e[D].changeStatus(e[D].checked?"UNCHECKED":"CHECKED",R);H(Array.from(c.keys()))}else H(e[D].id),L(!1)};O.forEach(e=>{e.updateStatus(R)});const{size:ke,disabled:Q}=va({size:d,disabled:M||(g==null?void 0:g.control.disabled)}),A=ue.length>0,fe=l?R.size>0:!F.isNull(R),_e=(()=>{if(!A)return[];const e=F.isUndefined(f==null?void 0:f.filter)?r=>r.label.includes(ue):r=>f.filter(ue,r),c=f==null?void 0:f.sort,i=[],t=r=>{r.forEach(u=>{(!l&&!E||u.isLeaf)&&e(u.origin)&&i.push({label:ve(u),value:u.id,disabled:u.disabled,[D]:u}),u.children&&t(u.children)})};return t(de),c&&i.sort((r,u)=>c(r[D].origin,u[D].origin)),i})(),Fe=A?_e.length===0:de.length===0,[We,ea]=ga(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[He,aa]=n.useState(),ze=e=>{oe.current.itemFocused.has(e.id)||(oe.current.itemFocused.add(e.id),P==null||P(e.id,e.origin)),aa(e)},je=(()=>{if(He){const e=O.get(He.id);if(e&&e.enabled)return e}if(fe)return Ie(de,e=>e.enabled&&e.checked)})(),[ye,sa]=n.useState(),$e=e=>{oe.current.itemFocused.has(e.value)||(oe.current.itemFocused.add(e.value),P==null||P(e.value,e[D].origin)),sa(e)},Ee=(()=>{if(ye&&Ie(_e,e=>e[D].enabled&&e.value===ye.value))return ye;if(A)return Ie(_e,e=>e[D].enabled)})(),ca=xa(v),ra=`calc(var(--${U}-zindex-fixed) + ${ca})`,we=n.useRef(),z=Te(()=>{if(v&&ne.current&&V.current){const e=V.current.offsetHeight,c=Sa.windowSize.width-Ve*2,i=Math.min(V.current.scrollWidth,c),t=ka(ne.current,{width:i,height:e},{placement:"bottom-left",inWindow:Ve});we.current=t.transformOrigin,ie.classes.position&&V.current.classList.toggle(ie.classes.position,!1),ie.replaceRule("position",{top:t.top,left:t.left,maxWidth:c}),V.current.classList.toggle(ie.classes.position,!0)}}),ta=ja(z,!v);ya(Je,"scroll",z,{passive:!0},!v||ta),Re(ne,z,void 0,!v),Re(V,z,void 0,!v),Re(Ze,z,void 0,!v),n.useImperativeHandle(X,()=>({updatePosition:z}),[z]);const he=e=>{document.activeElement===le.current&&e.target!==le.current&&e.button===0&&e.preventDefault()},B=n.useRef(),be=I&&v,Ke=m&&fe&&!v&&!x&&!Q,Ue=ea(n.createElement(I?"input":"div",Object.assign({...me(b("cascader__search"),{style:{opacity:be?void 0:0,zIndex:be?void 0:-1}}),...g==null?void 0:g.inputAria,ref:Qe,tabIndex:Q?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":v,"aria-controls":xe,onBlur:()=>{L(!1)},onKeyDown:e=>{if(e.code==="Escape")v&&h&&(e.stopPropagation(),e.preventDefault(),L(!1));else{const c=i=>{if(ae.current){const t=ae.current(i);t&&(A?$e(t):ze(t),o===!1&&!i.includes("level")&&(B.current=()=>{const r=document.getElementById(Se(A?t.value:t.id));r&&ae.current(r)},v&&(B.current(),B.current=void 0)))}};if(v)switch(e.code){case"ArrowUp":{e.preventDefault(),c("prev");break}case"ArrowDown":{e.preventDefault(),c("next");break}case"ArrowLeft":{A||(e.preventDefault(),c("prev-level"));break}case"ArrowRight":{A||(e.preventDefault(),c("next-level"));break}case"Home":{e.preventDefault(),c("first");break}case"End":{e.preventDefault(),c("last");break}default:{(e.code==="Enter"||e.code==="Space"&&!I)&&(e.preventDefault(),A?Ee&&Ae(Ee):je&&Le(je));break}}else if(!(I&&["Home","End","Enter","Space"].includes(e.code)))switch(e.code){case"End":case"ArrowUp":{e.preventDefault(),L(!0),c("last");break}case"Home":case"ArrowDown":{e.preventDefault(),L(!0),c("first");break}case"Enter":case"Space":{e.preventDefault(),L(!0);break}default:{Aa(e.key)&&L(!0);break}}}},onChange:e=>{I&&Xe(e.currentTarget.value)}},I?{type:"text",value:ue,autoComplete:"off",disabled:Q}:{}))),[ia,na,la]=(()=>{let e=null,c=null,i;if(l){const t=[];for(const r of pe){const u=O.get(r);u&&t.push(u)}c=s.jsx(Ea,{list:t.map(r=>{const{value:u,disabled:se}=r.origin,da=a?a(r.origin):ve(r);return{id:u,title:da,type:"item",disabled:se,node:r}}),onClick:(r,u)=>{const se=u.node.changeStatus("UNCHECKED",R);return H(Array.from(se.keys())),!1},children:s.jsx(Oe,{tabIndex:-1,size:ke,children:R.size})}),e=t.map(r=>s.jsxs(Oe,{size:ke,children:[a?a(r.origin):r.origin.label,!(r.disabled||Q)&&s.jsx("div",{...b("cascader__close"),role:"button","aria-label":Me("Close"),onClick:u=>{u.stopPropagation();const se=r.changeStatus("UNCHECKED",R);H(Array.from(se.keys()))},children:s.jsx(ce,{children:s.jsx(wa,{})})})]},r.id))}else if(!F.isNull(R)){const t=O.get(R);t&&(i=ve(t),e=a?a(t.origin):i)}return[e,c,i]})(),oa=Ca({compose:{disabled:Q},form:g});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{...C,...me(b("cascader",`cascader--${ke}`,{"cascader.is-expanded":v,"cascader.is-disabled":Q}),{className:C.className,style:C.style}),...oa,ref:ne,onMouseDown:e=>{var c;(c=C.onMouseDown)==null||c.call(C,e),he(e)},onMouseUp:e=>{var c;(c=C.onMouseUp)==null||c.call(C,e),he(e)},onClick:e=>{var c,i;(c=C.onClick)==null||c.call(C,e),(i=le.current)==null||i.focus({preventScroll:!0}),L(t=>I?!0:!t)},children:[s.jsxs("div",{...b("cascader__container"),title:la,children:[W?W(Ue):Ue,!be&&(fe?s.jsx("div",{...b("cascader__content"),children:ia}):T?s.jsx("div",{...b("cascader__placeholder-wrapper"),children:s.jsx("div",{...b("cascader__placeholder"),children:T})}):null)]}),l&&s.jsx("div",{...b("cascader__multiple-count"),onClick:e=>{e.stopPropagation()},children:na}),Ke&&s.jsx("div",{...b("cascader__clear"),role:"button","aria-label":Me("Clear"),onClick:e=>{e.stopPropagation(),S==null||S(),H(l?[]:null)},children:s.jsx(ce,{children:s.jsx(Na,{})})}),s.jsx("div",{...me(b("cascader__icon"),{style:{visibility:Ke?"hidden":void 0}}),children:s.jsx(ce,{children:x?s.jsx(Ne,{}):be?s.jsx(Ma,{}):s.jsx(Ta,{...b("cascader__arrow")})})})]}),s.jsx(Ia,{selector:()=>{let e=document.getElementById(`${U}-cascader-root`);return e||(e=document.createElement("div"),e.id=`${U}-cascader-root`,document.body.appendChild(e)),e},children:s.jsx(Ra,{enter:v,during:De,afterRender:()=>{var e;z(),(e=B.current)==null||e.call(B),B.current=void 0},afterEnter:()=>{Z==null||Z(!0)},afterLeave:()=>{Z==null||Z(!1)},children:e=>{let c={};switch(e){case"enter":c={transform:"scaleY(0.7)",opacity:0};break;case"entering":c={transition:["transform","opacity"].map(i=>`${i} ${De}ms ease-out`).join(", "),transformOrigin:we.current};break;case"leaving":c={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(i=>`${i} ${De}ms ease-in`).join(", "),transformOrigin:we.current};break;case"leaved":c={display:"none"};break}return s.jsx("div",{...me(b("cascader-popup"),{style:{zIndex:ra,...c}}),ref:V,onMouseDown:i=>{he(i)},onMouseUp:i=>{he(i)},children:(()=>{const i=s.jsxs("div",{...b("cascader-popup__content"),children:[x&&s.jsx("div",{...b("cascader-popup__loading",{"cascader-popup__loading--empty":Fe}),children:s.jsx(ce,{children:s.jsx(Ne,{})})}),x&&Fe?null:A?s.jsx(Ha,{ref:ae,namespace:U,styled:b,id:xe,list:_e,customItem:N,itemId:Se,itemFocused:Ee,multiple:l,onlyLeafSelectable:E,virtual:o,focusVisible:We,onClick:t=>{$e(t),Ae(t)}}):s.jsx(qe,{ref:ae,namespace:U,styled:b,id:xe,list:de,customItem:N,itemId:Se,itemSelected:!l&&fe?O.get(R):void 0,itemFocused:je,multiple:l,virtual:o,focusVisible:We,onFocus:ze,onClick:Le})]});return w?w(i):i})()})}})})]})}const es=n.forwardRef($a);export{es as C};
