webpackJsonp([1],{0:function(t,a,e){t.exports=e("NHnr")},"9ldf":function(t,a){},Ai1c:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("/5sW"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}}),t._v(" "),e("router-view")],1)},i=[],o=e("XyMi");function c(t){e("Y9kN")}var r=null,l=!1,d=c,u=null,v=null,f=Object(o["a"])(r,n,i,l,d,u,v),b=f.exports,_=e("/ocq"),h={name:"backlog",data:function(){return{}},methods:{nextKanban:function(t,a){this.$db.ref("todo").child(a).set(t),this.$db.ref("backlog").child(a).set(null)},deleteKanban:function(t){this.$db.ref("backlog").child(t).set(null)}},created:function(){},computed:{dataBacklogs:function(){return this.$store.getters.getBacklogs}}},C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"backlog"},t._l(t.dataBacklogs,function(a,s){return e("div",{key:s},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          "+t._s(a.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"button is-info is-rounded"},[t._v("POINT : "+t._s(a.point))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"button is-success is-rounded"},[t._v("ASSIGN TO : "+t._s(a.assign))])])]),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",on:{click:function(a){t.deleteKanban(s)}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(e){t.nextKanban(a,s)}}},[t._v("Next")])])]),t._v(" "),e("br")])}))},p=[];function m(t){e("dtau")}var g=!1,k=m,$="data-v-5cb9648d",w=null,K=Object(o["a"])(h,C,p,g,k,$,w),D=K.exports,y={name:"todo",data:function(){return{}},methods:{nextKanban:function(t,a){this.$db.ref("doing").child(a).set(t),this.$db.ref("todo").child(a).set(null)},previewKanban:function(t,a){this.$db.ref("backlog").child(a).set(t),this.$db.ref("todo").child(a).set(null)},deleteKanban:function(t){this.$db.ref("todo").child(t).set(null)}},created:function(){},computed:{dataTodos:function(){return this.$store.getters.getTodos}}},x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"todo"},t._l(t.dataTodos,function(a,s){return e("div",{key:s},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          "+t._s(a.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"button is-info is-rounded"},[t._v("POINT : "+t._s(a.point))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"button is-success is-rounded"},[t._v("ASSIGN TO : "+t._s(a.assign))])])]),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",on:{click:function(e){t.previewKanban(a,s)}}},[t._v("Prev")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(a){t.deleteKanban(s)}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(e){t.nextKanban(a,s)}}},[t._v("Next")])])])])}))},S=[];function T(t){e("Ai1c")}var N=!1,O=T,I="data-v-21433c5a",P=null,B=Object(o["a"])(y,x,S,N,O,I,P),A=B.exports,E={name:"doing",data:function(){return{}},methods:{nextKanban:function(t,a){this.$db.ref("done").child(a).set(t),this.$db.ref("doing").child(a).set(null)},previewKanban:function(t,a){this.$db.ref("todo").child(a).set(t),this.$db.ref("doing").child(a).set(null)},deleteKanban:function(t){this.$db.ref("doing").child(t).set(null)}},created:function(){},computed:{dataDoing:function(){return this.$store.getters.getDoing}}},j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"doing"},t._l(t.dataDoing,function(a,s){return e("div",{key:s},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          "+t._s(a.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"button is-info is-rounded"},[t._v("POINT : "+t._s(a.point))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"button is-success is-rounded"},[t._v("ASSIGN TO : "+t._s(a.assign))])])]),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",on:{click:function(e){t.previewKanban(a,s)}}},[t._v("Prev")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(a){t.deleteKanban(s)}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(e){t.nextKanban(a,s)}}},[t._v("Next")])])]),t._v(" "),e("br")])}))},L=[];function M(t){e("9ldf")}var z=!1,G=M,R="data-v-39b64c6f",X=null,Y=Object(o["a"])(E,j,L,z,G,R,X),q=Y.exports,H={name:"done",data:function(){return{}},methods:{previewKanban:function(t,a){this.$db.ref("doing").child(a).set(t),this.$db.ref("done").child(a).set(null)},deleteKanban:function(t){this.$db.ref("done").child(t).set(null)}},created:function(){},computed:{dataDones:function(){return this.$store.getters.getDone}}},J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"done"},t._l(t.dataDones,function(a,s){return e("div",{key:s},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          "+t._s(a.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"button is-info is-rounded"},[t._v("POINT : "+t._s(a.point))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"button is-success is-rounded"},[t._v("ASSIGN TO : "+t._s(a.assign))])])]),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",on:{click:function(e){t.previewKanban(a,s)}}},[t._v("Perv")]),t._v(" "),e("a",{staticClass:"card-footer-item",on:{click:function(a){t.deleteKanban(s)}}},[t._v("Delete")])])]),t._v(" "),e("br")])}))},U=[];function V(t){e("s4D/")}var W=!1,F=V,Q="data-v-c16cc1aa",Z=null,tt=Object(o["a"])(H,J,U,W,F,Q,Z),at=tt.exports,et={name:"home",components:{BackLog:D,Todo:A,Doing:q,Done:at},data:function(){return{isCreate:!1,kanbanCreate:{title:"",point:"",assign:""}}},methods:{getAllKanban:function(){var t=this;this.$db.ref("backlog").on("value",function(a){t.$store.commit("setBackLog",a.val())}),this.$db.ref("todo").on("value",function(a){t.$store.commit("setTodo",a.val())}),this.$db.ref("doing").on("value",function(a){t.$store.commit("setDoing",a.val())}),this.$db.ref("done").on("value",function(a){t.$store.commit("setDone",a.val())})},createKanban:function(){this.$db.ref("backlog").push(this.kanbanCreate),this.kanbanCreate={title:"",point:"",assign:""},this.isCreate=!1},setIsCreate:function(){this.isCreate=!0}},created:function(){this.getAllKanban()}},st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"container is-fluid"},[t._m(0),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container"},[t.isCreate?t._e():e("button",{staticClass:"button is-primary is-rounded",on:{click:t.setIsCreate}},[t._v("Create Task")]),t._v(" "),e("br"),e("br"),t._v(" "),t.isCreate?e("div",{staticClass:"margin-field fade-in-top"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kanbanCreate.title,expression:"kanbanCreate.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.kanbanCreate.title},on:{input:function(a){a.target.composing||t.$set(t.kanbanCreate,"title",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kanbanCreate.point,expression:"kanbanCreate.point"}],staticClass:"input",attrs:{type:"number",min:"0",max:"100",placeholder:"Point"},domProps:{value:t.kanbanCreate.point},on:{input:function(a){a.target.composing||t.$set(t.kanbanCreate,"point",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kanbanCreate.assign,expression:"kanbanCreate.assign"}],staticClass:"input",attrs:{type:"text",placeholder:"Assign to"},domProps:{value:t.kanbanCreate.assign},on:{input:function(a){a.target.composing||t.$set(t.kanbanCreate,"assign",a.target.value)}}})])]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"button is-primary is-rounded",on:{click:t.createKanban}},[t._v("Create")])]):t._e()]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[t._m(1),t._v(" "),e("br"),t._v(" "),e("BackLog",{staticClass:"shadow-pop-br"})],1),t._v(" "),e("div",{staticClass:"column"},[t._m(2),t._v(" "),e("br"),t._v(" "),e("Todo",{staticClass:"shadow-pop-br"})],1),t._v(" "),e("div",{staticClass:"column"},[t._m(3),t._v(" "),e("br"),t._v(" "),e("Doing",{staticClass:"shadow-pop-br"})],1),t._v(" "),e("div",{staticClass:"column"},[t._m(4),t._v(" "),e("br"),t._v(" "),e("Done",{staticClass:"shadow-pop-br"})],1)])])])},nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"hero is-black"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n            Kandang\n          ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n            Kanban is my sandang\n          ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-pop-br"},[e("header",{staticClass:"card-header",staticStyle:{"background-color":"black"}},[e("p",{staticClass:"card-header-title",staticStyle:{color:"white","background-color":"red"}},[t._v("\n              Backlog\n            ")]),t._v(" "),e("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-pop-br"},[e("header",{staticClass:"card-header",staticStyle:{"background-color":"black"}},[e("p",{staticClass:"card-header-title",staticStyle:{color:"white","background-color":"orange"}},[t._v("\n              Todo\n            ")]),t._v(" "),e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-pop-br"},[e("header",{staticClass:"card-header",staticStyle:{"background-color":"black"}},[e("p",{staticClass:"card-header-title",staticStyle:{color:"white","background-color":"green"}},[t._v("\n              Doing\n            ")]),t._v(" "),e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-pop-br"},[e("header",{staticClass:"card-header",staticStyle:{"background-color":"black"}},[e("p",{staticClass:"card-header-title",staticStyle:{color:"white","background-color":"blue"}},[t._v("\n              Done\n            ")]),t._v(" "),e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])])}];function it(t){e("mene")}var ot=!1,ct=it,rt="data-v-5af922f5",lt=null,dt=Object(o["a"])(et,st,nt,ot,ct,rt,lt),ut=dt.exports;s["a"].use(_["a"]);var vt=new _["a"]({routes:[{path:"/",name:"home",component:ut}]}),ft=vt,bt=e("NYxO");s["a"].use(bt["a"]);var _t=new bt["a"].Store({state:{backlog:null,todo:null,doing:null,done:null},mutations:{setBackLog:function(t,a){t.backlog=a},setTodo:function(t,a){t.todo=a},setDoing:function(t,a){t.doing=a},setDone:function(t,a){t.done=a}},actions:{},getters:{getBacklogs:function(t){return t.backlog},getTodos:function(t){return t.todo},getDoing:function(t){return t.doing},getDone:function(t){return t.done}}}),ht=e("Sazm"),Ct=e.n(ht),pt=e("MMSg"),mt=e.n(pt);e("doPI");s["a"].use(mt.a);var gt={apiKey:"AIzaSyBzB03pSh6MRhthRs4s-rp0lJqVKaXbpXo",authDomain:"neon-feat-194817.firebaseapp.com",databaseURL:"https://neon-feat-194817.firebaseio.com",projectId:"neon-feat-194817",storageBucket:"neon-feat-194817.appspot.com",messagingSenderId:"914534814313"};Ct.a.initializeApp(gt),s["a"].prototype.$db=Ct.a.database(),s["a"].config.productionTip=!1,new s["a"]({router:ft,store:_t,render:function(t){return t(b)}}).$mount("#app")},Y9kN:function(t,a){},doPI:function(t,a){},dtau:function(t,a){},mene:function(t,a){},"s4D/":function(t,a){}},[0]);
//# sourceMappingURL=app.a0b73bf4.js.map