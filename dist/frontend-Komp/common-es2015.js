(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/resolvers/asidelist.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/resolvers/asidelist.resolver.ts ***!
  \********************************************************/
/*! exports provided: AsideListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideListResolver", function() { return AsideListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/request.service */ "./src/app/shared/services/request.service.ts");



class AsideListResolver {
    constructor(reqService) {
        this.reqService = reqService;
    }
    resolve(route, state) {
        if (this.reqService.getSvcPos.length == 0) {
            return this.reqService.getServiceView();
        }
        else {
            return this.reqService.getSvcPos;
        }
    }
}
AsideListResolver.ɵfac = function AsideListResolver_Factory(t) { return new (t || AsideListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"])); };
AsideListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsideListResolver, factory: AsideListResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/comments.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/comments.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CommentsService {
    constructor(http) {
        this.http = http;
        this.commentsArr = [];
        let time = new Date().getTime();
        const interval = 300000;
    }
    get comments() {
        return this.commentsArr;
    }
    getCommentsList() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAPI}/comments`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(arr => {
            arr.forEach(comment => comment.date = new Date(comment.date));
            this.commentsArr = arr;
            return arr;
        }));
    }
    postComment(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlAPI}/comments`, body);
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class RequestService {
    constructor(http) {
        this.http = http;
        this.serviceView = [];
    }
    get getSvcPos() {
        return this.serviceView;
    }
    getServicePosition(listCard) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/extra/position`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((position) => {
            listCard.forEach(card => {
                card.id = +position.pos[card.name];
            });
            this.serviceView = listCard.sort((a, b) => a.id - b.id);
            return this.serviceView;
        }));
    }
    getServiceView() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/extra/card-view`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((list) => {
            return this.getServicePosition(list);
        }));
    }
    getServiceInfo() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/extra/service-info`);
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map