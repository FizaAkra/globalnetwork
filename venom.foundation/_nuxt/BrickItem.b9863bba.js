import{a as _}from"./KitIcon.vue.03c7151b.js";import{_ as b}from"./app.config.6d839814.js";import{_ as k}from"./KitDivLink.vue.efa0fea7.js";import{u as p}from"./useAsset.9ba7393b.js";import{M as y,N as f,V as a,W as g,X as m,I as i,a1 as o,a4 as l,a7 as v,a5 as r,a2 as u,$ as d,Y as T}from"./runtime-core.esm-bundler.c6ef7338.js";/* empty css                          */import{e as S}from"./entry.56bd59df.js";const A={key:1,class:"icon"},I={key:2,class:"regular-text"},B=["innerHTML"],C={key:4,class:"big-icon"},N={key:5,class:"picture"},V=["src"],$={class:"forward-text"},L={class:"forward-icon"},M=y({__name:"BrickItem",props:{regularText:{type:String,default:void 0},tag:{type:Object,default:void 0},icon:{type:String,default:void 0},bigText:{type:String,default:void 0},picture:{type:String,default:void 0},forwardAction:{type:Object,default:void 0},bigIcon:{type:String,default:void 0},link:{type:String,default:void 0}},setup(t){const e=t,n=f(()=>{if(e.tag&&e.regularText)return"with-tag";if(e.icon&&e.regularText)return"with-icon";if(e.regularText&&e.bigText)return"with-regular-and-big-text";if(e.regularText&&e.forwardAction)return"with-forward-action";if(e.picture)return"with-picture";if(e.regularText&&e.bigIcon)return"with-big-icon";throw new Error(`Unable to define component type: ${JSON.stringify(e)}`)}),w=f(()=>["with-tag","with-icon","with-regular-and-big-text","with-forward-action","with-big-icon"].includes(n.value));return(s,O)=>{const c=_,h=b,x=k;return a(),g(x,{class:T(["header-brick-item",[i(n)]]),link:t.link,external:""},{default:m(()=>[i(n)==="with-tag"?(a(),o("div",{key:0,class:"tag",style:v({backgroundColor:t.tag.hexColor})},l(t.tag.text),5)):r("",!0),i(n)==="with-icon"?(a(),o("div",A,[u(c,{name:t.icon,fill:""},null,8,["name"])])):r("",!0),i(w)?(a(),o("div",I,l(t.regularText),1)):r("",!0),i(n)==="with-regular-and-big-text"?(a(),o("div",{key:3,class:"big-text",innerHTML:t.bigText},null,8,B)):r("",!0),i(n)==="with-big-icon"?(a(),o("div",C,[u(c,{name:t.bigIcon,fill:""},null,8,["name"])])):r("",!0),i(n)==="with-picture"?(a(),o("div",N,[d("img",{src:("useAsset"in s?s.useAsset:i(p))(t.picture),alt:"Brand picture"},null,8,V)])):r("",!0),i(n)==="with-forward-action"?(a(),g(h,{key:6,class:"forward-action",to:t.forwardAction.link,target:"_blank"},{default:m(()=>[d("div",$,l(t.forwardAction.text),1),d("div",L,[u(c,{name:t.forwardAction.icon,fill:""},null,8,["name"])])]),_:1},8,["to"])):r("",!0)]),_:1},8,["class","link"])}}}),R=S(M,[["__scopeId","data-v-f6607e76"]]);export{R as default};
