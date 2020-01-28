import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    },
    {
      id: '2',
      pName: 'Ninja Stars2',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    },
    {
      id: '3',
      pName: 'Ninja Stars3',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    },
    {
      id: '4',
      pName: 'Ninja Stars4',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    }
  ];
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<IProduct> {
    return of(this.products.find(x => x.id === sku));
  }
}
