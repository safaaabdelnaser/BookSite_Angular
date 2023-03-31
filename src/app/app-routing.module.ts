import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { UserDataComponent } from './Components/Admin/user-data/user-data.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DataOfProductsComponent } from './Components/data-of-products/data-of-products.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { IndexPageComponent } from './Components/index-page/index-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { UserLogInComponent } from './Components/user-log-in/user-log-in.component';
import { UserRigisterComponent } from './Components/user-rigister/user-rigister.component';
import { UserAuthGuard } from './Guards/user-auth.guard';

const routes: Routes = [
// routing page for website _lab4
  {
    path: '', component: IndexPageComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },// Default path
      { path: 'Home', component: HomePageComponent },
      { path: 'Products', component: DataOfProductsComponent },
      { path: 'Orders', component: OrderMasterComponent,canActivate:[UserAuthGuard] },
      { path: 'AboutUs', component: AboutUsComponent },
      { path: 'ContactUs', component: ContactUsComponent },
      { path: 'NewProduct', component: AddNewProductComponent },
      { path: 'NewProduct/:pid', component: AddNewProductComponent },
      { path: 'UserData', component: UserDataComponent },
      {
        path:"User",
        loadChildren:()=>import("src/app/Components/user/user.module").then(m => m.UserModule)
      },
      {
        path:"ProductData",
        loadChildren:()=>import("src/app/Components/product-m/product-m.module").then(m => m.ProductMModule)
      }
    ]
  },
  { path: 'SignUp', component: UserRigisterComponent },
  { path: 'SignIn', component: UserLogInComponent },
  { path: 'SignOut', component: UserLogInComponent },
  { path: 'ShopingCart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];
RouterModule.forRoot(routes, { enableTracing: true })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
