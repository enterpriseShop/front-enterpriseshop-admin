import { Component, OnInit } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UploadsComponent } from '../../../components/uploads/uploads.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataRxjsService } from '../../../../services/rxjs/data-rxjs.service';
import { ProductsService } from '../../../../services/products/products.service';
import { Product } from '../../../../models/Products.model';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    UploadsComponent,
    ProductFormComponent,
    RouterLink,
    ButtonModule
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  title_component: string = "";

  crtlEnableButton: boolean = false;

  formProductData!: Product;

  constructor(
    private rxjs: DataRxjsService,
    private actvRoute: ActivatedRoute,
    private prodService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe((p: any) => {
      this.title_component = p['action'] == 'create' ? "Adicionar produto" : "Editar produto";
    });

    this.rxjs.validationForm$.subscribe(data => {
      if (data) {
        this.crtlEnableButton = true;
        this.formProductData = data;
      }
    });
  }

  createProduct() {
    this.prodService.createProduct(this.formProductData).subscribe({
      next: (data) => {
        console.log('SUCESSO', data);
      },
      error: (err) => {
        console.log('PRODUCT BY ID ERR:', err);
      }
    });
  }

}
