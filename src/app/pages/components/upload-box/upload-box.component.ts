import { Component, Input } from '@angular/core';
import { DataRxjsService } from '../../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-upload-box',
  standalone: true,
  imports: [],
  templateUrl: './upload-box.component.html',
  styleUrl: './upload-box.component.scss'
})
export class UploadBoxComponent {
  @Input() numMaxImages: number = 0;
  @Input() countImages: number = 0;

  selectedFiles?: FileList;
  previews: FileUp[] = [];
  selectedFileNames: string[] = [];
  
  constructor(
    private rxjs: DataRxjsService
  ) { }

  onSelectFile(event: any) {
    let previewsImages: any[] = [];
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          previewsImages.push({
            name: file.name,
            type: file.type,
            size: this.formatBytes(file.size),
            url: e.target.result
          });
          this.rxjs.sendImagesToPreview(previewsImages);
        };

        reader.readAsDataURL(file);
      }
    }
  }

  formatBytes(bytes: number) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

interface FileUp {
  name: string,
  url: string,
  size: string,
  type: string
}