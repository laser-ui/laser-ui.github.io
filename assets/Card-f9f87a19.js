import{r as C,u as o,b as i,j as c,m as l,S as y}from"./index-2f96817f.js";const _={card:"^card","card--shadow":"^card--shadow","card--shadow-hover":"^card--shadow-hover",card__header:"^card__header","card__header-title":"^card__header-title","card__header-action":"^card__header-action",card__content:"^card__content",card__actions:"^card__actions",card__action:"^card__action","card__action.is-disabled":"is-disabled"},u=C.forwardRef((t,n)=>{const{styleOverrides:a,styleProvider:r,children:e,disabled:s=!1,...d}=o("CardAction",t),m=i(_,{card:r==null?void 0:r.card},a);return c.jsx("div",{...d,...l(m("card__action",{"card__action.is-disabled":s}),{className:d.className,style:d.style}),ref:n,role:d.role??"button",tabIndex:d.tabIndex??(s?-1:0),children:e})});function x(t){const{styleOverrides:n,styleProvider:a,actions:r,...e}=o("CardActions",t),s=i(_,{card:a==null?void 0:a.card},n);return c.jsx("div",{...e,...l(s("card__actions"),{className:e.className,style:e.style}),children:C.Children.map(r,(d,m)=>c.jsxs(c.Fragment,{children:[d,m!==r.length-1&&c.jsx(y,{style:{margin:8},vertical:!0})]}))})}function p(t){const{styleOverrides:n,styleProvider:a,children:r,...e}=o("CardContent",t),s=i(_,{card:a==null?void 0:a.card},n);return c.jsx("div",{...e,...l(s("card__content"),{className:e.className,style:e.style}),children:r})}function v(t){const{styleOverrides:n,styleProvider:a,children:r,action:e,...s}=o("CardHeader",t),d=i(_,{card:a==null?void 0:a.card},n);return c.jsxs("div",{...s,...l(d("card__header"),{className:s.className,style:s.style}),children:[c.jsx("div",{...d("card__header-title"),children:r}),c.jsx("div",{...d("card__header-action"),children:e})]})}const h=t=>{const{children:n,styleOverrides:a,styleProvider:r,shadow:e=!1,...s}=o("Card",t),d=i(_,{card:r==null?void 0:r.card},a);return c.jsx("div",{...s,...l(d("card",{"card--shadow":e===!0,"card--shadow-hover":e==="hover"}),{className:s.className,style:s.style}),children:n})};h.Header=v;h.Content=p;h.Actions=x;h.Action=u;export{h as C};