import{j as e,I as i,r as u,S as A}from"./index-0bc3a1b4.js";import{R as S,D as o}from"./Route-3dbf4d1c.js";import{S as c}from"./person-b8e13872.js";import{A as t}from"./Avatar-f3b1c463.js";import{R as l}from"./Radio-7241733a.js";import{C as h}from"./Compose-a320489a.js";import"./MdRoute-da89bcd9.js";import"./Anchor-e3bacf82.js";import"./getOffsetToRoot-b0d8a59f.js";import"./scrollTo-b5e80bc0.js";import"./toPx-8baa6d9b.js";import"./add-c299b091.js";function d(){return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(t,{img:{src:"/imgs/avatar.png",alt:"avatar"}})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{icon:e.jsx(i,{children:e.jsx(c,{})})})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{text:"U"})})]})}function n(){return e.jsx(t,{text:"U",shape:"square"})}function x(){return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(t,{img:{src:"/error-path/avatar.png",alt:"avatar"},icon:e.jsx(i,{children:e.jsx(c,{})})})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{img:{src:"/error-path/avatar.png",alt:"avatar"},text:"U"})})]})}function v(){const[r,a]=u.useState(40);return e.jsxs(e.Fragment,{children:[e.jsx(l.Group,{list:[30,40,50].map(s=>({label:s,value:s})),model:r,pattern:"outline",onModelChange:s=>{a(s)},children:(s,j,p)=>e.jsx(h,{...s,children:p.map(m=>e.jsx(l,{...j(m)},m.value))})}),e.jsx(A,{}),e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(t,{img:{src:"/imgs/avatar.png",alt:"avatar"},size:r})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{icon:e.jsx(i,{children:e.jsx(c,{})}),size:r})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{text:"U",size:r})}),e.jsx("div",{className:"col-auto",children:e.jsx(t,{text:"Laser",size:r})})]})]})}const $=u.memo(()=>{const r={AvatarBasicDemo:[105,109,112,111,114,116,32,123,32,65,118,97,116,97,114,44,32,73,99,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,105,109,103,61,123,123,32,115,114,99,58,32,39,47,105,109,103,115,47,97,118,97,116,97,114,46,112,110,103,39,44,32,97,108,116,58,32,39,97,118,97,116,97,114,39,32,125,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,116,101,120,116,61,34,85,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],AvatarShapeDemo:[105,109,112,111,114,116,32,123,32,65,118,97,116,97,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,60,65,118,97,116,97,114,32,116,101,120,116,61,34,85,34,32,115,104,97,112,101,61,34,115,113,117,97,114,101,34,32,47,62,59,10,125,10],AvatarLoadErrorDemo:[105,109,112,111,114,116,32,123,32,65,118,97,116,97,114,44,32,73,99,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,10,32,32,32,32,32,32,32,32,32,32,105,109,103,61,123,123,32,115,114,99,58,32,39,47,101,114,114,111,114,45,112,97,116,104,47,97,118,97,116,97,114,46,112,110,103,39,44,32,97,108,116,58,32,39,97,118,97,116,97,114,39,32,125,125,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,105,109,103,61,123,123,32,115,114,99,58,32,39,47,101,114,114,111,114,45,112,97,116,104,47,97,118,97,116,97,114,46,112,110,103,39,44,32,97,108,116,58,32,39,97,118,97,116,97,114,39,32,125,125,32,116,101,120,116,61,34,85,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],AvatarAutoSizeDemo:[105,109,112,111,114,116,32,123,32,65,118,97,116,97,114,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,82,97,100,105,111,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,115,105,122,101,44,32,115,101,116,83,105,122,101,93,32,61,32,117,115,101,83,116,97,116,101,40,52,48,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,100,105,111,46,71,114,111,117,112,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,51,48,44,32,52,48,44,32,53,48,93,46,109,97,112,40,40,115,105,122,101,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,32,32,118,97,108,117,101,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,125,41,41,125,10,32,32,32,32,32,32,32,32,109,111,100,101,108,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,111,117,116,108,105,110,101,34,10,32,32,32,32,32,32,32,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,83,105,122,101,40,118,97,108,117,101,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,40,103,114,111,117,112,80,114,111,112,115,44,32,111,112,116,105,111,110,80,114,111,112,115,44,32,111,112,116,105,111,110,115,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,32,123,46,46,46,103,114,111,117,112,80,114,111,112,115,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,123,111,112,116,105,111,110,115,46,109,97,112,40,40,111,112,116,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,82,97,100,105,111,32,107,101,121,61,123,111,112,116,46,118,97,108,117,101,125,32,123,46,46,46,111,112,116,105,111,110,80,114,111,112,115,40,111,112,116,41,125,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,41,41,125,10,32,32,32,32,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,41,125,10,32,32,32,32,32,32,60,47,82,97,100,105,111,46,71,114,111,117,112,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,105,109,103,61,123,123,32,115,114,99,58,32,39,47,105,109,103,115,47,97,118,97,116,97,114,46,112,110,103,39,44,32,97,108,116,58,32,39,97,118,97,116,97,114,39,32,125,125,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,10,32,32,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,115,105,122,101,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,116,101,120,116,61,34,85,34,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,65,118,97,116,97,114,32,116,101,120,116,61,34,76,97,115,101,114,34,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},a={},s={"en-US":{title:"Avatar",subtitle:"Avatar",description:[10,10,84,104,101,32,96,65,118,97,116,97,114,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(o,{id:"AvatarBasicDemo",renderer:e.jsx(d,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:r.AvatarBasicDemo,scssSource:a.AvatarBasicDemo}),e.jsx(o,{id:"AvatarShapeDemo",renderer:e.jsx(n,{}),title:"Shape",description:[10,10,85,115,101,32,116,104,101,32,96,115,104,97,112,101,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,115,104,97,112,101,46,10,10],tsxSource:r.AvatarShapeDemo,scssSource:a.AvatarShapeDemo}),e.jsx(o,{id:"AvatarLoadErrorDemo",renderer:e.jsx(x,{}),title:"Failed to load",description:[10,10,96,105,99,111,110,96,32,111,114,32,96,116,101,120,116,96,32,119,105,108,108,32,98,101,32,100,105,115,112,108,97,121,101,100,32,119,104,101,110,32,116,104,101,32,105,109,97,103,101,32,102,97,105,108,115,32,116,111,32,108,111,97,100,44,32,112,114,105,111,114,105,116,121,32,96,105,99,111,110,96,32,62,32,96,116,101,120,116,96,46,10,10],tsxSource:r.AvatarLoadErrorDemo,scssSource:a.AvatarLoadErrorDemo}),e.jsx(o,{id:"AvatarAutoSizeDemo",renderer:e.jsx(v,{}),title:"Auto resize",description:[10,10,84,104,101,32,99,111,109,112,111,110,101,110,116,32,97,114,101,32,97,117,116,111,109,97,116,105,99,97,108,108,121,32,114,101,115,105,122,101,100,46,10,10],tsxSource:r.AvatarAutoSizeDemo,scssSource:a.AvatarAutoSizeDemo})]}),links:[{title:"Basic",href:"AvatarBasicDemo"},{title:"Shape",href:"AvatarShapeDemo"},{title:"Failed to load",href:"AvatarLoadErrorDemo"},{title:"Auto resize",href:"AvatarAutoSizeDemo"}]},"zh-CN":{title:"Avatar",subtitle:"头像",description:[10,10,96,65,118,97,116,97,114,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(o,{id:"AvatarBasicDemo",renderer:e.jsx(d,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:r.AvatarBasicDemo,scssSource:a.AvatarBasicDemo}),e.jsx(o,{id:"AvatarShapeDemo",renderer:e.jsx(n,{}),title:"形状",description:[10,10,228,189,191,231,148,168,32,96,115,104,97,112,101,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,189,162,231,138,182,227,128,130,10,10],tsxSource:r.AvatarShapeDemo,scssSource:a.AvatarShapeDemo}),e.jsx(o,{id:"AvatarLoadErrorDemo",renderer:e.jsx(x,{}),title:"加载失败",description:[10,10,96,105,99,111,110,96,32,230,136,150,232,128,133,32,96,116,101,120,116,96,32,228,188,154,229,156,168,229,155,190,231,137,135,229,138,160,232,189,189,229,164,177,232,180,165,230,151,182,230,152,190,231,164,186,239,188,140,228,188,152,229,133,136,231,186,167,32,96,105,99,111,110,96,32,62,32,96,116,101,120,116,96,227,128,130,10,10],tsxSource:r.AvatarLoadErrorDemo,scssSource:a.AvatarLoadErrorDemo}),e.jsx(o,{id:"AvatarAutoSizeDemo",renderer:e.jsx(v,{}),title:"自动调整大小",description:[10,10,231,187,132,228,187,182,232,135,170,229,138,168,232,176,131,230,149,180,229,164,167,229,176,143,227,128,130,10,10],tsxSource:r.AvatarAutoSizeDemo,scssSource:a.AvatarAutoSizeDemo})]}),links:[{title:"基本",href:"AvatarBasicDemo"},{title:"形状",href:"AvatarShapeDemo"},{title:"加载失败",href:"AvatarLoadErrorDemo"},{title:"自动调整大小",href:"AvatarAutoSizeDemo"}]}};return e.jsx(S,{...s})});export{$ as Avatar,$ as default};
