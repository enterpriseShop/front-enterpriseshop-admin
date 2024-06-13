import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/Products.model';
import { ProdForm } from '../../models/Generics.model';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataRsjsService {
  private rxjsProcuct = new Subject<ProdForm>();
  rxjsProcuct$ = this.rxjsProcuct.asObservable()

  sendComponentDataProduct(product: ProdForm) {
    this.rxjsProcuct.next(product);
  }
}
