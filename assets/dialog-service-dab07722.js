import{an as l}from"./index-e8505753.js";let g=0;class o{static open(s,e,i){const t=i??++g;return l.set("dialogs",a=>{a.push({key:t,type:s,props:{...e,visible:!0,skipFirstTransition:!1,afterVisibleChange:d=>{var r;if((r=e.afterVisibleChange)==null||r.call(e,d),!d){const c=l.get("dialogs").findIndex(n=>n.key===t);c!==-1&&l.set("dialogs",n=>{n.splice(c,1)})}}}})}),{key:t,close:()=>{o.close(t)},rerender:a=>{o.rerender(t,s,a)}}}static close(s){const e=l.get("dialogs").findIndex(i=>i.key===s);e!==-1&&l.set("dialogs",i=>{i[e].props.visible=!1})}static rerender(s,e,i){const t=l.get("dialogs").findIndex(a=>a.key===s);t!==-1&&l.set("dialogs",a=>{a.splice(t,1,{key:s,type:e,props:Object.assign(a[t].props,i)})})}static closeAll(s=!0){s?l.set("dialogs",e=>{e.forEach(i=>{i.props.visible=!1})}):l.set("dialogs",[])}}export{o as D};