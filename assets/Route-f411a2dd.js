import{r as l,u as ze,a as He,b as Oe,v as Ue,l as z,c as Be,G as We,q as Fe,i as ve,g as Ve,j as n,m as qe,I as k,K as Ke,o as Ge,Y as Je,Z as W,_ as Se,$ as Ye,a0 as Ze,x as J,a1 as Ee,a2 as $e,a3 as _e}from"./index-50d3a99a.js";import{u as Xe}from"./getOffsetToRoot-526432bf.js";import{d as F,M as Qe}from"./MdRoute-a5e81f8d.js";import{S as et}from"./add-9572c35a.js";function tt(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function st(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const nt=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},l.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),it=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),ot=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},l.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),rt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function at(e,t){const{styleOverrides:s,styleProvider:i,list:o,active:r,defaultActive:d,pattern:m,placement:a="top",center:p=!1,size:u="medium",addible:C=!1,lazyLoading:P=!0,onActiveChange:L,onAddClick:T,onClose:I,...v}=ze("Tabs",e),D=He(),w=Oe(rt,{tabs:i==null?void 0:i.tabs},s),{t:H}=Ue(),ee=l.useId(),M=c=>`${D}-tabs-tab-${c}-${ee}`,V=c=>`${D}-tabs-panel-${c}-${ee}`,te=l.useRef(null),O=l.useRef(null),y=l.useRef(null),se=l.useRef(null),q=l.useRef(null),[he,De]=l.useState(!1),[Pe,Me]=l.useState([]),[Ae,Re]=l.useState(!1),be=u==="small"?16:u==="large"?20:18,U=a==="top"||a==="bottom",ne=l.useMemo(()=>{if(!z.isUndefined(d))return d;for(const c of o)if(!c.disabled)return c.id;return null},[]),[K,ie]=Be(ne,r,c=>{oe.current.add(c),L&&L(c,We(o,h=>h.id===c))}),oe=l.useRef(new Set(z.isNull(ne)?[]:[ne])),fe=new Set,Ne=o.map(c=>{const{id:h,panel:g}=c,_=h!==K,j=oe.current.has(h);return j&&fe.add(h),l.createElement("div",{...w("tabs__tabpanel"),key:h,id:V(h),tabIndex:0,hidden:_,role:"tabpanel","aria-labelledby":M(h)},P&&_&&!j?null:g)});oe.current=fe;const G=()=>{const c=O.current;if(c){const h=U?c.scrollWidth>c.clientWidth:c.scrollHeight>c.clientHeight;if(De(h),Re(tt(c)[U?"x":"y"]),h){const g=c.getBoundingClientRect(),_=[];o.forEach(j=>{var A,R;const B=document.getElementById(M(j.id));if(B){const S=B.getBoundingClientRect();U?(S.right+(((A=se.current)==null?void 0:A.offsetWidth)??0)>g.right||S.left<g.left)&&_.push(j):(S.bottom+(((R=se.current)==null?void 0:R.offsetHeight)??0)>g.bottom||S.top<g.top)&&_.push(j)}}),Me(_)}}};Fe(()=>{G()},[]),ve(O,G),ve(y,G);const re=Ve(()=>{if(y.current&&q.current){const c=y.current.getBoundingClientRect();for(const h of o)if(h.id===K){const g=document.getElementById(M(h.id));if(g){const _=g.getBoundingClientRect();U?q.current.style.cssText=`left:${_.left-c.left}px;width:${_.width}px;opacity:1;`:q.current.style.cssText=`top:${_.top-c.top}px;opacity:1;`}}}});return l.useEffect(()=>{re()}),l.useImperativeHandle(t,()=>({updateIndicator:re}),[re]),n.jsxs("div",{...v,...qe(w("tabs",`tabs--${a}`,`tabs--${u}`,{[`tabs--${m}`]:m,"tabs--center":p}),{className:v.className,style:v.style}),ref:te,children:[n.jsx("div",{...w("tabs__tablist-wrapper"),ref:O,onScroll:()=>{G()},children:n.jsxs("div",{...w("tabs__tablist"),ref:y,role:"tablist","aria-orientation":U?"horizontal":"vertical",children:[o.map((c,h)=>{const{id:g,title:_,disabled:j,closable:B}=c,A=g===K,R=(f,b=h)=>{for(let $=f?b+1:b-1,xe=0;xe<o.length;f?$++:$--,xe++){const ae=z.nth(o,$%o.length);if(ae&&!ae.disabled)return ae}},S=f=>{if(f){ie(f.id);const b=document.getElementById(M(f.id));b&&b.focus()}},ge=()=>{if(A){let f=!1;for(let b=h+1;b<o.length;b++){const $=z.nth(o,b);if($&&!$.disabled){f=!0,S($);break}}if(!f)for(let b=h-1;b>=0;b--){const $=z.nth(o,b);if($&&!$.disabled){S($);break}}}I==null||I(g,c)};return l.createElement("div",{...w("tabs__tab",{"tabs__tab.is-active":A,"tabs__tab.is-disabled":j,"tabs__tab--first":h===0,"tabs__tab--last":h===o.length-1}),key:g,id:M(g),tabIndex:A&&!j?0:-1,role:"tab","aria-controls":V(g),"aria-selected":A,"aria-disabled":j,onClick:()=>{ie(g)},onKeyDown:f=>{switch(f.code){case"Delete":f.preventDefault(),B&&ge();break;case"ArrowLeft":f.preventDefault(),(a==="top"||a==="bottom")&&S(R(!1));break;case"ArrowRight":f.preventDefault(),(a==="top"||a==="bottom")&&S(R(!0));break;case"ArrowUp":f.preventDefault(),(a==="left"||a==="right")&&S(R(!1));break;case"ArrowDown":f.preventDefault(),(a==="left"||a==="right")&&S(R(!0));break;case"Home":f.preventDefault();for(const b of o)if(!b.disabled){S(b);break}break;case"End":f.preventDefault();for(let b=o.length-1;b>=0;b--)if(!o[b].disabled){S(o[b]);break}break}}},_,!j&&B&&n.jsx("div",{...w("tabs__close"),role:"button","aria-label":H("Close"),onClick:f=>{f.stopPropagation(),ge()},children:n.jsx(k,{children:n.jsx(Ke,{})})}))}),(he||C)&&n.jsxs("div",{...w("tabs__button-container"),ref:se,children:[he&&n.jsx(Ge,{list:Pe.map(c=>{const{id:h,title:g,dropdownRender:_,disabled:j}=c;return{id:h,title:z.isUndefined(_)?g:_,type:"item",disabled:j,style:h===K?{color:`var(--${D}-color-primary)`}:void 0}}),placement:a==="left"?"bottom-left":"bottom-right",onClick:c=>{ie(c)},children:n.jsx("div",{...w("tabs__button","tabs__button--more",{"tabs__button.is-end":Ae}),"aria-label":H("More"),children:n.jsx(k,{size:be,children:n.jsx(it,{})})})}),C&&n.jsx("div",{...w("tabs__button","tabs__button--add"),role:"button","aria-label":H("Add"),onClick:()=>{T==null||T()},children:n.jsx(k,{size:be,children:n.jsx(et,{})})})]}),n.jsx("div",{...w(m==="wrap"?"tabs__wrap-indicator":m==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:q})]})}),Ne]})}const ct=l.forwardRef(at),lt=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},l.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),x={"index.html":`<!DOCTYPE html>
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
`},dt=String.raw`{
  "setupTasks": ["pnpm install"]
}
`,pt="node_modules/lerna/schemas/lerna-schema.json",mt=["libs/components","libs/hooks","libs/utils","libs/themes"],ut="1.6.1",ht={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},Y={$schema:pt,packages:mt,version:ut,command:ht},bt="@laser-ui/source",ft="0.0.0",gt="MIT",xt={"build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:prettier":"prettier . --write","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},vt={"@laser-pro/storage":"^0.1.0","@material-design-icons/svg":"^0.14.12",axios:"^1.6.8",bootstrap:"^5.3.2",codesandbox:"^2.2.3",dayjs:"^1.11.9","highlight.js":"^11.8.0",i18next:"^23.5.1",immer:"^10.0.2",jss:"^10.10.0","jss-preset-default":"^10.10.0",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6","rcl-store":"^2.1.0",react:"18.2.0","react-dom":"18.2.0","react-i18next":"^13.2.2","react-router-dom":"^6.15.0",rfs:"^10.0.0",tslib:"^2.6.2"},_t={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"18.2.24","@types/react-dom":"18.2.9","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",cypress:"^13.0.0",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1",husky:"^8.0.0",jsdom:"~22.1.0",lerna:"~8.0.2",nx:"17.0.2","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^4.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1"},yt={node:"16.x || 18.x || 20.x || 22.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"9.x"},wt={patchedDependencies:{"@nx/js@17.0.2":"patches/@nx__js@17.0.2.patch"}},jt={includedScripts:[]},E={name:bt,version:ft,private:!0,license:gt,scripts:xt,dependencies:vt,devDependencies:_t,engines:yt,pnpm:wt,nx:jt};function Ce(e){return`{
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
`}function St(e,t,s){const i={"index.html":{content:x["index.html"]},"src/App.tsx":{content:x["src/App.tsx"]},"src/Demo.tsx":{content:t},"src/main.tsx":{content:x["src/main.tsx"]},"src/styles/index.scss":{content:x["src/styles/index.scss"]},"src/styles/vendor/bootstrap.scss":{content:x["src/styles/vendor/bootstrap.scss"]},"src/styles/vendor/laser-ui.scss":{content:x["src/styles/vendor/laser-ui.scss"]},"package.json":{content:Ce(e)},"tsconfig.json":{content:x["tsconfig.json"]},"vite.config.ts":{content:x["vite.config.ts"]},".codesandbox/tasks.json":{content:dt}};s&&(i["src/styles/index.scss"]={content:`${x["src/styles/index.scss"]}
${s}`});const o=Je({files:i}),r=document.createElement("form");r.method="POST",r.action="https://codesandbox.io/api/v1/sandboxes/define",r.target="_blank";const d=document.createElement("input");d.name="parameters",d.value=o;const m=document.createElement("input");m.name="query",m.value="module=/src/Demo.tsx";const a=document.createElement("input");a.name="environment",a.value="server",r.appendChild(d),r.appendChild(m),r.appendChild(a),document.body.append(r),r.submit(),document.body.removeChild(r)}const Et=500,$t=20,Ct=300,kt="https://stackblitz.com",ye=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],It=["project","search","ports","settings"],Lt=["light","dark"],Tt=["editor","preview"],we={clickToLoad:e=>N("ctl",e),devToolsHeight:e=>je("devtoolsheight",e),forceEmbedLayout:e=>N("embed",e),hideDevTools:e=>N("hidedevtools",e),hideExplorer:e=>N("hideExplorer",e),hideNavigation:e=>N("hideNavigation",e),openFile:e=>Z("file",e),showSidebar:e=>Dt("showSidebar",e),sidebarView:e=>ce("sidebarView",e,It),startScript:e=>Z("startScript",e),terminalHeight:e=>je("terminalHeight",e),theme:e=>ce("theme",e,Lt),view:e=>ce("view",e,Tt),zenMode:e=>N("zenMode",e),organization:e=>`${Z("orgName",e==null?void 0:e.name)}&${Z("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>N("corp",e)};function ke(e={}){const t=Object.entries(e).map(([s,i])=>i!=null&&we.hasOwnProperty(s)?we[s](i):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function N(e,t){return t===!0?`${e}=1`:""}function Dt(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function je(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function ce(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function Z(e,t){return(Array.isArray(t)?t:[t]).filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`${e}=${encodeURIComponent(i)}`).join("&")}function Ie(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function le(e,t){return`${Le(t)}${e}${ke(t)}`}function de(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${Le(s)}${e}${ke(s)}`}function Le(e={}){return(typeof e.origin=="string"?e.origin:kt).replace(/\/$/,"")}function pe(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Pt(t,s),Mt(e,t,s),e.replaceWith(t)}function me(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function ue(e){return e&&e.newWindow===!1?"_self":"_blank"}function Pt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${Ct}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}function Mt(e,t,s={}){var o,r;const i=((r=(o=e.allow)==null?void 0:o.split(";"))==null?void 0:r.map(d=>d.trim()))??[];s.crossOriginIsolated&&!i.includes("cross-origin-isolated")&&i.push("cross-origin-isolated"),i.length>0&&(t.allow=i.join("; "))}class At{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((i,o)=>{const r=Ie();this.pending[r]={resolve:i,reject:o},this.port.postMessage({type:t,payload:{...s,__reqid:r}})})}messageListener(t){var m;if(typeof((m=t.data.payload)==null?void 0:m.__reqid)!="string")return;const{type:s,payload:i}=t.data,{__reqid:o,__success:r,__error:d}=i;this.pending[o]&&(r?this.pending[o].resolve(this.cleanResult(i)):this.pending[o].reject(d?`${s}: ${d}`:s),delete this.pending[o])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class Rt{constructor(t,s){this.editor={openFile:i=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}}),setCurrentFile:i=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:i}}),setTheme:i=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:i}}),setView:i=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:i}}),showSidebar:(i=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:i}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(i=>(i==null?void 0:i.url)??null),setUrl:(i="/")=>{if(typeof i!="string"||!i.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${i}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:i}})}},this._rdc=new At(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=i=>i!==null&&typeof i=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const X=[];class Nt{constructor(t){this.id=Ie(),this.element=t,this.pending=new Promise((s,i)=>{const o=({data:p,ports:u})=>{(p==null?void 0:p.action)==="SDK_INIT_SUCCESS"&&p.id===this.id&&(this.vm=new Rt(u[0],p.payload),s(this.vm),d())},r=()=>{var p;(p=this.element.contentWindow)==null||p.postMessage({action:"SDK_INIT",id:this.id},"*")};function d(){window.clearInterval(a),window.removeEventListener("message",o)}window.addEventListener("message",o),r();let m=0;const a=window.setInterval(()=>{if(this.vm){d();return}if(m>=$t){d(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),X.forEach((p,u)=>{p.id===this.id&&X.splice(u,1)});return}m++,r()},Et)}),X.push(this)}}const zt=e=>{const t=e instanceof Element?"element":"id";return X.find(s=>s[t]===e)??null};function Ht(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Ot(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Te({template:e,title:t,description:s,dependencies:i,files:o,settings:r}){if(!ye.includes(e)){const p=ye.map(u=>`'${u}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${p}`)}const d=[],m=(p,u,C="")=>{d.push(Ht(p,typeof u=="string"?u:C))};m("project[title]",t),typeof s=="string"&&s.length>0&&m("project[description]",s),m("project[template]",e,"javascript"),i&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):m("project[dependencies]",JSON.stringify(i))),r&&m("project[settings]",JSON.stringify(r)),Object.entries(o).forEach(([p,u])=>{m(`project[files][${Ot(p)}]`,u)});const a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.append(...d),a}function Ut(e,t){const s=Te(e);return s.action=de("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function Bt(e,t){const s=Te(e);s.action=le("/run",t),s.target=ue(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function Q(e){return e!=null&&e.contentWindow?(zt(e)??new Nt(e)).pending:Promise.reject("Provided element is not an iframe.")}function Wt(e,t){Bt(e,t)}function Ft(e,t){const s=le(`/edit/${e}`,t),i=ue(t);window.open(s,i)}function Vt(e,t){const s=le(`/github/${e}`,t),i=ue(t);window.open(s,i)}function qt(e,t,s){var d;const i=me(e),o=Ut(t,s),r=document.createElement("iframe");return pe(i,r,s),(d=r.contentDocument)==null||d.write(o),Q(r)}function Kt(e,t,s){const i=me(e),o=document.createElement("iframe");return o.src=de(`/edit/${t}`,s),pe(i,o,s),Q(o)}function Gt(e,t,s){const i=me(e),o=document.createElement("iframe");return o.src=de(`/github/${t}`,s),pe(i,o,s),Q(o)}const Jt={connect:Q,embedGithubProject:Gt,embedProject:qt,embedProjectId:Kt,openGithubProject:Vt,openProject:Wt,openProjectId:Ft};function Yt(e,t,s){const i={"index.html":x["index.html"],"src/App.tsx":x["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":x["src/main.tsx"],"src/styles/index.scss":x["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":x["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/laser-ui.scss":x["src/styles/vendor/laser-ui.scss"],"package.json":Ce(e),"tsconfig.json":x["tsconfig.json"],"vite.config.ts":x["vite.config.ts"]};s&&(i["src/styles/index.scss"]=`${x["src/styles/index.scss"]}
${s}`),Jt.openProject({title:e,description:"Demo of Laser UI",template:"node",files:i},{openFile:"Demo.tsx"})}function is(e){const{id:t,renderer:s,title:i,description:o,tsxSource:r,scssSource:d}=e,m=W(F(o)),a=F(r),p=d?F(d):void 0,{t:u}=Se(),C=l.useRef(null),P=W(String.raw`
${"```tsx"}
${a}
${"```"}
`),L=p?W(String.raw`
${"```scss"}
${p}
${"```"}
`):void 0,[T,I]=l.useState("tsx"),[v,D]=l.useState(!1),[w,H]=l.useState(!1),M=Ye().hash===`#${t}`,V=()=>{D(y=>!y)},te=()=>{st(T==="tsx"?a:p),H(!0)},O=y=>{y||H(!1)};return Xe(()=>{window.location.hash===`#${t}`&&C.current&&C.current.scrollIntoView()}),n.jsxs("section",{ref:C,id:t,className:Ze("app-demo-box",{"is-active":M}),children:[n.jsx("div",{className:"app-demo-box__renderer",children:z.isArray(s)?n.jsxs("div",{className:"app-demo-box__window",children:[n.jsxs("div",{className:"app-demo-box__window-header",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),n.jsxs("div",{className:"app-demo-box__title",children:[n.jsx("div",{className:"app-demo-box__title-divider",style:{width:20}}),n.jsx("div",{className:"app-demo-box__title-text",children:i.replace("#","")}),n.jsx("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),n.jsx("div",{className:"app-demo-box__description",dangerouslySetInnerHTML:{__html:m}}),n.jsxs("div",{className:"app-demo-box__toolbar",children:[n.jsx(J,{title:u("Open in CodeSandbox"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:()=>{St(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,a,p)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),n.jsx(J,{title:u("Open in Stackblitz"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:()=>{Yt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,a,p)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),n.jsx(J,{title:u(w?"Copied!":"Copy code"),afterVisibleChange:O,children:n.jsx("div",{className:"app-demo-box__button",onClick:te,children:w?n.jsx(k,{size:18,theme:"success",children:n.jsx(ot,{})}):n.jsx(k,{size:18,children:n.jsx(lt,{})})})}),n.jsx(J,{title:u(v?"Hide code":"Show code"),children:n.jsx(k,{className:"app-demo-box__button",size:18,onClick:V,children:n.jsx("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:v?n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),v&&n.jsxs("div",{className:"app-demo-box__code",children:[!L&&n.jsx("div",{dangerouslySetInnerHTML:{__html:P}}),L&&n.jsx(ct,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(y=>({id:y,title:y,panel:n.jsx("div",{dangerouslySetInnerHTML:{__html:y==="tsx"?P:L}})})),active:T,size:"small",center:!0,onActiveChange:y=>{I(y)}})]})]})}const Zt="/assets/compose-d10d9fb4.png",Xt="/assets/virtual-scroll-fe1c26ec.png";function Qt(e){const{title:t,subtitle:s,description:i,aria:o,compose:r,virtualScroll:d,api:m,demos:a,links:p}=e,u=W(F(i)),C=W(F(m)),[P,L]=(()=>{if(o){let v=o;const D=o.endsWith("!");return D&&(v=v.slice(0,-1)),v=v.startsWith("http")?v:`https://www.w3.org/WAI/ARIA/apg/patterns/${v}/`,[v,D]}return[]})(),{t:T}=Se(),I=Ee(...$e.language);return l.useEffect(()=>{document.title=t+(I.value!=="en-US"?` ${s}`:"")+" - Laser UI"},[I.value,s,t]),n.jsxs(Qe,{links:p,children:[n.jsxs("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,I.value!=="en-US"&&n.jsx("span",{className:"app-component-route__subtitle",children:s})]}),n.jsxs("ul",{className:"app-component-route__tag-list",children:[P&&n.jsx("li",{children:n.jsxs("a",{className:"app-component-route__tag-link",href:P,target:"_blank",rel:"noreferrer",children:[n.jsx(k,{size:24,children:n.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{children:[n.jsx("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),n.jsx("g",{children:n.jsx("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),n.jsx("span",{children:"WAI-ARIA"}),L&&n.jsx(k,{theme:"warning",children:n.jsx(nt,{})})]})}),r&&n.jsx("li",{children:n.jsxs(_e,{className:"app-component-route__tag-link",to:"/components/Compose",children:[n.jsx("img",{src:Zt,alt:"Compose",width:20,height:20}),n.jsx("span",{children:"Compose"})]})}),d&&n.jsx("li",{children:n.jsxs(_e,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[n.jsx("img",{src:Xt,alt:"VirtualScroll",width:16,height:16}),n.jsx("span",{children:"VirtualScroll"})]})})]}),n.jsx("section",{dangerouslySetInnerHTML:{__html:u}}),n.jsx("h2",{id:"component-route-examples",className:"app-h app-h--2",children:T("Examples")}),n.jsx("section",{"data-demo":t,children:a}),n.jsx("section",{dangerouslySetInnerHTML:{__html:C}})]})}function os(e){const t=Ee(...$e.language);return l.createElement(Qt,e[t.value])}export{is as D,os as R,it as S,ct as T,nt as a,ot as b,tt as c};
