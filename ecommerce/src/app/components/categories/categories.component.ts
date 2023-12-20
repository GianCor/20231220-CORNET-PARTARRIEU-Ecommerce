import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  arrProducts:any = [];
  
  
  
  constructor(public categoryService: CategoriesService, private route: ActivatedRoute){}
  
  id = this.route.snapshot.params['category'];
  
  ngOnInit(): void {
    
    console.log('hola');
    
    console.log(this.id);
      
    this.categoryService.getProductByCategory(this.id).subscribe((e)=>{
      this.arrProducts = e;
      console.log(e);
    })    
  }
}
