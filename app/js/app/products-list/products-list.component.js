"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_service_1 = require("./http.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
//import { filter } from "lodash";
var ProductsListComponent = (function () {
    function ProductsListComponent(httpService, activateRoute, router) {
        this.httpService = httpService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.numOfColumn = 3;
        this.allProducts = {};
        this.products = [];
        this.productsFiles = {
            "women": "products200-women.json",
            "men": "products200-men.json"
        };
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadProducts();
        this.router.events.subscribe(function () {
            var newGender = _this.activateRoute.snapshot.params["gender"];
            _this.products = _this.allProducts[newGender];
            var params = _this.activateRoute.snapshot.queryParams;
            if (Object.keys(params).length) {
                _this.applyUrlFilter(params);
            }
        });
        this.parentSubject.subscribe(function (event) {
            _this.applyFilter(event);
        });
    };
    ProductsListComponent.prototype.reloadProducts = function () {
        var _this = this;
        var _loop_1 = function (gender) {
            if (this_1.productsFiles.hasOwnProperty(gender)) {
                var file = this_1.productsFiles[gender];
                this_1.allProducts[gender] = [];
                this_1.httpService.getProducts(file)
                    .subscribe(function (data) {
                    _this.allProducts[gender] = data;
                    _this.products = _this.allProducts[_this.activateRoute
                        .snapshot.params['gender']];
                    var params = _this.activateRoute.snapshot.queryParams;
                    if (Object.keys(params).length) {
                        _this.applyUrlFilter(params);
                    }
                });
            }
        };
        var this_1 = this;
        //Using when need to load data from 2 files
        for (var gender in this.productsFiles) {
            _loop_1(gender);
        }
        // Use for load from 1 file
        /*this.httpService.getProducts("products.json")
                    .subscribe((data)=>this.allProducts = data);*/
    };
    ProductsListComponent.prototype.applyFilter = function (filter) {
        this.products = this.allProducts[this.activateRoute.snapshot.params['gender']];
        var _loop_2 = function (key) {
            if (filter.hasOwnProperty(key)) {
                var categoryArray_1 = filter[key];
                if (categoryArray_1) {
                    this_2.products = this_2.products.filter(function (product) {
                        var isContain = false;
                        categoryArray_1.forEach(function (elem) {
                            if (product[key] === elem)
                                isContain = true;
                        });
                        return isContain;
                    });
                }
            }
        };
        var this_2 = this;
        for (var key in filter) {
            _loop_2(key);
        }
    };
    ProductsListComponent.prototype.applyUrlFilter = function (filter) {
        var _loop_3 = function (category) {
            if (filter.hasOwnProperty(category)) {
                var value_1 = filter[category];
                this_3.products = this_3.products.filter(function (product) {
                    return (product[category] === value_1);
                });
            }
        };
        var this_3 = this;
        for (var category in filter) {
            _loop_3(category);
        }
    };
    ProductsListComponent.prototype.changeGrid = function (num) {
        this.numOfColumn = num;
    };
    ProductsListComponent.prototype.ngOnDestroy = function () {
        //this.parentSubject.unsubscribe();
    };
    return ProductsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Subject_1.Subject)
], ProductsListComponent.prototype, "parentSubject", void 0);
ProductsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'products-list',
        templateUrl: '/app/products-list/products-list.component.html',
        styleUrls: ['./../../products-list/products-list.component.css'],
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map