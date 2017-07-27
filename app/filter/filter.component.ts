import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { LoadCategoriesService } from "./load-categories.service";

import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

import { Product } from "./../source/product";

@Component({
    moduleId: module.id,
    selector: 'filter',
    templateUrl: '/app/filter/filter.component.html',
    styleUrls: ['./../../filter/filter.component.css'],
    providers: [LoadCategoriesService]
})
export class FilterComponent implements OnInit{ 
    parentSubject:Subject<Object> = new Subject();

    notifyChildren() {
        this.parentSubject.next(this.resultFilter);
    }


    //Объект со всеми категориями
    allFiltres: Object = {};
    //Объект со всеми фильтрами по текущему гендеру
    genderFilter: Object = {};

    //Массив, элементами которого являются массивы категорий
    categoryData: Array<Array<string>> = [];
    //массив с именами категорий
    categoryNames: String[] = [];

    resultFilter: Object = {};
    
    
    constructor(private categories: LoadCategoriesService,
                private router: Router,
                private activateRoute: ActivatedRoute,
                private elemRef:ElementRef ) { }

    ngOnInit(): void {
        this.clearCheckBoxes();
   
        this.categories.getCategories().subscribe((obj:Object)=>{
            this.allFiltres = obj;
            this.reloadFilter();
        });

        this.router.events.subscribe(() =>{
            this.reloadFilter();
            this.notifyChildren();
            this.clearCheckBoxes();
        });   
    }

    reloadFilter(){

        let newGender = this.activateRoute.snapshot.params["gender"];

        this.genderFilter = {};
        this.genderFilter = this.allFiltres[newGender];

        this.categoryData = [];
        this.categoryNames = [];
        
        //Write arrays from Object to array
        for (var key in this.genderFilter) {
            if (this.genderFilter.hasOwnProperty(key)) {
                let arr = this.genderFilter[key];

                this.categoryNames.push(key);
                this.categoryData.push(arr);
            }
        }
        
    }

    clearFilter(){
        this.resultFilter = {};

        let gender = this.activateRoute.snapshot.params['gender'];
        this.router.navigate(['/products/', gender]);

        this.clearCheckBoxes();  
        this.notifyChildren();      
    };

    clearCheckBoxes(){
        for (let i = 0; i < this.categoryNames.length; i++){
            for (let j = 0; j < this.categoryData[i].length; j++){
                let elem = document.getElementById(i+"_"+j);
                if (elem && elem.checked) elem.checked = false;
            }
        }
    }

    changeFilter(p1:number, p2:number){
        let el = document.getElementById(p1+"_"+p2);

        let category = '' + this.categoryNames[p1];
        let item = this.genderFilter[category][p2];


        let urlParams = this.activateRoute.snapshot.queryParams;
        let hasInUrl: boolean = false; //Is item in url?

        //Check equal filter in category and in url
        for (var key in urlParams) {
            if (urlParams.hasOwnProperty(key)) {
                let currParam = urlParams[key];
                if (item == currParam) hasInUrl = true;
            }
        }

        //if URL haven't item 
        if (!hasInUrl){
            if (!el.checked) {   //Add filter to resultFilter

                if(this.resultFilter[category] === undefined) this.resultFilter[category] = [];
                if (this.resultFilter[category].indexOf(item) < 0) 
                    this.resultFilter[category].push(item);

            } else { //delete filter from array

                let pos = this.resultFilter[category].indexOf(item);
                this.resultFilter[category].splice(pos, pos+1);
                if (this.resultFilter[category].length === 0) delete(this.resultFilter[category]);
            }
        }

        this.notifyChildren();
    };

}
