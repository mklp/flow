import{C as e}from"./index.3fb6ecb2.js";import{P as t}from"./index.c524f834.js";import{j as n,bu as a,r as o,K as i,o as l,m as d,Q as m,n as r,Y as u}from"./vendor.686fd1d4.js";/* empty css              */import"./index.f9173908.js";import"./useWindowSizeFn.d82e06bf.js";import"./useContentViewHeight.1a732a79.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const s='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}';var c=n({components:{CodeEditor:e,PageWrapper:t,RadioButton:a.Button,RadioGroup:a.Group},setup(){const e=o("application/json"),t=o(s);return{value:t,modeValue:e,handleModeChange:function(e){const n=e.target.value;"application/json"!==n?"htmlmixed"!==n?"javascript"!==n||(t.value="\n      (() => {\n        var htmlRoot = document.getElementById('htmlRoot');\n        var theme = window.localStorage.getItem('__APP__DARK__MODE__');\n        if (htmlRoot && theme) {\n          htmlRoot.setAttribute('data-theme', theme);\n          theme = htmlRoot = null;\n        }\n      })();\n  "):t.value='\n     <!DOCTYPE html>\n<html lang="en" id="htmlRoot">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <meta name="renderer" content="webkit" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"\n    />\n    <title><%= title %></title>\n    <link rel="icon" href="/favicon.ico" />\n  </head>\n  <body>\n    <div id="app">\n    </div>\n  </body>\n</html>\n  ':t.value=s}}}});const p=u(" json数据 "),h=u(" html代码 "),v=u(" javascript代码 ");c.render=function(e,t,n,a,o,u){const s=i("RadioButton"),c=i("RadioGroup"),f=i("CodeEditor"),x=i("PageWrapper");return l(),d(x,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:m((()=>[r(c,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[1]||(t[1]=t=>e.modeValue=t),onChange:e.handleModeChange},{default:m((()=>[r(s,{value:"application/json"},{default:m((()=>[p])),_:1}),r(s,{value:"htmlmixed"},{default:m((()=>[h])),_:1}),r(s,{value:"javascript"},{default:m((()=>[v])),_:1})])),_:1},8,["value","onChange"])])),default:m((()=>[r(f,{value:e.value,"onUpdate:value":t[2]||(t[2]=t=>e.value=t),mode:e.modeValue},null,8,["value","mode"])])),_:1})};export default c;