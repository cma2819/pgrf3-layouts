import{r as a,c as t,o as e,b as s,d as l,e as u,F as n,j as r,u as o,n as c,f as m,k as i}from"./vendor.cd1d5b6d.js";import{_ as d,s as v}from"./index.078cb997.js";import{_ as f,a as b,b as p,c as h,d as j}from"./Footer.1f43d5a6.js";import{_,a as y}from"./WatchReplicant.b9f68512.js";const g={id:"sidebar"},k={id:"infos"};i({setup(i){const v=a("1024px"),x=a("921.6px"),A=m(),C=t((()=>A.getters.currentEst)),R=t((()=>A.getters.formattedTime)),T=t((()=>A.state.timer.status)),E=t((()=>A.state.runs.currentRunners)),F=t((()=>A.state.runs.currentCommentators));return e((()=>{setInterval((()=>{A.dispatch("rotateAccounts")}),1e4)})),(a,t)=>(s(),l(n,null,[u(_),u(d),u("header",null,[u(f)]),u("main",null,[u("div",g,[u(y,{small:""}),u("div",k,[(s(!0),l(n,null,r(o(E),(a=>(s(),l(b,{key:a.id,label:"Runner",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(F),((a,t)=>(s(),l(b,{key:t,label:"Commentator",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),u(b,{time:"",label:"EST"},{default:c((()=>[u(j,{value:o(C)},null,8,["value"])])),_:1}),u(b,{time:"",label:"Current Time"},{default:c((()=>[u(j,{value:o(R),status:o(T)},null,8,["value","status"])])),_:1})])]),u(p,{style:{width:v.value,height:x.value}},null,8,["style"])]),u("footer",null,[u(h)])],64))}}).use(v).mount("#root");
