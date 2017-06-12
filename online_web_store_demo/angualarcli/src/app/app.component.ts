import { ProductModel } from './Interfaces/ProductModel';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './Services/shopping-cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public cartsize;

  constructor(public shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCartService.GetCart();
  }
}
