import { Http } from '@angular/http';
import { ProductModel } from './../Interfaces/ProductModel';
import { ShoppinngCartModel } from './../Interfaces/ShoppingCartModel';
import 'rxjs/add/operator/toPromise';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ShoppingCartService {
  private GetShoppingCartUrl: string;
  private AddShoppingCartUrl: string;
  private CheckoutShoppingCartUrl: string;

  public apiCart: any = {};
  public cartsize: number;
  public cartTotal: number;

  constructor(private http: Http) {
    const urls = document.getElementById('urls');
    this.GetShoppingCartUrl = '/api' + urls.dataset.getCart;
    this.AddShoppingCartUrl = '/api' + urls.dataset.updateCart;
    this.CheckoutShoppingCartUrl = '/api' + urls.dataset.checkoutCart;
  }

  GetCart() {
    this.http.get(this.GetShoppingCartUrl).map(res => res.json()).toPromise().then((result) => {
      console.log(result);
      this.apiCart = result;
      this.cartTotal = this.apiCart.cartContent.reduce((acc, cur) => { return acc += cur.qty * cur.price; }, 0);
      this.cartsize = this.apiCart.cartContent.reduce((acc, cur) => { return acc += cur.qty; }, 0);
    });
  }

  AddToCart(product: ProductModel) {
    const promise = this.http.post(this.AddShoppingCartUrl, { productId: product.id, qty: 1 }).toPromise();
    promise.then(() => {
      this.GetCart();
    });
    return promise;
  }

  CheckoutCart() {
    this.http.post(this.CheckoutShoppingCartUrl, { id: this.apiCart.id }).toPromise().then(() => {
      this.GetCart();
    });
  }
}
