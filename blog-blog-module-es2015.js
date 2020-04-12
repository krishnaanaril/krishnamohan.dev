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
/* harmony import */ var _meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meta.service */ "./src/app/meta.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class BlogComponent {
    constructor(router, route, scully, metaService) {
        this.router = router;
        this.route = route;
        this.scully = scully;
        this.metaService = metaService;
        this.current$ = this.scully.getCurrent();
        this.current$.subscribe((blog) => {
            this.metaService.setMetaForCurrentPage({
                title: blog.title,
                description: blog.description,
                imageUrl: 'assets/images/dp.jpg',
                keywords: 'Blog, Portfolio, Developer, Engineer',
                siteUrl: blog.route,
                type: 'website'
            });
        });
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 16, vars: 3, consts: [[1, "page-title"], [1, "blog-post"], [1, "post-footer"], ["href", "https://twitter.com/krishnaanaril"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    Have questions/comments? Tweet @");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "krishnaanaril");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.current$)) == null ? null : tmp_0_0.title);
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 1024px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 75%;\n  display: block;\n  margin: auto;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.9rem;\n  color: grey;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: grey;\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  \n  white-space: -moz-pre-wrap;\n  \n  white-space: -pre-wrap;\n  \n  white-space: -o-pre-wrap;\n  \n  word-wrap: break-word;\n  \n}\ncode[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  padding: 10px;\n  display: block;\n}\n.page-title[_ngcontent-%COMP%] {\n  max-width: 720px;\n  font-size: 2rem;\n  display: block;\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0RGO0FESUE7O0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNIRjtBRE1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLHFCQUFBO0VDTEEsa0JBQWtCO0VETWxCLDBCQUFBO0VDSkEsd0JBQXdCO0VES3hCLHNCQUFBO0VDSEEsY0FBYztFRElkLHdCQUFBO0VDRkEsWUFBWTtFREdaLHFCQUFBO0VDREEsMkJBQTJCO0FBQzdCO0FER0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuIDo6c2xvdHRlZChoMSkgIHtcbiAgY29sb3I6cmdiKDUxLCA2LCAzNyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIxMSwgMjM2KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJsb2ctcG9zdCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOjc1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1nICsgZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbmltZyArIGVtID4gKiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogZ3JleTtcbn1cblxucHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAgICAgICAvKiBTaW5jZSBDU1MgMi4xICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAgLyogTW96aWxsYSwgc2luY2UgMTk5OSAqL1xuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAgICAgIC8qIE9wZXJhIDQtNiAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7ICAgIC8qIE9wZXJhIDcgKi9cbiAgd29yZC13cmFwOiBicmVhay13b3JkOyAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciA1LjUrICovXG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvc3QtZm9vdGVyIHtcbiAgJjpleHRlbmQoLmJsb2ctcG9zdCk7XG59IiwiOjpzbG90dGVkKGgxKSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmJsb2ctcG9zdCxcbi5wb3N0LWZvb3RlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG5pbWcge1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW1nICsgZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5pbWcgKyBlbSA+ICoge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIC8qIFNpbmNlIENTUyAyLjEgKi9cbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNC02ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cbn1cbmNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdlLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.less'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"] }, { type: _meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"] }]; }, null); })();


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






class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module-es2015.js.map