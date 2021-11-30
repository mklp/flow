import{B as M}from"./TableImg.73863b69.js";import{T as S}from"./BasicForm.6afa01de.js";import{u as P}from"./useTable.7c1e4a10.js";import{b as T,d as E,p as A,c as D}from"./modelInfo.10317677.js";import{P as k}from"./index.77f474a0.js";import $ from"./FlowCategoryTree.a24abfcf.js";import{b as h}from"./index.30115123.js";import{M as R,c as W,s as H}from"./ModelInfoModal.2a751d6c.js";import O from"./index.56b14f3e.js";import{A as U,bA as z,c2 as K,aE as L,ba as N,c8 as V,r as l,$ as G,a0 as q,bo as J,F as Q,B as Y,a1 as Z,a6 as ee,u as j,L as te,N as oe,H as ne}from"./vendor.7bee64cc.js";/* empty css               *//* empty css                *//* empty css                */import{a as ie}from"./app.c495d461.js";import{_ as ae,r as se,h as re}from"./index.9eb02b52.js";import{A as le}from"./index.c6b8a214.js";/* empty css                *//* empty css              */import"./useForm.1fd322f5.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               */import"./useSortable.dd731734.js";/* empty css                *//* empty css               *//* empty css               */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                */import"./useContentViewHeight.52836077.js";import"./Tree.vue_vue&type=style&index=0&lang.43e63f89.js";import"./useContextMenu.e899090d.js";import"./category.60fe278c.js";/* empty css                *//* empty css                */import"./index.839cf33f.js";import"./index.esm.01aeab01.js";const{createMessage:x}=re(),de=U({name:"Bpmn",components:{BasicTable:M,PageWrapper:k,FlowCategoryTree:$,ModelInfoModal:R,TableAction:S,Avatar:z,Badge:K,Popconfirm:L,Tag:N,DeleteOutlined:V,Authority:le,BpmnPreviewModal:O},setup(){const t=se(),[d,{openModal:s}]=h(),[u,{openModal:c,setModalProps:p}]=h();l({});const i=l({}),o=l(!1),[C,{getForm:v,reload:a}]=P({title:"\u5217\u8868",api:T,columns:W,formConfig:{labelWidth:120,schemas:H,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});G(()=>{const{updateSchema:e}=v();ie().then(n=>{e([{field:"appSn",componentProps:{options:n,labelField:"id"}}])})});function _(){if(!j(i).code){x.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}s(!0,{record:{categoryCode:j(i).code},isUpdate:!0})}function B(e,n){const{status:r}=e;return[{icon:"ant-design:eye",title:"\u9884\u89C8",label:"",onClick:w.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:b.bind(null,e)},ifShow:r===2},{icon:"ant-design:stop-twotone",title:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:g.bind(null,e)},ifShow:r===3||r===2},{icon:"clarity:note-edit-line",title:"\u4FEE\u6539",label:"",onClick:m.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:f.bind(null,e)}}]}function w(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),p({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function m(e){s(!0,{record:e,isUpdate:!0})}function F(){t("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")}function f(e){E([e.id]).then(n=>{a()})}function b(e){o.value=!0,A(e.modelId).then(n=>{a(),x.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{o.value=!1})}function g(e){o.value=!0,D(e.modelId).then(n=>{a()}).finally(()=>{o.value=!1})}function X(){a()}function y(){}function I(e){i.value=e;let n={categoryCode:e?e.code:""};a({searchInfo:n})}return{loadingRef:o,registerTable:C,registerBpmnPreviewModal:u,registerModal:d,handlePublish:b,handleStop:g,createActions:B,handleCreate:_,handleEdit:m,cancelDeleteRole:y,handleDelete:f,handleSuccess:X,openTab:F,handleSelect:I}}}),ue=t=>(te("data-v-ff135daa"),t=t(),oe(),t),ce=ue(()=>ne("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," \u656C\u8BF7\u671F\u5F85\uFF01 ",-1));function pe(t,d,s,u,c,p){const i=q("PageWrapper"),o=J("loading");return Q((Y(),Z(i,{dense:"",contentFullHeight:"",fixedHeight:""},{default:ee(()=>[ce]),_:1},512)),[[o,t.loadingRef]])}var it=ae(de,[["render",pe],["__scopeId","data-v-ff135daa"]]);export{it as default};