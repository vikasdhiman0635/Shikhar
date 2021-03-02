import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from "../../Service/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allproducts:any;

  allcategory:any;


  productname:any;
  producttype:any;

  constructor(private service:ProductsService,private router:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.getallproducts();

    this.spinner.show();
  }
  
  getallproducts()
  {
    this.service.getallproducts().subscribe((Response)=>
    {
      console.log(Response);
      this.allproducts=Response;
          this.getallcategories();
    });
  }

  getallcategories()
  {
    this.service.getallcategories().subscribe((Response)=>
    {
      // console.log(Response);
      this.allcategory=Response;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    })
  }

  getdetsils(id)
  {
    // console.log(id);
    localStorage.setItem('id',id);
    this.router.navigate(['/productDetails']);
  }

}
