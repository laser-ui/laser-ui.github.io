import{j as t,r,S as a,I as x}from"./index-23b78b6e.js";import{R as d,D as o}from"./Route-97ee11e8.js";import{R as s}from"./Rating-9d954f85.js";import"./MdRoute-fc2f6c88.js";import"./Anchor-92a176b3.js";import"./getOffsetToRoot-d8a53261.js";import"./scrollTo-2eb7a187.js";import"./toPx-73270023.js";import"./add-ad1e4e21.js";import"./star-18f9afab.js";function n(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),t.jsx("h5",{className:"title",children:"readOnly"}),t.jsx(s,{defaultModel:3,readOnly:!0}),t.jsx("h5",{className:"title",children:"disabled"}),t.jsx(s,{defaultModel:3,disabled:!0})]})}function l(){return t.jsx(s,{defaultModel:2.5,half:!0})}function m(){return t.jsx(s,{tooltip:e=>e})}const u=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},r.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}));function c(){return t.jsxs(t.Fragment,{children:[t.jsx(s,{style:{"--l-rating-gutter-x":"2px"},icon:e=>e}),t.jsx(a,{}),t.jsx(s,{style:{"--l-rating-size":"28px","--l-rating-gutter-x":"4px"},icon:"A",total:10}),t.jsx(a,{}),t.jsx(s,{style:{"--l-rating-color":"var(--l-color-danger)"},icon:t.jsx(x,{children:t.jsx(u,{})})})]})}const T=r.memo(()=>{const e={RatingBasicDemo:[105,109,112,111,114,116,32,123,32,82,97,116,105,110,103,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,32,47,62,10,32,32,32,32,32,32,60,104,53,32,99,108,97,115,115,78,97,109,101,61,34,116,105,116,108,101,34,62,114,101,97,100,79,110,108,121,60,47,104,53,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,32,100,101,102,97,117,108,116,77,111,100,101,108,61,123,51,125,32,114,101,97,100,79,110,108,121,32,47,62,10,32,32,32,32,32,32,60,104,53,32,99,108,97,115,115,78,97,109,101,61,34,116,105,116,108,101,34,62,100,105,115,97,98,108,101,100,60,47,104,53,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,32,100,101,102,97,117,108,116,77,111,100,101,108,61,123,51,125,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],RatingHalfDemo:[105,109,112,111,114,116,32,123,32,82,97,116,105,110,103,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,60,82,97,116,105,110,103,32,100,101,102,97,117,108,116,77,111,100,101,108,61,123,50,46,53,125,32,104,97,108,102,32,47,62,59,10,125,10],RatingTooltipDemo:[105,109,112,111,114,116,32,123,32,82,97,116,105,110,103,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,60,82,97,116,105,110,103,32,116,111,111,108,116,105,112,61,123,40,118,41,32,61,62,32,118,125,32,47,62,59,10,125,10],RatingCustomDemo:[105,109,112,111,114,116,32,123,32,73,99,111,110,44,32,82,97,116,105,110,103,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,82,101,97,99,116,67,111,109,112,111,110,101,110,116,32,97,115,32,70,97,118,111,114,105,116,101,70,105,108,108,101,100,32,125,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,102,105,108,108,101,100,47,102,97,118,111,114,105,116,101,46,115,118,103,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,32,115,116,121,108,101,61,123,123,32,39,45,45,108,45,114,97,116,105,110,103,45,103,117,116,116,101,114,45,120,39,58,32,39,50,112,120,39,32,125,125,32,105,99,111,110,61,123,40,118,41,32,61,62,32,118,125,32,47,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,32,115,116,121,108,101,61,123,123,32,39,45,45,108,45,114,97,116,105,110,103,45,115,105,122,101,39,58,32,39,50,56,112,120,39,44,32,39,45,45,108,45,114,97,116,105,110,103,45,103,117,116,116,101,114,45,120,39,58,32,39,52,112,120,39,32,125,125,32,105,99,111,110,61,34,65,34,32,116,111,116,97,108,61,123,49,48,125,32,47,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,82,97,116,105,110,103,10,32,32,32,32,32,32,32,32,115,116,121,108,101,61,123,123,32,39,45,45,108,45,114,97,116,105,110,103,45,99,111,108,111,114,39,58,32,39,118,97,114,40,45,45,108,45,99,111,108,111,114,45,100,97,110,103,101,114,41,39,32,125,125,10,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,70,97,118,111,114,105,116,101,70,105,108,108,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},i={},g={"en-US":{title:"Rating",subtitle:"Rating",description:[10,10,84,104,101,32,96,82,97,116,105,110,103,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"radiobutton",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:t.jsxs(t.Fragment,{children:[t.jsx(o,{id:"RatingBasicDemo",renderer:t.jsx(n,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:e.RatingBasicDemo,scssSource:i.RatingBasicDemo}),t.jsx(o,{id:"RatingHalfDemo",renderer:t.jsx(l,{}),title:"Half star",description:[10,10,73,102,32,116,104,101,32,96,104,97,108,102,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,104,97,108,102,32,115,116,97,114,115,32,99,97,110,32,98,101,32,115,101,108,101,99,116,101,100,46,10,10],tsxSource:e.RatingHalfDemo,scssSource:i.RatingHalfDemo}),t.jsx(o,{id:"RatingTooltipDemo",renderer:t.jsx(m,{}),title:"Tooltip",description:[10,10,85,115,101,32,116,104,101,32,96,116,111,111,108,116,105,112,96,32,112,114,111,112,32,116,111,32,97,100,100,32,97,32,116,111,111,108,116,105,112,46,10,10],tsxSource:e.RatingTooltipDemo,scssSource:i.RatingTooltipDemo}),t.jsx(o,{id:"RatingCustomDemo",renderer:t.jsx(c,{}),title:"Custom display",description:[10,10,45,32,85,115,101,32,116,104,101,32,96,116,111,116,97,108,96,32,112,114,111,112,32,116,111,32,109,111,100,105,102,121,32,116,104,101,32,116,111,116,97,108,10,45,32,85,115,101,32,116,104,101,32,96,105,99,111,110,96,32,112,114,111,112,32,116,111,32,109,111,100,105,102,121,32,116,104,101,32,105,99,111,110,10,10],tsxSource:e.RatingCustomDemo,scssSource:i.RatingCustomDemo})]}),links:[{title:"Basic",href:"RatingBasicDemo"},{title:"Half star",href:"RatingHalfDemo"},{title:"Tooltip",href:"RatingTooltipDemo"},{title:"Custom display",href:"RatingCustomDemo"}]},"zh-CN":{title:"Rating",subtitle:"评分",description:[10,10,96,82,97,116,105,110,103,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"radiobutton",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:t.jsxs(t.Fragment,{children:[t.jsx(o,{id:"RatingBasicDemo",renderer:t.jsx(n,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:e.RatingBasicDemo,scssSource:i.RatingBasicDemo}),t.jsx(o,{id:"RatingHalfDemo",renderer:t.jsx(l,{}),title:"半星",description:[10,10,96,104,97,108,102,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,229,143,175,233,128,137,230,139,169,229,141,138,230,152,159,227,128,130,10,10],tsxSource:e.RatingHalfDemo,scssSource:i.RatingHalfDemo}),t.jsx(o,{id:"RatingTooltipDemo",renderer:t.jsx(m,{}),title:"提示",description:[10,10,228,189,191,231,148,168,32,96,116,111,111,108,116,105,112,96,32,229,177,158,230,128,167,230,183,187,229,138,160,230,143,144,231,164,186,227,128,130,10,10],tsxSource:e.RatingTooltipDemo,scssSource:i.RatingTooltipDemo}),t.jsx(o,{id:"RatingCustomDemo",renderer:t.jsx(c,{}),title:"自定义显示",description:[10,10,45,32,228,189,191,231,148,168,32,96,116,111,116,97,108,96,32,229,177,158,230,128,167,228,191,174,230,148,185,230,128,187,230,149,176,10,45,32,228,189,191,231,148,168,32,96,105,99,111,110,96,32,229,177,158,230,128,167,228,191,174,230,148,185,229,155,190,230,160,135,10,10],tsxSource:e.RatingCustomDemo,scssSource:i.RatingCustomDemo})]}),links:[{title:"基本",href:"RatingBasicDemo"},{title:"半星",href:"RatingHalfDemo"},{title:"提示",href:"RatingTooltipDemo"},{title:"自定义显示",href:"RatingCustomDemo"}]}};return t.jsx(d,{...g})});export{T as Rating,T as default};
