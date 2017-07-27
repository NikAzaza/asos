import { Component, OnInit, Input} from '@angular/core';
import { NgForm} from '@angular/forms';

import { HiddenMenuService } from "./hover-hidden-menu.service";
import { HiddenCathedoriesLinksService } from "./hidden-categories-links.service";

import { LinkItem } from "./../source/link-item";
import { HeaderLinkItem } from "./../source/header-link-item";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: '/app/header/header.component.html',
    styleUrls: [ './../../header/header.component.css'],
    providers: [ 
                HiddenMenuService,
                HiddenCathedoriesLinksService
             ]
})
export class HeaderComponent implements OnInit {
    
    searchString: string = "";
    women: Object = {};
    men: Object = {};


    constructor(
        private hiddenMenuService:HiddenMenuService, 
        private hiddenLinks:HiddenCathedoriesLinksService){}

    ngOnInit(): void {
       this.hiddenLinks.getCategories("women").subscribe((obj:Object) =>{
           this.women = obj;
       });

       this.hiddenLinks.getCategories('men').subscribe((obj:Object)=>{
            this.men = obj;
       });
    }


    showCategory(showElem: HTMLElement, hoverElem: HTMLElement){
        this.hiddenMenuService.showHiddenCategory(showElem, hoverElem);
    }
    hideCategory(showElem: HTMLElement, hoverElem: HTMLElement){
        this.hiddenMenuService.hideHiddenCategory(showElem, hoverElem);
    }
    
    clearSearchString(){
        this.searchString = "";
    }
}
