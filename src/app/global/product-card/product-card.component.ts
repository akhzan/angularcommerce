import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../views/cart/cart'
import { CartService } from './../../views/cart/cart.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() cart: Cart
  addToCart(cart) {
    this.data.pushCart(cart)
  }
  constructor(private data: CartService) { }

  ngOnInit() {
  }

}
