var I=Object.defineProperty,_=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(u,t,e)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,E=(u,t)=>{for(var e in t||(t={}))C.call(t,e)&&h(u,e,t[e]);if(B)for(var e of B(t))M.call(t,e)&&h(u,e,t[e]);return u},b=(u,t)=>_(u,y(t));var f=(u,t,e)=>new Promise((n,r)=>{var c=a=>{try{o(e.next(a))}catch(l){r(l)}},i=a=>{try{o(e.throw(a))}catch(l){r(l)}},o=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,i);o((e=e.apply(u,t)).next())});import{B as j,a as q}from"./index.c505e96f.js";import{B as v}from"./BasicForm.0ba2e15f.js";import{u as N}from"./useForm.696aa965.js";import{z as P,ba as k,A as R,r as S,u as p,j as $,a0 as w,B as T,a1 as V,a6 as O,w as z,a4 as L}from"./vendor.5879c5ca.js";/* empty css               */import{c as U,s as W}from"./company.54be1035.js";import{_ as G}from"./index.e84e956c.js";const re=[{title:"\u5168\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left",width:100},{title:"\u7B80\u79F0",dataIndex:"shortName",align:"left",width:180},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status==1,n=e?"green":"red",r=e?"\u542F\u7528":"\u505C\u7528";return P(k,{color:n},()=>r)}},{title:"\u6392\u5E8F",dataIndex:"orderNo",align:"left",width:80},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u63CF\u8FF0",dataIndex:"descr",align:"left"}],oe=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Z=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"cname",label:"\u5168\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u5168\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}]},{field:"shortName",label:"\u7B80\u79F0",required:!1,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u7B80\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}]},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input"},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528"}},{field:"descr",label:"\u63CF\u8FF0",required:!1,component:"InputTextArea",rules:[{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}]}],H=R({name:"CompanyModal",components:{BasicModal:j,BasicForm:v},emits:["success","register"],setup(u,{emit:t}){const e=S(!0),[n,{resetFields:r,updateSchema:c,setFieldsValue:i,validate:o}]=N({labelWidth:100,schemas:Z,showActionButtonGroup:!1}),a=s=>[{trigger:"blur",validator:(d,g)=>g?U({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(F=>F?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[l,{setModalProps:m,closeModal:D}]=q(s=>f(this,null,function*(){yield r(),m({confirmLoading:!1}),e.value=!!(s==null?void 0:s.isUpdate);let d=s.record;yield c([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...a({id:p(e)&&d&&d.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),p(e)&&i(b(E({},d),{status:d.status===1}))})),x=$(()=>p(e)?"\u4FEE\u6539":"\u65B0\u589E");function A(){return f(this,null,function*(){try{m({confirmLoading:!0});const s=yield o();s.status=s.status?1:0,yield W(s),D(),t("success")}finally{m({confirmLoading:!1})}})}return{registerModal:l,registerForm:n,getTitle:x,handleSubmit:A}}});function J(u,t,e,n,r,c){const i=w("BasicForm"),o=w("BasicModal");return T(),V(o,L(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:O(()=>[z(i,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=G(H,[["render",J]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as C,ne as a,re as c,oe as s};