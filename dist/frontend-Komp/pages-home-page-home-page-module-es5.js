function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"], {
  /***/
  "./src/app/pages/home-page/feedbacks/feedbacks.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/home-page/feedbacks/feedbacks.component.ts ***!
    \******************************************************************/

  /*! exports provided: FeedbacksComponent */

  /***/
  function srcAppPagesHomePageFeedbacksFeedbacksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacksComponent", function () {
      return FeedbacksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/comments.service */
    "./src/app/shared/services/comments.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FeedbacksComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, comment_r1.date, "MM/dd/yy", "ru"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.text, " ");
      }
    }

    var FeedbacksComponent = /*#__PURE__*/function () {
      function FeedbacksComponent(commentsService) {
        _classCallCheck(this, FeedbacksComponent);

        this.commentsService = commentsService;
        this.commentsList = [];
      }

      _createClass(FeedbacksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.commentsService.getCommentsList().subscribe(function (observer) {
            _this.commentsList = observer;
            _this.commentsList = _this.commentsList.slice(0, 4);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe;
          }
        }
      }]);

      return FeedbacksComponent;
    }();

    FeedbacksComponent.ɵfac = function FeedbacksComponent_Factory(t) {
      return new (t || FeedbacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]));
    };

    FeedbacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbacksComponent,
      selectors: [["app-feedbacks"]],
      decls: 12,
      vars: 1,
      consts: [[1, "comments"], ["id", "commits", 1, "canvas"], [1, "block"], ["class", "comment", 4, "ngFor", "ngForOf"], ["routerLink", "/comments", 1, "btn"], ["routerLink", "/comments/add-feedback", 1, "btn", "r"], [1, "comment"], ["id", "Name-user"], ["id", "date"], ["id", "text-user"]],
      template: function FeedbacksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0442\u0437\u044B\u0432\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedbacksComponent_div_5_Template, 8, 7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u0437\u044B\u0432\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentsList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 40px;\n  letter-spacing: 0.1em;\n  margin: 80px 0px;\n  padding-top: 15px;\n  padding-bottom: 60px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  font-weight: 600;\n  line-height: 36px;\n  letter-spacing: 0.1em;\n  color: #403D7A;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: baseline;\n  justify-content: center;\n  padding: 15px 0px 0px;\n  max-width: calc(100% - 100px);\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  background-color: rgba(247, 247, 247, 0.97);\n  border-radius: 8px;\n  max-height: 180px;\n  margin: 10px 10px 15px;\n  padding: 1rem 1.25rem;\n  display: grid;\n  row-gap: 0.6rem;\n  align-items: start;\n  transition-duration: 200ms;\n  box-shadow: 0 0 10px rgba(179, 179, 179, 0.5);\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   #date[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: span 1;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: normal;\n  justify-self: right;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   #Name-user[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: span 1;\n  text-align: start;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   #text-user[_ngcontent-%COMP%] {\n  grid-row: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 25px;\n  letter-spacing: 0.08em;\n  border-radius: 5px;\n  max-width: 100%;\n  max-height: calc(180px - 1.85rem);\n  overflow: auto;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  transform: scale(0.95);\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  grid-row: 3;\n  justify-self: right;\n  margin-right: 10px;\n  transition-duration: 200ms;\n  cursor: pointer;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .btn.r[_ngcontent-%COMP%] {\n  justify-self: left;\n  margin-left: 10px;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.comments[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .neumorphism[_ngcontent-%COMP%] {\n  background-color: rgba(247, 247, 247, 0.97);\n  box-shadow: 8px 5px 5px rgba(148, 146, 183, 0.75), -5px -5px 8px rgba(234, 234, 254, 0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2ZlZWRiYWNrcy9EOlxcUHJvZ3JhbW1pbmdcXE9yZGVyc1xcS29tcFxcY29tLmtvbXBcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlXFxmZWVkYmFja3NcXGZlZWRiYWNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2ZlZWRiYWNrcy9mZWVkYmFja3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDTjtBRENJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNDTjtBREFNO0VBQ0csbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkNBQUE7QUNFVDtBRERRO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0dYO0FERFE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dWO0FERFE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFVjtBRENNO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtBQ0NSO0FEQ007RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBTUEsZUFBQTtBQ0pSO0FEQVE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDRVY7QURDUTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0NWO0FER0k7RUFDRSwyQ0FBQTtFQUNBLDBGQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvZmVlZGJhY2tzL2ZlZWRiYWNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50cyB7XHJcbiAgLmNhbnZhc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBtYXJnaW46IDgwcHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBjb2xvcjogIzQwM0Q3QTtcclxuICAgIH1cclxuICAgIC5ibG9ja3tcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAuY29tbWVudHtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOTcpO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxNXB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XHJcbiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgIHJvdy1nYXA6IDAuNnJlbTtcclxuICAgICAgICAgYWxpZ24taXRlbXM6c3RhcnQ7XHJcbiAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNSk7XHJcbiAgICAgICAgI2RhdGV7XHJcbiAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgICAgZ3JpZC1yb3c6IHNwYW4gMTtcclxuICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNOYW1lLXVzZXJ7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgICAgICAgIGdyaWQtcm93OiBzcGFuIDE7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RleHQtdXNlcntcclxuICAgICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNSkgc29saWQgMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxODBweCAtIDEuODVyZW0pO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5idG46aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgfVxyXG4gICAgICAuYnRue1xyXG4gICAgICAgIGdyaWQtcm93OiAzO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG5cclxuICAgICAgICAmLnJ7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXVtb3JwaGlzbXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOTcpO1xyXG4gICAgICBib3gtc2hhZG93OiA4cHggNXB4IDVweCByZ2JhKDE0OCwxNDYsIDE4MywgNzUlKSwgLTVweCAtNXB4IDhweCByZ2JhKDIzNCwyMzQsMjU0LDk1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbi8vICAgbWFyZ2luLXRvcDogNDBweDtcclxuLy8gfVxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAuY29udGFjdC1mb3Jte1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyAzKTtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbi8vIH1cclxuLy8gLmNvbW1lbnRzIC5jYW52YXMgLmlucHV0LWNvbW1lbnQgLmNvbnRhY3QtZm9ybSAuc3Vie1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbi8vICAgcGFkZGluZzogMjBweDtcclxuLy8gfVxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAuY29udGFjdC1mb3JtIC5mb2N1c2Vke1xyXG4vLyAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuLy8gICBib3JkZXI6IDBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgLyogYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDVweCByZ2JhKDE0OCwxNDYsIDE4MywgNDUlKSwgaW5zZXQgNXB4IDVweCAxMHB4IHJnYmEoMjM0LDIzNCwyNTQsNzAlKTsgKi9cclxuLy8gICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggNXB4IHJnYmEoMjE0LCAyMTEsIDI1MywgNzAlKSwgaW5zZXQgNXB4IDVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzclKTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuLy8gfVxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAuY29udGFjdC1mb3JtICNwb3N0LWVtYWlse1xyXG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuLy8gfVxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAuY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbi8vICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgIGJvcmRlcjpub25lO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4vLyAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbi8vIH1cclxuLy8gLmNvbW1lbnRzIC5jYW52YXMgLmlucHV0LWNvbW1lbnQgLmNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVye1xyXG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNDgsMTQ2LCAxODMsOTUlKTtcclxuLy8gICBib3gtc2hhZG93OiBpbnNldCA4cHggNXB4IDVweCByZ2JhKDE0OCwxNDYsIDE4MywgNzUlKSwgaW5zZXQgLTVweCAtNXB4IDhweCByZ2JhKDIzNCwyMzQsMjU0LDk1JSk7XHJcbi8vIH1cclxuLy8gLmNvbW1lbnRzIC5jYW52YXMgLmlucHV0LWNvbW1lbnQgLnRleHQtaW57XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWJhc2lzOiBjYWxjKDE1MCUgLyAzKTtcclxuLy8gICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbi8vICAgbWluLWhlaWdodDogMTAwJTtcclxuLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5jb21tZW50cyAuY2FudmFzIC5pbnB1dC1jb21tZW50ICN0ZXh0LWluLTJ7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAudGV4dC1pbiAudGV4dC1vZi1jb21tZW50c3tcclxuLy8gICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEzNXB4O1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4vLyAgIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCA1cHggcmdiYSgyMTQsIDIxMSwgMjUzLCA3MCUpLCBpbnNldCA1cHggNXB4IDEwcHggcmdiYSgyNDMsIDI0MywgMjQzLCAwLjc3KTtcclxuLy8gICBib3JkZXI6IDBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOjVweDtcclxuLy8gICByZXNpemU6IHZlcnRpY2FsO1xyXG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4vLyB9XHJcbi8vIC5jb21tZW50cyAuY2FudmFzIC5pbnB1dC1jb21tZW50IC5mb2N1c2VkOmZvY3VzLFxyXG4vLyAuY29tbWVudHMgLmNhbnZhcyAuaW5wdXQtY29tbWVudCAuc3ViIC5mb2N1c2VkOmZvY3Vze1xyXG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4vLyAgIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCAxMHB4IHJnYmEoMTk4LCAxOTcsIDIxOSwgMC40NSksIGluc2V0IDJweCAycHggMTBweCByZ2JhKDIzNCwyMzQsMjU0LDcwJSk7O1xyXG4vLyB9XHJcbiIsIi5jb21tZW50cyAuY2FudmFzIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIG1hcmdpbjogODBweCAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb21tZW50cyAuY2FudmFzIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiAjNDAzRDdBO1xufVxuLmNvbW1lbnRzIC5jYW52YXMgLmJsb2NrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuLmNvbW1lbnRzIC5jYW52YXMgLmJsb2NrIC5jb21tZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NywgMjQ3LCAwLjk3KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTVweDtcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiAwLjZyZW07XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTc5LCAxNzksIDE3OSwgMC41KTtcbn1cbi5jb21tZW50cyAuY2FudmFzIC5ibG9jayAuY29tbWVudCAjZGF0ZSB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogc3BhbiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG4uY29tbWVudHMgLmNhbnZhcyAuYmxvY2sgLmNvbW1lbnQgI05hbWUtdXNlciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogc3BhbiAxO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5jb21tZW50cyAuY2FudmFzIC5ibG9jayAuY29tbWVudCAjdGV4dC11c2VyIHtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDE4MHB4IC0gMS44NXJlbSk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbW1lbnRzIC5jYW52YXMgLmJsb2NrIGJ1dHRvbi5idG46aG92ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi5jb21tZW50cyAuY2FudmFzIC5ibG9jayAuYnRuIHtcbiAgZ3JpZC1yb3c6IDM7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21tZW50cyAuY2FudmFzIC5ibG9jayAuYnRuLnIge1xuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbW1lbnRzIC5jYW52YXMgLmJsb2NrIC5idG4gaDQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY29tbWVudHMgLmNhbnZhcyAubmV1bW9ycGhpc20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOTcpO1xuICBib3gtc2hhZG93OiA4cHggNXB4IDVweCByZ2JhKDE0OCwgMTQ2LCAxODMsIDAuNzUpLCAtNXB4IC01cHggOHB4IHJnYmEoMjM0LCAyMzQsIDI1NCwgMC45NSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedbacks',
          templateUrl: './feedbacks.component.html',
          styleUrls: ['./feedbacks.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/home-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/home-page/home-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/pages/home-page/info/info.component.ts");
    /* harmony import */


    var _service_view_service_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service-view/service-view.component */
    "./src/app/pages/home-page/service-view/service-view.component.ts");
    /* harmony import */


    var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feedbacks/feedbacks.component */
    "./src/app/pages/home-page/feedbacks/feedbacks.component.ts");
    /* harmony import */


    var src_app_shared_directives_hover_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/directives/hover.directive */
    "./src/app/shared/directives/hover.directive.ts");
    /* harmony import */


    var src_app_shared_directives_flur_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/directives/flur.directive */
    "./src/app/shared/directives/flur.directive.ts");

    var routes = [{
      path: '',
      component: _service_view_service_view_component__WEBPACK_IMPORTED_MODULE_6__["ServiceViewComponent"]
    }];

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomePageModule
    });
    HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomePageModule_Factory(t) {
        return new (t || HomePageModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
        declarations: [_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _service_view_service_view_component__WEBPACK_IMPORTED_MODULE_6__["ServiceViewComponent"], _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_7__["FeedbacksComponent"], src_app_shared_directives_flur_directive__WEBPACK_IMPORTED_MODULE_9__["FlurDirective"], src_app_shared_directives_hover_directive__WEBPACK_IMPORTED_MODULE_8__["HoverDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _service_view_service_view_component__WEBPACK_IMPORTED_MODULE_6__["ServiceViewComponent"], _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_7__["FeedbacksComponent"], src_app_shared_directives_flur_directive__WEBPACK_IMPORTED_MODULE_9__["FlurDirective"], src_app_shared_directives_hover_directive__WEBPACK_IMPORTED_MODULE_8__["HoverDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/info/info.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/info/info.component.ts ***!
    \********************************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppPagesHomePageInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_directives_flur_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/directives/flur.directive */
    "./src/app/shared/directives/flur.directive.ts");
    /* harmony import */


    var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../feedbacks/feedbacks.component */
    "./src/app/pages/home-page/feedbacks/feedbacks.component.ts");

    function InfoComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        textDecoration: a0
      };
    };

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.visible = false;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 26,
      vars: 5,
      consts: [["id", "contacts", 1, "about"], [1, "canvas"], [1, "information", "neumorphism"], [1, "adress"], ["href", "https://yandex.ru/maps/15/tula/?ll=37.611946%2C54.175169&mode=search&oid=1605727188&ol=biz&z=16", "target", "_blank"], ["id", "copyText", 3, "mouseenter", "mouseleave"], ["ngxClipboard", "", 3, "ngStyle", "cbContent"], [4, "appFlur"], [1, "worktime"], [1, "timetable"], [1, "map"], ["src", "https://yandex.ru/map-widget/v1/?um=constructor%3A1f1181bc71643742c2715ab0d262414242466efa4386cfac03ce0b03716e9ffc&source=constructor", "width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0"], ["id", "copy-clipboard", "src", "assets/img/copy-clipboard2.svg"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0410\u0434\u0440\u0435\u0441:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0433. \u0422\u0443\u043B\u0430 \u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430, \u0434.97");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0422\u0435\u043B: +7 (953) 970-01-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function InfoComponent_Template_p_mouseenter_11_listener() {
            return ctx.visible = true;
          })("mouseleave", function InfoComponent_Template_p_mouseleave_11_listener() {
            return ctx.visible = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "tom701@rambler.ru ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InfoComponent_span_15_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0411\u0443\u0434\u043D\u0438\u0435 \u0434\u043D\u0438: 10.00 - 18.00 \u0431\u0435\u0437 \u043E\u0431\u0435\u0434\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435: \u0441\u0443\u0431\u0431\u043E\u0442\u0430, \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-feedbacks");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.visible ? "underline" : null))("cbContent", "tom701@rambler.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appFlur", ctx.visible);
        }
      },
      directives: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], src_app_shared_directives_flur_directive__WEBPACK_IMPORTED_MODULE_3__["FlurDirective"], _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__["FeedbacksComponent"]],
      styles: [".about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 29px;\n  letter-spacing: 0.1em;\n  text-align: center;\n  \n  background-color: rgba(247, 247, 247, 0.97);\n  border-radius: 15px;\n  \n  border-radius: 15px;\n  margin: 0px 70px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .worktime[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .worktime[_ngcontent-%COMP%]   .timetable[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: calc(100% + 1px);\n  text-decoration: underline;\n  transition-duration: 200ms;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition-duration: 200ms;\n  color: #403D7A;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   #copyText[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.about[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 450px;\n  background-color: #cfcfcf;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2luZm8vRDpcXFByb2dyYW1taW5nXFxPcmRlcnNcXEtvbXBcXGNvbS5rb21wXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGhvbWUtcGFnZVxcaW5mb1xcaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FEQ0k7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNBTjtBRENNOztFQUVFLGVBQUE7QUNDUjtBRENNO0VBQ0UsZ0JBQUE7QUNDUjtBREVRO0VBQ0UseUJBQUE7QUNBVjtBREVRO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDQVY7QURDVTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERVE7RUFDRSxlQUFBO0FDQVY7QURJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgLmNhbnZhc3tcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyAqL1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxZGVnLCByZ2IoMjI0LCAyMjQsIDIyNCw3MCUpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEwMCUpIDgwJSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDcsIDI0NywgMjQ3LCAwLjk3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgLyogYm94LXNoYWRvdzogOHB4IDVweCAxMHB4IHJnYmEoMTQ4LDE0NiwgMTgzLDczJSksIC01cHggLTVweCAxMHB4IHJnYmEoMjM0LDIzNCwyNTQsMTAwJSk7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgbWFyZ2luOiAwcHggNzBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6YmFzZWxpbmU7XHJcbiAgICAgIC5hZHJlc3MsXHJcbiAgICAgIC53b3JrdGltZXtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLndvcmt0aW1lIC50aW1ldGFibGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICAuYWRyZXNze1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMDAlICsgMXB4KTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgICAgICAgY29sb3I6IzQwM0Q3QTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2NvcHlUZXh0e1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2NmY2ZjZjtcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmFib3V0IC5jYW52YXMge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4uYWJvdXQgLmNhbnZhcyAuaW5mb3JtYXRpb24ge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOTcpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAvKiBib3gtc2hhZG93OiA4cHggNXB4IDEwcHggcmdiYSgxNDgsMTQ2LCAxODMsNzMlKSwgLTVweCAtNXB4IDEwcHggcmdiYSgyMzQsMjM0LDI1NCwxMDAlKTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAwcHggNzBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmFib3V0IC5jYW52YXMgLmluZm9ybWF0aW9uIC5hZHJlc3MsXG4uYWJvdXQgLmNhbnZhcyAuaW5mb3JtYXRpb24gLndvcmt0aW1lIHtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuLmFib3V0IC5jYW52YXMgLmluZm9ybWF0aW9uIC53b3JrdGltZSAudGltZXRhYmxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hYm91dCAuY2FudmFzIC5pbmZvcm1hdGlvbiAuYWRyZXNzIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5hYm91dCAuY2FudmFzIC5pbmZvcm1hdGlvbiAuYWRyZXNzIGEge1xuICBmb250LXNpemU6IGNhbGMoMTAwJSArIDFweCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbn1cbi5hYm91dCAuY2FudmFzIC5pbmZvcm1hdGlvbiAuYWRyZXNzIGE6aG92ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgY29sb3I6ICM0MDNEN0E7XG59XG4uYWJvdXQgLmNhbnZhcyAuaW5mb3JtYXRpb24gLmFkcmVzcyAjY29weVRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWJvdXQgLmNhbnZhcyAubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmNmY2Y7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/service-view/service-view.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/home-page/service-view/service-view.component.ts ***!
    \************************************************************************/

  /*! exports provided: ServiceViewComponent */

  /***/
  function srcAppPagesHomePageServiceViewServiceViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceViewComponent", function () {
      return ServiceViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/request.service */
    "./src/app/shared/services/request.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../info/info.component */
    "./src/app/pages/home-page/info/info.component.ts");
    /* harmony import */


    var src_app_shared_directives_hover_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/directives/hover.directive */
    "./src/app/shared/directives/hover.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/services", a1];
    };

    function ServiceViewComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ServiceViewComponent_li_5_Template_li_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.hover = !ctx_r3.hover;
        })("mouseleave", function ServiceViewComponent_li_5_Template_li_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.hover = !ctx_r5.hover;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hoveredOn", ctx_r0.hover)("hoveredOff", !ctx_r0.hover);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", service_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, service_r1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", service_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", service_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
      }
    }

    var ServiceViewComponent = /*#__PURE__*/function () {
      function ServiceViewComponent(reqService) {
        _classCallCheck(this, ServiceViewComponent);

        this.reqService = reqService;
        this.hover = false;
      }

      _createClass(ServiceViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.reqService.getServiceView().subscribe(function (listOfService) {
            _this2.services = listOfService;
          });
        }
      }]);

      return ServiceViewComponent;
    }();

    ServiceViewComponent.ɵfac = function ServiceViewComponent_Factory(t) {
      return new (t || ServiceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]));
    };

    ServiceViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceViewComponent,
      selectors: [["app-service-view"]],
      decls: 7,
      vars: 1,
      consts: [[1, "all-services"], [1, "canvas"], ["id", "services", 1, "wrapper"], [1, "services"], [1, "list"], ["class", "slip", "appHover", "", 3, "id", "hoveredOn", "hoveredOff", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["appHover", "", 1, "slip", 3, "id", "mouseenter", "mouseleave"], [3, "routerLink"], [1, "images", 3, "src", "alt"], [1, "text-in"]],
      template: function ServiceViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ServiceViewComponent_li_5_Template, 5, 11, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-info");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], src_app_shared_directives_hover_directive__WEBPACK_IMPORTED_MODULE_4__["HoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  padding: 45px 0px;\n  position: relative;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: auto 100px;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  outline: none;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-flow: row wrap;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 205px;\n  background-color: rgba(251, 251, 251, 0.97);\n  border-radius: 15px;\n  margin: 10px 25px 10px 25px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transition-duration: 300ms;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip.hoveredOn[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip.hoveredOn.hovered-in[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.97);\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip.hoveredOff[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.97);\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip.hoveredOff.hovered-in[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.97);\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  line-height: 26px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  height: inherit;\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  max-width: 55%;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text-in[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .triangle-left[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 345px;\n  right: 40px;\n  transition-duration: 300ms;\n}\n.all-services[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]   .triangle-left[_ngcontent-%COMP%]:hover {\n  transition-duration: 400ms;\n  transition-timing-function: ease-out;\n  transform: scale(0.95);\n  filter: opacity(85%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL3NlcnZpY2Utdmlldy9EOlxcUHJvZ3JhbW1pbmdcXE9yZGVyc1xcS29tcFxcY29tLmtvbXBcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlXFxzZXJ2aWNlLXZpZXdcXHNlcnZpY2Utdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL3NlcnZpY2Utdmlldy9zZXJ2aWNlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURESTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0dOO0FEREk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ0lSO0FESFE7RUFDRSwwQ0FBQTtBQ0tWO0FESlU7RUFDRSwyQ0FBQTtBQ01aO0FESFE7RUFDRSwyQ0FBQTtBQ0tWO0FESlU7RUFDRSwyQ0FBQTtBQ01aO0FESFE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNLVjtBREpVO0VBQ0UsY0FBQTtBQ01aO0FESlU7RUFDRSxjQUFBO0FDTVo7QURDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDQ0o7QURBSTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2Uvc2VydmljZS12aWV3L3NlcnZpY2Utdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtc2VydmljZXMgLmNhbnZhc3tcclxuICBwYWRkaW5nOiA0NXB4IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLndyYXBwZXJ7XHJcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XHJcbiAgICBhOmFjdGl2ZXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmxpc3R7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgIC5zbGlwe1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTEsIDI1MSwgMjUxLCAwLjk3KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAyNXB4IDEwcHggMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb24gOiAzMDBtcztcclxuICAgICAgICAmLmhvdmVyZWRPbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgICYuaG92ZXJlZC1pbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5ob3ZlcmVkT2Zme1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcclxuICAgICAgICAgICYuaG92ZXJlZC1pbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgLmltYWdlc3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1pbntcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJpYW5nbGUtbGVmdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzQ1cHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XHJcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgZmlsdGVyOiBvcGFjaXR5KDg1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hbGwtc2VydmljZXMgLmNhbnZhcyB7XG4gIHBhZGRpbmc6IDQ1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIge1xuICBtYXJnaW46IGF1dG8gMTAwcHg7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgLmxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLmFsbC1zZXJ2aWNlcyAuY2FudmFzIC53cmFwcGVyIC5saXN0IC5zbGlwIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuOTcpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDEwcHggMjVweCAxMHB4IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xufVxuLmFsbC1zZXJ2aWNlcyAuY2FudmFzIC53cmFwcGVyIC5saXN0IC5zbGlwLmhvdmVyZWRPbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5hbGwtc2VydmljZXMgLmNhbnZhcyAud3JhcHBlciAubGlzdCAuc2xpcC5ob3ZlcmVkT24uaG92ZXJlZC1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgLmxpc3QgLnNsaXAuaG92ZXJlZE9mZiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgLmxpc3QgLnNsaXAuaG92ZXJlZE9mZi5ob3ZlcmVkLWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcbn1cbi5hbGwtc2VydmljZXMgLmNhbnZhcyAud3JhcHBlciAubGlzdCAuc2xpcCBhIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgLmxpc3QgLnNsaXAgYSAuaW1hZ2VzIHtcbiAgbWF4LXdpZHRoOiA1NSU7XG59XG4uYWxsLXNlcnZpY2VzIC5jYW52YXMgLndyYXBwZXIgLmxpc3QgLnNsaXAgYSAudGV4dC1pbiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmFsbC1zZXJ2aWNlcyAuY2FudmFzIC50cmlhbmdsZS1sZWZ0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzQ1cHg7XG4gIHJpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbn1cbi5hbGwtc2VydmljZXMgLmNhbnZhcyAudHJpYW5nbGUtbGVmdDpob3ZlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIGZpbHRlcjogb3BhY2l0eSg4NSUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service-view',
          templateUrl: './service-view.component.html',
          styleUrls: ['./service-view.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/flur.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/directives/flur.directive.ts ***!
    \*****************************************************/

  /*! exports provided: FlurDirective */

  /***/
  function srcAppSharedDirectivesFlurDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlurDirective", function () {
      return FlurDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FlurDirective = /*#__PURE__*/function () {
      function FlurDirective(templateRef, viewContainer) {
        _classCallCheck(this, FlurDirective);

        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
      }

      _createClass(FlurDirective, [{
        key: "flur",
        set: function set(toggle) {
          if (toggle) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      }]);

      return FlurDirective;
    }();

    FlurDirective.ɵfac = function FlurDirective_Factory(t) {
      return new (t || FlurDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    FlurDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlurDirective,
      selectors: [["", "appFlur", ""]],
      inputs: {
        flur: ["appFlur", "flur"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlurDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appFlur]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        flur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['appFlur']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/hover.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/directives/hover.directive.ts ***!
    \******************************************************/

  /*! exports provided: HoverDirective */

  /***/
  function srcAppSharedDirectivesHoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverDirective", function () {
      return HoverDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HoverDirective = /*#__PURE__*/function () {
      // @HostBinding('style.backgroundColor') backColor = null
      function HoverDirective(el, rend) {
        _classCallCheck(this, HoverDirective);

        this.el = el;
        this.rend = rend;
        this.transform = null;
      }

      _createClass(HoverDirective, [{
        key: "onEnter",
        value: function onEnter() {
          this.transform = 'scale(1.075)'; // this.rend.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(255, 255, 255, 0.97)!')

          this.rend.addClass(this.el.nativeElement, 'hovered-in');
        }
      }, {
        key: "onLeave",
        value: function onLeave() {
          this.transform = 'scale(1)';
          this.rend.removeClass(this.el.nativeElement, 'hovered-in'); // this.rend.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(255, 255, 255, 0.97)')
        }
      }]);

      return HoverDirective;
    }();

    HoverDirective.ɵfac = function HoverDirective_Factory(t) {
      return new (t || HoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    HoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HoverDirective,
      selectors: [["", "appHover", ""]],
      hostVars: 2,
      hostBindings: function HoverDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HoverDirective_mouseenter_HostBindingHandler() {
            return ctx.onEnter();
          })("mouseleave", function HoverDirective_mouseleave_HostBindingHandler() {
            return ctx.onLeave();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.transform);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appHover]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.transform']
        }],
        onEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-page-home-page-module-es5.js.map