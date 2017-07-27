"use strict";
var Product = (function () {
    /*id: number;
    name: string;
    price: number;
    images: string[];

    type: string;
    brand: string;
    size: string;
    color: string;*/
    function Product(id, name, price, images, type, brand, size, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.images = images;
        this.type = type;
        this.brand = brand;
        this.size = size;
        this.color = color;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map