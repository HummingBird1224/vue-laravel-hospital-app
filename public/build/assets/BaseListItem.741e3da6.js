import{g as o}from"./main.02f9c92c.js";import{o as n,e as c,g as i,k as l,r as m,l as d,w as f,j as _,h as $,t as h,s as B}from"./vendor.c29fa1eb.js";const g={name:"List"},k={class:"list-none"};function v(e,r,t,s,a,p){return n(),c("div",k,[i(e.$slots,"default")])}var L=o(g,[["render",v]]);const x={name:"ListItem",props:{title:{type:String,required:!1,default:""},active:{type:Boolean,required:!0},index:{type:Number,default:null}},setup(e,{slots:r}){const t="cursor-pointer pb-2 pr-0 text-sm font-medium leading-5  flex items-center";let s=l(()=>!!r.icon),a=l(()=>e.active?`${t} text-primary-500`:`${t} text-gray-500`);return{hasIconSlot:s,containerClass:a}}},y={key:0,class:"mr-3"};function C(e,r,t,s,a,p){const u=m("router-link");return n(),d(u,B(e.$attrs,{class:s.containerClass}),{default:f(()=>[s.hasIconSlot?(n(),c("span",y,[i(e.$slots,"icon")])):_("",!0),$("span",null,h(t.title),1)]),_:3},16,["class"])}var b=o(x,[["render",C]]);export{b as B,L as a};