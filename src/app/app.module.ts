import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './global/shop/shop.component';
import { NewestComponent } from './views/newest/newest.component';
import { CartComponent } from './views/cart/cart.component';

import { CartService } from './views/cart/cart.service';
import { MdIconRegistry } from '@angular/material';
import { ProductCardComponent } from './global/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    NewestComponent,
    CartComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'newest', component: NewestComponent },
      { path: 'popular', component: NewestComponent },
      { path: 'tee', component: NewestComponent },
      { path: 'shirt', component: NewestComponent },
      { path: 'jacket', component: NewestComponent },
      { path: 'acc', component: NewestComponent },
      { path: 'discount', component: NewestComponent },
      { path: 'limited', component: NewestComponent }
    ])
  ],
  providers: [
    CartService,
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
