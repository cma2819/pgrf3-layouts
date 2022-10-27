import{p as t,a as e,r as s,D as a,c as n,o as l,b as o,d as r,e as d,t as u,u as c,F as i,f as p,g as v,h as m,i as f,j as y,k as g}from"./vendor.cd1d5b6d.js";import{_ as x,a as h,b,s as N}from"./index.05057a83.js";t("data-v-38687ee8");const w=d("span",{id:"presents"},"presents",-1),_={id:"now",class:"time"};e();const k={setup(t){const e=s(a.now()),p=n((()=>{const t=e.value;return t.second%2==0?t.toFormat("HH:mm"):t.toFormat("HH mm")})),v=s(""),m=s("");return l((()=>{setInterval((()=>{e.value=a.now()}),50),nodecg.Replicant("assets:logo").on("change",(t=>{var e;v.value=(null==(e=t[0])?void 0:e.url)||""})),nodecg.Replicant("assets:ome-logo").on("change",(t=>{var e;m.value=(null==(e=t[0])?void 0:e.url)||""}))})),(t,e)=>(o(),r(i,null,[d("img",{id:"logo-ome",src:m.value,alt:"OME"},null,8,["src"]),w,d("img",{id:"logo-pgrf",src:v.value,alt:"PGRF"},null,8,["src"]),d("div",_,u(c(p)),1)],64))},__scopeId:"data-v-38687ee8"};t("data-v-1f57b0d4");const R={id:"spotify"},j={id:"date"};e();const I={setup(t){const e=s(a.now()),l=n((()=>e.value.toFormat("yyyy/MM/dd"))),v=n((()=>Math.ceil(e.value.diff(a.fromSQL("2022-10-29"),"days").days))),m=p(),f=n((()=>m.getters.shortSpotifyInfo));return(t,e)=>(o(),r(i,null,[d("div",R,[d("span",null,"Now playing: "+u(c(f)),1)]),d("div",j,"Day "+u(c(v))+": "+u(c(l)),1)],64))},__scopeId:"data-v-1f57b0d4"};t("data-v-35ef5ff4");const S={key:0,id:"up-next",class:"label"},C={key:1,class:"time"},F={class:"info"},B={class:"category"},H=d("span",{class:"label"},"Category: ",-1),M={class:"platform"},O=d("span",{class:"label"},"Platform: ",-1),D={class:"est"},E=d("span",{class:"label"},"EST: ",-1),P={class:"info"},T={class:"runner"},$=d("span",{class:"label"},"Runner: ",-1),A={key:0,class:"commentator"},G=d("span",{class:"label"},"Commentator: ",-1),L={class:"title"},Q={class:"info"},U=d("span",{class:"label"},"Duration: ",-1),X={class:"time"};e();const q={props:{run:Object,upNext:Boolean},setup(t){const e=t,a=s(null),n=()=>{const t=e.upNext?1440:1280,s=a.value,n=s.getBoundingClientRect().width;if(n>t){s.style.transform=`scale(${t/n})`;const e=s.getBoundingClientRect().width;s.parentNode.style.width=`${e}px`}else s.style.transform="",s.parentNode.style.width=""};return l(n),v(n),(e,s)=>(o(),r("div",{class:["run",{"later-than-next":!t.upNext}]},[t.upNext?(o(),r("p",S,"UP NEXT")):(o(),r("p",C,u(t.run.startsAtOnSchedule())+"~",1)),t.run.isSetupBlock()?(o(),r("div",{key:3,class:["content-box setup",{next:t.upNext,"later-than-next":!t.upNext}]},[d("span",L,u(t.run.title),1),d("div",Q,[U,d("span",X,u(t.run.est),1)])],2)):(o(),r("div",{key:2,class:["content-box",{next:t.upNext,"later-than-next":!t.upNext}]},[d("div",{class:"title",ref:a},u(t.run.title),513),d("div",F,[d("div",B,[H,m(u(t.run.category),1)]),d("div",M,[O,m(u(t.run.platform),1)]),d("div",D,[E,m(u(t.run.est),1)])]),d("div",P,[d("div",T,[$,m(u(t.run.joinedRunnerNames()),1)]),t.run.commentators.length>0?(o(),r("div",A,[G,m(u(t.run.joinedCommentatorNames()),1)])):f("",!0)])],2))],2))},__scopeId:"data-v-35ef5ff4"};t("data-v-31adb734");const z={id:"schedule"};e();const J={setup(t){const e=p(),s=n((()=>e.getters.runsOnSchedule));return(t,e)=>(o(),r("div",z,[(o(!0),r(i,null,y(c(s),((t,e)=>(o(),r(q,{key:e,run:t,upNext:0===e},null,8,["run","upNext"])))),128))]))},__scopeId:"data-v-31adb734"};const K={id:"tweet-container",style:{height:"150px"}};g({setup:t=>(t,e)=>(o(),r(i,null,[d(x),d(h,{animated:""}),d("header",null,[d(k)]),d("main",null,[d(J,{style:{width:"1440px"}}),d("div",K,[d(b,{from:"top",style:{width:"1600px"}})])]),d("footer",null,[d(I)])],64))}).use(N).mount("#root");
