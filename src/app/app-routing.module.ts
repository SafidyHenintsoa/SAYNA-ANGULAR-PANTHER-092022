import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CarteComponent } from './component/carte/carte.component';
import { CommandeComponent } from './component/commande/commande.component';
import { EnigmeComponent } from './component/enigme/enigme.component';
import { EshopComponent } from './component/eshop/eshop.component';
import { InscriptionCommandeComponent } from './component/inscription-commande/inscription-commande.component';
import { MonComptComponent } from './component/mon-compt/mon-compt.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { WakandaComponent } from './component/wakanda/wakanda.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'wakanda', component: WakandaComponent },
  { path: 'enigme', component: EnigmeComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'monCompt', component: MonComptComponent },
  { path: 'eshop/product/:id', component: SingleProductComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'cart/commande', component: CommandeComponent },
  { path: 'inscription', component: InscriptionCommandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
