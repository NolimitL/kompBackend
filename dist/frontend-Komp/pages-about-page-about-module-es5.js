function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-page-about-module"], {
  /***/
  "./src/app/pages/about-page/about.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/about-page/about.module.ts ***!
    \**************************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutPageAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/pages/about-page/about/about.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }];

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/about-page/about/about.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/about-page/about/about.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutPageAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 11,
      vars: 0,
      consts: [[1, "canvas"], [1, "information"], ["id", "office"], ["type", "image/webp", "srcset", "assets/img/service-place.webp"], ["src", "assets/img/service-place.jpeg", "alt", "our office foto"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0448\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041C\u044B \u2013 \xAB\u041A\u041E\u041C\u041F - \u0421\u0435\u0440\u0432\u0438\u0441\xBB \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0443\u0441\u043B\u0443\u0433 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 25 \u043B\u0435\u0442 \u0438 \u0437\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u0441\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043E\u043F\u044B\u0442\u0430 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043E\u0444\u0438\u0441\u043D\u043E\u0439 \u0438 \u043C\u0435\u043B\u043A\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u0412 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u0441\u0442\u0430\u0436\u0435\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430. \u041D\u0430\u043C \u0434\u043E\u0440\u043E\u0433 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0442\u043E\u0447\u043D\u043E \u043F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u043D\u044F\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043F\u043E\u043B\u043E\u043C\u043A\u0438, \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0438 \u0434\u0435\u043B\u0430\u0435\u043C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u044C \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438. \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442 \u0432 \u043D\u0430\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u043C \u0446\u0435\u043D\u0442\u0440\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u0442\u043E\u0447\u043D\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0438 \u0441 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C \u0432\u0441\u0435\u0445 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0445 \u043D\u043E\u0440\u043C. \u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043B\u044E\u0431\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u2013 \u044D\u0442\u043E \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u043B\u043E\u0436\u043D\u0430\u044F \u0438 \u043A\u0440\u043E\u043F\u043E\u0442\u043B\u0438\u0432\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430, \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0442\u0440\u0430\u0442, \u043C\u044B \u0443\u0436\u0435 \u043C\u043D\u043E\u0433\u043E \u043B\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0435\u0435 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u043C, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u0441\u043F\u0435\u0445\u043E\u043C \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u0443\u0441\u043B\u0443\u0433.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".canvas[_ngcontent-%COMP%] {\n  margin: 120px 0px 100px;\n  padding: 20px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: rgba(251, 251, 251, 0.97);\n  border-radius: 5px;\n  padding: 3%;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #office[_ngcontent-%COMP%] {\n  float: right;\n  margin: 10px;\n  max-width: 450px;\n  max-height: 250px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #office[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.55rem;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  word-spacing: 0.5em;\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC9EOlxcUHJvZ3JhbW1pbmdcXE9yZGVyc1xcS29tcFxcY29tLmtvbXBcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXQtcGFnZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSVI7QURESTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRERJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FudmFze1xyXG4gIG1hcmdpbjogMTIwcHggMHB4IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLmluZm9ybWF0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjk3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgI29mZmljZXtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNTVyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgd29yZC1zcGFjaW5nOiAwLjVlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhbnZhcyB7XG4gIG1hcmdpbjogMTIwcHggMHB4IDEwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuOTcpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMlO1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gI29mZmljZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbi5jYW52YXMgLmluZm9ybWF0aW9uICNvZmZpY2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYW52YXMgLmluZm9ybWF0aW9uIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjU1cmVtO1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3b3JkLXNwYWNpbmc6IDAuNWVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-about-page-about-module-es5.js.map