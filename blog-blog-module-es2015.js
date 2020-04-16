(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");





const routes = [
    {
        path: ':title',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    },
    {
        path: '**',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    },
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meta.service */ "./src/app/meta.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");











function BlogComponent_div_0_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](keyword_r2);
} }
function BlogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogComponent_div_0_mat_chip_6_Template, 2, 1, "mat-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "time", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "scully-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        Have questions/comments? Tweet @");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "krishnaanaril");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.metaData.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metaData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datetime", ctx_r0.metaData.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx_r0.metaData.date));
} }
class BlogComponent {
    constructor(router, route, scully, metaService) {
        this.router = router;
        this.route = route;
        this.scully = scully;
        this.metaService = metaService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.current$ = this.scully.getCurrent();
    }
    ngOnInit() {
        this.subscriptions.add(this.current$.subscribe((blog) => {
            this.metaData = {
                title: blog.title,
                description: blog.description,
                date: blog.date,
                category: blog.category ? blog.category : '',
                imageUrl: blog.image ? blog.image : '',
                keywords: blog.keywords ? blog.keywords.split(',').map(elem => elem.trim()) : [],
                siteUrl: blog.route,
                type: 'website'
            };
            this.metaService.setMetaForCurrentPage(this.metaData);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 1, vars: 1, consts: [["class", "blog-post", 4, "ngIf"], [1, "blog-post"], [1, "title-section"], ["aria-label", "Blog tags/keywords"], ["class", "keywords", "color", "primary", 4, "ngFor", "ngForOf"], [1, "blog-title"], [1, "sub-items-container"], [3, "datetime"], [1, "post-footer"], ["href", "https://twitter.com/krishnaanaril"], ["color", "primary", 1, "keywords"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 32, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.metaData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n  margin: auto;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  max-width: 768px;\n  font-size: 18px;\n  line-height: 1.5;\n  font-family: 'Raleway', sans-serif;\n}\n@media all and (max-width: 768px) {\n  .blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin: auto;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-all;\n  text-align: center;\n  font-size: 0.9rem;\n  color: grey;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: grey;\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  \n  white-space: -moz-pre-wrap;\n  \n  white-space: -pre-wrap;\n  \n  white-space: -o-pre-wrap;\n  \n  word-wrap: break-word;\n  \n}\ncode[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  padding: 10px;\n  display: block;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 4.5rem;\n  line-height: 1;\n  word-break: normal;\n  display: block;\n  margin: 0px auto 10px auto;\n  text-align: center;\n  font-family: 'Zilla Slab', serif;\n}\n@media all and (max-width: 768px) {\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.sub-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nmat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 50px auto 5px auto;\n}\n.keywords[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 96%);\n  padding: 10px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL3N0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDREY7QURJQTs7RUFDRSxZQUFBO0VBSUEscUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VFSEUsa0NBQUE7QURBSjtBREpFO0VBQUE7O0lBQ0UsY0FBQTtFQ1FGO0FBQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNERjtBRElBO0VBQ0UscUJBQUE7RUNGQSxrQkFBa0I7RURHbEIsMEJBQUE7RUNEQSx3QkFBd0I7RURFeEIsc0JBQUE7RUNBQSxjQUFjO0VEQ2Qsd0JBQUE7RUNDQSxZQUFZO0VEQVoscUJBQUE7RUNFQSwyQkFBMkI7QUFDN0I7QURBQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRUY7QURDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFRXBERSxnQ0FBQTtBRHNESjtBREFFO0VBQUE7SUFDRSxlQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0UsWUFBQTtBQ0VGO0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNIRjtBRE1BO0VBSkUsYUFBQTtFQUNBLHVCQUFBO0VBS0EsMEJBQUE7QUNIRjtBRE1BO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi9zdHlsZXMubGVzc1wiO1xuXG4gOjpzbG90dGVkKGgxKSAge1xuICBjb2xvcjpyZ2IoNTEsIDYsIDM3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYmxvZy1wb3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiBAdGFiLXdpZHRoKSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xuICBtYXgtd2lkdGg6IEB0YWItd2lkdGg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLmZvbnQtcmFsZXdheTsgIFxufVxuXG5pbWcge1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbWcgKyBlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxuXG5pbWcgKyBlbSA+ICoge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbnByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgICAgICAgLyogU2luY2UgQ1NTIDIuMSAqL1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDsgIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgICAgICAvKiBPcGVyYSA0LTYgKi9cbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAgICAvKiBPcGVyYSA3ICovXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgNS41KyAqL1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibG9nLXRpdGxlIHsgICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmZvbnQtemlsbGEtc2xhYjtcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogQHRhYi13aWR0aCkge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuXG5ociB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnBvc3QtZm9vdGVyIHtcbiAgJjpleHRlbmQoLmJsb2ctcG9zdCk7XG59XG5cbi5zdWItaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1jaGlwLWxpc3QgeyAgXG4gIC5zdWItaXRlbXMtY29udGFpbmVyO1xuICBtYXJnaW46IDUwcHggYXV0byA1cHggYXV0bztcbn1cblxuLmtleXdvcmRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAsIDk2JSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59IiwiOjpzbG90dGVkKGgxKSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmJsb2ctcG9zdCxcbi5wb3N0LWZvb3RlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvZy1wb3N0LFxuICAucG9zdC1mb290ZXIge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG59XG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbmltZyArIGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5pbWcgKyBlbSA+ICoge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIC8qIFNpbmNlIENTUyAyLjEgKi9cbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNC02ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cbn1cbmNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ibG9nLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBzZXJpZjtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbmhyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnN1Yi1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1hdC1jaGlwLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gNXB4IGF1dG87XG59XG4ua2V5d29yZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk2JSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0fFJhbGV3YXl8WmlsbGErU2xhYicpO1xuXG5AcGVyc29uYWwtYmxhY2s6IGhzbCgwLCAxMDAlLCAwJSk7XG5AdGFiLXdpZHRoOiA3NjhweDtcblxuLmZvbnQtbW9udHNlcnJhdCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtemlsbGEtc2xhYiB7XG4gICAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XG59XG5cbi5mb250LXJhbGV3YXkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkgeyAgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgIWltcG9ydGFudDsgIFxuICAgIC5mb250LW1vbnRzZXJyYXQ7ICBcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG59XG5cbi5tYWluLWZvbnR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9wLW5hdiB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogNXB4IDI1cHg7ICBcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgIFxuICAgIH1cbiAgICBsaTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cbn1cblxuLm5hdi1hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZDtcbn1cblxuLnRvb2wtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzYwLCAxMDAlLCAxMDAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5mb250LXJhbGV3YXk7XG59XG5cbmEge1xuICAgIGNvbG9yOiBoc2woMjI1LCA0NiUsIDQyJSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBoc2woMjU4LCA4MyUsIDQ1JSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woOSwgODElLCA2MSUpO1xuICAgICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.less'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"] }, { type: _meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");







class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module-es2015.js.map