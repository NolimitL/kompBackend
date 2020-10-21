(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "./src/app/shared/components/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/greet/greet.component */ "./src/app/pages/home-page/greet/greet.component.ts");







const routes = [
    { path: '', component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_4__["GreetComponent"], children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-home-page-home-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-page-home-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/home-page/home-page.module */ "./src/app/pages/home-page/home-page.module.ts"))
                            .then(homemodule => homemodule.HomePageModule)
                    }
                ]
            },
            { path: 'services', redirectTo: '/home', pathMatch: 'full' },
            {
                path: 'services/:name',
                loadChildren: () => Promise.all(/*! import() | pages-svc-page-svc-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-svc-page-svc-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/svc-page/svc-page.module */ "./src/app/pages/svc-page/svc-page.module.ts"))
                    .then(servicemodule => servicemodule.SVCPageModule)
            },
            {
                path: 'comments',
                loadChildren: () => Promise.all(/*! import() | pages-comments-page-comments-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-comments-page-comments-module")]).then(__webpack_require__.bind(null, /*! ./pages/comments-page/comments.module */ "./src/app/pages/comments-page/comments.module.ts"))
                    .then(commentsmodule => commentsmodule.CommentsModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-about-page-about-module */ "pages-about-page-about-module").then(__webpack_require__.bind(null, /*! ./pages/about-page/about.module */ "./src/app/pages/about-page/about.module.ts"))
                    .then(aboutmodule => aboutmodule.AboutModule)
            },
            { path: 'error', component: _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] },
            { path: '**', redirectTo: '/error' }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                scrollPositionRestoration: "top",
                // anchorScrolling: 'enabled', //для перехода к фрагменту
                scrollOffset: [0, 0]
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                        scrollPositionRestoration: "top",
                        // anchorScrolling: 'enabled', //для перехода к фрагменту
                        scrollOffset: [0, 0]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["router-outlet[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2dyYW1taW5nXFxPcmRlcnNcXEtvbXBcXGNvbS5rb21wXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc05BO0VBQ0Usa0JBQUE7QUNyTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByb3V0ZXItb3V0bGV0e1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG4vLyAvLyAtLS0tLVxyXG4vLyAvLyBBUlJPV1NcclxuLy8gLy8gLS0tLS1cclxuLy8gLmFycm93LWRvd257XHJcbi8vICAgcGFkZGluZzogMTBweDtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlcjogMDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmFycm93LWRvd24tYm94e1xyXG4vLyAgIHdpZHRoOiA0MHB4O1xyXG4vLyAgIGhlaWdodDogMjRweDtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1kb3duLWlubmVye1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAuYXJyb3ctZG93bi1pbm5lcjo6YmVmb3JlLFxyXG4vLyAuYXJyb3ctZG93bi1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgd2lkdGg6IDI0cHg7XHJcbi8vICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0Q3QTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vIH1cclxuLy8gLmFycm93LWRvd24taW5uZXI6OmJlZm9yZXtcclxuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbi8vICAgYm9yZGVyLXJhZGl1czo1MHB4IDEwMHB4IDEwMHB4IDUwcHg7XHJcbi8vICAgY29udGVudDpcIlwiO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIGxlZnQ6IC0wLjdweDtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgzOGRlZyk7XHJcbi8vIH1cclxuLy8gLmFycm93LWRvd24taW5uZXI6OmFmdGVye1xyXG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuLy8gICBjb250ZW50OlwiXCI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czoxMDBweCA1MHB4IDUwcHggMTAwcHg7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgcmlnaHQ6IC0wLjdweDtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzhkZWcpO1xyXG4vLyB9XHJcbi8vIC8qIGFjdGl2ZSAqL1xyXG4vLyAuYXJyb3ctZG93bi1ib3guYWN0aXZlIC5hcnJvdy1kb3duLWlubmVyOjpiZWZvcmV7XHJcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKC0zOGRlZyk7XHJcbi8vIH1cclxuLy8gLmFycm93LWRvd24tYm94LmFjdGl2ZSAuYXJyb3ctZG93bi1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKDM4ZGVnKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuLy8gLyogUklHSFQgLS0gTEVGVCBBcnJvdyAgKi9cclxuLy8gLmFycm93e1xyXG4vLyAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlcjogMDtcclxuLy8gICBvdmVyZmxvdzogdmlzaWJsZTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIHRvcDogMTUwcHg7XHJcbi8vICAgei1pbmRleDogODtcclxuLy8gfVxyXG4vLyAuYXJyb3ctbGVmdHtcclxuLy8gICBsZWZ0OiA1cHg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1yaWdodHtcclxuLy8gICByaWdodDogNXB4O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1ib3h7XHJcbi8vICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1pbm5lcntcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIH1cclxuLy8gLmFycm93LWlubmVyOjpiZWZvcmUsXHJcbi8vIC5hcnJvdy1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgd2lkdGg6IDQwcHg7XHJcbi8vICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0Q3QTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vIH1cclxuLy8gLmFycm93LWxlZnQtaW5uZXI6OmJlZm9yZSxcclxuLy8gLmFycm93LWxlZnQtaW5uZXI6OmFmdGVye1xyXG4vLyAgIGxlZnQ6IDBweDtcclxuLy8gfVxyXG4vLyAuYXJyb3ctcmlnaHQtaW5uZXI6OmJlZm9yZSxcclxuLy8gLmFycm93LXJpZ2h0LWlubmVyOjphZnRlcntcclxuLy8gICByaWdodDogMHB4O1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1pbm5lcjo6YmVmb3Jle1xyXG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuLy8gICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4vLyAgIGNvbnRlbnQ6XCJcIjtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG4vLyAuYXJyb3ctaW5uZXI6OmFmdGVye1xyXG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuLy8gICBjb250ZW50OlwiXCI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czoxMDBweDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG4vLyAuYXJyb3ctbGVmdC1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTtcclxuLy8gICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1sZWZ0LWlubmVyOjpiZWZvcmV7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoNjVkZWcpO1xyXG4vLyAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbi8vICAgdG9wOiA0OCU7XHJcbi8vIH1cclxuLy8gLmFycm93LXJpZ2h0LWlubmVyOjphZnRlcntcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpO1xyXG4vLyAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4vLyAgIHRvcDogNDglO1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1yaWdodC1pbm5lcjo6YmVmb3Jle1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKDY1ZGVnKTtcclxuLy8gICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5zbGlkZVVwe1xyXG4vLyBwYWRkaW5nOiA1cHg7XHJcbi8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuLy8gYm9yZGVyOjA7XHJcbi8vIG1hcmdpbjogMTBweCAwcHg7XHJcbi8vIH1cclxuLy8gLnNsaWRlVXAtYm94e1xyXG4vLyBkaXNwbGF5OiBibG9jaztcclxuLy8gd2lkdGg6IDE0MHB4O1xyXG4vLyBoZWlnaHQ6IDYwcHg7XHJcbi8vIH1cclxuLy8gLnNsaWRlVXAtaW5uZXI6OmJlZm9yZSxcclxuLy8gLnNsaWRlVXAtaW5uZXI6OmFmdGVye1xyXG4vLyAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICB3aWR0aDogNjVweDtcclxuLy8gICBoZWlnaHQ6IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IzQwM0Q3QTtcclxuLy8gICB0b3A6IDAlO1xyXG4vLyB9XHJcbi8vIC5zbGlkZVVwLWlubmVyOjpiZWZvcmV7XHJcbi8vICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcclxuLy8gICByaWdodDogLTFweDtcclxuLy8gfVxyXG4vLyAuc2xpZGVVcC1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbi8vICAgbGVmdDogLTFweDtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6NjEwcHgpe1xyXG4vLyAuYXJyb3d7XHJcbi8vICAgdG9wOiAtMjVweDtcclxuLy8gfVxyXG4vLyAuYXJyb3ctbGVmdHtcclxuLy8gICBsZWZ0OiA4MHB4O1xyXG4vLyB9XHJcbi8vIC5hcnJvdy1yaWdodHtcclxuLy8gICByaWdodDogODBweDtcclxuLy8gfVxyXG4vLyAuYXJyb3ctbGVmdC1pbm5lcjo6YWZ0ZXJ7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyZGVnKTtcclxuLy8gfVxyXG4vLyAuYXJyb3ctbGVmdC1pbm5lcjo6YmVmb3Jle1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTtcclxuLy8gICB0b3A6IDQ5JTtcclxuLy8gfVxyXG4vLyAuYXJyb3ctcmlnaHQtaW5uZXI6OmFmdGVye1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKC0yMmRlZyk7XHJcbi8vICAgdG9wOiA0OSU7XHJcbi8vIH1cclxuLy8gLmFycm93LXJpZ2h0LWlubmVyOjpiZWZvcmV7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xyXG4vLyB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6NDI1cHgpe1xyXG4vLyAuYXJyb3d7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5yb3V0ZXItb3V0bGV0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iLCJyb3V0ZXItb3V0bGV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/headers.interceptor */ "./src/app/shared/services/headers.interceptor.ts");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "./src/app/shared/components/main-layout/main-layout.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home-page/greet/greet.component */ "./src/app/pages/home-page/greet/greet.component.ts");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default.a, 'ru');
