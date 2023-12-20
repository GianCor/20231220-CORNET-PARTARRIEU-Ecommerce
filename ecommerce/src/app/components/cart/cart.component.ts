import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  list: any = [];
  total: number = 0;
  ngOnInit(): void {
    this.list = localStorage.getItem('cart');
    this.list = this.list != null ? JSON.parse(this.list) : [];
    this.list.forEach((e:any)=>{
      this.total += e.price * e.amount
    })
  }
}
