import{R as z,u as e,aF as O,B as W,A as I,U as _e,k as D,D as X,E as te,G as he,M as ye,r as y,o as a,l as S,w as n,h as r,i as x,t as p,f as t,e as i,m as A,j as w,N as se,z as G,F as L,y as T,a4 as ae,Q as ge,Z as ve,W as H,X as be,$ as xe,S as we}from"./vendor.c29fa1eb.js";import{b as J,c as Q,d as R,e as Z,S as $e,a as ke,_ as oe,f as F}from"./main.02f9c92c.js";import{i as Ce,a as Ie,n as K,t as Se}from"./index.esm.fad9721e.js";import{u as Be}from"./users.563d9224.js";import{N as Ee}from"./NotificationRoot.381a67f3.js";function Ue(v){var c,o;const l=e(v);return(o=(c=l)===null||c===void 0?void 0:c.$el)!==null&&o!==void 0?o:l}const ne=Ce?window:void 0;function Le(...v){let c,o,l,f;if(Ie(v[0])?([o,l,f]=v,c=ne):[c,o,l,f]=v,!c)return K;let m=K;const _=z(()=>e(c),u=>{m(),!!u&&(u.addEventListener(o,l,f),m=()=>{u.removeEventListener(o,l,f),m=K})},{immediate:!0,flush:"post"}),g=()=>{_(),m()};return Se(g),g}function re(v,c,o={}){const{window:l=ne,event:f="pointerdown"}=o;return l?Le(l,f,_=>{const g=Ue(v);!g||g===_.target||_.composedPath().includes(g)||c(_)},{passive:!0}):void 0}var le;(function(v){v.UP="UP",v.RIGHT="RIGHT",v.DOWN="DOWN",v.LEFT="LEFT",v.NONE="NONE"})(le||(le={}));const Ae={class:"flex justify-between w-full"},Te=["onSubmit"],Fe={class:"p-4 mb-16 sm:p-6 space-y-4"},Ne={key:1,class:"flex flex-col items-center"},Me={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},Ve={setup(v){const c=O(),o=J(),l=Q(),f=R(),{t:m}=W();let _=I(!1),g=I(null),u=I(!1),d=I(null),$=I(null);const h=_e({name:null,address:{country_id:null}}),N=D(()=>l.active&&l.componentName==="CompanyModal"),k={newCompanyForm:{name:{required:X.withMessage(m("validation.required"),te),minLength:X.withMessage(m("validation.name_min_length",{count:3}),he(3))},address:{country_id:{required:X.withMessage(m("validation.required"),te)}}}},s=ye(k,{newCompanyForm:h});async function b(){u.value=!0,await f.fetchCountries(),h.address.country_id=o.selectedCompany.address.country_id,u.value=!1}function U(E,B){$.value=E,d.value=B}function P(){$.value=null,d.value=null}async function C(){if(s.value.newCompanyForm.$touch(),s.value.$invalid)return!0;_.value=!0;try{const E=await o.addNewCompany(h);if(E.data.data){if(await o.setSelectedCompany(E.data.data),d&&d.value){let B=new FormData;B.append("company_logo",JSON.stringify({name:$.value,data:d.value})),await o.updateCompanyLogo(B),c.push("/admin/dashboard")}await f.setIsAppLoaded(!1),await f.bootstrap(),j()}_.value=!1}catch{_.value=!1}}function V(){h.name="",h.address.country_id="",s.value.$reset()}function j(){l.closeModal(),setTimeout(()=>{V(),s.value.$reset()},300)}return(E,B)=>{const Y=y("BaseIcon"),ie=y("BaseContentPlaceholdersBox"),ce=y("BaseContentPlaceholders"),de=y("BaseFileUploader"),q=y("BaseInputGroup"),ue=y("BaseInput"),me=y("BaseMultiselect"),pe=y("BaseInputGrid"),ee=y("BaseButton"),fe=y("BaseModal");return a(),S(fe,{show:e(N),onClose:j,onOpen:b},{header:n(()=>[r("div",Ae,[x(p(e(l).title)+" ",1),t(Y,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:j})])]),default:n(()=>[r("form",{action:"",onSubmit:se(C,["prevent"])},[r("div",Fe,[t(pe,{layout:"one-column"},{default:n(()=>[t(q,{"content-loading":e(u),label:E.$tc("settings.clinic.logo")},{default:n(()=>[e(u)?(a(),S(ce,{key:0},{default:n(()=>[t(ie,{rounded:!0,class:"w-full h-24"})]),_:1})):(a(),i("div",Ne,[t(de,{"preview-image":e(g),base64:"",onRemove:P,onChange:U},null,8,["preview-image"])]))]),_:1},8,["content-loading","label"]),t(q,{label:E.$tc("settings.clinic.name"),error:e(s).newCompanyForm.name.$error&&e(s).newCompanyForm.name.$errors[0].$message,"content-loading":e(u),required:""},{default:n(()=>[t(ue,{modelValue:e(h).name,"onUpdate:modelValue":B[0]||(B[0]=M=>e(h).name=M),invalid:e(s).newCompanyForm.name.$error,"content-loading":e(u),onInput:B[1]||(B[1]=M=>e(s).newCompanyForm.name.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"]),t(q,{"content-loading":e(u),label:E.$tc("settings.clinic.country"),error:e(s).newCompanyForm.address.country_id.$error&&e(s).newCompanyForm.address.country_id.$errors[0].$message,required:""},{default:n(()=>[t(me,{modelValue:e(h).address.country_id,"onUpdate:modelValue":B[2]||(B[2]=M=>e(h).address.country_id=M),"content-loading":e(u),label:"name",invalid:e(s).newCompanyForm.address.country_id.$error,options:e(f).countries,"value-prop":"id",disabled:!0,"can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","content-loading","invalid","options"])]),_:1},8,["content-loading","label","error"])]),_:1})]),r("div",Me,[t(ee,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:j},{default:n(()=>[x(p(E.$t("general.cancel")),1)]),_:1}),t(ee,{loading:e(_),disabled:e(_),variant:"primary",type:"submit"},{left:n(M=>[e(_)?w("",!0):(a(),S(Y,{key:0,name:"SaveIcon",class:A(M.class)},null,8,["class"]))]),default:n(()=>[x(" "+p(E.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,Te)]),_:1},8,["show"])}}},je={key:0,class:"w-16 text-sm font-medium truncate sm:w-auto"},Re={key:0,class:"absolute right-0 mt-2 bg-white rounded-md shadow-lg"},Oe={class:"overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full w-[250px] max-h-[350px] scrollbar-thumb-gray-300 scrollbar-track-gray-10 pb-4"},De={class:"px-3 py-2 text-xs font-semibold text-gray-400 mb-0.5 block uppercase"},Ge={key:0,class:"flex flex-col items-center justify-center p-2 px-3 mt-4 text-base text-gray-400"},Pe={key:1},qe={key:0},ze=["onClick"],We={class:"flex items-center"},Xe={class:"flex items-center justify-center mr-3 overflow-hidden text-base font-semibold bg-gray-200 rounded-md w-9 h-9 text-primary-500"},He={key:0},Je=["src"],Qe={class:"flex flex-col"},Ze={class:"text-sm"},Ke={key:0,class:"flex items-center justify-center pb-4 cursor-pointer text-primary-400 hover:text-primary-500"},Ye={class:"font-medium"},et={setup(v){const c=J(),o=Q(),l=G(),f=O(),m=R(),{t:_}=W(),g=Z(),u=I(!1),d=I(""),$=I(null);z(l,()=>{u.value=!1,d.value=""}),re($,()=>{u.value=!1});function h(s){if(s)return s.split(" ")[0].charAt(0).toUpperCase()}function N(){o.openModal({title:_("company_switcher.new_company"),componentName:"CompanyModal",size:"sm"})}async function k(s){await c.setSelectedCompany(s),f.push("/admin/dashboard"),await m.setIsAppLoaded(!1),await m.bootstrap()}return(s,b)=>{const U=y("BaseIcon"),P=y("router-link");return a(),i("div",{ref:(C,V)=>{V.companySwitchBar=C,$.value=C},class:"relative rounded"},[t(Ve),r("div",{class:"flex items-center justify-center px-3 h-8 md:h-9 ml-2 text-sm text-white bg-white rounded cursor-pointer bg-opacity-20",onClick:b[0]||(b[0]=C=>u.value=!u.value)},[e(c).selectedCompany?(a(),i("span",je,p(e(c).selectedCompany.name),1)):w("",!0),t(U,{name:"ChevronDownIcon",class:"h-5 ml-1 text-white"})]),t(ae,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:n(()=>[u.value?(a(),i("div",Re,[r("div",Oe,[r("label",De,p(s.$t("company_switcher.label")),1),e(c).companies.length<1?(a(),i("div",Ge,[t(U,{name:"ExclamationCircleIcon",class:"h-5 text-gray-400"}),x(" "+p(s.$t("company_switcher.no_results_found")),1)])):(a(),i("div",Pe,[e(c).companies.length>0?(a(),i("div",qe,[(a(!0),i(L,null,T(e(c).companies,(C,V)=>(a(),i("div",{key:V,class:A(["p-2 px-3 rounded-md cursor-pointer hover:bg-gray-100 hover:text-primary-500",{"bg-gray-100 text-primary-500":e(c).selectedCompany.id===C.id}]),onClick:j=>k(C)},[r("div",We,[r("span",Xe,[C.logo?(a(),i("img",{key:1,src:C.logo,alt:"Company logo",class:"w-full h-full object-contain"},null,8,Je)):(a(),i("span",He,p(h(C.name)),1))]),r("div",Qe,[r("span",Ze,p(C.name),1)])])],10,ze))),128))])):w("",!0)]))]),e(g).currentUser.is_owner?(a(),i("div",Ke,[t(P,{to:{path:"/admin/facilities"},class:"font-medium text-primary-500"},{default:n(()=>[x(p(s.$t("company_switcher.list")),1)]),_:1})])):w("",!0),e(g).currentUser.is_owner?(a(),i("div",{key:1,class:"flex items-center justify-center p-4 pl-3 border-t-2 border-gray-100 cursor-pointer text-primary-400 hover:text-primary-500",onClick:N},[t(U,{name:"PlusIcon",class:"h-5 mr-2"}),r("span",Ye,p(s.$t("company_switcher.add_new_company")),1)])):w("",!0)])):w("",!0)]),_:1})],512)}}},tt={key:0,class:"scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto bg-white rounded-md mt-2 shadow-lg p-3 absolute w-[300px] h-[200px] right-0"},st={key:0,class:"flex items-center justify-center text-gray-400 text-base flex-col mt-4"},at={key:1},ot={key:0},nt={class:"text-sm text-gray-400 mb-0.5 block px-2 uppercase"},rt={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},lt={class:"flex flex-col"},it={class:"text-sm"},ct={key:0,class:"text-xs text-gray-400"},dt={key:1,class:"text-xs text-gray-400"},ut={key:1,class:"mt-2"},mt={class:"text-sm text-gray-400 mb-2 block px-2 mb-0.5 uppercase"},pt={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},ft={class:"flex flex-col"},_t={class:"text-sm"},ht={class:"text-xs text-gray-400"},yt={setup(v){const c=Be(),o=I(!1),l=I(""),f=I(null),m=I(!1),_=G();z(_,()=>{o.value=!1,l.value=""}),g=ge.exports.debounce(g,500),re(f,()=>{o.value=!1,l.value=""});function g(){let d={search:l.value};l.value&&(m.value=!0,c.searchUsers(d).then(()=>{o.value=!0}),m.value=!1),l.value===""&&(o.value=!1)}function u(d){if(d)return d.split(" ")[0].charAt(0).toUpperCase()}return(d,$)=>{const h=y("BaseIcon"),N=y("BaseInput"),k=y("router-link");return a(),i("div",{ref:(s,b)=>{b.searchBar=s,f.value=s},class:"hidden rounded md:block relative"},[r("div",null,[t(N,{modelValue:l.value,"onUpdate:modelValue":$[0]||($[0]=s=>l.value=s),placeholder:"Search...","container-class":"!rounded",class:"h-8 md:h-9 !rounded",onInput:g},{left:n(()=>[t(h,{name:"SearchIcon",class:"text-gray-400"})]),right:n(()=>[m.value?(a(),S($e,{key:0,class:"h-5 text-primary-500"})):w("",!0)]),_:1},8,["modelValue"])]),t(ae,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:n(()=>[o.value?(a(),i("div",tt,[e(c).userList.length<1&&e(c).customerList.length<1?(a(),i("div",st,[t(h,{name:"ExclamationCircleIcon",class:"text-gray-400"}),x(" "+p(d.$t("global_search.no_results_found")),1)])):(a(),i("div",at,[e(c).customerList.length>0?(a(),i("div",ot,[r("label",nt,p(d.$t("global_search.customers")),1),(a(!0),i(L,null,T(e(c).customerList,(s,b)=>(a(),i("div",{key:b,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(k,{to:{path:`/admin/customers/${s.id}/view`},class:"flex items-center"},{default:n(()=>[r("span",rt,p(u(s.name)),1),r("div",lt,[r("span",it,p(s.name),1),s.contact_name?(a(),i("span",ct,p(s.contact_name),1)):(a(),i("span",dt,p(s.email),1))])]),_:2},1032,["to"])]))),128))])):w("",!0),e(c).userList.length>0?(a(),i("div",ut,[r("label",mt,p(d.$t("global_search.users")),1),(a(!0),i(L,null,T(e(c).userList,(s,b)=>(a(),i("div",{key:b,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(k,{to:{path:`/admin/users/${s.id}/edit`},class:"flex items-center"},{default:n(()=>[r("span",pt,p(u(s.name)),1),r("div",ft,[r("span",_t,p(s.name),1),r("span",ht,p(s.email),1)])]),_:2},1032,["to"])]))),128))])):w("",!0)]))])):w("",!0)]),_:1})],512)}}},gt={class:"fixed top-0 left-0 z-20 flex items-center justify-between w-full px-4 py-3 md:h-16 md:px-8 bg-gradient-to-r from-primary-500 to-primary-400 border-b"},vt=["src"],bt=["onClick"],xt={class:"flex float-right h-8 m-0 list-none md:h-9"},wt={key:0,class:"relative hidden float-left m-0"},$t={class:"flex items-center justify-center w-8 h-8 ml-2 text-sm text-black bg-white rounded md:h-9 md:w-9"},kt={class:"ml-2 hidden"},Ct={class:"hidden2"},It={class:"relative block float-left ml-2"},St=["src"],Bt={setup(v){const c=ke(),o=Z(),l=R(),f=O(),m=D(()=>o.currentUser&&o.currentUser.avatar!==0?o.currentUser.avatar:g()),_=D(()=>l.globalSettings.admin_portal_logo?"/storage/"+l.globalSettings.admin_portal_logo:!1);function g(){return new URL("/build/assets/default-avatar.af0113af.jpg",self.location)}function u(){return o.hasAbilities([F.CREATE_INVOICE,F.CREATE_ESTIMATE,F.CREATE_CUSTOMER])}async function d(){await c.logout(),f.push("/login")}function $(){l.setSidebarVisibility(!0)}return(h,N)=>{const k=y("router-link"),s=y("BaseIcon"),b=y("BaseDropdownItem"),U=y("BaseDropdown");return a(),i("header",gt,[t(k,{to:"/admin/dashboard",class:"float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base hidden md:block"},{default:n(()=>[e(_)?(a(),i("img",{key:0,src:e(_),class:"h-6"},null,8,vt)):(a(),S(oe,{key:1,class:"h-6","light-color":"white","dark-color":"white"}))]),_:1}),r("div",{class:A([{"is-active":e(l).isSidebarOpen},"flex float-left p-1 overflow-visible text-sm ease-linear bg-white border-0 rounded cursor-pointer md:hidden md:ml-0 hover:bg-gray-100"]),onClick:se($,["prevent"])},[t(s,{name:"MenuIcon",class:"!w-6 !h-6 text-gray-500"})],10,bt),r("ul",xt,[u?(a(),i("li",wt,[t(U,{"width-class":"w-48"},{activator:n(()=>[r("div",$t,[t(s,{name:"PlusIcon",class:"w-5 h-5 text-gray-600"})])]),default:n(()=>[t(k,{to:"/admin/invoices/create"},{default:n(()=>[e(o).hasAbilities(e(F).CREATE_INVOICE)?(a(),S(b,{key:0},{default:n(()=>[t(s,{name:"DocumentTextIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("invoices.new_invoice")),1)]),_:1})):w("",!0)]),_:1}),t(k,{to:"/admin/estimates/create"},{default:n(()=>[e(o).hasAbilities(e(F).CREATE_ESTIMATE)?(a(),S(b,{key:0},{default:n(()=>[t(s,{name:"DocumentIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("estimates.new_estimate")),1)]),_:1})):w("",!0)]),_:1}),t(k,{to:"/admin/customers/create"},{default:n(()=>[e(o).hasAbilities(e(F).CREATE_CUSTOMER)?(a(),S(b,{key:0},{default:n(()=>[t(s,{name:"UserIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("customers.new_customer")),1)]),_:1})):w("",!0)]),_:1})]),_:1})])):w("",!0),r("li",kt,[e(o).currentUser.is_owner||e(o).hasAbilities(e(F).VIEW_CUSTOMER)?(a(),S(yt,{key:0})):w("",!0)]),r("li",Ct,[t(et)]),r("li",It,[t(U,{"width-class":"w-48"},{activator:n(()=>[r("img",{src:e(m),class:"block w-8 h-8 rounded md:h-9 md:w-9"},null,8,St)]),default:n(()=>[t(k,{to:"/admin/settings/account-settings"},{default:n(()=>[t(b,null,{default:n(()=>[t(s,{name:"UserIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("navigation.profile")),1)]),_:1})]),_:1}),t(k,{to:"/admin/settings/clinic"},{default:n(()=>[t(b,null,{default:n(()=>[t(s,{name:"CogIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("navigation.settings")),1)]),_:1})]),_:1}),t(k,{to:"/admin/settings/preferences"},{default:n(()=>[t(b,null,{default:n(()=>[t(s,{name:"CogIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("settings.menu_title.preferences")),1)]),_:1})]),_:1}),t(b,{onClick:d},{default:n(()=>[t(s,{name:"LogoutIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),x(" "+p(h.$t("navigation.logout")),1)]),_:1})]),_:1})])])])}}},Et={class:"relative flex flex-col flex-1 w-full max-w-xs bg-white"},Ut={class:"absolute top-0 right-0 pt-2 -mr-12"},Lt=r("span",{class:"sr-only"},"Close sidebar",-1),At={class:"flex-1 h-0 pt-5 pb-4 overflow-y-auto"},Tt={class:"flex items-center shrink-0 px-4 invisible"},Ft=r("div",{class:"shrink-0 w-14"},null,-1),Nt={class:"hidden w-56 h-screen pb-32 overflow-y-auto bg-white border-r border-gray-200 border-solid xl:w-64 md:fixed md:flex md:flex-col md:inset-y-0 pt-16 no-scrollbar"},Mt={setup(v){const c=G(),o=R();function l(f){return c.path.indexOf(f)>-1}return(f,m)=>{const _=y("BaseIcon"),g=y("router-link");return a(),i(L,null,[t(e(xe),{as:"template",show:e(o).isSidebarOpen},{default:n(()=>[t(e(ve),{as:"div",class:"fixed inset-0 z-40 flex md:hidden",onClose:m[3]||(m[3]=u=>e(o).setSidebarVisibility(!1))},{default:n(()=>[t(e(H),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[t(e(be),{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),t(e(H),{as:"template",enter:"transition ease-in-out duration-300","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[r("div",Et,[t(e(H),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[r("div",Ut,[r("button",{class:"flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:m[0]||(m[0]=u=>e(o).setSidebarVisibility(!1))},[Lt,t(_,{name:"XIcon",class:"w-6 h-6 text-white","aria-hidden":"true"})])])]),_:1}),r("div",At,[r("div",Tt,[t(oe,{class:"block h-auto max-w-full w-36 text-primary-400",alt:"Crater Logo"})]),(a(!0),i(L,null,T(e(o).menuGroups,u=>(a(),i("nav",{key:u,class:"mt-5 space-y-1"},[(a(!0),i(L,null,T(u,d=>(a(),S(g,{key:d.name,to:d.link,class:A([l(d.link)?"text-primary-500 border-primary-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-4 py-3 border-transparent flex items-center border-l-4 border-solid text-sm not-italic font-medium"]),onClick:m[2]||(m[2]=$=>e(o).setSidebarVisibility(!1))},{default:n(()=>[t(_,{name:d.icon,class:A([l(d.link)?"text-primary-500 ":"text-gray-400","mr-4 shrink-0 h-5 w-5"]),onClick:m[1]||(m[1]=$=>e(o).setSidebarVisibility(!1))},null,8,["name","class"]),x(" "+p(f.$t(d.title)),1)]),_:2},1032,["to","class"]))),128))]))),128))])])]),_:1}),Ft]),_:1})]),_:1},8,["show"]),r("div",Nt,[(a(!0),i(L,null,T(e(o).menuGroups,u=>(a(),i("div",{key:u,class:"p-0 m-0 mt-6 list-none"},[(a(!0),i(L,null,T(u,d=>(a(),S(g,{key:d,to:d.link,class:A([l(d.link)?"text-primary-500 border-primary-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-6 hover:bg-gray-50 py-3 group flex items-center border-l-4 border-solid border-transparent text-sm not-italic font-medium"])},{default:n(()=>[t(_,{name:d.icon,class:A([l(d.link)?"text-primary-500 group-hover:text-primary-500 ":"text-gray-400 group-hover:text-black","mr-4 shrink-0 h-5 w-5 "])},null,8,["name","class"]),x(" "+p(f.$t(d.title)),1)]),_:2},1032,["to","class"]))),128))]))),128))])],64)}}},Vt={key:0,class:"h-full"},jt={class:"h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-64 min-h-0"},Rt={class:"pt-16 pb-16"},zt={setup(v){const c=R(),o=G(),l=Z(),f=O();Q(),W(),J();const m=D(()=>c.isAppLoaded);return we(()=>{c.bootstrap().then(_=>{o.meta.ability&&!l.hasAbilities(o.meta.ability)?f.push({name:"account.settings"}):o.meta.isOwner&&!l.currentUser.is_owner&&f.push({name:"account.settings"})})}),(_,g)=>{const u=y("router-view"),d=y("BaseGlobalLoader");return e(m)?(a(),i("div",Vt,[t(Ee),t(Bt),t(Mt),r("main",jt,[r("div",Rt,[t(u)])])])):(a(),S(d,{key:1}))}}};export{zt as default};