const INTERCEPTOR = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
    useClass: _shared_services_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__["HeadersInterceptor"],
    multi: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [INTERCEPTOR], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"],
        _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__["GreetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
                    _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"],
                    _pages_home_page_greet_greet_component__WEBPACK_IMPORTED_MODULE_14__["GreetComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]
                ],
                providers: [INTERCEPTOR],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 8, vars: 0, consts: [["id", "error"], [1, "canvas", "canvas-error"], [1, "error-text"], ["routerLink", "/", 1, "btn"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#error[_ngcontent-%COMP%] {\n  position: relative;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%] {\n  margin: 140px 0px 120px;\n  padding: 30px 0px 30px 70px;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n  color: rgba(0, 0, 0, 0.8);\n  padding: 10px 0px;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition-duration: 100ms;\n}\n#error[_ngcontent-%COMP%]   .canvas-error[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transition-duration: 100ms;\n  color: #403D7A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9EOlxcUHJvZ3JhbW1pbmdcXE9yZGVyc1xcS29tcFxcY29tLmtvbXBcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcZXJyb3ItcGFnZVxcZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBREFFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEREk7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDR047QURESTtFQUNFLDBCQUFBO0FDR047QURGTTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Vycm9ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY2FudmFzLWVycm9ye1xyXG4gICAgbWFyZ2luOiAxNDBweCAwcHggMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAzMHB4IDcwcHg7XHJcbiAgICAuZXJyb3ItdGV4dHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XHJcbiAgICAgICAgY29sb3I6ICM0MDNEN0E7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2Vycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2Vycm9yIC5jYW52YXMtZXJyb3Ige1xuICBtYXJnaW46IDE0MHB4IDBweCAxMjBweDtcbiAgcGFkZGluZzogMzBweCAwcHggMzBweCA3MHB4O1xufVxuI2Vycm9yIC5jYW52YXMtZXJyb3IgLmVycm9yLXRleHQge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4jZXJyb3IgLmNhbnZhcy1lcnJvciAuYnRuIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG59XG4jZXJyb3IgLmNhbnZhcy1lcnJvciAuYnRuOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIGNvbG9yOiAjNDAzRDdBO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/greet/greet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/greet/greet.component.ts ***!
  \**********************************************************/
/*! exports provided: GreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetComponent", function() { return GreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GreetComponent {
    constructor(router) {
        this.router = router;
        this.triangle = 'assets/img/triangle.svg';
    }
    ngOnInit() {
    }
    toAnchor(anchor) {
        if (this.router.url === '/home'
            || this.router.url === '/home#services'
            || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        else {
            this.router.navigate(['/home'], { fragment: anchor });
        }
    }
}
GreetComponent.ɵfac = function GreetComponent_Factory(t) { return new (t || GreetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GreetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GreetComponent, selectors: [["app-greet"]], decls: 13, vars: 1, consts: [["id", "welcome-start", 1, "beginn"], [1, "wrapper"], [1, "text1"], [1, "komp-name"], [1, "credo"], [1, "down-tr", 3, "click"], ["for", "triangle", "id", "label-text"], ["id", "triangle", 1, "down-link"], ["alt", "down-triangle", 1, "down-triangle", 3, "src"]], template: function GreetComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GreetComponent_Template_div_click_7_listener() { return ctx.toAnchor("services"); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.triangle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".beginn[_ngcontent-%COMP%] {\n  padding: 180px 0px 200px;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  color: #FFFFFF;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .komp-name[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 150%;\n  letter-spacing: 0.1em;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  max-width: 800px;\n  text-align: center;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .credo[_ngcontent-%COMP%] {\n  font-family: \"Fira Sans Condensed\", sans-serif;\n  font-size: 28px;\n  font-style: italic;\n  font-weight: normal;\n  line-height: 150%;\n  letter-spacing: 0.1em;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  margin: 90px 0px 75px;\n  max-width: 700px;\n  min-height: 40px;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  font-style: italic;\n  letter-spacing: 0.1em;\n  -webkit-animation-name: jumpy;\n          animation-name: jumpy;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]:hover   .down-link[_ngcontent-%COMP%]   .down-triangle[_ngcontent-%COMP%] {\n  transition-duration: 0.25s;\n  transition-timing-function: ease-out;\n  transform: translate(0px, 3px) scale(0.97);\n  filter: opacity(90%) drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.95));\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   #label-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   #label-text[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   .down-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.beginn[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .down-tr[_ngcontent-%COMP%]   .down-link[_ngcontent-%COMP%]   .down-triangle[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 50px;\n  filter: opacity(70%) drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.9));\n  transition-duration: 250ms;\n  transition-timing-function: ease-out;\n}\n@-webkit-keyframes jumpy {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  100% {\n    transform: translate(0px, 7px);\n  }\n}\n@keyframes jumpy {\n  0% {\n    transform: translate(0px, 0px);\n  }\n  100% {\n    transform: translate(0px, 7px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2dyZWV0L0Q6XFxQcm9ncmFtbWluZ1xcT3JkZXJzXFxLb21wXFxjb20ua29tcFxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxob21lLXBhZ2VcXGdyZWV0XFxncmVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2dyZWV0L2dyZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Esd0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7QURESTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dOO0FEREk7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBRERJO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0lSO0FERlU7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxpRUFBQTtBQ0laO0FEQU07RUFDRSxxQkFBQTtBQ0VSO0FERFE7RUFDRSxlQUFBO0FDR1Y7QURBTTtFQUNFLHFCQUFBO0FDRVI7QUREUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUNHVjtBRElBO0VBQ0k7SUFDSSw4QkFBQTtFQ0ROO0VER0U7SUFDSSw4QkFBQTtFQ0ROO0FBQ0Y7QURMQTtFQUNJO0lBQ0ksOEJBQUE7RUNETjtFREdFO0lBQ0ksOEJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2dyZWV0L2dyZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYmVnaW5ue1xyXG4gIHBhZGRpbmc6IDE4MHB4IDBweCAyMDBweDtcclxuICAudGV4dDF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAua29tcC1uYW1le1xyXG4gICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWRve1xyXG4gICAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDkwcHggMHB4IDc1cHg7XHJcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuZG93bi10cntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBhbmltYXRpb24tbmFtZToganVtcHk7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgICAgICAuZG93bi1saW5re1xyXG4gICAgICAgICAgLmRvd24tdHJpYW5nbGV7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgM3B4KSBzY2FsZSgwLjk3KTtcclxuICAgICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDkwJSkgZHJvcC1zaGFkb3coMHB4IDZweCA1cHggcmdiYSgwLDAsMCw5NSUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI2xhYmVsLXRleHR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZG93bi1saW5re1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAuZG93bi10cmlhbmdsZXtcclxuICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDcwJSkgZHJvcC1zaGFkb3coMHB4IDZweCA4cHggcmdiYSgwLDAsMCw5MCUpKTtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBqdW1weXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDdweClcclxuICAgIH1cclxufVxyXG4iLCIuYmVnaW5uIHtcbiAgcGFkZGluZzogMTgwcHggMHB4IDIwMHB4O1xufVxuLmJlZ2lubiAudGV4dDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5iZWdpbm4gLnRleHQxIC5rb21wLW5hbWUge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmVnaW5uIC50ZXh0MSAuY3JlZG8ge1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogOTBweCAwcHggNzVweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbi5iZWdpbm4gLnRleHQxIC5kb3duLXRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGFuaW1hdGlvbi1uYW1lOiBqdW1weTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuLmJlZ2lubiAudGV4dDEgLmRvd24tdHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4uYmVnaW5uIC50ZXh0MSAuZG93bi10cjpob3ZlciAuZG93bi1saW5rIC5kb3duLXRyaWFuZ2xlIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzcHgpIHNjYWxlKDAuOTcpO1xuICBmaWx0ZXI6IG9wYWNpdHkoOTAlKSBkcm9wLXNoYWRvdygwcHggNnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOTUpKTtcbn1cbi5iZWdpbm4gLnRleHQxIC5kb3duLXRyICNsYWJlbC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmJlZ2lubiAudGV4dDEgLmRvd24tdHIgI2xhYmVsLXRleHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmVnaW5uIC50ZXh0MSAuZG93bi10ciAuZG93bi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJlZ2lubiAudGV4dDEgLmRvd24tdHIgLmRvd24tbGluayAuZG93bi10cmlhbmdsZSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIGZpbHRlcjogb3BhY2l0eSg3MCUpIGRyb3Atc2hhZG93KDBweCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMganVtcHkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgN3B4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-greet',
                templateUrl: './greet.component.html',
                styleUrls: ['./greet.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");





const _c0 = function (a0) { return { textDecoration: a0 }; };
class FooterComponent {
    constructor(router) {
        this.router = router;
        this.visible = false;
        this.visibleL = false;
    }
    ngOnInit() {
    }
    toAnchor(anchor) {
        if (this.router.url === '/home'
            || this.router.url === '/home#services'
            || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        else {
            this.router.navigate(['/home'], { fragment: anchor });
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 86, vars: 7, consts: [[1, "footer"], [1, "canvas"], ["id", "AR_2", 1, "menu-website", "block"], [1, "column-name"], ["type", "menu", 1, "arrow-down"], [1, "arrow-down-box"], [1, "arrow-down-inner"], [1, "menu-site", "links"], [1, "goto", 3, "click"], ["routerLink", "/comments", 1, "goto"], ["routerLink", "/about", 1, "goto"], ["id", "AR_3", 1, "social-links", "block"], ["id", "text-vertical"], [1, "links-to-SM", "links"], [1, "goto"], ["href", "https://wa.me/79109457564?text=\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!+\u042F+\u043F\u043E+\u043F\u043E\u0432\u043E\u0434\u0443+", "target", "_blanck"], ["srcset", "assets/img/social-media/whatsapp.webp", "type", "image/webp"], ["src", "assets/img/social-media/whatsapp.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://t.me/joinchat/LrXuX1fdJIO9Oj5xEFH_mw", "target", "_blanck"], ["srcset", "assets/img/social-media/telegram.webp", "type", "image/webp"], ["src", "assets/img/social-media/telegram.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://vk.com/kompfoto", "target", "_blanck"], ["src", "assets/img/social-media/vk.svg", "alt", "", "width", "20px", "height", "20px"], ["href", "https://www.instagram.com/komp_tula/", "target", "_blanck"], ["srcset", "assets/img/social-media/instagram-sketched.webp", "type", "image/webp"], ["src", "assets/img/social-media/instagram-sketched.png", "alt", "", "width", "20px", "height", "20px"], ["href", "https://www.facebook.com/%D0%9A%D0%9E%D0%9C%D0%9F-100517064817264", "target", "_blanck"], ["src", "assets/img/social-media/facebook.png", "alt", "", "width", "20px", "height", "20px"], [1, "contacts", "block"], ["id", "left-shift"], [1, "text-info-plus", 3, "mouseenter", "mouseleave"], ["href", "tel:+7(953)970-01-42", 1, "link-plus", 3, "ngStyle"], ["id", "copyText", 1, "text-info-plus", 3, "mouseenter", "mouseleave"], ["id", "email-link", "ngxClipboard", "", 3, "ngStyle", "cbContent"], ["id", "adress", 1, "text-info-plus"], ["id", "adress-link", "href", "https://yandex.ru/maps/15/tula/?ll=37.611946%2C54.175169&mode=search&oid=1605727188&ol=biz&z=16", "target", "_blank", 1, "link-plus"], [1, "footer-2"], [1, "rules"], ["href", ""], [1, "author"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() { return ctx.toAnchor("welcome-start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() { return ctx.toAnchor("services"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_19_listener() { return ctx.toAnchor("contacts"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FooterComponent_Template_p_mouseenter_65_listener() { return ctx.visibleL = true; })("mouseleave", function FooterComponent_Template_p_mouseleave_65_listener() { return ctx.visibleL = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0422\u0435\u043B: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "+7(953)970-01-42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FooterComponent_Template_p_mouseenter_69_listener() { return ctx.visible = true; })("mouseleave", function FooterComponent_Template_p_mouseleave_69_listener() { return ctx.visible = false; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0410\u0432\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430: @NoLimit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.visibleL ? "underline" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.visible ? "underline" : null))("cbContent", "tom701@rambler.ru");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardDirective"]], styles: ["footer[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 10px 100px 0px;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .actived_slideDown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0px;\n  transition-duration: 200ms;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .actived_slideDown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  font-size: 21px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: calc(100% / 3);\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  padding-left: 20px;\n  margin-bottom: 10px;\n  position: relative;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #text-vertical[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  position: absolute;\n  top: 40px;\n  left: -120px;\n  white-space: nowrap;\n  transform-origin: right;\n  transform: rotate(-90deg);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 0.05em;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #26235f;\n  transition-duration: 200ms;\n  margin: 5px 0px;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #26235f;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.747);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.747);\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%] {\n  color: #26235f;\n  padding: 5px;\n  white-space: nowrap;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%]   .link-plus[_ngcontent-%COMP%] {\n  color: #26235f;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   .text-info-plus[_ngcontent-%COMP%]   #email-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   #adress[_ngcontent-%COMP%]:hover   #adress-link[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   #left-shift[_ngcontent-%COMP%]   #adress-link[_ngcontent-%COMP%]:hover   #adress-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\nfooter[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .column-name[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1em;\n  color: rgba(0, 0, 0, 0.8);\n  padding: 10px 0px;\n}\nfooter[_ngcontent-%COMP%]   .links-to-company-view.links.actived_slideDown[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .menu-site.links.actived_slideDown[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .links-to-SM.links.actived_slideDown[_ngcontent-%COMP%] {\n  display: none;\n  padding-right: 30px;\n  text-align: right;\n}\nfooter[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%] {\n  display: none;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  background-color: #353434;\n  padding: 15px 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #b6b5b5;\n}\nfooter.footer-2[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  color: #b6b5b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxQcm9ncmFtbWluZ1xcT3JkZXJzXFxLb21wXFxjb20ua29tcFxcZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NOO0FEQU07RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNFUjtBRENJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQU07RUFDRSxpQkFBQTtBQ0VSO0FEQU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NSO0FEQ007RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREFRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNFVjtBRERVO0VBQ0UsY0FBQTtBQ0daO0FERlk7RUFDRSwyQkFBQTtBQ0lkO0FERFU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0daO0FERVE7RUFPRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTlY7QURGVTtFQUNFLGNBQUE7QUNJWjtBREZVO0VBQ0UsZUFBQTtBQ0laO0FES1k7O0VBQ0UsMEJBQUE7QUNGZDtBRFFJO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ05OO0FEU0U7OztFQUdJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUE47QURTRTtFQUNFLGFBQUE7QUNQSjtBRFlFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVEo7QURVSTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FDUk47QURTTTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUFI7QURVSTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAuY2FudmFze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggICAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIC5hY3RpdmVkX3NsaWRlRG93biBsaXtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ibG9ja3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgID5oNHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICAjdGV4dC12ZXJ0aWNhbHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogLTEyMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAubGlua3N7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgICAgIC5nb3Rve1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMyNjIzNWY7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjYyMzVmO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjbGVmdC1zaGlmdHtcclxuICAgICAgICAudGV4dC1pbmZvLXBsdXN7XHJcbiAgICAgICAgICAubGluay1wbHVze1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2MjM1ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNlbWFpbC1saW5re1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjM1ZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhZHJlc3MsXHJcbiAgICAgICAgI2FkcmVzcy1saW5re1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgI2FkcmVzcy1saW5re1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sdW1uLW5hbWV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxpbmtzLXRvLWNvbXBhbnktdmlldy5saW5rcy5hY3RpdmVkX3NsaWRlRG93bixcclxuICAubWVudS1zaXRlLmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duLFxyXG4gIC5saW5rcy10by1TTS5saW5rcy5hY3RpdmVkX3NsaWRlRG93bntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5hcnJvdy1kb3due1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLy8gZm9vdGVyIDJcclxuZm9vdGVyLmZvb3Rlci0yIHtcclxuICAuY2FudmFze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTMsIDUyLCA1Mik7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC5ydWxlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiNiNmI1YjU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hdXRob3J7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgY29sb3I6I2I2YjViNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZm9vdGVyIC5jYW52YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHBhZGRpbmc6IDEwcHggMTAwcHggMHB4O1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5mb290ZXIgLmNhbnZhcyAuYWN0aXZlZF9zbGlkZURvd24gbGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xufVxuZm9vdGVyIC5jYW52YXMgLmFjdGl2ZWRfc2xpZGVEb3duIGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDMpO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayA+IGg0IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgI3RleHQtdmVydGljYWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTEyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAubGlua3Mge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgLmxpbmtzIC5nb3RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzI2MjM1ZjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAubGlua3MgLmdvdG8gYSB7XG4gIGNvbG9yOiAjMjYyMzVmO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrIC5saW5rcyAuZ290byBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrIC5saW5rcyAuZ290bzpob3ZlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcbn1cbmZvb3RlciAuY2FudmFzIC5ibG9jayAjbGVmdC1zaGlmdCAudGV4dC1pbmZvLXBsdXMge1xuICBjb2xvcjogIzI2MjM1ZjtcbiAgcGFkZGluZzogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0IC50ZXh0LWluZm8tcGx1cyAubGluay1wbHVzIHtcbiAgY29sb3I6ICMyNjIzNWY7XG59XG5mb290ZXIgLmNhbnZhcyAuYmxvY2sgI2xlZnQtc2hpZnQgLnRleHQtaW5mby1wbHVzICNlbWFpbC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0ICNhZHJlc3M6aG92ZXIgI2FkcmVzcy1saW5rLFxuZm9vdGVyIC5jYW52YXMgLmJsb2NrICNsZWZ0LXNoaWZ0ICNhZHJlc3MtbGluazpob3ZlciAjYWRyZXNzLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmZvb3RlciAuY2FudmFzIC5jb2x1bW4tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbmZvb3RlciAubGlua3MtdG8tY29tcGFueS12aWV3LmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duLFxuZm9vdGVyIC5tZW51LXNpdGUubGlua3MuYWN0aXZlZF9zbGlkZURvd24sXG5mb290ZXIgLmxpbmtzLXRvLVNNLmxpbmtzLmFjdGl2ZWRfc2xpZGVEb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5mb290ZXIgLmFycm93LWRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5mb290ZXIuZm9vdGVyLTIgLmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM0MzQ7XG4gIHBhZGRpbmc6IDE1cHggMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3Rlci5mb290ZXItMiAuY2FudmFzIC5ydWxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuZm9vdGVyLmZvb3Rlci0yIC5jYW52YXMgLnJ1bGVzIGEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICNiNmI1YjU7XG59XG5mb290ZXIuZm9vdGVyLTIgLmNhbnZhcyAuYXV0aG9yIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjYjZiNWI1O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/main-layout/main-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");




const _c0 = function () { return ["/comments"]; };
const _c1 = function () { return ["/about"]; };
class MainLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toAnchor(anchor) {
        if (this.router.url === '/home'
            || this.router.url === '/home#services'
            || this.router.url === '/home#contacts') {
            document.getElementById(anchor).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        else {
            this.router.navigate(['/home'], { fragment: anchor });
        }
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 43, vars: 4, consts: [["id", "start", 1, "top-line"], ["id", "link-logo", "routerLink", "/home"], ["src", "assets/img/logo-komp.svg", "alt", "logo-komp", 1, "logotype"], [1, "header_nav"], [3, "click"], [3, "routerLink"], ["type", "button", 1, "hamburger", "hamburger--spin"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "plate"], [1, "slideMenu"], ["id", ""], ["href", "", "id", "goto_contacts"], ["href", "", "id", "goto_commits"], ["href", ""], ["type", "button", 1, "slideUp"], [1, "slideUp-box"], [1, "slideUp-inner"], ["id", "main-layout"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_7_listener() { return ctx.toAnchor("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0423\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_10_listener() { return ctx.toAnchor("contacts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0442\u0437\u044B\u0432\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0423\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041E\u0442\u0437\u044B\u0432\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-height: 60px;\n  padding: 10px 0px;\n  \n  background-color: rgba(234, 234, 254, 0.75);\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 10;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  margin: 0px 50px 0px 100px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .logotype[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  max-width: 140px;\n  \n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%] {\n  transition-duration: 200ms;\n  margin-right: 50px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav.small[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n  padding: 10px;\n  transition-duration: 500ms;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition-duration: 500ms;\n  color: #403D7A;\n  \n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  list-style-type: none;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .header_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: 0.1em;\n  margin: 0px 15px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  padding: 10px 15px 10px 10px;\n  display: none;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.is-active[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  background-color: #403D7A;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  width: 40px;\n  height: 4px;\n  background-color: #403D7A;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, header[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: -10px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: -10px;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\nheader[_ngcontent-%COMP%]   div.top-line[_ngcontent-%COMP%]   .hamburger.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%] {\n  display: none;\n  background-color: #dfdfdf;\n  width: 100%;\n  z-index: 9;\n  position: fixed;\n  \n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   .slideMenu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: column nowrap;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n  letter-spacing: 0.1em;\n  line-height: 20px;\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\nheader[_ngcontent-%COMP%]   .plate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition-duration: 500ms;\n  color: #403D7A;\n}\n#main-layout[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1sYXlvdXQvRDpcXFByb2dyYW1taW5nXFxPcmRlcnNcXEtvbXBcXGNvbS5rb21wXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtYWluLWxheW91dFxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FKO0FEcUJJO0VBQ0UsMEJBQUE7QUNuQk47QURvQk07RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNsQlI7QURxQkk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FDbkJOO0FEb0JNO0VBQ0UsZUFBQTtBQ2xCUjtBRG9CTTtFQUNFLGFBQUE7QUNsQlI7QURvQk07RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNsQlI7QURtQlU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUNqQlo7QURvQlE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ2xCVjtBRG1CVTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ2pCWjtBRHNCSTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDcEJOO0FEcUJNO0VBQ0ksWUFBQTtBQ25CVjtBRHFCTTtFQUNFLFlBQUE7QUNuQlI7QURxQk07OztFQUdFLHlCQUFBO0FDbkJSO0FEcUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEcUJNO0VBQ0UsY0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ25CUjtBRHFCTTs7O0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNuQlI7QURxQk07RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ25CUjtBRHFCTTtFQUNFLFVBQUE7QUNuQlI7QURxQk07RUFDRSxhQUFBO0FDbkJSO0FEc0JRO0VBQ0UsMEJBQUE7RUFDQSxrRUFBQTtBQ3BCVjtBRHFCVTtFQUNFLHdEQUFBO0FDbkJaO0FEcUJVO0VBQ0UsNkZBQUE7QUNuQlo7QUR1QlU7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7QUNyQlo7QURzQlk7RUFDRSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0FDcEJkO0FEc0JZO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkZBQUE7QUNwQmQ7QUQ0QkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQTthQUFBO0FDekJKO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN6Qk47QUQyQkk7RUFDRSxnQkFBQTtBQ3pCTjtBRDJCSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN6Qk47QURrQ0U7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxTQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgZGl2LnRvcC1saW5le1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LDIzNCwyNTQsNzUlKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICAvLyAudXBkYXRlZF9maXJzdHtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNCwyMzQsMjU0LDY1JSk7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNTksIDE1OSwgMTkxLCA4NSUpO1xyXG4gICAgICAvLyB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgICAgLy8gcGFkZGluZzogMHB4O1xyXG4gICAgICAvLyAuaGVhZGVyX25hdntcclxuICAgICAgLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgICAgLy8gICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgIC8vICAgbGl7XHJcbiAgICAgIC8vICAgICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtczsgKi9cclxuICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC5sb2dvdHlwZXtcclxuICAgICAgLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgICAgLy8gICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAvLyB9XHJcbiAgICA+IGF7XHJcbiAgICAgIG1hcmdpbjogMHB4IDUwcHggMHB4IDEwMHB4O1xyXG4gICAgICAubG9nb3R5cGV7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgICAgICAvKiBtYXgtaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX25hdntcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgJi5zbWFsbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhhbWJ1cmdlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQwM0Q3QTtcclxuICAgICAgICAgICAgLyogY29sb3I6cmdiYSgxNDgsMTQ2LCAxODMsMTAwJSk7ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgbWFyZ2luOjBweCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy8gLS0tLS0tLS0tLS0gSEFNQlVSR0VSIC0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLmhhbWJ1cmdlciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7ICAvL2lubGluZS1ibG9ja1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIH1cclxuICAgICAgJi5pcy1hY3RpdmU6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgfVxyXG4gICAgICAuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsXHJcbiAgICAgIC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxyXG4gICAgICAuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzRDdBO1xyXG4gICAgICB9XHJcbiAgICAgIC5oYW1idXJnZXItYm94IHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oYW1idXJnZXItaW5uZXIsXHJcbiAgICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcclxuICAgICAgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDNEN0E7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgJi5oYW1idXJnZXItLXNwaW57XHJcbiAgICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcclxuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaXMtYWN0aXZle1xyXG4gICAgICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyAwLjEycyBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYXRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RmZGZkZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gNjdweCk7XHJcbiAgICB0b3A6NjdweDsgKi9cclxuICAgIC5zbGlkZU1lbnV7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgICBjb2xvcjogIzQwM0Q3QTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNtYWluLWxheW91dHtcclxuICAvLyByb3V0ZXItb3V0bGV0e1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIH1cclxuICBmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBib3R0b206IGF1dG87XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xyXG4vLyAgIC50b3AtbGluZSA+IGF7XHJcbi8vICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuLy8gICAgICAgLmhlYWRlcl9uYXZ7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuLy8gICAudG9wLWxpbmV7XHJcbi8vICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsMjM0LDI1NCw3NSUpO1xyXG4vLyAgICAgICA+IGF7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLmhlYWRlcl9uYXZ7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC5oZWFkZXJfbmF2IGxpe1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuLy8gICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbi8vICAgICAgICAgYXtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDo4MTJweCl7XHJcbi8vICAgLnRvcC1saW5lIC5oZWFkZXJfbmF2e1xyXG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XHJcbi8vICAgLnRvcC1saW5lIC5oZWFkZXJfbmF2e1xyXG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIH1cclxuLy8gQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2MTBweCl7XHJcbi8vICAgLnRvcC1saW5le1xyXG4vLyAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuLy8gICB9XHJcbi8vICAgLnRvcC1saW5lID4gYXtcclxuLy8gICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbi8vICAgfVxyXG4vLyBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjQyNXB4KXtcclxuLy8gICAudG9wLWxpbmV7XHJcbi8vICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuLy8gICB9XHJcbi8vICAgLnRvcC1saW5lID4gYSB7XHJcbi8vICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgIH1cclxuIiwiaGVhZGVyIGRpdi50b3AtbGluZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICAvKiBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMjM0LCAyNTQsIDAuNzUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lID4gYSB7XG4gIG1hcmdpbjogMHB4IDUwcHggMHB4IDEwMHB4O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSA+IGEgLmxvZ290eXBlIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhlYWRlcl9uYXYuc21hbGwge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IC5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGVhZGVyX25hdiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBjb2xvcjogIzQwM0Q3QTtcbiAgLyogY29sb3I6cmdiYSgxNDgsMTQ2LCAxODMsMTAwJSk7ICovXG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oZWFkZXJfbmF2IHVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGVhZGVyX25hdiB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbWFyZ2luOiAwcHggMTVweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlciB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgZmlsdGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyLmlzLWFjdGl2ZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlciAuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsXG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNEN0E7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1ib3gge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXIsXG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzRDdBO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCBoZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IC0xMHB4O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAtMTBweDtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlci5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG5oZWFkZXIgZGl2LnRvcC1saW5lIC5oYW1idXJnZXIuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbmhlYWRlciBkaXYudG9wLWxpbmUgLmhhbWJ1cmdlci5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xufVxuaGVhZGVyIGRpdi50b3AtbGluZSAuaGFtYnVyZ2VyLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG59XG5oZWFkZXIgLnBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSA2N3B4KTtcbiAgdG9wOjY3cHg7ICovXG59XG5oZWFkZXIgLnBsYXRlIC5zbGlkZU1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbmhlYWRlciAucGxhdGUgbGkge1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuaGVhZGVyIC5wbGF0ZSBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgY29sb3I6ICM0MDNEN0E7XG59XG5cbiNtYWluLWxheW91dCBmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/headers.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/headers.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersInterceptor", function() { return HeadersInterceptor; });
class HeadersInterceptor {
    intercept(req, next) {
        //  const cloned = req.clone({
        //    // headers: req.headers.append('Origin','http:/localhost:4200')
        //  })
        console.log('Interceptor:', req);
        return next.handle(req);
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //   urlAPI:'http://192.168.178.153/api'
    urlAPI: 'http://localhost:80/api'
    // urlServiceCard:'https://kompservice-web.firebaseio.com/service-card'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\Orders\Komp\com.komp\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map