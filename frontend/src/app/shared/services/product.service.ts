import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  create(product: IProduct) {
    throw new Error('Method not implemented.');
  }
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, css: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [css],
    });
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.apiurl}/products`, product);
  }

  readProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiurl}/products`);
  }

  readById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiurl}/products/${id}`);
  }

  update(product: IProduct, id: string): Observable<IProduct> {
    return this.http.put<IProduct>(
      `${environment.apiurl}/products/${id}`,
      product
    );
  }

  delete(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${environment.apiurl}/products/${id}`);
  }
}
