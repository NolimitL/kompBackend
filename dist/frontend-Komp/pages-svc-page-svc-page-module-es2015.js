(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-svc-page-svc-page-module"],{

/***/ "./src/app/pages/svc-page/service-card/service-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/svc-page/service-card/service-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCardComponent", function() { return ServiceCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ServiceCardComponent_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r5.term, ": ", item_r5.price, " \u0440\u0443\u0431. ");
} }
function ServiceCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServiceCardComponent_div_2_li_6_Template, 2, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.serviceShowedComponent.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.serviceShowedComponent.main.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.serviceShowedComponent.main.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.serviceShowedComponent.main.nexttext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.serviceShowedComponent.about);
} }
function ServiceCardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0435...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/services", a1]; };
const _c1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function ServiceCardComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", card_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, card_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, card_r6.name == ctx_r3.paramsName ? "#403D7A" : "rgba(251, 251, 251, 0.97)", card_r6.name == ctx_r3.paramsName ? "rgba(251, 251, 251, 0.97)" : "#403D7A"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, card_r6.title));
} }
class ServiceCardComponent {
    constructor(router, //for back button
    actRoute) {
        this.router = router;
        this.actRoute = actRoute;
        this.paramsName = '';
        this.asideListCard = [];
        this.serviceInfo = [];
    }
    ngOnInit() {
        this.subActRoute = this.actRoute.data.subscribe(data => {
            this.asideListCard = data.asideList;
        });
        this.subParams = this.actRoute.params.subscribe((params) => {
            this.paramsName = params.name;
            this.subService = this.actRoute.data.subscribe(data => {
                this.serviceInfo = data.serviceInf;
                this.serviceShowedComponent = this.serviceInfo.find(point => point.name === this.paramsName);
            });
        });
    }
    ngAfterContentChecked() {
        this.serviceShowedComponent = this.serviceInfo.find(point => point.name == this.paramsName);
    }
    ngOnDestroy() {
        if (this.subParams) {
            this.subParams.unsubscribe();
        }
        if (this.subService) {
            this.subService.unsubscribe();
        }
        if (this.subActRoute) {
            this.subActRoute.unsubscribe();
        }
    }
}
ServiceCardComponent.ɵfac = function ServiceCardComponent_Factory(t) { return new (t || ServiceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ServiceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceCardComponent, selectors: [["app-service-card"]], decls: 8, vars: 3, consts: [[1, "canvas"], ["class", "information", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "sidebar"], ["class", "slip", 3, "routerLink", "id", 4, "ngFor", "ngForOf"], [1, "information"], [1, "heading"], ["id", "text-before"], ["id", "list-work"], ["class", "items", 4, "ngFor", "ngForOf"], ["id", "text-after"], [1, "about"], [1, "items"], [1, "slip", 3, "routerLink", "id"], [3, "ngStyle"]], template: function ServiceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServiceCardComponent_div_2_Template, 11, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceCardComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aside", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceCardComponent_li_7_Template, 4, 11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serviceShowedComponent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asideListCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["@charset \"UTF-8\";\n.canvas[_ngcontent-%COMP%] {\n  margin: 120px 0px 100px;\n  display: grid;\n  grid-template-columns: 10px 6fr 2fr 10px;\n  grid-template-rows: 30px 450px 30px;\n  -moz-column-gap: 2%;\n       column-gap: 2%;\n  color: #403D7A;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  background-color: rgba(251, 251, 251, 0.97);\n  border-radius: 5px;\n  padding: 1% 2%;\n  position: relative;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  margin: 0px 0px 10px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0px 0px 5px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-before[_ngcontent-%COMP%], .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-after[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 0.5rem;\n  letter-spacing: 0.06rem;\n  word-spacing: 0.2rem;\n  line-height: 1.15rem;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-after[_ngcontent-%COMP%] {\n  color: black;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  margin: 10px 0px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  margin: 0.1rem;\n  padding-left: 0px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  font-size: 20px;\n}\n.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  font-weight: 400;\n  letter-spacing: 0.05rem;\n  word-spacing: 0.2rem;\n  line-height: 1.15rem;\n  margin: 10px 0px 0px;\n  position: absolute;\n  bottom: 7%;\n  width: 96%;\n}\n.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 2;\n}\n.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  transition-duration: 300ms;\n  background-color: rgba(251, 251, 251, 0.97);\n  border-radius: 5px;\n  padding: 8px 10px;\n  color: #403D7A;\n}\n.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  transform: translateX(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ZjLXBhZ2Uvc2VydmljZS1jYXJkL3NlcnZpY2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3ZjLXBhZ2Uvc2VydmljZS1jYXJkL0Q6XFxQcm9ncmFtbWluZ1xcT3JkZXJzXFxLb21wXFxjb20ua29tcFxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxzdmMtcGFnZVxcc2VydmljZS1jYXJkXFxzZXJ2aWNlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO09BQUEsY0FBQTtFQUNBLGNBQUE7QURFRjtBQ0RFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FER0o7QUNGSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QURJTjtBQ0ZJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURJTjtBQ0ZJOztFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QURJTjtBQ0ZJO0VBQ0UsWUFBQTtBRElOO0FDRkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRElOO0FDSE07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0pRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURNVjtBQ0ZJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURJTjtBQ0RFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QURHSjtBQ0ZJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FESU47QUNITTtFQUNFLGVBQUE7QURLUjtBQ0pRO0VBQ0UsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FETVY7QUNMVTtFQUNFLDJCQUFBO0FET1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdmMtcGFnZS9zZXJ2aWNlLWNhcmQvc2VydmljZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhbnZhcyB7XG4gIG1hcmdpbjogMTIwcHggMHB4IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcHggNmZyIDJmciAxMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggNDUwcHggMzBweDtcbiAgY29sdW1uLWdhcDogMiU7XG4gIGNvbG9yOiAjNDAzRDdBO1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24ge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUxLCAyNTEsIDI1MSwgMC45Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMSUgMiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYW52YXMgLmluZm9ybWF0aW9uIC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbn1cbi5jYW52YXMgLmluZm9ybWF0aW9uIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gI3RleHQtYmVmb3JlLFxuLmNhbnZhcyAuaW5mb3JtYXRpb24gI3RleHQtYWZ0ZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMC41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNnJlbTtcbiAgd29yZC1zcGFjaW5nOiAwLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1cmVtO1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gI3RleHQtYWZ0ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2FudmFzIC5pbmZvcm1hdGlvbiAjbGlzdC13b3JrIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gI2xpc3Qtd29yayAuaXRlbXMge1xuICBtYXJnaW46IDAuMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uY2FudmFzIC5pbmZvcm1hdGlvbiAjbGlzdC13b3JrIC5pdGVtczo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNhbnZhcyAuaW5mb3JtYXRpb24gLmFib3V0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gIHdvcmQtc3BhY2luZzogMC4ycmVtO1xuICBsaW5lLWhlaWdodDogMS4xNXJlbTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgd2lkdGg6IDk2JTtcbn1cbi5jYW52YXMgLnNpZGViYXIge1xuICBncmlkLWNvbHVtbjogMztcbiAgZ3JpZC1yb3c6IDI7XG59XG4uY2FudmFzIC5zaWRlYmFyIHVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYW52YXMgLnNpZGViYXIgdWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FudmFzIC5zaWRlYmFyIHVsIGxpIGgzIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUxLCAyNTEsIDI1MSwgMC45Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGNvbG9yOiAjNDAzRDdBO1xufVxuLmNhbnZhcyAuc2lkZWJhciB1bCBsaSBoMzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbn0iLCIuY2FudmFze1xyXG4gIG1hcmdpbjogMTIwcHggMHB4IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IDZmciAyZnIgMTBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggNDUwcHggMzBweDtcclxuICBjb2x1bW4tZ2FwOiAyJTtcclxuICBjb2xvcjogIzQwM0Q3QTtcclxuICAuaW5mb3JtYXRpb257XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjk3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDElIDIlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgI3RleHQtYmVmb3JlLFxyXG4gICAgI3RleHQtYWZ0ZXJ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA2cmVtO1xyXG4gICAgICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XHJcbiAgICB9XHJcbiAgICAjdGV4dC1hZnRlcntcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgI2xpc3Qtd29ya3tcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAuaXRlbXN7XHJcbiAgICAgICAgbWFyZ2luOiAwLjFyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogXCJcXDIwMjJcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hYm91dHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbiAgICAgIHdvcmQtc3BhY2luZzogMC4ycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xNXJlbTtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA3JTtcclxuICAgICAgd2lkdGg6IDk2JTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNpZGViYXJ7XHJcbiAgICBncmlkLWNvbHVtbjogMztcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgdWx7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGxpe1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjk3KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM0MDNEN0E7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-card',
                templateUrl: './service-card.component.html',
                styleUrls: ['./service-card.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/svc-page/svc-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/svc-page/svc-page.module.ts ***!
  \***************************************************/
/*! exports provided: SVCPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVCPageModule", function() { return SVCPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _service_card_service_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-card/service-card.component */ "./src/app/pages/svc-page/service-card/service-card.component.ts");
/* harmony import */ var src_app_shared_resolvers_asidelist_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/resolvers/asidelist.resolver */ "./src/app/shared/resolvers/asidelist.resolver.ts");
/* harmony import */ var src_app_shared_resolvers_serviceinfo_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/resolvers/serviceinfo.resolver */ "./src/app/shared/resolvers/serviceinfo.resolver.ts");








