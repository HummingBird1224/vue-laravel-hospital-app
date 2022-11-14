import{h as a}from"./auth.907d9133.js";import{a as n}from"./vendor.c29fa1eb.js";const{defineStore:s}=window.pinia,d=s({id:"customerInvoiceStore",state:()=>({totalInvoices:0,invoices:[],selectedViewInvoice:[]}),actions:{fetchInvoices(e,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices`,{params:e}).then(t=>{this.invoices=t.data.data,this.totalInvoices=t.data.meta.invoiceTotalCount,o(t)}).catch(t=>{a(t),c(t)})})},fetchViewInvoice(e,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices/${e.id}`,{params:e}).then(t=>{this.selectedViewInvoice=t.data.data,o(t)}).catch(t=>{a(t),c(t)})})},searchInvoice(e,i){return new Promise((o,c)=>{n.get(`/api/v1/${i}/customer/invoices`,{params:e}).then(t=>{this.invoices=t.data,o(t)}).catch(t=>{a(t),c(t)})})}}});export{d as u};
