import{u as Z,a as ee,b as se,r as i,c as H,l as g,y as ne,F as te,G as j,j as ae}from"./index-0bc3a1b4.js";import{T as oe}from"./TreePanel-75eef211.js";import{C as ce,M as ie,S as de}from"./single-node-19c90d0d.js";function fe(U){const{styleOverrides:V,styleProvider:f,formControl:d,list:E,model:_,defaultModel:$,expands:q,defaultExpands:z,showLine:G=!1,multiple:o=!1,onlyLeafSelectable:w=!0,disabled:O=!1,virtual:k,customItem:W,onModelChange:p,onFirstExpand:m,onExpandsChange:v,onScrollBottom:J,...t}=Z("Tree",U),D=ee(),P=se(ce,{tree:f==null?void 0:f.tree},V),r=i.useRef(null),I=i.useRef(new Set),Q=i.useId(),y=e=>`${D}-tree-item-${e}-${Q}`,[b,l]=i.useMemo(()=>{const e=E.map(a=>o?new ie(a,n=>n.value,{disabled:a.disabled}):new de(a,n=>n.value,{disabled:a.disabled})),s=new Map,c=a=>{for(const n of a)s.set(n.id,n),n.children&&c(n.children)};return c(e),[e,s]},[E,o]),[h,M]=H($??(o?[]:null),_,e=>{p&&(o?p(e,e.map(s=>l.get(s).origin)):p(e,g.isNull(e)?null:l.get(e).origin))},void 0,d==null?void 0:d.control),u=i.useMemo(()=>o?new Set(h):h,[h,o]);l.forEach(e=>{e.updateStatus(u)});const[N,C]=H(z??[],q,e=>{v&&v(e,e.map(s=>l.get(s).origin))}),A=i.useMemo(()=>new Set(N),[N]),{disabled:F}=ne({disabled:O||(d==null?void 0:d.control.disabled)}),T=o?u.size>0:!g.isNull(u),[X,x]=te(e=>e.startsWith("Arrow")||["Home","End","Enter","Space"].includes(e)),[B,K]=i.useState(),S=(()=>{let e;return B&&(e=l.get(B.id),e&&e.enabled)||(T&&(e=j(b,s=>s.enabled&&s.checked)),g.isUndefined(e)&&(e=j(b,s=>s.enabled))),e})(),Y=e=>{const s=A.has(e.id);e.origin.loading||(s?C(c=>{c.splice(c.findIndex(a=>a===e.id),1)}):(I.current.has(e.id)||(I.current.add(e.id),m==null||m(e.id,e.origin)),C(c=>{c.push(e.id)})))},L=e=>{if(o){const s=e.changeStatus(e.checked?"UNCHECKED":"CHECKED",u);M(Array.from(s.keys()))}else(e.isLeaf||!w)&&M(e.id)};return ae.jsx(oe,{...t,ref:e=>(r.current=e,()=>{r.current=null}),tabIndex:t.tabIndex??(F?-1:0),onFocus:e=>{var s;(s=t.onFocus)==null||s.call(t,e),x.onFocus(e)},onBlur:e=>{var s;(s=t.onBlur)==null||s.call(t,e),x.onBlur(e)},onKeyDown:e=>{var c;(c=t.onKeyDown)==null||c.call(t,e),x.onKeyDown(e);const s=a=>{if(r.current){const n=r.current(a);if(n&&(K(n),!k&&!a.includes("level"))){const R=document.getElementById(y(n.id));R&&r.current(R)}}};switch(e.code){case"ArrowUp":e.preventDefault(),s("prev");break;case"ArrowDown":e.preventDefault(),s("next");break;case"ArrowLeft":e.preventDefault(),s("prev-level");break;case"ArrowRight":e.preventDefault(),s("next-level");break;case"Home":e.preventDefault(),s("first");break;case"End":e.preventDefault(),s("last");break;case"Enter":case"Space":e.preventDefault(),S&&L(S);break}},namespace:D,styled:P,list:b,itemId:y,itemSelected:!o&&T?l.get(u):void 0,itemFocused:S,expands:A,customItem:W,showLine:G,multiple:o,onlyLeafSelectable:w,disabled:F,virtual:k,focusVisible:X,onNodeFocus:K,onNodeExpand:Y,onNodeClick:L,onScrollBottom:J})}export{fe as T};
