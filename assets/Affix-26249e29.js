import{u as j,a as q,d as w,r as l,e as u,l as f,f as A,g as P,h as T,i as m,j as R}from"./index-0bc3a1b4.js";import{g as S}from"./getOffsetToRoot-b0d8a59f.js";import{t as $}from"./toPx-8baa6d9b.js";function U(E){const{ref:I,children:d,top:c=0,target:i,zIndex:p}=j("Affix",E),z=q(),{pageScrollRef:C,contentResizeRef:k}=w(),s=l.useId(),e=u(()=>document.querySelector(`[data-l-affix="${s}"]`)),r=u(()=>document.querySelector(`[data-l-affix-placeholder="${s}"]`)),n=u(f.isUndefined(i)?()=>C.current:i),[o,v]=l.useState(!1),t=A(()=>{if(e.current&&r.current&&n.current){const y=o?r.current:e.current,a=y.getBoundingClientRect(),x=S(n.current),h=f.isString(c)?$(c,!0):c,g=Math.ceil(n.current.scrollTop)+h>=S(y)-x;v(g),g?(e.current.style.position="fixed",e.current.style.top=(f.isUndefined(i)?x:n.current.getBoundingClientRect().top)+h+"px",e.current.style.left=a.left+"px",e.current.style.width=a.width+"px",e.current.style.height=a.height+"px",e.current.style.zIndex=p?String(p):`var(--${z}-zindex-sticky)`,r.current.style.display=""):(e.current.style.position="",e.current.style.top="",e.current.style.left="",e.current.style.width="",e.current.style.height="",e.current.style.zIndex="",r.current.style.display="none")}});return P(()=>{t()},[]),T(e,t),m(o?r:e,t),m(k,t),l.useImperativeHandle(I,()=>({sticky:o,updatePosition:t}),[o,t]),R.jsxs(R.Fragment,{children:[d({style:{visibility:"hidden"},"aria-hidden":!0,"data-l-affix-placeholder":s}),d({"data-l-affix":s})]})}export{U as A};
