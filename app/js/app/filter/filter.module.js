"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports
var core_1 = require("@angular/core");
// This Module's Components
var filter_component_1 = require("./filter.component");
var FilterModule = (function () {
    function FilterModule() {
    }
    return FilterModule;
}());
FilterModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            filter_component_1.FilterComponent,
        ],
        exports: [
            filter_component_1.FilterComponent,
        ]
    })
], FilterModule);
exports.FilterModule = FilterModule;
//# sourceMappingURL=filter.module.js.map