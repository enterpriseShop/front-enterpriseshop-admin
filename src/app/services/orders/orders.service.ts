import { Injectable } from '@angular/core';
import { Order } from '../../models/Orders.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private url: string = environment.BASE_URL;
  private uri: string = 'api/v1';
  private flag: string = 'order';

  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<Order[]>(`${this.url}/${this.flag}`);
  }

  getOrdersById(order_id: number) {
    return this.http.get<Order>(`${this.url}/${this.flag}/${order_id}`);
  }
}
