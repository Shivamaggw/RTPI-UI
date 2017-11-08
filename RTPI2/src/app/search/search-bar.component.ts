import { Component, OnInit } from '@angular/core';
import { Product } from './search-product';
import { ProductService } from './search-product.service';

@Component({

  templateUrl: './search-bar.template.html',
  styleUrls: ['./search-bar.style.css']
})
export class SearchBarComponent implements OnInit {
	searchProduct: Product[];
	
	constructor(private productService: ProductService) {}
	async getProduct() {
		this.searchProduct = await this.productService.getSearchedProduct();
		this.productService.getSearchedProduct().then(data => this.searchProduct=data)
		//this.searchProduct={ title: "Sample product title",  price: 2000 };
		//this.searchProduct = this.productService.getSearchedProduct().subscribe(data=> this.searchProduct= data);
	}

	ngOnInit() {
		this.getProduct();
	}
}
