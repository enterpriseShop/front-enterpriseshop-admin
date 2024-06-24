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
import { DashOrdersComponent } from '../dash-orders/dash-orders.component';

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
    AvatarGroupModule,
    DashOrdersComponent
  ],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.scss'
})
export class DashContentComponent implements OnInit {

  products: Product[] = [];

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
