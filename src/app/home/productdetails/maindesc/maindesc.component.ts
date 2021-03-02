import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';
import { Product } from '../Class/product';

@Component({
  selector: 'app-maindesc',
  templateUrl: './maindesc.component.html',
  styleUrls: ['./maindesc.component.css']
})
export class MaindescComponent implements OnInit {

  id:any;

  product:any;

  productcategory:any;

  allproducts:any;

  cart:any=[];

  i=0;


  products=new Product();
  todos = [
    {
      id:"1",
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: "64",
      category: "electronics",
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    }
  ];

  constructor(private aroute:ActivatedRoute,private service:ProductsService,private router:Router) { }

  ngOnInit()
  {
    var retervicedata=localStorage.getItem("cart");
    this.products=JSON.parse(retervicedata);
    console.log(this.products);
    this.aroute.paramMap.subscribe((params: ParamMap) => {
      let getid = parseInt(params.get('id'));
      this.id = getid;
      this.getproductbyid();
    });
  }

  getproductbyid()
  {
    this.service.getdatabyid(this.id).subscribe((Response)=>
    {
      // console.log(Response);
      this.product=Response;
      this.productcategory=this.product.category;
      this.getallproductbycategory();
    });
  }


  getallproductbycategory()
  {
    this.service.getproductbycategory(this.productcategory).subscribe((Response)=>
    {
      // console.log(Response);
      this.allproducts=Response;
    })
  }

  getdetsils(id)
  {
    // console.log(id);
    localStorage.setItem('id',id);
    this.router.navigate(['/productDetails']);
  }

  addtocart()
  {
    // console.log(this.product);
    let form={
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      category: this.product.category,
      description: this.product.description,
      image:this.product.image
    }
    this.todos.push(form);
    localStorage.setItem("cart",JSON.stringify(this.todos));
    this.router.navigate(['/productDetails/cart']);
    // this.products=form;
    // console.log(this.products);
  }

}
