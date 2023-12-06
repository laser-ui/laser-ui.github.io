import{j as e,r as a,B as i,I as n,S as c}from"./index-03b4b863.js";import{R as S,D as t}from"./Route-a4cabf70.js";import{P as s}from"./Progress-d6905d93.js";import{S as d}from"./add-9031b15e.js";import{S as m}from"./remove-d2af7c7b.js";import{C as l}from"./Compose-6ee81c69.js";import"./getOffsetToRoot-0ccee323.js";import"./MdRoute-5149ee51.js";import"./Anchor-5c9ec845.js";import"./scrollTo-5537c4d7.js";import"./toPx-e806414b.js";import"./cancel-f44277ae.js";function x(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{percent:30}),e.jsx(s,{percent:50,wave:!0}),e.jsx(s,{percent:70,state:"error"}),e.jsx(s,{percent:100}),e.jsx(s,{percent:100,label:"Done"})]})}function p(){return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"circle",percent:30})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"circle",percent:70,state:"error"})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"circle",percent:100})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"circle",percent:100,label:"Done"})})]})}function j(){return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"dashboard",percent:30})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"dashboard",percent:30,gapDegree:45})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"dashboard",percent:70,state:"error"})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"dashboard",percent:100})}),e.jsx("div",{className:"col-auto",children:e.jsx(s,{pattern:"dashboard",percent:100,label:"Done"})})]})}function D(){const[r,o]=a.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(m,{})}),onClick:()=>{o(Math.max(r-10,0))}}),e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(d,{})}),onClick:()=>{o(Math.min(r+10,100))}})]}),e.jsx(c,{}),e.jsx(s,{percent:r,wave:!0}),e.jsx(s,{percent:r,pattern:"circle"}),e.jsx(s,{percent:r,pattern:"dashboard"})]})}function g(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{percent:50,wave:!0,lineCap:"butt"}),e.jsx(s,{percent:50,pattern:"circle",lineCap:"butt"}),e.jsx(s,{percent:50,pattern:"dashboard",lineCap:"butt"})]})}function u(){const[r,o]=a.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(m,{})}),onClick:()=>{o(Math.max(r-10,0))}}),e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(d,{})}),onClick:()=>{o(Math.min(r+10,100))}})]}),e.jsx(c,{}),e.jsx(s,{percent:r,wave:!0,linearGradient:{0:"#108ee9",100:"#87d068"}}),e.jsx(s,{percent:r,pattern:"circle",linearGradient:{0:"#108ee9",100:"#87d068"}}),e.jsx(s,{percent:r,pattern:"dashboard",linearGradient:{0:"#108ee9",100:"#87d068"}})]})}function P(){const[r,o]=a.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(m,{})}),onClick:()=>{o(Math.max(r-10,0))}}),e.jsx(i,{pattern:"secondary",icon:e.jsx(n,{children:e.jsx(d,{})}),onClick:()=>{o(Math.min(r+10,100))}})]}),e.jsx(c,{}),e.jsx(s,{percent:r,wave:!0,lineWidth:6}),e.jsx(s,{percent:r,pattern:"circle",size:200}),e.jsx(s,{percent:r,pattern:"dashboard",size:80})]})}const F=a.memo(()=>{const r={ProgressBasicDemo:[105,109,112,111,114,116,32,123,32,80,114,111,103,114,101,115,115,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,51,48,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,53,48,125,32,119,97,118,101,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,55,48,125,32,115,116,97,116,101,61,34,101,114,114,111,114,34,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,108,97,98,101,108,61,34,68,111,110,101,34,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],ProgressCircularDemo:[105,109,112,111,114,116,32,123,32,80,114,111,103,114,101,115,115,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,112,101,114,99,101,110,116,61,123,51,48,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,112,101,114,99,101,110,116,61,123,55,48,125,32,115,116,97,116,101,61,34,101,114,114,111,114,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,108,97,98,101,108,61,34,68,111,110,101,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],ProgressDashboardDemo:[105,109,112,111,114,116,32,123,32,80,114,111,103,114,101,115,115,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,112,101,114,99,101,110,116,61,123,51,48,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,112,101,114,99,101,110,116,61,123,51,48,125,32,103,97,112,68,101,103,114,101,101,61,123,52,53,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,112,101,114,99,101,110,116,61,123,55,48,125,32,115,116,97,116,101,61,34,101,114,114,111,114,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,112,101,114,99,101,110,116,61,123,49,48,48,125,32,108,97,98,101,108,61,34,68,111,110,101,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],ProgressTransitionDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,80,114,111,103,114,101,115,115,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,65,100,100,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,97,100,100,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,114,101,109,111,118,101,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,112,101,114,99,101,110,116,44,32,115,101,116,80,101,114,99,101,110,116,93,32,61,32,117,115,101,83,116,97,116,101,40,48,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,97,120,40,112,101,114,99,101,110,116,32,45,32,49,48,44,32,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,65,100,100,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,105,110,40,112,101,114,99,101,110,116,32,43,32,49,48,44,32,49,48,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,119,97,118,101,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],ProgressLineCapDemo:[105,109,112,111,114,116,32,123,32,80,114,111,103,114,101,115,115,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,53,48,125,32,119,97,118,101,32,108,105,110,101,67,97,112,61,34,98,117,116,116,34,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,53,48,125,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,108,105,110,101,67,97,112,61,34,98,117,116,116,34,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,53,48,125,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,108,105,110,101,67,97,112,61,34,98,117,116,116,34,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],ProgressLinearGradientDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,80,114,111,103,114,101,115,115,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,65,100,100,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,97,100,100,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,114,101,109,111,118,101,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,112,101,114,99,101,110,116,44,32,115,101,116,80,101,114,99,101,110,116,93,32,61,32,117,115,101,83,116,97,116,101,40,53,48,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,97,120,40,112,101,114,99,101,110,116,32,45,32,49,48,44,32,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,65,100,100,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,105,110,40,112,101,114,99,101,110,116,32,43,32,49,48,44,32,49,48,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,119,97,118,101,32,108,105,110,101,97,114,71,114,97,100,105,101,110,116,61,123,123,32,48,58,32,39,35,49,48,56,101,101,57,39,44,32,49,48,48,58,32,39,35,56,55,100,48,54,56,39,32,125,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,108,105,110,101,97,114,71,114,97,100,105,101,110,116,61,123,123,32,48,58,32,39,35,49,48,56,101,101,57,39,44,32,49,48,48,58,32,39,35,56,55,100,48,54,56,39,32,125,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,108,105,110,101,97,114,71,114,97,100,105,101,110,116,61,123,123,32,48,58,32,39,35,49,48,56,101,101,57,39,44,32,49,48,48,58,32,39,35,56,55,100,48,54,56,39,32,125,125,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],ProgressSizeDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,80,114,111,103,114,101,115,115,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,65,100,100,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,97,100,100,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,114,101,109,111,118,101,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,112,101,114,99,101,110,116,44,32,115,101,116,80,101,114,99,101,110,116,93,32,61,32,117,115,101,83,116,97,116,101,40,53,48,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,82,101,109,111,118,101,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,97,120,40,112,101,114,99,101,110,116,32,45,32,49,48,44,32,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,115,101,99,111,110,100,97,114,121,34,10,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,65,100,100,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,111,110,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,80,101,114,99,101,110,116,40,77,97,116,104,46,109,105,110,40,112,101,114,99,101,110,116,32,43,32,49,48,44,32,49,48,48,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,119,97,118,101,32,108,105,110,101,87,105,100,116,104,61,123,54,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,99,105,114,99,108,101,34,32,115,105,122,101,61,123,50,48,48,125,32,47,62,10,32,32,32,32,32,32,60,80,114,111,103,114,101,115,115,32,112,101,114,99,101,110,116,61,123,112,101,114,99,101,110,116,125,32,112,97,116,116,101,114,110,61,34,100,97,115,104,98,111,97,114,100,34,32,115,105,122,101,61,123,56,48,125,32,47,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},o={ProgressBasicDemo:[46,108,45,112,114,111,103,114,101,115,115,32,43,32,46,108,45,112,114,111,103,114,101,115,115,32,123,10,32,32,109,97,114,103,105,110,45,116,111,112,58,32,48,46,53,114,101,109,59,10,125,10],ProgressTransitionDemo:[46,108,45,112,114,111,103,114,101,115,115,32,123,10,32,32,109,97,114,103,105,110,58,32,48,32,48,46,53,114,101,109,32,48,46,53,114,101,109,32,48,59,10,125,10],ProgressLineCapDemo:[46,108,45,112,114,111,103,114,101,115,115,32,123,10,32,32,109,97,114,103,105,110,58,32,48,32,48,46,53,114,101,109,32,48,46,53,114,101,109,32,48,59,10,125,10],ProgressLinearGradientDemo:[46,108,45,112,114,111,103,114,101,115,115,32,123,10,32,32,109,97,114,103,105,110,58,32,48,32,48,46,53,114,101,109,32,48,46,53,114,101,109,32,48,59,10,125,10],ProgressSizeDemo:[46,108,45,112,114,111,103,114,101,115,115,32,123,10,32,32,109,97,114,103,105,110,58,32,48,32,48,46,53,114,101,109,32,48,46,53,114,101,109,32,48,59,10,125,10]},h={"en-US":{title:"Progress",subtitle:"Progress",description:[10,10,84,104,101,32,96,80,114,111,103,114,101,115,115,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"meter",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"ProgressBasicDemo",renderer:e.jsx(x,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:r.ProgressBasicDemo,scssSource:o.ProgressBasicDemo}),e.jsx(t,{id:"ProgressCircularDemo",renderer:e.jsx(p,{}),title:"Circular progress bar",description:[10,10,73,102,32,116,104,101,32,96,112,97,116,116,101,114,110,96,32,112,114,111,112,32,105,115,32,96,99,105,114,99,108,101,96,44,32,97,32,99,105,114,99,117,108,97,114,32,112,114,111,103,114,101,115,115,32,98,97,114,32,105,115,32,100,105,115,112,108,97,121,101,100,46,10,10],tsxSource:r.ProgressCircularDemo,scssSource:o.ProgressCircularDemo}),e.jsx(t,{id:"ProgressDashboardDemo",renderer:e.jsx(j,{}),title:"Dashboard",description:[10,10,73,102,32,116,104,101,32,96,112,97,116,116,101,114,110,96,32,112,114,111,112,32,105,115,32,96,100,97,115,104,98,111,97,114,100,96,44,32,97,32,100,97,115,104,98,111,97,114,100,32,105,115,32,100,105,115,112,108,97,121,101,100,46,10,10,85,115,101,32,116,104,101,32,96,103,97,112,68,101,103,114,101,101,96,32,112,114,111,112,32,116,111,32,99,111,110,116,114,111,108,32,116,104,101,32,103,97,112,32,100,101,103,114,101,101,46,10,10],tsxSource:r.ProgressDashboardDemo,scssSource:o.ProgressDashboardDemo}),e.jsx(t,{id:"ProgressTransitionDemo",renderer:e.jsx(D,{}),title:"Transition",description:[10,10,87,104,101,110,32,116,104,101,32,96,112,101,114,99,101,110,116,96,32,112,114,111,112,32,99,104,97,110,103,101,115,44,32,116,104,101,32,99,111,109,112,111,110,101,110,116,32,115,104,111,119,115,32,97,32,116,114,97,110,115,105,116,105,111,110,32,97,110,105,109,97,116,105,111,110,46,10,10],tsxSource:r.ProgressTransitionDemo,scssSource:o.ProgressTransitionDemo}),e.jsx(t,{id:"ProgressLineCapDemo",renderer:e.jsx(g,{}),title:"Line cap",description:[10,10,85,115,101,32,116,104,101,32,96,108,105,110,101,67,97,112,96,32,112,114,111,112,32,116,111,32,115,101,116,32,104,111,119,32,101,97,99,104,32,108,105,110,101,32,101,110,100,32,105,115,32,100,114,97,119,110,46,10,10],tsxSource:r.ProgressLineCapDemo,scssSource:o.ProgressLineCapDemo}),e.jsx(t,{id:"ProgressLinearGradientDemo",renderer:e.jsx(u,{}),title:"Gradient color",description:[10,10,85,115,101,32,116,104,101,32,96,108,105,110,101,97,114,71,114,97,100,105,101,110,116,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,103,114,97,100,105,101,110,116,32,99,111,108,111,114,46,10,10],tsxSource:r.ProgressLinearGradientDemo,scssSource:o.ProgressLinearGradientDemo}),e.jsx(t,{id:"ProgressSizeDemo",renderer:e.jsx(P,{}),title:"Size",description:[10,10,84,104,105,115,32,115,104,111,119,115,32,104,111,119,32,116,111,32,114,101,115,105,122,101,32,99,111,109,112,111,110,101,110,116,115,46,10,10],tsxSource:r.ProgressSizeDemo,scssSource:o.ProgressSizeDemo})]}),links:[{title:"Basic",href:"ProgressBasicDemo"},{title:"Circular progress bar",href:"ProgressCircularDemo"},{title:"Dashboard",href:"ProgressDashboardDemo"},{title:"Transition",href:"ProgressTransitionDemo"},{title:"Line cap",href:"ProgressLineCapDemo"},{title:"Gradient color",href:"ProgressLinearGradientDemo"},{title:"Size",href:"ProgressSizeDemo"}]},"zh-CN":{title:"Progress",subtitle:"进度条",description:[10,10,96,80,114,111,103,114,101,115,115,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"meter",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"ProgressBasicDemo",renderer:e.jsx(x,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:r.ProgressBasicDemo,scssSource:o.ProgressBasicDemo}),e.jsx(t,{id:"ProgressCircularDemo",renderer:e.jsx(p,{}),title:"环形进度条",description:[10,10,96,112,97,116,116,101,114,110,96,32,229,177,158,230,128,167,228,184,186,32,96,99,105,114,99,108,101,96,32,230,151,182,239,188,140,229,177,149,231,164,186,231,142,175,229,189,162,232,191,155,229,186,166,230,157,161,227,128,130,10,10],tsxSource:r.ProgressCircularDemo,scssSource:o.ProgressCircularDemo}),e.jsx(t,{id:"ProgressDashboardDemo",renderer:e.jsx(j,{}),title:"仪表盘",description:[10,10,96,112,97,116,116,101,114,110,96,32,229,177,158,230,128,167,228,184,186,32,96,100,97,115,104,98,111,97,114,100,96,32,230,151,182,239,188,140,229,177,149,231,164,186,228,187,170,232,161,168,231,155,152,227,128,130,10,10,228,189,191,231,148,168,32,96,103,97,112,68,101,103,114,101,101,96,32,229,177,158,230,128,167,230,142,167,229,136,182,231,188,186,229,143,163,229,186,166,230,149,176,227,128,130,10,10],tsxSource:r.ProgressDashboardDemo,scssSource:o.ProgressDashboardDemo}),e.jsx(t,{id:"ProgressTransitionDemo",renderer:e.jsx(D,{}),title:"过渡动画",description:[10,10,229,189,147,32,96,112,101,114,99,101,110,116,96,32,229,177,158,230,128,167,229,143,152,229,140,150,230,151,182,239,188,140,231,187,132,228,187,182,229,177,149,231,164,186,232,191,135,230,184,161,229,138,168,231,148,187,227,128,130,10,10],tsxSource:r.ProgressTransitionDemo,scssSource:o.ProgressTransitionDemo}),e.jsx(t,{id:"ProgressLineCapDemo",renderer:e.jsx(g,{}),title:"线帽",description:[10,10,228,189,191,231,148,168,32,96,108,105,110,101,67,97,112,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,166,130,228,189,149,231,187,152,229,136,182,230,175,143,228,184,128,230,157,161,231,186,191,230,174,181,230,156,171,231,171,175,227,128,130,10,10],tsxSource:r.ProgressLineCapDemo,scssSource:o.ProgressLineCapDemo}),e.jsx(t,{id:"ProgressLinearGradientDemo",renderer:e.jsx(u,{}),title:"渐变色",description:[10,10,228,189,191,231,148,168,32,96,108,105,110,101,97,114,71,114,97,100,105,101,110,116,96,32,229,177,158,230,128,167,232,174,190,231,189,174,230,184,144,229,143,152,232,137,178,227,128,130,10,10],tsxSource:r.ProgressLinearGradientDemo,scssSource:o.ProgressLinearGradientDemo}),e.jsx(t,{id:"ProgressSizeDemo",renderer:e.jsx(P,{}),title:"尺寸",description:[10,10,232,191,153,233,135,140,229,177,149,231,164,186,228,186,134,229,166,130,228,189,149,232,176,131,230,149,180,231,187,132,228,187,182,229,176,186,229,175,184,227,128,130,10,10],tsxSource:r.ProgressSizeDemo,scssSource:o.ProgressSizeDemo})]}),links:[{title:"基本",href:"ProgressBasicDemo"},{title:"环形进度条",href:"ProgressCircularDemo"},{title:"仪表盘",href:"ProgressDashboardDemo"},{title:"过渡动画",href:"ProgressTransitionDemo"},{title:"线帽",href:"ProgressLineCapDemo"},{title:"渐变色",href:"ProgressLinearGradientDemo"},{title:"尺寸",href:"ProgressSizeDemo"}]}};return e.jsx(S,{...h})});export{F as Progress,F as default};
