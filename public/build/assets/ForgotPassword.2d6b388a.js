var M=Object.defineProperty,N=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var B=(a,e,t)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,$=(a,e)=>{for(var t in e||(e={}))D.call(e,t)&&B(a,t,e[t]);if(h)for(var t of h(e))A.call(e,t)&&B(a,t,e[t]);return a},b=(a,e)=>N(a,j(e));import{B as C,z as E,U as G,A as y,k as U,D as k,E as z,J as F,M as J,r as u,o as c,e as p,f as m,w as v,u as r,t as _,h as L,i as P,N as R}from"./vendor.c29fa1eb.js";import{u as T}from"./auth.907d9133.js";import"./main.02f9c92c.js";const H=["onSubmit"],K={key:0},O={key:1},Q={class:"mt-4 mb-4 text-sm"},ee={setup(a){const e=T(),{t}=C(),S=E(),l=G({email:"",company:""}),f=y(!1),n=y(!1),V=U(()=>({email:{required:k.withMessage(t("validation.required"),z),email:k.withMessage(t("validation.email_incorrect"),F)}})),o=J(V,l);function w(i){if(o.value.$touch(),o.value.$invalid)return!0;n.value=!0;let s=b($({},l),{company:S.params.company});e.forgotPassword(s).then(d=>{n.value=!1}).catch(d=>{n.value=!1}),f.value=!0}return(i,s)=>{const d=u("BaseInput"),I=u("BaseInputGroup"),q=u("BaseButton"),x=u("router-link");return c(),p("form",{id:"loginForm",onSubmit:R(w,["prevent"])},[m(I,{error:r(o).email.$error&&r(o).email.$errors[0].$message,label:i.$t("login.enter_email"),class:"mb-4",required:""},{default:v(()=>[m(d,{modelValue:r(l).email,"onUpdate:modelValue":s[0]||(s[0]=g=>r(l).email=g),type:"email",name:"email",invalid:r(o).email.$error,onInput:s[1]||(s[1]=g=>r(o).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),m(q,{loading:n.value,disabled:n.value,type:"submit",variant:"primary"},{default:v(()=>[f.value?(c(),p("div",O,_(i.$t("validation.not_yet")),1)):(c(),p("div",K,_(i.$t("validation.send_reset_link")),1))]),_:1},8,["loading","disabled"]),L("div",Q,[m(x,{to:"login",class:"text-sm text-primary-400 hover:text-gray-700"},{default:v(()=>[P(_(i.$t("general.back_to_login")),1)]),_:1})])],40,H)}}};export{ee as default};
