import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products$;
  
  constructor(private productService: ProductService) { 
    this.products$ = this.productService.getAll().valueChanges();
  }

}
