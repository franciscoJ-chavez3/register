import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private dService: DataService) {

   }

  ngOnInit() {
    //bind product array from dataService
    this.products = this.dService.getProducts();
  }

}
