import{u as A,b as M,j as a,m as O,a8 as T,I as C,N as Z,c as z,r as g,B as D,a1 as Q,a as X,Z as Y,l as N,a6 as V,a3 as ee,n as ae,T as P,_ as k,ap as te,a7 as oe}from"./index-23b78b6e.js";import{S as re}from"./check_circle-b8d5dfc6.js";import{S as le}from"./highlight_off-a447bddd.js";import{S as ne}from"./info-2e65580d.js";import{a as se}from"./Route-97ee11e8.js";const L={modal:"^modal","modal--center":"^modal--center","modal--alert":"^modal--alert",modal__content:"^modal__content",modal__header:"^modal__header","modal__header-title":"^modal__header-title","modal__header-actions":"^modal__header-actions",modal__body:"^modal__body",modal__footer:"^modal__footer","modal__footer--left":"^modal__footer--left","modal__footer--center":"^modal__footer--center","modal__footer--right":"^modal__footer--right",modal__alert:"^modal__alert","modal__alert--success":"^modal__alert--success","modal__alert--warning":"^modal__alert--warning","modal__alert--error":"^modal__alert--error","modal__alert--info":"^modal__alert--info","modal__alert-icon":"^modal__alert-icon","modal__alert-content":"^modal__alert-content","modal__alert-title":"^modal__alert-title","modal__alert-message":"^modal__alert-message"};function de(v){const{styleOverrides:y,styleProvider:d,children:_,type:n,title:o,icon:s,...i}=A("ModalAlert",v),t=M(L,{modal:d==null?void 0:d.modal},y);return a.jsxs("div",{...i,...O(t("modal__alert",`modal__alert--${n}`),{className:i.className,style:i.style}),children:[a.jsx("div",{...t("modal__alert-icon"),children:T(s)?s:a.jsx(C,{children:n==="success"?a.jsx(re,{}):n==="warning"?a.jsx(se,{}):n==="error"?a.jsx(le,{}):a.jsx(ne,{})})}),a.jsxs("div",{...t("modal__alert-content"),children:[T(o)&&a.jsx("div",{...t("modal__alert-title"),children:o}),T(_)&&a.jsx("div",{...t("modal__alert-message"),children:_})]})]})}function ie(v){const{styleOverrides:y,styleProvider:d,align:_="right",actions:n=["cancel","ok"],cancelProps:o,okProps:s,onCancelClick:i,onOkClick:t,_onClose:e,...h}=A("ModalFooter",v),I=M(L,{modal:d==null?void 0:d.modal},y),{t:S}=Z(),[E,p]=z(!1,o==null?void 0:o.loading),[m,r]=z(!1,s==null?void 0:s.loading),f={...o,loading:E,onClick:()=>{const l=i==null?void 0:i();l instanceof Promise?(p(!0),l.then(j=>{p(!1),j!==!1&&(e==null||e())})):l!==!1&&(e==null||e())}},u={...s,loading:m,onClick:()=>{const l=t==null?void 0:t();l instanceof Promise?(r(!0),l.then(j=>{r(!1),j!==!1&&(e==null||e())})):l!==!1&&(e==null||e())}};return a.jsx("div",{...h,...O(I("modal__footer",`modal__footer--${_}`),{className:h.className,style:h.style}),children:g.Children.map(n,l=>l==="cancel"?a.jsx(D,{...f,pattern:f.pattern??"secondary",children:f.children??S("Footer","Cancel")}):l==="ok"?a.jsx(D,{...u,children:u.children??S("Footer","OK")}):l)})}function q(v){const{styleOverrides:y,styleProvider:d,children:_,actions:n=["close"],closeProps:o,onCloseClick:s,_id:i,_onClose:t,...e}=A("ModalHeader",v),h=M(L,{modal:d==null?void 0:d.modal},y),{t:I}=Z(),[S,E]=z(!1,o==null?void 0:o.loading),p={...o,loading:S,onClick:()=>{const m=s==null?void 0:s();m instanceof Promise?(E(!0),m.then(r=>{E(!1),r!==!1&&(t==null||t())})):m!==!1&&(t==null||t())}};return a.jsxs("div",{...e,...O(h("modal__header"),{className:e.className,style:e.style}),children:[a.jsx("div",{...h("modal__header-title"),id:i,children:_}),a.jsx("div",{...h("modal__header-actions"),children:g.Children.map(n,m=>m==="close"?a.jsx(D,{...p,"aria-label":p["aria-label"]??I("Close"),pattern:p.pattern??"text",icon:p.icon??a.jsx(C,{children:a.jsx(Q,{})})}):m)})]})}const F=v=>{const{children:y,styleOverrides:d,styleProvider:_,visible:n,header:o,footer:s,alert:i,width:t=520,top:e=100,mask:h=!0,maskClosable:I=!0,escClosable:S=!0,skipFirstTransition:E=!0,destroyAfterClose:p=!0,zIndex:m,onClose:r,afterVisibleChange:f,...u}=A("Modal",v),l=X(),j=M(L,{modal:_==null?void 0:_.modal},d),R=g.useRef(null),w=g.useRef(null),$=g.useRef({prevActiveEl:null}),H=g.useId(),B=`${l}-modal-title-${H}`,K=`${l}-modal-content-${H}`,G=Y(n),J=N.isUndefined(m)?`calc(var(--${l}-zindex-fixed) + ${G})`:m;V(n);const U=(()=>{if(o){const c=N.isString(o)?a.jsx(q,{children:o}):o;return g.cloneElement(c,{_id:B,_onClose:()=>{r==null||r()}})}})();return a.jsx(ee,{selector:()=>{let c=document.getElementById(`${l}-modal-root`);return c||(c=document.createElement("div"),c.id=`${l}-modal-root`,document.body.appendChild(c)),c},children:a.jsx(ae,{enter:n,during:P,skipFirstTransition:E,destroyWhenLeaved:p,afterRender:()=>{if(N.isUndefined(k.clickEvent)||performance.now()-k.clickEvent.time>100)$.current.transformOrigin=void 0;else if(w.current){const c=`${(k.windowSize.width-w.current.offsetWidth)/2}px`,b=e==="center"?`${(k.windowSize.height-w.current.offsetHeight)/2}px`:`${e}${N.isNumber(e)?"px":""}`;$.current.transformOrigin=`calc(${k.clickEvent.x}px - ${c}) calc(${k.clickEvent.y}px - ${b})`}},afterEnter:()=>{f==null||f(!0),$.current.prevActiveEl=document.activeElement,R.current&&R.current.focus({preventScroll:!0})},afterLeave:()=>{f==null||f(!1),$.current.prevActiveEl&&$.current.prevActiveEl.focus({preventScroll:!0})},children:c=>{let b={};switch(c){case"enter":b={transform:"scale(0.3)",opacity:0};break;case"entering":b={transition:["transform","opacity"].map(x=>`${x} ${P}ms ease-out`).join(", "),transformOrigin:$.current.transformOrigin};break;case"leaving":b={transform:"scale(0.3)",opacity:0,transition:["transform","opacity"].map(x=>`${x} ${P}ms ease-in`).join(", "),transformOrigin:$.current.transformOrigin};break}return a.jsxs("div",{...u,...O(j("modal",{"modal--center":e==="center","modal--alert":i}),{className:u.className,style:{...u.style,display:c==="leaved"?"none":void 0,zIndex:J}}),ref:R,tabIndex:u.tabIndex??-1,role:"dialog","aria-modal":!0,"aria-labelledby":U?B:void 0,"aria-describedby":K,onKeyDown:x=>{var W;(W=u.onKeyDown)==null||W.call(u,x),n&&S&&x.code==="Escape"&&(x.stopPropagation(),x.preventDefault(),r==null||r()),te(x)},children:[h&&a.jsx(oe,{visible:n,onClose:()=>{I&&(r==null||r())}}),a.jsxs("div",{...O(j("modal__content"),{style:{width:t,top:e==="center"?void 0:e,maxHeight:e==="center"?void 0:`calc(100% - ${e}${N.isNumber(e)?"px":""} - 20px)`,...b}}),ref:w,children:[U,a.jsx("div",{...j("modal__body"),id:K,children:i??y}),s&&g.cloneElement(s,{_onClose:()=>{r==null||r()}})]})]})}})})};F.Header=q;F.Footer=ie;F.Alert=de;export{F as M};
