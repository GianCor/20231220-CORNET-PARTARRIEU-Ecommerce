import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  arrCart: any = [];
  index: number = 0;

  URL_API = 'https://api.escuelajs.co/api/v1/products';
  URL_API_Filtered: any = this.URL_API;
  filtro= '';

  getProducts(): Observable<any> {
    console.log(this.http.get(this.URL_API));
    return this.http.get(this.URL_API);
  }

  getSingleProduct(id: any) {
    return this.http.get(this.URL_API + '/' + id);
  }

  postLocalStorage(product: any) {
    this.arrCart = localStorage.getItem('cart');
    this.arrCart = this.arrCart != null ? JSON.parse(this.arrCart) : [];
    this.index = this.arrCart.findIndex(function (objeto: any) {
      return objeto.id === product.id;
    });
    if (this.index != -1) {
      this.arrCart[this.index].amount += product.amount;
    } else {
      this.arrCart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.arrCart));
    console.log(this.arrCart);
  }

  setFiltro(filtro: string){
    this.filtro = filtro;
  }
  obtenerFiltro(){
    return this.filtro;
  }

  setProductsFiltered(filter:string){
    this.URL_API_Filtered = filter;
    this.getProductsFiltered();
  }

  getProductsFiltered():Observable<any>{
    return this.http.get(this.URL_API + '/?' + this.URL_API_Filtered);
  }
}
