import{r as t,j as r}from"./index-6a77a542.js";import{R as m}from"./Route-e62e68ec.js";import"./MdRoute-6f220a6f.js";import"./Anchor-fded59d9.js";import"./getOffsetToRoot-d19d7fa1.js";import"./scrollTo-99135f77.js";import"./toPx-9e932987.js";const u=t.memo(()=>{const o={"en-US":{html:[35,32,71,108,111,98,97,108,32,99,111,110,102,105,103,117,114,97,116,105,111,110,10,10,84,104,114,111,117,103,104,32,111,117,114,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,32,99,111,109,112,111,110,101,110,116,44,32,121,111,117,32,99,97,110,32,99,111,110,102,105,103,117,114,101,32,111,117,114,32,99,111,109,112,111,110,101,110,116,32,108,105,98,114,97,114,121,32,118,101,114,121,32,99,111,110,118,101,110,105,101,110,116,108,121,46,32,65,108,108,32,99,111,110,102,105,103,117,114,97,116,105,111,110,32,105,116,101,109,115,32,97,114,101,32,108,105,115,116,101,100,32,98,101,108,111,119,58,10,10,96,96,96,116,115,120,10,105,110,116,101,114,102,97,99,101,32,76,67,111,110,116,101,120,116,68,97,116,97,32,123,10,32,32,110,97,109,101,115,112,97,99,101,58,32,115,116,114,105,110,103,59,32,47,47,32,83,97,115,115,32,118,97,114,105,97,98,108,101,115,32,110,101,101,100,32,116,111,32,98,101,32,109,111,100,105,102,105,101,100,32,115,121,110,99,104,114,111,110,111,117,115,108,121,33,10,32,32,99,111,109,112,111,110,101,110,116,68,105,115,97,98,108,101,100,58,32,98,111,111,108,101,97,110,59,10,32,32,99,111,109,112,111,110,101,110,116,83,105,122,101,58,32,83,105,122,101,59,10,32,32,99,111,109,112,111,110,101,110,116,68,101,102,97,117,108,116,80,114,111,112,115,58,32,123,32,91,75,32,105,110,32,107,101,121,111,102,32,67,111,109,112,111,110,101,110,116,80,114,111,112,115,93,63,58,32,80,97,114,116,105,97,108,60,67,111,109,112,111,110,101,110,116,80,114,111,112,115,91,75,93,62,32,125,59,10,32,32,108,97,121,111,117,116,80,97,103,101,83,99,114,111,108,108,69,108,58,32,82,101,102,69,120,116,114,97,32,124,32,110,117,108,108,59,10,32,32,108,97,121,111,117,116,67,111,110,116,101,110,116,82,101,115,105,122,101,69,108,58,32,82,101,102,69,120,116,114,97,32,124,32,110,117,108,108,59,10,32,32,108,105,115,116,101,110,71,108,111,98,97,108,83,99,114,111,108,108,105,110,103,58,32,98,111,111,108,101,97,110,59,10,125,10,96,96,96,10]},"zh-CN":{html:[35,32,229,133,168,229,177,128,233,133,141,231,189,174,10,10,233,128,154,232,191,135,230,136,145,228,187,172,231,154,132,32,96,67,111,110,102,105,103,80,114,111,118,105,100,101,114,96,32,231,187,132,228,187,182,239,188,140,230,130,168,229,143,175,228,187,165,233,157,158,229,184,184,230,150,185,228,190,191,231,154,132,233,133,141,231,189,174,230,136,145,228,187,172,231,154,132,231,187,132,228,187,182,229,186,147,239,188,140,228,184,139,233,157,162,229,136,151,229,135,186,228,186,134,230,137,128,230,156,137,233,133,141,231,189,174,233,161,185,239,188,154,10,10,96,96,96,116,115,120,10,105,110,116,101,114,102,97,99,101,32,76,67,111,110,116,101,120,116,68,97,116,97,32,123,10,32,32,110,97,109,101,115,112,97,99,101,58,32,115,116,114,105,110,103,59,32,47,47,32,233,156,128,232,166,129,229,144,140,230,173,165,228,191,174,230,148,185,32,115,97,115,115,32,229,143,152,233,135,143,239,188,129,10,32,32,99,111,109,112,111,110,101,110,116,68,105,115,97,98,108,101,100,58,32,98,111,111,108,101,97,110,59,10,32,32,99,111,109,112,111,110,101,110,116,83,105,122,101,58,32,83,105,122,101,59,10,32,32,99,111,109,112,111,110,101,110,116,68,101,102,97,117,108,116,80,114,111,112,115,58,32,123,32,91,75,32,105,110,32,107,101,121,111,102,32,67,111,109,112,111,110,101,110,116,80,114,111,112,115,93,63,58,32,80,97,114,116,105,97,108,60,67,111,109,112,111,110,101,110,116,80,114,111,112,115,91,75,93,62,32,125,59,10,32,32,108,97,121,111,117,116,80,97,103,101,83,99,114,111,108,108,69,108,58,32,82,101,102,69,120,116,114,97,32,124,32,110,117,108,108,59,10,32,32,108,97,121,111,117,116,67,111,110,116,101,110,116,82,101,115,105,122,101,69,108,58,32,82,101,102,69,120,116,114,97,32,124,32,110,117,108,108,59,10,32,32,108,105,115,116,101,110,71,108,111,98,97,108,83,99,114,111,108,108,105,110,103,58,32,98,111,111,108,101,97,110,59,10,125,10,96,96,96,10]}};return r.jsx(m,{...o})});export{u as GlobalConfiguration,u as default};