webpackJsonp([10],{"65T0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-wwrapper"},t._l(t.$store.state.app.tagViews.slice(-6),function(e){return a("router-link",{key:e.name,staticClass:"tab-view",attrs:{to:e.path}},[a("el-tag",{attrs:{size:"small",closable:"",type:t.isActive(e)?"":"info"},on:{close:function(a){t.closeTagView(e,a)}}},[t._v("\r\n            "+t._s(e.name)+"\r\n        ")])],1)}),1)},n=[],s={render:i,staticRenderFns:n};e.a=s},Lg9b:function(t,e,a){"use strict";function i(t){a("dalp")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("qk3F"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var c=a("65T0"),o=a("VU/8"),u=i,d=o(s.a,c.a,!1,u,"data-v-320dcd38",null);e.default=d.exports},dalp:function(t,e,a){var i=a("y64J");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("5c63c1cc",i,!0,{})},qk3F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.isActive()},methods:{isActive:function(t){if(t)return t.path===this.$route.path},closeTagView:function(t,e){this.$store.dispatch("delTagView",t),e.preventDefault()},generateRoute:function(){return this.$route.matched[this.$route.matched.length-1].name?this.$route.matched[this.$route.matched.length-1]:this.$route.matched[0]},addTagView:function(){this.$store.dispatch("addTagView",this.generateRoute())}},watch:{$route:function(){this.addTagView()}}}},y64J:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".tab-view[data-v-320dcd38]{margin-left:10px}",""])}});