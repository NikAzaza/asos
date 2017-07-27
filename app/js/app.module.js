"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
// import { HeaderModule } from "./header/header.module";
// import { FooterModule } from "./footer/footer.module";
// import { BodyModule } from "./body/body.module";
// import { ProductsListModule } from "./products-list/products-list.module";
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var products_list_component_1 = require("./products-list/products-list.component");
var filter_component_1 = require("./filter/filter.component");
var body_component_1 = require("./body/body.component");
var app_component_1 = require("./app.component");
var appRoutes = [
    { path: "", component: body_component_1.BodyComponent },
    { path: "products/:gender", component: filter_component_1.FilterComponent },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, products_list_component_1.ProductsListComponent,
            body_component_1.BodyComponent, header_component_1.HeaderComponent,
            footer_component_1.FooterComponent, filter_component_1.FilterComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map