import{u as _,b as n,x as u,L as x,j as r,m as y,r as C,y as v}from"./index-c3c40a13.js";const b={compose:"^compose","compose--vertical":"^compose--vertical",compose__item:"^compose__item","compose__item--gray":"^compose__item--gray","compose__item--small":"^compose__item--small","compose__item--medium":"^compose__item--medium","compose__item--large":"^compose__item--large","compose__item.is-disabled":"is-disabled"};function S(c){const{children:i,styleOverrides:p,styleProvider:e,gray:a=!1,...s}=_("ComposeItem",c),l=n(b,{compose:e==null?void 0:e.compose},p),{size:o,disabled:m}=u({}),t=x({compose:{disabled:m}});return r.jsx("div",{...s,...y(l("compose__item",`compose__item--${o}`,{"compose__item--gray":a,"compose__item.is-disabled":m}),{className:s.className,style:s.style}),...t,children:i})}const f=c=>{const{children:i,styleOverrides:p,styleProvider:e,size:a,vertical:s=!1,disabled:l=!1,...o}=_("Compose",c),m=n(b,{compose:e==null?void 0:e.compose},p),{size:t,disabled:d}=u({size:a,disabled:l}),g=C.useMemo(()=>({componentSize:t,componentDisabled:d}),[d,t]);return r.jsx("div",{...o,...y(m("compose",{"compose--vertical":s}),{className:o.className,style:o.style}),children:r.jsx(v,{context:g,children:i})})};f.Item=S;export{f as C};
