import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { DataFromAPIService } from 'src/app/Services/data-from-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit  {
  newProduct:IProduct = {} as IProduct;
  catList:ICategory[]=[];
  prd: IProduct|undefined=undefined;
  productsIDList: number[] = [];
  currentProductID: number = 0;
  Index: number = 0;

constructor(private serviceAPI: DataFromAPIService,private activatedRoute: ActivatedRoute,private myrout:Router,private catService:CategoryService) 
{

 }
AddNewProduct()
{
//   let newProduct:IProduct={
//     PID: 2222,
//     PName: "Islamic Book1",
//     Quantity: 5,
//     Price: 2000,
  
// }

  this.serviceAPI.addProduct(this.newProduct).subscribe(data => {
    
    this.myrout.navigateByUrl('Products');
  })
  console.log(this.newProduct);


// to updatedata
this.serviceAPI.updateProduct(this.newProduct).subscribe(data => {
  this.myrout.navigateByUrl('Products');
})


}
   
  



ngOnInit() :void {
  this.catService.getCategories().subscribe(data => {
    this.catList = data;
});

this.activatedRoute.paramMap.subscribe(paramMap => {

  this.currentProductID = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
 console.log("url:"+this.currentProductID );
  

this.serviceAPI.getProductByID(this.currentProductID).subscribe(data => {
this.newProduct=data;

});
});



// this.activatedRoute.paramMap.subscribe(paramMap => {

//   this.currentProductID = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
//  console.log("url:"+this.currentProductID );

//  this.serviceAPI.getProductByID(this.currentProductID).subscribe(product => {
//   if(this.prd!= undefined) 
//   {
//   this.prd.PName = product.PName;
//   this.prd.Quantity= product.Quantity;
//   this.prd.Price= product.Price;
//   this.prd.CateogryID= product.CateogryID;
//   console.log(this.prd);
 
//   }
//   else{
//     alert("not found")
//   }
  
// }

// );

// });
// }


}}
