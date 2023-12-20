import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  URL_API= 'https://api.escuelajs.co/api/v1/products'
  
  getProducts():Observable<any>{
    console.log(this.http.get(this.URL_API))
    return this.http.get(this.URL_API)
  }
}
