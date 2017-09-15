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
  imgDummy:string
  constructor(private data: CartService) { }

  ngOnInit() {
    this.data.carts.subscribe(carts => this.carts = carts)
    this.imgDummy = 'https://dynamic.zacdn.com/zSz5VjV6G96Hh-MQVZ6oloVIaj8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/lois-jeans-9768-7348931-4.jpg'
  }

  openMinicart() {
    console.log('ntaps')
  }

}
