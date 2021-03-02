import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data:any;

  total:any;

  constructor() { }

  ngOnInit()
  {
    this.data=JSON.parse(localStorage.getItem("cart"));
    console.log(this.data);
  }

  remove(id)
  {
    console.log(id);
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(this.data[0]));
  }

}
