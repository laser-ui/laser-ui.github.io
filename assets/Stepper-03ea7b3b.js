import{u as K,b as X,j as e,m as u,l as N,r as l,X as E,I as g,M as q,C as J,T as Q,S as _,B as j}from"./index-2a8bb1b1.js";import{b as Y,R as Z,D as i}from"./Route-ccc680b8.js";import{P as e1}from"./Progress-55c8f9ff.js";import{S as t1}from"./add-2409d70b.js";import{S as s1}from"./remove-1d53bf42.js";import{C as r1}from"./Compose-53c5976b.js";import{S as i1}from"./Switch-4f9ff098.js";import"./MdRoute-717d4287.js";import"./Anchor-d142f7f4.js";import"./getOffsetToRoot-7eb01cba.js";import"./scrollTo-6511b70b.js";import"./toPx-9a561eb2.js";import"./cancel-1cb71692.js";const o1={stepper:"^stepper","stepper--button":"^stepper--button","stepper--label-bottom":"^stepper--label-bottom","stepper--vertical":"^stepper--vertical",stepper__step:"^stepper__step","stepper__step.is-wait":"is-wait","stepper__step.is-active":"is-active","stepper__step.is-completed":"is-completed","stepper__step.is-warning":"is-warning","stepper__step.is-error":"is-error","stepper__step-header":"^stepper__step-header","stepper__step-title":"^stepper__step-title","stepper__step-description":"^stepper__step-description","stepper__step-dot":"^stepper__step-dot","stepper__step-dot--progress":"^stepper__step-dot--progress","stepper__step-separator":"^stepper__step-separator","stepper__step-progress":"^stepper__step-progress"};function a(t){const{styleOverrides:s,styleProvider:r,list:d,active:m,percent:w,dotSize:o=36,clickable:D=!1,labelBottom:c=!1,vertical:p=!1,onClick:x,...b}=K("Stepper",t),n=X(o1,{stepper:r==null?void 0:r.stepper},s);return e.jsx("div",{...b,...u(n("stepper",{"stepper--button":D,"stepper--label-bottom":c,"stepper--vertical":p}),{className:b.className,style:b.style}),children:d.map((f,C)=>{const{step:S=C+1,title:R,description:k,state:v,color:U,dot:B}=f,W=S>m,T=S===m,P=S<m,$=T&&N.isNumber(w),y=e.jsx("div",{...u(n("stepper__step-title"),{style:{marginTop:c?void 0:`calc((${o}px - 1.1em) / 2)`}}),children:R}),I=p&&c?null:C!==d.length-1&&e.jsx("div",{...u(n("stepper__step-separator"),{style:{top:p?`${o}px`:`calc((${o}px - 2px) / 2)`,left:p?`${o/2}px`:c?`calc(50% + ${o/2}px)`:void 0,width:!p&&c?`calc(100% - ${o}px)`:void 0,height:p?`calc(100% - ${o}px)`:void 0}})});return l.createElement("div",{...u(n("stepper__step",N.isUndefined(v)?{"stepper__step.is-wait":W,"stepper__step.is-active":T,"stepper__step.is-completed":P}:{},{[`stepper__step.is-${v}`]:v}),{style:{"--color":U,maxWidth:!p&&C===d.length-1?`calc(100% / ${d.length})`:void 0,width:!p&&c?`calc(100% / ${d.length})`:void 0}}),key:S,role:D?"button":void 0,tabIndex:D?0:void 0,onKeyDown:h=>{D&&(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),x==null||x(S,f))},onClick:()=>{D&&(x==null||x(S,f))}},e.jsxs("div",{...n("stepper__step-header"),children:[e.jsxs("div",{...u(n("stepper__step-dot",{"stepper__step-dot--progress":$}),{style:{width:o,height:o}}),children:[B===!1?null:E(B)?B:v==="error"?e.jsx(g,{children:e.jsx(q,{})}):P?e.jsx(g,{children:e.jsx(Y,{})}):S,$&&e.jsx("div",{...n("stepper__step-progress"),children:e.jsx(e1,{percent:w,pattern:"circle",state:"process",label:!1,size:o+8,lineWidth:4})})]}),!c&&y,!p&&I]}),c&&y,p&&I,E(k)&&e.jsx(J,{height:0,enter:!p||T,duration:Q,children:(h,O)=>e.jsx("div",{ref:G=>(h(G),()=>{h(null)}),style:{display:O?"none":void 0},children:e.jsx("div",{...u(n("stepper__step-description"),{style:{marginLeft:c?void 0:`calc(${o}px + 8px)`}}),children:k})})}))})})}function L(){const[t,s]=l.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{active:t,list:[{title:"This is a long long long long long title"},{title:"Step 2"},{title:"Step 3",description:"This is a long long long long long description."},{title:"Step 4",description:"This is 4 description."}]}),e.jsx(_,{}),e.jsx(j,{className:"me-2",pattern:"secondary",disabled:t===1,onClick:()=>{s(r=>r-1)},children:"Previous"}),e.jsx(j,{disabled:t===5,onClick:()=>{s(r=>r+1)},children:t>=4?"Done":"Next"})]})}function V(){const[t,s]=l.useState(1);return e.jsx(a,{active:t,list:[{title:"This is a long long long long long title"},{title:"Step 2"},{title:"Step 3",description:"This is a long long long long long description."},{title:"Step 4",description:"This is 4 description."}],clickable:!0,onClick:r=>{s(r)}})}function z(){return e.jsx(a,{active:3,list:[{title:"This is a long long long long long title"},{title:"Step 2"},{title:"Step 3",description:"This is a long long long long long description."},{title:"Step 4",description:"This is 4 description."}],labelBottom:!0})}function M(){return e.jsx(a,{active:3,list:[{title:"Step 1",description:"This is 1 description."},{title:"Step 2",state:"error",description:"This is 2 description."},{title:"Step 3",description:"This is 3 description."}]})}const p1=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},l.createElement("path",{d:"M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79h-1.51zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75l-1.2-1.19zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1z"})),l1=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},l.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"}));function A(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{active:2,list:[{title:"Step 1",description:"This is 1 description.",dot:!1},{title:"Step 2",description:"This is 2 description.",color:"rgb(123 74 203)",dot:!1},{title:"Step 3",description:"This is 3 description.",dot:!1}],dotSize:8}),e.jsx(_,{}),e.jsx(a,{active:2,list:[{title:"Step 1",description:"This is 1 description.",dot:e.jsx(g,{children:e.jsx(p1,{})})},{title:"Step 2",description:"This is 2 description.",dot:e.jsx(g,{children:e.jsx(l1,{})})},{title:"Step 3",description:"This is 3 description."}]})]})}function F(){const[t,s]=l.useState(60);return e.jsxs(e.Fragment,{children:[e.jsxs(r1,{children:[e.jsx(j,{pattern:"secondary",icon:e.jsx(g,{children:e.jsx(s1,{})}),onClick:()=>{s(Math.max(t-10,0))}}),e.jsx(j,{pattern:"secondary",icon:e.jsx(g,{children:e.jsx(t1,{})}),onClick:()=>{s(Math.min(t+10,100))}})]}),e.jsx(_,{}),e.jsx(a,{active:2,list:[{title:"Step 1",description:"This is 1 description."},{title:"Step 2",description:"This is 2 description."},{title:"Step 3",description:"This is 3 description."}],percent:t})]})}function H(){const[t,s]=l.useState(1),[r,d]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i1,{model:r,onModelChange:d,children:"labelBottom"}),e.jsx(_,{}),e.jsx(a,{active:t,list:[{title:"This is a long long long long long title"},{title:"Step 2"},{title:"Step 3",description:"This is a long long long long long description."},{title:"Step 4",description:"This is 4 description."}],labelBottom:r,vertical:!0}),e.jsx(_,{}),e.jsx(j,{className:"me-2",pattern:"secondary",disabled:t===1,onClick:()=>{s(m=>m-1)},children:"Previous"}),e.jsx(j,{disabled:t===5,onClick:()=>{s(m=>m+1)},children:t>=4?"Done":"Next"})]})}const v1=l.memo(()=>{const t={StepperBasicDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,83,101,112,97,114,97,116,111,114,44,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,97,99,116,105,118,101,44,32,115,101,116,65,99,116,105,118,101,93,32,61,32,117,115,101,83,116,97,116,101,40,49,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,61,123,97,99,116,105,118,101,125,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,52,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,52,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,99,108,97,115,115,78,97,109,101,61,34,109,101,45,50,34,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,100,105,115,97,98,108,101,100,61,123,97,99,116,105,118,101,32,61,61,61,32,49,125,10,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,65,99,116,105,118,101,40,40,112,114,101,118,65,99,116,105,118,101,41,32,61,62,32,112,114,101,118,65,99,116,105,118,101,32,45,32,49,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,80,114,101,118,105,111,117,115,10,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,100,105,115,97,98,108,101,100,61,123,97,99,116,105,118,101,32,61,61,61,32,53,125,10,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,65,99,116,105,118,101,40,40,112,114,101,118,65,99,116,105,118,101,41,32,61,62,32,112,114,101,118,65,99,116,105,118,101,32,43,32,49,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,97,99,116,105,118,101,32,62,61,32,52,32,63,32,39,68,111,110,101,39,32,58,32,39,78,101,120,116,39,125,10,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],StepperClickableDemo:[105,109,112,111,114,116,32,123,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,97,99,116,105,118,101,44,32,115,101,116,65,99,116,105,118,101,93,32,61,32,117,115,101,83,116,97,116,101,40,49,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,97,99,116,105,118,101,61,123,97,99,116,105,118,101,125,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,52,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,52,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,99,108,105,99,107,97,98,108,101,10,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,115,116,101,112,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,115,101,116,65,99,116,105,118,101,40,115,116,101,112,41,59,10,32,32,32,32,32,32,125,125,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],StepperLabelBottomDemo:[105,109,112,111,114,116,32,123,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,97,99,116,105,118,101,61,123,51,125,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,52,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,52,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,108,97,98,101,108,66,111,116,116,111,109,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],StepperStatusDemo:[105,109,112,111,114,116,32,123,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,97,99,116,105,118,101,61,123,51,125,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,49,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,49,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,115,116,97,116,101,58,32,39,101,114,114,111,114,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,50,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,51,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],StepperCustomIconDemo:[105,109,112,111,114,116,32,123,32,73,99,111,110,44,32,83,101,112,97,114,97,116,111,114,44,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,80,104,111,110,101,69,110,97,98,108,101,100,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,104,111,110,101,95,101,110,97,98,108,101,100,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,83,109,115,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,115,109,115,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,61,123,50,125,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,49,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,49,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,50,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,108,111,114,58,32,39,114,103,98,40,49,50,51,32,55,52,32,50,48,51,41,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,51,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,32,32,100,111,116,83,105,122,101,61,123,56,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,61,123,50,125,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,49,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,49,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,104,111,110,101,69,110,97,98,108,101,100,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,50,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,83,109,115,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,51,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],StepperProgressDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,83,101,112,97,114,97,116,111,114,44,32,83,116,101,112,112,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,65,100,100,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,97,100,100,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,114,101,109,111,118,101,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,112,101,114,99,101,110,116,44,32,115,101,116,80,101,114,99,101,110,116,93,32,61,32,117,115,101,83,116,97,116,101,40,54,48,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,97,120,40,112,101,114,99,101,110,116,32,45,32,49,48,44,32,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,65,100,100,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,105,110,40,112,101,114,99,101,110,116,32,43,32,49,48,44,32,49,48,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,61,123,50,125,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,49,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,49,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,50,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,51,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,32,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],StepperVerticalDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,83,101,112,97,114,97,116,111,114,44,32,83,116,101,112,112,101,114,44,32,83,119,105,116,99,104,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,97,99,116,105,118,101,44,32,115,101,116,65,99,116,105,118,101,93,32,61,32,117,115,101,83,116,97,116,101,40,49,41,59,10,32,32,99,111,110,115,116,32,91,108,97,98,101,108,66,111,116,116,111,109,44,32,115,101,116,76,97,98,101,108,66,111,116,116,111,109,93,32,61,32,117,115,101,83,116,97,116,101,40,102,97,108,115,101,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,83,119,105,116,99,104,32,109,111,100,101,108,61,123,108,97,98,101,108,66,111,116,116,111,109,125,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,115,101,116,76,97,98,101,108,66,111,116,116,111,109,125,62,10,32,32,32,32,32,32,32,32,108,97,98,101,108,66,111,116,116,111,109,10,32,32,32,32,32,32,60,47,83,119,105,116,99,104,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,83,116,101,112,112,101,114,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,61,123,97,99,116,105,118,101,125,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,105,116,108,101,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,116,101,112,32,52,39,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,115,99,114,105,112,116,105,111,110,58,32,39,84,104,105,115,32,105,115,32,52,32,100,101,115,99,114,105,112,116,105,111,110,46,39,44,10,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,32,32,108,97,98,101,108,66,111,116,116,111,109,61,123,108,97,98,101,108,66,111,116,116,111,109,125,10,32,32,32,32,32,32,32,32,118,101,114,116,105,99,97,108,10,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,99,108,97,115,115,78,97,109,101,61,34,109,101,45,50,34,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,100,105,115,97,98,108,101,100,61,123,97,99,116,105,118,101,32,61,61,61,32,49,125,10,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,65,99,116,105,118,101,40,40,112,114,101,118,65,99,116,105,118,101,41,32,61,62,32,112,114,101,118,65,99,116,105,118,101,32,45,32,49,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,80,114,101,118,105,111,117,115,10,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,100,105,115,97,98,108,101,100,61,123,97,99,116,105,118,101,32,61,61,61,32,53,125,10,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,65,99,116,105,118,101,40,40,112,114,101,118,65,99,116,105,118,101,41,32,61,62,32,112,114,101,118,65,99,116,105,118,101,32,43,32,49,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,97,99,116,105,118,101,32,62,61,32,52,32,63,32,39,68,111,110,101,39,32,58,32,39,78,101,120,116,39,125,10,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},s={},r={"en-US":{title:"Stepper",subtitle:"Stepper",description:[10,10,84,104,101,32,96,83,116,101,112,112,101,114,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"StepperBasicDemo",renderer:e.jsx(L,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:t.StepperBasicDemo,scssSource:s.StepperBasicDemo}),e.jsx(i,{id:"StepperClickableDemo",renderer:e.jsx(V,{}),title:"Button mode",description:[10,10,73,102,32,116,104,101,32,96,99,108,105,99,107,97,98,108,101,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,99,111,109,112,111,110,101,110,116,32,105,115,32,99,108,105,99,107,97,98,108,101,46,10,10],tsxSource:t.StepperClickableDemo,scssSource:s.StepperClickableDemo}),e.jsx(i,{id:"StepperLabelBottomDemo",renderer:e.jsx(z,{}),title:"Bottom label",description:[10,10,73,102,32,116,104,101,32,96,108,97,98,101,108,66,111,116,116,111,109,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,108,97,98,101,108,32,105,115,32,112,108,97,99,101,100,32,97,116,32,116,104,101,32,98,111,116,116,111,109,46,10,10],tsxSource:t.StepperLabelBottomDemo,scssSource:s.StepperLabelBottomDemo}),e.jsx(i,{id:"StepperStatusDemo",renderer:e.jsx(M,{}),title:"Step status",description:[10,10,84,104,105,115,32,115,104,111,119,115,32,104,111,119,32,116,111,32,99,117,115,116,111,109,105,122,101,32,115,116,101,112,32,115,116,97,116,101,115,46,10,10],tsxSource:t.StepperStatusDemo,scssSource:s.StepperStatusDemo}),e.jsx(i,{id:"StepperCustomIconDemo",renderer:e.jsx(A,{}),title:"Custom dots",description:[10,10,84,104,105,115,32,115,104,111,119,115,32,104,111,119,32,116,111,32,99,117,115,116,111,109,105,122,101,32,100,111,116,115,32,111,102,32,116,104,101,32,99,111,109,112,111,110,101,110,116,46,10,10],tsxSource:t.StepperCustomIconDemo,scssSource:s.StepperCustomIconDemo}),e.jsx(i,{id:"StepperProgressDemo",renderer:e.jsx(F,{}),title:"Progress",description:[10,10,85,115,101,32,116,104,101,32,96,112,101,114,99,101,110,116,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,112,114,111,103,114,101,115,115,32,100,105,115,112,108,97,121,46,10,10],tsxSource:t.StepperProgressDemo,scssSource:s.StepperProgressDemo}),e.jsx(i,{id:"StepperVerticalDemo",renderer:e.jsx(H,{}),title:"Vertical",description:[10,10,73,102,32,116,104,101,32,96,118,101,114,116,105,99,97,108,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,108,97,121,111,117,116,32,105,115,32,118,101,114,116,105,99,97,108,46,10,10],tsxSource:t.StepperVerticalDemo,scssSource:s.StepperVerticalDemo})]}),links:[{title:"Basic",href:"StepperBasicDemo"},{title:"Button mode",href:"StepperClickableDemo"},{title:"Bottom label",href:"StepperLabelBottomDemo"},{title:"Step status",href:"StepperStatusDemo"},{title:"Custom dots",href:"StepperCustomIconDemo"},{title:"Progress",href:"StepperProgressDemo"},{title:"Vertical",href:"StepperVerticalDemo"}]},"zh-CN":{title:"Stepper",subtitle:"步骤条",description:[10,10,96,83,116,101,112,112,101,114,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"StepperBasicDemo",renderer:e.jsx(L,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:t.StepperBasicDemo,scssSource:s.StepperBasicDemo}),e.jsx(i,{id:"StepperClickableDemo",renderer:e.jsx(V,{}),title:"按钮模式",description:[10,10,96,99,108,105,99,107,97,98,108,101,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,231,187,132,228,187,182,229,143,175,231,130,185,229,135,187,227,128,130,10,10],tsxSource:t.StepperClickableDemo,scssSource:s.StepperClickableDemo}),e.jsx(i,{id:"StepperLabelBottomDemo",renderer:e.jsx(z,{}),title:"标签置底",description:[10,10,96,108,97,98,101,108,66,111,116,116,111,109,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,230,160,135,231,173,190,231,189,174,229,186,149,227,128,130,10,10],tsxSource:t.StepperLabelBottomDemo,scssSource:s.StepperLabelBottomDemo}),e.jsx(i,{id:"StepperStatusDemo",renderer:e.jsx(M,{}),title:"步骤状态",description:[10,10,232,191,153,233,135,140,229,177,149,231,164,186,228,186,134,229,166,130,228,189,149,232,135,170,229,174,154,228,185,137,230,173,165,233,170,164,231,138,182,230,128,129,227,128,130,10,10],tsxSource:t.StepperStatusDemo,scssSource:s.StepperStatusDemo}),e.jsx(i,{id:"StepperCustomIconDemo",renderer:e.jsx(A,{}),title:"自定义轴点",description:[10,10,232,191,153,233,135,140,229,177,149,231,164,186,228,186,134,229,166,130,228,189,149,232,135,170,229,174,154,228,185,137,231,187,132,228,187,182,232,189,180,231,130,185,227,128,130,10,10],tsxSource:t.StepperCustomIconDemo,scssSource:s.StepperCustomIconDemo}),e.jsx(i,{id:"StepperProgressDemo",renderer:e.jsx(F,{}),title:"进度",description:[10,10,228,189,191,231,148,168,32,96,112,101,114,99,101,110,116,96,32,229,177,158,230,128,167,232,174,190,231,189,174,232,191,155,229,186,166,229,177,149,231,164,186,227,128,130,10,10],tsxSource:t.StepperProgressDemo,scssSource:s.StepperProgressDemo}),e.jsx(i,{id:"StepperVerticalDemo",renderer:e.jsx(H,{}),title:"垂直布局",description:[10,10,96,118,101,114,116,105,99,97,108,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,229,158,130,231,155,180,229,184,131,229,177,128,227,128,130,10,10],tsxSource:t.StepperVerticalDemo,scssSource:s.StepperVerticalDemo})]}),links:[{title:"基本",href:"StepperBasicDemo"},{title:"按钮模式",href:"StepperClickableDemo"},{title:"标签置底",href:"StepperLabelBottomDemo"},{title:"步骤状态",href:"StepperStatusDemo"},{title:"自定义轴点",href:"StepperCustomIconDemo"},{title:"进度",href:"StepperProgressDemo"},{title:"垂直布局",href:"StepperVerticalDemo"}]}};return e.jsx(Z,{...r})});export{v1 as Stepper,v1 as default};
