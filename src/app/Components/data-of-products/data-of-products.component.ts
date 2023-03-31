import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { DiscountOffers, IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { DataFromAPIService } from 'src/app/Services/data-from-api.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
@Component({
  selector: 'app-data-of-products',
  templateUrl: './data-of-products.component.html',
  styleUrls: ['./data-of-products.component.scss']
})
export class DataOfProductsComponent {
  // 1-->Islamic ,2-->cultural, 3-->Social 


  @Input() ReceviedCategoryID: number = 0;//user select category
  ProductsListByCategory: IProduct[] = [];//to store all product by category
  AllProducts: IProduct[] = []; //to store all product
  ListsingleProducts: { products: IProduct, count: number, price: number }[] = [];
  // step to handel click event in anthor component
  //step-1 to get total price of products
  TotalPrice: number = 0;
  @Input() countItem: number = 0;
  //step-2 to handel price of products in anthor component

  @Output() addToCart: EventEmitter<IProduct>;
  @ViewChild('totalcost') cost!: ElementRef;
  // inject service_lab4
  constructor(private service: ProductServiceService, private myrouter: Router, private prdAPIService: DataFromAPIService) {

    // step-3_lab3
    this.addToCart = new EventEmitter<IProduct>();
  }

  // to decrease number of product when user click on button_lab2
  DecreaseQuantity(ID: Number) {

    this.ListsingleProducts.forEach(product => {
      if (product.products.id == ID) {
        if (product.products.Quantity > 0) {
          product.products.Quantity--;
          console.log(product.products.Quantity);

        }


      }
    });
  }
  ngOnChanges(): void {
    // to display all products of category that user selected_lab4 
    // this.ProductsListByCategory=this.service.getProductsByCatID(this.ReceviedCategoryID);
    // lab6_api
    if (this.ReceviedCategoryID == 0) {
      this.prdAPIService.getAllProducts().subscribe(mydata => {
        this.ProductsListByCategory = mydata;
      })
    }
    else {
      this.prdAPIService.getProductsByCatID(this.ReceviedCategoryID).subscribe(data => {
        this.ProductsListByCategory = data;
      })
    }



    
  }
  ngOnInit(): void {
    // data from calss
    // this.ProductsListByCategory=this.service.getProductsByCatID(this.ReceviedCategoryID);
    // this.AllProducts=this.service.getAllProducts();

    // lab6_api
    this.prdAPIService.getAllProducts().subscribe(data => {
      this.ProductsListByCategory = data;
    })

  }
  // Lab3
  // private showCategoriesByID() {
  //   if (this.ReceviedCategoryID == 0) {
  //     this.ProductsListByCategory = Array.from(this.products);
  //     console.log(this.ProductsListByCategory);

  //     return;
  //   }
  //   this.ProductsListByCategory = this.products.filter(prod => prod.CateogryID == this.ReceviedCategoryID);
  //   console.log(this.ProductsListByCategory);
  // }
  //step-4 to get total price of any product

  // to show product that user selected in table _lab3
  ShowProduct(myprod: IProduct, amount: any, priceProduct: number) {
    if (myprod.Quantity >= amount && myprod.Quantity > 0) {
      this.addToCart.emit(myprod);
      myprod.Quantity -= Number(amount);
      console.log("avalible Quantity" + myprod.Quantity);
      const isIdRepeated = this.ListsingleProducts.some(p => p.products.id === myprod.id);
      console.log(isIdRepeated);
      // total price

      if (!isIdRepeated) {
        priceProduct = (myprod.Price * amount);
        this.ListsingleProducts.push({ products: myprod, count: amount, price: priceProduct });

      }
      console.log(this.ListsingleProducts);
    }
  }
  ngAfterViewInit(): void {
    this.TotalOrderPrice();
  }
  // to display total price of all products that user selected_lab3
  TotalOrderPrice() {
    if (this.cost) {
      let total = 0;
      this.cost.nativeElement.value = "";
      this.ListsingleProducts.map(obj => {

        total += (obj.products.Price * obj.count)

        console.log(total);
        return total;
      }
      );

      this.cost.nativeElement.value = total;
    }
  }
  // to delete product that user selected_lab3
  deleteProduct(prodID: number) {
    var confirmVariable = confirm("Are you sure you want to delete?");
    if (confirmVariable) {
      // const newProduct = this.ListsingleProducts.find(object => object.products.ID === prodID);
      // console.log(newProduct);
      let index = this.ListsingleProducts.findIndex(function (pr) {
        pr.products.id=== prodID
      })
      this.ListsingleProducts.splice(index,1)
      return this.ListsingleProducts;

    }
    else {
      return this.ListsingleProducts;
    }
  }
  openPrdDetails(prodid: number) {
    this.myrouter.navigate(['ProductData/Products', prodid])
    console.log(prodid);

  }
  EditProduct(prodid: number) {
    this.myrouter.navigate(['NewProduct', prodid])
   }

  

// to delete product that user from api
  deleteProductApi(prodID: number) {
    var confirmVariable = confirm("Are you sure you want to delete?");
  if (confirmVariable)
   {
    this.prdAPIService.deletProduct(prodID).subscribe(
      (response) => {
        console.log('Product deleted successfully.');
        // this.ProductsListByCategory=response as any;
        this.myrouter.navigate(['Products']);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
    }
  }



}




