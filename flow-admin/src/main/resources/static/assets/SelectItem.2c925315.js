import{y as e,bx as t,j as s,Z as i,B as n,F as a,v as o,J as r,a0 as l,K as d}from"./vendor.880b4c6c.js";import{c as p}from"./index.10e3b51a.js";import{b as f}from"./index.b1a5b0b3.js";import"./index.3483fc8c.js";/* empty css              *//* empty css              */import"./index.f3665714.js";import"./index.f914bbf3.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.2584f299.js";import"./useContentViewHeight.17c92794.js";/* empty css              */import"./useSortable.6ed16464.js";import"./lock.ff73f06b.js";var m=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const c=d()(((e,t,s,d,p,f)=>{const m=i("Select");return n(),a("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(m,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));m.render=c,m.__scopeId="data-v-2dba4940";export default m;