import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public productsServices: ProductsService, private router: Router) {}
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


  flag = false;
  comprar() {
    if(this.total >0){
      this.flag = true;
      setTimeout(()=>{
        this.flag=false
        this.router.navigate(['/home/0']);
      }, 2500)
    }
    localStorage.clear();
    this.list = [];
    this.calculateTotal();
    this.productsServices.cantidad = 0;
  }
}
