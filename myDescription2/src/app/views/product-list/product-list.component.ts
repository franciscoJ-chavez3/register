import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services2/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[];
  constructor(private dservice: DataService) { }

  ngOnInit() {
    //attach product list to array from data service
    this.productList = this.dservice.getProducts();
  }

}
