import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { Category } from '../../../../models/Category.model';
import { StatusService } from '../../../../services/status/status.service';
import { Status } from '../../../../models/Status.model';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    InputTextModule,
    FileUploadModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    ProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent implements OnInit {

  status: Status[] = [];
  loading: boolean = false;
  categoryForm!: FormGroup;
  selectedStatus: Status | undefined;

  constructor(
    private fb: FormBuilder,
    private statusService: StatusService,
    private actvRoute: ActivatedRoute,
    private catService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe((p: any) => {
      console.log('PARAMS CATEGORY', p);
      if (p['action'] === 'update') {
        setTimeout(() => {
          this.categoryById(+p['category']);
        }, 1500);
      }
    });

    this.initForm();
    this.getAllStatus();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      name: ['']
    });
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe({
      next: (data) => {
        let statusFiltered: Status[] = [];
        data.forEach((item: Status) => {
          if (item.enabled.includes("categories")) {
            statusFiltered.push(item);
          }
        });
        this.status = statusFiltered;
        console.log('GET ALL STATUS DATA:', data, this.status);
      },
      error: (err) => {
        console.log('GET ALL STATUS ERR:', err);
      }
    });
  }

  categoryById(catgory_id: number) {
    this.catService.getCategoriesById(catgory_id).subscribe({
      next: (data) => {
        console.log('PRODUCT BY ID DATA:', data);
        this.updateFormCategory(data);
      },
      error: (err) => {
        console.log('PRODUCT BY ID ERR:', err);
      }
    });
  }

  updateFormCategory(category: Category) {
    this.categoryForm.patchValue({
      name: category.name
    });
    this.selectedStatus = category.status
  }
}
