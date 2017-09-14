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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    NewestComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/h', pathMatch: 'full' },
      { path: 'h', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'newest', component: NewestComponent }
    ])
  ],
  providers: [
    CartService,
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
