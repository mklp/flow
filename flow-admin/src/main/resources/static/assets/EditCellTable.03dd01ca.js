import{_ as e}from"./TableImg.f5e002b4.js";import"./BasicForm.4f71108f.js";import{u as t}from"./useTable.38359fc9.js";import{o as i}from"./select.cba96301.js";import{d}from"./table.2a8a22a3.js";import{k as n,K as o,o as a,n as r,q as m}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";import"./index.574e7466.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.919850c0.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";const s=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>{return t=this,i=null,d=function*(){return"2"===e?"不能输入该值":""},new Promise(((e,n)=>{var o=e=>{try{r(d.next(e))}catch(t){n(t)}},a=e=>{try{r(d.throw(e))}catch(t){n(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);r((d=d.apply(t,i)).next())}));var t,i,d},width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var p=n({components:{BasicTable:e},setup(){const[e]=t({title:"可编辑单元格示例",api:d,columns:s,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};p.render=function(e,t,i,d,n,s){const p=o("BasicTable");return a(),r("div",l,[m(p,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default p;