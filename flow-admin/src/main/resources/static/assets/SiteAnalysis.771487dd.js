import{j as a,b3 as t,r as s,K as i,o as e,m as n,Q as r,n as o,X as b,N as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import p from"./VisitAnalysis.9aeec1ea.js";import y from"./VisitAnalysisBar.53f7e9b9.js";import"./useECharts.82269fe4.js";import"./index.521cc965.js";import"./props.f48aca0b.js";var d=a({components:{Card:t,VisitAnalysis:p,VisitAnalysisBar:y},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const m={key:0},l={key:1};d.render=function(a,t,s,p,y,d){const f=i("VisitAnalysis"),j=i("VisitAnalysisBar"),u=i("Card");return e(),n(u,c({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",m,[o(f)])):b("",!0),"tab2"===a.activeKey?(e(),n("p",l,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default d;