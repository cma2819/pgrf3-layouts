import{r as e,c as a,o as t,b as s,d as l,e as u,F as n,j as r,u as o,n as c,f as m,k as d}from"./vendor.cd1d5b6d.js";import{_ as i,a as v,s as f}from"./index.edf5e494.js";import{_ as b,a as p,b as h,c as y,d as g}from"./Footer.1f43d5a6.js";const j={id:"sidebar"},C={id:"infos"};d({setup(d){const f=e("1612.8px"),T=e(1080*.84+"px"),_=m(),k=a((()=>_.getters.currentEst)),x=a((()=>_.getters.formattedTime)),A=a((()=>_.state.timer.status)),E=a((()=>_.state.runs.currentRunners)),F=a((()=>_.state.runs.currentCommentators));return t((()=>{setInterval((()=>{_.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),l(n,null,[u(i),u("header",null,[u(b)]),u("main",{style:{gridTemplateColumns:`1fr ${f.value}`}},[u("div",j,[u(v,{small:""}),u("div",C,[(s(!0),l(n,null,r(o(E),(e=>(s(),l(p,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(F),((e,a)=>(s(),l(p,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),u(p,{time:"",label:"EST"},{default:c((()=>[u(g,{value:o(k)},null,8,["value"])])),_:1}),u(p,{time:"",label:"Current Time"},{default:c((()=>[u(g,{value:o(x),status:o(A)},null,8,["value","status"])])),_:1})])]),u(h,{style:{width:f.value,height:T.value}},null,8,["style"])],4),u("footer",null,[u(y)])],64))}}).use(f).mount("#root");
