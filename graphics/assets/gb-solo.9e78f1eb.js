import{r as e,c as a,o as t,b as s,d as u,e as l,F as n,j as r,u as o,n as c,f as d,k as m}from"./vendor.cd1d5b6d.js";import{_ as i,a as v,s as f}from"./index.edf5e494.js";import{_ as b,a as p,b as h,c as j,d as y}from"./Footer.1f43d5a6.js";const _={id:"sidebar"},g={id:"infos"};m({setup(m){const f=e("1024px"),k=e("921.6px"),x=d(),A=a((()=>x.getters.currentEst)),C=a((()=>x.getters.formattedTime)),T=a((()=>x.state.timer.status)),E=a((()=>x.state.runs.currentRunners)),F=a((()=>x.state.runs.currentCommentators));return t((()=>{setInterval((()=>{x.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),u(n,null,[l(i),l("header",null,[l(b)]),l("main",null,[l("div",_,[l(v,{small:""}),l("div",g,[(s(!0),u(n,null,r(o(E),(e=>(s(),u(p,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),u(n,null,r(o(F),((e,a)=>(s(),u(p,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),l(p,{time:"",label:"EST"},{default:c((()=>[l(y,{value:o(A)},null,8,["value"])])),_:1}),l(p,{time:"",label:"Current Time"},{default:c((()=>[l(y,{value:o(C),status:o(T)},null,8,["value","status"])])),_:1})])]),l(h,{style:{width:f.value,height:k.value}},null,8,["style"])]),l("footer",null,[l(j)])],64))}}).use(f).mount("#root");