import{u as Z,a as ee,b as se,r as o,c as j,l as g,Q as te,X as ne,Y as F,j as ae}from"./index-23b78b6e.js";import{T as de}from"./TreePanel-505a9a95.js";import{C as oe,M as ie,S as ce}from"./single-node-19c90d0d.js";function fe(P){const{styleOverrides:U,styleProvider:f,formControl:i,list:S,model:V,defaultModel:_,expands:$,defaultExpands:B,showLine:W=!1,multiple:a=!1,onlyLeafSelectable:E=!0,disabled:q=!1,virtual:w,customItem:z,onModelChange:p,onFirstExpand:m,onExpandsChange:k,onScrollBottom:O,...r}=Z("Tree",P),v=ee(),Q=se(oe,{tree:f==null?void 0:f.tree},U),u=o.useRef(null),D=o.useRef({expands:new Set}),X=o.useId(),I=e=>`${v}-tree-item-${e}-${X}`,[b,c]=o.useMemo(()=>{const e=S.map(n=>a?new ie(n,t=>t.value,{disabled:n.disabled}):new ce(n,t=>t.value,{disabled:n.disabled})),s=new Map,d=n=>{for(const t of n)s.set(t.id,t),t.children&&d(t.children)};return d(e),[e,s]},[S,a]),[x,M]=j(_??(a?[]:null),V,e=>{p&&(a?p(e,e.map(s=>c.get(s).origin)):p(e,g.isNull(e)?null:c.get(e).origin))},void 0,i==null?void 0:i.control),l=o.useMemo(()=>a?new Set(x):x,[x,a]);c.forEach(e=>{e.updateStatus(l)});const[N,C]=j(B??[],$,e=>{k&&k(e,e.map(s=>c.get(s).origin))}),y=o.useMemo(()=>new Set(N),[N]),{disabled:A}=te({disabled:q||(i==null?void 0:i.control.disabled)}),T=a?l.size>0:!g.isNull(l),[Y,G]=ne(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[R,L]=o.useState(),h=(()=>{let e;return R&&(e=c.get(R.id),e&&e.enabled)||(T&&(e=F(b,s=>s.enabled&&s.checked)),g.isUndefined(e)&&(e=F(b,s=>s.enabled))),e})(),J=e=>{const s=y.has(e.id);e.origin.loading||(s?C(d=>{d.splice(d.findIndex(n=>n===e.id),1)}):(D.current.expands.has(e.id)||(D.current.expands.add(e.id),m==null||m(e.id,e.origin)),C(d=>{d.push(e.id)})))},H=e=>{if(a){const s=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",l);M(Array.from(s.keys()))}else(e.isLeaf||!E)&&M(e.id)};return G(ae.jsx(de,{...r,ref:u,tabIndex:r.tabIndex??(A?-1:0),onKeyDown:e=>{var d;(d=r.onKeyDown)==null||d.call(r,e);const s=n=>{if(u.current){const t=u.current(n);if(t&&(L(t),!w&&!n.includes("level"))){const K=document.getElementById(I(t.id));K&&u.current(K)}}};switch(e.code){case"ArrowUp":e.preventDefault(),s("prev");break;case"ArrowDown":e.preventDefault(),s("next");break;case"ArrowLeft":e.preventDefault(),s("prev-level");break;case"ArrowRight":e.preventDefault(),s("next-level");break;case"Home":e.preventDefault(),s("first");break;case"End":e.preventDefault(),s("last");break;case"Enter":case"Space":e.preventDefault(),h&&H(h);break}},namespace:v,styled:Q,list:b,itemId:I,itemSelected:!a&&T?c.get(l):void 0,itemFocused:h,expands:y,customItem:z,showLine:W,multiple:a,onlyLeafSelectable:E,disabled:A,virtual:w,focusVisible:Y,onNodeFocus:L,onNodeExpand:J,onNodeClick:H,onScrollBottom:O}))}export{fe as T};
