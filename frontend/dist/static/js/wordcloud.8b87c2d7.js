"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[434],{392:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var n=o(641);const a={class:"WordCloudComponent"},l=(0,n.Lk)("h2",null,"小词云",-1),r={id:"word-text-area"},d={id:"word-img"},u=(0,n.Lk)("div",{class:"image-slot"},[(0,n.Lk)("i",{class:"el-icon-picture-outline"})],-1),c={id:"word-operation"};function i(e,t,o,i,s,p){const f=(0,n.g2)("el-input"),k=(0,n.g2)("el-image"),m=(0,n.g2)("el-button"),g=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",a,[l,(0,n.Lk)("div",r,[(0,n.bF)(f,{type:"textarea",rows:10,placeholder:"请输入内容",modelValue:e.textarea,"onUpdate:modelValue":t[0]||(t[0]=t=>e.textarea=t)},null,8,["modelValue"]),(0,n.Lk)("div",d,[(0,n.bF)(k,{src:e.getImageSrc(),fit:e.fit},{error:(0,n.k6)((()=>[u])),_:1},8,["src","fit"])]),(0,n.Lk)("div",c,[(0,n.bF)(g,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{type:"primary",onClick:e.onSubmit,round:""},{default:(0,n.k6)((()=>[(0,n.eW)("生成词云")])),_:1},8,["onClick"]),e.pic?((0,n.uX)(),(0,n.Wv)(m,{key:0,type:"success",onClick:e.onDownload,round:""},{default:(0,n.k6)((()=>[(0,n.eW)("下载图片")])),_:1},8,["onClick"])):(0,n.Q3)("",!0)])),_:1})])])])}var s=o(953),p=o(894),f=(0,n.pM)({name:"WordCloudComponent",setup(){const e=(0,s.KR)(""),t=(0,s.KR)(""),o="fill";async function n(){const o={word:e.value};try{const e=await p.A.post("/word/cloud/generate",o);t.value=`data:image/png;base64,${e.data}`}catch(n){console.log(n.response?.data)}}function a(){const e=t.value,o=document.createElement("a");o.href=e,o.setAttribute("download","word-cloud.png"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function l(){return t.value?t.value:""}return{textarea:e,pic:t,fit:o,onSubmit:n,onDownload:a,getImageSrc:l}}}),k=o(262);const m=(0,k.A)(f,[["render",i]]);var g=m}}]);
//# sourceMappingURL=wordcloud.8b87c2d7.js.map