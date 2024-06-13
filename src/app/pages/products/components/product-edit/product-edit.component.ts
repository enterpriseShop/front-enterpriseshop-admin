import { Component, OnInit } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UploadsComponent } from '../../../components/uploads/uploads.component';
import { ActivatedRoute } from '@angular/router';
import { DataRsjsService } from '../../../../services/rxjs/data-rsjs.service';
import { Product } from '../../../../models/Products.model';
import { ProdForm } from '../../../../models/Generics.model';

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
export class ProductEditComponent implements OnInit {
  title_component: string = "";

  constructor(
    private rxjs: DataRsjsService,
    private actvRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe((p: any) => {
      this.title_component = p['action'] == 'create' ? "Adicionar produto" : "Editar produto";
      // let obj: ProdForm = {
      //   isCreate: p['action'] == 'create',
      //   product_id: p['action'] == 'create' ? 0 : +p['product']
      // };
      // this.rxjs.sendComponentDataProduct(obj);
    });
  }

}
