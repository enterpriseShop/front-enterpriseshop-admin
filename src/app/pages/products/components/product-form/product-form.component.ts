import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService, PrimeNGConfig} from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
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

  errorFielfd: boolean = false;
  cities: City[] | undefined;
  selectedCity: City | undefined;

  files = [];
  totalSize: number = 0;
  totalSizePercent: number = 0;

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  choose(event: Event, callback: any) {
    callback();
  }

  uploadEvent(callback: any) {
    callback();
}
}
