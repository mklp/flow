import{_ as e}from"./TableImg.2184ae21.js";import{g as o}from"./BasicForm.f3cb7023.js";import{u as i}from"./useTable.e98ad9ef.js";import{g as t,d as n}from"./dicType.947f2fad.js";import{_ as a,c as s,s as r}from"./DicTypeModal.091a84bd.js";import{h as d}from"./index.a33a5e4d.js";import{b as c}from"./index.98d9f37c.js";import{y as l,Z as p,B as m,F as f,v as u,a2 as b,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";const{createMessage:h}=d();var g=l({name:"GetDic",components:{BasicTable:e,TableAction:o,GetDicModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=c(),[d,{reload:l}]=i({title:"列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,pagination:!1,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(){a({title:"新增字典分类"}),o(!0,{isUpdate:!1})},handleEdit:function(e,i){i.stopPropagation(),a({title:"修改字典分类"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,i){i.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const x=j(" 新增 ");g.render=function(e,o,i,t,n,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),c=p("GetDicModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(r,{actions:[{tooltip:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;