import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';


@Component({
  // selector: 'product-detail',   // not needed for selector since we will just use it in the router
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router,
              private _location: Location ) { }

  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    const id = +this._route.snapshot.paramMap.get('id');

    // this.pageTitle += `: ${id}`;
    this._productService.getProduct(id).subscribe(
      product => {
        this.product = product;
        console.log(`PRODUCT id: ${id}`);
        console.log(this.product);
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    console.log('BACK');
    this._router.navigate(['/products']);
    // this._location.back();
  }
}
