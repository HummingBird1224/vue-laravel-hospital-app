import{o as h,e as K,h as a,m as o,B as Q,ab as Y,z as ee,A as B,U as le,k as M,r as i,l as g,w as t,f as l,q as I,aa as Z,u as r,i as p,t as C,j as te}from"./vendor.c29fa1eb.js";import{u as ae}from"./invoice.2281bfd8.js";import oe from"./BaseTable.89e1ce0d.js";import{u as ne}from"./global.71eadfed.js";import{d as se}from"./index.esm.fad9721e.js";import"./auth.907d9133.js";import"./main.02f9c92c.js";import"./moment.08a7f518.js";const ie={width:"154",height:"110",viewBox:"0 0 154 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re={"clip-path":"url(#clip0)"},de=a("defs",null,[a("clipPath",{id:"clip0"},[a("rect",{width:"153.043",height:"110",fill:"white"})])],-1),ce={props:{primaryFillColor:{type:String,default:"fill-primary-500"},secondaryFillColor:{type:String,default:"fill-gray-600"}},setup(n){return(u,V)=>(h(),K("svg",ie,[a("g",re,[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M33.4784 93.2609C33.4784 94.5809 32.4071 95.6522 31.0871 95.6522C29.7671 95.6522 28.6958 94.5809 28.6958 93.2609C28.6958 91.9409 29.7671 90.8696 31.0871 90.8696C32.4071 90.8696 33.4784 91.9409 33.4784 93.2609Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M78.913 93.2609C78.913 94.5809 77.8417 95.6522 76.5217 95.6522C75.2017 95.6522 74.1304 94.5809 74.1304 93.2609C74.1304 91.9409 75.2017 90.8696 76.5217 90.8696C77.8417 90.8696 78.913 91.9409 78.913 93.2609Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M124.348 93.2609C124.348 94.5809 123.277 95.6522 121.957 95.6522C120.637 95.6522 119.565 94.5809 119.565 93.2609C119.565 91.9409 120.637 90.8696 121.957 90.8696C123.277 90.8696 124.348 91.9409 124.348 93.2609Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M148.261 54.9999C149.578 54.9999 150.652 56.0736 150.652 57.3913V83.6956C150.652 87.658 147.441 90.8695 143.478 90.8695H137.352V93.2608H143.478C148.761 93.2608 153.043 88.978 153.043 83.6956V57.3913C153.043 54.7489 150.903 52.6086 148.261 52.6086H4.78261C2.14022 52.6086 0 54.7489 0 57.3913V83.6956C0 88.978 4.28283 93.2608 9.56522 93.2608H15.4478V90.8695H9.56522C5.60283 90.8695 2.3913 87.658 2.3913 83.6956V57.3913C2.3913 56.0713 3.46261 54.9999 4.78261 54.9999H148.261ZM106.243 90.8695H91.7113L92.1011 93.2608H106.145L106.243 90.8695ZM60.8946 90.8695H46.5587L46.4607 93.2608H60.6985L60.8946 90.8695Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.2611 45.4348H23.9133C22.5933 45.4348 21.522 46.5061 21.522 47.8261V52.6087C21.522 53.9287 22.5933 55 23.9133 55H38.2611C39.5811 55 40.6524 53.9287 40.6524 52.6087V47.8261C40.6524 46.5061 39.5811 45.4348 38.2611 45.4348ZM23.9133 52.6087H38.2611V47.8261H23.9133V52.6087Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.6957 62.174C28.6957 63.494 27.6244 64.5653 26.3044 64.5653C24.9844 64.5653 23.9131 63.494 23.9131 62.174C23.9131 60.854 24.9844 59.7827 26.3044 59.7827C27.6244 59.7827 28.6957 60.854 28.6957 62.174Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.2606 62.174C38.2606 63.494 37.1893 64.5653 35.8693 64.5653C34.5493 64.5653 33.478 63.494 33.478 62.174C33.478 60.854 34.5493 59.7827 35.8693 59.7827C37.1893 59.7827 38.2606 60.854 38.2606 62.174Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M59.7826 64.5653H45.4348C44.1195 64.5653 43.0435 63.4892 43.0435 62.174C43.0435 60.8588 44.1195 59.7827 45.4348 59.7827H59.7826C61.0978 59.7827 62.1739 60.8588 62.1739 62.174C62.1739 63.4892 61.0978 64.5653 59.7826 64.5653Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M101.793 40.0497L118.533 11.354L119.982 13.6162L104.754 39.722L101.793 40.0497Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M110.163 40.0496L124.556 15.3761L127.383 15.2781L112.973 39.9826L110.163 40.0496Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M74.1304 7.17402H119.565V4.78271H74.1304V7.17402Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M74.1304 14.3478H119.565V11.9565H74.1304V14.3478Z",class:o(n.primaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M71.7389 2.3913V16.7391H50.2172C48.8996 16.7391 47.8259 15.6654 47.8259 14.3478V11.9565H45.4346V14.3478C45.4346 16.9902 47.5748 19.1304 50.2172 19.1304H74.1302V0H50.2172C47.5748 0 45.4346 2.14022 45.4346 4.78261V7.17391H47.8259V4.78261C47.8259 3.465 48.8996 2.3913 50.2172 2.3913H71.7389Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M124.348 2.39136C120.385 2.39136 117.174 5.60288 117.174 9.56527C117.174 13.5277 120.385 16.7392 124.348 16.7392C128.31 16.7392 131.522 13.5277 131.522 9.56527C131.522 5.60288 128.31 2.39136 124.348 2.39136ZM124.348 4.78266C126.985 4.78266 129.13 6.92766 129.13 9.56527C129.13 12.2029 126.985 14.3479 124.348 14.3479C121.71 14.3479 119.565 12.2029 119.565 9.56527C119.565 6.92766 121.71 4.78266 124.348 4.78266Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M108.902 38.261C98.1965 38.261 89.1358 45.2986 86.0869 55.0001H131.718C128.669 45.2986 119.608 38.261 108.902 38.261ZM108.902 40.6523C117.219 40.6523 124.608 45.3416 128.191 52.6088H89.6141C93.1963 45.3416 100.585 40.6523 108.902 40.6523Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M31.0868 76.5217C21.842 76.5217 14.3477 84.0161 14.3477 93.2609C14.3477 102.506 21.842 110 31.0868 110C40.3316 110 47.8259 102.506 47.8259 93.2609C47.8259 84.0161 40.3316 76.5217 31.0868 76.5217ZM31.0868 78.913C38.9972 78.913 45.4346 85.3504 45.4346 93.2609C45.4346 101.171 38.9972 107.609 31.0868 107.609C23.1764 107.609 16.739 101.171 16.739 93.2609C16.739 85.3504 23.1764 78.913 31.0868 78.913Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M121.956 76.5217C112.712 76.5217 105.217 84.0161 105.217 93.2609C105.217 102.506 112.712 110 121.956 110C131.201 110 138.696 102.506 138.696 93.2609C138.696 84.0161 131.201 76.5217 121.956 76.5217ZM121.956 78.913C129.867 78.913 136.304 85.3504 136.304 93.2609C136.304 101.171 129.867 107.609 121.956 107.609C114.046 107.609 107.609 101.171 107.609 93.2609C107.609 85.3504 114.046 78.913 121.956 78.913Z",class:o(n.secondaryFillColor)},null,2),a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M76.5218 76.5217C67.2771 76.5217 59.7827 84.0161 59.7827 93.2609C59.7827 102.506 67.2771 110 76.5218 110C85.7666 110 93.261 102.506 93.261 93.2609C93.261 84.0161 85.7666 76.5217 76.5218 76.5217ZM76.5218 78.913C84.4323 78.913 90.8697 85.3504 90.8697 93.2609C90.8697 101.171 84.4323 107.609 76.5218 107.609C68.6114 107.609 62.174 101.171 62.174 93.2609C62.174 85.3504 68.6114 78.913 76.5218 78.913Z",class:o(n.secondaryFillColor)},null,2)]),de]))}},ue=a("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),me={class:"relative table-container"},Be={setup(n){const{t:u}=Q();Y("utils"),ee();const V=B(null);let H=B(!0),v=B(!1);const x=B(["DRAFT","DUE","SENT","VIEWED","COMPLETED"]),s=le({status:"",from_date:"",to_date:"",invoice_number:""}),_=ae(),F=ne();M(()=>F.currency);const L=M(()=>[{key:"invoice_date",label:u("invoices.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"invoice_number",label:u("invoices.number")},{key:"status",label:u("invoices.status")},{key:"paid_status",label:u("invoices.paid_status")},{key:"due_amount",label:u("dashboard.recent_invoices_card.amount_due")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]),k=M(()=>!_.totalInvoices&&!H.value);se(s,()=>{P()},{debounce:500});function E(){V.value.refresh()}function P(){E()}function w(){s.status="",s.from_date="",s.to_date="",s.invoice_number=""}function j(){v.value&&w(),v.value=!v.value}async function N({page:d,sort:c}){let y={status:s.status,invoice_number:s.invoice_number,from_date:s.from_date,to_date:s.to_date,orderByField:c.fieldName||"created_at",orderBy:c.order||"desc",page:d};H.value=!0;let f=await _.fetchInvoices(y,F.companySlug);return H.value=!1,{data:f.data.data,pagination:{totalPages:f.data.meta.last_page,currentPage:d,totalCount:f.data.meta.total,limit:10}}}return(d,c)=>{const y=i("BaseBreadcrumbItem"),f=i("BaseBreadcrumb"),m=i("BaseIcon"),T=i("BaseButton"),U=i("BasePageHeader"),z=i("BaseSelectInput"),b=i("BaseInputGroup"),W=i("BaseInput"),$=i("BaseDatePicker"),G=i("BaseFilterWrapper"),A=i("BaseEmptyPlaceholder"),D=i("router-link"),R=i("BaseFormatMoney"),S=i("BaseInvoiceStatusBadge"),q=i("BaseDropdownItem"),O=i("BaseDropdown"),X=i("BasePage");return h(),g(X,null,{default:t(()=>[l(U,{title:d.$t("invoices.title")},{actions:t(()=>[I(l(T,{variant:"primary-outline",onClick:j},{right:t(e=>[r(v)?(h(),g(m,{key:1,name:"XIcon",class:o(e.class)},null,8,["class"])):(h(),g(m,{key:0,name:"FilterIcon",class:o(e.class)},null,8,["class"]))]),default:t(()=>[p(C(d.$t("general.filter"))+" ",1)]),_:1},512),[[Z,r(_).totalInvoices]])]),default:t(()=>[l(f,null,{default:t(()=>[l(y,{title:d.$t("general.home"),to:`/${r(F).companySlug}/customer/dashboard`},null,8,["title","to"]),l(y,{title:d.$tc("invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),I(l(G,{onClear:w},{default:t(()=>[l(b,{label:d.$t("invoices.status"),class:"px-3"},{default:t(()=>[l(z,{modelValue:r(s).status,"onUpdate:modelValue":c[0]||(c[0]=e=>r(s).status=e),options:x.value,searchable:"","allow-empty":!1,placeholder:d.$t("general.select_a_status")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),l(b,{label:d.$t("invoices.invoice_number"),color:"black-light",class:"px-3 mt-2"},{default:t(()=>[l(W,{modelValue:r(s).invoice_number,"onUpdate:modelValue":c[1]||(c[1]=e=>r(s).invoice_number=e)},{default:t(()=>[l(m,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}),l(m,{name:"HashtagIcon",class:"h-5 ml-3 text-gray-600"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(b,{label:d.$t("general.from"),class:"px-3"},{default:t(()=>[l($,{modelValue:r(s).from_date,"onUpdate:modelValue":c[2]||(c[2]=e=>r(s).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),ue,l(b,{label:d.$t("general.to"),class:"px-3"},{default:t(()=>[l($,{modelValue:r(s).to_date,"onUpdate:modelValue":c[3]||(c[3]=e=>r(s).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[Z,r(v)]]),r(k)?(h(),g(A,{key:0,title:d.$t("invoices.no_invoices"),description:d.$t("invoices.list_of_invoices")},{default:t(()=>[l(ce,{class:"mt-5 mb-4"})]),_:1},8,["title","description"])):te("",!0),I(a("div",me,[l(oe,{ref:(e,J)=>{J.table=e,V.value=e},data:N,columns:r(L),"placeholder-count":r(_).totalInvoices>=20?10:5,class:"mt-10"},{"cell-invoice_date":t(({row:e})=>[p(C(e.data.formatted_invoice_date),1)]),"cell-invoice_number":t(({row:e})=>[l(D,{to:{path:`invoices/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:t(()=>[p(C(e.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-due_amount":t(({row:e})=>[l(R,{amount:e.data.total,currency:e.data.customer.currency},null,8,["amount","currency"])]),"cell-status":t(({row:e})=>[l(S,{status:e.data.status,class:"px-3 py-1"},{default:t(()=>[p(C(e.data.status),1)]),_:2},1032,["status"])]),"cell-paid_status":t(({row:e})=>[l(S,{status:e.data.paid_status,class:"px-3 py-1"},{default:t(()=>[p(C(e.data.paid_status),1)]),_:2},1032,["status"])]),"cell-actions":t(({row:e})=>[l(O,null,{activator:t(()=>[l(m,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:t(()=>[l(D,{to:`invoices/${e.data.id}/view`},{default:t(()=>[l(q,null,{default:t(()=>[l(m,{name:"EyeIcon",class:"h-5 mr-3 text-gray-600"}),p(" "+C(d.$t("general.view")),1)]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["columns","placeholder-count"])],512),[[Z,!r(k)]])]),_:1})}}};export{Be as default};