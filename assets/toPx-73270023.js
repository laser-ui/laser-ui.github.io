import{l}from"./index-23b78b6e.js";function d(e,i){let t=0;if(e.length===0||/^0(?!\.)/.test(e))t=0;else if(/^-?[0-9]+px$/.test(e))t=l.toNumber(e.slice(0,e.length-2));else{const o=document.createElement("div");o.style.cssText=`visibility:hidden;position:absolute;top:-999px;left:-999px;width:${e};`,document.body.appendChild(o),t=o.clientWidth,document.body.removeChild(o)}return i?t:t+"px"}export{d as t};
