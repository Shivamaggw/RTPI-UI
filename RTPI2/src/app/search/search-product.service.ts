import { Injectable } from '@angular/core';
import { Product } from './search-product';
import { Http, Response, Headers	 } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private Url= 'api/searchProductUrl';

	constructor(private http: Http) {}

	getSearchedProduct() : Promise<Product[]> {
		return this.http.get(this.Url).toPromise().then(( response: Response ) => response.json().data as Product[]).catch(this.handleError);
	}

	getSearchedProductObservable(): Observable<Response> {
		return this.http.get(this.Url);
	}
	/*getSearchedProduct() {
		return this.http.get('https://jsonplaceholder.typicode.com/todos').map(( response: Response ) => response.json());
	}
	*/


	private handleError(error: any): Promise<any> {
		console.error("An error occured!", error);
		return Promise.reject(error.message || error);
	}
}
