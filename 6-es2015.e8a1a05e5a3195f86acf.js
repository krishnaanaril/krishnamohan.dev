(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,a){"use strict";a.r(e),a.d(e,"BlogModule",function(){return m});var n=a("ofXK"),i=a("sbAP"),s=a("tyNb"),c=a("quSY"),r=a("GuhC"),o=a("fXoL");function b(t,e){if(1&t&&(o.Ib(0,"div",10),o.ac(1),o.Hb()),2&t){const t=e.$implicit;o.ub(1),o.bc(t)}}function l(t,e){if(1&t&&(o.Ib(0,"div",1),o.ac(1,"\n    "),o.Ib(2,"div",2),o.ac(3,"\n        "),o.Ib(4,"div",3),o.ac(5,"\n            "),o.Zb(6,b,2,1,"div",4),o.ac(7,"\n        "),o.Hb(),o.ac(8,"\n        "),o.Ib(9,"h1",5),o.ac(10),o.Hb(),o.ac(11,"\n        "),o.Ib(12,"div",6),o.ac(13,"\n            "),o.Ib(14,"time",7),o.ac(15),o.Qb(16,"date"),o.Hb(),o.ac(17,"\n        "),o.Hb(),o.ac(18,"\n    "),o.Hb(),o.ac(19,"\n    "),o.Eb(20,"hr"),o.ac(21,"\n    "),o.Eb(22,"scully-content"),o.ac(23,"\n    "),o.Eb(24,"hr"),o.ac(25,"\n    "),o.Ib(26,"div",8),o.ac(27,"\n        Have questions/comments? Tweet @"),o.Ib(28,"a",9),o.ac(29,"krishnaanaril"),o.Hb(),o.ac(30,"\n    "),o.Hb(),o.ac(31,"\n"),o.Hb()),2&t){const t=o.Pb();o.ub(6),o.Ub("ngForOf",t.metaData.keywords),o.ub(4),o.bc(t.metaData.title),o.ub(4),o.Ub("datetime",t.metaData.date),o.ub(1),o.bc(o.Rb(16,4,t.metaData.date))}}let u=(()=>{class t{constructor(t,e){this.scully=t,this.metaService=e,this.subscriptions=new c.a,this.current$=this.scully.getCurrent()}ngOnInit(){this.subscriptions.add(this.current$.subscribe(t=>{console.log(t),this.metaData={title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"},this.metaService.setMetaForCurrentPage(this.metaData)}))}ngAfterViewChecked(){}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Db(i.c),o.Db(r.a))},t.\u0275cmp=o.xb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","blog-post",4,"ngIf"],[1,"blog-post"],[1,"title-section"],["aria-label","Blog tags/keywords"],["class","keywords","color","primary",4,"ngFor","ngForOf"],[1,"blog-title"],[1,"sub-items-container"],[3,"datetime"],[1,"post-footer"],["href","https://twitter.com/krishnaanaril"],["color","primary",1,"keywords"]],template:function(t,e){1&t&&o.Zb(0,l,32,6,"div",0),2&t&&o.Ub("ngIf",e.metaData)},directives:[n.k,n.j,i.a],pipes:[n.e],styles:[""]}),t})();const d=[{path:":title",component:u},{path:"**",component:u}];let p=(()=>{class t{}return t.\u0275mod=o.Bb({type:t}),t.\u0275inj=o.Ab({factory:function(e){return new(e||t)},imports:[[s.g.forChild(d)],s.g]}),t})(),m=(()=>{class t{}return t.\u0275mod=o.Bb({type:t}),t.\u0275inj=o.Ab({factory:function(e){return new(e||t)},imports:[[n.c,p,i.b]]}),t})()}}]);