!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(n,a,r){"use strict";r.r(a),r.d(a,"BlogModule",function(){return h});var i=r("ofXK"),c=r("sbAP"),o=r("tyNb"),b=r("quSY"),s=r("GuhC"),u=r("fXoL");function l(t,e){if(1&t&&(u.Ib(0,"div",1),u.bc(1,"\n    "),u.Ib(2,"div",2),u.bc(3,"\n        "),u.bc(4,"\n        "),u.Ib(5,"h1",3),u.bc(6),u.Hb(),u.bc(7,"\n        "),u.Ib(8,"div"),u.bc(9,"\n            "),u.Ib(10,"time",4),u.bc(11),u.Qb(12,"date"),u.Hb(),u.bc(13,"\n        "),u.Hb(),u.bc(14,"\n    "),u.Hb(),u.bc(15,"\n    "),u.Eb(16,"hr"),u.bc(17,"\n    "),u.Eb(18,"scully-content"),u.bc(19,"\n    "),u.Eb(20,"hr"),u.bc(21,"\n    "),u.bc(22,"\n"),u.Hb()),2&t){var n=u.Pb();u.ub(6),u.cc(n.metaData.title),u.ub(4),u.Ub("datetime",n.metaData.date),u.ub(1),u.cc(u.Rb(12,3,n.metaData.date))}}var f,d,y,g=((f=function(){function n(e,a){t(this,n),this.scully=e,this.metaService=a,this.subscriptions=new b.a,this.current$=this.scully.getCurrent()}var a,r,i;return a=n,(r=[{key:"ngOnInit",value:function(){var t=this;this.subscriptions.add(this.current$.subscribe(function(e){console.log(e),t.metaData={title:e.title,description:e.description,date:e.date,category:e.category?e.category:"",imageUrl:e.image?e.image:"",keywords:e.keywords?e.keywords.split(",").map(function(t){return t.trim()}):[],siteUrl:e.route,type:"website"},t.metaService.setMetaForCurrentPage(t.metaData)}))}},{key:"ngAfterViewChecked",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}])&&e(a.prototype,r),i&&e(a,i),n}()).\u0275fac=function(t){return new(t||f)(u.Db(c.c),u.Db(s.a))},f.\u0275cmp=u.xb({type:f,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","container mx-auto bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",4,"ngIf"],[1,"container","mx-auto","bg-gray-200","text-gray-800","dark:bg-gray-800","dark:text-gray-50"],[1,""],[1,"text-3xl"],[3,"datetime"]],template:function(t,e){1&t&&u.ac(0,l,23,5,"div",0),2&t&&u.Ub("ngIf",e.metaData)},directives:[i.k,c.a],pipes:[i.e],styles:[""]}),f),p=[{path:":title",component:g},{path:"**",component:g}],m=((y=function e(){t(this,e)}).\u0275mod=u.Bb({type:y}),y.\u0275inj=u.Ab({factory:function(t){return new(t||y)},imports:[[o.g.forChild(p)],o.g]}),y),h=((d=function e(){t(this,e)}).\u0275mod=u.Bb({type:d}),d.\u0275inj=u.Ab({factory:function(t){return new(t||d)},imports:[[i.c,m,c.b]]}),d)}}])}();