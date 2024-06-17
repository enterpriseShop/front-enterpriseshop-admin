import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataRxjsService } from '../../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-upload-preview',
  standalone: true,
  imports: [],
  templateUrl: './upload-preview.component.html',
  styleUrl: './upload-preview.component.scss'
})
export class UploadPreviewComponent {

  @Input() maxImages: number = 0;
  @Output() countImgaes: any = new EventEmitter<number>();

  previews: any[] = [];

  constructor(
    private rxjs: DataRxjsService
  ) { }

  ngOnInit(): void {
    this.rxjs.previewImages$.subscribe(images => {
      if (images) {
        const maxImages = this.maxImages;
        const totalImages = this.previews.length + images.length;
    
        if (totalImages <= maxImages) {
          images.forEach((item: any) => {
            this.previews.push(item);
          });
        } else {
          const remainingSlots = maxImages - this.previews.length;
          const newImages = images.slice(0, remainingSlots);
    
          newImages.forEach((item: any) => {
            this.previews.push(item);
          });
        }
      }
      this.countImgaes.emit(this.previews.length);
    });
    
  }

}
