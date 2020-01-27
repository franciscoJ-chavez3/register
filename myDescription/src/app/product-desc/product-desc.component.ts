import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
  product: Product;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //grab the id number
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(sku: string) {
    //find info via service
    console.log(sku);
    this.dService.getProduct(sku).subscribe(
      x => this.product = x
    )
  }

}
