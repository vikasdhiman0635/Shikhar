import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productavbar',
  templateUrl: './productavbar.component.html',
  styleUrls: ['./productavbar.component.css']
})
export class ProductavbarComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cart()
  {
    this.router.navigate(['/productDetails/cart']);
  }

}
