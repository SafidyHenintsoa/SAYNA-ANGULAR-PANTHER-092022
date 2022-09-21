import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('http://localhost:3000/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductId(id: number) {
    return this.http.get<any>('http://localhost:3000/products/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
