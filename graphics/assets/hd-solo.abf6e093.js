import{r as a,c as e,o as t,b as s,d as l,e as u,F as n,j as r,u as o,n as c,f as m,k as d}from"./vendor.cd1d5b6d.js";import{_ as i,a as v,b as f,s as b}from"./index.05057a83.js";import{_ as p,a as h,b as y,c as g,d as j}from"./Footer.1f43d5a6.js";const C={id:"sidebar"},T={id:"infos"};d({setup(d){const b=a("1612.8px"),_=a(1080*.84+"px"),k=m(),x=e((()=>k.getters.currentEst)),A=e((()=>k.getters.formattedTime)),E=e((()=>k.state.timer.status)),F=e((()=>k.state.runs.currentRunners)),R=e((()=>k.state.runs.currentCommentators));return t((()=>{setInterval((()=>{k.dispatch("rotateAccounts")}),1e4)})),(a,e)=>(s(),l(n,null,[u(i),u(v),u("header",null,[u(p)]),u("main",{style:{gridTemplateColumns:`1fr ${b.value}`}},[u("div",C,[u(f,{small:""}),u("div",T,[(s(!0),l(n,null,r(o(F),(a=>(s(),l(h,{key:a.id,label:"Runner",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(R),((a,e)=>(s(),l(h,{key:e,label:"Commentator",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),u(h,{time:"",label:"EST"},{default:c((()=>[u(j,{value:o(x)},null,8,["value"])])),_:1}),u(h,{time:"",label:"Current Time"},{default:c((()=>[u(j,{value:o(A),status:o(E)},null,8,["value","status"])])),_:1})])]),u(y,{style:{width:b.value,height:_.value}},null,8,["style"])],4),u("footer",null,[u(g)])],64))}}).use(b).mount("#root");