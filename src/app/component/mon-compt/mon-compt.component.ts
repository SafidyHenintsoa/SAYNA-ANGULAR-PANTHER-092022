import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarteService } from 'src/app/services/carte.service';
import { InscritionService } from 'src/app/services/inscrition.service';

@Component({
  selector: 'app-mon-compt',
  templateUrl: './mon-compt.component.html',
  styleUrls: ['./mon-compt.component.scss'],
})
export class MonComptComponent implements OnInit {
  utilisateur: any;
  products: any;
  grandTotal!: number;

  constructor(
    private router: Router,
    private utilisa: InscritionService,
    private cartService: CarteService
  ) {}

  ngOnInit(): void {
    this.utilisateur = this.utilisa.login().subscribe();

    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = 0;
      this.products.forEach((item: any) => {
        this.grandTotal += item.Prix;
      });
    });
  }
  logout() {
    this.router.navigateByUrl('eshop');
  }
}
