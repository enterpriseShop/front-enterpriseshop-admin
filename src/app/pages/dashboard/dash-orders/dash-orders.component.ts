import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NgSwitch, NgSwitchCase } from '@angular/common';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-dash-orders',
  standalone: true,
  imports: [
    TableModule,
    AvatarModule,
    AvatarGroupModule,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './dash-orders.component.html',
  styleUrl: './dash-orders.component.scss'
})
export class DashOrdersComponent {

  columns: Column[] = [
    { field: 'order_id', header: 'ID Pedido' },
    { field: 'customer.name', header: 'Cliente' },
    { field: 'product', header: 'Produto' },
    { field: 'amount', header: 'Valor' },
    { field: 'vendor', header: 'Vendedor' },
    { field: 'status', header: 'Status' }
  ];

  orders: any[] = [
    {
      "order_id": "#VZ2112",
      "customer": {
        "name": "Alex Smith",
        "image_url": "https://via.placeholder.com/40"
      },
      "product": "Clothes",
      "amount": "$109.00",
      "vendor": "Zoetic Fashion",
      "status": "Paid",
      "rating": {
        "score": 5.0,
        "votes": 61
      }
    },
    {
      "order_id": "#VZ2111",
      "customer": {
        "name": "Jansh Brown",
        "image_url": "https://via.placeholder.com/40"
      },
      "product": "Kitchen Storage",
      "amount": "$149.00",
      "vendor": "Micro Design",
      "status": "Pending",
      "rating": {
        "score": 4.5,
        "votes": 61
      }
    },
    {
      "order_id": "#VZ2109",
      "customer": {
        "name": "Ayaan Bowen",
        "image_url": "https://via.placeholder.com/40"
      },
      "product": "Bike Accessories",
      "amount": "$215.00",
      "vendor": "Nesta Technologies",
      "status": "Paid",
      "rating": {
        "score": 4.9,
        "votes": 89
      }
    },
    {
      "order_id": "#VZ2108",
      "customer": {
        "name": "Prezy Mark",
        "image_url": "https://via.placeholder.com/40"
      },
      "product": "Furniture",
      "amount": "$199.00",
      "vendor": "Syntyce Solutions",
      "status": "Unpaid",
      "rating": {
        "score": 4.3,
        "votes": 47
      }
    }
  ];

}
