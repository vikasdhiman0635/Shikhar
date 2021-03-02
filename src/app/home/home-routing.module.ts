import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {
    path:'', redirectTo:'allproducts', pathMatch:'full'
  },
  {
    path:'allproducts', component:AllProductsComponent
  },
  {
    path:'productDetails',
    loadChildren: ()=>import('./productdetails/productdetails.module').then(m=>m.ProductdetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
