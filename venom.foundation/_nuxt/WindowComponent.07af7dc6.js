import p from"./KitReadMore.7a80b1fd.js";import{v as d,e as k}from"./entry.56bd59df.js";import{M as f,D as C,N as h,V as a,a1 as c,$ as t,F as x,a6 as y,Y as b,I as n,a4 as m,W as w,a5 as B,aa as u}from"./runtime-core.esm-bundler.c6ef7338.js";/* empty css                          */import"./KitIcon.vue.03c7151b.js";import"./app.config.6d839814.js";/* empty css                          */const M={class:"developer-window"},N={class:"menu"},$=["onClick"],g={class:"content"},D={class:"content-title"},I=["innerHTML"],L={class:"nav-buttons"},V=f({__name:"WindowComponent",props:{elements:{type:Array,required:!0}},setup(r){const _=r,e=C(0),s=h(()=>_.elements[e.value]);return(F,o)=>{const v=p;return a(),c("div",M,[t("div",N,[(a(!0),c(x,null,y(r.elements,(i,l)=>(a(),c("div",{key:l,class:b(["menu-link",{current:n(e)===l}]),onClick:H=>e.value=l},m(i.title),11,$))),128))]),t("div",g,[t("div",D,m(n(s).title),1),t("div",{class:"content-body",innerHTML:n(s).body},null,8,I),n(s).link?(a(),w(v,{key:0,link:n(s).link,class:"read-more",external:""},null,8,["link"])):B("",!0),t("div",L,[u(t("div",{class:"nav-btn",onClick:o[0]||(o[0]=i=>e.value-=1)},"Previous",512),[[d,n(e)!==0]]),u(t("div",{class:"nav-btn next-btn",onClick:o[1]||(o[1]=i=>e.value+=1)},"Next",512),[[d,n(e)!==r.elements.length-1]])])])])}}}),K=k(V,[["__scopeId","data-v-a87fc970"]]);export{K as default};