import { Component, OnInit } from '@angular/core';
import { CartService } from '../../views/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  message:string;  
  constructor(private data: CartService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      console.log(message)
      this.message = message
    }, error => console.log('ERROR: ' +error))
  }

}
