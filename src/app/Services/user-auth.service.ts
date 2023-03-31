import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
private IsUserLoggedIn:BehaviorSubject<boolean>;
  constructor() {
    this.IsUserLoggedIn =new BehaviorSubject<boolean>(this.UserLoggedStatus);
   } 
  //  to get status of user logged in
   get UserLoggedStatus(): boolean {
    return (localStorage.getItem('token'))?true:false;
   } 
   LogIn(Email:string,Password:string){
   {
    let userToken="123";
    localStorage.setItem('token',userToken);
    localStorage.setItem('Email',Email);
    localStorage.setItem('Password',Password);
    this.IsUserLoggedIn.next(true);
   }
}
LogOut()
  {
  
   localStorage.removeItem('token');
   localStorage.removeItem('Email');
    localStorage.removeItem('Password');
   this.IsUserLoggedIn.next(false);
  }
  getStatusOfUser():Observable<boolean> {
    return this.IsUserLoggedIn.asObservable();
  }
}