const routes = [
    {
        path: '',
        component: _service_card_service_card_component__WEBPACK_IMPORTED_MODULE_3__["ServiceCardComponent"],
        resolve: {
            asideList: src_app_shared_resolvers_asidelist_resolver__WEBPACK_IMPORTED_MODULE_4__["AsideListResolver"],
            serviceInf: src_app_shared_resolvers_serviceinfo_resolver__WEBPACK_IMPORTED_MODULE_5__["ServiceInfoResolver"]
        }
    }
];
class SVCPageModule {
}
SVCPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SVCPageModule });
SVCPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SVCPageModule_Factory(t) { return new (t || SVCPageModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SVCPageModule, { declarations: [_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_3__["ServiceCardComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SVCPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_3__["ServiceCardComponent"]],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/resolvers/serviceinfo.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/resolvers/serviceinfo.resolver.ts ***!
  \**********************************************************/
/*! exports provided: ServiceInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoResolver", function() { return ServiceInfoResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/request.service */ "./src/app/shared/services/request.service.ts");



class ServiceInfoResolver {
    constructor(reqService) {
        this.reqService = reqService;
    }
    resolve(route, state) {
        return this.reqService.getServiceInfo();
    }
}
ServiceInfoResolver.ɵfac = function ServiceInfoResolver_Factory(t) { return new (t || ServiceInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
ServiceInfoResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceInfoResolver, factory: ServiceInfoResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceInfoResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-svc-page-svc-page-module-es2015.js.map