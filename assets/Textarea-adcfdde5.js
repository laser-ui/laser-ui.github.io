import{u as _,b as j,r as C,c as N,z as L,g as M,l as i,N as $,j as l,m as F}from"./index-a3329107.js";import{s as P}from"./setRef-b86e4e87.js";const A={textarea:"^textarea","textarea--small":"^textarea--small","textarea--medium":"^textarea--medium","textarea--large":"^textarea--large",textarea__count:"^textarea__count"};function O(g){const{ref:m,styleOverrides:f,styleProvider:c,formControl:n,model:p,defaultModel:w,autoRows:s=!1,resizable:y=!0,showCount:h=!1,size:T,onModelChange:R,...a}=_("Textarea",g),d=j(A,{textarea:c==null?void 0:c.textarea},f),x=C.useRef(null),[o,H]=N(w??"",p,R,void 0,n==null?void 0:n.control),{size:b,disabled:v}=L({size:T,disabled:a.disabled||(n==null?void 0:n.control.disabled)});M(()=>{const e=x.current;if(e&&s!==!1){const t=e.style.cssText,E=e.rows;if(s===!0){e.style.cssText=t+"overflow:hidden;height:0px;min-height:unset;";const u=e.scrollHeight+(e.offsetHeight-e.clientHeight);e.style.cssText=t,e.style.height=u+"px"}else{e.style.cssText=t+"overflow:hidden;height:0px;padding:0px;min-height:unset;";const u=e.scrollHeight+(e.offsetHeight-e.clientHeight);e.rows=1,e.style.cssText=t+"overflow:hidden;padding:0px;height:unset;min-height:unset;";const S=e.clientHeight;let r=Math.round(u/S);i.isNumber(s.minRows)&&r<s.minRows&&(r=s.minRows),i.isNumber(s.maxRows)&&r>s.maxRows&&(r=s.maxRows),e.rows=r,e.style.cssText=t+"height:unset;min-height:unset;"}return()=>{e.style.cssText=t,e.rows=E}}});const z=$({form:n});return l.jsxs(l.Fragment,{children:[l.jsx("textarea",{...a,...F(d("textarea",`textarea--${b}`),{className:a.className,style:{...a.style,resize:y&&s===!1?void 0:"none"}}),...z,ref:e=>{const t=P(m,e);return x.current=e,()=>{t(),x.current=null}},value:o,disabled:v,onChange:e=>{var t;(t=a.onChange)==null||t.call(a,e),H(e.currentTarget.value)}}),h!==!1&&l.jsx("div",{...d("textarea__count"),children:i.isFunction(h)?h(o.length):i.isUndefined(a.maxLength)?o.length:`${o.length} / ${a.maxLength}`})]})}export{O as T};