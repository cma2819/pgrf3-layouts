import{r as e,c as l,o as t,b as a,d as n,e as s,F as u,j as r,u as d,n as i,x as o,i as c,f as m}from"./vendor.cd1d5b6d.js";import{_ as v,a as y,b as f}from"./index.05057a83.js";import{_ as h,a as p,b as k,c as _,e as b,d as g}from"./Footer.1f43d5a6.js";import{_ as A}from"./Split.b46d3ecd.js";const j={id:"others"},x={id:"info"},I={id:"commentators"},w={id:"times"},$={id:"runners"},C={key:0,class:"runner"},T={key:1,class:"runner"},E={key:2,class:"runner"},F={key:3,class:"runner"},S={setup(S){const R=e("537.6px"),q=e(1440*.28+"px"),z=m(),B=l((()=>z.getters.currentEst)),D=l((()=>z.getters.formattedTime)),G=l((()=>z.state.timer.status)),H=l((()=>z.state.runs.currentRunners)),J=l((()=>z.state.runs.currentCommentators));return t((()=>{setInterval((()=>{z.dispatch("rotateAccounts")}),1e4)})),(e,l)=>(a(),n(u,null,[s(v),s(y),s("header",null,[s(h,{dense:""})]),s("main",null,[s("div",j,[s(f,{from:"left",small:"",style:{"margin-bottom":"auto"}}),s("div",x,[s("div",I,[(a(!0),n(u,null,r(d(J),((e,l)=>(a(),n(p,{key:l,label:"Commentator"},{default:i((()=>[s(b,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),s("div",w,[s(p,{time:"",label:"EST"},{default:i((()=>[s(g,{value:d(B)},null,8,["value"])])),_:1}),s(p,{time:"",label:"Current Time"},{default:i((()=>[s(g,{value:d(D),status:d(G)},null,8,["value","status"])])),_:1})])])]),s("div",$,[d(H)[0]?(a(),n("div",C,[s(k,{style:{width:R.value,height:q.value}},null,8,["style"]),s(p,{dense:""},{default:i((()=>[s(b,{"one-line":"",value:d(H)[0].name,account:d(H)[0].currentAccount()},null,8,["value","account"])])),_:1}),o(e.$slots,"split1",{runnerId:d(H)[0].id},(()=>[s(A,{small:"",id:d(H)[0].id},null,8,["id"])]))])):c("",!0),d(H)[1]?(a(),n("div",T,[s(k,{style:{width:R.value,height:q.value}},null,8,["style"]),d(H)[1]?(a(),n(p,{key:0,dense:""},{default:i((()=>[s(b,{"one-line":"",value:d(H)[1].name,account:d(H)[1].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(H)[1]?o(e.$slots,"split2",{key:1,runnerId:d(H)[1].id},(()=>[s(A,{small:"",id:d(H)[1].id},null,8,["id"])])):c("",!0)])):c("",!0),d(H)[2]?(a(),n("div",E,[s(k,{style:{width:R.value,height:q.value}},null,8,["style"]),d(H)[2]?(a(),n(p,{key:0,dense:""},{default:i((()=>[s(b,{"one-line":"",value:d(H)[2].name,account:d(H)[2].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(H)[2]?o(e.$slots,"split3",{key:1,runnerId:d(H)[2].id},(()=>[s(A,{small:"",id:d(H)[2].id},null,8,["id"])])):c("",!0)])):c("",!0),d(H)[3]?(a(),n("div",F,[s(k,{style:{width:R.value,height:q.value}},null,8,["style"]),d(H)[3]?(a(),n(p,{key:0,dense:""},{default:i((()=>[s(b,{"one-line":"",value:d(H)[3].name,account:d(H)[3].currentAccount()},null,8,["value","account"])])),_:1})):c("",!0),d(H)[3]?o(e.$slots,"split4",{key:1,runnerId:d(H)[3].id},(()=>[s(A,{small:"",id:d(H)[3].id},null,8,["id"])])):c("",!0)])):c("",!0)])]),s("footer",null,[s(_)])],64))}};export{S as _};
