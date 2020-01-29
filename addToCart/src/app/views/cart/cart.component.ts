import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Iproduct[];
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.cartItems = this.ds.getCartItems();
  }
  
  removeCartItems(){
    //call service to remove items from cart
    console.log("Empty Cart");
    this.ds.emptyCart();
  }

  removeItem(id: Iproduct) {
    //remove item from array
    this.ds.removeItemFromCart(id);
  }
}
