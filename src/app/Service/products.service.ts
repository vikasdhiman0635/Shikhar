import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 

  BaseURL="https://fakestoreapi.com/";

  constructor(private http:HttpClient) { }

  getallproducts():Observable<any>
  {
    let url=this.BaseURL+"products";
    return this.http.get(url);
  }

  getallcategories():Observable<any>
  {
    let url=this.BaseURL+"products/categories";
    return this.http.get(url);
  }

  getdatabyid(id: any):Observable<any>
  {
    let url=this.BaseURL+"products/"+id
    return this.http.get(url);
  }

  getproductbycategory(productcategory: any):Observable<any>
  {
    let url=this.BaseURL+"products/category/"+productcategory;
    return this.http.get(url);
  }

}
