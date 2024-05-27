import { Component } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UploadsComponent } from '../../../components/uploads/uploads.component';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    UploadsComponent,
    ProductFormComponent
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {

}
