(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c82bdf2a"],{1432:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-title-wrapper",class:{"hide-shadow":t.ifHideShadow}},[s("div",{staticClass:"title-left-wrapper",on:{click:t.back}},[s("span",{staticClass:"icon-back"})]),s("div",{staticClass:"title-right-wrapper"},[t.showShelf?s("span",{staticClass:"icon-shelf icon",on:{click:t.showBookShelf}}):s("span",{staticClass:"icon-share"})]),t.title?s("div",{staticClass:"title-text"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e()])},r=[],c={props:{title:String,showShelf:{type:Boolean,default:!0}},data:function(){return{ifHideShadow:!0}},methods:{showBookShelf:function(){this.$router.push("/store/shelf")},showShadow:function(){this.ifHideShadow=!1},hideShadow:function(){this.ifHideShadow=!0},back:function(){this.$emit("back")}}},a=c,o=(s("bac3"),s("2877")),l=Object(o["a"])(a,i,r,!1,null,"3a4fd179",null);e["a"]=l.exports},6701:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},r=[],c=(s("c5f6"),s("fa7d")),a={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(c["b"])(this.top)-Object(c["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){this.refresh()}},o=a,l=(s("85a8"),s("2877")),n=Object(l["a"])(o,i,r,!1,null,"65b358ea",null);e["a"]=n.exports},"85a8":function(t,e,s){"use strict";var i=s("fe3d"),r=s.n(i);r.a},bac3:function(t,e,s){"use strict";var i=s("dfe3"),r=s.n(i);r.a},c287:function(t,e,s){},c470:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover-title-wrapper"},[s("div",{staticClass:"cover-title-left-wrapper"},[s("img",{staticClass:"cover-img",attrs:{src:t.cover}})]),s("div",{staticClass:"cover-title-right-wrapper"},[s("div",{staticClass:"detail-cover-title-wrapper"},[s("div",{staticClass:"cover-title-text"},[t._v(t._s(t.title))])]),s("div",{staticClass:"cover-author-wrapper"},[s("div",{staticClass:"cover-author-text"},[t._v(t._s(t.author))])]),s("div",{staticClass:"detail-cover-description-wrapper"},[s("div",{staticClass:"detail-cover-description-text"},[t._v(t._s(t.desc))])])])])},r=[],c={props:{cover:String,title:String,author:String,desc:String}},a=c,o=(s("ccc0"),s("2877")),l=Object(o["a"])(a,i,r,!1,null,"16fdc734",null);e["a"]=l.exports},ccc0:function(t,e,s){"use strict";var i=s("c287"),r=s.n(i);r.a},dfe3:function(t,e,s){},fe3d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-c82bdf2a.0300b6d8.js.map