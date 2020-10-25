function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/error-page/error-page.component */
    "./src/app/pages/error-page/error-page.component.ts");
    /* harmony import */


    var _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home-page/greet/greet.component */
    "./src/app/pages/home-page/greet/greet.component.ts");

    var routes = [{
      path: '',
      component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"],
      children: [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_4__["GreetComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-home-page-home-page-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-home-page-home-page-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/home-page/home-page.module */
            "./src/app/pages/home-page/home-page.module.ts")).then(function (homemodule) {
              return homemodule.HomePageModule;
            });
          }
        }]
      }, {
        path: 'services',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'services/:name',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-svc-page-svc-page-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-svc-page-svc-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/svc-page/svc-page.module */
          "./src/app/pages/svc-page/svc-page.module.ts")).then(function (servicemodule) {
            return servicemodule.SVCPageModule;
          });
        }
      }, {
        path: 'comments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-comments-page-comments-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-comments-page-comments-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/comments-page/comments.module */
          "./src/app/pages/comments-page/comments.module.ts")).then(function (commentsmodule) {
            return commentsmodule.CommentsModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-page-about-module */
          "pages-about-page-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about-page/about.module */
          "./src/app/pages/about-page/about.module.ts")).then(function (aboutmodule) {
            return aboutmodule.AboutModule;
          });
        }
      }, {
        path: 'error',
        component: _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
      }, {
        path: '**',
        redirectTo: '/error'
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
        scrollPositionRestoration: "top",
        anchorScrolling: 'enabled',
        scrollOffset: [0, 0]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            scrollPositionRestoration: "top",
            anchorScrolling: 'enabled',
            scrollOffset: [0, 0]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["router-outlet[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2dyYW1taW5nXFxPcmRlcnNcXEtvbXBcXGNvbS5rb21wXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnJvdXRlci1vdXRsZXR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiIsInJvdXRlci1vdXRsZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/services/headers.interceptor */
    "./src/app/shared/services/headers.interceptor.ts");
    /* harmony import */


    var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/locales/ru */
    "./node_modules/@angular/common/locales/ru.js");
    /* harmony import */


    var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/error-page/error-page.component */
    "./src/app/pages/error-page/error-page.component.ts");
    /* harmony import */


    var _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/home-page/greet/greet.component */
    "./src/app/pages/home-page/greet/greet.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default.a, 'ru');
    var INTERCEPTOR = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
      useClass: _shared_services_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__["HeadersInterceptor"],
      multi: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [INTERCEPTOR],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"], _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__["GreetComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"], _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__["GreetComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]],
          providers: [INTERCEPTOR],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/error-page/error-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/error-page/error-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppPagesErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
      return new (t || ErrorPageComponent)();
    };

    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorPageComponent,
      selectors: [["app-error-page"]],
      decls: 8,
      vars: 0,
      consts: [["id", "error"], [1, "canvas", "canvas-error"], [1, "error-text"], ["routerLink", "/", 1, "btn"]],
      template: function ErrorPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 URL. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#error[_ngcontent-%COMP%] {\n  position: relative;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%] {\n  margin: 140px 0px 120px;\n  padding: 30px 0px 30px 70px;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n  color: rgba(0, 0, 0, 0.8);\n  padding: 10px 0px;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition-duration: 100ms;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transition-duration: 100ms;\n  color: #403D7A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9EOlxcUHJvZ3JhbW1pbmdcXE9yZGVyc1xcS29tcFxcY29tLmtvbXBcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcZXJyb3ItcGFnZVxcZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBREFFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEREk7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDR047QURESTtFQUNFLDBCQUFBO0FDR047QURGTTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Vycm9ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY2FudmFzLWVycm9ye1xyXG4gICAgbWFyZ2luOiAxNDBweCAwcHggMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAzMHB4IDcwcHg7XHJcbiAgICAuZXJyb3ItdGV4dHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XHJcbiAgICAgICAgY29sb3I6ICM0MDNEN0E7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2Vycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2Vycm9yIC5jYW52YXMtZXJyb3Ige1xuICBtYXJnaW46IDE0MHB4IDBweCAxMjBweDtcbiAgcGFkZGluZzogMzBweCAwcHggMzBweCA3MHB4O1xufVxuI2Vycm9yIC5jYW52YXMtZXJyb3IgLmVycm9yLXRleHQge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4jZXJyb3IgLmNhbnZhcy1lcnJvciAuYnRuIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG59XG4jZXJyb3IgLmNhbnZhcy1lcnJvciAuYnRuOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIGNvbG9yOiAjNDAzRDdBO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-page',
          templateUrl: './error-page.component.html',
          styleUrls: ['./error-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/greet/greet.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/home-page/greet/greet.component.ts ***!
    \**********************************************************/

  /*! exports provided: GreetComponent */

  /***/
  function srcAppPagesHomePageGreetGreetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GreetComponent", function () {
      return GreetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GreetComponent = /*#__PURE__*/function () {
      function GreetComponent(router) {
        _classCallCheck(this, GreetComponent);

        this.router = router;
      }

      _createClass(GreetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toAnchor",
        value: function toAnchor(anchor) {
          if (this.router.url === '/home' || this.router.url === '/home#services' || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          } else {
            this.router.navigate(['/home'], {
              fragment: anchor
            });
          }
        }
      }]);

      return GreetComponent;
    }();

    GreetComponent.ɵfac = function GreetComponent_Factory(t) {
      return new (t || GreetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    GreetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GreetComponent,
      selectors: [["app-greet"]],
      decls: 13,
      vars: 0,
      consts: [["id", "welcome-start", 1, "beginn"], [1, "wrapper"], [1, "text1"], [1, "komp-name"], [1, "credo"], [1, "down-tr", 3, "click"], ["for", "triangle", "id", "label-text"], ["id", "triangle", 1, "down-link"], ["src", "assets/img/triangle.svg", "alt", "down-triangle", 1, "down-triangle"]],
      template: function GreetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u043E\u043C\u043F - \u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GreetComponent_Template_div_click_7_listener() {
            return ctx.toAnchor("services");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A \u0443\u0441\u043B\u0443\u0433\u0430\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@media all and (max-height: 950px) {\n  .beginn[_ngcontent-%COMP%] {\n    padding: 200px 0px 240px;\n  }\n}\n@media all and (max-height: 680px) {\n  .beginn[_ngcontent-%COMP%] {\n    padding: 130px 0px 140px;\n  }\n}\n@media all and (max-height: 620px) {\n  .beginn[_ngcontent-%COMP%] {\n    padding: 80px 0px 100px;\n  }\n}\n@media all and (max-height: 540px) {\n  .beginn[_ngcontent-%COMP%] {\n    padding: 60px 0px 80px;\n  }\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  color: #FFFFFF;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .komp-name[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 150%;\n  letter-spacing: 0.1em;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  max-width: 800px;\n  text-align: center;\n}\n@media all and (max-width: 600px) {\n  .beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .komp-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media all and (max-width: 500px) {\n  .beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .komp-name[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .credo[_ngcontent-%COMP%] {\n  font-family: \"Fira Sans Condensed\", sans-serif;\n  font-size: 28px;\n  font-style: italic;\n  font-weight: normal;\n  line-height: 150%;\n  letter-spacing: 0.1em;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  margin: 90px 0px 75px;\n  max-width: 700px;\n  min-height: 40px;\n}\n@media all and (max-width: 500px) {\n  .beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .credo[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  font-style: italic;\n  letter-spacing: 0.1em;\n  -webkit-animation-name: jumpy;\n          animation-name: jumpy;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]:hover   .down-link[_ngcontent-%COMP%]   .down-triangle[_ngcontent-%COMP%] {\n  transition-duration: 0.25s;\n  transition-timing-function: ease-out;\n  transform: translate(0px, 3px) scale(0.97);\n  filter: opacity(90%) drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.95));\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   #label-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   #label-text[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   .down-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   .down-link[_ngcontent-%COMP%]   .down-triangle[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 50px;\n  filter: opacity(70%) drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.9));\n  transition-duration: 250ms;\n  transition-timing-function: ease-out;\n}\n@-webkit-keyframes jumpy {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  100% {\n    transform: translate(0px, 7px);\n  }\n}\n@keyframes jumpy {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  100% {\n    transform: translate(0px, 7px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2dyZWV0L0Q6XFxQcm9ncmFtbWluZ1xcT3JkZXJzXFxLb21wXFxjb20ua29tcFxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxob21lLXBhZ2VcXGdyZWV0XFxncmVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2dyZWV0L2dyZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBREY7SUFFSSx3QkFBQTtFQ0NKO0FBQ0Y7QURBSTtFQUpGO0lBS0ksd0JBQUE7RUNHSjtBQUNGO0FERkk7RUFQRjtJQVFJLHVCQUFBO0VDS0o7QUFDRjtBREpJO0VBVkY7SUFXSSxzQkFBQTtFQ09KO0FBQ0Y7QUROSTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1FKO0FEUEk7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNTTjtBRFJNO0VBVEY7SUFVSSxlQUFBO0VDV047QUFDRjtBRFZNO0VBWkY7SUFhSSxlQUFBO0VDYU47QUFDRjtBRFhJO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDYU47QURaTTtFQVpGO0lBYUksZUFBQTtFQ2VOO0FBQ0Y7QURiSTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNlTjtBRGRNO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNnQlI7QURkVTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlFQUFBO0FDZ0JaO0FEWk07RUFDRSxxQkFBQTtBQ2NSO0FEYlE7RUFDRSxlQUFBO0FDZVY7QURaTTtFQUNFLHFCQUFBO0FDY1I7QURiUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUNlVjtBRFJBO0VBQ0k7SUFDSSw4QkFBQTtFQ1dOO0VEVEU7SUFDSSw4QkFBQTtFQ1dOO0FBQ0Y7QURqQkE7RUFDSTtJQUNJLDhCQUFBO0VDV047RURURTtJQUNJLDhCQUFBO0VDV047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ncmVldC9ncmVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmJlZ2lubntcclxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICBwYWRkaW5nOiAyMDBweCAwcHggMjQwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogNjgwcHgpIHtcclxuICAgICAgcGFkZGluZzogMTMwcHggMHB4IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDYyMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDgwcHggMHB4IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDU0MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDYwcHggMHB4IDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dDF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAua29tcC1uYW1le1xyXG4gICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNyZWRve1xyXG4gICAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDkwcHggMHB4IDc1cHg7XHJcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZG93bi10cntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBhbmltYXRpb24tbmFtZToganVtcHk7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgICAgICAuZG93bi1saW5re1xyXG4gICAgICAgICAgLmRvd24tdHJpYW5nbGV7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgM3B4KSBzY2FsZSgwLjk3KTtcclxuICAgICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDkwJSkgZHJvcC1zaGFkb3coMHB4IDZweCA1cHggcmdiYSgwLDAsMCw5NSUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI2xhYmVsLXRleHR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZG93bi1saW5re1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAuZG93bi10cmlhbmdsZXtcclxuICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDcwJSkgZHJvcC1zaGFkb3coMHB4IDZweCA4cHggcmdiYSgwLDAsMCw5MCUpKTtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBqdW1weXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDdweClcclxuICAgIH1cclxufVxyXG4iLCJAbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogOTUwcHgpIHtcbiAgLmJlZ2lubiB7XG4gICAgcGFkZGluZzogMjAwcHggMHB4IDI0MHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogNjgwcHgpIHtcbiAgLmJlZ2lubiB7XG4gICAgcGFkZGluZzogMTMwcHggMHB4IDE0MHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogNjIwcHgpIHtcbiAgLmJlZ2lubiB7XG4gICAgcGFkZGluZzogODBweCAwcHggMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1NDBweCkge1xuICAuYmVnaW5uIHtcbiAgICBwYWRkaW5nOiA2MHB4IDBweCA4MHB4O1xuICB9XG59XG4uYmVnaW5uIC50ZXh0MSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmJlZ2lubiAudGV4dDEgLmtvbXAtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5iZWdpbm4gLnRleHQxIC5rb21wLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmJlZ2lubiAudGV4dDEgLmtvbXAtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4uYmVnaW5uIC50ZXh0MSAuY3JlZG8ge1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogOTBweCAwcHggNzVweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5iZWdpbm4gLnRleHQxIC5jcmVkbyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4uYmVnaW5uIC50ZXh0MSAuZG93bi10ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBhbmltYXRpb24tbmFtZToganVtcHk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbn1cbi5iZWdpbm4gLnRleHQxIC5kb3duLXRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLmJlZ2lubiAudGV4dDEgLmRvd24tdHI6aG92ZXIgLmRvd24tbGluayAuZG93bi10cmlhbmdsZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgM3B4KSBzY2FsZSgwLjk3KTtcbiAgZmlsdGVyOiBvcGFjaXR5KDkwJSkgZHJvcC1zaGFkb3coMHB4IDZweCA1cHggcmdiYSgwLCAwLCAwLCAwLjk1KSk7XG59XG4uYmVnaW5uIC50ZXh0MSAuZG93bi10ciAjbGFiZWwtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5iZWdpbm4gLnRleHQxIC5kb3duLXRyICNsYWJlbC10ZXh0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJlZ2lubiAudGV4dDEgLmRvd24tdHIgLmRvd24tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iZWdpbm4gLnRleHQxIC5kb3duLXRyIC5kb3duLWxpbmsgLmRvd24tdHJpYW5nbGUge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBmaWx0ZXI6IG9wYWNpdHkoNzAlKSBkcm9wLXNoYWRvdygwcHggNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGp1bXB5IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDdweCk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-greet',
          templateUrl: './greet.component.html',
          styleUrls: ['./greet.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var _c0 = function _c0(a0) {
      return {
        textDecoration: a0
      };
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.visible = false;
        this.visibleL = false;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toAnchor",
        value: function toAnchor(anchor) {
          if (this.router.url === '/home' || this.router.url === '/home#services' || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          } else {
            this.router.navigate(['/home'], {
              fragment: anchor
            });
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 88,
      vars: 7,
      consts: [[1, "footer"], [1, "canvas"], ["id", "AR_2", 1, "menu-website", "block"], [1, "column-name"], ["type", "menu", 1, "arrow-down"], [1, "arrow-down-box"], [1, "arrow-down-inner"], [1, "menu-site", "links"], [1, "goto", 3, "click"], ["routerLink", "/comments", 1, "goto"], ["routerLink", "/about", 1, "goto"], ["id", "AR_3", 1, "social-links", "block"], ["id", "text-vertical"], [1, "links-to-SM", "links"], [1, "goto"], ["href", "https://wa.me/79109457564?text=\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!+\u042F+\u043F\u043E+\u043F\u043E\u0432\u043E\u0434\u0443+", "target", "_blanck"], ["srcset", "assets/img/social-media/whatsapp.webp", "type", "image/webp"], ["src", "assets/img/social-media/whatsapp.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://t.me/joinchat/LrXuX1fdJIO9Oj5xEFH_mw", "target", "_blanck"], ["srcset", "assets/img/social-media/telegram.webp", "type", "image/webp"], ["src", "assets/img/social-media/telegram.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://vk.com/kompfoto", "target", "_blanck"], ["src", "assets/img/social-media/vk.svg", "alt", "", "width", "20px", "height", "20px"], ["href", "https://www.instagram.com/komp_tula/", "target", "_blanck"], ["srcset", "assets/img/social-media/instagram-sketched.webp", "type", "image/webp"], ["src", "assets/img/social-media/instagram-sketched.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://www.facebook.com/%D0%9A%D0%9E%D0%9C%D0%9F-100517064817264", "target", "_blanck"], ["src", "assets/img/social-media/facebook.png", "alt", "", "width", "20px", "height", "20px"], [1, "contacts", "block"], ["id", "left-shift"], [1, "text-info-plus", 3, "mouseenter", "mouseleave"], ["href", "tel:+7(953)970-01-42", 1, "link-plus", 3, "ngStyle"], ["id", "copyText", 1, "text-info-plus", 3, "mouseenter", "mouseleave"], ["id", "email-link", "ngxClipboard", "", 3, "ngStyle", "cbContent"], ["id", "adress", 1, "text-info-plus"], ["id", "adress-link", "href", "https://yandex.ru/maps/15/tula/?ll=37.611946%2C54.175169&mode=search&oid=1605727188&ol=biz&z=16", "target", "_blank", 1, "link-plus"], [1, "footer-2"], [1, "rules"], ["href", ""], [1, "author"], ["href", "https://www.linkedin.com/in/leonid-grudanov/", "target", "_blanck"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() {
            return ctx.toAnchor("welcome-start");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() {
            return ctx.toAnchor("services");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0446\u0435\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0442\u0437\u044B\u0432\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_19_listener() {
            return ctx.toAnchor("contacts");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041E \u043D\u0430\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041C\u044B \u0432 \u0441\u043E\u0446. \u0441\u0435\u0442\u044F\u0445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041D\u0410\u041F\u0418\u0428\u0418 \u041D\u0410\u041C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "source", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " WhatsApp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "source", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Telegram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "source", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0421\u0432\u044F\u0437\u0430\u0442\u0441\u044F \u0441 \u043D\u0430\u043C\u0438:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FooterComponent_Template_p_mouseenter_65_listener() {
            return ctx.visibleL = true;
          })("mouseleave", function FooterComponent_Template_p_mouseleave_65_listener() {
            return ctx.visibleL = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0422\u0435\u043B: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "+7(953)970-01-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FooterComponent_Template_p_mouseenter_69_listener() {
            return ctx.visible = true;
          })("mouseleave", function FooterComponent_Template_p_mouseleave_69_listener() {
            return ctx.visible = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "tom701@rambler.ru ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u0410\u0434\u0440\u0435\u0441: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0433. \u0422\u0443\u043B\u0430 \u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430, \u0434.97");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "footer", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "@\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0435\u043D\u0434\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0410\u0432\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "@NoLimit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.visibleL ? "underline" : null));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.visible ? "underline" : null))("cbContent", "tom701@rambler.ru");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardDirective"]],
      styles: ["footer[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 10px 100px 0px;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .actived_slideDown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0px;\n  transition-duration: 200ms;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .actived_slideDown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  font-size: 21px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: calc(100% / 3);\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  padding-left: 20px;\n  margin-bottom: 10px;\n  position: relative;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #text-vertical[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  position: absolute;\n  top: 40px;\n  left: -120px;\n  white-space: nowrap;\n  transform-origin: right;\n  transform: rotate(-90deg);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 0.05em;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #26235f;\n  transition-duration: 200ms;\n  margin: 5px 0px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #26235f;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.747);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.747);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%] {\n  color: #26235f;\n  padding: 5px;\n  white-space: nowrap;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%]   .link-plus[_ngcontent-%COMP%] {\n  color: #26235f;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%]   #email-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   #adress[_ngcontent-%COMP%]:hover   #adress-link[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   #adress-link[_ngcontent-%COMP%]:hover   #adress-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .column-name[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n  color: rgba(0, 0, 0, 0.8);\n  padding: 10px 0px;\n}\nfooter[_ngcontent-%COMP%]   .links-to-company-view.links.actived_slideDown[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .menu-site.links.actived_slideDown[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .links-to-SM.links.actived_slideDown[_ngcontent-%COMP%] {\n  display: none;\n  padding-right: 30px;\n  text-align: right;\n}\nfooter[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%] {\n  display: none;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  background-color: #353434;\n  padding: 15px 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #b6b5b5;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #b6b5b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxQcm9ncmFtbWluZ1xcT3JkZXJzXFxLb21wXFxjb20ua29tcFxcZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NOO0FEQU07RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNFUjtBRENJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQU07RUFDRSxpQkFBQTtBQ0VSO0FEQU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NSO0FEQ007RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREFRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNFVjtBRERVO0VBQ0UsY0FBQTtBQ0daO0FERlk7RUFDRSwyQkFBQTtBQ0lkO0FERFU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0daO0FERVE7RUFPRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTlY7QURGVTtFQUNFLGNBQUE7QUNJWjtBREZVO0VBQ0UsZUFBQTtBQ0laO0FES1k7O0VBQ0UsMEJBQUE7QUNGZDtBRFFJO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ05OO0FEU0U7OztFQUdJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUE47QURTRTtFQUNFLGFBQUE7QUNQSjtBRFlFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVEo7QURVSTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FDUk47QURTTTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUFI7QURVSTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAuY2FudmFze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggICAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIC5hY3RpdmVkX3NsaWRlRG93biBsaXtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ibG9ja3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgID5oNHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICAjdGV4dC12ZXJ0aWNhbHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogLTEyMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAubGlua3N7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgICAgIC5nb3Rve1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMyNjIzNWY7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjYyMzVmO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjbGVmdC1zaGlmdHtcclxuICAgICAgICAudGV4dC1pbmZvLXBsdXN7XHJcbiAgICAgICAgICAubGluay1wbHVze1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2MjM1ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNlbWFpbC1saW5re1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjM1ZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhZHJlc3MsXHJcbiAgICAgICAgI2FkcmVzcy1saW5re1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgI2FkcmVzcy1saW5re1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sdW1uLW5hbWV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxpbmtzLXRvLWNvbXBhbnktdmlldy5saW5rcy5hY3RpdmVkX3NsaWRlRG93bixcclxuICAubWVudS1zaXRlLmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duLFxyXG4gIC5saW5rcy10by1TTS5saW5rcy5hY3RpdmVkX3NsaWRlRG93bntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5hcnJvdy1kb3due1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLy8gZm9vdGVyIDJcclxuZm9vdGVyLmZvb3Rlci0yIHtcclxuICAuY2FudmFze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTMsIDUyLCA1Mik7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC5ydWxlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiNiNmI1YjU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hdXRob3J7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgY29sb3I6I2I2YjViNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZm9vdGVyIC5jYW52YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHBhZGRpbmc6IDEwcHggMTAwcHggMHB4O1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5mb290ZXIgLmNhbnZhcyAuYWN0aXZlZF9zbGlkZURvd24gbGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xufVxuZm9vdGVyIC5jYW52YXMgLmFjdGl2ZWRfc2xpZGVEb3duIGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDMpO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayA+IGg0IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgI3RleHQtdmVydGljYWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTEyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAubGlua3Mge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgLmxpbmtzIC5nb3RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzI2MjM1ZjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAubGlua3MgLmdvdG8gYSB7XG4gIGNvbG9yOiAjMjYyMzVmO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrIC5saW5rcyAuZ290byBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrIC5saW5rcyAuZ290bzpob3ZlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAjbGVmdC1zaGlmdCAudGV4dC1pbmZvLXBsdXMge1xuICBjb2xvcjogIzI2MjM1ZjtcbiAgcGFkZGluZzogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0IC50ZXh0LWluZm8tcGx1cyAubGluay1wbHVzIHtcbiAgY29sb3I6ICMyNjIzNWY7XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgI2xlZnQtc2hpZnQgLnRleHQtaW5mby1wbHVzICNlbWFpbC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0ICNhZHJlc3M6aG92ZXIgI2FkcmVzcy1saW5rLFxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0ICNhZHJlc3MtbGluazpob3ZlciAjYWRyZXNzLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmZvb3RlciAuY2FudmFzIC5jb2x1bW4tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbmZvb3RlciAubGlua3MtdG8tY29tcGFueS12aWV3LmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duLFxuZm9vdGVyIC5tZW51LXNpdGUubGlua3MuYWN0aXZlZF9zbGlkZURvd24sXG5mb290ZXIgLmxpbmtzLXRvLVNNLmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5mb290ZXIgLmFycm93LWRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5mb290ZXIuZm9vdGVyLTIgLmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM0MzQ7XG4gIHBhZGRpbmc6IDE1cHggMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3Rlci5mb290ZXItMiAuY2FudmFzIC5ydWxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuZm9vdGVyLmZvb3Rlci0yIC5jYW52YXMgLnJ1bGVzIGEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICNiNmI1YjU7XG59XG5mb290ZXIuZm9vdGVyLTIgLmNhbnZhcyAuYXV0aG9yIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjYjZiNWI1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/main-layout/main-layout.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
    \************************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppSharedComponentsMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/comments"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

    function MainLayoutComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_21_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r1.toAnchor("services");
          return ctx_r1.toggle = !ctx_r1.toggle;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0441\u043B\u0443\u0433\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_21_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r3.toAnchor("contacts");
          return ctx_r3.toggle = !ctx_r3.toggle;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_21_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggle = !ctx_r4.toggle;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0442\u0437\u044B\u0432\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_21_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggle = !ctx_r5.toggle;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E \u043D\u0430\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_21_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.toggle = !ctx_r6.toggle;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stand", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        smallto: a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        smaller: a0
      };
    };

    var _c4 = function _c4(a0) {
      return {
        active: a0
      };
    };

    var MainLayoutComponent = /*#__PURE__*/function () {
      function MainLayoutComponent(router) {
        _classCallCheck(this, MainLayoutComponent);

        this.router = router;
        this.toggle = false;
        this.decreased = false;
      }

      _createClass(MainLayoutComponent, [{
        key: "scrolling",
        value: function scrolling() {
          if (pageYOffset >= 200) {
            this.decreased = true;
          } else {
            this.decreased = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toAnchor",
        value: function toAnchor(anchor) {
          if (this.router.url === '/home' || this.router.url === '/home#services' || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          } else {
            this.router.navigate(['/home'], {
              fragment: anchor
            });
          }
        }
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      hostBindings: function MainLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MainLayoutComponent_scroll_HostBindingHandler() {
            return ctx.scrolling();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 26,
      vars: 14,
      consts: [[3, "ngClass"], ["id", "start", 1, "top-line", 3, "ngClass"], ["id", "link-logo", "routerLink", "/home"], ["src", "assets/img/logo-komp.svg", "alt", "logo-komp", 1, "logotype"], [1, "header_nav"], [3, "click"], ["routerLinkActive", "linkactive", 3, "routerLink"], ["type", "button", 1, "hamburger", "hamburger--spin", 3, "ngClass", "click"], [1, "hamburger-box"], [1, "hamburger-inner"], ["class", "plate", 4, "ngIf"], ["id", "main-layout"], [1, "plate"], [1, "slideMenu"], [3, "routerLink", "click"], [1, "up-block", 3, "click"], ["type", "button", 1, "slideUp"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_7_listener() {
            return ctx.toAnchor("services");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0423\u0441\u043B\u0443\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_10_listener() {
            return ctx.toAnchor("contacts");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0442\u0437\u044B\u0432\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E \u043D\u0430\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_18_listener() {
            return ctx.toggle = !ctx.toggle;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MainLayoutComponent_div_21_Template, 17, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.decreased));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx.decreased));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx.toggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-height: 60px;\n  padding: 10px 0px;\n  \n  background-color: rgba(234, 234, 254, 0.75);\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 10;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%] {\n  transition-duration: 500ms;\n  padding: 0px;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition-duration: 500ms;\n  margin: 0px 20px 0px 50px;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .logotype[_ngcontent-%COMP%] {\n  transition-duration: 500ms;\n  max-width: 70px;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n}\nheader[_ngcontent-%COMP%]   div.top-line.smaller[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a.linkactive[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n@media all and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  margin: 0px 50px 0px 100px;\n}\n@media all and (max-width: 900px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    margin: 0px 25px 0px 50px;\n  }\n}\n@media all and (max-width: 900px) and (max-width: 650px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    margin: 0px 15px 0px 25px;\n  }\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .logotype[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  max-width: 140px;\n}\n@media all and (max-width: 840px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .logotype[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  margin-right: 15px;\n}\n@media all and (max-width: 900px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n@media all and (max-width: 600px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n  padding: 10px;\n  transition-duration: 300ms;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a.linkactive[_ngcontent-%COMP%] {\n  color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition-duration: 300ms;\n  color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  list-style-type: none;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: 0.1em;\n  margin: 0px 15px;\n}\n@media all and (max-width: 940px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0px 7px;\n  }\n}\n@media all and (max-width: 840px) {\n  header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin: 0px 5px;\n  }\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  padding: 10px 15px 10px 10px;\n  display: none;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n@media all and (max-width: 600px) {\n  header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\nheader[_ngcontent-%COMP%]   .hamburger.active[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  background-color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  width: 40px;\n  height: 4px;\n  background-color: #403D7A;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: -10px;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: -10px;\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\nheader[_ngcontent-%COMP%]   .hamburger.hamburger--spin.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: rgba(234, 234, 254, 0.9);\n  width: 100%;\n  z-index: 9;\n  position: fixed;\n  height: calc(100% - 58px);\n  top: 57px;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: column nowrap;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n  letter-spacing: 0.1em;\n  line-height: 20px;\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  position: relative;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  border: none;\n  top: 50%;\n  right: 43%;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  width: 45px;\n  height: 5px;\n  border-radius: 15px;\n  border: none;\n  background-color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]::after {\n  right: -1px;\n  transform-origin: left;\n  transform: rotate(-30deg);\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]::before {\n  left: -1px;\n  transform-origin: right;\n  transform: rotate(30deg);\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #211d66;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition-duration: 500ms;\n}\nheader.smallto[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  top: 46px;\n}\n#main-layout[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1sYXlvdXQvRDpcXFByb2dyYW1taW5nXFxPcmRlcnNcXEtvbXBcXGNvbS5rb21wXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtYWluLWxheW91dFxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FKO0FEQ0k7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUNDTjtBREFNO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQ0VSO0FERFE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNHVjtBRENRO0VBQ0UsY0FBQTtBQ0NWO0FEQVU7RUFDRSxjQUFBO0FDRVo7QURBVTtFQUNFLGNBQUE7QUNFWjtBREdJO0VBcENGO0lBcUNJLGdCQUFBO0VDQUo7QUFDRjtBREdJO0VBQ0UsMEJBQUE7QUNETjtBREVNO0VBRkY7SUFHSSx5QkFBQTtFQ0NOO0FBQ0Y7QUREUTtFQUpKO0lBS00seUJBQUE7RUNJUjtBQUNGO0FERk07RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FDSVI7QURIUTtFQUhGO0lBSUksZ0JBQUE7RUNNUjtBQUNGO0FESEk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FDS047QURKTTtFQUhGO0lBSUksa0JBQUE7RUNPTjtBQUNGO0FETk07RUFORjtJQU9JLGFBQUE7RUNTTjtBQUNGO0FEUk07RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNVUjtBRFRRO0VBQ0UsY0FBQTtBQ1dWO0FEVFE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDV1Y7QURSTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDVVI7QURUUTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1dWO0FEVlU7RUFORjtJQU9JLGVBQUE7SUFDQSxlQUFBO0VDYVY7QUFDRjtBRFpVO0VBVkY7SUFXSSxlQUFBO0lBQ0EsZUFBQTtFQ2VWO0FBQ0Y7QURUQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUlBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDUUY7QURyQkU7RUFIRjtJQUlJLHFCQUFBO0VDd0JGO0FBQ0Y7QURaRTtFQUNJLFlBQUE7QUNjTjtBRFpFO0VBQ0UsWUFBQTtBQ2NKO0FEWkU7OztFQUdFLHlCQUFBO0FDY0o7QURaRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ2NKO0FEWkU7RUFDRSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDY0o7QURaRTs7O0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNjSjtBRFpFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNjSjtBRFpFO0VBQ0UsVUFBQTtBQ2NKO0FEWkU7RUFDRSxhQUFBO0FDY0o7QURYSTtFQUNFLDBCQUFBO0VBQ0Esa0VBQUE7QUNhTjtBRFpNO0VBQ0Usd0RBQUE7QUNjUjtBRFpNO0VBQ0UsNkZBQUE7QUNjUjtBRFZNO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtEQUFBO0FDWVI7QURYUTtFQUNFLE1BQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7QUNhVjtBRFhRO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkZBQUE7QUNhVjtBRE5FO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ1FKO0FEUEk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1NOO0FEUk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1VSO0FEVFE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNXVjtBRFZVO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNXWjtBRFRVO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNXWjtBRFRVO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNXWjtBRE5JO0VBQ0UsZ0JBQUE7QUNRTjtBRFBNO0VBQ0UsY0FBQTtBQ1NSO0FETkk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNRTjtBREpJO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FDTU47QURHRTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gIGRpdi50b3AtbGluZXtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwyMzQsMjU0LDc1JSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAmLnNtYWxsZXJ7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgID4gYXtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4IDBweCA1MHB4O1xyXG4gICAgICAgIC5sb2dvdHlwZXtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyX25hdntcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgY29sb3I6ICM0MDNEN0E7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYubGlua2FjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcclxuICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk3MHB4KXtcclxuICAgIH1cclxuICAgID4gYXtcclxuICAgICAgbWFyZ2luOiAwcHggNTBweCAwcHggMTAwcHg7XHJcbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBtYXJnaW46IDBweCAyNXB4IDBweCA1MHB4O1xyXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY1MHB4KXtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDE1cHggMHB4IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvdHlwZXtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX25hdntcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICYubGlua2FjdGl2ZXtcclxuICAgICAgICAgIGNvbG9yOiAjNDAzRDdBO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICBjb2xvcjogIzQwM0Q3QTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICBtYXJnaW46MHB4IDE1cHg7XHJcbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NDBweCl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuLy8gLS0tLS0tLS0tLS0gSEFNQlVSR0VSIC0tLS0tLS0tLS0tLS0tLVxyXG59XHJcbi5oYW1idXJnZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XHJcbiAgZGlzcGxheTogbm9uZTsgIC8vaW5saW5lLWJsb2NrXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgZmlsdGVyO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gICYuYWN0aXZlOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgLmFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxyXG4gIC5hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxyXG4gIC5hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0Q3QTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItaW5uZXIsXHJcbiAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxyXG4gIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzRDdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gIH1cclxuICAmLmhhbWJ1cmdlci0tc3BpbntcclxuICAgIC5oYW1idXJnZXItaW5uZXIge1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuICAucGxhdGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwyMzQsMjU0LDkwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU4cHgpO1xyXG4gICAgdG9wOjU3cHg7XHJcbiAgICAuc2xpZGVNZW51e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLnVwLWJsb2Nre1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC5zbGlkZVVwe1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHJpZ2h0OiA0MyU7XHJcbiAgICAgICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzRDdBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICMyMTFkNjY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuc21hbGx0b3tcclxuICAgIC5wbGF0ZXtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcclxuICAgICAgdG9wOjQ2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jbWFpbi1sYXlvdXR7XHJcbiAgLy8gcm91dGVyLW91dGxldHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB9XHJcbiAgZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiBhdXRvO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MTMwMHB4KXtcclxuLy8gICAudG9wLWxpbmUgPiBhe1xyXG4vLyAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbi8vICAgICAgIC5oZWFkZXJfbmF2e1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XHJcbi8vICAgLnRvcC1saW5le1xyXG4vLyAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LDIzNCwyNTQsNzUlKTtcclxuLy8gICAgICAgPiBhe1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC5oZWFkZXJfbmF2e1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuaGVhZGVyX25hdiBsaXtcclxuLy8gICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4vLyAgICAgICAgIGF7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ODEycHgpe1xyXG4vLyAgIC50b3AtbGluZSAuaGVhZGVyX25hdntcclxuLy8gICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICB9XHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4vLyAgIC50b3AtbGluZSAuaGVhZGVyX25hdntcclxuLy8gICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICB9XHJcbi8vIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xyXG4vLyAgIC50b3AtbGluZXtcclxuLy8gICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbi8vICAgfVxyXG4vLyAgIC50b3AtbGluZSA+IGF7XHJcbi8vICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4vLyAgIH1cclxuLy8gQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo0MjVweCl7XHJcbi8vICAgLnRvcC1saW5le1xyXG4vLyAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC50b3AtbGluZSA+IGEge1xyXG4vLyAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICB9XHJcbiIsImhlYWRlciBkaXYudG9wLWxpbmUge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgLyogYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjU0LCAwLjc1KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZS5zbWFsbGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUuc21hbGxlciA+IGEge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggNTBweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUuc21hbGxlciA+IGEgLmxvZ290eXBlIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIG1heC13aWR0aDogNzBweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUuc21hbGxlciAuaGVhZGVyX25hdiBhIHtcbiAgY29sb3I6ICM0MDNEN0E7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lLnNtYWxsZXIgLmhlYWRlcl9uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZS5zbWFsbGVyIC5oZWFkZXJfbmF2IGEubGlua2FjdGl2ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciBkaXYudG9wLWxpbmUge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gIH1cbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgPiBhIHtcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggMTAwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICBoZWFkZXIgZGl2LnRvcC1saW5lID4gYSB7XG4gICAgbWFyZ2luOiAwcHggMjVweCAwcHggNTBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICBoZWFkZXIgZGl2LnRvcC1saW5lID4gYSB7XG4gICAgbWFyZ2luOiAwcHggMTVweCAwcHggMjVweDtcbiAgfVxufVxuaGVhZGVyIGRpdi50b3AtbGluZSA+IGEgLmxvZ290eXBlIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xuICBoZWFkZXIgZGl2LnRvcC1saW5lID4gYSAubG9nb3R5cGUge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhlYWRlcl9uYXYge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgaGVhZGVyIGRpdi50b3AtbGluZSAuaGVhZGVyX25hdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhlYWRlcl9uYXYgYS5saW5rYWN0aXZlIHtcbiAgY29sb3I6ICM0MDNEN0E7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICBjb2xvcjogIzQwM0Q3QTtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhlYWRlcl9uYXYgdWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IHVsIGxpIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgaGVhZGVyIGRpdi50b3AtbGluZSAuaGVhZGVyX25hdiB1bCBsaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMHB4IDdweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgaGVhZGVyIGRpdi50b3AtbGluZSAuaGVhZGVyX25hdiB1bCBsaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMHB4IDVweDtcbiAgfVxufVxuaGVhZGVyIC5oYW1idXJnZXIge1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlciAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbmhlYWRlciAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuaGVhZGVyIC5oYW1idXJnZXIuYWN0aXZlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuaGVhZGVyIC5oYW1idXJnZXIgLmFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxuaGVhZGVyIC5oYW1idXJnZXIgLmFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXG5oZWFkZXIgLmhhbWJ1cmdlciAuYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0Q3QTtcbn1cbmhlYWRlciAuaGFtYnVyZ2VyIC5oYW1idXJnZXItYm94IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgLmhhbWJ1cmdlciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuaGVhZGVyIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1pbm5lcixcbmhlYWRlciAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcbmhlYWRlciAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzRDdBO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5oZWFkZXIgLmhhbWJ1cmdlciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIGhlYWRlciAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgLmhhbWJ1cmdlciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IC0xMHB4O1xufVxuaGVhZGVyIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IC0xMHB4O1xufVxuaGVhZGVyIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuaGVhZGVyIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xufVxuaGVhZGVyIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuaGVhZGVyIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluLmFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cbmhlYWRlciAuaGFtYnVyZ2VyLmhhbWJ1cmdlci0tc3Bpbi5hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xufVxuaGVhZGVyIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluLmFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cbmhlYWRlciAucGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAyMzQsIDI1NCwgMC45KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1OHB4KTtcbiAgdG9wOiA1N3B4O1xufVxuaGVhZGVyIC5wbGF0ZSAuc2xpZGVNZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5oZWFkZXIgLnBsYXRlIC5zbGlkZU1lbnUgLnVwLWJsb2NrIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLnBsYXRlIC5zbGlkZU1lbnUgLnVwLWJsb2NrIC5zbGlkZVVwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDQzJTtcbn1cbmhlYWRlciAucGxhdGUgLnNsaWRlTWVudSAudXAtYmxvY2sgLnNsaWRlVXA6OmJlZm9yZSwgaGVhZGVyIC5wbGF0ZSAuc2xpZGVNZW51IC51cC1ibG9jayAuc2xpZGVVcDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0Q3QTtcbn1cbmhlYWRlciAucGxhdGUgLnNsaWRlTWVudSAudXAtYmxvY2sgLnNsaWRlVXA6OmFmdGVyIHtcbiAgcmlnaHQ6IC0xcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG59XG5oZWFkZXIgLnBsYXRlIC5zbGlkZU1lbnUgLnVwLWJsb2NrIC5zbGlkZVVwOjpiZWZvcmUge1xuICBsZWZ0OiAtMXB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xufVxuaGVhZGVyIC5wbGF0ZSBsaSB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG5oZWFkZXIgLnBsYXRlIGxpIGEge1xuICBjb2xvcjogIzIxMWQ2Njtcbn1cbmhlYWRlciAucGxhdGUgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5oZWFkZXIuc21hbGx0byAucGxhdGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICB0b3A6IDQ2cHg7XG59XG5cbiNtYWluLWxheW91dCBmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          perspectiveOrigin: 'top center',
          transformOrigin: 'top',
          transform: 'translateY(-80px) rotateX(-90deg)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transformOrigin: 'top',
          transform: 'rotateX(0deg)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transformOrigin: 'top',
          transform: 'rotateX(-90deg)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-layout',
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            perspectiveOrigin: 'top center',
            transformOrigin: 'top',
            transform: 'translateY(-80px) rotateX(-90deg)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transformOrigin: 'top',
            transform: 'rotateX(0deg)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transformOrigin: 'top',
            transform: 'rotateX(-90deg)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        scrolling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/headers.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/headers.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: HeadersInterceptor */

  /***/
  function srcAppSharedServicesHeadersInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersInterceptor", function () {
      return HeadersInterceptor;
    });

    var HeadersInterceptor = /*#__PURE__*/function () {
      function HeadersInterceptor() {
        _classCallCheck(this, HeadersInterceptor);
      }

      _createClass(HeadersInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          //  const cloned = req.clone({
          //    // headers: req.headers.append('Origin','http:/localhost:4200')
          //  })
          console.log('Interceptor must added:');
          return next.handle(req);
        }
      }]);

      return HeadersInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      urlAPI: 'http://localhost:80/api' //dev

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Programming\Orders\Komp\com.komp\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map