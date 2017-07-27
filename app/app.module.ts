import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { Routes, RouterModule, RouterLink } from "@angular/router";

// import { HeaderModule } from "./header/header.module";
// import { FooterModule } from "./footer/footer.module";
// import { BodyModule } from "./body/body.module";
// import { ProductsListModule } from "./products-list/products-list.module";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { FilterComponent } from "./filter/filter.component";
import { BodyComponent } from "./body/body.component";

import { AppComponent }   from './app.component';

const appRoutes: Routes = [
  {path: "", component: BodyComponent},
  {path: "products/:gender", component: FilterComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
    imports:      
    [ BrowserModule, FormsModule, 
      RouterModule.forRoot(appRoutes), HttpModule],
      
    declarations: 
      [ AppComponent, ProductsListComponent,
        BodyComponent, HeaderComponent, 
        FooterComponent, FilterComponent],

    bootstrap:    [ AppComponent ]
})

export class AppModule { 
    
}