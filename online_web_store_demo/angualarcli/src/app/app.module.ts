// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Libraries
import { MdToolbarModule, MdCardModule, MdButtonModule, MdGridListModule, MdChipsModule, MdListModule } from '@angular/material';
// Ng Face Libaries
import {DataListModule} from 'primeng/primeng';
// App Components
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
// Services
import { ProductService } from './Services/product.service';
import { ShoppingCartService } from './Services/shopping-cart.service';
// Router
import { app_RouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    //Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    //Angular Material
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdChipsModule,
    MdListModule,
    //Ng Prime
    DataListModule,
    //My Custom
    app_RouterModule
  ],
  providers: [ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
