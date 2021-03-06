"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
// This Module's Components
var body_component_1 = require("./body.component");
var BodyModule = (function () {
    function BodyModule() {
    }
    return BodyModule;
}());
BodyModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule, platform_browser_1.BrowserModule
        ],
        declarations: [
            body_component_1.BodyComponent,
        ],
        exports: [
            body_component_1.BodyComponent,
        ]
    })
], BodyModule);
exports.BodyModule = BodyModule;
//# sourceMappingURL=body.module.js.map