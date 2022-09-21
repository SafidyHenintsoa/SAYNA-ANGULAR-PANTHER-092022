import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { EnigmeComponent } from './component/enigme/enigme.component';
import { EshopComponent } from './component/eshop/eshop.component';
import { MonComptComponent } from './component/mon-compt/mon-compt.component';
import { WakandaComponent } from './component/wakanda/wakanda.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'wakanda', component: WakandaComponent },
  { path: 'enigme', component: EnigmeComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'monCompt', component: MonComptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
