import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  arrCart: any = [];
  index: number = 0;
  categoryID = new BehaviorSubject<string>('');
  URL_API = 'https://api.escuelajs.co/api/v1/products';
  URL_API_Filtered = new BehaviorSubject<string>('');
  cantidad: number =0;

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

  setURL(filter:string){
    this.URL_API_Filtered.next(filter);
  }

  getURL():Observable<string>{
    return this.URL_API_Filtered.asObservable();
  }

  setCategory(category: string) {
    this.categoryID.next(category);
  }

  getCategory(): Observable<any> {
    return this.categoryID.asObservable();
  }

  getProductsFiltered(filter:string):Observable<any>{
    return this.http.get(this.URL_API + '/?' + filter);
  }

  restablecerFiltros(){
    this.URL_API_Filtered.next('');
  }
}
