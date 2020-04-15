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











function BlogComponent_div_0_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 8);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BlogComponent_div_0_mat_chip_9_Template, 2, 1, "mat-chip", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "            \n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "          \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "       \n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "scully-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        Have questions/comments? Tweet @");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "krishnaanaril");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metaData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.metaData.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metaData.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metaData.category);
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
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 1, vars: 1, consts: [["class", "blog-post", 4, "ngIf"], [1, "blog-post"], [1, "title-section"], [1, "blog-title"], ["aria-label", "Blog tags/keywords"], ["class", "keywords", "color", "primary", 4, "ngFor", "ngForOf"], [1, "post-footer"], ["href", "https://twitter.com/krishnaanaril"], ["color", "primary", 1, "keywords"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 31, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.metaData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]], styles: ["[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n  margin: auto;\n  word-break: break-all;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  max-width: 768px;\n  font-size: 18px;\n  line-height: 1.5;\n  font-family: 'Raleway', sans-serif;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin: auto;\n}\na[_ngcontent-%COMP%] {\n  color: hsl(225, 46%, 42%);\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-weight: bold;\n}\na[_ngcontent-%COMP%]:hover {\n  color: hsl(258, 83%, 45%);\n  text-decoration: underline;\n  -webkit-text-decoration-color: hsl(9, 81%, 61%);\n          text-decoration-color: hsl(9, 81%, 61%);\n  -webkit-text-decoration-style: wavy;\n          text-decoration-style: wavy;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.9rem;\n  color: grey;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: grey;\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  \n  white-space: -moz-pre-wrap;\n  \n  white-space: -pre-wrap;\n  \n  white-space: -o-pre-wrap;\n  \n  word-wrap: break-word;\n  \n}\ncode[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  padding: 10px;\n  display: block;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 4.5rem;\n  line-height: 1;\n  word-break: normal;\n  display: block;\n  margin: 50px auto 10px auto;\n  text-align: center;\n  font-family: 'Zilla Slab', serif;\n}\n@media all and (max-width: 768px) {\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  width: 100px;\n}\nmat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.keywords[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 96%);\n  padding: 10px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL3N0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDREY7QURJQTs7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VFQUUsa0NBQUE7QURBSjtBRElBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLHFCQUFBO0VDUEEsa0JBQWtCO0VEUWxCLDBCQUFBO0VDTkEsd0JBQXdCO0VET3hCLHNCQUFBO0VDTEEsY0FBYztFRE1kLHdCQUFBO0VDSkEsWUFBWTtFREtaLHFCQUFBO0VDSEEsMkJBQTJCO0FBQzdCO0FES0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0hGO0FETUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUU3REUsZ0NBQUE7QUQwREo7QURLRTtFQUFBO0lBQ0UsZUFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFLFlBQUE7QUNIRjtBRFVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFdBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi9zdHlsZXMubGVzc1wiO1xuXG4gOjpzbG90dGVkKGgxKSAge1xuICBjb2xvcjpyZ2IoNTEsIDYsIDM3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYmxvZy1wb3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGh5cGhlbnM6IGF1dG87XG4gIG1heC13aWR0aDogQHRhYi13aWR0aDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICAuZm9udC1yYWxld2F5XG59XG5cbmltZyB7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmEge1xuICBjb2xvcjogaHNsKDIyNSwgNDYlLCA0MiUpO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogaHNsKDI1OCwgODMlLCA0NSUpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBoc2woOSwgODElLCA2MSUpO1xuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHdhdnk7XG59XG5cbmltZyArIGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxuXG5pbWcgKyBlbSA+ICoge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbnByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgICAgICAgLyogU2luY2UgQ1NTIDIuMSAqL1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDsgIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgICAgICAvKiBPcGVyYSA0LTYgKi9cbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAgICAvKiBPcGVyYSA3ICovXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgNS41KyAqL1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibG9nLXRpdGxlIHsgICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5mb250LXppbGxhLXNsYWI7XG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IEB0YWItd2lkdGgpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cblxuaHIge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5wb3N0LWZvb3RlciB7XG4gICY6ZXh0ZW5kKC5ibG9nLXBvc3QpO1xufVxuXG5tYXQtY2hpcC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5rZXl3b3JkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwLCA5NiUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufSIsIjo6c2xvdHRlZChoMSkge1xuICBjb2xvcjogIzMzMDYyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDNlYztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5ibG9nLXBvc3QsXG4ucG9zdC1mb290ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgaHlwaGVuczogYXV0bztcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5hIHtcbiAgY29sb3I6IGhzbCgyMjUsIDQ2JSwgNDIlKTtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMjU4LCA4MyUsIDQ1JSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGhzbCg5LCA4MSUsIDYxJSk7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogd2F2eTtcbn1cbmltZyArIGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxuaW1nICsgZW0gPiAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxucHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAvKiBTaW5jZSBDU1MgMi4xICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwO1xuICAvKiBNb3ppbGxhLCBzaW5jZSAxOTk5ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDQtNiAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDcgKi9cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciA1LjUrICovXG59XG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvZy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuaHIge1xuICB3aWR0aDogMTAwcHg7XG59XG5tYXQtY2hpcC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ua2V5d29yZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk2JSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0fFJhbGV3YXl8WmlsbGErU2xhYicpO1xuXG5AcGVyc29uYWwtYmxhY2s6IGhzbCgwLCAxMDAlLCAwJSk7XG5AdGFiLXdpZHRoOiA3NjhweDtcblxuLmZvbnQtbW9udHNlcnJhdCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtemlsbGEtc2xhYiB7XG4gICAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XG59XG5cbi5mb250LXJhbGV3YXkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkgeyAgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgIWltcG9ydGFudDsgIFxuICAgIC5mb250LW1vbnRzZXJyYXQ7ICBcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG59XG5cbi5tYWluLWZvbnR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9wLW5hdiB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgbGkgOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59XG5cbi50b29sLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwZXJzb25hbC1ibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMDtcbiAgICAuZm9udC1yYWxld2F5O1xufSJdfQ== */"] });
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