import { Injectable } from '@angular/core';

import { IProduct } from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  private _apiUrl = './api/products/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    console.log('FETCHING Products...');
    return this._http.get<IProduct[]>(this._apiUrl)
                      .do(data => console.log('All: ' + JSON.stringify(data)))
                      .catch(this._handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    console.log(`FETCHING only one product with id: ${id}...`);
    return this.getProducts()
               .map((products: IProduct[]) => products.find(product => product.productId === id))
               .catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('Error occurred while fetching the data from the server: ' + err.message);
    return Observable.throw(err.message);
  }
}
