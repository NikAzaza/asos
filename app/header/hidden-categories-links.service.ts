import { HeaderLinkItem } from './../source/header-link-item';
import { Product } from './../source/product';

import { Injectable } from '@angular/core'; 
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class HiddenCathedoriesLinksService{

    constructor (private http: Http) {}

    getCategories(gender: string): Observable<Object>{
         return this.http.get("header-links.json")
            .map((resp: Response) => {
                let currLinks = resp.json()[gender];
            return currLinks;
            })
    }


//===================================================Women's Links================================================
/*categories: string[] = ['Брюки','Джемперы','Джинсы',
    'Кардиганы','Колготки','Комбинезоны','Косметика',
    'Куртки','Пальто','Платья'];
    womenProducts: HeaderLinkItem[] = [
                     {value: 'Брюки', params: {type: 'Брюки'}},
                     {value: 'Джемперы', params: {'type': 'Джемперы'}},
                     {value: 'Джинсы', params: {'type': 'Джинсы'}},
                     {value: 'Кардиганы', params: {'type': 'Кардиганы'}},
                     {value: 'Колготки', params: {type: 'Колготки'}},
                     {value: 'Комбинезоны', params: {'type': 'Комбинезоны'}},
                     {value: 'Косметика', params: {'type': 'Косметика'}},
                     {value: 'Куртки', params: {'type': 'Куртки'}},
                     {value: 'Пальто', params: {'type': 'Пальто'}},
                     {value: 'Платья', params: {'type': 'Платья'}}
    ];

   /* brands: string[] = ['Abbott Lyon','Adidas',
    'Aeryne','Defend', 'Armani Exchange',
    'Bec & Bridge','Daisy Street Plus','Elise Ryan',
    'Marc Jacobs','New Look Plus',];

    womenBrands: HeaderLinkItem[] = [
        {value: 'Abbott Lyon', params: {'brand': 'Abbott Lyon'} },
        {value: 'Adidas', params: {'brand': 'Adidas'} },
        {value: 'Aeryne', params: {'brand': 'Aeryne'} },
        {value: 'Defend', params: {'brand': 'Defend'} },
        {value: 'Armani Exchange', params: {'brand': 'Armani Exchange'} },
        {value: 'Bec & Bridge', params: {'brand': 'Bec & Bridge'} },
        {value: 'Daisy Street Plus', params: {'brand': 'Daisy Street Plus'} },
        {value: 'Elise Ryan', params: {'brand': 'Elise Ryan'} },
        {value: 'Marc Jacobs', params: {'brand': 'Marc Jacobs'} },
        {value: 'New Look Plus', params: {'brand': 'New Look Plus'} }
    ];
    womenEdits: HeaderLinkItem[] = [
        {value: 'style 1', params: {}},
        {value: 'style 2', params: {}},
        {value: 'style 3', params: {}},
        {value: 'style 4', params: {}}
    ];

    womenLinks: Object = {
        products: this.womenProducts,
        brands: this.womenBrands,
        edits: this.womenEdits
    };

    //========================================================Men's Links =============================================
   /* categories1: string[] = ['Cвитшоты','Блейзеры',
        'Ботинки','Брюки','Джинсы','Комбинезоны',
        'Кроссовки','Куртки','Майки','Рубашки'];
	   
    menShopByProduct: HeaderLinkItem[] = [
        {value: 'Cвитшоты', params: {'type': 'Cвитшоты'}},
        {value: 'Блейзеры', params: {'type': 'Блейзеры'}},
        {value: 'Ботинки', params: {'type': 'Ботинки'}},
        {value: 'Брюки', params: {'type': 'Брюки'}},
        {value: 'Джинсы', params: {'type': 'Джинсы'}},
        {value: 'Комбинезоны', params: {'type': 'Комбинезоны'}},
        {value: 'Кроссовки', params: {'type': 'Кроссовки'}},
        {value: 'Куртки', params: {'type': 'Куртки'}},
        {value: 'Майки', params: {'type': 'Майки'}},
        {value: 'Рубашки', params: {'type': 'Рубашки'}},
    ];
    /*brands1: string[] = ['Cheap Monday','Cheap Monday',
    'Crooked Tongues','Defend London','Diesel','Dolce & Gabbana',
    'Ellesse','Emporio Armani','Fred Perry','G-Star'];
    menBrands: HeaderLinkItem[] = [
        {value: 'Cheap Monday', params: {'brand': 'Cheap Monday'}},
        {value: 'Cheap Monday', params: {'brand': 'Cheap Monday'}},
        {value: 'Crooked Tongues', params: {'brand': 'Crooked Tongues'}},
        {value: 'Defend London', params: {'brand': 'Defend London'}},
        {value: 'Diesel', params: {'brand': 'Diesel'}},
        {value: 'Dolce & Gabbana', params: {'brand': 'Dolce & Gabbana'}},
        {value: 'Ellesse', params: {'brand': 'Ellesse'}},
        {value: 'Emporio Armani', params: {'brand': 'Emporio Armani'}},
        {value: 'Fred Perry', params: {'brand': 'Fred Perry'}},
        {value: 'G-Star', params: {'brand': 'G-Star'}}
    ];
    menEdits: HeaderLinkItem[] = [
        {value: 'simple text', params: {}},
        {value: 'example', params: {}},
        {value: 'just text', params: {}},
        {value: 'style 4', params: {}}
    ];

    menLinks: Object = {
        products: this.menShopByProduct,
        brands: this.menBrands,
        edits: this.menEdits
    };*/
}