import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1200, imageUrl: '/assets/bird1.jpg' },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 800, imageUrl: '/assets/bird1.jpg' },
    { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 200, imageUrl: '/assets/bird1.jpg' },
    { id: 4, name: 'Camera', description: 'Professional DSLR camera', price: 1500, imageUrl: '/assets/bird1.jpg' },
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
