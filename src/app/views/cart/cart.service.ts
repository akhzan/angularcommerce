import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from './cart'

@Injectable()
export class CartService {
  carts = new BehaviorSubject<Cart[]>([]);
  constructor() { 
    
  }

  pushCart(cart: Cart) {
    this.carts.getValue().find(x => x.id == cart.id) == undefined ? this.carts.next(this.carts.getValue().concat([cart])) : null;
  }
}
