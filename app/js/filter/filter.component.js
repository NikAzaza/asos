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
var load_categories_service_1 = require("./load-categories.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
var FilterComponent = (function () {
    function FilterComponent(categories, router, activateRoute, elemRef) {
        this.categories = categories;
        this.router = router;
        this.activateRoute = activateRoute;
        this.elemRef = elemRef;
        this.parentSubject = new Subject_1.Subject();
        //Объект со всеми категориями
        this.allFiltres = {};
        //Объект со всеми фильтрами по текущему гендеру
        this.genderFilter = {};
        //Массив, элементами которого являются массивы категорий
        this.categoryData = [];
        //массив с именами категорий
        this.categoryNames = [];
        this.filterFromUrl = {};
        this.resultFilter = {};
    }
    FilterComponent.prototype.notifyChildren = function () {
        this.parentSubject.next(this.resultFilter);
    };
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getObjectFromUrl();
        this.clearCheckBoxes();
        this.categories.getCategories().subscribe(function (obj) {
            _this.allFiltres = obj;
            _this.reloadFilter();
        });
        this.router.events.subscribe(function () {
            _this.reloadFilter();
            _this.getObjectFromUrl();
            _this.addUrlFilterToResultFilter();
            _this.notifyChildren();
            _this.clearCheckBoxes();
        });
    };
    FilterComponent.prototype.getObjectFromUrl = function () {
        var _this = this;
        this.filterFromUrl = {};
        this.activateRoute.queryParams.subscribe(function (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var parametr = params[key];
                    _this.filterFromUrl[key] = parametr;
                }
            }
        });
    };
    FilterComponent.prototype.reloadFilter = function () {
        var newGender = this.activateRoute.snapshot.params["gender"];
        this.genderFilter = {};
        this.genderFilter = this.allFiltres[newGender];
        this.categoryData = [];
        this.categoryNames = [];
        //Write arrays from Object to array
        for (var key in this.genderFilter) {
            if (this.genderFilter.hasOwnProperty(key)) {
                var arr = this.genderFilter[key];
                this.categoryNames.push(key);
                this.categoryData.push(arr);
            }
        }
    };
    FilterComponent.prototype.addUrlFilterToResultFilter = function () {
        this.resultFilter = {};
        for (var key in this.filterFromUrl) {
            if (this.filterFromUrl.hasOwnProperty(key)) {
                var filterCategory = this.filterFromUrl[key];
                this.resultFilter[key] = [];
                this.resultFilter[key].push(filterCategory);
            }
        }
    };
    FilterComponent.prototype.clearFilter = function () {
        this.filterFromUrl = {};
        this.resultFilter = {};
        var gender = this.activateRoute.snapshot.params['gender'];
        this.router.navigate(['/products/', gender]);
        this.clearCheckBoxes();
        this.notifyChildren();
    };
    ;
    FilterComponent.prototype.clearCheckBoxes = function () {
        for (var i = 0; i < this.categoryNames.length; i++) {
            for (var j = 0; j < this.categoryData[i].length; j++) {
                var elem = document.getElementById(i + "_" + j);
                if (elem && elem.checked)
                    elem.checked = false;
            }
        }
    };
    FilterComponent.prototype.log = function (p1, p2) {
        var el = document.getElementById(p1 + "_" + p2);
        var category = '' + this.categoryNames[p1];
        var item = this.genderFilter[category][p2];
        var urlParams = this.activateRoute.snapshot.queryParams;
        var hasInUrl = false; //Is item in url?
        //Check equal filter in category and in url
        for (var key in urlParams) {
            if (urlParams.hasOwnProperty(key)) {
                var currParam = urlParams[key];
                if (item == currParam)
                    hasInUrl = true;
            }
        }
        //if URL haven't item 
        if (!hasInUrl) {
            if (!el.checked) {
                if (this.resultFilter[category] === undefined)
                    this.resultFilter[category] = [];
                if (this.resultFilter[category].indexOf(item) < 0)
                    this.resultFilter[category].push(item);
            }
            else {
                var pos = this.resultFilter[category].indexOf(item);
                this.resultFilter[category].splice(pos, pos + 1);
                if (this.resultFilter[category].length === 0)
                    delete (this.resultFilter[category]);
            }
        }
        this.notifyChildren();
    };
    ;
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'filter',
        templateUrl: '/app/filter/filter.component.html',
        styleUrls: ['./../../filter/filter.component.css'],
        providers: [load_categories_service_1.LoadCategoriesService]
    }),
    __metadata("design:paramtypes", [load_categories_service_1.LoadCategoriesService,
        router_1.Router,
        router_1.ActivatedRoute,
        core_1.ElementRef])
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map