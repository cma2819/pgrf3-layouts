import{r as e,f as t,c as l,o as n,b as s,d as a,e as u,F as r,j as i,n as d,u as o,x as c,i as m,p as v,a as p,w as f,h,k as y}from"./vendor.cd1d5b6d.js";import{_,a as b,b as I,s as g}from"./index.05057a83.js";import{_ as k,a as j,e as A,d as w,b as x,c as C}from"./Footer.1f43d5a6.js";import{_ as $}from"./Split.b46d3ecd.js";import{_ as T}from"./Counter.39201666.js";const E={id:"others"},F={id:"commentators"},S={id:"times"},O={id:"runners"},R={class:"runner"},q={class:"runner"},z={class:"runner"},B={class:"runner"},D={setup(v){const p=e("537.6px"),f=e(1440*.28+"px"),h=t(),y=l((()=>h.getters.currentEst)),g=l((()=>h.getters.formattedTime)),T=l((()=>h.state.timer.status)),D=l((()=>h.state.runs.currentRunners)),G=l((()=>h.state.runs.currentCommentators));return n((()=>{setInterval((()=>{h.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(s(),a(r,null,[u(_),u(b),u("header",null,[u(k,{dense:""})]),u("main",null,[u("div",E,[u(I,{from:"left",small:"",style:{"margin-bottom":"auto"}}),u("div",F,[(s(!0),a(r,null,i(o(G),((e,t)=>(s(),a(j,{key:t,label:"Commentator"},{default:d((()=>[u(A,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",S,[u(j,{time:"",label:"EST"},{default:d((()=>[u(w,{value:o(y)},null,8,["value"])])),_:1}),u(j,{time:"",label:"Current Time"},{default:d((()=>[u(w,{value:o(g),status:o(T)},null,8,["value","status"])])),_:1})])]),u("div",O,[u("div",R,[u(x,{style:{width:p.value,height:f.value}},null,8,["style"]),u(j,{dense:""},{default:d((()=>[u(A,{"one-line":"",value:o(D)[0].name,account:o(D)[0].currentAccount()},null,8,["value","account"])])),_:1}),c(e.$slots,"split1",{runnerId:o(D)[0].id},(()=>[u($,{small:"",id:o(D)[0].id},null,8,["id"])]))]),u("div",q,[u(x,{style:{width:p.value,height:f.value}},null,8,["style"]),o(D)[1]?(s(),a(j,{key:0,dense:""},{default:d((()=>[u(A,{"one-line":"",value:o(D)[1].name,account:o(D)[1].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(D)[1]?c(e.$slots,"split2",{key:1,runnerId:o(D)[1].id},(()=>[u($,{small:"",id:o(D)[1].id},null,8,["id"])])):m("",!0)]),u("div",z,[u(x,{style:{width:p.value,height:f.value}},null,8,["style"]),o(D)[2]?(s(),a(j,{key:0,dense:""},{default:d((()=>[u(A,{"one-line":"",value:o(D)[2].name,account:o(D)[2].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(D)[2]?c(e.$slots,"split3",{key:1,runnerId:o(D)[2].id},(()=>[u($,{small:"",id:o(D)[2].id},null,8,["id"])])):m("",!0)]),u("div",B,[u(x,{style:{width:p.value,height:f.value}},null,8,["style"]),o(D)[3]?(s(),a(j,{key:0,dense:""},{default:d((()=>[u(A,{"one-line":"",value:o(D)[3].name,account:o(D)[3].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(D)[3]?c(e.$slots,"split4",{key:1,runnerId:o(D)[3].id},(()=>[u($,{small:"",id:o(D)[3].id},null,8,["id"])])):m("",!0)])])]),u("footer",null,[u(C)])],64))}};const G=f();v("data-v-641b7f54");const H={class:"score"},J=h("pts."),K={class:"score"},L=h("pts."),M={class:"score"},N=h("pts."),P={class:"score"},Q=h("pts.");p();const U={setup(e){const n=t(),i=l((()=>n.getters.scoreOf));return(e,t)=>(s(),a(r,null,[u(_),u(D,null,{split1:G((({runnerId:e})=>[u("div",H,[u("p",null,[u(T,{destination:o(i)(e)},null,8,["destination"]),J])])])),split2:G((({runnerId:e})=>[u("div",K,[u("p",null,[u(T,{destination:o(i)(e)},null,8,["destination"]),L])])])),split3:G((({runnerId:e})=>[u("div",M,[u("p",null,[u(T,{destination:o(i)(e)},null,8,["destination"]),N])])])),split4:G((({runnerId:e})=>[u("div",P,[u("p",null,[u(T,{destination:o(i)(e)},null,8,["destination"]),Q])])])),_:1})],64))},__scopeId:"data-v-641b7f54"};y(U).use(g).mount("#root");
