import{r as n,u as y,a as C,b as E,l as f,j as s,m as g,I as k,U as z,K as I}from"./index-c3c40a13.js";import{S as L}from"./cancel-f87f223b.js";import{b as P,a as U}from"./Route-cdfc32cb.js";const W=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),N=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},n.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),B={progress:"^progress","progress--line":"^progress--line","progress--circle":"^progress--circle","progress--dashboard":"^progress--dashboard","progress--success":"^progress--success","progress--warning":"^progress--warning","progress--error":"^progress--error","progress--process":"^progress--process","progress__line-track":"^progress__line-track","progress__line-bar":"^progress__line-bar","progress__line-wave":"^progress__line-wave",progress__svg:"^progress__svg",progress__label:"^progress__label"};function G(t){const{styleOverrides:S,styleProvider:p,percent:e,pattern:r="line",state:_,label:d,size:m=120,wave:$=!1,lineCap:h="round",lineWidth:i=8,gapDegree:u=75,linearGradient:o,...v}=y("Progress",t),j=C(),a=E(B,{progress:p==null?void 0:p.progress},S),w=n.useId(),l=f.isUndefined(_)?e===100?"success":"process":_;return s.jsxs("div",{...v,...g(a("progress",`progress--${r}`,`progress--${l}`),{className:v.className,style:v.style}),role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,children:[r==="line"?s.jsx("div",{...g(a("progress__line-track"),{style:{height:i,borderRadius:h==="round"?i/2:0}}),children:s.jsx("div",{...g(a("progress__line-bar"),{style:{opacity:e===0?0:1,width:`${e}%`,backgroundImage:o?`linear-gradient(to right, ${o[0]} 0%, ${o[100]} 100%)`:void 0}}),children:$&&e>0&&s.jsx("div",{...a("progress__line-wave")})})}):(()=>{const x=60-i/2,c=2*Math.PI*x,b=c-(r==="circle"?0:u/360*c);return s.jsx(k,{size:m,rotate:r==="circle"?-90:90+u/2,children:s.jsxs("svg",{...a("progress__svg"),viewBox:"0 0 120 120",children:[o&&s.jsx("defs",{children:s.jsxs("linearGradient",{id:`${j}-progress-gradient-${w}-1`,gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{offset:"0%",stopColor:o[0]}),s.jsx("stop",{offset:"100%",stopColor:o[100]})]})}),s.jsx("circle",{cx:60,cy:60,r:x,strokeLinecap:h,strokeWidth:i,stroke:"var(--background-color)",fill:"none",strokeDasharray:`${b} ${c}`}),s.jsx("circle",{style:{opacity:e===0?0:1},cx:60,cy:60,r:x,strokeLinecap:h,strokeWidth:i,stroke:f.isUndefined(o)?"var(--color)":`url(#${j}-progress-gradient-${w}-1)`,fill:"none",strokeDasharray:`${b*(e/100)} ${c}`})]})})})(),d!==!1&&s.jsx("div",{...g(a("progress__label"),{style:{fontSize:r==="line"?void 0:`calc(${m}px / 5)`}}),children:z(d)?d:l==="process"?`${e}%`:s.jsx(k,{size:"1.25em",children:l==="success"?r==="line"?s.jsx(W,{}):s.jsx(P,{}):l==="warning"?r==="line"?s.jsx(N,{}):s.jsx(U,{}):r==="line"?s.jsx(L,{}):s.jsx(I,{})})})]})}export{G as P,W as S,N as a};
