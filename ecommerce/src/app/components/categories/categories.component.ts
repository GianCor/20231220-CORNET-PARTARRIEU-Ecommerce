import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id!: string;
  arrProducts: any = [];

  constructor(public categoryService: CategoriesService, private route: ActivatedRoute, public productsService: ProductsService) { }

  filter!:string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('category')!;
      this.productsService.setCategory(this.id);
      
      this.productsService.getURL().subscribe((e)=>{
        this.filter = e;
        this.productsService.getProductsFiltered(this.filter).subscribe((e)=>{
          this.arrProducts = e
        })
      })
    });
  }
}