import{p as e,a as t,f as a,c as s,r as n,o,g as c,b as l,d,e as i,t as p,u,T as r,_ as v,q as y,h as f,s as m,v as g,w as h,x as b,i as _,F as w}from"./vendor.cd1d5b6d.js";e("data-v-7ff6f01e");const I={id:"category-platform"};t();const k={props:{dense:Boolean},setup(e){const t=a(),r=s((()=>t.getters.headerInfo)),v=n(null),y=()=>{const e=v.value,t=e.getBoundingClientRect().width;if(t>1700){e.style.transform=`scale(${1700/t})`;const a=e.getBoundingClientRect().width;e.parentNode.style.width=`${a}px`}else e.style.transform="",e.parentNode.style.width=""};return o(y),c(y),(t,a)=>(l(),d("div",{id:"title",class:{dense:e.dense}},[i("div",{id:"game-title",class:{dense:e.dense},ref:v},p(u(r).title),3),i("p",I,p(u(r).category)+" - "+p(u(r).platform),1)],2))},__scopeId:"data-v-7ff6f01e"};const x=h();e("data-v-7536a274");const B={class:"value"},S={key:0},j={key:1},z={key:2},L={key:3},N={key:4};t();const R={props:{oneLine:Boolean,value:String,account:{type:Object,default:{}}},setup:e=>(t,a)=>(l(),d("div",{class:{"one-line":e.oneLine}},[i("p",B,p(e.value),1),i("p",{class:["account",{"one-line":e.oneLine}]},[i(r,{name:"switch"},{default:x((()=>[e.account.twitch?(l(),d("span",S,[i(u(v),{type:"mdi",path:u(y),size:"1.1em",style:{top:"0.1em"}},null,8,["path"]),f(" "+p(e.account.twitch),1)])):e.account.twitter?(l(),d("span",j,[i(u(v),{type:"mdi",path:u(m),size:"1.1em",style:{top:"0.1em"}},null,8,["path"]),f(" "+p(e.account.twitter),1)])):e.account.youtube?(l(),d("span",z,[i(u(v),{type:"mdi",path:u(g),size:"1.1em",style:{top:"0.2em"}},null,8,["path"]),f(" "+p(e.account.youtube),1)])):e.account.nico?(l(),d("span",L,p(e.account.nico),1)):(l(),d("span",N,"-"))])),_:1})],2)],2)),__scopeId:"data-v-7536a274"};e("data-v-ce3697b8");const $={class:"info-box"},C={class:"value-area"};t();const F={props:{label:String,value:String,account:Object,dense:Boolean,time:Boolean},setup:e=>(t,a)=>(l(),d("div",$,[i("span",{class:["label",{dense:e.dense}]},p(e.label),3),i("div",C,[b(t.$slots,"default",{},(()=>[i(R,{value:e.value,account:e.account},null,8,["value","account"])]),{})])])),__scopeId:"data-v-ce3697b8"};const O={props:{value:String,status:String},setup(e){const t=e,a=s((()=>({suspend:"suspend"===t.status,complete:"complete"===t.status})));return(t,s)=>(l(),d("span",{class:["value time",u(a)]},p(e.value),3))},__scopeId:"data-v-0b7714aa"};const T={},q=h();e("data-v-645dbe03");const G={class:"video"};t();const H=q(((e,t)=>(l(),d("div",G))));T.render=H,T.__scopeId="data-v-645dbe03";e("data-v-6a72ec86");const P=i("div",{id:"hashtag-guide"},[f("Hashtag: "),i("span",{class:"hashtag"},"#PGRF3")],-1),A={key:0,id:"next-title"},D=i("span",{class:"label"},"Next Title: ",-1);t();const E={setup(e){const t=a(),n=s((()=>t.getters.footerInfo));return(e,t)=>(l(),d(w,null,[P,u(n)?(l(),d("div",A,[D,f(p(u(n).title)+" | "+p(u(n).category),1)])):_("",!0)],64))},__scopeId:"data-v-6a72ec86"};export{k as _,F as a,T as b,E as c,O as d,R as e};
