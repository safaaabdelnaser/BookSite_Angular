import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { BasicAPI } from '../Environments/API_ECommerce';
import { DiscountOffers, IProduct } from '../Models/iproduct';
import { DataFromAPIService } from './data-from-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // to delclare productList_Lab4
  products: IProduct[]=[];
  constructor(private httpClient:HttpClient) {
    // this.products =
    //   [
    //     { ID: 1, PName: "Islamic Book1", Quantity: 5, Price: 2000, Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAirbOZBF7Nffsv35HOi7qNGWRVX8hteEpSg&usqp=CAU", CateogryID: 1, Discount: DiscountOffers.OPTION1 }
    //     ,
    //     { ID: 7, PName: "Cultural Book1", Quantity: 2, Price: 400, Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHqFLMP_n6u8RhHsT-ERKE4xXGiKs6VdqCw&usqp=CAU", CateogryID: 2, Discount: DiscountOffers.OPTION2 }
    //     ,
    //     { ID: 5, PName: "Social Book1", Quantity: 6, Price: 600, Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ6jfWP8xNfe5LjLZWs3pFtWW5Blf4jQD7A&usqp=CAU", CateogryID: 3, Discount: DiscountOffers.OPTION3 }
    //     ,
    //     { ID: 4, PName: "Islamic Book2", Quantity: 0, Price: 450, Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU", CateogryID: 1, Discount: DiscountOffers.OPTION1 },
    //     { ID: 10, PName: "Cultural Book2", Quantity: 1, Price: 350, Img: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=600", CateogryID: 2, Discount: DiscountOffers.OPTION3 },
    //     { ID: 6, PName: "Social Book2", Quantity: 0, Price: 620, Img: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600", CateogryID: 3, Discount: DiscountOffers.OPTION1 },


    //   ];
  }
  // Lab4
  // function return all products to reuse in dataproduct Component
  // getAllProducts(): IProduct[] {
  //   return this.products;
  // }

  // lab6_api
  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${BasicAPI.API_BookSite}/products`);
   }
  // function return products by catID_lab4
  // getProductsByCatID(catID: number): IProduct[] {
  //   if (catID == 0) {
  //     return this.getAllProducts();
  //   }
  //   else {
  //     return this.products.filter(prd => prd.CateogryID == catID);
  //   }
  // }



  
  
  // // get one product by id _  Lab4
  // getOneProductByID(productID: number): IProduct | undefined {
  //   return this.products.find(prd => prd.ID == productID);

  // }


  
  getOneProductByID(prdID:any):Observable<IProduct>{
    // get one product by id_ lab6
    // console.log(this.httpClient.get<IProduct>(`${BasicAPI.API_BookSite}/products?${prdID}`));
    
    return this.httpClient.get<IProduct>(`${BasicAPI.API_BookSite}/products/${prdID}`);
  }
   //get IDs of products
  // getProductsIDs()
  // {
  //   return this.products.map(prd => prd.ID);
  // }

 
  getProductsIDs():Observable<number[]>{
     //get IDs of products_lab6_api

    return this.httpClient.get<number[]>(`${BasicAPI.API_BookSite}/products?PID`).pipe(retry(3), catchError(err=>{
      return throwError(()=>{
        return new Error(err);
      })
    }));
  }


  // deletProduct(prdID:any):Observable<IProduct>{
  //   // get one product by id_ lab6
  //   // console.log(this.httpClient.get<IProduct>(`${BasicAPI.API_BookSite}/products?${prdID}`));
  //   return this.httpClient.delete<IProduct>(`${BasicAPI.API_BookSite}/products/${prdID}`);
  // }
}
