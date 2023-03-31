import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAPI } from '../Environments/API_ECommerce';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClientRquest:HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.HttpClientRquest.get<ICategory[]>(`${BasicAPI.API_BookSite}/CategoryList`);

  }
}
