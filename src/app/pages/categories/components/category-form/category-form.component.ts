import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    InputTextModule,
    FileUploadModule
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {


  onUpload(evt: any) { }
}
