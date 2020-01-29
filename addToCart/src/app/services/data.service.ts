import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsAdded: Iproduct[] = [];
  private products: Iproduct[] = [
    {
      pID: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      pInfo: 'They can cause a paper cut',
      pPrice: '$1.00',
      pQty: 0
    },
    {
      pID: '2',
      pName: 'Ninja Starzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      pInfo: 'They can cause a paper cut',
      pPrice: 'Free',
      pQty: 0
    },
    {
      pID: '3',
      pName: 'Ninja Starszzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      pInfo: 'They can cause a paper cut',
      pPrice: '$1111.00',
      pQty: 0
    },
    {
      pID: '4',
      pName: 'Ninja Starszzzzzzzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      pInfo: 'They can cause a paper cut',
      pPrice: '$111.00',
      pQty: 0
    },
    {
      pID: '5',
      pName: 'Ninja ',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      pInfo: 'They can cause a paper cut',
      pPrice: '$11.00',
      pQty: 0
    },
    {
      pID: '6',
      pName: 'Ninja6 ',
      pNameURL: 'NinjaStars6',
      pDesc: 'Something to do with Ninja Stars6',
      pInfo: 'They can cause a paper cut6',
      pPrice: '$11.006',
      pQty: 0
    }
  ];
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  addItem2Cart(cartItem: Iproduct) {
    
    this.itemsAdded.push(cartItem);
    console.log(this.itemsAdded);
  }

  getCartItems(): Iproduct[] {
    return this.itemsAdded;
  }

  emptyCart() {
    this.itemsAdded.length = 0;
  }

  removeItemFromCart(itemToRemove: Iproduct) {
    //search for product and remove item
    //find index location of product
    const index = this.findItemInCart(itemToRemove);

    //perform splice
    this.itemsAdded[index].pQty = 0;
    this.itemsAdded.splice(index, 1);

  }

  findItemInCart(id: Iproduct): number {
    return this.itemsAdded.indexOf(id);
  }

  
}
