import { ProductModel } from './../Interfaces/ProductModel';
import { Injectable, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductService {
  private url: string;
  public Products: any = [];

  constructor(private http: Http) {
    this.url = '/api' + document.getElementById('urls').dataset.getProduct;
  }

  getAllProducts() {
    const result = this.http.get(this.url);
    return result.map(i => i.json());
  }
}
