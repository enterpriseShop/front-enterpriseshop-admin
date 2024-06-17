import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../models/Products.model';
import { ThumbnailProductsComponent } from '../../../components/thumbnail/thumbnail-products/thumbnail-products.component';
import { ProductsService } from '../../../../services/products/products.service';

import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator';

interface MenuItem {
  icon?: string;
  route?: string;
  label?: string;
};

interface Home {
  icon: string;
  routerLink: string;
};

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
    ThumbnailProductsComponent,
    BreadcrumbModule,
    FormsModule,
    NgClass,
    ButtonModule,
    PaginatorModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  page: number = 1;
  perPage: number = 10;

  first: number = 1;
  rows: number = 10;
  totalRecords: number = 41;
  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
  ];

  home: Home = { icon: 'pi pi-home', routerLink: '/' };

  items: MenuItem[] = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
  ];
  products: Product[] = [];

  private productService = inject(ProductsService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts(this.page, this.perPage).subscribe({
      next: (data) => {
        // this.products = data.data; // cpm db.json server
        this.products = data;
        console.log("GET ALL PRODUCTS DATA", data);
      },
      error: (err) => {
        console.log("GET ALL PRODUCTS ERR", err);
      }
    });
  }

  dropChange(event: any) {
    this.page = 1;
    this.perPage = event.value;
    this.first = 1;
    this.getAllProducts();
  }

  onPageChange(event: any) {

    this.page = event.page + 1;
    this.getAllProducts();
  }
}
