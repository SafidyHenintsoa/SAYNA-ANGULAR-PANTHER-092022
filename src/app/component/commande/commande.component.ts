import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {
  productsCommande: any;
  grandTotal!: number;

  constructor(private cartService: CarteService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((item) => {
      this.productsCommande = item;
      this.calculTotal();
    });
  }
  calculTotal(): void {
    this.grandTotal = 0;
    this.productsCommande.forEach((item: any) => {
      this.grandTotal += item.Prix;
    });
  }
}
