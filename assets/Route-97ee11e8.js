import{r as c,u as Re,a as Ne,b as Ae,N as ze,c as He,Y as Oe,g as Be,k as he,f as Ue,j as n,m as We,I,a1 as Fe,p as Ve,l as W,ab as qe,ac as F,ad as xe,ae as Ke,af as Ge,P as Y,ag as ye,ah as we,ai as be}from"./index-23b78b6e.js";import{d as V,M as Je}from"./MdRoute-fc2f6c88.js";import{S as Ye}from"./add-ad1e4e21.js";function Ze(e){c.useEffect(()=>e(),[])}function Xe(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function Qe(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const et=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),tt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),st=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),nt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function ot(e,t){const{styleOverrides:s,styleProvider:o,list:i,active:r,defaultActive:u,pattern:p,placement:l="top",center:d=!1,size:m="medium",addible:E=!1,onActiveChange:T,onAddClick:k,onClose:P,...D}=Re("Tabs",e),v=Ne(),x=Ae(nt,{tabs:o==null?void 0:o.tabs},s),{t:R}=ze(),H=c.useId(),N=a=>`${v}-tabs-tab-${a}-${H}`,q=a=>`${v}-tabs-panel-${a}-${H}`,ee=c.useRef(null),O=c.useRef(null),A=c.useRef(null),w=c.useRef(null),K=c.useRef(null),[de,De]=c.useState(!1),[Te,Pe]=c.useState([]),[Le,Me]=c.useState(!1),pe=m==="small"?16:m==="large"?20:18,B=l==="top"||l==="bottom",[G,te]=He(u??(()=>{for(const a of i)if(!a.disabled)return a.id;return null}),r,a=>{T&&T(a,Oe(i,h=>h.id===a))}),J=()=>{const a=O.current;if(a){const h=B?a.scrollWidth>a.clientWidth:a.scrollHeight>a.clientHeight;if(De(h),Me(Xe(a)[B?"x":"y"]),h){const g=a.getBoundingClientRect(),S=[];i.forEach(C=>{var L,M;const U=document.getElementById(N(C.id));if(U){const j=U.getBoundingClientRect();B?(j.right+(((L=w.current)==null?void 0:L.offsetWidth)??0)>g.right||j.left<g.left)&&S.push(C):(j.bottom+(((M=w.current)==null?void 0:M.offsetHeight)??0)>g.bottom||j.top<g.top)&&S.push(C)}}),Pe(S)}}};Be(()=>{J()},[]),he(O,J),he(A,J);const se=Ue(()=>{if(A.current&&K.current){const a=A.current.getBoundingClientRect();for(const h of i)if(h.id===G){const g=document.getElementById(N(h.id));if(g){const S=g.getBoundingClientRect();B?K.current.style.cssText=`left:${S.left-a.left}px;width:${S.width}px;opacity:1;`:K.current.style.cssText=`top:${S.top-a.top}px;opacity:1;`}}}});return c.useEffect(()=>{se()}),c.useImperativeHandle(t,()=>({updateIndicator:se}),[se]),n.jsxs("div",{...D,...We(x("tabs",`tabs--${l}`,`tabs--${m}`,{[`tabs--${p}`]:p,"tabs--center":d}),{className:D.className,style:D.style}),ref:ee,children:[n.jsx("div",{...x("tabs__tablist-wrapper"),ref:O,onScroll:()=>{J()},children:n.jsxs("div",{...x("tabs__tablist"),ref:A,role:"tablist","aria-orientation":B?"horizontal":"vertical",children:[i.map((a,h)=>{const{id:g,title:S,disabled:C,closable:U}=a,L=g===G,M=(f,b=h)=>{for(let $=f?b+1:b-1,me=0;me<i.length;f?$++:$--,me++){const ne=W.nth(i,$%i.length);if(ne&&!ne.disabled)return ne}},j=f=>{if(f){te(f.id);const b=document.getElementById(N(f.id));b&&b.focus()}},ue=()=>{if(L){let f=!1;for(let b=h+1;b<i.length;b++){const $=W.nth(i,b);if($&&!$.disabled){f=!0,j($);break}}if(!f)for(let b=h-1;b>=0;b--){const $=W.nth(i,b);if($&&!$.disabled){j($);break}}}P==null||P(g,a)};return c.createElement("div",{...x("tabs__tab",{"tabs__tab.is-active":L,"tabs__tab.is-disabled":C,"tabs__tab--first":h===0,"tabs__tab--last":h===i.length-1}),key:g,id:N(g),tabIndex:L&&!C?0:-1,role:"tab","aria-controls":q(g),"aria-selected":L,"aria-disabled":C,onClick:()=>{te(g)},onKeyDown:f=>{switch(f.code){case"Delete":f.preventDefault(),U&&ue();break;case"ArrowLeft":f.preventDefault(),(l==="top"||l==="bottom")&&j(M(!1));break;case"ArrowRight":f.preventDefault(),(l==="top"||l==="bottom")&&j(M(!0));break;case"ArrowUp":f.preventDefault(),(l==="left"||l==="right")&&j(M(!1));break;case"ArrowDown":f.preventDefault(),(l==="left"||l==="right")&&j(M(!0));break;case"Home":f.preventDefault();for(const b of i)if(!b.disabled){j(b);break}break;case"End":f.preventDefault();for(let b=i.length-1;b>=0;b--)if(!i[b].disabled){j(i[b]);break}break}}},S,!C&&U&&n.jsx("div",{...x("tabs__close"),role:"button","aria-label":R("Close"),onClick:f=>{f.stopPropagation(),ue()},children:n.jsx(I,{children:n.jsx(Fe,{})})}))}),(de||E)&&n.jsxs("div",{...x("tabs__button-container"),ref:w,children:[de&&n.jsx(Ve,{list:Te.map(a=>{const{id:h,title:g,dropdownRender:S,disabled:C}=a;return{id:h,title:W.isUndefined(S)?g:S,type:"item",disabled:C,style:h===G?{color:`var(--${v}-color-primary)`}:void 0}}),placement:l==="left"?"bottom-left":"bottom-right",onClick:a=>{te(a)},children:n.jsx("div",{...x("tabs__button","tabs__button--more",{"tabs__button.is-end":Le}),"aria-label":R("More"),children:n.jsx(I,{size:pe,children:n.jsx(tt,{})})})}),E&&n.jsx("div",{...x("tabs__button","tabs__button--add"),role:"button","aria-label":R("Add"),onClick:()=>{k==null||k()},children:n.jsx(I,{size:pe,children:n.jsx(Ye,{})})})]}),n.jsx("div",{...x(p==="wrap"?"tabs__wrap-indicator":p==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:K})]})}),i.map(a=>{const{id:h,panel:g}=a;return c.createElement("div",{...x("tabs__tabpanel"),key:h,id:q(h),tabIndex:0,hidden:h!==G,role:"tabpanel","aria-labelledby":N(h)},g)})]})}const it=c.forwardRef(ot),rt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),je=`import type { LContextIn } from '@laser-ui/components/context';

import { ConfigProvider, Root } from '@laser-ui/components';
import { useMemo } from 'react';

import Demo from './Demo';

import './styles.scss';

export function App() {
  const rootContext = useMemo<LContextIn>(
    () => ({
      layoutPageScrollEl: '#app-main',
      layoutContentResizeEl: '#app-content',
    }),
    [],
  );

  return (
    <ConfigProvider context={rootContext}>
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
`,at="node_modules/lerna/schemas/lerna-schema.json",ct=["libs/components","libs/hooks","libs/utils","libs/themes"],lt="0.0.1",dt={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},y={$schema:at,packages:ct,version:lt,command:dt},pt="@laser-ui/source",ut="0.0.0",mt="MIT",ht={"build:affected":"nx affected -t build","build:themes":"ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/build-themes.ts","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils","test:affected":"nx affected -t test","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},bt={"@babel/core":"^7.14.5","@babel/preset-react":"^7.14.5","@commitlint/cli":"^17.6.6","@commitlint/config-conventional":"^17.6.6","@material-design-icons/svg":"^0.14.9","@nx/cypress":"16.8.0","@nx/devkit":"16.8.0","@nx/eslint-plugin":"16.8.0","@nx/jest":"16.8.0","@nx/js":"16.8.0","@nx/linter":"16.8.0","@nx/plugin":"16.8.0","@nx/react":"16.8.0","@nx/vite":"16.8.0","@nx/workspace":"16.8.0","@stackblitz/sdk":"^1.9.0","@swc-node/register":"~1.4.2","@swc/cli":"~0.1.62","@swc/core":"~1.3.51","@swc/helpers":"~0.5.0","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.195","@types/node":"18.14.2","@types/react":"18.2.14","@types/react-dom":"18.2.6","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.0","@vitest/coverage-c8":"~0.32.0","@vitest/ui":"~0.32.0",bootstrap:"^5.3.1",codesandbox:"^2.2.3",cypress:"^13.0.0",dayjs:"^1.11.9",eslint:"8.46.0","eslint-config-prettier":"8.1.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1","highlight.js":"^11.8.0",husky:"^8.0.0",i18next:"^23.4.1",immer:"^10.0.2",jsdom:"~22.1.0",lerna:"^7.2.0",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.1",nx:"16.8.0","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.0","rcl-store":"^2.1.0",react:"18.2.0","react-dom":"18.2.0","react-i18next":"^13.0.3","react-router-dom":"^6.14.2",rfs:"^10.0.0",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.55.0","sort-package-json":"^2.5.1",stylelint:"^15.10.1","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.0.1",surge:"^0.23.1","ts-node":"^10.9.1",tslib:"^2.3.0",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^3.2.0","vite-tsconfig-paths":"~4.2.0",vitest:"~0.32.0","yaml-front-matter":"^4.1.1"},ft={node:"16.x || 18.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"8.x"},gt={includedScripts:[]},_={name:pt,version:ut,private:!0,license:mt,scripts:ht,devDependencies:bt,engines:ft,nx:gt};function _t(e){return`{
  "name": "${e} - ${y.version}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@laser-ui/components": "${y.version}",
    "@laser-ui/hooks": "${y.version}",
    "@laser-ui/themes": "${y.version}",
    "@laser-ui/utils": "${y.version}",
    "dayjs": "${_.devDependencies.dayjs}",
    "react": "${_.devDependencies.react}",
    "react-dom": "${_.devDependencies["react-dom"]}",
    "react-scripts": "latest",
    "sass": "latest"
  },
  "devDependencies": {
    "@types/react": "${_.devDependencies["@types/react"]}",
    "@types/react-dom": "${_.devDependencies["@types/react-dom"]}",
    "typescript": "${_.devDependencies.typescript}"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
`}const vt=`{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "es2015"
        ],
        "jsx": "react-jsx"
    }
}
`,Se=`<div id="root"></div>
`,$e=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,X=`@import '~@laser-ui/themes/index';

