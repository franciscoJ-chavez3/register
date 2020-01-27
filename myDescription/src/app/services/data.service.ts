import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
    {
      id: '1',
      productName: 'Ninja Stars',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
    {
      id: '2',
      productName: 'Ninja Stars2',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
    {
      id: '3',
      productName: 'Ninja Stars3',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
    {
      id: '4',
      productName: 'Ninja Stars4',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
    {
      id: '5',
      productName: 'Ninja Stars5',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
    {
      id: '6',
      productName: 'Ninja Stars6',
      productNameURL: 'NinjaStars',
      productDescription: 'Sharp and Pointy',
      additionalInfo: 'in an episode of South Park',
      price: '$100.99'
    },
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Observable<Product> {
    //search thru products and return product where id matches product id
    return of (this.products.find(product => product.id === id));
  }
}
