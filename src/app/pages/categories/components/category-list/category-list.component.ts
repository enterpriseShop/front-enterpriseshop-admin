import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../../../models/Category.model';
import { HttpClient } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BreadcrumbItems } from '../../../../models/Generics.model';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { StatusService } from '../../../../services/status/status.service';
import { Status } from '../../../../models/Status.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    AvatarModule,
    AvatarGroupModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RouterLink,
    BreadcrumbComponent,
    InputTextModule,
    NgClass,
    DropdownModule,
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  loading: boolean = false;
  searchValue: string | undefined;
  selectedStatus: Status | undefined;

  status: Status[] = [];
  category: Category[] = [];
  breadcrumb: BreadcrumbItems[] = [];

  constructor(
    private router: Router,
    private statusService: StatusService,
    private catService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.allCategories();
    this.getAllStatus();
    this.checkUrl();
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe({
      next: (data) => {
        let statusFiltered: Status[] = [];
        data.forEach((item: Status) => {
          if (item.enabled.includes('categories')) {
            statusFiltered.push(item);
          }
        });
        this.status = statusFiltered;
        console.log('GET ALL STATUS DATA:', data, this.status);
      },
      error: (err) => {
        console.log('GET ALL STATUS ERR:', err);
      },
    });
  }

  checkUrl() {
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    let parts: any[] = [];
    urlParts.shift();

    urlParts.forEach((item: string) => {
      parts.push({ label: item });
    });
    this.breadcrumb = parts;
  }

  allCategories() {
    this.catService.getAllCategories().subscribe({
      next: (data) => {
        this.category = data;
        console.log('GET ALL CATEGORY DATA:', data);
      },
      error: (err) => {
        console.log('GET ALL CATEGORY ERR:', err);
      },
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
