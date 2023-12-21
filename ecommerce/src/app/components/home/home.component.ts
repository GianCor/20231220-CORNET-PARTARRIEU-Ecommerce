import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filter!: string;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  id!: string;

  arrProducts: any = [];
  ngOnInit(): void {
    // this.productsService.getProducts().subscribe((e) => {
    //   console.log(e);
    //   this.arrProducts = e;
    // });

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('category')!;
      this.productsService.setCategory(this.id);
      this.productsService.restablecerFiltros();
      this.productsService.getURL().subscribe((e)=>{
        this.filter = e;
        this.productsService.getProductsFiltered(`${this.filter}categoryId=${this.id}`).subscribe((e)=>{
          console.log(e)
          this.arrProducts = e
        })
      })
    });
  }
}
