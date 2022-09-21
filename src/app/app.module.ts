import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { WakandaComponent } from './component/wakanda/wakanda.component';
import { EnigmeComponent } from './component/enigme/enigme.component';
import { EshopComponent } from './component/eshop/eshop.component';
import { MonComptComponent } from './component/mon-compt/mon-compt.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AsideComponent } from './component/aside/aside.component';
import { ProductsComponent } from './component/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    WakandaComponent,
    EnigmeComponent,
    EshopComponent,
    MonComptComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
