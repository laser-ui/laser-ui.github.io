import{u as $,b as z,c as C,x as R,L as T,j as t,m as a,U as o,n as A,I as E,q as D}from"./index-e75c6fd0.js";const L={switch:"^switch","switch.is-checked":"is-checked","switch.is-loading":"is-loading","switch.is-disabled":"is-disabled","switch--label-left":"^switch--label-left","switch--small":"^switch--small","switch--medium":"^switch--medium","switch--large":"^switch--large","switch__state-container":"^switch__state-container","switch__state-content":"^switch__state-content","switch__state-content--left":"^switch__state-content--left","switch__state-dot":"^switch__state-dot",switch__input:"^switch__input",switch__label:"^switch__label"},r=133;function O(u){const{children:w,styleOverrides:m,styleProvider:l,formControl:s,model:x,defaultModel:b,stateContent:n,labelPlacement:j="right",size:f,loading:_=!1,disabled:y=!1,inputRef:S,inputRender:p,onModelChange:v,...h}=$("Switch",u),e=z(L,{switch:l==null?void 0:l.switch},m),[c,k]=C(b??!1,x,v,void 0,s==null?void 0:s.control),{size:N,disabled:d}=R({size:f,disabled:y||(s==null?void 0:s.control.disabled)}),P=T({compose:{active:c,disabled:d}}),I={enter:{left:2},entering:{left:"calc(100% - 20px)",transition:["width","padding","margin","left"].map(i=>`${i} ${r}ms linear`).join(", ")},entered:{right:2},leave:{right:2},leaving:{right:"calc(100% - 20px)",transition:["width","padding","margin","right"].map(i=>`${i} ${r}ms linear`).join(", ")},leaved:{left:2}},g=t.jsx("input",{...e("switch__input"),...s==null?void 0:s.inputAria,ref:S,type:"checkbox",disabled:d,role:"switch","aria-checked":c,onChange:()=>{k(i=>!i)}});return t.jsxs("label",{...h,...a(e("switch",`switch--${N}`,{"switch--label-left":j==="left","switch.is-checked":c,"switch.is-loading":_,"switch.is-disabled":d}),{className:h.className,style:h.style}),...P,children:[t.jsxs("div",{...e("switch__state-container"),children:[n&&t.jsxs(t.Fragment,{children:[o(n[0])&&t.jsx("div",{...a(e("switch__state-content","switch__state-content--left"),{style:{opacity:c?1:0}}),children:n[0]}),o(n[1])&&t.jsx("div",{...a(e("switch__state-content"),{style:{opacity:c?0:1}}),children:n[1]})]}),p?p(g):g,t.jsx(A,{enter:c,during:r,children:i=>t.jsx("div",{...a(e("switch__state-dot"),{style:I[i]}),children:_&&t.jsx(E,{children:t.jsx(D,{})})})})]}),o(w)&&t.jsx("div",{...e("switch__label"),children:w})]})}export{O as S};