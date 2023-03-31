import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
    UserLogin:boolean;
    constructor(private authService: UserAuthService) { 
      this.UserLogin = this.authService.UserLoggedStatus;
    }
    ngOnInit():void {
      this.authService.getStatusOfUser().subscribe(status=>{
        this.UserLogin = status;
      });}
      
}
