import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitaMedicaComponent } from './cita-medica/cita-medica.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  //rutas protegidad

  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path:'', component: DashboardComponent },
      { path: 'cita', component: CitaMedicaComponent },
      { path: 'historia', component: HistoriaClinicaComponent },
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]
  }
  //{path:'**',component:NoFoundComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
  ]
})
export class PagesRoutingModule { }
