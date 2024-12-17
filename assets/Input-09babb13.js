import{r as y,u as W,b as X,n as ue,v as Y,w as le,e as re,c as H,l as g,y as Z,q as oe,M as P,j as i,m as R,V as U,I as S}from"./index-0bc3a1b4.js";import{s as ee}from"./setRef-199c8149.js";import{S as ne}from"./cancel-0e495ff1.js";import{S as ae}from"./visibility-49e55ae1.js";import{S as ce}from"./keyboard_arrow_down-c7f01506.js";import{B as te}from"./BaseInput-aeb9aa6e.js";const de=w=>y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...w},y.createElement("path",{d:"M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"})),pe=w=>y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...w},y.createElement("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"})),ie={input:"^input","input.is-disabled":"is-disabled","input--small":"^input--small","input--medium":"^input--medium","input--large":"^input--large",input__prefix:"^input__prefix",input__input:"^input__input",input__clear:"^input__clear",input__password:"^input__password",input__suffix:"^input__suffix","input__number-container":"^input__number-container",input__number:"^input__number"};function me(w){const{styleOverrides:T,styleProvider:v,formControl:u,model:k,defaultModel:F,max:d,min:m,step:b=1,integer:I=!1,prefix:D,suffix:E,clearable:A,placeholder:L,size:O,numberButton:j=!0,disabled:K=!1,inputProps:r,onModelChange:$,onClear:o,...l}=W("InputNumber",w),p=X(ie,{input:v==null?void 0:v.input},T),x=ue(),{t:N}=Y(),V=le(),a=y.useRef({inputFocused:!1}),q=re(()=>window),M=y.useRef(null),[_,B]=H(F??null,k,$,void 0,u==null?void 0:u.control),f=a.current.inputFocused&&!g.isUndefined(a.current.inputValue)?a.current.inputValue:g.isNull(_)?"":_.toString(),t=e=>{(g.isNull(e)?"":e.toString())!==f&&V(),a.current.inputValue=void 0,B(e)},{size:c,disabled:h}=Z({size:O,disabled:K||(u==null?void 0:u.control.disabled)}),J=e=>{var n;return Number(Math.max(m??-1/0,Math.min(d??1/0,e)).toFixed(((n=b.toString().split(".")[1])==null?void 0:n.length)??0))},C=(e=!0)=>{t(J((()=>{let s=f.length>0?Number(f):null;return g.isNull(s)?0:(I&&!Number.isInteger(s)&&(s=Math.round(s)),e?s+b:s-b)})()));const n=s=>{const z=J(e?s+b:s-b);t(z),a.current.clearLoop=x.setTimeout(()=>n(z),50)};a.current.clearTid=x.setTimeout(()=>n(Number(f)),400)},G=()=>{var e,n,s,z;(n=(e=a.current).clearLoop)==null||n.call(e),(z=(s=a.current).clearTid)==null||z.call(s)};oe(q,"mouseup",G);const Q=e=>{document.activeElement===M.current&&e.target!==M.current&&e.button===0&&e.preventDefault()},se=P({compose:{disabled:h},form:u});return i.jsxs("div",{...l,...R(p("input",`input--${c}`,{"input.is-disabled":h}),{className:l.className,style:{...l.style,paddingRight:j&&!h&&!U(E)?0:void 0}}),...se,onMouseDown:e=>{var n;(n=l.onMouseDown)==null||n.call(l,e),Q(e)},onMouseUp:e=>{var n;(n=l.onMouseUp)==null||n.call(l,e),Q(e)},onClick:e=>{var n,s;(n=l.onClick)==null||n.call(l,e),(s=M.current)==null||s.focus({preventScroll:!0})},children:[U(D)&&i.jsx("div",{...p("input__prefix"),children:D}),i.jsx(te,{...r,...p("input__input"),...u==null?void 0:u.inputAria,ref:e=>{M.current=e;const n=ee(r==null?void 0:r.ref,e);return()=>{M.current=null,n()}},value:f,max:d,min:m,step:b,type:"number",placeholder:L,disabled:h,onValueChange:e=>{if(V(),a.current.inputValue=e,e.length===0)t(null);else{const n=Number(e);(g.isUndefined(d)||n<=d)&&(g.isUndefined(m)||n>=m)&&(!I||Number.isInteger(n))&&t(n)}},onFocus:e=>{var n;(n=r==null?void 0:r.onFocus)==null||n.call(r,e),a.current.inputFocused=!0,a.current.inputValue=void 0},onBlur:e=>{var n;if((n=r==null?void 0:r.onBlur)==null||n.call(r,e),a.current.inputFocused=!1,f.length===0)t(null);else{let s=Number(f);!g.isUndefined(d)&&s>d&&(s=d),!g.isUndefined(m)&&s<m&&(s=m),I&&!Number.isInteger(s)&&(s=Math.round(s)),t(s)}}}),A&&!h&&i.jsx("div",{...R(p("input__clear"),{style:{opacity:f.length>0?1:0}}),role:"button","aria-label":N("Clear"),onClick:()=>{t(null),o==null||o()},children:i.jsx(S,{children:i.jsx(ne,{})})}),j&&!h&&i.jsxs("div",{...p("input__number-container"),children:[i.jsx("div",{...p("input__number"),role:"button","aria-label":N("Input","Increase number"),onMouseDown:e=>{e.button===0&&C()},onTouchStart:()=>{C()},onTouchEnd:()=>{G()},children:i.jsx(S,{children:i.jsx(pe,{})})}),i.jsx("div",{...p("input__number"),role:"button","aria-label":N("Input","Decrease number"),onMouseDown:e=>{e.button===0&&C(!1)},onTouchStart:()=>{C(!1)},onTouchEnd:()=>{G()},children:i.jsx(S,{children:i.jsx(ce,{})})})]}),U(E)&&i.jsx("div",{...p("input__suffix"),children:E})]})}const fe=w=>{const{styleOverrides:T,styleProvider:v,formControl:u,model:k,defaultModel:F,type:d,prefix:m,suffix:b,password:I,defaultPassword:D,clearable:E,placeholder:A,size:L,disabled:O=!1,inputProps:j,onModelChange:K,onClear:r,onPasswordChange:$,...o}=W("Input",w),l=X(ie,{input:v==null?void 0:v.input},T),{t:p}=Y(),x=y.useRef(null),[N,V]=H(F??"",k,K,void 0,u==null?void 0:u.control),[a,q]=H(D??!0,I,$),{size:M,disabled:_}=Z({size:L,disabled:O||(u==null?void 0:u.control.disabled)}),B=t=>{document.activeElement===x.current&&t.target!==x.current&&t.button===0&&t.preventDefault()},f=P({compose:{disabled:_},form:u});return i.jsxs("div",{...o,...R(l("input",`input--${M}`,{"input.is-disabled":_}),{className:o.className,style:o.style}),...f,onMouseDown:t=>{var c;(c=o.onMouseDown)==null||c.call(o,t),B(t)},onMouseUp:t=>{var c;(c=o.onMouseUp)==null||c.call(o,t),B(t)},onClick:t=>{var c,h;(c=o.onClick)==null||c.call(o,t),(h=x.current)==null||h.focus({preventScroll:!0})},children:[U(m)&&i.jsx("div",{...l("input__prefix"),children:m}),i.jsx(te,{...j,...l("input__input"),...u==null?void 0:u.inputAria,ref:t=>{x.current=t;const c=ee(j==null?void 0:j.ref,t);return()=>{x.current=null,c()}},value:N,type:d==="password"?a?"password":"text":d,placeholder:A,disabled:_,onValueChange:t=>{V(t)}}),E&&!_&&i.jsx("div",{...R(l("input__clear"),{style:{opacity:N.length>0?1:0}}),role:"button","aria-label":p("Clear"),onClick:()=>{V(""),r==null||r()},children:i.jsx(S,{children:i.jsx(ne,{})})}),d==="password"&&!_&&i.jsx("div",{...l("input__password"),role:"button","aria-label":p("Input",a?"Password is not visible":"Password is visible"),onClick:()=>{q(t=>!t)},children:a?i.jsx(S,{children:i.jsx(de,{})}):i.jsx(S,{children:i.jsx(ae,{})})}),U(b)&&i.jsx("div",{...l("input__suffix"),children:b})]})};fe.Number=me;export{fe as I};
