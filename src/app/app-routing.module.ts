import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CitaComponent } from './cita/cita.component';
import { AdminsViewsComponent } from './admins-views/admins-views.component';

const Routes: Routes = [
  {
    path: '', 
    component:HomeComponent
  },
  {
    path: 'registro', 
    component:RegistroComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'vision',
    component: VisionComponent
  },
  {
    path: 'mision',
    component: MisionComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'cita',
    component: CitaComponent
  },
  {
    path: 'admin',
    component: AdminsViewsComponent
  },
  {
    path: '**',
    component:HomeComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
