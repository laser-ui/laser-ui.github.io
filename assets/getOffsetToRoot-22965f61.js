import{l as s}from"./index-e8505753.js";function r(t,f="top"){let o=0;for(;!s.isNull(t);)o+=t[f==="top"?"offsetTop":"offsetLeft"],t=t.offsetParent;return o}export{r as g};