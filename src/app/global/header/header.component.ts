import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';
import { Cart } from '../../views/cart/cart';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carts:Cart[]  
  imgDummy:string
  isCartOpen:boolean = false
  constructor(private data: CartService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.data.carts.subscribe(carts => {
      carts.length > 0 ?
        this.snackBar.open('Ditambahkan ke Tas : ', carts[carts.length - 1].name, {
          duration: 800,
          extraClasses: ['snackbar-extra']
        }) : null
      this.carts = carts
    })
    this.imgDummy = 'https://dynamic.zacdn.com/zSz5VjV6G96Hh-MQVZ6oloVIaj8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/lois-jeans-9768-7348931-4.jpg'
  }

  openMinicart() {
    this.isCartOpen = true
  }

  closeMinicart() {
    this.isCartOpen = false
  }

}
