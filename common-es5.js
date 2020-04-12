function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/meta.service.ts":
  /*!*********************************!*\
    !*** ./src/app/meta.service.ts ***!
    \*********************************/

  /*! exports provided: MetaService */

  /***/
  function srcAppMetaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaService", function () {
      return MetaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var MetaService = /*#__PURE__*/function () {
      function MetaService(meta, title) {
        _classCallCheck(this, MetaService);

        this.meta = meta;
        this.title = title;
      }

      _createClass(MetaService, [{
        key: "setMetaForCurrentPage",
        value: function setMetaForCurrentPage(metaData) {
          // Primary Meta Tags
          this.title.setTitle(metaData.title);
          this.meta.addTag({
            name: 'title',
            content: metaData.title
          });
          this.meta.addTag({
            name: 'description',
            content: metaData.description
          }); // Open Graph / Facebook

          this.meta.addTag({
            name: 'og:type',
            content: metaData.type
          });
          this.meta.addTag({
            name: 'og:url',
            content: metaData.siteUrl
          });
          this.meta.addTag({
            name: 'og:title',
            content: metaData.title
          });
          this.meta.addTag({
            name: 'og:description',
            content: metaData.description
          });
          this.meta.addTag({
            name: 'og:image',
            content: metaData.imageUrl
          }); // Twitter 

          this.meta.addTag({
            name: 'twitter:card',
            content: 'summary_large_image'
          });
          this.meta.addTag({
            name: 'twitter:url',
            content: metaData.siteUrl
          });
          this.meta.addTag({
            name: 'twitter:title',
            content: metaData.title
          });
          this.meta.addTag({
            name: 'twitter:description',
            content: metaData.description
          });
          this.meta.addTag({
            name: 'twitter:image',
            content: metaData.imageUrl
          });
          this.meta.addTag({
            name: 'twitter:site',
            content: '@krishnaanaril'
          });
          this.meta.addTag({
            name: 'twitter:creator',
            content: '@krishnaanaril'
          }); // Optional

          this.meta.addTag({
            name: 'keywords',
            content: metaData.keywords
          });
        }
      }]);

      return MetaService;
    }();

    MetaService.ɵfac = function MetaService_Factory(t) {
      return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MetaService,
      factory: MetaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map