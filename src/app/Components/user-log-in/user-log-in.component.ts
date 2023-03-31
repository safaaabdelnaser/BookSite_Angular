import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserData } from 'src/app/Models/user-data';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent {
IsLoggedIn:boolean = false;
userData:UserData[]=[]
@ViewChild('EmailInput') EmailInput: ElementRef | undefined;
@ViewChild('PasswordInput') PasswordInput: ElementRef | undefined;
  constructor(private authService: UserAuthService,private userService:UserDataService) { }
  UserSignIn()
  {
    const Email=this.EmailInput?.nativeElement.value;
    const Password=this.PasswordInput?.nativeElement.value;
    this.userService.getAllUser().subscribe(mydata=>{
      this.userData=mydata;
    
      if(this.userData.find(x=>x.Email===Email&&x.Password===Password))
      {
        this.authService.LogIn(Email, Password)
        this.IsLoggedIn = this.authService.UserLoggedStatus;
       
      }
      else
      {
       alert("Email or password is incorrect");
      }
       
    })
   
  }
  UserSignOut()
  {
  
      this.authService.LogOut();
      this.IsLoggedIn = this.authService.UserLoggedStatus;
      
  }

}
