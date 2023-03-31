import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/Models/user-data';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})

export class UserDataComponent  implements OnInit {
  ListUsers:UserData[]=[];
  constructor(private UserService:UserDataService) {}
  ngOnInit(): void {
    this.UserService.getAllUser().subscribe(mydata=>{
      this.ListUsers=mydata;
    })
  }
  
}

// ngOnChanges(): void {
//   this.UserService.getAllUser().subscribe(mydata=>{
//     this.ListUsers=mydata;
// })}
