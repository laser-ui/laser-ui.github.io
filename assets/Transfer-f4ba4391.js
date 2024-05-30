import{v as ue,r as p,l as te,j as a,U as he,I as k,q as _e,u as pe,a as ge,b as Se,c as D,x as be,L as xe,m as me,B as Z,E as je}from"./index-c9b2dbe1.js";import{S as ve}from"./keyboard_arrow_left-e132d716.js";import{S as Ce}from"./search-27acc594.js";import{C as ee}from"./Checkbox-14cb154c.js";import{I as ye}from"./Input-9f22d57b.js";import{V as Ee}from"./VirtualScroll-f395908e.js";import{E as se}from"./Empty-98d82b26.js";const Ie={transfer:"^transfer","transfer.is-disabled":"is-disabled",transfer__panel:"^transfer__panel",transfer__actions:"^transfer__actions",transfer__header:"^transfer__header","transfer__header-title":"^transfer__header-title",transfer__search:"^transfer__search","transfer__list-container":"^transfer__list-container",transfer__list:"^transfer__list",transfer__loading:"^transfer__loading",transfer__option:"^transfer__option","transfer__option.is-disabled":"is-disabled","transfer__option-prefix":"^transfer__option-prefix","transfer__option-content":"^transfer__option-content"},_=Symbol(),ne=Symbol();function ae(T){const{namespace:N,styled:i,list:d,selectedCount:x,state:v,title:C,loading:L,searchable:B,virtual:g,customItem:y,onSelectedChange:m,onAllSelectedChange:f,onSearch:E,onScrollBottom:F}=T,{t:I}=ue(),w=p.useRef(null),c=p.useId(),M=s=>`${N}-transfer-item-${s}-${c}`,j=p.useCallback(s=>!s.disabled,[]),K=p.useMemo(()=>({list:d,itemKey:s=>s.value,itemSize:te.isNumber(g)?g:32,itemFocusable:j}),[j,d,g]);return a.jsxs("div",{...i("transfer__panel"),children:[a.jsxs("div",{...i("transfer__header"),children:[a.jsxs(ee,{model:v===!0,indeterminate:v==="mixed",disabled:d.length===0,onModelChange:s=>{f(s)},children:[x,"/",d.length]}),he(C)&&a.jsx("div",{...i("transfer__header-title"),children:C})]}),B&&a.jsx("div",{...i("transfer__search"),children:a.jsx(ye,{style:{display:"flex"},placeholder:I("Search"),prefix:a.jsx(k,{children:a.jsx(Ce,{})}),clearable:!0,onModelChange:E})}),a.jsxs("div",{...i("transfer__list-container"),children:[L&&a.jsx("div",{...i("transfer__loading"),children:a.jsx(k,{children:a.jsx(_e,{})})}),a.jsx(Ee,{...K,ref:w,enable:g!==!1,listSize:192,listPadding:0,itemRender:(s,S,A)=>p.createElement("li",{...i("transfer__option",{"transfer__option.is-disabled":s.disabled}),...A,key:s.value,id:M(s.value),title:s.label,onClick:()=>{s.disabled||m==null||m(s.value)}},a.jsx("div",{...i("transfer__option-prefix"),children:a.jsx(ee,{model:s[_],disabled:s.disabled})}),a.jsx("div",{...i("transfer__option-content"),children:y?y(s.value,s[ne]?void 0:s):s.label})),placeholder:"li",onScrollEnd:F,children:(s,S)=>a.jsx("ul",{...i("transfer__list"),onScroll:S,children:d.length===0?a.jsx(se,{style:{marginTop:32},image:se.SIMPLE_IMG}):s})})]})]})}function Te(T){const{styleOverrides:N,styleProvider:i,formControl:d,list:x,model:v,defaultModel:C,selected:L,defaultSelected:B,searchable:g=!1,searchValue:y,defaultSearchValue:m,title:f,loading:E=[!1,!1],disabled:F=!1,virtual:I=!1,customItem:w,customSearch:c,onModelChange:M,onSelectedChange:j,onSearch:K,onScrollBottom:s,...S}=pe("Transfer",T),A=ge(),P=Se(Ie,{transfer:i==null?void 0:i.transfer},N),O=p.useMemo(()=>new Map(x.map(e=>[e.value,e])),[x]),[$,re]=D(C??[],v,e=>{M&&M(e,e.map(t=>O.get(t)))},void 0,d==null?void 0:d.control),le=p.useMemo(()=>new Set($),[$]),[U,q]=D(B??[],L,e=>{j&&j(e,e.map(t=>O.get(t)))}),oe=p.useMemo(()=>new Set(U),[U]),[b,G]=D(m??["",""],y,K),{disabled:ie}=be({disabled:F||(d==null?void 0:d.control.disabled)}),[u,H,R]=(()=>{const e=[[],[]],t=[0,0],l=[!0,!0],r=[!0,!0],h=[!1,!1],X=te.isUndefined(c==null?void 0:c.filter)?(n,o)=>n.label.includes(o):(n,o)=>c.filter(o,n),V=c==null?void 0:c.sort,z=(n,o,fe)=>{const Y=Object.assign({[_]:!1,[ne]:fe},n);oe.has(n.value)?(Y[_]=!0,t[o]+=1,n.disabled||(h[o]=!0)):n.disabled||(r[o]=!1),e[o].push(Y),n.disabled||(l[o]=!1)};x.forEach(n=>{le.has(n.value)||(!b[0]||X(n,b[0]))&&z(n,0,!1)}),$.forEach(n=>{const o=O.get(n);b[1]?o&&X(o,b[0])&&z(o,1,!1):z(o??{label:n,value:n},1,!o)}),b[0]&&V&&e[0].sort(V),b[1]&&V&&e[1].sort(V);const ce=[0,1].map(n=>l[n]?!1:r[n]?!0:h[n]?"mixed":!1);return[e,t,ce]})(),J=e=>{q(t=>{const l=t.findIndex(r=>r===e);l!==-1?t.splice(l,1):t.push(e)})},Q=(e,t)=>{q(l=>{const r=new Set(l);for(const h of t?u[0]:u[1])h.disabled||(e&&!h[_]?r.add(h.value):!e&&h[_]&&r.delete(h.value));return Array.from(r)})},W=e=>{re(t=>{if(e){const l=new Set;return u[0].forEach(r=>{r[_]&&l.add(r.value)}),Array.from(l).concat(t)}else{const l=new Set(t);return u[1].forEach(r=>{r[_]&&l.delete(r.value)}),Array.from(l)}}),q(t=>{const l=new Set(t);return(e?u[0]:u[1]).forEach(r=>{r[_]&&l.delete(r.value)}),Array.from(l)})},de=xe({form:d});return a.jsxs("div",{...S,...me(P("transfer",{"transfer.is-disabled":ie}),{className:S.className,style:S.style}),...de,children:[a.jsx(ae,{namespace:A,styled:P,list:u[0],selectedCount:H[0],state:R[0],title:f==null?void 0:f[0],loading:E[0]??!1,searchable:g,virtual:I,customItem:w,onSelectedChange:J,onAllSelectedChange:e=>{Q(e,!0)},onSearch:e=>{G(t=>{t[0]=e})},onScrollBottom:()=>{s==null||s("left")}}),a.jsxs("div",{...P("transfer__actions"),children:[a.jsx(Z,{disabled:R[0]===!1,pattern:"secondary",icon:a.jsx(k,{children:a.jsx(je,{})}),onClick:()=>{W(!0)}}),a.jsx(Z,{disabled:R[1]===!1,pattern:"secondary",icon:a.jsx(k,{children:a.jsx(ve,{})}),onClick:()=>{W(!1)}})]}),a.jsx(ae,{namespace:A,styled:P,list:u[1],selectedCount:H[1],state:R[1],title:f==null?void 0:f[1],loading:E[1]??!1,searchable:g,virtual:I,customItem:w,onSelectedChange:J,onAllSelectedChange:e=>{Q(e,!1)},onSearch:e=>{G(t=>{t[1]=e})},onScrollBottom:()=>{s==null||s("right")}})]})}export{Te as T};