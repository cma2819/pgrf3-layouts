import{r as e,c as l,o as t,b as a,d as n,e as s,F as u,j as r,u as d,n as i,x as o,i as c,f as m,k as v}from"./vendor.cd1d5b6d.js";import{_ as f,a as y,s as h}from"./index.18ad34fa.js";import{_ as p,a as _,b,c as k,e as g,d as A}from"./Footer.1f43d5a6.js";import{_ as j}from"./Split.b46d3ecd.js";const I={id:"others"},w={id:"commentators"},x={id:"times"},$={id:"runners"},C={class:"runner"},T={class:"runner"},E={class:"runner"},F={class:"runner"};v({setup(v){const h=e("710.4px"),S=e("399.6px"),R=m(),q=l((()=>R.getters.currentEst)),z=l((()=>R.getters.formattedTime)),B=l((()=>R.state.timer.status)),D=l((()=>R.state.runs.currentRunners)),G=l((()=>R.state.runs.currentCommentators));return t((()=>{setInterval((()=>{R.dispatch("rotateAccounts")}),1e4)})),(e,l)=>(a(),n(u,null,[s(f),s("header",null,[s(p,{dense:""})]),s("main",null,[s("div",I,[s(y,{from:"left",small:"",style:{"margin-bottom":"auto"}}),s("div",w,[(a(!0),n(u,null,r(d(G),((e,l)=>(a(),n(_,{key:l,label:"Commentator"},{default:i((()=>[s(g,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),s("div",x,[s(_,{time:"",label:"EST"},{default:i((()=>[s(A,{value:d(q)},null,8,["value"])])),_:1}),s(_,{time:"",label:"Current Time"},{default:i((()=>[s(A,{value:d(z),status:d(B)},null,8,["value","status"])])),_:1})])]),s("div",$,[s("div",C,[s(b,{style:{width:h.value,height:S.value}},null,8,["style"]),s(_,{dense:""},{default:i((()=>[s(g,{"one-line":"",value:d(D)[0].name,account:d(D)[0].currentAccount()},null,8,["value","account"])])),_:1}),o(e.$slots,"split1",{runnerId:d(D)[0].id},(()=>[s(j,{small:"",id:d(D)[0].id},null,8,["id"])]))]),s("div",T,[s(b,{style:{width:h.value,height:S.value}},null,8,["style"]),d(D)[1]?(a(),n(_,{key:0,dense:""},{default:i((()=>[s(g,{"one-line":"",value:d(D)[1].name,account:d(D)[1].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(D)[1]?o(e.$slots,"split2",{key:1,runnerId:d(D)[1].id},(()=>[s(j,{small:"",id:d(D)[1].id},null,8,["id"])])):c("",!0)]),s("div",E,[s(b,{style:{width:h.value,height:S.value}},null,8,["style"]),d(D)[2]?(a(),n(_,{key:0,dense:""},{default:i((()=>[s(g,{"one-line":"",value:d(D)[2].name,account:d(D)[2].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(D)[2]?o(e.$slots,"split3",{key:1,runnerId:d(D)[2].id},(()=>[s(j,{small:"",id:d(D)[2].id},null,8,["id"])])):c("",!0)]),s("div",F,[s(b,{style:{width:h.value,height:S.value}},null,8,["style"]),d(D)[3]?(a(),n(_,{key:0,dense:""},{default:i((()=>[s(g,{"one-line":"",value:d(D)[3].name,account:d(D)[3].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(D)[3]?o(e.$slots,"split4",{key:1,runnerId:d(D)[3].id},(()=>[s(j,{small:"",id:d(D)[3].id},null,8,["id"])])):c("",!0)])])]),s("footer",null,[s(k)])],64))}}).use(h).mount("#root");
