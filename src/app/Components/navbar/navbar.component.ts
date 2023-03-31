import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
UserLogin:boolean;
constructor(private authService: UserAuthService) { 
  this.UserLogin = this.authService.UserLoggedStatus;
}
ngOnInit():void {
  this.authService.getStatusOfUser().subscribe(status=>{
    this.UserLogin = status;
  });

}
}
