import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Product } from "./product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    //http://localhost:8080/angular/setUser.php     PHP
    //http://localhost:51576/api/values/    Web API
    //http://localhost:56473/Home/PostData  ASP NET MVC
     
    postData(products: Product[]){
        

        const body = JSON.stringify(products);
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
         
        return this.http.post('http://angular:81/post.php', body, { headers: headers })
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);}); 
    }
}
