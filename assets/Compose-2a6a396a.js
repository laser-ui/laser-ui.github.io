import{j as e,B as t,I as p,r as D,S as u}from"./index-03cf988e.js";import{R as j,D as r}from"./Route-4e9aaed7.js";import{S as l}from"./search-dc5a8860.js";import{C as i}from"./Compose-cba21a45.js";import{I as c}from"./Input-1a725cbf.js";import{R as S}from"./Radio-1557bbf6.js";import"./getOffsetToRoot-eec8a6b3.js";import"./MdRoute-44ead812.js";import"./Anchor-066683d7.js";import"./scrollTo-4474c6b7.js";import"./toPx-b6902773.js";import"./add-eaa9b60d.js";import"./useForkRef-b2bdedbc.js";import"./cancel-b9c62dfb.js";import"./visibility-03300c44.js";import"./keyboard_arrow_down-c3c87d75.js";function a(){return e.jsxs(i,{children:[e.jsx(c,{placeholder:"Search"}),e.jsx(t,{icon:e.jsx(p,{children:e.jsx(l,{})})})]})}function n(){return e.jsxs(i,{children:[e.jsx(i.Item,{children:"http://"}),e.jsx(c,{placeholder:"URL"}),e.jsx(i.Item,{gray:!0,children:".com"})]})}function d(){return e.jsxs(i,{disabled:!0,children:[e.jsx(c,{placeholder:"Search"}),e.jsx(t,{icon:e.jsx(p,{children:e.jsx(l,{})})})]})}function C(){return e.jsx(i,{vertical:!0,children:["1","2","3"].map(o=>e.jsx(t,{pattern:"secondary",children:o},o))})}function x(){const[o,s]=D.useState("medium");return e.jsxs(e.Fragment,{children:[e.jsx(S.Group,{list:["small","medium","large"].map(m=>({label:m,value:m})),model:o,pattern:"outline",onModelChange:m=>{s(m)},children:m=>e.jsx(i,{children:m})}),e.jsx(u,{}),e.jsxs(i,{size:o,children:[e.jsx(c,{placeholder:"Search"}),e.jsx(t,{icon:e.jsx(p,{children:e.jsx(l,{})})})]})]})}const G=D.memo(()=>{const o={ComposeBasicDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,115,101,97,114,99,104,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,83,101,97,114,99,104,34,32,47,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,41,59,10,125,10],ComposeCustomDemo:[105,109,112,111,114,116,32,123,32,67,111,109,112,111,115,101,44,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,46,73,116,101,109,62,104,116,116,112,58,47,47,60,47,67,111,109,112,111,115,101,46,73,116,101,109,62,10,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,85,82,76,34,32,47,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,46,73,116,101,109,32,103,114,97,121,62,46,99,111,109,60,47,67,111,109,112,111,115,101,46,73,116,101,109,62,10,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,41,59,10,125,10],ComposeDisabledDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,115,101,97,114,99,104,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,67,111,109,112,111,115,101,32,100,105,115,97,98,108,101,100,62,10,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,83,101,97,114,99,104,34,32,47,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,41,59,10,125,10],ComposeVerticalDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,67,111,109,112,111,115,101,32,118,101,114,116,105,99,97,108,62,10,32,32,32,32,32,32,123,91,39,49,39,44,32,39,50,39,44,32,39,51,39,93,46,109,97,112,40,40,116,101,120,116,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,32,107,101,121,61,123,116,101,120,116,125,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,62,10,32,32,32,32,32,32,32,32,32,32,123,116,101,120,116,125,10,32,32,32,32,32,32,32,32,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,41,41,125,10,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,41,59,10,125,10],ComposeSizeDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,73,110,112,117,116,44,32,82,97,100,105,111,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,115,101,97,114,99,104,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,115,105,122,101,44,32,115,101,116,83,105,122,101,93,32,61,32,117,115,101,83,116,97,116,101,40,39,109,101,100,105,117,109,39,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,100,105,111,46,71,114,111,117,112,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,39,115,109,97,108,108,39,44,32,39,109,101,100,105,117,109,39,44,32,39,108,97,114,103,101,39,93,46,109,97,112,40,40,115,105,122,101,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,32,32,118,97,108,117,101,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,125,41,41,125,10,32,32,32,32,32,32,32,32,109,111,100,101,108,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,111,117,116,108,105,110,101,34,10,32,32,32,32,32,32,32,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,83,105,122,101,40,118,97,108,117,101,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,40,110,111,100,101,115,41,32,61,62,32,60,67,111,109,112,111,115,101,62,123,110,111,100,101,115,125,60,47,67,111,109,112,111,115,101,62,125,10,32,32,32,32,32,32,60,47,82,97,100,105,111,46,71,114,111,117,112,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,32,115,105,122,101,61,123,115,105,122,101,125,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,83,101,97,114,99,104,34,32,47,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},s={},m={"en-US":{title:"Compose",subtitle:"Compose",description:[10,10,84,104,101,32,96,67,111,109,112,111,115,101,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"ComposeBasicDemo",renderer:e.jsx(a,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:o.ComposeBasicDemo,scssSource:s.ComposeBasicDemo}),e.jsx(r,{id:"ComposeCustomDemo",renderer:e.jsx(n,{}),title:"Compose.Item",description:[10,10,84,104,101,32,98,97,115,105,99,32,117,115,97,103,101,32,111,102,32,96,67,111,109,112,111,115,101,46,73,116,101,109,96,46,10,10],tsxSource:o.ComposeCustomDemo,scssSource:s.ComposeCustomDemo}),e.jsx(r,{id:"ComposeDisabledDemo",renderer:e.jsx(d,{}),title:"Disabled",description:[10,10,73,102,32,116,104,101,32,96,100,105,115,97,98,108,101,100,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,99,111,109,112,111,110,101,110,116,32,105,115,32,100,105,115,97,98,108,101,100,46,10,10],tsxSource:o.ComposeDisabledDemo,scssSource:s.ComposeDisabledDemo}),e.jsx(r,{id:"ComposeVerticalDemo",renderer:e.jsx(C,{}),title:"Vertical",description:[10,10,73,102,32,116,104,101,32,96,118,101,114,116,105,99,97,108,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,108,97,121,111,117,116,32,105,115,32,118,101,114,116,105,99,97,108,46,10,10],tsxSource:o.ComposeVerticalDemo,scssSource:s.ComposeVerticalDemo}),e.jsx(r,{id:"ComposeSizeDemo",renderer:e.jsx(x,{}),title:"Size",description:[10,10,84,104,101,32,96,67,111,109,112,111,115,101,96,32,104,97,115,32,51,32,115,105,122,101,115,58,32,96,115,109,97,108,108,96,44,32,96,109,101,100,105,117,109,96,32,97,110,100,32,96,108,97,114,103,101,96,46,10,10],tsxSource:o.ComposeSizeDemo,scssSource:s.ComposeSizeDemo})]}),links:[{title:"Basic",href:"ComposeBasicDemo"},{title:"Compose.Item",href:"ComposeCustomDemo"},{title:"Disabled",href:"ComposeDisabledDemo"},{title:"Vertical",href:"ComposeVerticalDemo"},{title:"Size",href:"ComposeSizeDemo"}]},"zh-CN":{title:"Compose",subtitle:"组合",description:[10,10,96,67,111,109,112,111,115,101,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"ComposeBasicDemo",renderer:e.jsx(a,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.ComposeBasicDemo,scssSource:s.ComposeBasicDemo}),e.jsx(r,{id:"ComposeCustomDemo",renderer:e.jsx(n,{}),title:"Compose.Item",description:[10,10,96,67,111,109,112,111,115,101,46,73,116,101,109,96,32,231,154,132,229,159,186,230,156,172,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.ComposeCustomDemo,scssSource:s.ComposeCustomDemo}),e.jsx(r,{id:"ComposeDisabledDemo",renderer:e.jsx(d,{}),title:"禁用",description:[10,10,96,100,105,115,97,98,108,101,100,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,231,166,129,231,148,168,231,187,132,228,187,182,227,128,130,10,10],tsxSource:o.ComposeDisabledDemo,scssSource:s.ComposeDisabledDemo}),e.jsx(r,{id:"ComposeVerticalDemo",renderer:e.jsx(C,{}),title:"垂直布局",description:[10,10,96,118,101,114,116,105,99,97,108,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,229,158,130,231,155,180,229,184,131,229,177,128,227,128,130,10,10],tsxSource:o.ComposeVerticalDemo,scssSource:s.ComposeVerticalDemo}),e.jsx(r,{id:"ComposeSizeDemo",renderer:e.jsx(x,{}),title:"尺寸",description:[10,10,96,67,111,109,112,111,115,101,96,32,230,156,137,32,51,32,231,167,141,229,176,186,229,175,184,239,188,154,96,115,109,97,108,108,96,227,128,129,96,109,101,100,105,117,109,96,32,229,146,140,32,96,108,97,114,103,101,96,227,128,130,10,10],tsxSource:o.ComposeSizeDemo,scssSource:s.ComposeSizeDemo})]}),links:[{title:"基本",href:"ComposeBasicDemo"},{title:"Compose.Item",href:"ComposeCustomDemo"},{title:"禁用",href:"ComposeDisabledDemo"},{title:"垂直布局",href:"ComposeVerticalDemo"},{title:"尺寸",href:"ComposeSizeDemo"}]}};return e.jsx(j,{...m})});export{G as Compose,G as default};