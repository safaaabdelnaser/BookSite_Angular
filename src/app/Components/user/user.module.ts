import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:'',redirectTo:'/User/UserProfile',pathMatch:'full'}, 
{path:'EditProfile',component:EditProfileComponent},
{path:'UserProfile',component:UserProfileComponent}
]

@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
