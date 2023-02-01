import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeProductComponent } from './home-product.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeProductComponent],
})
export class HomeProductModule {}
