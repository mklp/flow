import{_ as e}from"./TableImg.f7de9836.js";import{f as o}from"./BasicForm.49b9f6b2.js";import{u as i}from"./useTable.948e93a8.js";import{b as t}from"./index.b444bbac.js";import{_ as n,c as s,s as a}from"./PositionSeqModal.069447c9.js";import{g as r,d}from"./positionSeq.74b28ecf.js";import{h as l}from"./index.0bb7f928.js";import{j as c,K as m,o as p,m as b,n as f,Q as u,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";const{createMessage:h}=l();var x=c({name:"PositionSeq",components:{BasicTable:e,TableAction:o,PositionSeqModal:n},setup(){const[e,{openModal:o,setModalProps:n}]=t(),[l,{reload:c}]=i({title:"列表",api:r,columns:s,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:l,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1}),n({title:"新增岗位序列"})},handleEdit:function(e,i){i.stopPropagation(),o(!0,{record:e,isUpdate:!0}),n({title:"修改岗位序列"})},handleCreateChild:function(e,i){i.stopPropagation(),n({title:"新增【"+e.name+"】的子序列"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):d([e.id]).then((e=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const g=j(" 新增 ");x.render=function(e,o,i,t,n,s){const a=m("a-button"),r=m("TableAction"),d=m("BasicTable"),l=m("PositionSeqModal");return p(),b("div",null,[f(d,{onRegister:e.registerTable},{toolbar:u((()=>[f(a,{type:"primary",onClick:e.handleCreate},{default:u((()=>[g])),_:1},8,["onClick"])])),action:u((({record:o})=>[f(r,{actions:[{title:"添加子序列",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;