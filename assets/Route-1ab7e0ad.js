import{r as c,u as Pe,a as Me,b as Re,v as Ae,c as Ne,G as ze,s as He,k as he,g as Oe,j as n,m as Ue,I as k,K as Be,p as We,l as W,Y as Ve,Z as V,_ as _e,$ as Fe,a0 as qe,w as Y,a1 as ye,a2 as we,a3 as be}from"./index-496fe775.js";import{u as Ke}from"./getOffsetToRoot-e6aa225d.js";import{d as F,M as Ge}from"./MdRoute-e13f3c12.js";import{S as Je}from"./add-b974f26d.js";function Ye(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function Ze(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const Xe=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Qe=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),et=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),tt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function st(e,t){const{styleOverrides:s,styleProvider:o,list:i,active:r,defaultActive:m,pattern:p,placement:l="top",center:d=!1,size:u="medium",addible:C=!1,onActiveChange:T,onAddClick:I,onClose:L,...D}=Pe("Tabs",e),x=Me(),_=Re(tt,{tabs:o==null?void 0:o.tabs},s),{t:R}=Ae(),H=c.useId(),A=a=>`${x}-tabs-tab-${a}-${H}`,q=a=>`${x}-tabs-panel-${a}-${H}`,ee=c.useRef(null),O=c.useRef(null),N=c.useRef(null),y=c.useRef(null),K=c.useRef(null),[de,ke]=c.useState(!1),[Ie,De]=c.useState([]),[Te,Le]=c.useState(!1),pe=u==="small"?16:u==="large"?20:18,U=l==="top"||l==="bottom",[G,te]=Ne(m??(()=>{for(const a of i)if(!a.disabled)return a.id;return null}),r,a=>{T&&T(a,ze(i,h=>h.id===a))}),J=()=>{const a=O.current;if(a){const h=U?a.scrollWidth>a.clientWidth:a.scrollHeight>a.clientHeight;if(ke(h),Le(Ye(a)[U?"x":"y"]),h){const g=a.getBoundingClientRect(),S=[];i.forEach($=>{var P,M;const B=document.getElementById(A($.id));if(B){const w=B.getBoundingClientRect();U?(w.right+(((P=y.current)==null?void 0:P.offsetWidth)??0)>g.right||w.left<g.left)&&S.push($):(w.bottom+(((M=y.current)==null?void 0:M.offsetHeight)??0)>g.bottom||w.top<g.top)&&S.push($)}}),De(S)}}};He(()=>{J()},[]),he(O,J),he(N,J);const se=Oe(()=>{if(N.current&&K.current){const a=N.current.getBoundingClientRect();for(const h of i)if(h.id===G){const g=document.getElementById(A(h.id));if(g){const S=g.getBoundingClientRect();U?K.current.style.cssText=`left:${S.left-a.left}px;width:${S.width}px;opacity:1;`:K.current.style.cssText=`top:${S.top-a.top}px;opacity:1;`}}}});return c.useEffect(()=>{se()}),c.useImperativeHandle(t,()=>({updateIndicator:se}),[se]),n.jsxs("div",{...D,...Ue(_("tabs",`tabs--${l}`,`tabs--${u}`,{[`tabs--${p}`]:p,"tabs--center":d}),{className:D.className,style:D.style}),ref:ee,children:[n.jsx("div",{..._("tabs__tablist-wrapper"),ref:O,onScroll:()=>{J()},children:n.jsxs("div",{..._("tabs__tablist"),ref:N,role:"tablist","aria-orientation":U?"horizontal":"vertical",children:[i.map((a,h)=>{const{id:g,title:S,disabled:$,closable:B}=a,P=g===G,M=(f,b=h)=>{for(let E=f?b+1:b-1,ue=0;ue<i.length;f?E++:E--,ue++){const ne=W.nth(i,E%i.length);if(ne&&!ne.disabled)return ne}},w=f=>{if(f){te(f.id);const b=document.getElementById(A(f.id));b&&b.focus()}},me=()=>{if(P){let f=!1;for(let b=h+1;b<i.length;b++){const E=W.nth(i,b);if(E&&!E.disabled){f=!0,w(E);break}}if(!f)for(let b=h-1;b>=0;b--){const E=W.nth(i,b);if(E&&!E.disabled){w(E);break}}}L==null||L(g,a)};return c.createElement("div",{..._("tabs__tab",{"tabs__tab.is-active":P,"tabs__tab.is-disabled":$,"tabs__tab--first":h===0,"tabs__tab--last":h===i.length-1}),key:g,id:A(g),tabIndex:P&&!$?0:-1,role:"tab","aria-controls":q(g),"aria-selected":P,"aria-disabled":$,onClick:()=>{te(g)},onKeyDown:f=>{switch(f.code){case"Delete":f.preventDefault(),B&&me();break;case"ArrowLeft":f.preventDefault(),(l==="top"||l==="bottom")&&w(M(!1));break;case"ArrowRight":f.preventDefault(),(l==="top"||l==="bottom")&&w(M(!0));break;case"ArrowUp":f.preventDefault(),(l==="left"||l==="right")&&w(M(!1));break;case"ArrowDown":f.preventDefault(),(l==="left"||l==="right")&&w(M(!0));break;case"Home":f.preventDefault();for(const b of i)if(!b.disabled){w(b);break}break;case"End":f.preventDefault();for(let b=i.length-1;b>=0;b--)if(!i[b].disabled){w(i[b]);break}break}}},S,!$&&B&&n.jsx("div",{..._("tabs__close"),role:"button","aria-label":R("Close"),onClick:f=>{f.stopPropagation(),me()},children:n.jsx(k,{children:n.jsx(Be,{})})}))}),(de||C)&&n.jsxs("div",{..._("tabs__button-container"),ref:y,children:[de&&n.jsx(We,{list:Ie.map(a=>{const{id:h,title:g,dropdownRender:S,disabled:$}=a;return{id:h,title:W.isUndefined(S)?g:S,type:"item",disabled:$,style:h===G?{color:`var(--${x}-color-primary)`}:void 0}}),placement:l==="left"?"bottom-left":"bottom-right",onClick:a=>{te(a)},children:n.jsx("div",{..._("tabs__button","tabs__button--more",{"tabs__button.is-end":Te}),"aria-label":R("More"),children:n.jsx(k,{size:pe,children:n.jsx(Qe,{})})})}),C&&n.jsx("div",{..._("tabs__button","tabs__button--add"),role:"button","aria-label":R("Add"),onClick:()=>{I==null||I()},children:n.jsx(k,{size:pe,children:n.jsx(Je,{})})})]}),n.jsx("div",{..._(p==="wrap"?"tabs__wrap-indicator":p==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:K})]})}),i.map(a=>{const{id:h,panel:g}=a;return c.createElement("div",{..._("tabs__tabpanel"),key:h,id:q(h),tabIndex:0,hidden:h!==G,role:"tabpanel","aria-labelledby":A(h)},g)})]})}const nt=c.forwardRef(st),ot=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),v={"index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laser UI</title>
    <link rel="stylesheet" href="/src/styles/vendor/bootstrap.scss" />
    <link rel="stylesheet" href="/src/styles/vendor/laser-ui.scss" />
    <link rel="stylesheet" href="/src/styles/index.scss" />
    <link rel="stylesheet" href="/src/index.scss" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,"src/main.tsx":`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,"src/App.tsx":`import type { LContextIn } from '@laser-ui/components/context';

import { ConfigProvider, Root } from '@laser-ui/components';
import { useMemo } from 'react';

import Demo from './Demo';

export function App() {
  const lContext = useMemo<LContextIn>(
    () => ({
      layoutPageScrollEl: '#app-main',
      layoutContentResizeEl: '#app-content',
    }),
    [],
  );

  return (
    <ConfigProvider context={lContext}>
      <Root>
        <main id="app-main">
          <section id="app-content">
            <Demo />
          </section>
        </main>
      </Root>
    </ConfigProvider>
  );
}

export default App;
`,"src/styles/vendor/bootstrap.scss":`/* stylelint-disable no-invalid-position-at-import-rule */
@import 'bootstrap/scss/mixins/banner';
@include bsBanner('');

// scss-docs-start import-stack
// Configuration
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/variables-dark';
@import 'bootstrap/scss/maps';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/utilities';

// Layout & components
@import 'bootstrap/scss/grid';

// Helpers
@import 'bootstrap/scss/helpers';

// Utilities
@import 'bootstrap/scss/utilities/api';
// scss-docs-end import-stack
`,"src/styles/vendor/laser-ui.scss":`@use '@laser-ui/themes/index';
`,"src/styles/index.scss":`body {
  margin: 0;
}

#app-main {
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow: auto;
}

