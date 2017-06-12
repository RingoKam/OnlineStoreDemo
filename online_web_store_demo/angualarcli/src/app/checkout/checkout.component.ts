import { ProductModel } from './../Interfaces/ProductModel';
import { ShoppinngCartModel } from './../Interfaces/ShoppingCartModel';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ShoppingCartService } from './../Services/shopping-cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    this.shoppingCartService.GetCart();
  }

  checkOut() {
    this.shoppingCartService.CheckoutCart();
    this.router.navigate(['/success']);
  }
}
