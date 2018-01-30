'use strict';

import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../services/product.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {
    this.listFilter = '';
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[];
  filteredProducts: IProduct[];
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('App initialted...');
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
        console.log('PRODUCTS: ' + this.products);
      },
      error => this.errorMessage = <any>error
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    console.log('LOG: ' + this.showImage);
  }

  performFiltering(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotifyRating(message: string): void {
    console.log(message);
    this.pageTitle = 'Product List: ' + message;
  }

}
