import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteService } from 'src/app/services/carte.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  product: any;
  constructor(
    private api: ProductsService,
    private route: ActivatedRoute,
    private cartService: CarteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.api.getProductId(productId).subscribe((res) => {
      this.product = res;
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe();
    this.router.navigateByUrl('carte');
  }
}
