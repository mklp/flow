import{B as t}from"./index.8f4069d1.js";import{j as a,K as e,o as n,m as o,Q as s,n as r,V as d,ah as l,N as i,Y as f}from"./vendor.686fd1d4.js";import"./index.29a0a4fb.js";/* empty css              */var u=a({components:{BasicDrawer:t},setup:()=>({handleOk:()=>{}})});const p=f(" btn"),c=f(" btn2"),m=f(" btn3");u.render=function(t,a,f,u,b,h){const j=e("a-button"),k=e("BasicDrawer");return n(),o(k,i(t.$attrs,{title:"Modal Title",width:"50%",showFooter:"",onOk:t.handleOk}),{insertFooter:s((()=>[r(j,null,{default:s((()=>[p])),_:1})])),centerFooter:s((()=>[r(j,null,{default:s((()=>[c])),_:1})])),appendFooter:s((()=>[r(j,null,{default:s((()=>[m])),_:1})])),default:s((()=>[(n(),o(d,null,l(40,(t=>r("p",{class:"h-20",key:t}," 根据屏幕高度自适应 "))),64))])),_:1},16,["onOk"])};export default u;