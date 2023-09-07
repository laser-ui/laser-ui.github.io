import{r as i,j as l}from"./index-23b78b6e.js";import{R as d,D as o}from"./Route-97ee11e8.js";import{V as c}from"./VirtualScroll-3a5a9032.js";import"./MdRoute-fc2f6c88.js";import"./Anchor-92a176b3.js";import"./getOffsetToRoot-d8a53261.js";import"./scrollTo-2eb7a187.js";import"./toPx-73270023.js";import"./add-ad1e4e21.js";function a(){const t=i.useMemo(()=>({list:Array.from({length:1e5}).map((e,r)=>`Item ${r}`),itemKey:e=>e,itemSize:32}),[]);return l.jsx(c,{...t,listSize:192,listPadding:0,itemRender:(e,r,s)=>i.createElement("li",{...s,key:e,style:{height:32}},e),placeholder:"li",children:(e,r)=>l.jsx("ul",{style:{height:192,overflow:"auto"},onScroll:r,children:e})})}function n(){const t=i.useMemo(()=>({list:[{label:"Group 1",children:Array.from({length:20}).map((e,r)=>({label:`Item1 ${r}`}))},{label:"Group 2",children:[]},{label:"Group 3",children:Array.from({length:1e5}).map((e,r)=>({label:`Item3 ${r}`}))}],itemKey:e=>e,itemSize:32,itemEmptySize:32,itemNested:e=>e.children}),[]);return l.jsx(c,{...t,listSize:192,listPadding:0,itemRender:(e,r,s,S,u)=>e.children?l.jsxs("ul",{role:"group",children:[l.jsx("li",{style:{position:"relative",left:-32,height:32},role:"presentation",children:e.label},e.label),u]},e.label):i.createElement("li",{...s,key:e.label,style:{height:32}},e.label),itemEmptyRender:()=>l.jsx("li",{style:{height:32},children:"No Data"}),itemInAriaSetsize:e=>!e.children,placeholder:"li",children:(e,r)=>l.jsx("ul",{style:{height:192,overflow:"auto"},onScroll:r,children:e})})}function m(){const t=i.useMemo(()=>({list:Array.from({length:1e5}).map((e,r)=>`Item ${r}`),itemKey:e=>e,itemSize:100}),[]);return l.jsx(c,{...t,listSize:400,listPadding:0,itemRender:(e,r,s)=>i.createElement("li",{...s,key:e,style:{display:"inline-block",width:100}},e),placeholder:"li",horizontal:!0,children:(e,r)=>l.jsx("ul",{style:{width:400,padding:0,whiteSpace:"nowrap",overflow:"auto"},onScroll:r,children:e})})}const g=i.memo(()=>{const t={VirtualScrollBasicDemo:[105,109,112,111,114,116,32,116,121,112,101,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,47,118,105,114,116,117,97,108,45,115,99,114,111,108,108,47,116,121,112,101,115,39,59,10,10,105,109,112,111,114,116,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,77,101,109,111,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,118,115,80,114,111,112,115,32,61,32,117,115,101,77,101,109,111,60,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,62,40,10,32,32,32,32,40,41,32,61,62,32,40,123,10,32,32,32,32,32,32,108,105,115,116,58,32,65,114,114,97,121,46,102,114,111,109,40,123,32,108,101,110,103,116,104,58,32,49,48,48,48,48,48,32,125,41,46,109,97,112,40,40,95,44,32,105,110,100,101,120,41,32,61,62,32,96,73,116,101,109,32,36,123,105,110,100,101,120,125,96,41,44,10,32,32,32,32,32,32,105,116,101,109,75,101,121,58,32,40,105,116,101,109,41,32,61,62,32,105,116,101,109,44,10,32,32,32,32,32,32,105,116,101,109,83,105,122,101,58,32,51,50,44,10,32,32,32,32,125,41,44,10,32,32,32,32,91,93,44,10,32,32,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,86,105,114,116,117,97,108,83,99,114,111,108,108,10,32,32,32,32,32,32,123,46,46,46,118,115,80,114,111,112,115,125,10,32,32,32,32,32,32,108,105,115,116,83,105,122,101,61,123,49,57,50,125,10,32,32,32,32,32,32,108,105,115,116,80,97,100,100,105,110,103,61,123,48,125,10,32,32,32,32,32,32,105,116,101,109,82,101,110,100,101,114,61,123,40,105,116,101,109,44,32,105,110,100,101,120,44,32,112,114,111,112,115,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,108,105,32,123,46,46,46,112,114,111,112,115,125,32,107,101,121,61,123,105,116,101,109,125,32,115,116,121,108,101,61,123,123,32,104,101,105,103,104,116,58,32,51,50,32,125,125,62,10,32,32,32,32,32,32,32,32,32,32,123,105,116,101,109,125,10,32,32,32,32,32,32,32,32,60,47,108,105,62,10,32,32,32,32,32,32,41,125,10,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,34,108,105,34,10,32,32,32,32,62,10,32,32,32,32,32,32,123,40,118,115,76,105,115,116,44,32,111,110,83,99,114,111,108,108,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,117,108,32,115,116,121,108,101,61,123,123,32,104,101,105,103,104,116,58,32,49,57,50,44,32,111,118,101,114,102,108,111,119,58,32,39,97,117,116,111,39,32,125,125,32,111,110,83,99,114,111,108,108,61,123,111,110,83,99,114,111,108,108,125,62,10,32,32,32,32,32,32,32,32,32,32,123,118,115,76,105,115,116,125,10,32,32,32,32,32,32,32,32,60,47,117,108,62,10,32,32,32,32,32,32,41,125,10,32,32,32,32,60,47,86,105,114,116,117,97,108,83,99,114,111,108,108,62,10,32,32,41,59,10,125,10],VirtualScrollNestedDemo:[105,109,112,111,114,116,32,116,121,112,101,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,47,118,105,114,116,117,97,108,45,115,99,114,111,108,108,47,116,121,112,101,115,39,59,10,10,105,109,112,111,114,116,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,77,101,109,111,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,118,115,80,114,111,112,115,32,61,32,117,115,101,77,101,109,111,60,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,62,40,10,32,32,32,32,40,41,32,61,62,32,40,123,10,32,32,32,32,32,32,108,105,115,116,58,32,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,39,71,114,111,117,112,32,49,39,44,10,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,65,114,114,97,121,46,102,114,111,109,40,123,32,108,101,110,103,116,104,58,32,50,48,32,125,41,46,109,97,112,40,40,95,44,32,105,110,100,101,120,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,96,73,116,101,109,49,32,36,123,105,110,100,101,120,125,96,44,10,32,32,32,32,32,32,32,32,32,32,125,41,41,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,39,71,114,111,117,112,32,50,39,44,10,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,91,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,39,71,114,111,117,112,32,51,39,44,10,32,32,32,32,32,32,32,32,32,32,99,104,105,108,100,114,101,110,58,32,65,114,114,97,121,46,102,114,111,109,40,123,32,108,101,110,103,116,104,58,32,49,48,48,48,48,48,32,125,41,46,109,97,112,40,40,95,44,32,105,110,100,101,120,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,96,73,116,101,109,51,32,36,123,105,110,100,101,120,125,96,44,10,32,32,32,32,32,32,32,32,32,32,125,41,41,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,44,10,32,32,32,32,32,32,105,116,101,109,75,101,121,58,32,40,105,116,101,109,41,32,61,62,32,105,116,101,109,44,10,32,32,32,32,32,32,105,116,101,109,83,105,122,101,58,32,51,50,44,10,32,32,32,32,32,32,105,116,101,109,69,109,112,116,121,83,105,122,101,58,32,51,50,44,10,32,32,32,32,32,32,105,116,101,109,78,101,115,116,101,100,58,32,40,105,116,101,109,41,32,61,62,32,105,116,101,109,46,99,104,105,108,100,114,101,110,44,10,32,32,32,32,125,41,44,10,32,32,32,32,91,93,44,10,32,32,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,86,105,114,116,117,97,108,83,99,114,111,108,108,10,32,32,32,32,32,32,123,46,46,46,118,115,80,114,111,112,115,125,10,32,32,32,32,32,32,108,105,115,116,83,105,122,101,61,123,49,57,50,125,10,32,32,32,32,32,32,108,105,115,116,80,97,100,100,105,110,103,61,123,48,125,10,32,32,32,32,32,32,105,116,101,109,82,101,110,100,101,114,61,123,40,105,116,101,109,44,32,105,110,100,101,120,44,32,112,114,111,112,115,44,32,97,110,99,101,115,116,114,121,44,32,99,104,105,108,100,114,101,110,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,105,116,101,109,46,99,104,105,108,100,114,101,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,60,117,108,32,107,101,121,61,123,105,116,101,109,46,108,97,98,101,108,125,32,114,111,108,101,61,34,103,114,111,117,112,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,108,105,32,107,101,121,61,123,105,116,101,109,46,108,97,98,101,108,125,32,115,116,121,108,101,61,123,123,32,112,111,115,105,116,105,111,110,58,32,39,114,101,108,97,116,105,118,101,39,44,32,108,101,102,116,58,32,45,51,50,44,32,104,101,105,103,104,116,58,32,51,50,32,125,125,32,114,111,108,101,61,34,112,114,101,115,101,110,116,97,116,105,111,110,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,123,105,116,101,109,46,108,97,98,101,108,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,108,105,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,123,99,104,105,108,100,114,101,110,125,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,117,108,62,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,125,10,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,32,32,32,32,32,32,60,108,105,32,123,46,46,46,112,114,111,112,115,125,32,107,101,121,61,123,105,116,101,109,46,108,97,98,101,108,125,32,115,116,121,108,101,61,123,123,32,104,101,105,103,104,116,58,32,51,50,32,125,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,123,105,116,101,109,46,108,97,98,101,108,125,10,32,32,32,32,32,32,32,32,32,32,60,47,108,105,62,10,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,105,116,101,109,69,109,112,116,121,82,101,110,100,101,114,61,123,40,41,32,61,62,32,60,108,105,32,115,116,121,108,101,61,123,123,32,104,101,105,103,104,116,58,32,51,50,32,125,125,62,78,111,32,68,97,116,97,60,47,108,105,62,125,10,32,32,32,32,32,32,105,116,101,109,73,110,65,114,105,97,83,101,116,115,105,122,101,61,123,40,105,116,101,109,41,32,61,62,32,33,105,116,101,109,46,99,104,105,108,100,114,101,110,125,10,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,34,108,105,34,10,32,32,32,32,62,10,32,32,32,32,32,32,123,40,118,115,76,105,115,116,44,32,111,110,83,99,114,111,108,108,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,117,108,32,115,116,121,108,101,61,123,123,32,104,101,105,103,104,116,58,32,49,57,50,44,32,111,118,101,114,102,108,111,119,58,32,39,97,117,116,111,39,32,125,125,32,111,110,83,99,114,111,108,108,61,123,111,110,83,99,114,111,108,108,125,62,10,32,32,32,32,32,32,32,32,32,32,123,118,115,76,105,115,116,125,10,32,32,32,32,32,32,32,32,60,47,117,108,62,10,32,32,32,32,32,32,41,125,10,32,32,32,32,60,47,86,105,114,116,117,97,108,83,99,114,111,108,108,62,10,32,32,41,59,10,125,10],VirtualScrollHorizontalDemo:[105,109,112,111,114,116,32,116,121,112,101,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,47,118,105,114,116,117,97,108,45,115,99,114,111,108,108,47,116,121,112,101,115,39,59,10,10,105,109,112,111,114,116,32,123,32,86,105,114,116,117,97,108,83,99,114,111,108,108,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,77,101,109,111,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,118,115,80,114,111,112,115,32,61,32,117,115,101,77,101,109,111,60,86,105,114,116,117,97,108,83,99,114,111,108,108,79,112,116,105,109,105,122,97,116,105,111,110,62,40,10,32,32,32,32,40,41,32,61,62,32,40,123,10,32,32,32,32,32,32,108,105,115,116,58,32,65,114,114,97,121,46,102,114,111,109,40,123,32,108,101,110,103,116,104,58,32,49,48,48,48,48,48,32,125,41,46,109,97,112,40,40,95,44,32,105,110,100,101,120,41,32,61,62,32,96,73,116,101,109,32,36,123,105,110,100,101,120,125,96,41,44,10,32,32,32,32,32,32,105,116,101,109,75,101,121,58,32,40,105,116,101,109,41,32,61,62,32,105,116,101,109,44,10,32,32,32,32,32,32,105,116,101,109,83,105,122,101,58,32,49,48,48,44,10,32,32,32,32,125,41,44,10,32,32,32,32,91,93,44,10,32,32,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,86,105,114,116,117,97,108,83,99,114,111,108,108,10,32,32,32,32,32,32,123,46,46,46,118,115,80,114,111,112,115,125,10,32,32,32,32,32,32,108,105,115,116,83,105,122,101,61,123,52,48,48,125,10,32,32,32,32,32,32,108,105,115,116,80,97,100,100,105,110,103,61,123,48,125,10,32,32,32,32,32,32,105,116,101,109,82,101,110,100,101,114,61,123,40,105,116,101,109,44,32,105,110,100,101,120,44,32,112,114,111,112,115,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,108,105,32,123,46,46,46,112,114,111,112,115,125,32,107,101,121,61,123,105,116,101,109,125,32,115,116,121,108,101,61,123,123,32,100,105,115,112,108,97,121,58,32,39,105,110,108,105,110,101,45,98,108,111,99,107,39,44,32,119,105,100,116,104,58,32,49,48,48,32,125,125,62,10,32,32,32,32,32,32,32,32,32,32,123,105,116,101,109,125,10,32,32,32,32,32,32,32,32,60,47,108,105,62,10,32,32,32,32,32,32,41,125,10,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,34,108,105,34,10,32,32,32,32,32,32,104,111,114,105,122,111,110,116,97,108,10,32,32,32,32,62,10,32,32,32,32,32,32,123,40,118,115,76,105,115,116,44,32,111,110,83,99,114,111,108,108,41,32,61,62,32,40,10,32,32,32,32,32,32,32,32,60,117,108,32,115,116,121,108,101,61,123,123,32,119,105,100,116,104,58,32,52,48,48,44,32,112,97,100,100,105,110,103,58,32,48,44,32,119,104,105,116,101,83,112,97,99,101,58,32,39,110,111,119,114,97,112,39,44,32,111,118,101,114,102,108,111,119,58,32,39,97,117,116,111,39,32,125,125,32,111,110,83,99,114,111,108,108,61,123,111,110,83,99,114,111,108,108,125,62,10,32,32,32,32,32,32,32,32,32,32,123,118,115,76,105,115,116,125,10,32,32,32,32,32,32,32,32,60,47,117,108,62,10,32,32,32,32,32,32,41,125,10,32,32,32,32,60,47,86,105,114,116,117,97,108,83,99,114,111,108,108,62,10,32,32,41,59,10,125,10]},e={},r={"en-US":{title:"VirtualScroll",subtitle:"VirtualScroll",description:[10,10,84,104,101,32,96,86,105,114,116,117,97,108,83,99,114,111,108,108,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:l.jsxs(l.Fragment,{children:[l.jsx(o,{id:"VirtualScrollBasicDemo",renderer:l.jsx(a,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:t.VirtualScrollBasicDemo,scssSource:e.VirtualScrollBasicDemo}),l.jsx(o,{id:"VirtualScrollNestedDemo",renderer:l.jsx(n,{}),title:"Nested list",description:[10,10,84,104,101,32,110,101,115,116,101,100,32,108,105,115,116,32,105,115,32,115,117,112,112,111,114,116,101,100,46,10,10],tsxSource:t.VirtualScrollNestedDemo,scssSource:e.VirtualScrollNestedDemo}),l.jsx(o,{id:"VirtualScrollHorizontalDemo",renderer:l.jsx(m,{}),title:"Horizontal scrolling",description:[10,10,84,104,101,32,104,111,114,105,122,111,110,116,97,108,32,115,99,114,111,108,108,105,110,103,32,105,115,32,115,117,112,112,111,114,116,101,100,46,10,10],tsxSource:t.VirtualScrollHorizontalDemo,scssSource:e.VirtualScrollHorizontalDemo})]}),links:[{title:"Basic",href:"VirtualScrollBasicDemo"},{title:"Nested list",href:"VirtualScrollNestedDemo"},{title:"Horizontal scrolling",href:"VirtualScrollHorizontalDemo"}]},"zh-CN":{title:"VirtualScroll",subtitle:"虚拟滚动",description:[10,10,96,86,105,114,116,117,97,108,83,99,114,111,108,108,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:l.jsxs(l.Fragment,{children:[l.jsx(o,{id:"VirtualScrollBasicDemo",renderer:l.jsx(a,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:t.VirtualScrollBasicDemo,scssSource:e.VirtualScrollBasicDemo}),l.jsx(o,{id:"VirtualScrollNestedDemo",renderer:l.jsx(n,{}),title:"嵌套列表",description:[10,10,230,148,175,230,140,129,229,181,140,229,165,151,229,136,151,232,161,168,227,128,130,10,10],tsxSource:t.VirtualScrollNestedDemo,scssSource:e.VirtualScrollNestedDemo}),l.jsx(o,{id:"VirtualScrollHorizontalDemo",renderer:l.jsx(m,{}),title:"水平滚动",description:[10,10,230,148,175,230,140,129,230,176,180,229,185,179,230,187,154,229,138,168,227,128,130,10,10],tsxSource:t.VirtualScrollHorizontalDemo,scssSource:e.VirtualScrollHorizontalDemo})]}),links:[{title:"基本",href:"VirtualScrollBasicDemo"},{title:"嵌套列表",href:"VirtualScrollNestedDemo"},{title:"水平滚动",href:"VirtualScrollHorizontalDemo"}]}};return l.jsx(d,{...r})});export{g as VirtualScroll,g as default};
