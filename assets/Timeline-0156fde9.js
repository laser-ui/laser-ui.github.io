import{u as y,b as B,U as S,j as e,m as h,r as c,I as g,B as O,S as V}from"./index-6cafe902.js";import{R as w,D as o}from"./Route-4ba99769.js";import{S as E}from"./cancel-0985b1b0.js";import{S as $}from"./check_circle-e16b6c16.js";import{S as b}from"./Switch-b287ebb7.js";import"./getOffsetToRoot-1998ccd1.js";import"./MdRoute-a2153e76.js";import"./Anchor-cd5c878d.js";import"./scrollTo-b0970df1.js";import"./toPx-da516c9d.js";import"./add-f20d3911.js";const F={timeline:"^timeline","timeline--vertical":"^timeline--vertical",timeline__content:"^timeline__content","timeline__content--gap":"^timeline__content--gap","timeline__text-container":"^timeline__text-container",timeline__text:"^timeline__text","timeline__text--left":"^timeline__text--left","timeline__track-container":"^timeline__track-container",timeline__track:"^timeline__track","timeline__track.is-wait":"is-wait","timeline__track.is-active":"is-active","timeline__track.is-completed":"is-completed","timeline__track.is-warning":"is-warning","timeline__track.is-error":"is-error",timeline__dot:"^timeline__dot",timeline__separator:"^timeline__separator","timeline__separator--hidden":"^timeline__separator--hidden"};function j(n){const{styleOverrides:s,styleProvider:m,list:r,vertical:x=!1,lineSize:a=36,...d}=y("Timeline",n),t=B(F,{timeline:m==null?void 0:m.timeline},s),_=(()=>{const l=[!1,!1];for(const i of r)S(i.content[0])&&(l[0]=!0),S(i.content[1])&&(l[1]=!0);return l})();return e.jsx("div",{...d,...h(t("timeline",{"timeline--vertical":x}),{className:d.className,style:d.style}),children:x?e.jsx(e.Fragment,{children:r.map((l,i)=>{const{state:T="wait",content:u,color:p,dot:D}=l;return e.jsxs(c.Fragment,{children:[e.jsxs("div",{...t("timeline__content"),children:[_[0]&&e.jsx("div",{...t("timeline__text","timeline__text--left"),children:u[0]}),e.jsxs("div",{...h(t("timeline__track",`timeline__track.is-${T}`),{style:{"--color":p,width:a}}),children:[e.jsx("div",{...t("timeline__separator",{"timeline__separator--hidden":i===0})}),S(D)?D:e.jsx("div",{...t("timeline__dot")}),e.jsx("div",{...t("timeline__separator",{"timeline__separator--hidden":i===r.length-1})})]}),_[1]&&e.jsx("div",{...t("timeline__text"),children:u[1]})]}),i!==r.length-1&&e.jsxs("div",{...t("timeline__content","timeline__content--gap"),children:[_[0]&&e.jsx("div",{...t("timeline__text","timeline__text--left")}),e.jsx("div",{...h(t("timeline__track"),{style:{width:a}}),children:e.jsx("div",{...t("timeline__separator")})}),_[1]&&e.jsx("div",{...t("timeline__text")})]})]},i)})}):e.jsxs(e.Fragment,{children:[_[0]&&e.jsx("div",{...t("timeline__text-container"),children:r.map((l,i)=>c.createElement("div",{...t("timeline__text"),key:i},l.content[0]))}),e.jsx("div",{...h(t("timeline__track-container"),{style:{height:a}}),children:r.map((l,i)=>{const{state:T="wait",color:u,dot:p}=l;return c.createElement("div",{...h(t("timeline__track",`timeline__track.is-${T}`),{style:{"--color":u}}),key:i},e.jsx("div",{...t("timeline__separator",{"timeline__separator--hidden":i===0})}),S(p)?p:e.jsx("div",{...t("timeline__dot")}),e.jsx("div",{...t("timeline__separator",{"timeline__separator--hidden":i===r.length-1})}))})}),_[1]&&e.jsx("div",{...t("timeline__text-container"),children:r.map((l,i)=>c.createElement("div",{...t("timeline__text"),key:i},l.content[1]))})]})})}function v(){return e.jsx(j,{list:[{content:["2022-01-01","This is a long long long long long text"]},{content:["2022-01-02","This is a text"]},{content:["2022-01-03","This is a text"]},{content:["2022-01-04","This is a text"]}]})}function f(){return e.jsx(j,{list:[{content:["2022-01-01","This is a long long long long long text"],state:"completed",dot:e.jsx(g,{children:e.jsx($,{})})},{content:["This is a text","2022-01-02"],state:"error",dot:e.jsx(g,{size:20,children:e.jsx(E,{})})},{content:["2022-01-03","This is a text"],state:"active"},{content:["This is a text","2022-01-04"],color:"rgb(123 74 203)"}]})}function k(){return e.jsx(j,{list:[{content:["2022-01-01","This is a long long long long long text"]},{content:["2022-01-02","This is a text"]},{content:["2022-01-03","This is a text"]},{content:["2022-01-04","This is a text"]}],vertical:!0})}function C(){const[n,s]=c.useState(!0),[m,r]=c.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"mb-3",model:n,onModelChange:s,children:"vertical"}),e.jsx("br",{}),e.jsx(O,{onClick:()=>r(x=>x===1?0:1),children:"Change side"}),e.jsx(V,{}),e.jsx(j,{list:Array.from({length:4}).map((x,a)=>{const d=[];return d[m]=`2022-01-0${a+1}: ${a===0?"This is a long long long long long text":"This is a text"}`,{content:d}}),vertical:n})]})}const H=c.memo(()=>{const n={TimelineBasicDemo:[105,109,112,111,114,116,32,123,32,84,105,109,101,108,105,110,101,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,84,105,109,101,108,105,110,101,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,49,39,44,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,50,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,51,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,52,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],TimelineStatusDemo:[105,109,112,111,114,116,32,123,32,73,99,111,110,44,32,84,105,109,101,108,105,110,101,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,67,97,110,99,101,108,70,105,108,108,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,102,105,108,108,101,100,47,99,97,110,99,101,108,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,67,104,101,99,107,67,105,114,99,108,101,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,99,104,101,99,107,95,99,105,114,99,108,101,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,84,105,109,101,108,105,110,101,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,49,39,44,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,32,32,115,116,97,116,101,58,32,39,99,111,109,112,108,101,116,101,100,39,44,10,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,67,104,101,99,107,67,105,114,99,108,101,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,44,32,39,50,48,50,50,45,48,49,45,48,50,39,93,44,10,32,32,32,32,32,32,32,32,32,32,115,116,97,116,101,58,32,39,101,114,114,111,114,39,44,10,32,32,32,32,32,32,32,32,32,32,100,111,116,58,32,40,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,123,50,48,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,67,97,110,99,101,108,70,105,108,108,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,51,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,32,32,115,116,97,116,101,58,32,39,97,99,116,105,118,101,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,44,32,39,50,48,50,50,45,48,49,45,48,52,39,93,44,10,32,32,32,32,32,32,32,32,32,32,99,111,108,111,114,58,32,39,114,103,98,40,49,50,51,32,55,52,32,50,48,51,41,39,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],TimelineVerticalDemo:[105,109,112,111,114,116,32,123,32,84,105,109,101,108,105,110,101,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,84,105,109,101,108,105,110,101,10,32,32,32,32,32,32,108,105,115,116,61,123,91,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,49,39,44,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,50,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,51,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,58,32,91,39,50,48,50,50,45,48,49,45,48,52,39,44,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,93,44,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,93,125,10,32,32,32,32,32,32,118,101,114,116,105,99,97,108,10,32,32,32,32,47,62,10,32,32,41,59,10,125,10],TimelineOneSideDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,83,101,112,97,114,97,116,111,114,44,32,83,119,105,116,99,104,44,32,84,105,109,101,108,105,110,101,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,118,101,114,116,105,99,97,108,44,32,115,101,116,86,101,114,116,105,99,97,108,93,32,61,32,117,115,101,83,116,97,116,101,40,116,114,117,101,41,59,10,32,32,99,111,110,115,116,32,91,115,105,100,101,44,32,115,101,116,83,105,100,101,93,32,61,32,117,115,101,83,116,97,116,101,40,49,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,83,119,105,116,99,104,32,99,108,97,115,115,78,97,109,101,61,34,109,98,45,51,34,32,109,111,100,101,108,61,123,118,101,114,116,105,99,97,108,125,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,115,101,116,86,101,114,116,105,99,97,108,125,62,10,32,32,32,32,32,32,32,32,118,101,114,116,105,99,97,108,10,32,32,32,32,32,32,60,47,83,119,105,116,99,104,62,10,32,32,32,32,32,32,60,98,114,32,47,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,115,101,116,83,105,100,101,40,40,112,114,101,118,83,105,100,101,41,32,61,62,32,40,112,114,101,118,83,105,100,101,32,61,61,61,32,49,32,63,32,48,32,58,32,49,41,41,125,62,67,104,97,110,103,101,32,115,105,100,101,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,84,105,109,101,108,105,110,101,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,65,114,114,97,121,46,102,114,111,109,40,123,32,108,101,110,103,116,104,58,32,52,32,125,41,46,109,97,112,40,40,95,44,32,105,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,99,111,110,116,101,110,116,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,91,115,105,100,101,93,32,61,32,96,50,48,50,50,45,48,49,45,48,36,123,105,32,43,32,49,125,58,32,36,123,105,32,61,61,61,32,48,32,63,32,39,84,104,105,115,32,105,115,32,97,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,108,111,110,103,32,116,101,120,116,39,32,58,32,39,84,104,105,115,32,105,115,32,97,32,116,101,120,116,39,125,96,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,123,32,99,111,110,116,101,110,116,32,125,59,10,32,32,32,32,32,32,32,32,125,41,125,10,32,32,32,32,32,32,32,32,118,101,114,116,105,99,97,108,61,123,118,101,114,116,105,99,97,108,125,10,32,32,32,32,32,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},s={},m={"en-US":{title:"Timeline",subtitle:"Timeline",description:[10,10,84,104,101,32,96,84,105,109,101,108,105,110,101,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(o,{id:"TimelineBasicDemo",renderer:e.jsx(v,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:n.TimelineBasicDemo,scssSource:s.TimelineBasicDemo}),e.jsx(o,{id:"TimelineStatusDemo",renderer:e.jsx(f,{}),title:"Custom dots",description:[10,10,84,104,105,115,32,115,104,111,119,115,32,104,111,119,32,116,111,32,99,117,115,116,111,109,105,122,101,32,100,111,116,115,32,111,102,32,116,104,101,32,99,111,109,112,111,110,101,110,116,46,10,10],tsxSource:n.TimelineStatusDemo,scssSource:s.TimelineStatusDemo}),e.jsx(o,{id:"TimelineVerticalDemo",renderer:e.jsx(k,{}),title:"Vertical",description:[10,10,73,102,32,116,104,101,32,96,118,101,114,116,105,99,97,108,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,108,97,121,111,117,116,32,105,115,32,118,101,114,116,105,99,97,108,46,10,10],tsxSource:n.TimelineVerticalDemo,scssSource:s.TimelineVerticalDemo}),e.jsx(o,{id:"TimelineOneSideDemo",renderer:e.jsx(C,{}),title:"One-sided display",description:[10,10,84,104,105,115,32,115,104,111,119,115,32,119,104,97,116,32,104,97,112,112,101,110,115,32,119,104,101,110,32,116,104,101,32,96,108,105,115,116,96,32,112,114,111,112,32,111,110,108,121,32,104,97,115,32,111,110,101,45,115,105,100,101,100,32,100,97,116,97,46,10,10],tsxSource:n.TimelineOneSideDemo,scssSource:s.TimelineOneSideDemo})]}),links:[{title:"Basic",href:"TimelineBasicDemo"},{title:"Custom dots",href:"TimelineStatusDemo"},{title:"Vertical",href:"TimelineVerticalDemo"},{title:"One-sided display",href:"TimelineOneSideDemo"}]},"zh-CN":{title:"Timeline",subtitle:"时间轴",description:[10,10,96,84,105,109,101,108,105,110,101,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(o,{id:"TimelineBasicDemo",renderer:e.jsx(v,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:n.TimelineBasicDemo,scssSource:s.TimelineBasicDemo}),e.jsx(o,{id:"TimelineStatusDemo",renderer:e.jsx(f,{}),title:"自定义轴点",description:[10,10,232,191,153,233,135,140,229,177,149,231,164,186,228,186,134,229,166,130,228,189,149,232,135,170,229,174,154,228,185,137,231,187,132,228,187,182,232,189,180,231,130,185,227,128,130,10,10],tsxSource:n.TimelineStatusDemo,scssSource:s.TimelineStatusDemo}),e.jsx(o,{id:"TimelineVerticalDemo",renderer:e.jsx(k,{}),title:"垂直布局",description:[10,10,96,118,101,114,116,105,99,97,108,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,229,158,130,231,155,180,229,184,131,229,177,128,227,128,130,10,10],tsxSource:n.TimelineVerticalDemo,scssSource:s.TimelineVerticalDemo}),e.jsx(o,{id:"TimelineOneSideDemo",renderer:e.jsx(C,{}),title:"单侧显示",description:[10,10,232,191,153,233,135,140,229,177,149,231,164,186,228,186,134,229,189,147,32,96,108,105,115,116,96,32,229,177,158,230,128,167,228,187,133,229,173,152,229,156,168,229,141,149,228,190,167,230,149,176,230,141,174,230,151,182,231,154,132,230,131,133,229,134,181,227,128,130,10,10],tsxSource:n.TimelineOneSideDemo,scssSource:s.TimelineOneSideDemo})]}),links:[{title:"基本",href:"TimelineBasicDemo"},{title:"自定义轴点",href:"TimelineStatusDemo"},{title:"垂直布局",href:"TimelineVerticalDemo"},{title:"单侧显示",href:"TimelineOneSideDemo"}]}};return e.jsx(w,{...m})});export{H as Timeline,H as default};