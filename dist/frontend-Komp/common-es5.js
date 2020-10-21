function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/resolvers/asidelist.resolver.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/resolvers/asidelist.resolver.ts ***!
    \********************************************************/

  /*! exports provided: AsideListResolver */

  /***/
  function srcAppSharedResolversAsidelistResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideListResolver", function () {
      return AsideListResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/request.service */
    "./src/app/shared/services/request.service.ts");

    var AsideListResolver = /*#__PURE__*/function () {
      function AsideListResolver(reqService) {
        _classCallCheck(this, AsideListResolver);

        this.reqService = reqService;
      }

      _createClass(AsideListResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          if (this.reqService.getSvcPos.length == 0) {
            return this.reqService.getServiceView();
          } else {
            return this.reqService.getSvcPos;
          }
        }
      }]);

      return AsideListResolver;
    }();

    AsideListResolver.ɵfac = function AsideListResolver_Factory(t) {
      return new (t || AsideListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]));
    };

    AsideListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AsideListResolver,
      factory: AsideListResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
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
  "./src/app/shared/services/comments.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/comments.service.ts ***!
    \*****************************************************/

  /*! exports provided: CommentsService */

  /***/
  function srcAppSharedServicesCommentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
      return CommentsService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CommentsService = /*#__PURE__*/function () {
      function CommentsService(http) {
        _classCallCheck(this, CommentsService);

        this.http = http;
        this.commentsArr = [];
        var time = new Date().getTime();
        var interval = 300000;
      }

      _createClass(CommentsService, [{
        key: "getCommentsList",
        value: function getCommentsList() {
          var _this = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAPI, "/comments")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (arr) {
            arr.forEach(function (comment) {
              return comment.date = new Date(comment.date);
            });
            _this.commentsArr = arr;
            return arr;
          }));
        }
      }, {
        key: "postComment",
        value: function postComment(body) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAPI, "/comments"), body);
        }
      }, {
        key: "comments",
        get: function get() {
          return this.commentsArr;
        }
      }]);

      return CommentsService;
    }();

    CommentsService.ɵfac = function CommentsService_Factory(t) {
      return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CommentsService,
      factory: CommentsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/request.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/request.service.ts ***!
    \****************************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppSharedServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RequestService = /*#__PURE__*/function () {
      function RequestService(http) {
        _classCallCheck(this, RequestService);

        this.http = http;
        this.serviceView = [];
      }

      _createClass(RequestService, [{
        key: "getServicePosition",
        value: function getServicePosition(listCard) {
          var _this2 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/extra/position")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (position) {
            listCard.forEach(function (card) {
              card.id = +position.pos[card.name];
            });
            _this2.serviceView = listCard.sort(function (a, b) {
              return a.id - b.id;
            });
            return _this2.serviceView;
          }));
        }
      }, {
        key: "getServiceView",
        value: function getServiceView() {
          var _this3 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/extra/card-view")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (list) {
            return _this3.getServicePosition(list);
          }));
        }
      }, {
        key: "getServiceInfo",
        value: function getServiceInfo() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/extra/service-info"));
        }
      }, {
        key: "getSvcPos",
        get: function get() {
          return this.serviceView;
        }
      }]);

      return RequestService;
    }();

    RequestService.ɵfac = function RequestService_Factory(t) {
      return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestService,
      factory: RequestService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map