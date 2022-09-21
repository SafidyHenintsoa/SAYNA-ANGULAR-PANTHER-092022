import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  p: number = 1;
  constructor(private api: ProductsService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
