import{r as e,c as t,o as a,b as s,d as l,e as u,F as n,j as r,u as o,n as i,f as d,k as c}from"./vendor.cd1d5b6d.js";import{_ as m,s as v}from"./index.078cb997.js";import{_ as f,b as p,a as h,c as b,e as y,d as _}from"./Footer.1f43d5a6.js";import{_ as g,a as j}from"./WatchReplicant.b9f68512.js";const x={id:"videos"},k={id:"others"},A={id:"participators"},C={id:"times"};c({setup(c){const v=e("1228.8px"),R=e("737.28px"),T=e("537.6px"),w=e(1440*.28+"px"),E=d(),F=t((()=>E.getters.currentEst)),I=t((()=>E.getters.formattedTime)),S=t((()=>E.state.timer.status)),W=t((()=>E.state.runs.currentRunners)),q=t((()=>E.state.runs.currentCommentators));return a((()=>{setInterval((()=>{E.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(s(),l(n,null,[u(g),u(m),u("header",null,[u(f)]),u("main",null,[u("div",x,[u(p,{style:{width:v.value,height:R.value}},null,8,["style"]),u(p,{style:{width:T.value,height:w.value}},null,8,["style"])]),u("div",k,[u("div",A,[(s(!0),l(n,null,r(o(W),(e=>(s(),l(h,{dense:"",key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(q),((e,t)=>(s(),l(h,{dense:"",key:t,label:"Commentator"},{default:i((()=>[u(y,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",C,[u(h,{dense:"",time:"",label:"EST"},{default:i((()=>[u(_,{value:o(F)},null,8,["value"])])),_:1}),u(h,{dense:"",time:"",label:"Current Time"},{default:i((()=>[u(_,{value:o(I),status:o(S)},null,8,["value","status"])])),_:1})]),u(j,{from:"right",small:""})])]),u("footer",null,[u(b)])],64))}}).use(v).mount("#root");
