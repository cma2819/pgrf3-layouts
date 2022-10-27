import{p as e,a as t,r as s,D as a,c as n,o as l,b as o,d as r,e as d,t as u,u as c,F as i,f as p,g as v,h as m,i as f,j as y,k as g}from"./vendor.cd1d5b6d.js";import{_ as x,a as h,s as b}from"./index.edf5e494.js";e("data-v-38687ee8");const N=d("span",{id:"presents"},"presents",-1),w={id:"now",class:"time"};t();const _={setup(e){const t=s(a.now()),p=n((()=>{const e=t.value;return e.second%2==0?e.toFormat("HH:mm"):e.toFormat("HH mm")})),v=s(""),m=s("");return l((()=>{setInterval((()=>{t.value=a.now()}),50),nodecg.Replicant("assets:logo").on("change",(e=>{var t;v.value=(null==(t=e[0])?void 0:t.url)||""})),nodecg.Replicant("assets:ome-logo").on("change",(e=>{var t;m.value=(null==(t=e[0])?void 0:t.url)||""}))})),(e,t)=>(o(),r(i,null,[d("img",{id:"logo-ome",src:m.value,alt:"OME"},null,8,["src"]),N,d("img",{id:"logo-pgrf",src:v.value,alt:"PGRF"},null,8,["src"]),d("div",w,u(c(p)),1)],64))},__scopeId:"data-v-38687ee8"};e("data-v-1f57b0d4");const k={id:"spotify"},R={id:"date"};t();const j={setup(e){const t=s(a.now()),l=n((()=>t.value.toFormat("yyyy/MM/dd"))),v=n((()=>Math.ceil(t.value.diff(a.fromSQL("2022-10-29"),"days").days))),m=p(),f=n((()=>m.getters.shortSpotifyInfo));return(e,t)=>(o(),r(i,null,[d("div",k,[d("span",null,"Now playing: "+u(c(f)),1)]),d("div",R,"Day "+u(c(v))+": "+u(c(l)),1)],64))},__scopeId:"data-v-1f57b0d4"};e("data-v-35ef5ff4");const I={key:0,id:"up-next",class:"label"},S={key:1,class:"time"},C={class:"info"},F={class:"category"},B=d("span",{class:"label"},"Category: ",-1),H={class:"platform"},M=d("span",{class:"label"},"Platform: ",-1),O={class:"est"},D=d("span",{class:"label"},"EST: ",-1),E={class:"info"},P={class:"runner"},T=d("span",{class:"label"},"Runner: ",-1),$={key:0,class:"commentator"},A=d("span",{class:"label"},"Commentator: ",-1),G={class:"title"},L={class:"info"},Q=d("span",{class:"label"},"Duration: ",-1),U={class:"time"};t();const X={props:{run:Object,upNext:Boolean},setup(e){const t=e,a=s(null),n=()=>{const e=t.upNext?1440:1280,s=a.value,n=s.getBoundingClientRect().width;if(n>e){s.style.transform=`scale(${e/n})`;const t=s.getBoundingClientRect().width;s.parentNode.style.width=`${t}px`}else s.style.transform="",s.parentNode.style.width=""};return l(n),v(n),(t,s)=>(o(),r("div",{class:["run",{"later-than-next":!e.upNext}]},[e.upNext?(o(),r("p",I,"UP NEXT")):(o(),r("p",S,u(e.run.startsAtOnSchedule())+"~",1)),e.run.isSetupBlock()?(o(),r("div",{key:3,class:["content-box setup",{next:e.upNext,"later-than-next":!e.upNext}]},[d("span",G,u(e.run.title),1),d("div",L,[Q,d("span",U,u(e.run.est),1)])],2)):(o(),r("div",{key:2,class:["content-box",{next:e.upNext,"later-than-next":!e.upNext}]},[d("div",{class:"title",ref:a},u(e.run.title),513),d("div",C,[d("div",F,[B,m(u(e.run.category),1)]),d("div",H,[M,m(u(e.run.platform),1)]),d("div",O,[D,m(u(e.run.est),1)])]),d("div",E,[d("div",P,[T,m(u(e.run.joinedRunnerNames()),1)]),e.run.commentators.length>0?(o(),r("div",$,[A,m(u(e.run.joinedCommentatorNames()),1)])):f("",!0)])],2))],2))},__scopeId:"data-v-35ef5ff4"};e("data-v-31adb734");const q={id:"schedule"};t();const z={setup(e){const t=p(),s=n((()=>t.getters.runsOnSchedule));return(e,t)=>(o(),r("div",q,[(o(!0),r(i,null,y(c(s),((e,t)=>(o(),r(X,{key:t,run:e,upNext:0===t},null,8,["run","upNext"])))),128))]))},__scopeId:"data-v-31adb734"};const J={id:"tweet-container",style:{height:"150px"}};g({setup:e=>(e,t)=>(o(),r(i,null,[d(x,{animated:""}),d("header",null,[d(_)]),d("main",null,[d(z,{style:{width:"1440px"}}),d("div",J,[d(h,{from:"top",style:{width:"1600px"}})])]),d("footer",null,[d(j)])],64))}).use(b).mount("#root");
