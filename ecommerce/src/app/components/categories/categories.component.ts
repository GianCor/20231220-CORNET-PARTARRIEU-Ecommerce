import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id: any;
  arrProducts:any = [];
  
  
  
  constructor(public categoryService: CategoriesService, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    
    console.log('hola');
    
    this.id = this.route.snapshot.paramMap.get('category');
    console.log(this.id);
      
    this.categoryService.getProductByCategory(this.id).subscribe((e)=>{
      this.arrProducts = e;
      console.log(e);
      
    })    
  }
}
