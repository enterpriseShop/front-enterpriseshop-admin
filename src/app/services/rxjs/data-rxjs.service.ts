import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRxjsService {

  private previewImages = new Subject<any>();
  previewImages$ = this.previewImages.asObservable();

  sendImagesToPreview(data: any) {
    this.previewImages.next(data);
  }

  validationForm = new Subject<any>();
  validationForm$ = this.validationForm.asObservable();

  sendValidationForm(data: any) {
    this.validationForm.next(data);
  }
}
