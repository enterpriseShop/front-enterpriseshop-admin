import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { Product } from '../../../models/Products.model';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-dash-content',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    NgStyle,
    NgClass,
    DataViewModule,
    TagModule,
    TableModule,
    CurrencyPipe,
    AvatarModule,
    AvatarGroupModule
  ],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.scss'
})
export class DashContentComponent implements OnInit {

  products: Product[] = [];

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


  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.listBestSelling();
  }

  listBestSelling() {

    this.prodService.getAllProducts(1, 30).subscribe({
      next: (data) => {
        let filterProds = data.slice(0, 5);
        filterProds.forEach((item: Product) => {
          item['amount'] = item.stock * item.price;
        })
        this.products = filterProds;
        console.log(this.products)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  gerarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
