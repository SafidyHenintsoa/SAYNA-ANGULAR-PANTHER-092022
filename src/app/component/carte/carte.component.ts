import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss'],
})
export class CarteComponent implements OnInit {
  products: any;
  grandTotal!: number;

  constructor(private cartService: CarteService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = 0;
      this.products.forEach((item: any) => {
        this.grandTotal += item.Prix;
      });
    });
  }

  removeItem(productId: any) {
    if (confirm('Es tu sure de supprimer ce produit')) {
      this.cartService.removeCartItem(productId).subscribe(() => {
        alert('Suppression avec succes');
        window.location.reload();
      });
    }
  }
}
