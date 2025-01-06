import{r as d,u as Pe,a as Re,b as ze,w as Ne,l as U,c as He,H as Oe,g as Ue,i as fe,f as Be,j as n,m as We,I,M as Ve,p as Fe,L as qe,_ as Ke,$ as F,a0 as ye,a1 as Ge,a2 as Je,y as Z,a3 as we,a4 as je,a5 as ge}from"./index-e6a75c1e.js";import{d as q,M as Ye}from"./MdRoute-db90f39f.js";import{S as Ze}from"./add-784363c6.js";function Xe(e){d.useEffect(()=>e(),[])}function Qe(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function et(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const tt=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),st=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),nt=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),it={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function ot(e){const{ref:t,styleOverrides:s,styleProvider:i,list:o,active:a,defaultActive:p,pattern:m,placement:c="top",center:u=!1,size:h="medium",addible:$=!1,lazyLoading:A=!0,onActiveChange:T,onAddClick:D,onClose:L,..._}=Pe("Tabs",e),M=Re(),j=ze(it,{tabs:i==null?void 0:i.tabs},s),{t:H}=Ne(),se=d.useId(),P=r=>`${M}-tabs-tab-${r}-${se}`,K=r=>`${M}-tabs-panel-${r}-${se}`,G=d.useRef(null),O=d.useRef(null),l=d.useRef(null),E=d.useRef(null),B=d.useRef(null),[ue,Ie]=d.useState(!1),[Le,Te]=d.useState([]),[De,Me]=d.useState(!1),me=h==="small"?16:h==="large"?20:18,W=c==="top"||c==="bottom",Ae=d.useMemo(()=>{if(!U.isUndefined(p))return p;for(const r of o)if(!r.disabled)return r.id;return null},[]),[J,ne]=He(Ae,a,r=>{T&&T(r,Oe(o,b=>b.id===r))}),Y=()=>{const r=O.current;if(r){const b=W?r.scrollWidth>r.clientWidth:r.scrollHeight>r.clientHeight;if(Ie(b),Me(Qe(r)[W?"x":"y"]),b){const x=r.getBoundingClientRect(),y=[];o.forEach(k=>{var R,z;const V=document.getElementById(P(k.id));if(V){const S=V.getBoundingClientRect();W?(S.right+(((R=E.current)==null?void 0:R.offsetWidth)??0)>x.right||S.left<x.left)&&y.push(k):(S.bottom+(((z=E.current)==null?void 0:z.offsetHeight)??0)>x.bottom||S.top<x.top)&&y.push(k)}}),Te(y)}}};Ue(()=>{Y()},[]),fe(O,Y),fe(l,Y);const ie=Be(()=>{if(l.current&&B.current){const r=l.current.getBoundingClientRect();for(const b of o)if(b.id===J){const x=document.getElementById(P(b.id));if(x){const y=x.getBoundingClientRect();W?B.current.style.cssText=`left:${y.left-r.left}px;width:${y.width}px;opacity:1;`:B.current.style.cssText=`top:${y.top-r.top}px;opacity:1;`}}}});return d.useEffect(()=>{ie()}),d.useImperativeHandle(t,()=>({updateIndicator:ie}),[ie]),n.jsxs("div",{..._,...We(j("tabs",`tabs--${c}`,`tabs--${h}`,{[`tabs--${m}`]:m,"tabs--center":u}),{className:_.className,style:_.style}),ref:r=>(G.current=r,()=>{G.current=null}),children:[n.jsx("div",{...j("tabs__tablist-wrapper"),ref:r=>(O.current=r,()=>{O.current=null}),onScroll:()=>{Y()},children:n.jsxs("div",{...j("tabs__tablist"),ref:r=>(l.current=r,()=>{l.current=null}),role:"tablist","aria-orientation":W?"horizontal":"vertical",children:[o.map((r,b)=>{const{id:x,title:y,disabled:k,closable:V}=r,R=x===J,z=(g,f=b)=>{for(let C=g?f+1:f-1,be=0;be<o.length;g?C++:C--,be++){const oe=U.nth(o,C%o.length);if(oe&&!oe.disabled)return oe}},S=g=>{if(g){ne(g.id);const f=document.getElementById(P(g.id));f&&f.focus()}},he=()=>{if(R){let g=!1;for(let f=b+1;f<o.length;f++){const C=U.nth(o,f);if(C&&!C.disabled){g=!0,S(C);break}}if(!g)for(let f=b-1;f>=0;f--){const C=U.nth(o,f);if(C&&!C.disabled){S(C);break}}}L==null||L(x,r)};return d.createElement("div",{...j("tabs__tab",{"tabs__tab.is-active":R,"tabs__tab.is-disabled":k,"tabs__tab--first":b===0,"tabs__tab--last":b===o.length-1}),key:x,id:P(x),tabIndex:R&&!k?0:-1,role:"tab","aria-controls":K(x),"aria-selected":R,"aria-disabled":k,onClick:()=>{ne(x)},onKeyDown:g=>{switch(g.code){case"Delete":g.preventDefault(),V&&he();break;case"ArrowLeft":g.preventDefault(),(c==="top"||c==="bottom")&&S(z(!1));break;case"ArrowRight":g.preventDefault(),(c==="top"||c==="bottom")&&S(z(!0));break;case"ArrowUp":g.preventDefault(),(c==="left"||c==="right")&&S(z(!1));break;case"ArrowDown":g.preventDefault(),(c==="left"||c==="right")&&S(z(!0));break;case"Home":g.preventDefault();for(const f of o)if(!f.disabled){S(f);break}break;case"End":g.preventDefault();for(let f=o.length-1;f>=0;f--)if(!o[f].disabled){S(o[f]);break}break}}},y,!k&&V&&n.jsx("div",{...j("tabs__close"),role:"button","aria-label":H("Close"),onClick:g=>{g.stopPropagation(),he()},children:n.jsx(I,{children:n.jsx(Ve,{})})}))}),(ue||$)&&n.jsxs("div",{...j("tabs__button-container"),ref:r=>(E.current=r,()=>{E.current=null}),children:[ue&&n.jsx(Fe,{list:Le.map(r=>{const{id:b,title:x,dropdownRender:y,disabled:k}=r;return{id:b,title:U.isUndefined(y)?x:y,type:"item",disabled:k,style:b===J?{color:`var(--${M}-color-primary)`}:void 0}}),placement:c==="left"?"bottom-left":"bottom-right",onClick:r=>{ne(r)},children:r=>n.jsx("div",{...j("tabs__button","tabs__button--more",{"tabs__button.is-end":De}),...r,"aria-label":H("More"),children:n.jsx(I,{size:me,children:n.jsx(st,{})})})}),$&&n.jsx("div",{...j("tabs__button","tabs__button--add"),role:"button","aria-label":H("Add"),onClick:()=>{D==null||D()},children:n.jsx(I,{size:me,children:n.jsx(Ze,{})})})]}),n.jsx("div",{...j(m==="wrap"?"tabs__wrap-indicator":m==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:r=>(B.current=r,()=>{B.current=null})})]})}),o.map(r=>{const{id:b,panel:x}=r,y=b!==J;return d.createElement("div",{...j("tabs__tabpanel"),key:b,id:K(b),tabIndex:0,hidden:y,role:"tabpanel","aria-labelledby":P(b)},n.jsx(qe,{hidden:y,disabled:!A,children:x}))})]})}const rt=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),v={"index.html":`<!DOCTYPE html>
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
`},at=String.raw`{
  "setupTasks": ["pnpm install"]
}
`,ct="node_modules/lerna/schemas/lerna-schema.json",lt=["libs/components","libs/hooks","libs/utils","libs/themes"],dt="2.0.4",pt={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},X={$schema:ct,packages:lt,version:dt,command:pt},ut="@laser-ui/source",mt="0.0.0",ht="MIT",bt={start:"nx run site:serve","build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:prettier":"prettier . --write","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},ft={"@laser-pro/storage":"^0.1.0","@material-design-icons/svg":"^0.14.13",axios:"^1.6.8",bootstrap:"^5.3.2",codesandbox:"^2.2.3",dayjs:"^1.11.9","highlight.js":"^11.8.0",i18next:"^23.5.1",immer:"^10.0.2",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6",react:"^19.0.0","react-dom":"^19.0.0","react-i18next":"^13.2.2","react-router-dom":"^6.15.0",rfs:"^10.0.0",tslib:"^2.6.2"},gt={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"^19.0.0","@types/react-dom":"^19.0.0","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",cypress:"^13.0.0",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1",husky:"^8.0.0",jsdom:"~22.1.0",lerna:"~8.0.2",nx:"17.0.2","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^4.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1"},xt={node:"16.x || 18.x || 20.x || 22.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"9.x"},vt={patchedDependencies:{"@nx/js@17.0.2":"patches/@nx__js@17.0.2.patch"}},_t={includedScripts:[]},w={name:ut,version:mt,private:!0,license:ht,scripts:bt,dependencies:ft,devDependencies:gt,engines:xt,pnpm:vt,nx:_t};function Se(e){return`{
  "name": "${e}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@laser-ui/components": "${X.version}",
    "@laser-ui/hooks": "${X.version}",
    "@laser-ui/themes": "${X.version}",
    "@laser-ui/utils": "${X.version}",
    "@material-design-icons/svg": "${w.dependencies["@material-design-icons/svg"]}",
    "bootstrap": "${w.dependencies.bootstrap}",
    "dayjs": "${w.dependencies.dayjs}",
    "immer": "${w.dependencies.immer}",
    "react": "${w.dependencies.react}",
    "react-dom": "${w.dependencies["react-dom"]}",
    "tslib": "${w.dependencies.tslib}"
  },
  "devDependencies": {
    "@types/react": "${w.devDependencies["@types/react"]}",
    "@types/react-dom": "${w.devDependencies["@types/react-dom"]}",
    "@vitejs/plugin-react": "${w.devDependencies["@vitejs/plugin-react"]}",
    "sass": "${w.devDependencies.sass}",
    "typescript": "${w.devDependencies.typescript}",
    "vite": "${w.devDependencies.vite}",
    "vite-plugin-svgr": "${w.devDependencies["vite-plugin-svgr"]}"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`}function yt(e,t,s){const i={"index.html":{content:v["index.html"]},"src/App.tsx":{content:v["src/App.tsx"]},"src/Demo.tsx":{content:t},"src/main.tsx":{content:v["src/main.tsx"]},"src/styles/index.scss":{content:v["src/styles/index.scss"]},"src/styles/vendor/bootstrap.scss":{content:v["src/styles/vendor/bootstrap.scss"]},"src/styles/vendor/laser-ui.scss":{content:v["src/styles/vendor/laser-ui.scss"]},"package.json":{content:Se(e)},"tsconfig.json":{content:v["tsconfig.json"]},"vite.config.ts":{content:v["vite.config.ts"]},".codesandbox/tasks.json":{content:at}};s&&(i["src/styles/index.scss"]={content:`${v["src/styles/index.scss"]}
${s}`});const o=Ke({files:i}),a=document.createElement("form");a.method="POST",a.action="https://codesandbox.io/api/v1/sandboxes/define",a.target="_blank";const p=document.createElement("input");p.name="parameters",p.value=o;const m=document.createElement("input");m.name="query",m.value="module=/src/Demo.tsx";const c=document.createElement("input");c.name="environment",c.value="server",a.appendChild(p),a.appendChild(m),a.appendChild(c),document.body.append(a),a.submit(),document.body.removeChild(a)}const wt=500,jt=20,St=300,Et="https://stackblitz.com",xe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],$t=["project","search","ports","settings"],Ct=["light","dark"],kt=["editor","preview"],ve={clickToLoad:e=>N("ctl",e),devToolsHeight:e=>_e("devtoolsheight",e),forceEmbedLayout:e=>N("embed",e),hideDevTools:e=>N("hidedevtools",e),hideExplorer:e=>N("hideExplorer",e),hideNavigation:e=>N("hideNavigation",e),openFile:e=>Q("file",e),showSidebar:e=>It("showSidebar",e),sidebarView:e=>re("sidebarView",e,$t),startScript:e=>Q("startScript",e),terminalHeight:e=>_e("terminalHeight",e),theme:e=>re("theme",e,Ct),view:e=>re("view",e,kt),zenMode:e=>N("zenMode",e),organization:e=>`${Q("orgName",e==null?void 0:e.name)}&${Q("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>N("corp",e)};function Ee(e={}){const t=Object.entries(e).map(([s,i])=>i!=null&&ve.hasOwnProperty(s)?ve[s](i):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function N(e,t){return t===!0?`${e}=1`:""}function It(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function _e(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function re(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function Q(e,t){return(Array.isArray(t)?t:[t]).filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`${e}=${encodeURIComponent(i)}`).join("&")}function $e(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ae(e,t){return`${Ce(t)}${e}${Ee(t)}`}function ce(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${Ce(s)}${e}${Ee(s)}`}function Ce(e={}){return(typeof e.origin=="string"?e.origin:Et).replace(/\/$/,"")}function le(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Lt(t,s),Tt(e,t,s),e.replaceWith(t)}function de(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function pe(e){return e&&e.newWindow===!1?"_self":"_blank"}function Lt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${St}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}function Tt(e,t,s={}){var o,a;const i=((a=(o=e.allow)==null?void 0:o.split(";"))==null?void 0:a.map(p=>p.trim()))??[];s.crossOriginIsolated&&!i.includes("cross-origin-isolated")&&i.push("cross-origin-isolated"),i.length>0&&(t.allow=i.join("; "))}class Dt{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((i,o)=>{const a=$e();this.pending[a]={resolve:i,reject:o},this.port.postMessage({type:t,payload:{...s,__reqid:a}})})}messageListener(t){var m;if(typeof((m=t.data.payload)==null?void 0:m.__reqid)!="string")return;const{type:s,payload:i}=t.data,{__reqid:o,__success:a,__error:p}=i;this.pending[o]&&(a?this.pending[o].resolve(this.cleanResult(i)):this.pending[o].reject(p?`${s}: ${p}`:s),delete this.pending[o])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class Mt{constructor(t,s){this.editor={openFile:i=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}}),setCurrentFile:i=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:i}}),setTheme:i=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:i}}),setView:i=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:i}}),showSidebar:(i=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:i}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(i=>(i==null?void 0:i.url)??null),setUrl:(i="/")=>{if(typeof i!="string"||!i.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${i}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:i}})}},this._rdc=new Dt(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=i=>i!==null&&typeof i=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const ee=[];class At{constructor(t){this.id=$e(),this.element=t,this.pending=new Promise((s,i)=>{const o=({data:u,ports:h})=>{(u==null?void 0:u.action)==="SDK_INIT_SUCCESS"&&u.id===this.id&&(this.vm=new Mt(h[0],u.payload),s(this.vm),p())},a=()=>{var u;(u=this.element.contentWindow)==null||u.postMessage({action:"SDK_INIT",id:this.id},"*")};function p(){window.clearInterval(c),window.removeEventListener("message",o)}window.addEventListener("message",o),a();let m=0;const c=window.setInterval(()=>{if(this.vm){p();return}if(m>=jt){p(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),ee.forEach((u,h)=>{u.id===this.id&&ee.splice(h,1)});return}m++,a()},wt)}),ee.push(this)}}const Pt=e=>{const t=e instanceof Element?"element":"id";return ee.find(s=>s[t]===e)??null};function Rt(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function zt(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ke({template:e,title:t,description:s,dependencies:i,files:o,settings:a}){if(!xe.includes(e)){const u=xe.map(h=>`'${h}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${u}`)}const p=[],m=(u,h,$="")=>{p.push(Rt(u,typeof h=="string"?h:$))};m("project[title]",t),typeof s=="string"&&s.length>0&&m("project[description]",s),m("project[template]",e,"javascript"),i&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):m("project[dependencies]",JSON.stringify(i))),a&&m("project[settings]",JSON.stringify(a)),Object.entries(o).forEach(([u,h])=>{m(`project[files][${zt(u)}]`,h)});const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...p),c}function Nt(e,t){const s=ke(e);return s.action=ce("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function Ht(e,t){const s=ke(e);s.action=ae("/run",t),s.target=pe(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function te(e){return e!=null&&e.contentWindow?(Pt(e)??new At(e)).pending:Promise.reject("Provided element is not an iframe.")}function Ot(e,t){Ht(e,t)}function Ut(e,t){const s=ae(`/edit/${e}`,t),i=pe(t);window.open(s,i)}function Bt(e,t){const s=ae(`/github/${e}`,t),i=pe(t);window.open(s,i)}function Wt(e,t,s){var p;const i=de(e),o=Nt(t,s),a=document.createElement("iframe");return le(i,a,s),(p=a.contentDocument)==null||p.write(o),te(a)}function Vt(e,t,s){const i=de(e),o=document.createElement("iframe");return o.src=ce(`/edit/${t}`,s),le(i,o,s),te(o)}function Ft(e,t,s){const i=de(e),o=document.createElement("iframe");return o.src=ce(`/github/${t}`,s),le(i,o,s),te(o)}const qt={connect:te,embedGithubProject:Ft,embedProject:Wt,embedProjectId:Vt,openGithubProject:Bt,openProject:Ot,openProjectId:Ut};function Kt(e,t,s){const i={"index.html":v["index.html"],"src/App.tsx":v["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":v["src/main.tsx"],"src/styles/index.scss":v["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":v["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/laser-ui.scss":v["src/styles/vendor/laser-ui.scss"],"package.json":Se(e),"tsconfig.json":v["tsconfig.json"],"vite.config.ts":v["vite.config.ts"]};s&&(i["src/styles/index.scss"]=`${v["src/styles/index.scss"]}
${s}`),qt.openProject({title:e,description:"Demo of Laser UI",template:"node",files:i},{openFile:"Demo.tsx"})}function es(e){const{id:t,renderer:s,title:i,description:o,tsxSource:a,scssSource:p}=e,m=F(q(o)),c=q(a),u=p?q(p):void 0,{t:h}=ye(),$=d.useRef(null),A=F(String.raw`
${"```tsx"}
${c}
${"```"}
`),T=u?F(String.raw`
${"```scss"}
${u}
${"```"}
`):void 0,[D,L]=d.useState("tsx"),[_,M]=d.useState(!1),[j,H]=d.useState(!1),P=Ge().hash===`#${t}`,K=()=>{M(l=>!l)},G=()=>{et(D==="tsx"?c:u),H(!0)},O=l=>{l||H(!1)};return Xe(()=>{window.location.hash===`#${t}`&&$.current&&$.current.scrollIntoView()}),n.jsxs("section",{ref:l=>($.current=l,()=>{$.current=null}),id:t,className:Je("app-demo-box",{"is-active":P}),children:[n.jsx("div",{className:"app-demo-box__renderer",children:U.isArray(s)?n.jsxs("div",{className:"app-demo-box__window",children:[n.jsxs("div",{className:"app-demo-box__window-header",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),n.jsxs("div",{className:"app-demo-box__title",children:[n.jsx("div",{className:"app-demo-box__title-divider",style:{width:20}}),n.jsx("div",{className:"app-demo-box__title-text",children:i.replace("#","")}),n.jsx("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),n.jsx("div",{className:"app-demo-box__description",dangerouslySetInnerHTML:{__html:m}}),n.jsxs("div",{className:"app-demo-box__toolbar",children:[n.jsx(Z,{title:h("Open in CodeSandbox"),children:l=>n.jsx(I,{...l,className:"app-demo-box__button",size:18,onClick:E=>{l.onClick(E),yt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,c,u)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),n.jsx(Z,{title:h("Open in Stackblitz"),children:l=>n.jsx(I,{...l,className:"app-demo-box__button",size:18,onClick:E=>{l.onClick(E),Kt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,c,u)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),n.jsx(Z,{title:h(j?"Copied!":"Copy code"),afterVisibleChange:O,children:l=>n.jsx("div",{...l,className:"app-demo-box__button",onClick:E=>{l.onClick(E),G()},children:j?n.jsx(I,{size:18,theme:"success",children:n.jsx(nt,{})}):n.jsx(I,{size:18,children:n.jsx(rt,{})})})}),n.jsx(Z,{title:h(_?"Hide code":"Show code"),children:l=>n.jsx(I,{...l,className:"app-demo-box__button",size:18,onClick:E=>{l.onClick(E),K()},children:n.jsx("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:_?n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),_&&n.jsxs("div",{className:"app-demo-box__code",children:[!T&&n.jsx("div",{dangerouslySetInnerHTML:{__html:A}}),T&&n.jsx(ot,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(l=>({id:l,title:l,panel:n.jsx("div",{dangerouslySetInnerHTML:{__html:l==="tsx"?A:T}})})),active:D,size:"small",center:!0,onActiveChange:l=>{L(l)}})]})]})}const Gt="/assets/compose-d10d9fb4.png",Jt="/assets/virtual-scroll-fe1c26ec.png";function Yt(e){const{title:t,subtitle:s,description:i,aria:o,compose:a,virtualScroll:p,api:m,demos:c,links:u}=e,h=F(q(i)),$=F(q(m)),[A,T]=(()=>{if(o){let _=o;const M=o.endsWith("!");return M&&(_=_.slice(0,-1)),_=_.startsWith("http")?_:`https://www.w3.org/WAI/ARIA/apg/patterns/${_}/`,[_,M]}return[]})(),{t:D}=ye(),L=we(...je.language);return d.useEffect(()=>{document.title=t+(L.value!=="en-US"?` ${s}`:"")+" - Laser UI"},[L.value,s,t]),n.jsxs(Ye,{links:u,children:[n.jsxs("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,L.value!=="en-US"&&n.jsx("span",{className:"app-component-route__subtitle",children:s})]}),n.jsxs("ul",{className:"app-component-route__tag-list",children:[A&&n.jsx("li",{children:n.jsxs("a",{className:"app-component-route__tag-link",href:A,target:"_blank",rel:"noreferrer",children:[n.jsx(I,{size:24,children:n.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{children:[n.jsx("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),n.jsx("g",{children:n.jsx("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),n.jsx("span",{children:"WAI-ARIA"}),T&&n.jsx(I,{theme:"warning",children:n.jsx(tt,{})})]})}),a&&n.jsx("li",{children:n.jsxs(ge,{className:"app-component-route__tag-link",to:"/components/Compose",children:[n.jsx("img",{src:Gt,alt:"Compose",width:20,height:20}),n.jsx("span",{children:"Compose"})]})}),p&&n.jsx("li",{children:n.jsxs(ge,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[n.jsx("img",{src:Jt,alt:"VirtualScroll",width:16,height:16}),n.jsx("span",{children:"VirtualScroll"})]})})]}),n.jsx("section",{dangerouslySetInnerHTML:{__html:h}}),n.jsx("h2",{id:"component-route-examples",className:"app-h app-h--2",children:D("Examples")}),n.jsx("section",{"data-demo":t,children:c}),n.jsx("section",{dangerouslySetInnerHTML:{__html:$}})]})}function ts(e){const t=we(...je.language);return n.jsx(Yt,{...e[t.value]})}export{es as D,ts as R,st as S,ot as T,tt as a,nt as b,Qe as c,Xe as u};
