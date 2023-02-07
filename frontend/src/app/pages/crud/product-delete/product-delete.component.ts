import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  productId: string;

  productForm: FormGroup;

  get productFormControl() {
    return this.productForm.controls;
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.productId).subscribe((product) => {
      this.productForm.controls['name'].setValue(product.name);
      this.productForm.controls['price'].setValue(product.price);
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.productId).subscribe((product) => {
      this.productService.showMessage(
        'Produto excluído com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
