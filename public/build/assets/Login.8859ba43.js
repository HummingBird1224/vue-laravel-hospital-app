var T=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var B=(s,a,t)=>a in s?T(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,b=(s,a)=>{for(var t in a||(a={}))F.call(a,t)&&B(s,t,a[t]);if(D)for(var t of D(a))G.call(a,t)&&B(s,t,a[t]);return s},I=(s,a)=>z(s,A(a));import{aF as L,z as O,B as P,A as _,k as h,D as v,E as k,J as R,M as U,r as c,o as w,e as J,f as i,w as m,u as e,l as V,h as S,i as q,t as x,m as H,N as K}from"./vendor.c29fa1eb.js";import{u as Q}from"./auth.907d9133.js";import"./main.02f9c92c.js";const W=["onSubmit"],X={class:"flex items-center justify-between"},oe={setup(s){const a=L(),t=O(),l=Q(),{t:g}=P();let p=_(!1);const u=_(!1),C=h(()=>u.value?"text":"password"),j=h(()=>({loginData:{email:{required:v.withMessage(g("validation.required"),k),email:v.withMessage(g("validation.email_incorrect"),R)},password:{required:v.withMessage(g("validation.required"),k)}}})),r=U(j,l);async function M(){if(r.value.loginData.$touch(),r.value.loginData.$invalid)return!0;p.value=!0;let d=I(b({},l.loginData),{company:t.params.company});try{return await l.login(d),p.value=!1,a.push({name:"customer.dashboard"});l.$reset()}catch{p.value=!1}}return(d,o)=>{const $=c("BaseInput"),y=c("BaseInputGroup"),f=c("BaseIcon"),E=c("router-link"),N=c("BaseButton");return w(),J("form",{id:"loginForm",class:"space-y-6",action:"#",method:"POST",onSubmit:K(M,["prevent"])},[i(y,{error:e(r).loginData.email.$error&&e(r).loginData.email.$errors[0].$message,label:d.$t("login.email"),class:"mb-4",required:""},{default:m(()=>[i($,{modelValue:e(l).loginData.email,"onUpdate:modelValue":o[0]||(o[0]=n=>e(l).loginData.email=n),type:"email",invalid:e(r).loginData.email.$error,onInput:o[1]||(o[1]=n=>e(r).loginData.email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),i(y,{error:e(r).loginData.password.$error&&e(r).loginData.password.$errors[0].$message,label:d.$t("login.password"),class:"mb-4",required:""},{default:m(()=>[i($,{modelValue:e(l).loginData.password,"onUpdate:modelValue":o[4]||(o[4]=n=>e(l).loginData.password=n),type:e(C),invalid:e(r).loginData.password.$error,onInput:o[5]||(o[5]=n=>e(r).loginData.password.$touch())},{right:m(()=>[u.value?(w(),V(f,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:o[2]||(o[2]=n=>u.value=!u.value)})):(w(),V(f,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:o[3]||(o[3]=n=>u.value=!u.value)}))]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["error","label"]),S("div",X,[i(E,{to:{name:"customer.forgot-password"},class:"text-sm text-primary-600 hover:text-gray-500"},{default:m(()=>[q(x(d.$t("login.forgot_password")),1)]),_:1},8,["to"])]),S("div",null,[i(N,{loading:e(p),disabled:e(p),type:"submit",class:"w-full justify-center"},{left:m(n=>[i(f,{name:"LockClosedIcon",class:H(n.class)},null,8,["class"])]),default:m(()=>[q(" "+x(d.$t("login.login")),1)]),_:1},8,["loading","disabled"])])],40,W)}}};export{oe as default};