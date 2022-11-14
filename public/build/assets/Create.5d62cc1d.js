var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(i,a,t)=>a in i?X(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t,k=(i,a)=>{for(var t in a||(a={}))x.call(a,t)&&j(i,t,a[t]);if(S)for(var t of S(a))ee.call(a,t)&&j(i,t,a[t]);return i},E=(i,a)=>Y(i,Z(a));import{M as G,B as ae,z as te,aF as oe,A as _,k as V,D as p,E as $,G as N,J as se,H as ne,r as m,o as w,l as h,w as d,f as s,u as e,h as y,e as re,y as le,F as ue,m as ie,j as de,i as me,t as ce,N as pe}from"./vendor.c29fa1eb.js";import{b as ge}from"./main.02f9c92c.js";import{u as fe}from"./users.563d9224.js";var ve={name:"ValidateEach",props:{rules:{type:Object,required:!0},state:{type:Object,required:!0},options:{type:Object,default:()=>({})}},setup(i,{slots:a}){const t=G(i.rules,i.state,i.options);return()=>a.default({v:t.value})}};const $e=["onSubmit"],De={class:"grid grid-cols-12"},be={class:"space-y-6"},he={setup(i){const a=fe(),{t}=ae(),q=te(),F=oe(),L=ge();let g=_(!1),l=_(!1);_([]);let I=_([]);const f=V(()=>q.name==="users.edit"),M=V(()=>f.value?t("users.edit_user"):t("users.new_user")),P=V(()=>({userData:{name:{required:p.withMessage(t("validation.required"),$),minLength:p.withMessage(t("validation.name_min_length",{count:3}),N(3))},email:{required:p.withMessage(t("validation.required"),$),email:p.withMessage(t("validation.email_incorrect"),se)},password:{required:ne(function(){return p.withMessage(t("validation.required"),$),!f.value}),minLength:p.withMessage(t("validation.password_min_length",{count:8}),N(8))},companies:{required:p.withMessage(t("validation.required"),$)}}})),H={role:{required:p.withMessage(t("validation.required"),$)}},n=G(P,a,{$scope:!0});O(),a.resetUserData();async function O(){var u;l.value=!0;try{f.value&&await a.fetchUser(q.params.id);let o=await L.fetchUserCompanies();((u=o==null?void 0:o.data)==null?void 0:u.data)&&(I.value=o.data.data.map(c=>(c.role=null,c)))}catch{l.value=!1}l.value=!1}async function R(){if(n.value.$touch(),n.value.$invalid)return!0;try{g.value=!0;let u=E(k({},a.userData),{companies:a.userData.companies.map(c=>({role:c.role,id:c.id}))});await(f.value?a.updateUser:a.addUser)(u),F.push("/admin/users"),g.value=!1}catch{g.value=!1}}return(u,o)=>{const c=m("BaseBreadcrumbItem"),z=m("BaseBreadcrumb"),A=m("BasePageHeader"),D=m("BaseInput"),v=m("BaseInputGroup"),U=m("BaseMultiselect"),T=m("BaseInputGrid"),J=m("BaseIcon"),K=m("BaseButton"),Q=m("BaseCard"),W=m("BasePage");return w(),h(W,null,{default:d(()=>[s(A,{title:e(M)},{default:d(()=>[s(z,null,{default:d(()=>[s(c,{title:u.$t("general.home"),to:"dashboard"},null,8,["title"]),s(c,{title:u.$tc("users.user",2),to:"/admin/users"},null,8,["title"]),s(c,{title:e(M),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),y("form",{action:"",autocomplete:"off",onSubmit:pe(R,["prevent"])},[y("div",De,[s(Q,{class:"mt-6 col-span-12 md:col-span-8"},{default:d(()=>[s(T,{layout:"one-column"},{default:d(()=>[s(v,{"content-loading":e(l),label:u.$t("users.name"),error:e(n).userData.name.$error&&e(n).userData.name.$errors[0].$message,required:""},{default:d(()=>[s(D,{modelValue:e(a).userData.name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(a).userData.name=r),modelModifiers:{trim:!0},"content-loading":e(l),invalid:e(n).userData.name.$error,onInput:o[1]||(o[1]=r=>e(n).userData.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error"]),s(v,{"content-loading":e(l),label:u.$t("users.email"),error:e(n).userData.email.$error&&e(n).userData.email.$errors[0].$message,required:""},{default:d(()=>[s(D,{modelValue:e(a).userData.email,"onUpdate:modelValue":o[2]||(o[2]=r=>e(a).userData.email=r),modelModifiers:{trim:!0},type:"email","content-loading":e(l),invalid:e(n).userData.email.$error,onInput:o[3]||(o[3]=r=>e(n).userData.email.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error"]),s(v,{"content-loading":e(l),label:u.$t("users.companies"),error:e(n).userData.companies.$error&&e(n).userData.companies.$errors[0].$message,required:""},{default:d(()=>[s(U,{modelValue:e(a).userData.companies,"onUpdate:modelValue":o[4]||(o[4]=r=>e(a).userData.companies=r),mode:"tags",object:!0,autocomplete:"new-password",label:"name",options:e(I),"value-prop":"id",invalid:e(n).userData.companies.$error,"content-loading":e(l),searchable:"","can-deselect":!1,class:"w-full","track-by":"name"},null,8,["modelValue","options","invalid","content-loading"])]),_:1},8,["content-loading","label","error"]),(w(!0),re(ue,null,le(e(a).userData.companies,(r,b)=>(w(),h(e(ve),{key:b,state:r,rules:H},{default:d(({v:B})=>[y("div",be,[s(v,{"content-loading":e(l),label:u.$t("users.select_company_role",{company:r.name}),error:B.role.$error&&B.role.$errors[0].$message,required:""},{default:d(()=>[s(U,{modelValue:e(a).userData.companies[b].role,"onUpdate:modelValue":C=>e(a).userData.companies[b].role=C,"value-prop":"name","track-by":"id",autocomplete:"off","content-loading":e(l),label:"name",options:e(a).userData.companies[b].roles,"can-deselect":!1,invalid:B.role.$invalid,onChange:C=>B.role.$touch()},null,8,["modelValue","onUpdate:modelValue","content-loading","options","invalid","onChange"])]),_:2},1032,["content-loading","label","error"])])]),_:2},1032,["state"]))),128)),s(v,{"content-loading":e(l),label:u.$tc("users.password"),error:e(n).userData.password.$error&&e(n).userData.password.$errors[0].$message,required:!e(f)},{default:d(()=>[s(D,{modelValue:e(a).userData.password,"onUpdate:modelValue":o[5]||(o[5]=r=>e(a).userData.password=r),name:"new-password",autocomplete:"new-password","content-loading":e(l),type:"password",invalid:e(n).userData.password.$error,onInput:o[6]||(o[6]=r=>e(n).userData.password.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error","required"]),s(v,{"content-loading":e(l),label:u.$t("users.phone")},{default:d(()=>[s(D,{modelValue:e(a).userData.phone,"onUpdate:modelValue":o[7]||(o[7]=r=>e(a).userData.phone=r),modelModifiers:{trim:!0},"content-loading":e(l)},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"])]),_:1}),s(K,{"content-loading":e(l),type:"submit",loading:e(g),disabled:e(g),class:"mt-6"},{left:d(r=>[e(g)?de("",!0):(w(),h(J,{key:0,name:"SaveIcon",class:ie(r.class)},null,8,["class"]))]),default:d(()=>[me(" "+ce(e(f)?u.$t("users.update_user"):u.$t("users.save_user")),1)]),_:1},8,["content-loading","loading","disabled"])]),_:1})])],40,$e)]),_:1})}}};export{he as default};