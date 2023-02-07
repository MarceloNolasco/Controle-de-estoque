import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { ProductCreateComponent } from '../crud/product-create/product-create.component';
import { ProductDeleteComponent } from '../crud/product-delete/product-delete.component';
import { ProductUpdateComponent } from '../../shared/components/product/product-update/product-update.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/delete/:id', component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
