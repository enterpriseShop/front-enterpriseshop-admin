import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/Products.model';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thumbnail-products',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './thumbnail-products.component.html',
  styleUrl: './thumbnail-products.component.scss'
})
export class ThumbnailProductsComponent {

  @Input() products: Product = {
    title: '',
    price: 0,
    description: '',
    images: [],
    creationAt: '',
    updatedAt: '',
    category: {
      id: 0,
      name: '',
      image: '',
      creationAt: '',
      updatedAt: '',
      count: 0,
      status: {
        id: 0,
        name: '',
        slug: '',
        enabled: []
      }
    },
    stock: 0,
    status: {
      id: 0,
      name: '',
      slug: '',
      enabled: []
    }
  }

}
