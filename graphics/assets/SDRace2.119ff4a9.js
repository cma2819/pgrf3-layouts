import{r as e,c as t,o as a,b as l,d as s,e as u,n,x as r,u as d,i,F as o,j as c,f as m}from"./vendor.cd1d5b6d.js";import{_ as v,a as f}from"./index.08a07fee.js";import{_ as p,b as h,a as b,c as _,e as y,d as I}from"./Footer.1f43d5a6.js";import{_ as g}from"./Split.b46d3ecd.js";const j={id:"runners"},x={class:"runner"},A={class:"runner"},k={id:"others"},C={id:"commentators"},R={id:"times"},T={setup(T){const w=e("768px"),E=e("576px"),F=m(),S=t((()=>F.getters.currentEst)),$=t((()=>F.getters.formattedTime)),q=t((()=>F.state.timer.status)),z=t((()=>F.state.runs.currentRunners)),B=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(l(),s(o,null,[u(v),u("header",null,[u(p)]),u("main",null,[u("div",j,[u("div",x,[u(h,{style:{width:w.value,height:E.value}},null,8,["style"]),u(b,{dense:"",label:"Runner I"},{default:n((()=>[u(y,{value:d(z)[0].name,account:d(z)[0].currentAccount()},null,8,["value","account"])])),_:1}),r(e.$slots,"split1",{runnerId:d(z)[0].id},(()=>[u(g,{id:d(z)[0].id},null,8,["id"])]))]),u("div",A,[u(h,{style:{width:w.value,height:E.value}},null,8,["style"]),d(z)[1]?(l(),s(b,{key:0,dense:"",label:"Runner II"},{default:n((()=>[u(y,{value:d(z)[1].name,account:d(z)[1].currentAccount()},null,8,["value","account"])])),_:1})):i("",!0),d(z)[1]?r(e.$slots,"split2",{key:1,runnerId:d(z)[1].id},(()=>[u(g,{id:d(z)[1].id},null,8,["id"])])):i("",!0)])]),u("div",k,[u("div",C,[(l(!0),s(o,null,c(d(B),((e,t)=>(l(),s(b,{key:t,label:"Commentator"},{default:n((()=>[u(y,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",R,[u(b,{time:"",label:"EST"},{default:n((()=>[u(I,{value:d(S)},null,8,["value"])])),_:1}),u(b,{time:"",label:"Current Time"},{default:n((()=>[u(I,{value:d($),status:d(q)},null,8,["value","status"])])),_:1})]),u(f,{from:"right",small:""})])]),u("footer",null,[u(_)])],64))}};export{T as _};
