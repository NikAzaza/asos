"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var link_item_1 = require("./../source/link-item");
var HeaderLinksService = (function () {
    function HeaderLinksService() {
        this.womensLink = {};
        this.mensLink = {};
    }
    //===================================Set================================================
    HeaderLinksService.prototype.setWomens = function (womenShop, womenBrands, womenEdits) {
        this.womensLink = {};
        this.womensLink = {
            "shop": womenShop,
            "brands": womenBrands,
            "edits": womenEdits
        };
    };
    HeaderLinksService.prototype.setMens = function (Shop, Brands, Edits) {
        this.mensLink = {};
        this.mensLink = {
            "shop": Shop,
            "brands": Brands,
            "edits": Edits
        };
    };
    //==================================Get========================================
    HeaderLinksService.prototype.getWomens = function () {
        return this.womensLink;
    };
    HeaderLinksService.prototype.getMens = function () {
        return this.mensLink;
    };
    //==================================Create category======================================
    HeaderLinksService.prototype.createCategory = function (products) {
        console.log("All products:" + products);
        var shop = [], brand = [], edit = [];
        products.forEach(function (element) {
            console.log("current element: " + element);
            if (!shop.some(function (item) { return element.type == item.value; }))
                shop.push(new link_item_1.LinkItem("/women/products" + element.type, element.type));
            if (!brand.some(function (item) { return element.brand == item.value; }))
                brand.push(new link_item_1.LinkItem('/women/products' + element.brand, element.brand));
        });
        edit.push(new link_item_1.LinkItem('', "simple text"));
        edit.push(new link_item_1.LinkItem('', "test"));
        edit.push(new link_item_1.LinkItem('', "test 1"));
        edit.push(new link_item_1.LinkItem('', "test 2"));
        edit.push(new link_item_1.LinkItem('', "test 3"));
        return { "products": shop,
            "brands": brand,
            "edits": edit };
    };
    HeaderLinksService.prototype.createWomenCategoryList = function (products, shop, brand, edits) {
        /*
            products.forEach((element) => {
                
                if (! shop.some((item) => {return element.type == item.value;}) )
                    shop.push(new LinkItem("/women/products" + element.type, element.type));
    
                if (! brand.some((item) => {return element.brand == item.value;})  )
                    brand.push(new LinkItem('/women/products' + element.brand, element.brand));
            });
    
            edits.push(new LinkItem('', "simple text"));
            edits.push(new LinkItem('', "test"));
            edits.push(new LinkItem('', "test 1"));
            edits.push(new LinkItem('', "test 2"));
            edits.push(new LinkItem('', "test 3"));
    
            this.setWomens(shop, brand, edits)
            */
        this.womensLink = this.createCategory(products);
        console.log("Women's link was create!");
    };
    HeaderLinksService.prototype.createMenCategoryList = function (products) {
        this.mensLink = this.createCategory(products);
        console.log("Men's link was create!");
        console.log(this.getMens());
    };
    return HeaderLinksService;
}());
HeaderLinksService = __decorate([
    core_1.Injectable()
], HeaderLinksService);
exports.HeaderLinksService = HeaderLinksService;
//# sourceMappingURL=header-links.service.js.map