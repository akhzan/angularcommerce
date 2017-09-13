import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss'],
})
export class NewestComponent implements OnInit {
  arg=0
  message:string;

  add = () => {
    this.arg++
    this.data.changeMessage("Hello from Sibling")
  }
  constructor(private data: CartService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
