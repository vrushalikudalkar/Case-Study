import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { 
    
  }
   
  url = "http://jsonplaceholder.typicode.com/albums"

  getProducts(): Observable<any>{
    return this.http.get(this.url)
  }
}
