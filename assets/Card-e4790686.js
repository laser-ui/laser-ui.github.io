import{r as C,u as i,b as l,j as s,m as _,l as v,S as N}from"./index-23b78b6e.js";const h={card:"^card","card--shadow":"^card--shadow","card--shadow-hover":"^card--shadow-hover",card__header:"^card__header","card__header-title":"^card__header-title","card__header-action":"^card__header-action",card__content:"^card__content",card__actions:"^card__actions",card__action:"^card__action","card__action.is-disabled":"is-disabled"},b=C.forwardRef((t,n)=>{const{styleOverrides:e,styleProvider:d,children:c,disabled:a=!1,...r}=i("CardAction",t),o=l(h,{card:d==null?void 0:d.card},e);return s.jsx("div",{...r,..._(o("card__action",{"card__action.is-disabled":a}),{className:r.className,style:r.style}),ref:n,role:r.role??"button",tabIndex:r.tabIndex??(a?-1:0),children:c})});function f(t){const{styleOverrides:n,styleProvider:e,children:d,...c}=i("CardContent",t),a=l(h,{card:e==null?void 0:e.card},n);return s.jsx("div",{...c,..._(a("card__content"),{className:c.className,style:c.style}),children:d})}function p(t){const{styleOverrides:n,styleProvider:e,children:d,action:c,...a}=i("CardHeader",t),r=l(h,{card:e==null?void 0:e.card},n);return s.jsxs("div",{...a,..._(r("card__header"),{className:a.className,style:a.style}),children:[s.jsx("div",{...r("card__header-title"),children:d}),s.jsx("div",{...r("card__header-action"),children:c})]})}const m=t=>{const{children:n,styleOverrides:e,styleProvider:d,shadow:c=!1,header:a,actions:r,...o}=i("Card",t),x=l(h,{card:d==null?void 0:d.card},e),u=(()=>{if(a)return v.isString(a)?s.jsx(p,{children:a}):a})();return s.jsxs("div",{...o,..._(x("card",{"card--shadow":c===!0,"card--shadow-hover":c==="hover"}),{className:o.className,style:o.style}),children:[u,n,r&&s.jsx("div",{...x("card__actions"),children:C.Children.map(r,(y,j)=>s.jsxs(s.Fragment,{children:[y,j!==r.length-1&&s.jsx(N,{style:{margin:8},vertical:!0})]}))})]})};m.Header=p;m.Content=f;m.Action=b;export{m as C};
