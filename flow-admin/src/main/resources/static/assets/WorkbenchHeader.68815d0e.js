import{A as o,bA as n,j as r,a0 as c,B as l,D as u,w as d,H as s,J as i,bB as m}from"./vendor.7bee64cc.js";/* empty css                */import{f,_ as p}from"./index.9eb02b52.js";import{h as x}from"./header.d801b988.js";const _=o({components:{Avatar:n},setup(){const e=f();return{userinfo:r(()=>e.getUserInfo),headerImg:x}}}),v={class:"lg:flex"},h={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},j={class:"md:text-lg text-md"},y=s("span",{class:"text-secondary"}," \u4ECA\u65E5\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",-1),E=m('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> \u5F85\u529E </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> \u9879\u76EE </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> \u56E2\u961F </span><span class="text-2xl">300</span></div></div>',1);function F(e,t,g,b,A,B){const a=c("Avatar");return l(),u("div",v,[d(a,{src:e.userinfo.avatar||e.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),s("div",h,[s("h1",j,"\u65E9\u5B89, "+i(e.userinfo.realName)+", \u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01",1),y]),E])}var $=p(_,[["render",F]]);export{$ as default};