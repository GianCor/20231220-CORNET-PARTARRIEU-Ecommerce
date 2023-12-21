import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent implements OnInit {
  amount: number = 1;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  product: any = {};
  id = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.productsService.getSingleProduct(this.id).subscribe((e) => {
      this.product = e;
    });
  }
  addToCart(producto: any) {
    producto["amount"]=this.amount;
    this.productsService.postLocalStorage(producto);
    this.productsService.cantidad += this.amount;
  }
  plus() {
    this.amount++;
  }
  minus() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
}
