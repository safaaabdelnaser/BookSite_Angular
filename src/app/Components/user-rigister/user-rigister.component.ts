import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/Models/user-data';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-user-rigister',
  templateUrl: './user-rigister.component.html',
  styleUrls: ['./user-rigister.component.scss']
})
export class UserRigisterComponent {
  UserForm:FormGroup;
  newUser:UserData = {} as UserData;
  constructor(private formbuilder:FormBuilder,private serviceAPI:UserDataService,private myrout:Router) 
  {
    // using formcontrol
    // this.UserForm=new FormGroup({
    //   Username: new FormControl('', Validators.required),
    //   Email:new FormControl('',Validators.required),
    //   Password:new FormControl('',Validators.required),
    //   RePassword:new FormControl('',Validators.required),
    //   Address:new FormGroup({
    //     Country:new FormControl('',Validators.required),
    //     City:new FormControl('',Validators.required),
    //     Street:new FormControl(''),
    //   }),

    // })

    // using form bulider
    this.UserForm=this.formbuilder.group({
      Username:['', [Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      RePassword:['',[Validators.required,Validators.minLength(6)]],
      Phones:formbuilder.array([formbuilder.control('')]),
      address:this.formbuilder.group({
        city:[''],
        street:['']
      }),

  },
  {Validators:this.matchValues});
}

  get Username()
  {
    return this.UserForm.get('Username');
  }
  get Email()
  {
    return this.UserForm.get('Email');
  }
  get Password()
  {
    return this.UserForm.get('Password');
  }
  
  get RePassword()
  {
    return this.UserForm.get('RePassword');
  }
  get country()
  {
    return this.UserForm.get('country');
  }
  get city()
  {
    return this.UserForm.get('city');
  }
  get street()
  {
    return this.UserForm.get('street');
  }
  get Phones()
  {
    return this.UserForm.get('Phones') as FormArray;
  }
  // to add number
  AddNumber(){
    this.Phones.push(this.formbuilder.control(''));
  }
  // to delete number
  DeleteNumber(){
    this.Phones.removeAt(this.Phones.value.length-1);
  }
 
  

  AddNewUser()
{

    this.serviceAPI.addUser(this.UserForm.value).subscribe(data => {
      
      this.myrout.navigateByUrl('UserData');
    })

   
  console.log(this.newUser);
}


matchValues(EnteredValue:string) 
{
return this.Password?.value===EnteredValue && this.Password.value.length===EnteredValue.length? console.log("Identical"):console.log("Passwords do not match");

}
}
