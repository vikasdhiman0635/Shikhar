import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterPipe } from './Pipe/filter.pipe';

@NgModule({
  declarations: [
    AllProductsComponent,
    NavBarComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
