import{r as e,c as t,o as a,b as l,d as s,e as u,u as n,n as r,x as d,i,F as o,j as c,f as m}from"./vendor.cd1d5b6d.js";import{_ as v,a as f}from"./index.18ad34fa.js";import{_ as p,b as h,a as b,c as _,e as y,d as I}from"./Footer.1f43d5a6.js";import{_ as g}from"./Split.b46d3ecd.js";const j={id:"runners"},x={key:0,class:"runner"},k={class:"runner"},A={id:"others"},C={id:"commentators"},R={id:"times"},T={setup(T){const w=e("768px"),E=e("576px"),F=m(),S=t((()=>F.getters.currentEst)),$=t((()=>F.getters.formattedTime)),q=t((()=>F.state.timer.status)),z=t((()=>F.state.runs.currentRunners)),B=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(l(),s(o,null,[u(v),u("header",null,[u(p)]),u("main",null,[u("div",j,[n(z)[0]?(l(),s("div",x,[u(h,{style:{width:w.value,height:E.value}},null,8,["style"]),u(b,{dense:"",label:"Runner I"},{default:r((()=>[u(y,{value:n(z)[0].name,account:n(z)[0].currentAccount()},null,8,["value","account"])])),_:1}),d(e.$slots,"split1",{runnerId:n(z)[0].id},(()=>[u(g,{id:n(z)[0].id},null,8,["id"])]))])):i("",!0),u("div",k,[u(h,{style:{width:w.value,height:E.value}},null,8,["style"]),n(z)[1]?(l(),s(b,{key:0,dense:"",label:"Runner II"},{default:r((()=>[u(y,{value:n(z)[1].name,account:n(z)[1].currentAccount()},null,8,["value","account"])])),_:1})):i("",!0),n(z)[1]?d(e.$slots,"split2",{key:1,runnerId:n(z)[1].id},(()=>[u(g,{id:n(z)[1].id},null,8,["id"])])):i("",!0)])]),u("div",A,[u("div",C,[(l(!0),s(o,null,c(n(B),((e,t)=>(l(),s(b,{key:t,label:"Commentator"},{default:r((()=>[u(y,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",R,[u(b,{time:"",label:"EST"},{default:r((()=>[u(I,{value:n(S)},null,8,["value"])])),_:1}),u(b,{time:"",label:"Current Time"},{default:r((()=>[u(I,{value:n($),status:n(q)},null,8,["value","status"])])),_:1})]),u(f,{from:"right",small:""})])]),u("footer",null,[u(_)])],64))}};export{T as _};
