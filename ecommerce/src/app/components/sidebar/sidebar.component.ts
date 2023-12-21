import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(public productService: ProductsService, private route: ActivatedRoute){}

  categoryID!: number;
  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.categoryID = +params.get('category')!;
      console.log(this.categoryID);
      
    });
  }

  filterText: string = '';
  title: string = '';
  price: string = '';
  priceMin: string = '';
  priceMax: string = '';

  filter(){
    this.title = this.title.trim().replace(/[' ']/g, "_");
    console.log(this.title);
    if(this.priceMin === ''){
      this.priceMin = '1';
    }
    if(this.priceMax === ''){
      this.priceMax = '9999999999'
    }
    this.filterText = `title=${this.title}&price=${this.price}&price_min=${this.priceMin}&price_max=${this.priceMax}`;

    this.productService.setURL(this.filterText);
  }


}
