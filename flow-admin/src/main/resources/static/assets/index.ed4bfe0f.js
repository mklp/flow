import{_ as e}from"./TableImg.6ede5ece.js";import{f as o}from"./BasicForm.7cdef168.js";import{u as t}from"./useTable.7540cc94.js";import{g as a,d as n}from"./jobGrade.f4c30bd2.js";import{_ as i}from"./PageWrapper.5f4c8315.js";import s from"./JobGradeTypeList.3bf95f38.js";import{b as r}from"./useModal.46624a04.js";import{_ as d,c,s as l}from"./JobGradeModal.3b79b252.js";import{k as m,aw as p,r as u,u as f,K as b,o as j,n as x,Q as g,q as h,Y as C}from"./vendor.9d9efc92.js";import{g as w}from"./index.5e2cac4f.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.42d665ec.js";import"./useContextMenu.bb55dbb9.js";import"./jobGradeType.60059d50.js";const{createMessage:S}=w();var T=m({name:"JobGrade",components:{BasicTable:e,PageWrapper:i,JobGradeTypeList:s,JobGradeModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o}]=r(),i=u({}),[s,{reload:d}]=t({title:"列表",api:a,immediate:!1,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function m(e){i.value=e;let o={typeId:e?e.id:""};d({searchInfo:o})}return{registerTable:s,registerModal:e,handleCreate:function(){f(i).code?o(!0,{record:{typeId:f(i).id,typeCode:f(i).code},isUpdate:!0}):S.warning("请选择分类！",2)},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{d()}))},handleSuccess:function(){m(i.value)},handleSelect:m}}});const y=C("新增");T.render=function(e,o,t,a,n,i){const s=b("JobGradeTypeList"),r=b("a-button"),d=b("TableAction"),c=b("BasicTable"),l=b("JobGradeModal"),m=b("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:g((()=>[h(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[y])),_:1},8,["onClick"])])),action:g((({record:o})=>[h(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default T;