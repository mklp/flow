import{y as a,b6 as t,r as s,Z as i,B as e,F as n,a2 as r,v as o,a8 as b,a0 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import d from"./VisitAnalysis.a5c13101.js";import y from"./VisitAnalysisBar.abeae77c.js";import"./useECharts.ecd4742d.js";import"./index.8c1d7da4.js";import"./props.f48aca0b.js";var p=a({components:{Card:t,VisitAnalysis:d,VisitAnalysisBar:y},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const l={key:0},m={key:1};p.render=function(a,t,s,d,y,p){const f=i("VisitAnalysis"),v=i("VisitAnalysisBar"),j=i("Card");return e(),n(j,c({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",l,[o(f)])):b("",!0),"tab2"===a.activeKey?(e(),n("p",m,[o(v)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default p;