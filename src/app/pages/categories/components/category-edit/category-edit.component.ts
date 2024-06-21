import { Component, OnInit } from '@angular/core';
import { CategoryFormComponent } from '../category-form/category-form.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [
    CategoryFormComponent,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.scss'
})
export class CategoryEditComponent implements OnInit {

  errorFielfd: boolean = true;
  title_component: string = "Adicionar categoria";

  constructor(
    private actvRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe((p: any) => {
      this.title_component = p['action'] == 'create' ? "Adicionar categoria" : "Editar categoria";
    });
  }

}
