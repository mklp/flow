var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,o=(e,i,r)=>new Promise(((t,a)=>{var o=e=>{try{l(r.next(e))}catch(i){a(i)}},s=e=>{try{l(r.throw(e))}catch(i){a(i)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);l((r=r.apply(e,i)).next())}));import{B as s,a as l}from"./index.0795d69f.js";import{_ as n}from"./BasicForm.8a33b99c.js";import{u as d}from"./useForm.64c4ba7e.js";import{k as m,l as c,m as f}from"./listener.data.30b3fe8e.js";import{y as p,r as u,u as b,j,Z as v,B as g,F as x,a2 as y,v as h,a0 as P}from"./vendor.880b4c6c.js";import"./index.4926e6da.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";var F=p({name:"ListenerPropertiesModal",components:{BasicModal:s,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const n=u(!0);let p=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],v={};p.forEach((e=>{v[e.value]=e.label}));const[g,{resetFields:x,updateSchema:y,setFieldsValue:h,validate:P}]=d({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[F,{setModalProps:w,closeModal:B}]=l((e=>o(this,null,(function*(){yield x(),w({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let o=e.record;y({field:"value",label:v[o.type]}),yield y([{field:"type",componentProps:{options:p,onChange:e=>{y({field:"value",label:v[e.target.value]})}}},{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:b(n)&&o&&o.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(((e,o)=>{for(var s in o||(o={}))r.call(o,s)&&a(e,s,o[s]);if(i)for(var s of i(o))t.call(o,s)&&a(e,s,o[s]);return e})({},e.record))}))));return{registerModal:F,registerForm:g,getTitle:j((()=>b(n)?"修改":"新增")),handleSubmit:function(){return o(this,null,(function*(){try{w({confirmLoading:!0});const e=yield P();yield f(e),B(),s("success")}finally{w({confirmLoading:!1})}}))}}}});F.render=function(e,i,r,t,a,o){const s=v("BasicForm"),l=v("BasicModal");return g(),x(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[h(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default F;