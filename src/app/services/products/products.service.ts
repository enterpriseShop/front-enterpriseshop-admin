import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Product } from '../../models/Products.model';
import { Pagination } from '../../models/Pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private url: string = environment.BASE_URL;
  private url: string = 'http://localhost:3000';
  private uri: string = 'api/v1';
  private flag: string = 'products'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(page: number, perPage: number) {
    // return this.http.get<Product[]>(`${this.url}/${this.uri}/${this.flag}`);
    return this.http.get<Pagination<Product>>(`${this.url}/${this.flag}?_page=${page}&_per_page=${perPage}`);
  }

  getProductsById(product_id: number) {
    // return this.http.get<Product[]>(`${this.url}/${this.uri}/${this.flag}`);
    return this.http.get<Product>(`${this.url}/${this.flag}/${product_id}`);
  }

  createProduct(form: Product) {
    return this.http.post<Product>(`${this.url}/${this.flag}`, form);
  }
}
