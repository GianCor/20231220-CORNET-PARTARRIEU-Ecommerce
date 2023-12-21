import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public productService: ProductsService){}

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
