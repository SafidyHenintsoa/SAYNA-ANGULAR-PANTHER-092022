import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarteService } from 'src/app/services/carte.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  p: number = 1;

  constructor(
    private api: ProductsService,
    private cartService: CarteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addToCart(productItem: any) {
    this.cartService.addToCart(productItem).subscribe();
    this.router.navigateByUrl('carte');
  }
}
