import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  get product(): IProduct {
    const product = this.productForm.value;
    return product;
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage(
        'Produto criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud']);
      console.log(this.product);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
