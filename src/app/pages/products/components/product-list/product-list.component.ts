import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductResponse } from '../../../../models/Products.model';
import { ThumbnailProductsComponent } from '../../../components/thumbnail/thumbnail-products/thumbnail-products.component';

import { ButtonModule } from 'primeng/button';
import { NgClass, NgFor } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';

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
    NgFor,
    ButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  home: Home = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
  ];
  products: ProductResponse[] = [];
}
