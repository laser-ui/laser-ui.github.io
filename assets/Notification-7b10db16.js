import{u as U,a as K,b as G,w as H,n as W,r as x,j as i,P as X,C as J,L as Q,m as Y,l as Z,X as y,I as v,M as V,B as D,o as S}from"./index-2a8bb1b1.js";import{u as i1,a as t1,R as o1,D as l}from"./Route-ccc680b8.js";import{S as e1}from"./check_circle-849e5465.js";import{S as n1}from"./highlight_off-1afee169.js";import{S as c1}from"./info-a281f549.js";import{S as a1}from"./access_alarm-105119d9.js";import"./MdRoute-717d4287.js";import"./Anchor-d142f7f4.js";import"./getOffsetToRoot-7eb01cba.js";import"./scrollTo-6511b70b.js";import"./toPx-9a561eb2.js";import"./add-2409d70b.js";const s1={notification:"^notification","notification--success":"^notification--success","notification--warning":"^notification--warning","notification--error":"^notification--error","notification--info":"^notification--info",notification__icon:"^notification__icon",notification__content:"^notification__content",notification__header:"^notification__header",notification__title:"^notification__title",notification__close:"^notification__close",notification__description:"^notification__description"},r1={enter:133,leave:166};function g(t){const{children:n,styleOverrides:_,styleProvider:T,visible:I,title:P,type:m,placement:u="right-top",duration:h=9.6,icon:N,closable:R=!0,escClosable:M=!0,skipFirstTransition:q=!0,destroyAfterClose:F=!1,lazyLoading:z=!0,onClose:c,afterVisibleChange:d,...e}=U("Notification",t),a=K(),f=G(s1,{notification:T==null?void 0:T.notification},_),{t:O}=H(),b=W(),B=x.useRef(null),j=x.useRef(()=>{}),w=x.useId(),$=`${a}-notification-title-${w}`,k=`${a}-notification-content-${w}`;return i1(()=>{h>0&&(j.current=b.setTimeout(()=>{c==null||c()},h*1e3))}),i.jsx(X,{selector:()=>{const p=u==="left-top"?`${a}-notification-lt-root`:u==="right-top"?`${a}-notification-rt-root`:u==="left-bottom"?`${a}-notification-lb-root`:`${a}-notification-rb-root`;let s=document.getElementById(`${a}-notification-root`);s||(s=document.createElement("div"),s.id=`${a}-notification-root`,document.body.appendChild(s));let o=document.getElementById(p);return o||(o=document.createElement("div"),o.id=p,s.appendChild(o)),o},children:i.jsx(J,{height:0,enter:I,name:`${a}-notification`,duration:r1,skipFirstTransition:q,onAfterEnter:()=>{d==null||d(!0)},onAfterLeave:()=>{d==null||d(!1)},children:(p,s)=>i.jsx(Q,{hidden:s,disabled:!z,children:s&&F?null:i.jsxs("div",{...e,...Y(f("notification",{[`notification--${m}`]:m}),{className:e.className,style:{...e.style,"--notification-transform":u==="left-top"||u==="left-bottom"?"translate(-100%, 0)":"translate(100%, 0)",...s?{display:"none"}:void 0}}),ref:o=>(B.current=o,p(o),()=>{B.current=null,p(null)}),tabIndex:e.tabIndex??-1,role:e.role??"alert","aria-labelledby":$,"aria-describedby":k,onMouseEnter:o=>{var r;(r=e.onMouseEnter)==null||r.call(e,o),j.current()},onMouseLeave:o=>{var r;(r=e.onMouseLeave)==null||r.call(e,o),h>0&&(j.current=b.setTimeout(()=>{c==null||c()},h*1e3))},onKeyDown:o=>{var r;(r=e.onKeyDown)==null||r.call(e,o),I&&M&&o.code==="Escape"&&(o.stopPropagation(),o.preventDefault(),j.current(),c==null||c())},children:[N!==!1&&(!Z.isUndefined(m)||y(N))&&i.jsx("div",{...f("notification__icon"),children:y(N)?N:i.jsx(v,{children:m==="success"?i.jsx(e1,{}):m==="warning"?i.jsx(t1,{}):m==="error"?i.jsx(n1,{}):i.jsx(c1,{})})}),i.jsxs("div",{...f("notification__content"),children:[i.jsxs("div",{...f("notification__header"),children:[i.jsx("div",{...f("notification__title"),id:$,children:P}),R&&i.jsx("button",{...f("notification__close"),"aria-label":O("Close"),onClick:c,children:i.jsx(v,{children:i.jsx(V,{})})})]}),y(n)&&i.jsx("div",{...f("notification__description"),id:k,children:n})]})]})})})})}function A(){return i.jsx(D,{onClick:()=>{S.open(g,{title:"Notification Title",children:"An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response."})},children:"Show Notification"})}function C(){return i.jsx("div",{className:"row g-2",children:["success","warning","error","info"].map(t=>i.jsx("div",{className:"col-auto",children:i.jsx(D,{onClick:()=>{S.open(g,{title:"Notification Title",type:t,children:"An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response."})},children:t})},t))})}function E(){return["LT","RT","LB","RB"].map(t=>i.jsxs(x.Fragment,{children:[i.jsx(D,{onClick:()=>{S.open(g,{title:"Notification Title",placement:t==="LT"?"left-top":t==="RT"?"right-top":t==="LB"?"left-bottom":"right-bottom",children:"An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response."})},children:t}),t==="RT"&&i.jsx("br",{})]},t))}function L(){return i.jsx(D,{onClick:()=>{S.open(g,{title:"Notification Title",icon:i.jsx(v,{children:i.jsx(a1,{})}),children:"An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response."})},children:"Show Notification"})}const g1=x.memo(()=>{const t={NotificationBasicDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,68,105,97,108,111,103,83,101,114,118,105,99,101,44,32,78,111,116,105,102,105,99,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,68,105,97,108,111,103,83,101,114,118,105,99,101,46,111,112,101,110,40,78,111,116,105,102,105,99,97,116,105,111,110,44,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,78,111,116,105,102,105,99,97,116,105,111,110,32,84,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,96,65,110,32,97,108,101,114,116,32,100,105,97,108,111,103,32,105,115,32,97,32,109,111,100,97,108,32,100,105,97,108,111,103,32,116,104,97,116,32,105,110,116,101,114,114,117,112,116,115,32,116,104,101,32,117,115,101,114,39,115,32,119,111,114,107,102,108,111,119,32,116,111,32,99,111,109,109,117,110,105,99,97,116,101,32,97,110,32,105,109,112,111,114,116,97,110,116,32,109,101,115,115,97,103,101,32,97,110,100,32,97,99,113,117,105,114,101,32,97,32,114,101,115,112,111,110,115,101,46,96,44,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,125,10,32,32,32,32,62,10,32,32,32,32,32,32,83,104,111,119,32,78,111,116,105,102,105,99,97,116,105,111,110,10,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,41,59,10,125,10],NotificationTypeDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,68,105,97,108,111,103,83,101,114,118,105,99,101,44,32,78,111,116,105,102,105,99,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,123,91,39,115,117,99,99,101,115,115,39,44,32,39,119,97,114,110,105,110,103,39,44,32,39,101,114,114,111,114,39,44,32,39,105,110,102,111,39,93,46,109,97,112,40,40,116,121,112,101,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,100,105,118,32,107,101,121,61,123,116,121,112,101,125,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,68,105,97,108,111,103,83,101,114,118,105,99,101,46,111,112,101,110,40,78,111,116,105,102,105,99,97,116,105,111,110,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,78,111,116,105,102,105,99,97,116,105,111,110,32,84,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,121,112,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,96,65,110,32,97,108,101,114,116,32,100,105,97,108,111,103,32,105,115,32,97,32,109,111,100,97,108,32,100,105,97,108,111,103,32,116,104,97,116,32,105,110,116,101,114,114,117,112,116,115,32,116,104,101,32,117,115,101,114,39,115,32,119,111,114,107,102,108,111,119,32,116,111,32,99,111,109,109,117,110,105,99,97,116,101,32,97,110,32,105,109,112,111,114,116,97,110,116,32,109,101,115,115,97,103,101,32,97,110,100,32,97,99,113,117,105,114,101,32,97,32,114,101,115,112,111,110,115,101,46,96,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,32,32,123,116,121,112,101,125,10,32,32,32,32,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,41,41,125,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],NotificationPlacementDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,68,105,97,108,111,103,83,101,114,118,105,99,101,44,32,78,111,116,105,102,105,99,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,70,114,97,103,109,101,110,116,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,91,39,76,84,39,44,32,39,82,84,39,44,32,39,76,66,39,44,32,39,82,66,39,93,46,109,97,112,40,40,112,108,97,99,101,109,101,110,116,41,32,61,62,32,40,10,32,32,32,32,60,70,114,97,103,109,101,110,116,32,107,101,121,61,123,112,108,97,99,101,109,101,110,116,125,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,68,105,97,108,111,103,83,101,114,118,105,99,101,46,111,112,101,110,40,78,111,116,105,102,105,99,97,116,105,111,110,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,78,111,116,105,102,105,99,97,116,105,111,110,32,84,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,112,108,97,99,101,109,101,110,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,112,108,97,99,101,109,101,110,116,32,61,61,61,32,39,76,84,39,32,63,32,39,108,101,102,116,45,116,111,112,39,32,58,32,112,108,97,99,101,109,101,110,116,32,61,61,61,32,39,82,84,39,32,63,32,39,114,105,103,104,116,45,116,111,112,39,32,58,32,112,108,97,99,101,109,101,110,116,32,61,61,61,32,39,76,66,39,32,63,32,39,108,101,102,116,45,98,111,116,116,111,109,39,32,58,32,39,114,105,103,104,116,45,98,111,116,116,111,109,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,96,65,110,32,97,108,101,114,116,32,100,105,97,108,111,103,32,105,115,32,97,32,109,111,100,97,108,32,100,105,97,108,111,103,32,116,104,97,116,32,105,110,116,101,114,114,117,112,116,115,32,116,104,101,32,117,115,101,114,39,115,32,119,111,114,107,102,108,111,119,32,116,111,32,99,111,109,109,117,110,105,99,97,116,101,32,97,110,32,105,109,112,111,114,116,97,110,116,32,109,101,115,115,97,103,101,32,97,110,100,32,97,99,113,117,105,114,101,32,97,32,114,101,115,112,111,110,115,101,46,96,44,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,112,108,97,99,101,109,101,110,116,125,10,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,123,112,108,97,99,101,109,101,110,116,32,61,61,61,32,39,82,84,39,32,38,38,32,60,98,114,32,47,62,125,10,32,32,32,32,60,47,70,114,97,103,109,101,110,116,62,10,32,32,41,41,59,10,125,10],NotificationIconDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,68,105,97,108,111,103,83,101,114,118,105,99,101,44,32,73,99,111,110,44,32,78,111,116,105,102,105,99,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,65,99,99,101,115,115,65,108,97,114,109,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,97,99,99,101,115,115,95,97,108,97,114,109,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,68,105,97,108,111,103,83,101,114,118,105,99,101,46,111,112,101,110,40,78,111,116,105,102,105,99,97,116,105,111,110,44,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,78,111,116,105,102,105,99,97,116,105,111,110,32,84,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,58,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,65,99,99,101,115,115,65,108,97,114,109,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,96,65,110,32,97,108,101,114,116,32,100,105,97,108,111,103,32,105,115,32,97,32,109,111,100,97,108,32,100,105,97,108,111,103,32,116,104,97,116,32,105,110,116,101,114,114,117,112,116,115,32,116,104,101,32,117,115,101,114,39,115,32,119,111,114,107,102,108,111,119,32,116,111,32,99,111,109,109,117,110,105,99,97,116,101,32,97,110,32,105,109,112,111,114,116,97,110,116,32,109,101,115,115,97,103,101,32,97,110,100,32,97,99,113,117,105,114,101,32,97,32,114,101,115,112,111,110,115,101,46,96,44,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,125,10,32,32,32,32,62,10,32,32,32,32,32,32,83,104,111,119,32,78,111,116,105,102,105,99,97,116,105,111,110,10,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,41,59,10,125,10]},n={NotificationPlacementDemo:[46,108,45,98,117,116,116,111,110,32,123,10,32,32,119,105,100,116,104,58,32,54,48,112,120,59,10,32,32,109,97,114,103,105,110,58,32,48,32,48,46,53,114,101,109,32,48,46,53,114,101,109,32,48,59,10,125,10]},_={"en-US":{title:"Notification",subtitle:"Notification",description:[10,10,84,104,101,32,96,78,111,116,105,102,105,99,97,116,105,111,110,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"alert",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:i.jsxs(i.Fragment,{children:[i.jsx(l,{id:"NotificationBasicDemo",renderer:i.jsx(A,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:t.NotificationBasicDemo,scssSource:n.NotificationBasicDemo}),i.jsx(l,{id:"NotificationTypeDemo",renderer:i.jsx(C,{}),title:"Type",description:[10,10,84,104,101,32,96,78,111,116,105,102,105,99,97,116,105,111,110,96,32,104,97,115,32,52,32,116,121,112,101,115,58,32,96,115,117,99,99,101,115,115,96,44,32,96,119,97,114,110,105,110,103,96,44,32,96,101,114,114,111,114,96,32,97,110,100,32,96,105,110,102,111,96,46,10,10],tsxSource:t.NotificationTypeDemo,scssSource:n.NotificationTypeDemo}),i.jsx(l,{id:"NotificationPlacementDemo",renderer:i.jsx(E,{}),title:"Placement",description:[10,10,85,115,101,32,116,104,101,32,96,112,108,97,99,101,109,101,110,116,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,112,111,112,117,112,32,112,111,115,105,116,105,111,110,46,10,10],tsxSource:t.NotificationPlacementDemo,scssSource:n.NotificationPlacementDemo}),i.jsx(l,{id:"NotificationIconDemo",renderer:i.jsx(L,{}),title:"Custom icon",description:[10,10,85,115,101,32,116,104,101,32,96,105,99,111,110,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,105,99,111,110,46,10,10],tsxSource:t.NotificationIconDemo,scssSource:n.NotificationIconDemo})]}),links:[{title:"Basic",href:"NotificationBasicDemo"},{title:"Type",href:"NotificationTypeDemo"},{title:"Placement",href:"NotificationPlacementDemo"},{title:"Custom icon",href:"NotificationIconDemo"}]},"zh-CN":{title:"Notification",subtitle:"通知",description:[10,10,96,78,111,116,105,102,105,99,97,116,105,111,110,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"alert",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:i.jsxs(i.Fragment,{children:[i.jsx(l,{id:"NotificationBasicDemo",renderer:i.jsx(A,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:t.NotificationBasicDemo,scssSource:n.NotificationBasicDemo}),i.jsx(l,{id:"NotificationTypeDemo",renderer:i.jsx(C,{}),title:"类型",description:[10,10,96,78,111,116,105,102,105,99,97,116,105,111,110,96,32,230,156,137,32,52,32,231,167,141,231,177,187,229,158,139,239,188,154,96,115,117,99,99,101,115,115,96,227,128,129,96,119,97,114,110,105,110,103,96,227,128,129,96,101,114,114,111,114,96,32,229,146,140,32,96,105,110,102,111,96,227,128,130,10,10],tsxSource:t.NotificationTypeDemo,scssSource:n.NotificationTypeDemo}),i.jsx(l,{id:"NotificationPlacementDemo",renderer:i.jsx(E,{}),title:"位置",description:[10,10,228,189,191,231,148,168,32,96,112,108,97,99,101,109,101,110,116,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,188,185,229,135,186,228,189,141,231,189,174,227,128,130,10,10],tsxSource:t.NotificationPlacementDemo,scssSource:n.NotificationPlacementDemo}),i.jsx(l,{id:"NotificationIconDemo",renderer:i.jsx(L,{}),title:"自定义图标",description:[10,10,228,189,191,231,148,168,32,96,105,99,111,110,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,155,190,230,160,135,227,128,130,10,10],tsxSource:t.NotificationIconDemo,scssSource:n.NotificationIconDemo})]}),links:[{title:"基本",href:"NotificationBasicDemo"},{title:"类型",href:"NotificationTypeDemo"},{title:"位置",href:"NotificationPlacementDemo"},{title:"自定义图标",href:"NotificationIconDemo"}]}};return i.jsx(o1,{..._})});export{g1 as Notification,g1 as default};
