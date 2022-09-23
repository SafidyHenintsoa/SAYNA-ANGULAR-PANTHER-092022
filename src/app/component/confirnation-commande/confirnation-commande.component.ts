import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-confirnation-commande',
  templateUrl: './confirnation-commande.component.html',
  styleUrls: ['./confirnation-commande.component.scss'],
})
export class ConfirnationCommandeComponent implements OnInit {
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
}
