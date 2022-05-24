import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import the product interface (type) so that the items in a cart are of interface product type
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //items of interface type Product array
  items: Product[] = [];

  //method to add a product to the items array
  addToCart(product: Product){
    this.items.push(product);
  }

  // method collects in the cart and returns itsm with the associated quantity
  getItems(){
    return this.items;
  }

  // returns an emtpy array of items (empties the cart)
  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) { }

  //get shipping prices using the httpclient method
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
