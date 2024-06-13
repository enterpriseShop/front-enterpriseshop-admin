import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';

import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../../../models/Category.model';
import { HttpClient } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

interface Status {
  id: number;
  name: string;
  slug: string;
}

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AvatarModule, AvatarGroupModule, FormsModule, TableModule, ButtonModule, RouterLink, BreadcrumbComponent, InputTextModule, NgClass, DropdownModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {

  loading: boolean = false;
  searchValue: string | undefined;
  selectedStatus: Status | undefined;

  category: Category[] = [];

  status: Status[] = [];

  constructor(
    private http: HttpClient,
    private catService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.http.get<Status[]>('http://localhost:3000/status').subscribe({
      next: (data) => {
        this.status = data;
      }
    });
    this.allCategories();
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

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

}
