import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { UploadBoxComponent } from '../upload-box/upload-box.component';
import { UploadPreviewComponent } from '../upload-preview/upload-preview.component';

@Component({
  selector: 'app-uploads',
  standalone: true,

  imports: [
    CardModule,
    CommonModule,
    UploadBoxComponent,
    UploadPreviewComponent,
  ],
  providers: [],
  templateUrl: './uploads.component.html',
  styleUrl: './uploads.component.scss'
})
export class UploadsComponent {

  maxImages: number = 5;
  count: number = 0;

  constructor() { }

  numImages(numImages: Event) {
    this.count = Number(numImages);
  }

}
