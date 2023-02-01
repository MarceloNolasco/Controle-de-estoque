import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductComponent } from './home-product.component';

const routes: Routes = [{ path: '', component: HomeProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProductRoutingModule {}
