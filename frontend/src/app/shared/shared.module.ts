import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomeLayoutComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomeLayoutComponent,
  ],
})
export class SharedModule {}
