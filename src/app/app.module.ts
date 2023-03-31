import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DataOfProductsComponent } from './Components/data-of-products/data-of-products.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { IndexPageComponent } from './Components/index-page/index-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { StyleOfCardDirective } from './Directives/style-of-card.directive';
import { BorderRaduisDirective } from './Directives/border-raduis.directive';
import { DateOperationPipe } from './Pipes/date-operation.pipe';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CerditCardPipe } from './Pipes/cerdit-card.pipe';
import {HttpClientModule} from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { UserRigisterComponent } from './Components/user-rigister/user-rigister.component';
import { CartComponent } from './Components/cart/cart.component';
import { UserDataComponent } from './Components/Admin/user-data/user-data.component';
import { UserLogInComponent } from './Components/user-log-in/user-log-in.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DataOfProductsComponent,
    OrderMasterComponent,
    HomePageComponent,
   
    IndexPageComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    StyleOfCardDirective,
    BorderRaduisDirective,
    DateOperationPipe,
    NationalIDPipe,
    CerditCardPipe,
    AddNewProductComponent,
    UserRigisterComponent,
    CartComponent,
    UserDataComponent,
    UserLogInComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