body {
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
`;function xt(e,t,s){const o={"public/index.html":{content:Se},"src/App.tsx":{content:je},"src/Demo.tsx":{content:t},"src/index.tsx":{content:$e},"src/styles.scss":{content:X},"package.json":{content:_t(e)},"tsconfig.json":{content:vt}};s&&(o["src/styles.scss"]={content:`${X}
${s}`});const i=qe({files:o}),r=document.createElement("form");r.method="POST",r.action="https://codesandbox.io/api/v1/sandboxes/define",r.target="_blank";const u=document.createElement("input");u.name="parameters",u.value=i;const p=document.createElement("input");p.name="query",p.value="module=/src/Demo.tsx",r.appendChild(u),r.appendChild(p),document.body.append(r),r.submit(),document.body.removeChild(r)}const yt=500,wt=20,jt=300,St="https://stackblitz.com",fe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],$t=["project","search","ports","settings"],Et=["light","dark"],Ct=["editor","preview"],ge={clickToLoad:e=>z("ctl",e),devToolsHeight:e=>_e("devtoolsheight",e),forceEmbedLayout:e=>z("embed",e),hideDevTools:e=>z("hidedevtools",e),hideExplorer:e=>z("hideExplorer",e),hideNavigation:e=>z("hideNavigation",e),openFile:e=>ve("file",e),showSidebar:e=>It("showSidebar",e),sidebarView:e=>oe("sidebarView",e,$t),startScript:e=>ve("startScript",e),terminalHeight:e=>_e("terminalHeight",e),theme:e=>oe("theme",e,Et),view:e=>oe("view",e,Ct),zenMode:e=>z("zenMode",e)};function Ee(e={}){const t=Object.entries(e).map(([s,o])=>o!=null&&ge.hasOwnProperty(s)?ge[s](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function z(e,t){return t===!0?`${e}=1`:""}function It(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function _e(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function oe(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function ve(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function Ce(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ie(e,t){return`${Ie(t)}${e}${Ee(t)}`}function re(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${Ie(s)}${e}${Ee(s)}`}function Ie(e={}){return(typeof e.origin=="string"?e.origin:St).replace(/\/$/,"")}function ae(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),kt(t,s),e.replaceWith(t)}function ce(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function le(e){return e&&e.newWindow===!1?"_self":"_blank"}function kt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${jt}`,o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}class Dt{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((o,i)=>{const r=Ce();this.pending[r]={resolve:o,reject:i},this.port.postMessage({type:t,payload:{...s,__reqid:r}})})}messageListener(t){var p;if(typeof((p=t.data.payload)==null?void 0:p.__reqid)!="string")return;const{type:s,payload:o}=t.data,{__reqid:i,__success:r,__error:u}=o;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(o)):this.pending[i].reject(u?`${s}: ${u}`:s),delete this.pending[i])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class Tt{constructor(t,s){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>(o==null?void 0:o.url)??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new Dt(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=o=>o!==null&&typeof o=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const Z=[];class Pt{constructor(t){this.id=Ce(),this.element=t,this.pending=new Promise((s,o)=>{const i=({data:d,ports:m})=>{(d==null?void 0:d.action)==="SDK_INIT_SUCCESS"&&d.id===this.id&&(this.vm=new Tt(m[0],d.payload),s(this.vm),u())},r=()=>{var d;(d=this.element.contentWindow)==null||d.postMessage({action:"SDK_INIT",id:this.id},"*")};function u(){window.clearInterval(l),window.removeEventListener("message",i)}window.addEventListener("message",i),r();let p=0;const l=window.setInterval(()=>{if(this.vm){u();return}if(p>=wt){u(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),Z.forEach((d,m)=>{d.id===this.id&&Z.splice(m,1)});return}p++,r()},yt)}),Z.push(this)}}const Lt=e=>{const t=e instanceof Element?"element":"id";return Z.find(s=>s[t]===e)??null};function Mt(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Rt(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ke({template:e,title:t,description:s,dependencies:o,files:i,settings:r}){if(!fe.includes(e)){const d=fe.map(m=>`'${m}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${d}`)}const u=[],p=(d,m,E="")=>{u.push(Mt(d,typeof m=="string"?m:E))};p("project[title]",t),typeof s=="string"&&s.length>0&&p("project[description]",s),p("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):p("project[dependencies]",JSON.stringify(o))),r&&p("project[settings]",JSON.stringify(r)),Object.entries(i).forEach(([d,m])=>{p(`project[files][${Rt(d)}]`,m)});const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...u),l}function Nt(e,t){const s=ke(e);return s.action=re("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function At(e,t){const s=ke(e);s.action=ie("/run",t),s.target=le(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function Q(e){return e!=null&&e.contentWindow?(Lt(e)??new Pt(e)).pending:Promise.reject("Provided element is not an iframe.")}function zt(e,t){At(e,t)}function Ht(e,t){const s=ie(`/edit/${e}`,t),o=le(t);window.open(s,o)}function Ot(e,t){const s=ie(`/github/${e}`,t),o=le(t);window.open(s,o)}function Bt(e,t,s){var u;const o=ce(e),i=Nt(t,s),r=document.createElement("iframe");return ae(o,r,s),(u=r.contentDocument)==null||u.write(i),Q(r)}function Ut(e,t,s){const o=ce(e),i=document.createElement("iframe");return i.src=re(`/edit/${t}`,s),ae(o,i,s),Q(i)}function Wt(e,t,s){const o=ce(e),i=document.createElement("iframe");return i.src=re(`/github/${t}`,s),ae(o,i,s),Q(i)}const Ft={connect:Q,embedGithubProject:Wt,embedProject:Bt,embedProjectId:Ut,openGithubProject:Ot,openProject:zt,openProjectId:Ht};function Vt(e){return[`{
    "name": "${e} - ${y.version}",
    "version": "0.0.0",
    "private": true,
    "dependencies": {
      "@laser-ui/components": "${y.version}",
      "@laser-ui/hooks": "${y.version}",
      "@laser-ui/themes": "${y.version}",
      "@laser-ui/utils": "${y.version}",
      "@types/react": "${_.devDependencies["@types/react"]}",
      "@types/react-dom": "${_.devDependencies["@types/react-dom"]}",
      "dayjs": "${_.devDependencies.dayjs}",
      "react": "${_.devDependencies.react}",
      "react-dom": "${_.devDependencies["react-dom"]}",
      "sass": "latest"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    },
    "devDependencies": {
      "react-scripts": "latest"
    }
  }
  `,{"@laser-ui/components":`${y.version}`,"@laser-ui/hooks":`${y.version}`,"@laser-ui/themes":`${y.version}`,"@laser-ui/utils":`${y.version}`,"@types/react":`${_.devDependencies["@types/react"]}`,"@types/react-dom":`${_.devDependencies["@types/react-dom"]}`,dayjs:`${_.devDependencies.dayjs}`,react:`${_.devDependencies.react}`,"react-dom":`${_.devDependencies["react-dom"]}`,sass:"latest"}]}const qt=`{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": ["dom", "es2015"],
    "jsx": "react-jsx"
  }
}
`;function Kt(e,t,s){const[o,i]=Vt(e),r={"index.html":Se,"App.tsx":je,"Demo.tsx":t,"index.tsx":$e,"styles.scss":X,"package.json":o,"tsconfig.json":qt};s&&(r["styles.scss"]=`${X}
${s}`),Ft.openProject({title:`${e} - ${y.version}`,description:"Demo of Laser UI",template:"create-react-app",files:r,dependencies:i},{openFile:"Demo.tsx"})}function es(e){const{id:t,renderer:s,title:o,description:i,tsxSource:r,scssSource:u}=e,p=F(V(i)),l=V(r),d=u?V(u):void 0,{t:m}=xe(),E=c.useRef(null),T=F(String.raw`
${"```tsx"}
${l}
${"```"}
`),k=d?F(String.raw`
${"```scss"}
${d}
${"```"}
`):void 0,[P,D]=c.useState("tsx"),[v,x]=c.useState(!1),[R,H]=c.useState(!1),q=Ke().hash===`#${t}`,ee=()=>{x(w=>!w)},O=()=>{Qe(P==="tsx"?l:d),H(!0)},A=w=>{w||H(!1)};return Ze(()=>{window.location.hash===`#${t}`&&E.current&&E.current.scrollIntoView()}),n.jsxs("section",{ref:E,id:t,className:Ge("app-demo-box",{"is-active":q}),children:[n.jsx("div",{className:"app-demo-box__renderer",children:W.isArray(s)?n.jsxs("div",{className:"app-demo-box__window",children:[n.jsxs("div",{className:"app-demo-box__window-header",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),n.jsxs("div",{className:"app-demo-box__title",children:[n.jsx("div",{className:"app-demo-box__title-divider",style:{width:20}}),n.jsx("div",{className:"app-demo-box__title-text",children:o.replace("#","")}),n.jsx("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),n.jsx("div",{className:"app-demo-box__description",dangerouslySetInnerHTML:{__html:p}}),n.jsxs("div",{className:"app-demo-box__toolbar",children:[n.jsx(Y,{title:m("Open in CodeSandbox"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:()=>{xt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}:${o}`,l,d)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),n.jsx(Y,{title:m("Open in Stackblitz"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:()=>{Kt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}:${o}`,l,d)},children:n.jsx("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),n.jsx(Y,{title:m(R?"Copied!":"Copy code"),afterVisibleChange:A,children:n.jsx("div",{className:"app-demo-box__button",onClick:O,children:R?n.jsx(I,{size:18,theme:"success",children:n.jsx(st,{})}):n.jsx(I,{size:18,children:n.jsx(rt,{})})})}),n.jsx(Y,{title:m(v?"Hide code":"Show code"),children:n.jsx(I,{className:"app-demo-box__button",size:18,onClick:ee,children:n.jsx("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:v?n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):n.jsx("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),v&&n.jsxs("div",{className:"app-demo-box__code",children:[!k&&n.jsx("div",{dangerouslySetInnerHTML:{__html:T}}),k&&n.jsx(it,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(w=>({id:w,title:w,panel:n.jsx("div",{dangerouslySetInnerHTML:{__html:w==="tsx"?T:k}})})),active:P,size:"small",center:!0,onActiveChange:w=>{D(w)}})]})]})}const Gt="/assets/compose-d10d9fb4.png",Jt="/assets/virtual-scroll-fe1c26ec.png";function Yt(e){const{title:t,subtitle:s,description:o,aria:i,compose:r,virtualScroll:u,api:p,demos:l,links:d}=e,m=F(V(o)),E=F(V(p)),[T,k]=(()=>{if(i){let v=i;const x=i.endsWith("!");return x&&(v=v.slice(0,-1)),v=v.startsWith("http")?v:`https://www.w3.org/WAI/ARIA/apg/patterns/${v}/`,[v,x]}return[]})(),{t:P}=xe(),D=ye(...we.language);return c.useEffect(()=>{document.title=t+(D.value!=="en-US"?` ${s}`:"")+" - Laser UI"},[D.value,s,t]),n.jsxs(Je,{links:d,children:[n.jsxs("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,D.value!=="en-US"&&n.jsx("span",{className:"app-component-route__subtitle",children:s})]}),n.jsxs("ul",{className:"app-component-route__tag-list",children:[T&&n.jsx("li",{children:n.jsxs("a",{className:"app-component-route__tag-link",href:T,target:"_blank",rel:"noreferrer",children:[n.jsx(I,{size:24,children:n.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{children:[n.jsx("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),n.jsx("g",{children:n.jsx("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),n.jsx("span",{children:"WAI-ARIA"}),k&&n.jsx(I,{theme:"warning",children:n.jsx(et,{})})]})}),r&&n.jsx("li",{children:n.jsxs(be,{className:"app-component-route__tag-link",to:"/components/Compose",children:[n.jsx("img",{src:Gt,alt:"Compose",width:20,height:20}),n.jsx("span",{children:"Compose"})]})}),u&&n.jsx("li",{children:n.jsxs(be,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[n.jsx("img",{src:Jt,alt:"VirtualScroll",width:16,height:16}),n.jsx("span",{children:"VirtualScroll"})]})})]}),n.jsx("section",{dangerouslySetInnerHTML:{__html:m}}),n.jsx("h2",{id:"component-route-examples",className:"app-h app-h--2",children:P("Examples")}),n.jsx("section",{"data-demo":t,children:l}),n.jsx("section",{dangerouslySetInnerHTML:{__html:E}})]})}function ts(e){const t=ye(...we.language);return c.createElement(Yt,e[t.value])}export{es as D,ts as R,tt as S,it as T,et as a,st as b,Xe as c,Ze as u};
