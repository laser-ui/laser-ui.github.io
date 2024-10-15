import{r as c,u as ze,a as He,b as Oe,v as Ue,l as z,c as Be,G as We,q as Fe,i as ve,g as Ve,j as n,m as qe,I,K as Ke,o as Ge,Y as Je,Z as W,_ as Se,$ as Ye,a0 as Ze,x as J,a1 as Ee,a2 as $e,a3 as _e}from"./index-5a00b843.js";import{u as Xe}from"./getOffsetToRoot-095c2206.js";import{d as F,M as Qe}from"./MdRoute-8e9243dd.js";import{S as et}from"./add-fbad5474.js";function tt(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function st(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const nt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),ot=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),it=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),rt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function at(e,t){const{styleOverrides:s,styleProvider:o,list:i,active:r,defaultActive:l,pattern:m,placement:d="top",center:p=!1,size:u="medium",addible:C=!1,lazyLoading:P=!0,onActiveChange:L,onAddClick:T,onClose:k,...v}=ze("Tabs",e),D=He(),w=Oe(rt,{tabs:o==null?void 0:o.tabs},s),{t:H}=Ue(),ee=c.useId(),M=a=>`${D}-tabs-tab-${a}-${ee}`,V=a=>`${D}-tabs-panel-${a}-${ee}`,te=c.useRef(null),O=c.useRef(null),y=c.useRef(null),se=c.useRef(null),q=c.useRef(null),[he,De]=c.useState(!1),[Pe,Me]=c.useState([]),[Re,Ae]=c.useState(!1),be=u==="small"?16:u==="large"?20:18,U=d==="top"||d==="bottom",ne=c.useMemo(()=>{if(!z.isUndefined(l))return l;for(const a of i)if(!a.disabled)return a.id;return null},[]),[K,oe]=Be(ne,r,a=>{ie.current.add(a),L&&L(a,We(i,h=>h.id===a))}),ie=c.useRef(new Set(z.isNull(ne)?[]:[ne])),fe=new Set,Ne=i.map(a=>{const{id:h,panel:g}=a,_=h!==K,j=ie.current.has(h);return j&&fe.add(h),c.createElement("div",{...w("tabs__tabpanel"),key:h,id:V(h),tabIndex:0,hidden:_,role:"tabpanel","aria-labelledby":M(h)},P&&_&&!j?null:g)});ie.current=fe;const G=()=>{const a=O.current;if(a){const h=U?a.scrollWidth>a.clientWidth:a.scrollHeight>a.clientHeight;if(De(h),Ae(tt(a)[U?"x":"y"]),h){const g=a.getBoundingClientRect(),_=[];i.forEach(j=>{var R,A;const B=document.getElementById(M(j.id));if(B){const S=B.getBoundingClientRect();U?(S.right+(((R=se.current)==null?void 0:R.offsetWidth)??0)>g.right||S.left<g.left)&&_.push(j):(S.bottom+(((A=se.current)==null?void 0:A.offsetHeight)??0)>g.bottom||S.top<g.top)&&_.push(j)}}),Me(_)}}};Fe(()=>{G()},[]),ve(O,G),ve(y,G);const re=Ve(()=>{if(y.current&&q.current){const a=y.current.getBoundingClientRect();for(const h of i)if(h.id===K){const g=document.getElementById(M(h.id));if(g){const _=g.getBoundingClientRect();U?q.current.style.cssText=`left:${_.left-a.left}px;width:${_.width}px;opacity:1;`:q.current.style.cssText=`top:${_.top-a.top}px;opacity:1;`}}}});return c.useEffect(()=>{re()}),c.useImperativeHandle(t,()=>({updateIndicator:re}),[re]),n.jsxs("div",{...v,...qe(w("tabs",`tabs--${d}`,`tabs--${u}`,{[`tabs--${m}`]:m,"tabs--center":p}),{className:v.className,style:v.style}),ref:te,children:[n.jsx("div",{...w("tabs__tablist-wrapper"),ref:O,onScroll:()=>{G()},children:n.jsxs("div",{...w("tabs__tablist"),ref:y,role:"tablist","aria-orientation":U?"horizontal":"vertical",children:[i.map((a,h)=>{const{id:g,title:_,disabled:j,closable:B}=a,R=g===K,A=(f,b=h)=>{for(let $=f?b+1:b-1,xe=0;xe<i.length;f?$++:$--,xe++){const ae=z.nth(i,$%i.length);if(ae&&!ae.disabled)return ae}},S=f=>{if(f){oe(f.id);const b=document.getElementById(M(f.id));b&&b.focus()}},ge=()=>{if(R){let f=!1;for(let b=h+1;b<i.length;b++){const $=z.nth(i,b);if($&&!$.disabled){f=!0,S($);break}}if(!f)for(let b=h-1;b>=0;b--){const $=z.nth(i,b);if($&&!$.disabled){S($);break}}}k==null||k(g,a)};return c.createElement("div",{...w("tabs__tab",{"tabs__tab.is-active":R,"tabs__tab.is-disabled":j,"tabs__tab--first":h===0,"tabs__tab--last":h===i.length-1}),key:g,id:M(g),tabIndex:R&&!j?0:-1,role:"tab","aria-controls":V(g),"aria-selected":R,"aria-disabled":j,onClick:()=>{oe(g)},onKeyDown:f=>{switch(f.code){case"Delete":f.preventDefault(),B&&ge();break;case"ArrowLeft":f.preventDefault(),(d==="top"||d==="bottom")&&S(A(!1));break;case"ArrowRight":f.preventDefault(),(d==="top"||d==="bottom")&&S(A(!0));break;case"ArrowUp":f.preventDefault(),(d==="left"||d==="right")&&S(A(!1));break;case"ArrowDown":f.preventDefault(),(d==="left"||d==="right")&&S(A(!0));break;case"Home":f.preventDefault();for(const b of i)if(!b.disabled){S(b);break}break;case"End":f.preventDefault();for(let b=i.length-1;b>=0;b--)if(!i[b].disabled){S(i[b]);break}break}}},_,!j&&B&&n.jsx("div",{...w("tabs__close"),role:"button","aria-label":H("Close"),onClick:f=>{f.stopPropagation(),ge()},children:n.jsx(I,{children:n.jsx(Ke,{})})}))}),(he||C)&&n.jsxs("div",{...w("tabs__button-container"),ref:se,children:[he&&n.jsx(Ge,{list:Pe.map(a=>{const{id:h,title:g,dropdownRender:_,disabled:j}=a;return{id:h,title:z.isUndefined(_)?g:_,type:"item",disabled:j,style:h===K?{color:`var(--${D}-color-primary)`}:void 0}}),placement:d==="left"?"bottom-left":"bottom-right",onClick:a=>{oe(a)},children:n.jsx("div",{...w("tabs__button","tabs__button--more",{"tabs__button.is-end":Re}),"aria-label":H("More"),children:n.jsx(I,{size:be,children:n.jsx(ot,{})})})}),C&&n.jsx("div",{...w("tabs__button","tabs__button--add"),role:"button","aria-label":H("Add"),onClick:()=>{T==null||T()},children:n.jsx(I,{size:be,children:n.jsx(et,{})})})]}),n.jsx("div",{...w(m==="wrap"?"tabs__wrap-indicator":m==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:q})]})}),Ne]})}const ct=c.forwardRef(at),lt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),x={"index.html":`<!DOCTYPE html>
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
`},dt=`{
    "infiniteLoopProtection": true,
    "hardReloadOnChange": true,
    "view": "browser",
    "container": {
      "port": 3000,
      "node": "16"
    }
  }
`,pt="node_modules/lerna/schemas/lerna-schema.json",mt=["libs/components","libs/hooks","libs/utils","libs/themes"],ut="1.5.0",ht={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},Y={$schema:pt,packages:mt,version:ut,command:ht},bt="@laser-ui/source",ft="0.0.0",gt="MIT",xt={"build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:prettier":"prettier . --write","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},vt={"@laser-pro/storage":"^0.1.0","@material-design-icons/svg":"^0.14.12",axios:"^1.6.8",bootstrap:"^5.3.2",codesandbox:"^2.2.3",dayjs:"^1.11.9","highlight.js":"^11.8.0",i18next:"^23.5.1",immer:"^10.0.2",jss:"^10.10.0","jss-preset-default":"^10.10.0",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6","rcl-store":"^2.1.0",react:"18.2.0","react-dom":"18.2.0","react-i18next":"^13.2.2","react-router-dom":"^6.15.0",rfs:"^10.0.0",tslib:"^2.6.2"},_t={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"18.2.24","@types/react-dom":"18.2.9","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",cypress:"^13.0.0",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1",husky:"^8.0.0",jsdom:"~22.1.0",lerna:"~8.0.2",nx:"17.0.2","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^4.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1"},yt={node:"16.x || 18.x || 20.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"9.x"},wt={patchedDependencies:{"@nx/js@17.0.2":"patches/@nx__js@17.0.2.patch"}},jt={includedScripts:[]},E={name:bt,version:ft,private:!0,license:gt,scripts:xt,dependencies:vt,devDependencies:_t,engines:yt,pnpm:wt,nx:jt};function Ce(e){return`{
  "name": "${e}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@laser-ui/components": "${Y.version}",
    "@laser-ui/hooks": "${Y.version}",
    "@laser-ui/themes": "${Y.version}",
    "@laser-ui/utils": "${Y.version}",
    "bootstrap": "${E.dependencies.bootstrap}",
    "dayjs": "${E.dependencies.dayjs}",
    "immer": "${E.dependencies.immer}",
    "react": "${E.dependencies.react}",
    "react-dom": "${E.dependencies["react-dom"]}",
    "tslib": "${E.dependencies.tslib}"
  },
  "devDependencies": {
    "@types/react": "${E.devDependencies["@types/react"]}",
    "@types/react-dom": "${E.devDependencies["@types/react-dom"]}",
    "@vitejs/plugin-react": "${E.devDependencies["@vitejs/plugin-react"]}",
    "sass": "${E.devDependencies.sass}",
    "typescript": "${E.devDependencies.typescript}",
    "vite": "${E.devDependencies.vite}",
    "vite-plugin-svgr": "${E.devDependencies["vite-plugin-svgr"]}"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`}function St(e,t,s){const o={"index.html":{content:x["index.html"]},"src/App.tsx":{content:x["src/App.tsx"]},"src/Demo.tsx":{content:t},"src/main.tsx":{content:x["src/main.tsx"]},"src/styles/index.scss":{content:x["src/styles/index.scss"]},"src/styles/vendor/bootstrap.scss":{content:x["src/styles/vendor/bootstrap.scss"]},"src/styles/vendor/laser-ui.scss":{content:x["src/styles/vendor/laser-ui.scss"]},"package.json":{content:Ce(e)},"tsconfig.json":{content:x["tsconfig.json"]},"vite.config.ts":{content:x["vite.config.ts"]},"sandbox.config.json":{content:dt}};s&&(o["src/styles/index.scss"]={content:`${x["src/styles/index.scss"]}
${s}`});const i=Je({files:o}),r=document.createElement("form");r.method="POST",r.action="https://codesandbox.io/api/v1/sandboxes/define",r.target="_blank";const l=document.createElement("input");l.name="parameters",l.value=i;const m=document.createElement("input");m.name="query",m.value="module=/src/Demo.tsx",r.appendChild(l),r.appendChild(m),document.body.append(r),r.submit(),document.body.removeChild(r)}const Et=500,$t=20,Ct=300,It="https://stackblitz.com",ye=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],kt=["project","search","ports","settings"],Lt=["light","dark"],Tt=["editor","preview"],we={clickToLoad:e=>N("ctl",e),devToolsHeight:e=>je("devtoolsheight",e),forceEmbedLayout:e=>N("embed",e),hideDevTools:e=>N("hidedevtools",e),hideExplorer:e=>N("hideExplorer",e),hideNavigation:e=>N("hideNavigation",e),openFile:e=>Z("file",e),showSidebar:e=>Dt("showSidebar",e),sidebarView:e=>ce("sidebarView",e,kt),startScript:e=>Z("startScript",e),terminalHeight:e=>je("terminalHeight",e),theme:e=>ce("theme",e,Lt),view:e=>ce("view",e,Tt),zenMode:e=>N("zenMode",e),organization:e=>`${Z("orgName",e==null?void 0:e.name)}&${Z("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>N("corp",e)};function Ie(e={}){const t=Object.entries(e).map(([s,o])=>o!=null&&we.hasOwnProperty(s)?we[s](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function N(e,t){return t===!0?`${e}=1`:""}function Dt(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function je(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function ce(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function Z(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function ke(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function le(e,t){return`${Le(t)}${e}${Ie(t)}`}function de(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${Le(s)}${e}${Ie(s)}`}function Le(e={}){return(typeof e.origin=="string"?e.origin:It).replace(/\/$/,"")}function pe(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Pt(t,s),Mt(e,t,s),e.replaceWith(t)}function me(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function ue(e){return e&&e.newWindow===!1?"_self":"_blank"}function Pt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${Ct}`,o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function Mt(e,t,s={}){var i,r;const o=((r=(i=e.allow)==null?void 0:i.split(";"))==null?void 0:r.map(l=>l.trim()))??[];s.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}class Rt{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((o,i)=>{const r=ke();this.pending[r]={resolve:o,reject:i},this.port.postMessage({type:t,payload:{...s,__reqid:r}})})}messageListener(t){var m;if(typeof((m=t.data.payload)==null?void 0:m.__reqid)!="string")return;const{type:s,payload:o}=t.data,{__reqid:i,__success:r,__error:l}=o;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(o)):this.pending[i].reject(l?`${s}: ${l}`:s),delete this.pending[i])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class At{constructor(t,s){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>(o==null?void 0:o.url)??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new Rt(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=o=>o!==null&&typeof o=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const X=[];class Nt{constructor(t){this.id=ke(),this.element=t,this.pending=new Promise((s,o)=>{const i=({data:p,ports:u})=>{(p==null?void 0:p.action)==="SDK_INIT_SUCCESS"&&p.id===this.id&&(this.vm=new At(u[0],p.payload),s(this.vm),l())},r=()=>{var p;(p=this.element.contentWindow)==null||p.postMessage({action:"SDK_INIT",id:this.id},"*")};function l(){window.clearInterval(d),window.removeEventListener("message",i)}window.addEventListener("message",i),r();let m=0;const d=window.setInterval(()=>{if(this.vm){l();return}if(m>=$t){l(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),X.forEach((p,u)=>{p.id===this.id&&X.splice(u,1)});return}m++,r()},Et)}),X.push(this)}}const zt=e=>{const t=e instanceof Element?"element":"id";return X.find(s=>s[t]===e)??null};function Ht(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Ot(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Te({template:e,title:t,description:s,dependencies:o,files:i,settings:r}){if(!ye.includes(e)){const p=ye.map(u=>`'${u}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${p}`)}const l=[],m=(p,u,C="")=>{l.push(Ht(p,typeof u=="string"?u:C))};m("project[title]",t),typeof s=="string"&&s.length>0&&m("project[description]",s),m("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):m("project[dependencies]",JSON.stringify(o))),r&&m("project[settings]",JSON.stringify(r)),Object.entries(i).forEach(([p,u])=>{m(`project[files][${Ot(p)}]`,u)});const d=document.createElement("form");return d.method="POST",d.setAttribute("style","display:none!important;"),d.append(...l),d}function Ut(e,t){const s=Te(e);return s.action=de("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function Bt(e,t){const s=Te(e);s.action=le("/run",t),s.target=ue(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function Q(e){return e!=null&&e.contentWindow?(zt(e)??new Nt(e)).pending:Promise.reject("Provided element is not an iframe.")}function Wt(e,t){Bt(e,t)}function Ft(e,t){const s=le(`/edit/${e}`,t),o=ue(t);window.open(s,o)}function Vt(e,t){const s=le(`/github/${e}`,t),o=ue(t);window.open(s,o)}function qt(e,t,s){var l;const o=me(e),i=Ut(t,s),r=document.createElement("iframe");return pe(o,r,s),(l=r.contentDocument)==null||l.write(i),Q(r)}function Kt(e,t,s){const o=me(e),i=document.createElement("iframe");return i.src=de(`/edit/${t}`,s),pe(o,i,s),Q(i)}function Gt(e,t,s){const o=me(e),i=document.createElement("iframe");return i.src=de(`/github/${t}`,s),pe(o,i,s),Q(i)}const Jt={connect:Q,embedGithubProject:Gt,embedProject:qt,embedProjectId:Kt,openGithubProject:Vt,openProject:Wt,openProjectId:Ft};function Yt(e,t,s){const o={"index.html":x["index.html"],"src/App.tsx":x["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":x["src/main.tsx"],"src/styles/index.scss":x["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":x["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/laser-ui.scss":x["src/styles/vendor/laser-ui.scss"],"package.json":Ce(e),"tsconfig.json":x["tsconfig.json"],"vite.config.ts":x["vite.config.ts"]};s&&(o["src/styles/index.scss"]=`${x["src/styles/index.scss"]}
${s}`),Jt.openProject({title:e,description:"Demo of Laser UI",template:"node",files:o},{openFile:"Demo.tsx"})}function os(e){const{id:t,renderer:s,title:o,description:i,tsxSource:r,scssSource:l}=e,m=W(F(i)),d=F(r),p=l?F(l):void 0,{t:u}=Se(),C=c.useRef(null),P=W(String.raw`
${"```tsx"}
${d}
${"```"}
`),L=p?W(String.raw`
${"```scss"}
${p}
${"```"}
`):void 0,[T,k]=c.useState("tsx"),[v,D]=c.useState(!1),[w,H]=c.useState(!1),M=Ye().hash===`#${t}`,V=()=>{D(y=>!y)},te=()=>{st(T==="tsx"?d:p),H(!0)},O=y=>{y||H(!1)};return Xe(()=>{window.location.hash===`#${t}`&&C.current&&C.current.scrollIntoView()}),n.jsxs("section",{ref:C,id:t,className:Ze("app-demo-box",{"is-active":M}),children:[n.jsx("div",{className:"app-demo-box__renderer",children:z.isArray(s)?n.jsxs("div",{className:"app-demo-box__window",children:[n.jsxs("div",{className:"app-demo-box__window-header",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),n.jsxs("div",{className:"app-demo-box__title",children:[n.jsx("div",{className:"app-demo-box__title-divider",style:{width:20}}),n.jsx("div",{className:"app-demo-box__title-text",children:o.replace("#","")}),n.jsx("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),n.jsx("div",{className:"app-demo-box__description",dangerouslySetInnerHTML:{__html:m}}),n.jsxs("div",{className:"app-demo-box__toolbar",children:[n.jsx(J,{title:u("Open in CodeSandbox"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:()=>{St(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,d,p)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),n.jsx(J,{title:u("Open in Stackblitz"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:()=>{Yt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,d,p)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),n.jsx(J,{title:u(w?"Copied!":"Copy code"),afterVisibleChange:O,children:n.jsx("div",{className:"app-demo-box__button",onClick:te,children:w?n.jsx(I,{size:18,theme:"success",children:n.jsx(it,{})}):n.jsx(I,{size:18,children:n.jsx(lt,{})})})}),n.jsx(J,{title:u(v?"Hide code":"Show code"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:V,children:n.jsx("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:v?n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),v&&n.jsxs("div",{className:"app-demo-box__code",children:[!L&&n.jsx("div",{dangerouslySetInnerHTML:{__html:P}}),L&&n.jsx(ct,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(y=>({id:y,title:y,panel:n.jsx("div",{dangerouslySetInnerHTML:{__html:y==="tsx"?P:L}})})),active:T,size:"small",center:!0,onActiveChange:y=>{k(y)}})]})]})}const Zt="/assets/compose-d10d9fb4.png",Xt="/assets/virtual-scroll-fe1c26ec.png";function Qt(e){const{title:t,subtitle:s,description:o,aria:i,compose:r,virtualScroll:l,api:m,demos:d,links:p}=e,u=W(F(o)),C=W(F(m)),[P,L]=(()=>{if(i){let v=i;const D=i.endsWith("!");return D&&(v=v.slice(0,-1)),v=v.startsWith("http")?v:`https://www.w3.org/WAI/ARIA/apg/patterns/${v}/`,[v,D]}return[]})(),{t:T}=Se(),k=Ee(...$e.language);return c.useEffect(()=>{document.title=t+(k.value!=="en-US"?` ${s}`:"")+" - Laser UI"},[k.value,s,t]),n.jsxs(Qe,{links:p,children:[n.jsxs("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,k.value!=="en-US"&&n.jsx("span",{className:"app-component-route__subtitle",children:s})]}),n.jsxs("ul",{className:"app-component-route__tag-list",children:[P&&n.jsx("li",{children:n.jsxs("a",{className:"app-component-route__tag-link",href:P,target:"_blank",rel:"noreferrer",children:[n.jsx(I,{size:24,children:n.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{children:[n.jsx("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),n.jsx("g",{children:n.jsx("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),n.jsx("span",{children:"WAI-ARIA"}),L&&n.jsx(I,{theme:"warning",children:n.jsx(nt,{})})]})}),r&&n.jsx("li",{children:n.jsxs(_e,{className:"app-component-route__tag-link",to:"/components/Compose",children:[n.jsx("img",{src:Zt,alt:"Compose",width:20,height:20}),n.jsx("span",{children:"Compose"})]})}),l&&n.jsx("li",{children:n.jsxs(_e,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[n.jsx("img",{src:Xt,alt:"VirtualScroll",width:16,height:16}),n.jsx("span",{children:"VirtualScroll"})]})})]}),n.jsx("section",{dangerouslySetInnerHTML:{__html:u}}),n.jsx("h2",{id:"component-route-examples",className:"app-h app-h--2",children:T("Examples")}),n.jsx("section",{"data-demo":t,children:d}),n.jsx("section",{dangerouslySetInnerHTML:{__html:C}})]})}function is(e){const t=Ee(...$e.language);return c.createElement(Qt,e[t.value])}export{os as D,is as R,ot as S,ct as T,nt as a,it as b,tt as c};
