import{r as s,N as Re,o as Te,e as $e,a5 as m,i as Ee,j as r,I,W as Le,u as Ue,a as Oe,b as We,U as Ke,d as Ge,l as S,c as De,Q as Ze,Z as Qe,f as qe,_ as Je,$ as je,a0 as Xe,h as et,k as he,a2 as tt,m as me,a3 as rt,n as nt,a4 as ke,B as at}from"./index-a3b6559e.js";import{u as Se}from"./useForkRef-7b0e428d.js";import{u as ct}from"./MdRoute-d49c6f9a.js";import{S as it}from"./cancel-07861f12.js";import{d as st,S as ot,T as lt,o as dt}from"./utils-57861f98.js";import{S as ut}from"./keyboard_arrow_left-bde8cd47.js";import{S as pt,a as _t}from"./keyboard_double_arrow_right-36a4ecaa.js";const ft=K=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...K},s.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"})),ht=s.forwardRef((K,le)=>{const{styled:v,currentSelected:d,anotherSelected:p,config:G,range:ee,onDateChange:de}=K,R=s.useRef({}),{t:V,lang:_}=Re(),z=Te(),ue=$e(()=>window),B=d?m(d):m().set("hour",0).set("minute",0).set("second",0),T=p?m(p):null,[pe,A]=s.useState(B.toDate()),F=m(pe),[f,te]=s.useState(null),E=(o,l)=>{const c=()=>{A(i=>{const w=m(i);return w.set(o,w.get(o)+l).toDate()})};c();const u=()=>{c(),R.current.clearLoop=z.setTimeout(()=>u(),50)};R.current.clearTid=z.setTimeout(()=>u(),400)},$=()=>{var o,l,c,u;(l=(o=R.current).clearLoop)==null||l.call(o),(u=(c=R.current).clearTid)==null||u.call(c)};Ee(ue,"mouseup",$),s.useImperativeHandle(le,()=>A,[]);const L=(o,l)=>({onMouseDown:c=>{c.button===0&&E(o,l)},onTouchStart:()=>{E(o,l)},onTouchEnd:()=>{$()}}),_e=(()=>{const o=F.set("date",1),l=[];let c=[];for(let u=0,i=-o.day();u<7*6;u++,i++)c.push(o.add(i,"day").toDate()),c.length===7&&(l.push(c),c=[]);return l})();return r.jsxs("div",{...v("date-picker__panel"),children:[r.jsxs("div",{...v("date-picker__header"),children:[r.jsx("button",{...v("date-picker__header-button"),...L("year",-1),title:V("DatePicker","Previous year"),children:r.jsx(I,{children:r.jsx(pt,{})})}),r.jsx("button",{...v("date-picker__header-button"),...L("month",-1),title:V("DatePicker","Previous month"),children:r.jsx(I,{children:r.jsx(ut,{})})}),r.jsx("span",{...v("date-picker__header-date"),children:F.format(_==="zh-CN"?"YYYY年 M月":"MMM YYYY")}),r.jsx("button",{...v("date-picker__header-button"),...L("month",1),title:V("DatePicker","Next month"),children:r.jsx(I,{children:r.jsx(Le,{})})}),r.jsx("button",{...v("date-picker__header-button"),...L("year",1),title:V("DatePicker","Next year"),children:r.jsx(I,{children:r.jsx(_t,{})})})]}),r.jsxs("table",{...v("date-picker__table"),children:[r.jsx("thead",{children:r.jsx("tr",{children:m.weekdaysMin().map(o=>r.jsx("th",{children:o},o))})}),r.jsx("tbody",{children:_e.map((o,l)=>r.jsx("tr",{children:o.map((c,u)=>{const i=m(c),{disabled:w=!1}=(G==null?void 0:G(c))??{},g=d&&i.isSame(B,"date"),Z=T&&i.isSame(T,"date"),re=!g&&!Z&&T&&i.isSame(f,"date"),fe=!g&&!g&&!re&&d&&T&&i.isBetween(B,T,"date"),M=!g&&f&&T&&i.isBetween(f,T,"date");return r.jsx("td",{style:{pointerEvents:w?"none":void 0},onClick:()=>{A(c),de(B.set("year",i.year()).set("month",i.month()).set("date",i.date()).toDate())},onMouseEnter:()=>{var x,h;(h=(x=R.current).clearHoverTid)==null||h.call(x),te(c)},onMouseLeave:()=>{var x,h;(h=(x=R.current).clearHoverTid)==null||h.call(x),R.current.clearHoverTid=z.setTimeout(()=>te(null),50)},children:r.jsx("div",{...v("date-picker__cell",{"date-picker__cell.is-active":ee?Z:g,"date-picker__cell.is-hover":re||ee&&g,"date-picker__cell.is-between":fe,"date-picker__cell.is-between-hover":M,"date-picker__cell.is-disabled":w,"date-picker__cell--out-month":i.get("month")!==F.get("month"),"date-picker__cell--today":!g&&!Z&&i.isSame(m(),"date")}),children:i.get("date")})},u)})},l))})]})]})}),mt={"date-picker":"^date-picker","date-picker.is-disabled":"is-disabled","date-picker--small":"^date-picker--small","date-picker--medium":"^date-picker--medium","date-picker--large":"^date-picker--large","date-picker__input":"^date-picker__input","date-picker__indicator":"^date-picker__indicator","date-picker__separator":"^date-picker__separator","date-picker__clear":"^date-picker__clear","date-picker__icon":"^date-picker__icon","date-picker-popup":"^date-picker-popup","date-picker__preset":"^date-picker__preset","date-picker__preset-option":"^date-picker__preset-option","date-picker__panel-wrapper":"^date-picker__panel-wrapper","date-picker__panel":"^date-picker__panel","date-picker__header":"^date-picker__header","date-picker__header-button":"^date-picker__header-button","date-picker__header-date":"^date-picker__header-date","date-picker__table":"^date-picker__table","date-picker__cell":"^date-picker__cell","date-picker__cell.is-active":"is-active","date-picker__cell.is-hover":"is-hover","date-picker__cell.is-between":"is-between","date-picker__cell.is-between-hover":"is-between-hover","date-picker__cell.is-disabled":"is-disabled","date-picker__cell--out-month":"^date-picker__cell--out-month","date-picker__cell--today":"^date-picker__cell--today","date-picker__footer":"^date-picker__footer","time-picker__panel":"^time-picker__panel","time-picker__header":"^time-picker__header","time-picker__column":"^time-picker__column","time-picker__cell":"^time-picker__cell","time-picker__cell.is-active":"is-active","time-picker__cell.is-disabled":"is-disabled"},Dt=s.forwardRef((K,le)=>{const{styleOverrides:v,styleProvider:d,formControl:p,model:G,defaultModel:ee,visible:de,defaultVisible:R,placeholder:V,range:_=!1,format:z,order:ue="ascend",clearable:B=!1,size:T,disabled:pe=!1,presetDate:A,config:F,showTime:f=!1,escClosable:te=!0,inputRef:E,inputRender:$,onModelChange:L,onVisibleChange:_e,onClear:o,afterVisibleChange:l,...c}=Ue("DatePicker",K),u=Oe(),i=We(mt,{"date-picker":d==null?void 0:d["date-picker"],"time-picker":d==null?void 0:d["time-picker"],"date-picker-popup":d==null?void 0:d["date-picker-popup"]},v),{t:w}=Re(),g=Ke(),Z=Te(),{pageScrollRef:re,contentResizeRef:fe}=Ge(),M=s.useRef(null),x=s.useRef(null),h=s.useRef(null),U=s.useRef(null),Q=s.useRef(null),Pe=Se(h,E==null?void 0:E[0]),Me=Se(U,E==null?void 0:E[1]),ne=s.useRef(null),ae=s.useRef(null),ce=e=>{var n,t;(n=ne.current)==null||n.call(ne,e),(t=ae.current)==null||t.call(ae,e)},a=s.useRef({latestFocused:"start",onceVisible:!1,focusAnother:!1,inputValue:[void 0,void 0],rangeDate:[null,null]}),N=S.isUndefined(z)?f?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD":z,ve=e=>dt(e,ue,f?void 0:"date"),[b,O]=De(R??!1,de,_e),[Y,ge]=ct([!1,!1]);Y[0]&&(a.current.latestFocused="start"),Y[1]&&(a.current.latestFocused="end");const[q,W]=De(ee??null,G,L,(e,n)=>st(e,n,N),p==null?void 0:p.control);let[y,D=null]=_?q??[null,null]:[q,null];_&&(S.isNull(q)?[y,D]=a.current.rangeDate:a.current.rangeDate=[null,null]);const ie=[0,1].map(e=>Y[e]&&!S.isUndefined(a.current.inputValue[e])?a.current.inputValue[e]:(()=>{const n=e===0?y:D;return S.isNull(n)?"":m(n).format(N)})()),J=e=>{const n=Y.findIndex(t=>t);_?S.isNull(q)?(a.current.rangeDate[n]=e,a.current.rangeDate.every(t=>!S.isNull(t))&&(a.current.focusAnother=ve(a.current.rangeDate),a.current.focusAnother&&a.current.rangeDate.reverse(),a.current.inputValue=[void 0,void 0],W(a.current.rangeDate))):(a.current.inputValue=[void 0,void 0],W(t=>{t[n]=e,a.current.focusAnother=ve(t),a.current.focusAnother&&t.reverse()})):(a.current.inputValue=[void 0,void 0],W(e)),g()},[Ce=w("DatePicker",_?"Start date":"Select date"),Ve=w("DatePicker","End date")]=_?V??[]:[V],{size:Ae,disabled:se}=Ze({size:T,disabled:pe||(p==null?void 0:p.control.disabled)}),Ne=Qe(b),Ye=`calc(var(--${u}-zindex-fixed) + ${Ne})`,[xe,He]=s.useState(),[Ie,ze]=s.useState({top:"-200vh",left:"-200vw"}),C=qe(()=>{if(b&&M.current&&x.current){const e=x.current.offsetHeight,n=Je.windowSize.width-je*2,t=Math.min(x.current.scrollWidth,n),j=Xe(M.current,{width:t,height:e},{placement:"bottom-left",inWindow:je});He(j.transformOrigin),ze({top:j.top,left:j.left,maxWidth:n})}}),Be=et(C,!b);Ee(re,"scroll",C,{passive:!0},!b||Be),he(M,C,void 0,!b),he(x,C,void 0,!b),he(fe,C,void 0,!b),s.useImperativeHandle(le,()=>({updatePosition:C}),[C]),s.useEffect(()=>{if(M.current&&Q.current){let e=!1;const n=M.current.getBoundingClientRect();if(h.current&&document.activeElement===h.current){const t=h.current.getBoundingClientRect();Q.current.style.cssText=`left:${t.left-n.left}px;width:${t.width}px;opacity:1;`,e=!0}if(U.current&&document.activeElement===U.current){const t=U.current.getBoundingClientRect();Q.current.style.cssText=`left:${t.left-n.left}px;width:${t.width}px;opacity:1;`,e=!0}e||(Q.current.style.cssText+="opacity:0;")}}),s.useEffect(()=>{if(a.current.focusAnother&&document.activeElement){const e=document.activeElement.parentElement;for(let n=0;n<e.childElementCount;n++){const t=e.children.item(n);if(t.tagName.toLowerCase()==="input"&&t!==document.activeElement){t.focus({preventScroll:!0});break}}}a.current.focusAnother=!1});const X=e=>{if(_){const n=Y.findIndex(t=>t);S.isNull(n===0?D:y)?(a.current.focusAnother=!0,g()):O(!1)}else O(!1);a.current.focusAnother||ce(e)},be=B&&!S.isNull(q)&&!b&&!se,we=e=>{const n=e?0:1,t=e?y:D,j=$==null?void 0:$[n],P=r.jsx("input",{...i("date-picker__input"),...p==null?void 0:p.inputAria,ref:e?Pe:Me,type:"text",autoComplete:"off",value:ie[n],size:22,placeholder:e?Ce:Ve,disabled:se,onChange:k=>{if(g(),a.current.inputValue[n]=k.currentTarget.value,m(k.currentTarget.value,N,!0).isValid()){const H=m(k.currentTarget.value,N).toDate();J(H),ce(H)}},onKeyDown:k=>{if(k.code==="Escape")b&&te&&(k.stopPropagation(),k.preventDefault(),O(!1));else if(k.code==="Enter"&&ie[n]&&m(ie[n],N,!0).isValid()){k.preventDefault();const H=m(ie[n],N).toDate();X(H)}},onFocus:()=>{var k,H;(H=(k=a.current).clearTid)==null||H.call(k),ge(ye=>{ye.fill(!1),ye[e?0:1]=!0}),a.current.inputValue=[void 0,void 0],b&&_&&t&&ce(t)},onBlur:()=>{a.current.clearTid=Z.setTimeout(()=>{ge([!1,!1]),O(!1)},20)}});return j?j(P):P},oe=e=>{(document.activeElement===h.current||document.activeElement===U.current)&&e.target!==h.current&&e.target!==U.current&&e.button===0&&e.preventDefault()},Fe=tt({compose:{disabled:se},form:p});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{...c,...me(i("date-picker",`date-picker--${Ae}`,{"date-picker.is-disabled":se}),{className:c.className,style:c.style}),...Fe,ref:M,onMouseDown:e=>{var n;(n=c.onMouseDown)==null||n.call(c,e),oe(e)},onMouseUp:e=>{var n;(n=c.onMouseUp)==null||n.call(c,e),oe(e)},onClick:e=>{var n,t;(n=c.onClick)==null||n.call(c,e),Y.some(j=>j)||(t=h.current)==null||t.focus({preventScroll:!0}),O(!0)},children:[we(!0),_&&r.jsxs(r.Fragment,{children:[r.jsx("div",{...i("date-picker__indicator"),ref:Q}),r.jsx("div",{...i("date-picker__separator"),children:r.jsx(I,{children:r.jsx(ot,{})})}),we(!1)]}),be&&r.jsx("div",{...i("date-picker__clear"),role:"button","aria-label":w("Clear"),onClick:e=>{e.stopPropagation(),a.current.inputValue=[void 0,void 0],W(null),o==null||o()},children:r.jsx(I,{children:r.jsx(it,{})})}),r.jsx("div",{...me(i("date-picker__icon"),{style:{visibility:be?"hidden":void 0}}),children:r.jsx(I,{children:r.jsx(ft,{})})})]}),r.jsx(rt,{selector:()=>{let e=document.getElementById(`${u}-date-picker-root`);return e||(e=document.createElement("div"),e.id=`${u}-date-picker-root`,document.body.appendChild(e)),e},children:r.jsx(nt,{enter:b,during:ke,afterRender:()=>{C();const e=()=>{const n=Y[0]?y:D;n&&ce(n)};_?e():a.current.onceVisible||(a.current.onceVisible=!0,e())},afterEnter:()=>{l==null||l(!0)},afterLeave:()=>{l==null||l(!1)},children:e=>{let n={};switch(e){case"enter":n={transform:"scaleY(0.7)",opacity:0};break;case"entering":n={transition:["transform","opacity"].map(t=>`${t} ${ke}ms ease-out`).join(", "),transformOrigin:xe};break;case"leaving":n={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(t=>`${t} ${ke}ms ease-in`).join(", "),transformOrigin:xe};break;case"leaved":n={display:"none"};break}return r.jsxs("div",{...me(i("date-picker-popup"),{style:{zIndex:Ye,...Ie,...n}}),ref:x,onMouseDown:t=>{oe(t)},onMouseUp:t=>{oe(t)},children:[A&&r.jsx("ul",{...i("date-picker__preset"),children:Object.keys(A).map(t=>{const j=()=>{const P=A[t]();a.current.inputValue=[void 0,void 0],_?S.isArray(P)?(W(P),O(!1)):(J(P),X(P)):(W(P),X(P))};return s.createElement("li",{...i("date-picker__preset-option"),key:t,role:"button",onClick:j},t)})}),r.jsxs("div",{...i("date-picker__panel-wrapper"),children:[r.jsx(ht,{ref:ne,styled:i,currentSelected:a.current.latestFocused==="start"?y:D,anotherSelected:a.current.latestFocused==="start"?D:y,config:F?(...t)=>F(...t,a.current.latestFocused,[y,D]):void 0,range:_,onDateChange:t=>{J(t),f||X(t)}}),f&&r.jsx(lt,{ref:ae,styled:i,time:a.current.latestFocused==="start"?y:D,format:N,config:f&&!S.isBoolean(f)&&f.config?(...t)=>f.config(...t,a.current.latestFocused,[y,D]):void 0,inDatePicker:!0,onTimeChange:t=>{J(t)}}),r.jsx("div",{...i("date-picker__footer"),children:r.jsx(at,{pattern:"link",onClick:()=>{const t=new Date;J(t),X(t)},children:w("DatePicker",f?"Now":"Today")})})]})]})}})})]})});export{Dt as D};