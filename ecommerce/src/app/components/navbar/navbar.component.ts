import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public categoryService: CategoriesService){}
  categories :any = []
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((e)=>{
      this.categories = e
    })
  }
}
