import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Porduct } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Porduct[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll().valueChanges()
      .subscribe(p => this.filteredProducts = this.products = p);
  }

  filter(query: string) {
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnInit() {
  }

}
