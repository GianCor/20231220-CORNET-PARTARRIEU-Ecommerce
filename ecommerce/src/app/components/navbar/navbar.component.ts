import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public categoryService: CategoriesService, public productsServices: ProductsService){}
  categories :any = []
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((e)=>{
      this.categories = e
    })
  }
  cantidad :number = this.productsServices.cantidad
}
