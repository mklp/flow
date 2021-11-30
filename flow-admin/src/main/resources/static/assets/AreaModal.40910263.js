var x=Object.defineProperty;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(e,s,t)=>s in e?x(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,A=(e,s)=>{for(var t in s||(s={}))M.call(s,t)&&w(e,t,s[t]);if(b)for(var t of b(s))P.call(s,t)&&w(e,t,s[t]);return e};var g=(e,s,t)=>new Promise((u,o)=>{var d=r=>{try{n(t.next(r))}catch(c){o(c)}},l=r=>{try{n(t.throw(r))}catch(c){o(c)}},n=r=>r.done?u(r.value):Promise.resolve(r.value).then(d,l);n((t=t.apply(e,s)).next())});import{B as j,a as k}from"./index.30115123.js";import{B as I}from"./BasicForm.6afa01de.js";import{u as S}from"./useForm.1fd322f5.js";import{ax as m,bc as C,aV as O,_ as R}from"./index.9eb02b52.js";import{A as $,r as T,u as h,j as U,a0 as D,B as q,a1 as N,a6 as V,w as G,a4 as L}from"./vendor.7bee64cc.js";const ae=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:100,align:"left"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],re=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],z=[{field:"pcode",label:"pcode",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:20,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E20\uFF01"}]},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input"}];var i;(function(e){e.GetAreas="/flow/base/area/getAreas",e.SaveOrUpdate="/flow/base/area/saveOrUpdate",e.Delete="/flow/base/area/delete",e.GetAreasByPcode="/flow/base/area/getAreasByPcode",e.CheckEntityExist="/flow/base/area/checkEntityExist"})(i||(i={}));const oe=e=>{const s=m.post({url:i.GetAreas,params:e});return Promise.resolve(s).then(t=>{const u=C(t,{id:"code",children:"children",pid:"pcode"});return O(u,o=>{o.children.length===0&&delete o.children},{id:"code",children:"children",pid:"pcode"}),u})},W=e=>m.post({url:i.SaveOrUpdate,params:e}),ue=e=>m.post({url:i.Delete+"/",params:e}),H=e=>m.post({url:i.CheckEntityExist,params:e}),Z=$({name:"AreaModal",components:{BasicModal:j,BasicForm:I},emits:["success","register"],setup(e,{emit:s}){const t=T(!0),[u,{resetFields:o,updateSchema:d,setFieldsValue:l,validate:n}]=S({labelWidth:100,schemas:z,showActionButtonGroup:!1}),r=a=>[{trigger:"blur",validator:(p,E)=>E?H({id:a.id,field:a.field,fieldValue:E,fieldName:a.fieldName}).then(F=>F?Promise.resolve():Promise.reject(a.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[c,{setModalProps:f,closeModal:y,changeLoading:B}]=k(a=>g(this,null,function*(){yield o(),f({confirmLoading:!1}),t.value=!!(a==null?void 0:a.isUpdate);let p=a.record;yield d([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:10,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E10\uFF01"},...r({id:h(t)&&p&&p.code||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),h(t)&&l(A({},a.record))})),_=U(()=>h(t)?"\u4FEE\u6539":"\u65B0\u589E");function v(){return g(this,null,function*(){B(!0);try{f({confirmLoading:!0});const a=yield n();yield W(a),y(),s("success")}finally{f({confirmLoading:!1}),B(!1)}})}return{registerModal:c,registerForm:u,getTitle:_,handleSubmit:v}}});function J(e,s,t,u,o,d){const l=D("BasicForm"),n=D("BasicModal");return q(),N(n,L(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:V(()=>[G(l,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=R(Z,[["render",J]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as A,ne as a,ae as c,ue as d,oe as g,re as s};