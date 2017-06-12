import { ShoppingCartService } from './../Services/shopping-cart.service';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Interfaces/ProductModel';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public ProductList: Array<ProductModel>;

  constructor(private productService: ProductService, public shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => this.ProductList = data);
  }

  @Output()
  AddToCart(product: ProductModel) {
    this.shoppingCartService.AddToCart(product);
  }
}
