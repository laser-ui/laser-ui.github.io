import{r as s,l as e}from"./index-a0198d41.js";function u(t){s.useEffect(()=>t(),[])}function a(t,f="top"){let o=0;for(;!e.isNull(t);)o+=t[f==="top"?"offsetTop":"offsetLeft"],t=t.offsetParent;return o}export{a as g,u};