import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CarteService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  addToCart(product: Products): Observable<any> {
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    return this.http.post('http://localhost:3000/cart', product);
  }

  getProducts() {
    // return this.productList.asObservable();
    return this.http.get<any>('http://localhost:3000/cart');
  }

  // getTotalPrice(): number {
  //   let cartTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     cartTotal += +a.total;
  //   });
  //   return cartTotal;
  // }

  removeCartItem(productId: any) {
    //   this.cartItemList.map((a: any, index: any) => {
    //     this.cartItemList.splice(index, 1);
    //   });
    //   this.productList.next(this.cartItemList);
    // }
    return this.http.delete('http://localhost:3000/cart/' + productId);
  }
}
