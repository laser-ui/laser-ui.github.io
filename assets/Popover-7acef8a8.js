import{j as e,B as s,r as j,o as h,I as v}from"./index-03b4b863.js";import{a as P,R as u,D as t}from"./Route-a4cabf70.js";import{P as r}from"./Popover-993d430a.js";import"./getOffsetToRoot-0ccee323.js";import"./MdRoute-5149ee51.js";import"./Anchor-5c9ec845.js";import"./scrollTo-5537c4d7.js";import"./toPx-e806414b.js";import"./add-9031b15e.js";function m(){return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]}),children:e.jsx(s,{children:"Hover"})})}),e.jsx("div",{className:"col-auto",children:e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]}),trigger:"click",children:e.jsx(s,{children:"Click"})})})]})}function d(){const o=e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]});return e.jsx("div",{className:"container",children:e.jsxs("div",{children:[e.jsxs("div",{className:"container-top",children:[e.jsx(r,{content:o,placement:"top-left",children:e.jsx(s,{children:"TL"})}),e.jsx(r,{content:o,placement:"top",children:e.jsx(s,{children:"T"})}),e.jsx(r,{content:o,placement:"top-right",children:e.jsx(s,{children:"TR"})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"container-left",children:[e.jsx(r,{content:o,placement:"left-top",children:e.jsx(s,{children:"LT"})}),e.jsx(r,{content:o,placement:"left",children:e.jsx(s,{children:"L"})}),e.jsx(r,{content:o,placement:"left-bottom",children:e.jsx(s,{children:"LB"})})]}),e.jsxs("div",{className:"container-right",children:[e.jsx(r,{content:o,placement:"right-top",children:e.jsx(s,{children:"RT"})}),e.jsx(r,{content:o,placement:"right",children:e.jsx(s,{children:"R"})}),e.jsx(r,{content:o,placement:"right-bottom",children:e.jsx(s,{children:"RB"})})]})]}),e.jsxs("div",{className:"container-bottom",children:[e.jsx(r,{content:o,placement:"bottom-left",children:e.jsx(s,{children:"BL"})}),e.jsx(r,{content:o,placement:"bottom",children:e.jsx(s,{children:"B"})}),e.jsx(r,{content:o,placement:"bottom-right",children:e.jsx(s,{children:"BR"})})]})]})})}function a(){return e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]}),modal:!0,children:e.jsx(s,{children:"Modal"})})}function x(){return e.jsx("div",{className:"auto-place-container",children:e.jsx("div",{className:"overflow",children:e.jsx(r,{visible:!0,content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]}),scrolling:".auto-place-container",children:e.jsx(s,{children:"Button"})})})})}function p(){const o=j.useRef({}),n=h();return e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-auto",children:e.jsx(r,{header:"Title",content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Some contents..."}),e.jsx("div",{children:"Some contents..."})]}),children:e.jsx(s,{children:"Content display"})})}),e.jsx("div",{className:"col-auto",children:e.jsx(r,{content:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(v,{theme:"warning",size:"1.5em",children:e.jsx(P,{})}),e.jsx("div",{style:{marginLeft:10},children:"Are you sure to delete this?"})]}),footer:e.jsx(r.Footer,{onOkClick:()=>new Promise(c=>{var i,l;(l=(i=o.current).clearTid)==null||l.call(i),o.current.clearTid=n.setTimeout(()=>{c(!0)},3e3)})}),modal:!0,children:e.jsx(s,{children:"Delete confirm"})})})]})}const R=j.memo(()=>{const o={PopoverBasicDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,80,111,112,111,118,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,72,111,118,101,114,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,116,114,105,103,103,101,114,61,34,99,108,105,99,107,34,10,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,67,108,105,99,107,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],PopoverPlacementDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,80,111,112,111,118,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,99,111,110,116,101,110,116,32,61,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,110,116,97,105,110,101,114,34,62,10,32,32,32,32,32,32,60,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,110,116,97,105,110,101,114,45,116,111,112,34,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,116,111,112,45,108,101,102,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,84,76,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,116,111,112,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,84,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,116,111,112,45,114,105,103,104,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,84,82,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,110,116,97,105,110,101,114,45,108,101,102,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,108,101,102,116,45,116,111,112,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,76,84,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,108,101,102,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,76,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,108,101,102,116,45,98,111,116,116,111,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,76,66,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,110,116,97,105,110,101,114,45,114,105,103,104,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,114,105,103,104,116,45,116,111,112,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,82,84,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,114,105,103,104,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,82,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,114,105,103,104,116,45,98,111,116,116,111,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,82,66,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,110,116,97,105,110,101,114,45,98,111,116,116,111,109,34,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,98,111,116,116,111,109,45,108,101,102,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,66,76,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,98,111,116,116,111,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,66,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,32,99,111,110,116,101,110,116,61,123,99,111,110,116,101,110,116,125,32,112,108,97,99,101,109,101,110,116,61,34,98,111,116,116,111,109,45,114,105,103,104,116,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,66,82,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],PopoverModalDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,80,111,112,111,118,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,60,62,10,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,47,62,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,109,111,100,97,108,10,32,32,32,32,62,10,32,32,32,32,32,32,60,66,117,116,116,111,110,62,77,111,100,97,108,60,47,66,117,116,116,111,110,62,10,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,41,59,10,125,10],PopoverScrollContainerDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,80,111,112,111,118,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,97,117,116,111,45,112,108,97,99,101,45,99,111,110,116,97,105,110,101,114,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,111,118,101,114,102,108,111,119,34,62,10,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,32,32,32,32,118,105,115,105,98,108,101,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,115,99,114,111,108,108,105,110,103,61,34,46,97,117,116,111,45,112,108,97,99,101,45,99,111,110,116,97,105,110,101,114,34,10,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,66,117,116,116,111,110,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],PopoverCommonUsageDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,73,99,111,110,44,32,80,111,112,111,118,101,114,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,65,115,121,110,99,32,125,32,102,114,111,109,32,39,64,108,97,115,101,114,45,117,105,47,104,111,111,107,115,39,59,10,105,109,112,111,114,116,32,87,97,114,110,105,110,103,65,109,98,101,114,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,119,97,114,110,105,110,103,95,97,109,98,101,114,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,82,101,102,32,125,32,102,114,111,109,32,39,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,100,97,116,97,82,101,102,32,61,32,117,115,101,82,101,102,40,123,125,41,59,10,32,32,99,111,110,115,116,32,97,115,121,110,99,32,61,32,117,115,101,65,115,121,110,99,40,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,32,32,32,32,104,101,97,100,101,114,61,34,84,105,116,108,101,34,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,62,83,111,109,101,32,99,111,110,116,101,110,116,115,46,46,46,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,67,111,110,116,101,110,116,32,100,105,115,112,108,97,121,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,10,32,32,32,32,32,32,32,32,32,32,99,111,110,116,101,110,116,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,32,115,116,121,108,101,61,123,123,32,100,105,115,112,108,97,121,58,32,39,102,108,101,120,39,44,32,97,108,105,103,110,73,116,101,109,115,58,32,39,99,101,110,116,101,114,39,32,125,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,116,104,101,109,101,61,34,119,97,114,110,105,110,103,34,32,115,105,122,101,61,34,49,46,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,87,97,114,110,105,110,103,65,109,98,101,114,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,100,105,118,32,115,116,121,108,101,61,123,123,32,109,97,114,103,105,110,76,101,102,116,58,32,49,48,32,125,125,62,65,114,101,32,121,111,117,32,115,117,114,101,32,116,111,32,100,101,108,101,116,101,32,116,104,105,115,63,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,102,111,111,116,101,114,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,80,111,112,111,118,101,114,46,70,111,111,116,101,114,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,111,110,79,107,67,108,105,99,107,61,123,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,101,119,32,80,114,111,109,105,115,101,40,40,114,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,97,116,97,82,101,102,46,99,117,114,114,101,110,116,46,99,108,101,97,114,84,105,100,63,46,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,97,116,97,82,101,102,46,99,117,114,114,101,110,116,46,99,108,101,97,114,84,105,100,32,61,32,97,115,121,110,99,46,115,101,116,84,105,109,101,111,117,116,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,40,116,114,117,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,44,32,51,48,48,48,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,32,32,32,32,32,32,62,60,47,80,111,112,111,118,101,114,46,70,111,111,116,101,114,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,109,111,100,97,108,10,32,32,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,62,68,101,108,101,116,101,32,99,111,110,102,105,114,109,60,47,66,117,116,116,111,110,62,10,32,32,32,32,32,32,32,32,60,47,80,111,112,111,118,101,114,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10]},n={PopoverPlacementDemo:[46,99,111,110,116,97,105,110,101,114,32,123,10,32,32,100,105,115,112,108,97,121,58,32,102,108,101,120,59,10,32,32,106,117,115,116,105,102,121,45,99,111,110,116,101,110,116,58,32,99,101,110,116,101,114,59,10,32,32,109,105,110,45,119,105,100,116,104,58,32,51,54,48,112,120,59,10,10,32,32,98,117,116,116,111,110,32,123,10,32,32,32,32,119,105,100,116,104,58,32,54,52,112,120,59,10,32,32,125,10,125,10,10,46,99,111,110,116,97,105,110,101,114,45,116,111,112,44,10,46,99,111,110,116,97,105,110,101,114,45,98,111,116,116,111,109,32,123,10,32,32,100,105,115,112,108,97,121,58,32,102,108,101,120,59,10,32,32,106,117,115,116,105,102,121,45,99,111,110,116,101,110,116,58,32,99,101,110,116,101,114,59,10,32,32,119,105,100,116,104,58,32,50,50,48,112,120,59,10,10,32,32,98,117,116,116,111,110,32,43,32,98,117,116,116,111,110,32,123,10,32,32,32,32,109,97,114,103,105,110,45,108,101,102,116,58,32,49,48,112,120,59,10,32,32,125,10,125,10,10,46,99,111,110,116,97,105,110,101,114,45,116,111,112,32,123,10,32,32,109,97,114,103,105,110,58,32,48,32,48,32,56,112,120,32,54,52,112,120,59,10,125,10,10,46,99,111,110,116,97,105,110,101,114,45,98,111,116,116,111,109,32,123,10,32,32,109,97,114,103,105,110,58,32,56,112,120,32,48,32,48,32,54,52,112,120,59,10,125,10,10,46,99,111,110,116,97,105,110,101,114,45,108,101,102,116,44,10,46,99,111,110,116,97,105,110,101,114,45,114,105,103,104,116,32,123,10,32,32,100,105,115,112,108,97,121,58,32,105,110,108,105,110,101,45,102,108,101,120,59,10,32,32,102,108,101,120,45,100,105,114,101,99,116,105,111,110,58,32,99,111,108,117,109,110,59,10,10,32,32,98,117,116,116,111,110,32,43,32,98,117,116,116,111,110,32,123,10,32,32,32,32,109,97,114,103,105,110,45,116,111,112,58,32,49,48,112,120,59,10,32,32,125,10,125,10,10,46,99,111,110,116,97,105,110,101,114,45,114,105,103,104,116,32,123,10,32,32,109,97,114,103,105,110,45,108,101,102,116,58,32,50,50,48,112,120,59,10,125,10],PopoverScrollContainerDemo:[46,97,117,116,111,45,112,108,97,99,101,45,99,111,110,116,97,105,110,101,114,32,123,10,32,32,119,105,100,116,104,58,32,49,48,48,37,59,10,32,32,104,101,105,103,104,116,58,32,50,48,48,112,120,59,10,32,32,111,118,101,114,102,108,111,119,58,32,97,117,116,111,59,10,32,32,98,97,99,107,103,114,111,117,110,100,45,99,111,108,111,114,58,32,118,97,114,40,45,45,108,45,98,97,99,107,103,114,111,117,110,100,45,99,111,108,111,114,45,112,114,105,109,97,114,121,41,59,10,10,32,32,46,111,118,101,114,102,108,111,119,32,123,10,32,32,32,32,112,111,115,105,116,105,111,110,58,32,114,101,108,97,116,105,118,101,59,10,32,32,32,32,119,105,100,116,104,58,32,50,48,48,37,59,10,32,32,32,32,104,101,105,103,104,116,58,32,52,48,48,112,120,59,10,32,32,125,10,10,32,32,98,117,116,116,111,110,32,123,10,32,32,32,32,112,111,115,105,116,105,111,110,58,32,97,98,115,111,108,117,116,101,59,10,32,32,32,32,114,105,103,104,116,58,32,99,97,108,99,40,53,48,37,32,43,32,50,48,112,120,41,59,10,32,32,32,32,98,111,116,116,111,109,58,32,99,97,108,99,40,53,48,37,32,43,32,50,48,112,120,41,59,10,32,32,125,10,125,10]},c={"en-US":{title:"Popover",subtitle:"Popover",description:[10,10,84,104,101,32,96,80,111,112,111,118,101,114,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"PopoverBasicDemo",renderer:e.jsx(m,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:o.PopoverBasicDemo,scssSource:n.PopoverBasicDemo}),e.jsx(t,{id:"PopoverPlacementDemo",renderer:e.jsx(d,{}),title:"Placement",description:[10,10,85,115,101,32,116,104,101,32,96,112,108,97,99,101,109,101,110,116,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,112,111,112,117,112,32,112,111,115,105,116,105,111,110,46,10,10],tsxSource:o.PopoverPlacementDemo,scssSource:n.PopoverPlacementDemo}),e.jsx(t,{id:"PopoverModalDemo",renderer:e.jsx(a,{}),title:"Modal",description:[10,10,73,102,32,116,104,101,32,96,109,111,100,97,108,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,99,111,109,112,111,110,101,110,116,32,98,101,104,97,118,101,115,32,97,115,32,97,32,109,111,100,97,108,32,98,111,120,46,10,10,82,101,102,101,114,32,116,111,32,91,97,114,105,97,45,109,111,100,97,108,93,40,104,116,116,112,115,58,47,47,100,101,118,101,108,111,112,101,114,46,109,111,122,105,108,108,97,46,111,114,103,47,101,110,45,85,83,47,100,111,99,115,47,87,101,98,47,65,99,99,101,115,115,105,98,105,108,105,116,121,47,65,82,73,65,47,65,116,116,114,105,98,117,116,101,115,47,97,114,105,97,45,109,111,100,97,108,41,46,10,10],tsxSource:o.PopoverModalDemo,scssSource:n.PopoverModalDemo}),e.jsx(t,{id:"PopoverScrollContainerDemo",renderer:e.jsx(x,{}),title:"Scrolling container",description:[10,10,87,104,101,110,32,97,32,99,111,109,112,111,110,101,110,116,39,115,32,97,110,99,101,115,116,114,121,32,101,108,101,109,101,110,116,115,32,99,111,110,116,97,105,110,32,115,99,114,111,108,108,105,110,103,44,32,116,104,101,114,101,32,97,114,101,32,117,115,117,97,108,108,121,32,115,101,118,101,114,97,108,32,119,97,121,115,32,116,111,32,104,97,110,100,108,101,32,112,111,115,105,116,105,111,110,32,117,112,100,97,116,101,115,58,10,10,45,32,96,115,99,114,111,108,108,105,110,103,96,32,112,114,111,112,58,32,80,114,101,102,101,114,114,101,100,32,119,104,101,110,32,116,104,101,114,101,32,105,115,32,111,110,108,121,32,111,110,101,32,115,99,114,111,108,108,32,99,111,110,116,97,105,110,101,114,32,111,114,32,115,99,114,111,108,108,105,110,103,32,99,97,110,32,98,101,32,112,114,111,112,101,114,108,121,32,99,97,112,116,117,114,101,100,32,98,121,32,98,117,98,98,108,105,110,103,46,10,45,32,96,114,101,102,96,58,32,76,105,115,116,101,110,32,116,111,32,116,104,101,32,115,99,114,111,108,108,32,101,118,101,110,116,32,111,102,32,116,104,101,32,115,99,114,111,108,108,105,110,103,32,99,111,110,116,97,105,110,101,114,32,97,110,100,32,99,97,108,108,32,116,104,101,32,96,117,112,100,97,116,101,80,111,115,105,116,105,111,110,96,32,109,101,116,104,111,100,32,105,110,32,96,114,101,102,96,46,32,84,104,105,115,32,115,111,108,117,116,105,111,110,32,105,115,32,114,101,99,111,109,109,101,110,100,101,100,32,119,104,101,110,32,116,104,101,114,101,32,97,114,101,32,109,117,108,116,105,112,108,101,32,115,99,114,111,108,108,105,110,103,32,99,111,110,116,97,105,110,101,114,115,32,97,110,100,32,112,101,114,102,111,114,109,97,110,99,101,32,111,112,116,105,109,105,122,97,116,105,111,110,32,105,115,32,105,109,112,111,114,116,97,110,116,46,10,45,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,58,32,84,104,101,32,111,117,116,101,114,109,111,115,116,32,115,99,114,111,108,108,105,110,103,32,99,111,110,116,97,105,110,101,114,32,119,114,97,112,115,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,32,97,110,100,32,115,101,116,115,32,96,108,105,115,116,101,110,71,108,111,98,97,108,83,99,114,111,108,108,105,110,103,96,32,116,111,32,96,116,114,117,101,96,46,32,80,108,101,97,115,101,32,117,115,101,32,116,104,105,115,32,115,111,108,117,116,105,111,110,32,104,97,112,112,105,108,121,32,119,104,101,110,32,116,104,101,32,115,99,114,111,108,108,105,110,103,32,104,105,101,114,97,114,99,104,121,32,105,115,32,99,111,109,112,108,105,99,97,116,101,100,32,97,110,100,32,116,104,101,32,119,97,115,116,101,102,117,108,32,99,97,108,99,117,108,97,116,105,111,110,115,32,97,114,101,32,119,105,116,104,105,110,32,121,111,117,114,32,97,99,99,101,112,116,97,98,108,101,32,114,97,110,103,101,46,10,10],tsxSource:o.PopoverScrollContainerDemo,scssSource:n.PopoverScrollContainerDemo}),e.jsx(t,{id:"PopoverCommonUsageDemo",renderer:e.jsx(p,{}),title:"Common usage",description:[10,10,72,101,114,101,32,97,114,101,32,115,111,109,101,32,99,111,109,109,111,110,32,117,115,97,103,101,115,46,10,10],tsxSource:o.PopoverCommonUsageDemo,scssSource:n.PopoverCommonUsageDemo})]}),links:[{title:"Basic",href:"PopoverBasicDemo"},{title:"Placement",href:"PopoverPlacementDemo"},{title:"Modal",href:"PopoverModalDemo"},{title:"Scrolling container",href:"PopoverScrollContainerDemo"},{title:"Common usage",href:"PopoverCommonUsageDemo"}]},"zh-CN":{title:"Popover",subtitle:"弹出框",description:[10,10,96,80,111,112,111,118,101,114,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"PopoverBasicDemo",renderer:e.jsx(m,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.PopoverBasicDemo,scssSource:n.PopoverBasicDemo}),e.jsx(t,{id:"PopoverPlacementDemo",renderer:e.jsx(d,{}),title:"位置",description:[10,10,228,189,191,231,148,168,32,96,112,108,97,99,101,109,101,110,116,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,188,185,229,135,186,228,189,141,231,189,174,227,128,130,10,10],tsxSource:o.PopoverPlacementDemo,scssSource:n.PopoverPlacementDemo}),e.jsx(t,{id:"PopoverModalDemo",renderer:e.jsx(a,{}),title:"模态",description:[10,10,96,109,111,100,97,108,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,231,187,132,228,187,182,232,161,168,231,142,176,228,184,186,230,168,161,230,128,129,230,161,134,227,128,130,10,10,229,143,130,232,128,131,32,91,97,114,105,97,45,109,111,100,97,108,93,40,104,116,116,112,115,58,47,47,100,101,118,101,108,111,112,101,114,46,109,111,122,105,108,108,97,46,111,114,103,47,101,110,45,85,83,47,100,111,99,115,47,87,101,98,47,65,99,99,101,115,115,105,98,105,108,105,116,121,47,65,82,73,65,47,65,116,116,114,105,98,117,116,101,115,47,97,114,105,97,45,109,111,100,97,108,41,227,128,130,10,10],tsxSource:o.PopoverModalDemo,scssSource:n.PopoverModalDemo}),e.jsx(t,{id:"PopoverScrollContainerDemo",renderer:e.jsx(x,{}),title:"滚动容器",description:[10,10,229,189,147,231,187,132,228,187,182,231,154,132,231,165,150,229,133,136,229,133,131,231,180,160,228,184,173,229,140,133,229,144,171,230,187,154,229,138,168,239,188,140,233,128,154,229,184,184,230,156,137,228,184,139,233,157,162,229,135,160,231,167,141,230,150,185,229,188,143,229,164,132,231,144,134,228,189,141,231,189,174,230,155,180,230,150,176,239,188,154,10,10,45,32,96,115,99,114,111,108,108,105,110,103,96,32,229,177,158,230,128,167,239,188,154,228,187,133,229,173,152,229,156,168,228,184,128,228,184,170,230,187,154,229,138,168,229,174,185,229,153,168,230,136,150,232,131,189,233,128,154,232,191,135,229,134,146,230,179,161,230,173,163,231,161,174,230,141,149,232,142,183,230,187,154,229,138,168,230,151,182,233,166,150,233,128,137,227,128,130,10,45,32,96,114,101,102,96,239,188,154,231,155,145,229,144,172,230,187,154,229,138,168,229,174,185,229,153,168,231,154,132,230,187,154,229,138,168,228,186,139,228,187,182,239,188,140,232,176,131,231,148,168,32,96,114,101,102,96,32,228,184,173,231,154,132,32,96,117,112,100,97,116,101,80,111,115,105,116,105,111,110,96,32,230,150,185,230,179,149,227,128,130,229,173,152,229,156,168,229,164,154,228,184,170,230,187,154,229,138,168,229,174,185,229,153,168,228,184,148,231,157,128,233,135,141,230,128,167,232,131,189,228,188,152,229,140,150,230,151,182,229,187,186,232,174,174,230,173,164,230,150,185,230,161,136,227,128,130,10,45,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,239,188,154,230,156,128,229,164,150,229,177,130,230,187,154,229,138,168,229,174,185,229,153,168,229,140,133,232,163,185,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,32,229,185,182,232,174,190,231,189,174,32,96,108,105,115,116,101,110,71,108,111,98,97,108,83,99,114,111,108,108,105,110,103,96,32,228,184,186,32,96,116,114,117,101,96,227,128,130,229,189,147,230,187,154,229,138,168,229,177,130,231,186,167,229,164,141,230,157,130,229,185,182,228,184,148,230,181,170,232,180,185,231,154,132,232,174,161,231,174,151,229,156,168,230,130,168,231,154,132,230,142,165,229,143,151,232,140,131,229,155,180,229,134,133,239,188,140,232,175,183,230,132,137,229,191,171,231,154,132,228,189,191,231,148,168,230,173,164,230,150,185,230,161,136,227,128,130,10,10],tsxSource:o.PopoverScrollContainerDemo,scssSource:n.PopoverScrollContainerDemo}),e.jsx(t,{id:"PopoverCommonUsageDemo",renderer:e.jsx(p,{}),title:"常见用例",description:[10,10,232,191,153,233,135,140,230,152,175,228,184,128,228,186,155,229,184,184,232,167,129,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.PopoverCommonUsageDemo,scssSource:n.PopoverCommonUsageDemo})]}),links:[{title:"基本",href:"PopoverBasicDemo"},{title:"位置",href:"PopoverPlacementDemo"},{title:"模态",href:"PopoverModalDemo"},{title:"滚动容器",href:"PopoverScrollContainerDemo"},{title:"常见用例",href:"PopoverCommonUsageDemo"}]}};return e.jsx(u,{...c})});export{R as Popover,R as default};
