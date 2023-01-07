import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoFoundComponent } from './no-found/no-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes :Routes =[

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NoFoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
