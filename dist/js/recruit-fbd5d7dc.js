import{e as S,d as z,f as T,g as U,h as I,i as O,y as P,z as Q,A as L,B as R,l as W}from"./element-plus-f3b87d53.js";import{_ as X}from"./wechat-61861ca9.js";import{_ as G}from"./qqgroup-108d4e4e.js";import{r as V,j as K,D as M,o as r,c as d,a as C,O as t,Q as l,u as a,at as H,F as m,a6 as E,R as f,U as D,V as F,au as J,av as Y}from"./@vue-7f8fdc6b.js";import{x as h,_ as Z}from"./index-fedad782.js";import"./@vueuse-a1dbed23.js";import"./lodash-es-c7fcb07d.js";import"./async-validator-604317c1.js";import"./@element-plus-4ef95e2d.js";import"./dayjs-d3824421.js";import"./aos-80360ef4.js";import"./@popperjs-535f1f87.js";import"./@ctrl-aa1b1e70.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./pinia-211e5b89.js";import"./picture-verification-code-77c40e50.js";import"./vue-router-7a0d620c.js";import"./nprogress-6c9d9548.js";const $=[{logo:"https://gw.alicdn.com/imgextra/i3/O1CN0175GaEE1WFD2QbMmw2_!!6000000002758-2-tps-200-53.png",type:["\u5E94\u5C4A\u751F","1-3\u5E74\u7ECF\u9A8C"],job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",corporation:"\u98DE\u732A\u65C5\u884C\uFF08\u963F\u91CC\u96C6\u56E2\u65D7\u4E0B\uFF09",tags:["\u798F\u5229\u5F85\u9047\u597D","\u9762\u8BD5\u7B80\u5355","\u4E0D\u6253\u5361"],endTime:"\u5C3D\u5FEB\u6295\u9012",educational_required:["\u7EDF\u62DB\u672C\u79D1","\u4E0D\u5F3A\u5236\u8981\u6C4292"],remark:"\u56E2\u961F\u6C1B\u56F4\u5F88\u597D\u901F\u51B2",external_link:"https://www.zhipin.com/job_detail/a871e43e3d756d851XN_09m-EltV.html?ka=personal_submitted_job_a871e43e3d756d851XN_09m-EltV"}],uu=["985/211\u672C\u79D1","\u4E0D\u5F3A\u5236\u8981\u6C4292","\u4F18\u79C0\u53EF\u7279\u6279","\u7EDF\u62DB\u672C\u79D1","\u4E13\u5347\u672C","\u4E13\u79D1"],eu=["996","855","965","1075","WLB","\u4E0B\u5348\u8336","\u9910\u8865","\u623F\u8865","\u4E94\u9669\u4E00\u91D1","\u516D\u9669\u4E00\u91D1","\u798F\u5229\u5F85\u9047\u597D","\u9762\u8BD5\u7B80\u5355","\u770B\u4E2D\u57FA\u7840","\u521B\u4E1A\u516C\u53F8","\u4E92\u8054\u7F51\u5927\u5382","\u4E0D\u6253\u5361","\u5F39\u6027\u4E0A\u73ED"],tu=["\u5E94\u5C4A\u751F","\u4E00\u5E74\u4EE5\u5185","1-3\u5E74\u7ECF\u9A8C","3-5\u5E74\u7ECF\u9A8C","5-10\u5E74\u7ECF\u9A8C"];function lu(){const c=V({pageNum:1,pageSize:8,keyword:"",job:"",type:"",educational_required:"",icu:""}),b=V([]);function n(){let s=$;const e=c.value;e.educational_required&&(s=s.filter(o=>o.educational_required.includes(e.educational_required))),e.keyword&&(s=s.filter(o=>o.corporation.includes(e.keyword)||o.remark.includes(e.keyword))),e.job&&(s=s.filter(o=>o.job.includes(e.job))),e.type&&(s=s.filter(o=>o.type.includes(e.type))),e.icu&&(s=s.filter(o=>o.tags.includes(e.icu)));const g=(e.pageNum-1)*e.pageSize;b.value=s.slice(g,g+e.pageSize)}function B(s){c.value.pageNum=s,n()}function y(){c.value={pageNum:1,pageSize:8,keyword:"",job:"",type:"",educational_required:"",icu:""}}return K(n),{data:b,form:c,query:n,reset:y,pageNumChange:B}}const au=c=>(J("data-v-fb845b12"),c=c(),Y(),c),ou={class:"recruit flex"},ru={class:"recruit-data content-card mr-20","data-aos":"fade-right"},nu=au(()=>C("h6",{class:"mb-20",style:{color:"var(--strong-color)"}}," PS: \u9700\u8981\u6DFB\u52A0\u5C97\u4F4D\u7684\u53EF\u4EE5\u8054\u7CFB\u4F5C\u8005 \u5FC5\u987B\u662F\u771F\u6B63\u62DB\u4EBA\u7684\u5C97\u4F4D \u5982\u679C\u53D1\u73B0\u5237 KPI \u5C06\u653E\u5165\u9ED1\u540D\u5355\u518C\u516C\u793A ",-1)),su={class:"recruit-limit"},iu=["src"],du={key:1,class:"iconfont icon-city font-25"},cu={key:0,class:"line-1"},pu={key:1,style:{color:"var(--strong-color)"}},_u=H('<div class="recruit-slide content-card" data-aos="fade-left" data-v-fb845b12><p class="mb-10" data-v-fb845b12>\u4F5C\u8005\u5FAE\u4FE1</p><img src="'+X+'" alt="\u8054\u7CFB\u65B9\u5F0F" class="author qr" data-v-fb845b12><br data-v-fb845b12><br data-v-fb845b12><p class="mb-10" data-v-fb845b12>QQ \u4EA4\u6D41\u7FA4</p><img src="'+G+'" alt="QQ\u4EA4\u6D41\u7FA4" class="qqgroup qr" data-v-fb845b12></div>',1),mu=M({__name:"recruit",setup(c){const{data:b,form:n,reset:B,pageNumChange:y}=lu();return(s,e)=>{const g=S,o=z,k=T,v=U,q=I,x=O,p=P,A=Q,N=L,j=R,w=W;return r(),d("div",ou,[C("div",ru,[nu,t(x,{inline:!0,model:a(n)},{default:l(()=>[t(o,{label:"\u6A21\u7CCA\u641C\u7D22"},{default:l(()=>[t(g,{modelValue:a(n).keyword,"onUpdate:modelValue":e[0]||(e[0]=u=>a(n).keyword=u),placeholder:"\u5173\u952E\u8BCD\u641C\u7D22",clearable:""},null,8,["modelValue"])]),_:1}),t(o,{label:"\u5DE5\u4F5C\u5C97\u4F4D"},{default:l(()=>[t(g,{modelValue:a(n).job,"onUpdate:modelValue":e[1]||(e[1]=u=>a(n).job=u),placeholder:"\u5C97\u4F4D\u7B5B\u9009",clearable:""},null,8,["modelValue"])]),_:1}),t(o,{label:"\u5B66\u5386\u8981\u6C42"},{default:l(()=>[t(v,{modelValue:a(n).educational_required,"onUpdate:modelValue":e[2]||(e[2]=u=>a(n).educational_required=u),placeholder:"\u5B66\u5386\u8981\u6C42",clearable:""},{default:l(()=>[(r(!0),d(m,null,E(a(uu),(u,i)=>(r(),f(k,{label:u,value:u,key:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(o,{label:"\u5DE5\u4F5C\u7ECF\u9A8C"},{default:l(()=>[t(v,{modelValue:a(n).type,"onUpdate:modelValue":e[3]||(e[3]=u=>a(n).type=u),placeholder:"\u62DB\u8058\u7C7B\u578B",clearable:""},{default:l(()=>[(r(!0),d(m,null,E(a(tu),(u,i)=>(r(),f(k,{label:u,value:u,key:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(o,{label:"\u516C\u53F8\u6807\u7B7E"},{default:l(()=>[t(v,{modelValue:a(n).icu,"onUpdate:modelValue":e[4]||(e[4]=u=>a(n).icu=u),placeholder:"\u6309\u6807\u7B7E\u7B5B\u9009",clearable:""},{default:l(()=>[(r(!0),d(m,null,E(a(eu),(u,i)=>(r(),f(k,{label:u,value:u,key:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(o,null,{default:l(()=>[t(q,{color:"var(--theme)",onClick:a(B)},{default:l(()=>[D("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),C("div",su,[t(j,{data:a(b),style:{width:"100%"}},{default:l(()=>[t(p,{label:"Logo",prop:"logo"},{default:l(({row:u})=>[u.logo?(r(),d("img",{key:0,class:"corporation_logo",src:u.logo,alt:"\u516C\u53F8logo"},null,8,iu)):(r(),d("i",du))]),_:1}),t(p,{label:"\u516C\u53F8\u540D\u79F0",prop:"corporation"},{default:l(({row:u})=>[C("strong",null,F(u.corporation),1)]),_:1}),t(p,{label:"\u5C97\u4F4D",prop:"job"}),t(p,{label:"\u5DE5\u4F5C\u7ECF\u9A8C",prop:"type"},{default:l(({row:u})=>[(r(!0),d(m,null,E(u.type,(i,_)=>(r(),f(A,{type:a(h)(_),key:_},{default:l(()=>[D(F(i),1)]),_:2},1032,["type"]))),128))]),_:1}),t(p,{label:"\u5B66\u5386\u8981\u6C42",prop:"educational_required"},{default:l(({row:u})=>[(r(!0),d(m,null,E(u.educational_required,(i,_)=>(r(),f(A,{type:a(h)(_),key:_,round:""},{default:l(()=>[D(F(i),1)]),_:2},1032,["type"]))),128))]),_:1}),t(p,{label:"\u516C\u53F8\u6807\u7B7E",prop:"tags"},{default:l(({row:u})=>[(r(!0),d(m,null,E(u.tags,(i,_)=>(r(),f(A,{type:a(h)(_),key:_},{default:l(()=>[D(F(i),1)]),_:2},1032,["type"]))),128))]),_:1}),t(p,{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"}),t(p,{label:"\u6295\u9012\u901A\u9053",prop:"external_link"},{default:l(({row:u})=>[typeof u.external_link=="string"?(r(),d("div",cu,[t(N,{href:u.external_link,target:"_blank"},{default:l(()=>[D(" \u70B9\u51FB\u6295\u9012 ")]),_:2},1032,["href"])])):(r(),d("div",pu,[C("span",null,F(u.external_link.app)+": ",1),C("span",null,F(u.external_link.contact),1)]))]),_:1}),t(p,{label:"\u5907\u6CE8",prop:"remark"})]),_:1},8,["data"]),t(w,{"onUpdate:currentPage":a(y),"page-size":a(n).pageSize,class:"mt-20",layout:"prev, pager, next, total",total:a(b).length},null,8,["onUpdate:currentPage","page-size","total"])])]),_u])}}});const Su=Z(mu,[["__scopeId","data-v-fb845b12"]]);export{Su as default};
