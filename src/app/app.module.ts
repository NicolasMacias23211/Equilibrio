import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootherComponent } from './foother/foother.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { PasosDeRegistroComponent } from './pasos-de-registro/pasos-de-registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginContentComponent } from './login-content/login-content.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DatePipe } from '@angular/common';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { CitaComponent } from './cita/cita.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { UsersTablesComponent } from './users-tables/users-tables.component';
import { AdminsViewsComponent } from './admins-views/admins-views.component';
import { CitasTablesComponent } from './citas-tables/citas-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    FootherComponent,
    HeaderComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    ServiciosComponent,
    MisionComponent,
    VisionComponent,
    EmpleadosComponent,
    CalendarioComponent,
    CitaComponent,
    AdminsViewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CitasTablesComponent,
    ServicesCardsComponent,
    HomeBodyComponent,
    CrearCitaComponent,
    AppRoutingModule,
    UsersTablesComponent,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PasosDeRegistroComponent,
    LoginContentComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  panelOpenState = false;
 }
