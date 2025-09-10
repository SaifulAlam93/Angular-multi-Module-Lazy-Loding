import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private products: Product[] = [
  //   { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1200, imageUrl: '/assets/bird1.jpg' },
  //   { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 800, imageUrl: '/assets/bird1.jpg' },
  //   { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 200, imageUrl: '/assets/bird1.jpg' },
  //   { id: 4, name: 'Camera', description: 'Professional DSLR camera', price: 1500, imageUrl: '/assets/bird1.jpg' },
  // ];

  // constructor() { }

  // getProducts(): Observable<Product[]> {
  //   return of(this.products);
  // }

  // getProductById(id: number): Observable<Product | undefined> {
  //   return of(this.products.find(p => p.id === id));
  // }

  private apiUrl = 'http://localhost:5000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
