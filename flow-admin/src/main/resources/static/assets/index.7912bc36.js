import{_ as e}from"./TableImg.e8129589.js";import{g as o}from"./BasicForm.5cce9782.js";import{u as t}from"./useTable.abd431f8.js";import{g as i,c as n,s as a,d as r}from"./module.data.a689a6ce.js";import{h as d}from"./index.8c1d7da4.js";import s from"./ModuleModal.d6c59ff9.js";import l from"./PValueSettingModal.5a1dc27f.js";import{b as c}from"./index.acbe981f.js";import{y as u,Y as p,Z as m,B as f,F as b,v as h,a2 as g,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";import"./appPrivilegeValue.9ab366f1.js";const{createMessage:x}=d();var M=u({name:"Module",components:{BasicTable:e,TableAction:o,ModuleModal:s,PValueSettingModal:l},setup(){const[e,{openModal:o,setModalProps:d}]=c(),[s,{openModal:l}]=c(),[u,{reload:m,expandAll:f}]=t({title:"列表",api:i,columns:n,isTreeTable:!0,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,useSearchForm:!0,pagination:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:170,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return p((()=>{setTimeout((()=>{f()}),1e3)})),{registerTable:u,registerModal:e,registerPValueModal:s,handleCreate:function(e){d({title:"新增菜单"}),o(!0,{record:e,isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),d({title:"修改菜单"}),o(!0,{record:e,isUpdate:!0})},handleEditPValue:function(e,o){o.stopPropagation(),l(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),d({title:"新增【"+e.name+"】的子菜单"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?x.warning("有子节点，不能删除！"):r([e.id]).then((()=>{m()}))},handleSuccess:function(){return e=this,o=null,t=function*(){yield m(),setTimeout((()=>{f()}),100)},new Promise(((i,n)=>{var a=e=>{try{d(t.next(e))}catch(o){n(o)}},r=e=>{try{d(t.throw(e))}catch(o){n(o)}},d=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,r);d((t=t.apply(e,o)).next())}));var e,o,t}}}});const C=j(" 新增 ");M.render=function(e,o,t,i,n,a){const r=m("a-button"),d=m("Authority"),s=m("TableAction"),l=m("BasicTable"),c=m("ModuleModal"),u=m("PValueSettingModal");return f(),b("div",null,[h(l,{onRegister:e.registerTable},{toolbar:g((()=>[h(d,{value:"Module:0"},{default:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[C])),_:1},8,["onClick"])])),_:1})])),action:g((({record:o})=>[h(s,{actions:[{auth:"Module:0",tooltip:"添加子菜单",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{auth:"Module:6",tooltip:"设置权限值",icon:"ant-design:setting-outlined",onClick:e.handleEditPValue.bind(null,o)},{auth:"Module:2",tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{auth:"Module:3",tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(u,{onRegister:e.registerPValueModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default M;