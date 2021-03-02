import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MaindescComponent } from './maindesc/maindesc.component';
import { ProductdetailssComponent } from './productdetailss/productdetailss.component';

const routes: Routes = [
  {
    path:'',redirectTo:'desc',pathMatch:'full'
  },
  {
    path:'desc',component:ProductdetailssComponent
  },
  {
    path:'descss/:id',component:MaindescComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailsRoutingModule { }
