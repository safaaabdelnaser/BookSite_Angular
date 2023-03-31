import { Component,OnInit,OnChanges, SimpleChanges  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Location } from '@angular/common';
import { DataFromAPIService } from 'src/app/Services/data-from-api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnChanges{

  prd: IProduct|undefined=undefined;
  prd2?: IProduct;
  productsIDList: number[] = [];
  productList:IProduct[] = [];
  currentProductID: number = 0;
  Index: number = 0;
  constructor(private prdAPIService: ProductServiceService, private activatedRoute: ActivatedRoute, private mylocation: Location, private myrouter: Router) {

  }
   ngOnChanges(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {


    // to get product data of (ID )_lab5
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   this.currentProductID = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
    //   let foundProduct = this.prdAPIService.getOneProductByID(this.currentProductID);
    //   if (foundProduct) {
    //     this.prd = foundProduct;

    //   }
    //   else {
    //     alert("Product not found");
    //     this.mylocation.back();
    //   }
    // });

    // to get product data of (ID )from api_lab6
  //   this.activatedRoute.paramMap.subscribe(paramMap => {
  //       this.currentProductID = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
  //      // console.log(this.currentProductID )
  //     let onproduct=this.prdAPIService.getOneProductByID(this.currentProductID).subscribe(d => {

  //     this.prd = d;
      
  //     console.log(this.prd)
  //     // 
  //     // if (onproduct) {
  //     //   alert(this.prd?.PID);

  //     // }
  //     // else {
  //     //   alert("Product not found");
  //     //   this.mylocation.back();
  //     // }
    
  //   });
  //   console.log(onproduct);
    
    
  // })


    // this.prdAPIService.getProductsIDs().subscribe(data => {
    //   this.productsIDList = data;
    // });
    // console.log(this.productsIDList);
    // const id=this.activatedRoute.snapshot.paramMap.get('pid');

    // way1
    this.activatedRoute.paramMap.subscribe(paramMap => {

            this.currentProductID = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
           console.log("url:"+this.currentProductID );

           this.prdAPIService.getOneProductByID(this.currentProductID).subscribe(product => {
            if(product)
            {
            this.prd= product;
            console.log(this.prd);
           
            }
            else{
              alert("not found")
            }
            
          }
       
          );
    
  });
  // let id=this.activatedRoute.snapshot.paramMap.get('pid');
  // this.prdAPIService.getOneProductByID(id).subscribe(product => {
  //             if(product)
  //             {
  //             this.prd= product;
  //             // alert(this.prd)
  //             console.log(this.prd);
              
  //             }
  //             else{
  //               alert("not found")
  //             }
              
  //           }
         
  //           );

            // this.prdAPIService.getAllProducts().subscribe(productsid => {this.productList=productsid
            //   // this.prd2=this.productList[this.currentProductID]
               
            // });
            this.prdAPIService.getAllProducts().subscribe(products => {this.productList=products
              this.prd2=this.productList[this.currentProductID]
              // this.prd2=this.productList[0]
              console.log(this.productList);
              
              
              
               
            });
  
  }
  prevProduct() {
   
    // this.Index = this.productsIDList.findIndex((item) => item == this.currentProductID);
     
    // this.myrouter.navigate(['Products', this.productsIDList[--this.Index]])
    this.currentProductID = (this.currentProductID + 1) % this.productList.length;
    this.prd2 = this.productList[--this.currentProductID];
    this.currentProductID;
    this.myrouter.navigate(['ProductData/Products',this.prd2.id]);
 
  }
  nextProduct() {
    
  
    this.currentProductID = (this.currentProductID + 1) % this.productList.length;
    this.prd2 = this.productList[++this.currentProductID];
    // ++this.currentProductID;
   
      this.myrouter.navigate(['ProductData/Products',this.prd2.id]);
      
    

    
  
  }
   

  BackHome() {
    this.myrouter.navigateByUrl('Products');
  }
}
