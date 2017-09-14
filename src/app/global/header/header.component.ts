import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';
import { Cart } from '../../views/cart/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carts:Cart[]  
  constructor(private data: CartService) { }

  ngOnInit() {
    this.data.carts.subscribe(carts => this.carts = carts)
  }

}
