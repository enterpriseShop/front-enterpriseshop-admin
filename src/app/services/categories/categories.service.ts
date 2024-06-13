import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Category } from '../../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // private url: string = environment.BASE_URL;
  private url: string = 'http://localhost:3000';
  private uri: string = 'api/v1';
  private flag: string = 'categories'

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    // return this.http.get<Product[]>(`${this.url}/${this.uri}/${this.flag}`);
    return this.http.get<Category[]>(`${this.url}/${this.flag}`);
  }

  getCategoriesById(product_id: number) {
    // return this.http.get<Product[]>(`${this.url}/${this.uri}/${this.flag}`);
    return this.http.get<Category>(`${this.url}/${this.flag}/${product_id}`);
  }
}
