import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id!: number;
  arrProducts: any = [];

  constructor(public categoryService: CategoriesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('category')!;
      console.log(this);
      

      this.categoryService.getProductByCategory(this.id).subscribe((e) => {
        this.arrProducts = e;
      }); 
    });
  }
}