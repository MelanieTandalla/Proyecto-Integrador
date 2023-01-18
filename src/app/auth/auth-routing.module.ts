import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDatesComponent } from '../Medical-Dates/register-dates/register-dates.component';

const routes :Routes =[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path:'register-dates', component: RegisterDatesComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
