import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  storeObj: Store;
  ClientName: string;

  ID: string;
  birthdate: string="";
  Cerditcaerd:string="1234567891122352"
  constructor() {
    this.ClientName = "Aya";
    this.storeObj = new Store("SafaBook", ["qena", "sohag"], "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600");
    this.ID = "";
   
  }
  IsPurshased: boolean = true;
  toggleMessage() {
    this.IsPurshased = !this.IsPurshased;
  }
  toDay: Date = new Date();

  getBirthdate(){
    if (this.ID && this.ID.length == 14) {
      const year = this.ID.substring(1, 3);
      console.log(year);
      
      const month = this.ID.substring(3, 5);
      console.log(month);
      const day = this.ID.substring(5, 7);
      console.log(day);

      if(this.ID.substring(0, 1)=="3")
      {

        this.birthdate =`BrithDate: 20${year}-${month}-${day}`;
      }
      else
      {
        this.birthdate =`BrithDate: 19${year}-${month}-${day}`;
      }
      
      console.log(this.birthdate );
      // return this.birthdate;
      
      
    }
    else{
      this.birthdate ="Invalid Nationality number";
      
    }
    // return this.birthdate;
  }}
