import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dash-content',
  standalone: true,
  imports: [CardModule, ButtonModule, DividerModule, NgStyle],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.scss'
})
export class DashContentComponent {

  dashOrders: any[] = [
    {
      title: "Simple Card 1",
      info: "Lorem ipsum dolor sit amet 1111..."
    },
    {
      title: "Simple Card 2",
      info: "Lorem ipsum dolor sit amet 2222..."
    },
    {
      title: "Simple Card 3",
      info: "Lorem ipsum dolor sit amet 3333..."
    }
  ];

  orders = [
    { "order_id": 1, "user_id": "Emily", "items": [{ "product_id": "Produto 01", "quantity": 2 }, { "product_id": 3, "quantity": 1 }], "total_price": 849.97, "status": "Shipped" },
    { "order_id": 2, "user_id": "João", "items": [{ "product_id": "Produto 02", "quantity": 1 }, { "product_id": 7, "quantity": 1 }], "total_price": 1149.98, "status": "Delivered" },
    { "order_id": 3, "user_id": "Djoor", "items": [{ "product_id": "Produto 04", "quantity": 1 }, { "product_id": 8, "quantity": 1 }], "total_price": 599.98, "status": "Processing" }
  ]

}
