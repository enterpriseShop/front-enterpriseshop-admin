import { Component, Input } from '@angular/core';
import { ProductResponse } from '../../../../models/Products.model';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-thumbnail-products',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './thumbnail-products.component.html',
  styleUrl: './thumbnail-products.component.scss'
})
export class ThumbnailProductsComponent {

  @Input() products: ProductResponse[] = []

}
