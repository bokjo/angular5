import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  // selector: 'product-detail',   // not needed for selector since we will just use it in the router
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
