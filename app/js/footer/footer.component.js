"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FooterInfo = (function () {
    function FooterInfo() {
    }
    return FooterInfo;
}());
exports.FooterInfo = FooterInfo;
var FooterComponent = (function () {
    function FooterComponent() {
        this.usersEmail = "";
        this.question = [
            { value: "Help", ref: "#" },
            { value: "Track Order", ref: "#" },
            { value: "Delivery", ref: "#" },
            { value: "Returns", ref: "#" }
        ];
        this.whatInStore = [
            { value: "Women", ref: "#" },
            { value: "Men", ref: "#" },
            { value: "Buy Gift Vouchers", ref: "#" },
        ];
        this.followAsos = [
            { value: "Facebook", ref: "https://www.facebook.com/" },
            { value: "Twitter", ref: "https://www.twitter.com" },
            { value: "Youtube", ref: "https://www.youtube.com/" },
        ];
        this.moreAboutAsos = [
            { value: "Corporate Responsibility", ref: "#" },
            { value: "Jobs at ASOS", ref: "#" },
            { value: "Investors", ref: "#" },
        ];
        this.moreAsosSites = [
            { value: "Mobile and ASOS apps", ref: "#" },
            { value: "Marketplace", ref: "#" },
        ];
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-footer',
        templateUrl: '/app/footer/footer.component.html',
        styleUrls: ['./../../footer/footer.component.css']
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map