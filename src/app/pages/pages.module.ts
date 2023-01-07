import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitaMedicaComponent } from './cita-medica/cita-medica.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';



@NgModule({
  declarations: [DashboardComponent,CitaMedicaComponent,HistoriaClinicaComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent,CitaMedicaComponent,HistoriaClinicaComponent]
})
export class PagesModule { }
