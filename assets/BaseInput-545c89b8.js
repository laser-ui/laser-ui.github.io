import{r,j as c,l as u}from"./index-5a00b843.js";const p=r.forwardRef((s,g)=>{const{value:l,onValueChange:i,...n}=s,[a,e]=r.useState();return c.jsx("input",{...n,ref:g,value:u.isString(a)?a:l,onCompositionStart:o=>{var t;(t=n.onCompositionStart)==null||t.call(n,o),e(o.currentTarget.value)},onCompositionEnd:o=>{var t;(t=n.onCompositionEnd)==null||t.call(n,o),e(void 0),i(o.currentTarget.value)},onChange:o=>{var t;(t=n.onChange)==null||t.call(n,o),u.isString(a)?e(o.currentTarget.value):i(o.currentTarget.value)}})});export{p as B};