import{r as e,f as t,c as l,o as n,b as s,d as a,e as u,F as r,j as i,n as d,u as o,x as c,i as m,p as v,a as p,w as f,h,k as y}from"./vendor.cd1d5b6d.js";import{_,a as b,s as I}from"./index.1db529a6.js";import{_ as g,a as k,e as j,d as A,b as w,c as x}from"./Footer.1f43d5a6.js";import{_ as C}from"./Split.b46d3ecd.js";import{_ as $}from"./Counter.39201666.js";const T={id:"others"},E={id:"commentators"},F={id:"times"},S={id:"runners"},O={class:"runner"},R={class:"runner"},q={class:"runner"},z={class:"runner"},B={setup(v){const p=e("537.6px"),f=e(1440*.28+"px"),h=t(),y=l((()=>h.getters.currentEst)),I=l((()=>h.getters.formattedTime)),$=l((()=>h.state.timer.status)),B=l((()=>h.state.runs.currentRunners)),D=l((()=>h.state.runs.currentCommentators));return n((()=>{setInterval((()=>{h.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(s(),a(r,null,[u(_),u("header",null,[u(g,{dense:""})]),u("main",null,[u("div",T,[u(b,{from:"left",small:"",style:{"margin-bottom":"auto"}}),u("div",E,[(s(!0),a(r,null,i(o(D),((e,t)=>(s(),a(k,{key:t,label:"Commentator"},{default:d((()=>[u(j,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",F,[u(k,{time:"",label:"EST"},{default:d((()=>[u(A,{value:o(y)},null,8,["value"])])),_:1}),u(k,{time:"",label:"Current Time"},{default:d((()=>[u(A,{value:o(I),status:o($)},null,8,["value","status"])])),_:1})])]),u("div",S,[u("div",O,[u(w,{style:{width:p.value,height:f.value}},null,8,["style"]),u(k,{dense:""},{default:d((()=>[u(j,{"one-line":"",value:o(B)[0].name,account:o(B)[0].currentAccount()},null,8,["value","account"])])),_:1}),c(e.$slots,"split1",{runnerId:o(B)[0].id},(()=>[u(C,{small:"",id:o(B)[0].id},null,8,["id"])]))]),u("div",R,[u(w,{style:{width:p.value,height:f.value}},null,8,["style"]),o(B)[1]?(s(),a(k,{key:0,dense:""},{default:d((()=>[u(j,{"one-line":"",value:o(B)[1].name,account:o(B)[1].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(B)[1]?c(e.$slots,"split2",{key:1,runnerId:o(B)[1].id},(()=>[u(C,{small:"",id:o(B)[1].id},null,8,["id"])])):m("",!0)]),u("div",q,[u(w,{style:{width:p.value,height:f.value}},null,8,["style"]),o(B)[2]?(s(),a(k,{key:0,dense:""},{default:d((()=>[u(j,{"one-line":"",value:o(B)[2].name,account:o(B)[2].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(B)[2]?c(e.$slots,"split3",{key:1,runnerId:o(B)[2].id},(()=>[u(C,{small:"",id:o(B)[2].id},null,8,["id"])])):m("",!0)]),u("div",z,[u(w,{style:{width:p.value,height:f.value}},null,8,["style"]),o(B)[3]?(s(),a(k,{key:0,dense:""},{default:d((()=>[u(j,{"one-line":"",value:o(B)[3].name,account:o(B)[3].currentAccount()},null,8,["value","account"])])),_:1})):m("",!0),o(B)[3]?c(e.$slots,"split4",{key:1,runnerId:o(B)[3].id},(()=>[u(C,{small:"",id:o(B)[3].id},null,8,["id"])])):m("",!0)])])]),u("footer",null,[u(x)])],64))}};const D=f();v("data-v-0cdb3454");const G={class:"score"},H=h("pts."),J={class:"score"},K=h("pts."),L={class:"score"},M=h("pts."),N={class:"score"},P=h("pts.");p();const Q={setup(e){const n=t(),r=l((()=>n.getters.scoreOf));return(e,t)=>(s(),a(B,null,{split1:D((({runnerId:e})=>[u("div",G,[u("p",null,[u($,{destination:o(r)(e)},null,8,["destination"]),H])])])),split2:D((({runnerId:e})=>[u("div",J,[u("p",null,[u($,{destination:o(r)(e)},null,8,["destination"]),K])])])),split3:D((({runnerId:e})=>[u("div",L,[u("p",null,[u($,{destination:o(r)(e)},null,8,["destination"]),M])])])),split4:D((({runnerId:e})=>[u("div",N,[u("p",null,[u($,{destination:o(r)(e)},null,8,["destination"]),P])])])),_:1}))},__scopeId:"data-v-0cdb3454"};y(Q).use(I).mount("#root");
