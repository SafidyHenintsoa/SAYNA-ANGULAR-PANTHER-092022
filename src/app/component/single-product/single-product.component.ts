import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  product: any;
  constructor(private api: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.api.getProductId(productId).subscribe((res) => {
      this.product = res;
    });
  }
}
