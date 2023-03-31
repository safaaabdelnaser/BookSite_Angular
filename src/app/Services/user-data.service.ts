import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BasicAPI } from '../Environments/API_ECommerce';
import { UserData } from '../Models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  httpOptions={};
  
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({ 
        'content-type': 'application/json'
      })
    };
  }

  getAllUser():Observable<UserData[]>{
    return this.httpClient.get<UserData[]>(`${BasicAPI.API_BookSite}/UserData`);
   }
  
  addUser(newUser:UserData):Observable<UserData>{
    return this.httpClient.post<UserData>(`${BasicAPI.API_BookSite}/UserData`,JSON.stringify(newUser),this.httpOptions);
  }
  getOneUser(IDUser:number):Observable<UserData>{
    return this.httpClient.get<UserData>(`${BasicAPI.API_BookSite}/UserData/${IDUser}`);
  }
}
