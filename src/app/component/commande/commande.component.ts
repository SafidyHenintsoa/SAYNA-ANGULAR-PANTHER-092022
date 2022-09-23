import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';
import { InscritionService } from 'src/app/services/inscrition.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {
  productsCommande: any;
  grandTotal!: number;
  con!: boolean;

  constructor(
    private cartService: CarteService,
    private connecter: InscritionService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((item) => {
      this.productsCommande = item;
      this.calculTotal();
    });

    this.con = this.connecter.suisConnecte;
  }
  calculTotal(): void {
    this.grandTotal = 0;
    this.productsCommande.forEach((item: any) => {
      this.grandTotal += item.Prix;
    });
  }
}
