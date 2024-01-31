import{u as me,b as _e,r as g,f as be,c as pe,l as o,x as ve,i as J,L as Me,j as w,m as j,w as xe}from"./index-a0198d41.js";const Xe={slider:"^slider","slider.is-disabled":"is-disabled","slider--horizontal":"^slider--horizontal","slider--vertical":"^slider--vertical",slider__track:"^slider__track","slider__track--reverse":"^slider__track--reverse",slider__thumb:"^slider__thumb","slider__thumb.is-focused":"is-focused","slider__thumb--draggable":"^slider__thumb--draggable",slider__mark:"^slider__mark","slider__mark--hidden":"^slider__mark--hidden","slider__mark-label":"^slider__mark-label","slider__mark-label.is-active":"is-active","slider__input-wrapper":"^slider__input-wrapper",slider__input:"^slider__input"};function Ne(le){const{styleOverrides:ne,styleProvider:A,formControl:m,model:se,defaultModel:re,max:c=100,min:a=0,step:M=1,range:p=!1,rangeMinDistance:_,rangeThumbDraggable:K=!1,tooltip:x,customTooltip:Q,marks:X,vertical:d=!1,reverse:R=!1,disabled:oe=!1,inputRef:k,inputRender:ce,onModelChange:ae,...u}=me("Slider",le),Y=_e(Xe,{slider:A==null?void 0:A.slider},ne),S=g.useRef(null),E=g.useRef(null),T=g.useRef(null),C=g.useRef(null),V=g.useRef(null),B=be(()=>window),[N,W]=g.useState(null),[z,ue]=g.useState(null),[F,P]=g.useState(null),[s,U]=g.useState(null),[I,y]=pe(re??(p?[0,0]:0),se,ae,(e,i)=>o.isNumber(e)&&o.isNumber(i)?e===i:o.isArray(e)&&o.isArray(i)?e[0]===i[0]&&e[1]===i[1]:!1,m==null?void 0:m.control),[b,v=0]=p?I:[I],[de,he]=(()=>p?[(x==null?void 0:x[0])??(z==="left"?!0:!!(N==="left"||s)),(x==null?void 0:x[1])??(z==="right"?!0:!!(N==="right"||s))]:[x??(z==="left"?!0:!!(N==="left"||s)),!1])(),{disabled:Z}=ve({disabled:oe||(m==null?void 0:m.control.disabled)}),$=(e,i="round")=>{let t=null;if(M){const l=Math[i](e/M);t=Math.min(c,Math.max(a,l*M))}if(o.isArray(X)){let l=t?Math.abs(t-e):1/0;if(l>0)for(const n of X){const r=o.isNumber(n)?n:n.value;if(i==="round"||i==="ceil"&&r-e>=0||i==="floor"&&r-e<=0){const f=Math.abs(r-e);f<l&&(l=f,t=r)}}}return t??a},O=(e,i)=>{if(i=i??N==="left",S.current){const t=S.current.getBoundingClientRect(),l=$((c-a)*(d?(R?e.clientY-t.top:t.bottom-e.clientY)/t.height:(R?t.right-e.clientX:e.clientX-t.left)/t.width));y(p?n=>{const r=i?0:1;if(n[r]!==l){const f=l-n[r],h=f>0;if(n[r]=l,o.isNumber(_)&&n[1]-n[0]<_){const D=i?1:0;n[D]=$(n[D]+f,h?"ceil":"floor"),n[1]-n[0]<_&&(n[r]=$(n[D]+(h?-_:_),h?"floor":"ceil"))}}}:l)}},L=e=>{if(M&&s&&S.current){const i=S.current.getBoundingClientRect(),t=Math.round((c-a)*(d?(R?e.clientY-s.clientY:s.clientY-e.clientY)/i.height:(R?s.clientX-e.clientX:e.clientX-s.clientX)/i.width)/M)*M,l=[0,0];let n=-1;for(const r of[s.left+t,s.right+t]){n+=1;const f=n===0?1:0;if(r<a){l[n]=a,l[f]=a+Math.abs(s.left-s.right);break}if(r>c){l[n]=c,l[f]=c-Math.abs(s.left-s.right);break}l[n]=r}y(l)}},ee=e=>{const i=(t=!0)=>{const l=t?E.current:T.current;l&&(O(e,t),P(t?"left":"right"),l.firstElementChild.focus({preventScroll:!0}))};if(p){if(E.current&&T.current){const t=E.current.getBoundingClientRect(),l=T.current.getBoundingClientRect(),n=Math.abs(d?t.bottom-t.height/2-e.clientY:e.clientX-(t.left+t.width/2)),r=Math.abs(d?l.bottom-l.height/2-e.clientY:e.clientX-(l.left+l.width/2));K&&(d?e.clientY<Math.max(t.top,l.top):e.clientX>Math.min(t.right,l.right))&&(d?e.clientY>Math.min(t.bottom,l.bottom):e.clientX<Math.max(t.left,l.left))?U({left:b,right:v,clientX:e.clientX,clientY:e.clientY}):r<=n?i(!1):i(!0)}}else i(!0)};g.useEffect(()=>{var e,i,t,l;s?((e=C.current)==null||e.updatePosition(),(i=V.current)==null||i.updatePosition()):N==="left"?(t=C.current)==null||t.updatePosition():N==="right"&&((l=V.current)==null||l.updatePosition())},[I,N,s]);const q=!o.isNull(F)||!o.isNull(s);J(B,"touchmove",e=>{o.isNull(F)||(e.preventDefault(),O({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY})),o.isNull(s)||(e.preventDefault(),L({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}))},{passive:!1},!q),J(B,"mousemove",e=>{o.isNull(F)||(e.preventDefault(),O({clientX:e.clientX,clientY:e.clientY})),o.isNull(s)||(e.preventDefault(),L({clientX:e.clientX,clientY:e.clientY}))},{},!q),J(B,"mouseup",()=>{P(null),U(null)},{},!q);const fe=(()=>{const e=[],i=(t,l=null)=>{let n=t/(c-a)*100;R&&(n=100-n),e.push(g.createElement("div",{...j(Y("slider__mark",{"slider__mark--hidden":t===a||t===c}),{style:{left:d?void 0:`${n}%`,bottom:d?`${n}%`:void 0}}),key:t},l&&g.createElement("div",{...Y("slider__mark-label",{"slider__mark-label.is-active":p?t<=Math.max(b,v)&&t>=Math.min(b,v):t<=b}),key:t},l)))};if(o.isArray(X))X.forEach(t=>{const l=o.isNumber(t)?t:t.value;i(l,o.isNumber(t)?null:t.label)});else if(o.isNumber(X))for(let t=0;t<(c-a)/X;t++){const l=t*X;i(l)}return e})(),te=e=>{const i=e?b:v,t=(ce??[])[e?0:1],l=w.jsx("input",{...Y("slider__input"),...m==null?void 0:m.inputAria,ref:e?k==null?void 0:k[0]:k==null?void 0:k[1],type:"range",value:i,max:c,min:a,step:M??void 0,disabled:Z,"aria-orientation":d?"vertical":"horizontal",onChange:n=>{const r=o.toNumber(n.currentTarget.value);if(p){const f=e?0:1;y(h=>{const D=r-h[f],G=D>0;if(h[f]=r,o.isNumber(_)&&h[1]-h[0]<_){const H=e?1:0;h[H]=$(h[H]+D,G?"ceil":"floor"),h[1]-h[0]<_&&(h[f]=$(h[H]+(G?-_:_),G?"floor":"ceil"))}})}else y(r)},onFocus:()=>{W(e?"left":"right")},onBlur:()=>{W(null)}});return w.jsx(xe,{ref:e?C:V,visible:e?de:he,title:Q?Q(i):i,placement:d?"right":"top",onVisibleChange:n=>{ue(n?e?"left":"right":null)},children:w.jsx("div",{...j(Y("slider__input-wrapper"),{style:{left:d?void 0:`calc(${i} / ${c-a} * 100% - 7px)`,bottom:d?`calc(${i} / ${c-a} * 100% - 7px)`:void 0}}),ref:e?E:T,children:t?t(l):l})})},ie=e=>{e.button===0&&e.preventDefault()},ge=Me({form:m});return w.jsxs("div",{...u,...j(Y("slider",`slider--${d?"vertical":"horizontal"}`,{"slider.is-disabled":Z}),{className:u.className,style:u.style}),...ge,ref:S,onMouseDown:e=>{var i;(i=u.onMouseDown)==null||i.call(u,e),ie(e),e.button===0&&ee(e)},onMouseUp:e=>{var i;(i=u.onMouseUp)==null||i.call(u,e),ie(e)},onTouchStart:e=>{var i;(i=u.onTouchStart)==null||i.call(u,e),ee({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY})},onTouchEnd:e=>{var i;(i=u.onTouchEnd)==null||i.call(u,e),P(null),U(null)},children:[w.jsxs("div",{...Y("slider__track",{"slider__track--reverse":R}),children:[w.jsx("div",{...j(Y("slider__thumb",{"slider__thumb.is-focused":s,"slider__thumb--draggable":K}),{style:d?{bottom:`calc(${Math.min(b,v)} / ${c-a} * 100%)`,top:`calc(${c-Math.max(b,v)} / ${c-a} * 100%)`}:{left:`calc(${Math.min(b,v)} / ${c-a} * 100%)`,right:`calc(${c-Math.max(b,v)} / ${c-a} * 100%)`}})}),te(!0),p&&te(!1)]}),fe]})}export{Ne as S};