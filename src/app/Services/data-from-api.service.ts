import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAPI } from '../Environments/API_ECommerce';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataFromAPIService {
  httpOptions={};
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({ 
        'content-type': 'application/json'
      })
    };
  }
  getAllProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>(`${BasicAPI.API_BookSite}/products`);
  }

  // getProductsByCatid
  getProductsByCatID(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${BasicAPI.API_BookSite}/products?CateogryID=${catId}`);
  }


  // get one product by id
  getProductByID(prdID:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${BasicAPI.API_BookSite}/products/${prdID}`);
  }
  // Add a new product
  addProduct(newProduct:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${BasicAPI.API_BookSite}/products`,JSON.stringify(newProduct),this.httpOptions);
  }
  deletProduct(prdID:number):Observable<IProduct>{
    // get one product by id_ lab6
    // console.log(this.httpClient.get<IProduct>(`${BasicAPI.API_BookSite}/products?${prdID}`));
    return this.httpClient.delete<IProduct>(`${BasicAPI.API_BookSite}/products/${prdID}`);
  }
  updateProduct(Product:IProduct):Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${BasicAPI.API_BookSite}/products/${Product.id}`,JSON.stringify(Product),this.httpOptions);
  
  }

}
