import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(public productsService: ProductsService) {}
  arrProducts: any = [];
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((e)=>{
      console.log(e)
      this.arrProducts = e
    })
  }
}