#app-content {
  height: 200vh;
}
`,"tsconfig.json":`{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": ["dom", "es2015"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "jsx": "react-jsx"
  }
}
`,"vite.config.ts":`import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), svgr()],
});
`},it=`{
    "infiniteLoopProtection": true,
    "hardReloadOnChange": true,
    "view": "browser",
    "container": {
      "port": 3000,
      "node": "16"
    }
  }
`,rt="node_modules/lerna/schemas/lerna-schema.json",at=["libs/components","libs/hooks","libs/utils","libs/themes"],ct="0.2.2",lt={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},Z={$schema:rt,packages:at,version:ct,command:lt},dt="@laser-ui/source",pt="0.0.0",mt="MIT",ut={"build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},ht={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@material-design-icons/svg":"^0.14.12","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"18.2.24","@types/react-dom":"18.2.9","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",bootstrap:"^5.3.1",codesandbox:"^2.2.3",cypress:"^13.0.0",dayjs:"^1.11.9",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1","highlight.js":"^11.8.0",husky:"^8.0.0",i18next:"^23.5.1",immer:"^10.0.2",jsdom:"~22.1.0",jss:"^10.10.0","jss-preset-default":"^10.10.0",lerna:"^7.2.0",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6",nx:"17.0.2","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3","rcl-store":"^2.1.0",react:"18.2.0","react-dom":"18.2.0","react-i18next":"^13.2.2","react-router-dom":"^6.15.0",rfs:"^10.0.0",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",tslib:"^2.6.2",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^3.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1","@nx/eslint":"17.0.2"},bt={node:"16.x || 18.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"8.x"},ft={includedScripts:[]},j={name:dt,version:pt,private:!0,license:mt,scripts:ut,devDependencies:ht,engines:bt,nx:ft};function je(e){return`{
  "name": "${e}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@laser-ui/components": "${Z.version}",
    "@laser-ui/hooks": "${Z.version}",
    "@laser-ui/themes": "${Z.version}",
    "@laser-ui/utils": "${Z.version}",
    "bootstrap": "${j.devDependencies.bootstrap}",
    "dayjs": "${j.devDependencies.dayjs}",
    "immer": "${j.devDependencies.immer}",
    "react": "${j.devDependencies.react}",
    "react-dom": "${j.devDependencies["react-dom"]}",
    "tslib": "${j.devDependencies.tslib}"
  },
  "devDependencies": {
    "@types/react": "${j.devDependencies["@types/react"]}",
    "@types/react-dom": "${j.devDependencies["@types/react-dom"]}",
    "@vitejs/plugin-react": "${j.devDependencies["@vitejs/plugin-react"]}",
    "sass": "${j.devDependencies.sass}",
    "typescript": "${j.devDependencies.typescript}",
    "vite": "${j.devDependencies.vite}",
    "vite-plugin-svgr": "${j.devDependencies["vite-plugin-svgr"]}"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`}function gt(e,t,s){const o={"index.html":{content:v["index.html"]},"src/App.tsx":{content:v["src/App.tsx"]},"src/Demo.tsx":{content:t},"src/main.tsx":{content:v["src/main.tsx"]},"src/styles/index.scss":{content:v["src/styles/index.scss"]},"src/styles/vendor/bootstrap.scss":{content:v["src/styles/vendor/bootstrap.scss"]},"src/styles/vendor/laser-ui.scss":{content:v["src/styles/vendor/laser-ui.scss"]},"package.json":{content:je(e)},"tsconfig.json":{content:v["tsconfig.json"]},"vite.config.ts":{content:v["vite.config.ts"]},"sandbox.config.json":{content:it}};s&&(o["src/styles/index.scss"]={content:`${v["src/styles/index.scss"]}
${s}`});const i=Ve({files:o}),r=document.createElement("form");r.method="POST",r.action="https://codesandbox.io/api/v1/sandboxes/define",r.target="_blank";const m=document.createElement("input");m.name="parameters",m.value=i;const p=document.createElement("input");p.name="query",p.value="module=/src/Demo.tsx",r.appendChild(m),r.appendChild(p),document.body.append(r),r.submit(),document.body.removeChild(r)}const vt=500,xt=20,_t=300,yt="https://stackblitz.com",fe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],wt=["project","search","ports","settings"],jt=["light","dark"],St=["editor","preview"],ge={clickToLoad:e=>z("ctl",e),devToolsHeight:e=>ve("devtoolsheight",e),forceEmbedLayout:e=>z("embed",e),hideDevTools:e=>z("hidedevtools",e),hideExplorer:e=>z("hideExplorer",e),hideNavigation:e=>z("hideNavigation",e),openFile:e=>xe("file",e),showSidebar:e=>Et("showSidebar",e),sidebarView:e=>oe("sidebarView",e,wt),startScript:e=>xe("startScript",e),terminalHeight:e=>ve("terminalHeight",e),theme:e=>oe("theme",e,jt),view:e=>oe("view",e,St),zenMode:e=>z("zenMode",e)};function Se(e={}){const t=Object.entries(e).map(([s,o])=>o!=null&&ge.hasOwnProperty(s)?ge[s](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function z(e,t){return t===!0?`${e}=1`:""}function Et(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ve(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function oe(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function xe(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function Ee(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ie(e,t){return`${Ce(t)}${e}${Se(t)}`}function re(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${Ce(s)}${e}${Se(s)}`}function Ce(e={}){return(typeof e.origin=="string"?e.origin:yt).replace(/\/$/,"")}function ae(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Ct(t,s),e.replaceWith(t)}function ce(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function le(e){return e&&e.newWindow===!1?"_self":"_blank"}function Ct(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${_t}`,o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}class $t{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((o,i)=>{const r=Ee();this.pending[r]={resolve:o,reject:i},this.port.postMessage({type:t,payload:{...s,__reqid:r}})})}messageListener(t){var p;if(typeof((p=t.data.payload)==null?void 0:p.__reqid)!="string")return;const{type:s,payload:o}=t.data,{__reqid:i,__success:r,__error:m}=o;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(o)):this.pending[i].reject(m?`${s}: ${m}`:s),delete this.pending[i])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class kt{constructor(t,s){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>(o==null?void 0:o.url)??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new $t(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=o=>o!==null&&typeof o=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const X=[];class It{constructor(t){this.id=Ee(),this.element=t,this.pending=new Promise((s,o)=>{const i=({data:d,ports:u})=>{(d==null?void 0:d.action)==="SDK_INIT_SUCCESS"&&d.id===this.id&&(this.vm=new kt(u[0],d.payload),s(this.vm),m())},r=()=>{var d;(d=this.element.contentWindow)==null||d.postMessage({action:"SDK_INIT",id:this.id},"*")};function m(){window.clearInterval(l),window.removeEventListener("message",i)}window.addEventListener("message",i),r();let p=0;const l=window.setInterval(()=>{if(this.vm){m();return}if(p>=xt){m(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),X.forEach((d,u)=>{d.id===this.id&&X.splice(u,1)});return}p++,r()},vt)}),X.push(this)}}const Dt=e=>{const t=e instanceof Element?"element":"id";return X.find(s=>s[t]===e)??null};function Tt(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Lt(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function $e({template:e,title:t,description:s,dependencies:o,files:i,settings:r}){if(!fe.includes(e)){const d=fe.map(u=>`'${u}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${d}`)}const m=[],p=(d,u,C="")=>{m.push(Tt(d,typeof u=="string"?u:C))};p("project[title]",t),typeof s=="string"&&s.length>0&&p("project[description]",s),p("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):p("project[dependencies]",JSON.stringify(o))),r&&p("project[settings]",JSON.stringify(r)),Object.entries(i).forEach(([d,u])=>{p(`project[files][${Lt(d)}]`,u)});const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...m),l}function Pt(e,t){const s=$e(e);return s.action=re("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function Mt(e,t){const s=$e(e);s.action=ie("/run",t),s.target=le(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function Q(e){return e!=null&&e.contentWindow?(Dt(e)??new It(e)).pending:Promise.reject("Provided element is not an iframe.")}function Rt(e,t){Mt(e,t)}function At(e,t){const s=ie(`/edit/${e}`,t),o=le(t);window.open(s,o)}function Nt(e,t){const s=ie(`/github/${e}`,t),o=le(t);window.open(s,o)}function zt(e,t,s){var m;const o=ce(e),i=Pt(t,s),r=document.createElement("iframe");return ae(o,r,s),(m=r.contentDocument)==null||m.write(i),Q(r)}function Ht(e,t,s){const o=ce(e),i=document.createElement("iframe");return i.src=re(`/edit/${t}`,s),ae(o,i,s),Q(i)}function Ot(e,t,s){const o=ce(e),i=document.createElement("iframe");return i.src=re(`/github/${t}`,s),ae(o,i,s),Q(i)}const Ut={connect:Q,embedGithubProject:Ot,embedProject:zt,embedProjectId:Ht,openGithubProject:Nt,openProject:Rt,openProjectId:At};function Bt(e,t,s){const o={"index.html":v["index.html"],"src/App.tsx":v["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":v["src/main.tsx"],"src/styles/index.scss":v["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":v["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/laser-ui.scss":v["src/styles/vendor/laser-ui.scss"],"package.json":je(e),"tsconfig.json":v["tsconfig.json"],"vite.config.ts":v["vite.config.ts"]};s&&(o["src/styles/index.scss"]=`${v["src/styles/index.scss"]}
${s}`),Ut.openProject({title:e,description:"Demo of Laser UI",template:"node",files:o},{openFile:"Demo.tsx"})}function Yt(e){const{id:t,renderer:s,title:o,description:i,tsxSource:r,scssSource:m}=e,p=V(F(i)),l=F(r),d=m?F(m):void 0,{t:u}=_e(),C=c.useRef(null),T=V(String.raw`
${"```tsx"}
${l}
${"```"}
`),I=d?V(String.raw`
${"```scss"}
${d}
${"```"}
`):void 0,[L,D]=c.useState("tsx"),[x,_]=c.useState(!1),[R,H]=c.useState(!1),q=Fe().hash===`#${t}`,ee=()=>{_(y=>!y)},O=()=>{Ze(L==="tsx"?l:d),H(!0)},N=y=>{y||H(!1)};return Ke(()=>{window.location.hash===`#${t}`&&C.current&&C.current.scrollIntoView()}),n.jsxs("section",{ref:C,id:t,className:qe("app-demo-box",{"is-active":q}),children:[n.jsx("div",{className:"app-demo-box__renderer",children:W.isArray(s)?n.jsxs("div",{className:"app-demo-box__window",children:[n.jsxs("div",{className:"app-demo-box__window-header",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),n.jsxs("div",{className:"app-demo-box__title",children:[n.jsx("div",{className:"app-demo-box__title-divider",style:{width:20}}),n.jsx("div",{className:"app-demo-box__title-text",children:o.replace("#","")}),n.jsx("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),n.jsx("div",{className:"app-demo-box__description",dangerouslySetInnerHTML:{__html:p}}),n.jsxs("div",{className:"app-demo-box__toolbar",children:[n.jsx(Y,{title:u("Open in CodeSandbox"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:()=>{gt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,l,d)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),n.jsx(Y,{title:u("Open in Stackblitz"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:()=>{Bt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,l,d)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),n.jsx(Y,{title:u(R?"Copied!":"Copy code"),afterVisibleChange:N,children:n.jsx("div",{className:"app-demo-box__button",onClick:O,children:R?n.jsx(k,{size:18,theme:"success",children:n.jsx(et,{})}):n.jsx(k,{size:18,children:n.jsx(ot,{})})})}),n.jsx(Y,{title:u(x?"Hide code":"Show code"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:ee,children:n.jsx("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:x?n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),x&&n.jsxs("div",{className:"app-demo-box__code",children:[!I&&n.jsx("div",{dangerouslySetInnerHTML:{__html:T}}),I&&n.jsx(nt,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(y=>({id:y,title:y,panel:n.jsx("div",{dangerouslySetInnerHTML:{__html:y==="tsx"?T:I}})})),active:L,size:"small",center:!0,onActiveChange:y=>{D(y)}})]})]})}const Wt="/assets/compose-d10d9fb4.png",Vt="/assets/virtual-scroll-fe1c26ec.png";function Ft(e){const{title:t,subtitle:s,description:o,aria:i,compose:r,virtualScroll:m,api:p,demos:l,links:d}=e,u=V(F(o)),C=V(F(p)),[T,I]=(()=>{if(i){let x=i;const _=i.endsWith("!");return _&&(x=x.slice(0,-1)),x=x.startsWith("http")?x:`https://www.w3.org/WAI/ARIA/apg/patterns/${x}/`,[x,_]}return[]})(),{t:L}=_e(),D=ye(...we.language);return c.useEffect(()=>{document.title=t+(D.value!=="en-US"?` ${s}`:"")+" - Laser UI"},[D.value,s,t]),n.jsxs(Ge,{links:d,children:[n.jsxs("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,D.value!=="en-US"&&n.jsx("span",{className:"app-component-route__subtitle",children:s})]}),n.jsxs("ul",{className:"app-component-route__tag-list",children:[T&&n.jsx("li",{children:n.jsxs("a",{className:"app-component-route__tag-link",href:T,target:"_blank",rel:"noreferrer",children:[n.jsx(k,{size:24,children:n.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{children:[n.jsx("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),n.jsx("g",{children:n.jsx("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),n.jsx("span",{children:"WAI-ARIA"}),I&&n.jsx(k,{theme:"warning",children:n.jsx(Xe,{})})]})}),r&&n.jsx("li",{children:n.jsxs(be,{className:"app-component-route__tag-link",to:"/components/Compose",children:[n.jsx("img",{src:Wt,alt:"Compose",width:20,height:20}),n.jsx("span",{children:"Compose"})]})}),m&&n.jsx("li",{children:n.jsxs(be,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[n.jsx("img",{src:Vt,alt:"VirtualScroll",width:16,height:16}),n.jsx("span",{children:"VirtualScroll"})]})})]}),n.jsx("section",{dangerouslySetInnerHTML:{__html:u}}),n.jsx("h2",{id:"component-route-examples",className:"app-h app-h--2",children:L("Examples")}),n.jsx("section",{"data-demo":t,children:l}),n.jsx("section",{dangerouslySetInnerHTML:{__html:C}})]})}function Zt(e){const t=ye(...we.language);return c.createElement(Ft,e[t.value])}export{Yt as D,Zt as R,Qe as S,nt as T,Xe as a,et as b,Ye as c};
