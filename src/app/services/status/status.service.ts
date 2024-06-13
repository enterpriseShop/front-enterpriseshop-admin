import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Pagination } from '../../models/Pagination.model';
import { Status } from '../../models/Status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

   // private url: string = environment.BASE_URL;
   private url: string = 'http://localhost:3000';
   private uri: string = 'api/v1';
   private flag: string = 'status'
 
   constructor(
     private http: HttpClient
   ) { }
 
   getAllStatus() {
     return this.http.get<Status[]>(`${this.url}/${this.flag}`);
   }
}
