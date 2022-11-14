import{B as C,aF as M,A as w,D as p,E as $,J as E,M as j,k as y,r as l,o as c,e as A,f as n,w as u,u as e,l as B,x as _,h as b,i as h,t as I,N as F,a as G}from"./vendor.c29fa1eb.js";import{u as L,a as R}from"./main.02f9c92c.js";const T=["onSubmit"],U={class:"mt-5 mb-8"},J={class:"mb-4"},H={setup(O){const k=L(),s=R(),{t:m}=C(),V=M(),d=w(!1);let o=w(!1);const x={email:{required:p.withMessage(m("validation.required"),$),email:p.withMessage(m("validation.email_incorrect"),E)},password:{required:p.withMessage(m("validation.required"),$)}},t=j(x,y(()=>s.loginData)),S=y(()=>o.value?"text":"password");async function D(){if(G.defaults.withCredentials=!0,t.value.$touch(),t.value.$invalid)return!0;d.value=!0;try{d.value=!0,await s.login(s.loginData),V.push("/admin/dashboard"),k.showNotification({type:"success",message:"Logged in successfully."})}catch{d.value=!1}}return(i,a)=>{const f=l("BaseInput"),g=l("BaseInputGroup"),v=l("BaseIcon"),q=l("router-link"),N=l("BaseButton");return c(),A("form",{id:"loginForm",class:"mt-12 text-left",onSubmit:F(D,["prevent"])},[n(g,{error:e(t).email.$error&&e(t).email.$errors[0].$message,label:i.$t("login.email"),class:"mb-4",required:""},{default:u(()=>[n(f,{modelValue:e(s).loginData.email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).loginData.email=r),invalid:e(t).email.$error,focus:"",type:"email",name:"email",onInput:a[1]||(a[1]=r=>e(t).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),n(g,{error:e(t).password.$error&&e(t).password.$errors[0].$message,label:i.$t("login.password"),class:"mb-4",required:""},{default:u(()=>[n(f,{modelValue:e(s).loginData.password,"onUpdate:modelValue":a[4]||(a[4]=r=>e(s).loginData.password=r),invalid:e(t).password.$error,type:e(S),name:"password",onInput:a[5]||(a[5]=r=>e(t).password.$touch())},{right:u(()=>[e(o)?(c(),B(v,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:a[2]||(a[2]=r=>_(o)?o.value=!e(o):o=!e(o))})):(c(),B(v,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:a[3]||(a[3]=r=>_(o)?o.value=!e(o):o=!e(o))}))]),_:1},8,["modelValue","invalid","type"])]),_:1},8,["error","label"]),b("div",U,[b("div",J,[n(q,{to:"forgot-password",class:"text-sm text-primary-400 hover:text-gray-700"},{default:u(()=>[h(I(i.$t("login.forgot_password")),1)]),_:1})])]),n(N,{loading:d.value,type:"submit"},{default:u(()=>[h(I(i.$t("login.login")),1)]),_:1},8,["loading"])],40,T)}}};export{H as default};
