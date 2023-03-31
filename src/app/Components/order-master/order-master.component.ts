import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
  CategoryList: ICategory[]=[];
  selectedCatID: number = 0;
  receivedOrderTotalPrice: number = 0;
  count:number=0;
  listproduct: IProduct[] = [];
  constructor(private categoryService:CategoryService) {
    // categories list
    // this.CategoryList = [{ CatID: 1, CatName: "Islamic" }, { CatID: 2, CatName: "cultural" }, { CatID: 3, CatName: "Social" }]
this.categoryService.getCategories().subscribe(catData=>{
  this.CategoryList = catData;
})
  }
  // step-5 to show total price of any the order
  orderBill(prod: IProduct) {

    this.listproduct.push(prod);
    
  }
  
}
