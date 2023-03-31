import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'/ProductData/Products',pathMatch:'full'}, 
  {path:'Products/:pid',component:ProductDetailsComponent}
  
 
  ]

@NgModule({
  declarations: [
    ProductDetailsComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductMModule { }
