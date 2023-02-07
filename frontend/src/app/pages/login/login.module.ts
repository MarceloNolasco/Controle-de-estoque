import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
