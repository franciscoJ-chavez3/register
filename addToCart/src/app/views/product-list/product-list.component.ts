import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Iproduct[] = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.products = this.ds.getProducts();
  }

  add2Cart(i: Iproduct){
    this.ds.addItem2Cart(i);
  }

}
