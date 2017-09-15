import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../views/cart/cart'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  carts: Cart[]
  constructor() { 

  }

  ngOnInit() {
    this.carts = [
      {
        id: 1,
        brand: 'Brekele',
        name: 'Summer Top Bahamas',
        price: 249000
      },{
        id: 2,
        brand: 'Brekele',
        name: 'Winter Top Bahamas',
        price: 149000
      },{
        id: 3,
        brand: 'Brekele',
        name: 'Spring Top Bahamas',
        price: 219000
      },{
        id: 4,
        brand: 'Brekele',
        name: 'Fall Top Bahamas',
        price: 269000
      },{
        id: 5,
        brand: 'Brekele',
        name: 'Beach Top Bahamas',
        price: 349000
      }
    ]
  }
}
