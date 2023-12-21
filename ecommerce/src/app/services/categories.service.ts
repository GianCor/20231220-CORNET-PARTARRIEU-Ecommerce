import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  URL_API= 'https://api.escuelajs.co/api/v1/categories'
  
  getProductByCategory(id: string):Observable<any>{
      return this.http.get(`${this.URL_API}/${id}/products`)
  }

  getCategories(){
    return this.http.get(this.URL_API)
  }
}
