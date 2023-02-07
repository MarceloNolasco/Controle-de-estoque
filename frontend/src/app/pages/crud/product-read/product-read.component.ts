import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  products!: IProduct[];

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.readProduct().subscribe((products) => {
      this.products = products;
    });
  }
}
