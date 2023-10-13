import{r as c,a5 as R,N as p,g as N,l as m,j as y}from"./index-c3c40a13.js";import{s as S}from"./scrollTo-da2ded29.js";const I=r=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...r},c.createElement("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"})),z=R(["12",...Array.from({length:11}).map((r,s)=>`${s+1<10?"0":""}${s+1}`)]),[b,q,O]=[24,60,60].map(r=>R(Array.from({length:r}).map((s,i)=>`${i<10?"0":""}${i}`))),V=c.forwardRef((r,s)=>{const{styled:i,time:n,format:h,config:l,inDatePicker:P=!1,onTimeChange:g}=r,H=c.useRef(null),v=c.useRef(null),M=c.useRef(null),_=c.useRef({}),T=h.includes("hh"),w=(()=>{const t=[];return h.toLowerCase().includes("hh")&&t.push("HH"),h.includes("mm")&&t.push("mm"),h.includes("ss")&&t.push("ss"),t})(),a=n?p(n):p("00:00:00","HH:mm:ss"),[C,$]=c.useState("AM"),k=n?a.get("hour")<12?"AM":"PM":C,x=N((t,e,u="smooth")=>{var f,o,D,j,A,E;if(e==="hour"||m.isUndefined(e)){let d=t.getHours();T&&(k==="AM"&&d>11&&(d-=12),k==="PM"&&d<12&&(d+=12)),H.current&&((o=(f=_.current).clearHTid)==null||o.call(f),_.current.clearHTid=S(H.current,{top:Array.prototype.indexOf.call(H.current.children,H.current.querySelector(`[data-h="${d}"]`))*28,behavior:u,during:200}))}if(e==="minute"||m.isUndefined(e)){const d=t.getMinutes();v.current&&((j=(D=_.current).clearMTid)==null||j.call(D),_.current.clearMTid=S(v.current,{top:Array.prototype.indexOf.call(v.current.children,v.current.querySelector(`[data-m="${d}"]`))*28,behavior:u,during:200}))}if(e==="second"||m.isUndefined(e)){const d=t.getSeconds();M.current&&((E=(A=_.current).clearSTid)==null||E.call(A),_.current.clearSTid=S(M.current,{top:Array.prototype.indexOf.call(M.current.children,M.current.querySelector(`[data-s="${d}"]`))*28,behavior:u,during:200}))}});return c.useImperativeHandle(s,()=>t=>{x(t,void 0,"instant")},[x]),y.jsxs("div",{...i("time-picker__panel"),children:[P&&y.jsx("div",{...i("time-picker__header"),children:a.format(w.join(":"))}),w.includes("HH")&&y.jsx("ul",{...i("time-picker__column"),ref:H,children:(T?z:b).map(t=>{let e=Number(t);T&&(k==="AM"&&e===12&&(e=0),k==="PM"&&e!==12&&(e+=12));const{disabled:u,hidden:f}=(l==null?void 0:l("hour",e))??{};return f?null:c.createElement("li",{...i("time-picker__cell",{"time-picker__cell.is-active":n&&a.get("hour")===e,"time-picker__cell.is-disabled":u}),key:e,"data-h":e,onClick:()=>{const o=a.set("hour",e).toDate();x(o,"hour"),g(o)}},t)})}),w.includes("mm")&&y.jsx("ul",{...i("time-picker__column"),ref:v,children:q.map(t=>{const e=Number(t),{disabled:u,hidden:f}=(l==null?void 0:l("minute",e))??{};return f?null:c.createElement("li",{...i("time-picker__cell",{"time-picker__cell.is-active":n&&a.get("minute")===e,"time-picker__cell.is-disabled":u}),key:e,"data-m":e,onClick:()=>{const o=a.set("minute",e).toDate();x(o,"minute"),g(o)}},t)})}),w.includes("ss")&&y.jsx("ul",{...i("time-picker__column"),ref:M,children:O.map(t=>{const e=Number(t),{disabled:u,hidden:f}=(l==null?void 0:l("second",e))??{};return f?null:c.createElement("li",{...i("time-picker__cell",{"time-picker__cell.is-active":n&&a.get("second")===e,"time-picker__cell.is-disabled":u}),key:e,"data-s":e,onClick:()=>{const o=a.set("second",e).toDate();x(o,"second"),g(o)}},t)})}),T&&y.jsx("ul",{...i("time-picker__column"),children:["AM","PM"].map(t=>c.createElement("li",{...i("time-picker__cell",{"time-picker__cell.is-active":k===t}),key:t,onClick:()=>{if(n){if(k!==t){const e=a.set("hour",a.get("hour")+(t==="AM"?-12:12)).toDate();g(e)}}else $(t)}},t))})]})});function F(r,s,i){const n=(h,l)=>p(h).format(i)===p(l).format(i);return m.isDate(r)&&m.isDate(s)?n(r,s):m.isNull(r)&&m.isNull(s)?!0:m.isArray(r)&&m.isArray(s)?n(r[0],s[0])&&n(r[1],s[1]):!1}function U(r,s,i){return!!(s==="ascend"&&p(r[0]).isAfter(r[1],i)||s==="descend"&&p(r[0]).isBefore(r[1],i))}function G(r,s){const i=p(r[0]).set("year",2e3).set("month",0).set("date",1),n=p(r[1]).set("year",2e3).set("month",0).set("date",1);return U([i.toDate(),n.toDate()],s)}export{I as S,V as T,G as a,F as d,U as o};
