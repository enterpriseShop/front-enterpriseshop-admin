import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Product } from '../../../../models/Products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../services/products/products.service';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../../../models/Category.model';
import { StatusService } from '../../../../services/status/status.service';
import { Status } from '../../../../models/Status.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ToastModule,
    FileUploadModule,
    BadgeModule,
    NgClass,
    HttpClientModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  isUpdate: boolean = false;
  errorFielfd: boolean = false;

  product!: Product;
  status: Status[] = [];
  category: Category[] = [];

  productForm!: FormGroup;

  files = [];

  totalSize: number = 0;
  // product_id: number = 0;
  totalSizePercent: number = 0;

  constructor(
    private fb: FormBuilder,
    private actvRoute: ActivatedRoute,
    private statusService: StatusService,
    private prodService: ProductsService,
    private catService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.allStatus();
    this.allCategories();

    this.actvRoute.queryParams.subscribe((p: any) => {
      if (p['action'] === 'update') {
        setTimeout(() => {
          this.productById(+p['product']);
        }, 1500);
      }
    });
  }

  initForm() {
    this.productForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_description: ['', [Validators.required]],
      product_price: ['', [Validators.required]],
      product_stock: ['', [Validators.required]],
      product_status: ['', [Validators.required]],
      product_category: ['', [Validators.required]],
    });
  }

  allStatus() {
    this.statusService.getAllStatus().subscribe({
      next: (data) => {
        let statusFiltered: Status[] = [];
        data.forEach((item: Status) => {
          if (!item.enabled.includes("products")) {
            statusFiltered.push(item);
          }
        });
        this.status = statusFiltered;
        // console.log('GET ALL STATUS DATA:', data);
      },
      error: (err) => {
        console.log('GET ALL STATUS ERR:', err);
      }
    });
  }

  allCategories() {
    this.catService.getAllCategories().subscribe({
      next: (data) => {
        this.category = data;
        console.log('GET ALL CATEGORY DATA:', data);
      },
      error: (err) => {
        console.log('GET ALL CATEGORY ERR:', err);
      }
    });
  }

  productById(product_id: number) {
    this.prodService.getProductsById(product_id).subscribe({
      next: (data) => {
        this.product = data;
        this.updateFormProduct(data);
      },
      error: (err) => {
        console.log('PRODUCT BY ID ERR:', err);
      }
    });
  }

  updateFormProduct(product: Product) {
    this.productForm.patchValue({
      product_name: product.title,
      product_description: product.description,
      product_price: product.price,
      product_stock: product.stock,
      product_category: product.category,
      product_status: product.status
    });
    console.log("ESTOU UPDATE FORM PRODUCT", this.productForm.value, product);
  }

  createProduct() {
    this.prodService.createProduct(this.productForm.value).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.log('PRODUCT BY ID ERR:', err);
      }
    });
  }

  choose(event: Event, callback: any) {
    callback();
  }

  uploadEvent(callback: any) {
    callback();
  }
}
