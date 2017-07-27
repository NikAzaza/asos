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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HiddenCathedoriesLinksService = (function () {
    function HiddenCathedoriesLinksService(http) {
        this.http = http;
    }
    HiddenCathedoriesLinksService.prototype.getCategories = function (gender) {
        return this.http.get("header-links.json")
            .map(function (resp) {
            var currLinks = resp.json()[gender];
            return currLinks;
        });
    };
    return HiddenCathedoriesLinksService;
}());
HiddenCathedoriesLinksService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HiddenCathedoriesLinksService);
exports.HiddenCathedoriesLinksService = HiddenCathedoriesLinksService;
//# sourceMappingURL=hidden-categories-links.service.js.map