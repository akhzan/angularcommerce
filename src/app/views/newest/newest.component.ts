import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';
import { Cart } from '../../views/cart/cart';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss'],
})
export class NewestComponent implements OnInit {
  constructor(private data: CartService) { }

  ngOnInit() {

  }

}
