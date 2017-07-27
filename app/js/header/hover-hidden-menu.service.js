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
var HiddenMenuService = (function () {
    function HiddenMenuService(renderer) {
        this.renderer = renderer;
    }
    HiddenMenuService.prototype.showHiddenCategory = function (showElem, hoverElem) {
        this.renderer.setStyle(showElem, "display", "block");
        this.renderer.addClass(hoverElem, "main-list-item-hoverable");
        this.renderer.setStyle(hoverElem, "border-left-color", "#111");
        var childElem = hoverElem.children[0];
        this.renderer.setStyle(childElem, "color", "#fff");
        this.renderer.setStyle(childElem, "text-decoration", "underline");
    };
    HiddenMenuService.prototype.hideHiddenCategory = function (showElem, hoverElem) {
        this.renderer.setStyle(showElem, "display", "none");
        this.renderer.removeClass(hoverElem, "main-list-item-hoverable");
        this.renderer.setStyle(hoverElem, "border-left-color", "#aaa");
        var childElem = hoverElem.children[0];
        this.renderer.setStyle(childElem, "color", "#000");
        this.renderer.setStyle(childElem, "text-decoration", "none");
    };
    return HiddenMenuService;
}());
HiddenMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Renderer2])
], HiddenMenuService);
exports.HiddenMenuService = HiddenMenuService;
//# sourceMappingURL=hover-hidden-menu.service.js.map