import{c as t,o as e,b as a,d as s,e as l,u,F as n,j as r,n as o,f as i,k as c}from"./vendor.cd1d5b6d.js";import{_ as d,a as m,s as f}from"./index.08a07fee.js";import{_ as v,b as p,a as h,c as b,d as y}from"./Footer.1f43d5a6.js";const g={id:"sidebar"},x={id:"infos"};c({setup(c){const f=t((()=>({width:"1228.8px",height:"691.2px"}))),j=t((()=>({width:"576px",height:"384px"}))),C=i(),T=t((()=>C.getters.currentEst)),_=t((()=>C.getters.formattedTime)),k=t((()=>C.state.timer.status)),w=t((()=>C.state.runs.currentRunners)),A=t((()=>C.state.runs.currentCommentators));return e((()=>{setInterval((()=>{C.dispatch("rotateAccounts")}),1e4)})),(t,e)=>(a(),s(n,null,[l(d),l("header",null,[l(v)]),l("main",{style:{gridTemplateColumns:`1fr ${u(f).width}`}},[l("div",g,[l(p,{style:u(j)},null,8,["style"]),l(m,{small:""}),l("div",x,[(a(!0),s(n,null,r(u(w),(t=>(a(),s(h,{key:t.id,label:"Runner",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),(a(!0),s(n,null,r(u(A),((t,e)=>(a(),s(h,{key:e,label:"Commentator",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),l(h,{time:"",label:"EST",id:"est"},{default:o((()=>[l(y,{value:u(T)},null,8,["value"])])),_:1}),l(h,{time:"",label:"Current Time",id:"current-time"},{default:o((()=>[l(y,{value:u(_),status:u(k)},null,8,["value","status"])])),_:1})])]),l(p,{style:u(f)},null,8,["style"])],4),l("footer",null,[l(b)])],64))}}).use(f).mount("#root");