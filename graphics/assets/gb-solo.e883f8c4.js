import{r as e,c as a,o as t,b as s,d as l,e as u,F as n,j as r,u as o,n as c,f as m,k as i}from"./vendor.cd1d5b6d.js";import{_ as d,a as v,s as p}from"./index.1db529a6.js";import{_ as f,a as b,b as g,c as _,d as h}from"./Footer.6d76cae4.js";import"../../../../assets/pgrf/images/pgrf2_logo_simple.png";const j={id:"sidebar"},y={id:"infos"};i({setup(i){const p=e("1024px"),k=e("921.6px"),x=m(),A=a((()=>x.getters.currentEst)),C=a((()=>x.getters.formattedTime)),T=a((()=>x.state.timer.status)),E=a((()=>x.state.runs.currentRunners)),F=a((()=>x.state.runs.currentCommentators));return t((()=>{setInterval((()=>{x.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),l(n,null,[u(d),u("header",null,[u(f)]),u("main",null,[u("div",j,[u(v,{small:""}),u("div",y,[(s(!0),l(n,null,r(o(E),(e=>(s(),l(b,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(F),((e,a)=>(s(),l(b,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),u(b,{time:"",label:"EST"},{default:c((()=>[u(h,{value:o(A)},null,8,["value"])])),_:1}),u(b,{time:"",label:"Current Time"},{default:c((()=>[u(h,{value:o(C),status:o(T)},null,8,["value","status"])])),_:1})])]),u(g,{style:{width:p.value,height:k.value}},null,8,["style"])]),u("footer",null,[u(_)])],64))}}).use(p).mount("#root");
