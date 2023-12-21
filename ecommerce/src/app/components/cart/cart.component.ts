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
    this.calculateTotal();
  }

  delete(item: any) {
    let index = this.list.findIndex((e: any) => {
      return item.id === e.id;
    });
    if (index !== -1) {
      this.list.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.list));
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = 0;
    this.list.forEach((e: any) => {
      this.total += e.price * e.amount;
    });
  }
}
