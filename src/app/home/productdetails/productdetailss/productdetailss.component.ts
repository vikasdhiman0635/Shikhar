import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetailss',
  templateUrl: './productdetailss.component.html',
  styleUrls: ['./productdetailss.component.css']
})
export class ProductdetailssComponent implements OnInit {

  id:any;
  
  constructor(private router:Router) { }

  ngOnInit()
  {
    this.id=localStorage.getItem("id");
    localStorage.removeItem("id");
    this.router.navigate(['/productDetails/descss',this.id]);
  }

}
