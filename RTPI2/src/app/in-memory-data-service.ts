import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const product = [
      						{ title: "hbvhx",  price: 2000, image:"https://images-na.ssl-images-amazon.com/images/I/519B6dlFjLL._SX466_.jpg" }
      					];
      	return {product};
	}
}