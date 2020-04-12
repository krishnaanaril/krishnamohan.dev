(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/meta.service.ts":
/*!*********************************!*\
  !*** ./src/app/meta.service.ts ***!
  \*********************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class MetaService {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    setMetaForCurrentPage(metaData) {
        // Primary Meta Tags
        this.title.setTitle(metaData.title);
        this.meta.addTag({ name: 'title', content: metaData.title });
        this.meta.addTag({ name: 'description', content: metaData.description });
        // Open Graph / Facebook
        this.meta.addTag({ name: 'og:type', content: metaData.type });
        this.meta.addTag({ name: 'og:url', content: metaData.siteUrl });
        this.meta.addTag({ name: 'og:title', content: metaData.title });
        this.meta.addTag({ name: 'og:description', content: metaData.description });
        this.meta.addTag({ name: 'og:image', content: metaData.imageUrl });
        // Twitter 
        this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.addTag({ name: 'twitter:url', content: metaData.siteUrl });
        this.meta.addTag({ name: 'twitter:title', content: metaData.title });
        this.meta.addTag({ name: 'twitter:description', content: metaData.description });
        this.meta.addTag({ name: 'twitter:image', content: metaData.imageUrl });
        this.meta.addTag({ name: 'twitter:site', content: '@krishnaanaril' });
        this.meta.addTag({ name: 'twitter:creator', content: '@krishnaanaril' });
        // Optional
        this.meta.addTag({ name: 'keywords', content: metaData.keywords });
    }
}
MetaService.ɵfac = function MetaService_Factory(t) { return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetaService, factory: MetaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map