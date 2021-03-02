import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailssComponent } from './productdetailss/productdetailss.component';
import { HttpClientModule } from '@angular/common/http';
import { MaindescComponent } from './maindesc/maindesc.component';
import { DetsilsnavbarComponent } from './detsilsnavbar/detsilsnavbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductavbarComponent } from './productavbar/productavbar.component';

@NgModule({
  declarations: [ProductdetailssComponent, MaindescComponent, DetsilsnavbarComponent, CartComponent, ProductavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductdetailsRoutingModule
  ]
})
export class ProductdetailsModule { }
