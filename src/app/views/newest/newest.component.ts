import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';
import { Cart } from '../../views/cart/cart';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss'],
})
export class NewestComponent implements OnInit {
  arg=0
  carts:Cart[]
  cart: Cart;

  add = () => {
    this.cart = {id:1}
    this.arg++
    this.data.pushCart(this.cart)
  }
  constructor(private data: CartService) { }

  ngOnInit() {
    this.data.carts.subscribe(carts => this.carts = carts)
  }

}
