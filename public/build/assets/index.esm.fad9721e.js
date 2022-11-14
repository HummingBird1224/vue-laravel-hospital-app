import{R as c,u as a,aH as s,aI as u}from"./vendor.c29fa1eb.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function i(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o}const O=typeof window!="undefined",d=t=>typeof t=="string",h=()=>{};function f(t,n){function o(...e){t(()=>n.apply(this,e),{fn:n,thisArg:this,args:e})}return o}const p=t=>t();function l(t){let n;return e=>{const r=a(t);if(n&&clearTimeout(n),r<=0)return e();n=setTimeout(e,r)}}function b(t,n,o={}){const{eventFilter:e=p}=o,r=i(o,["eventFilter"]);return c(t,f(e,n),r)}function w(t,n,o={}){const{debounce:e=0}=o,r=i(o,["debounce"]);return b(t,n,Object.assign(Object.assign({},r),{eventFilter:l(e)}))}function g(t){return s()?(u(t),!0):!1}export{d as a,w as d,O as i,h as n,g as t};
