import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
  }


  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 9.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      }
  ];

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('App initialted...');
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
