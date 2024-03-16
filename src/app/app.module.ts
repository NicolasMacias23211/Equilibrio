import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
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
import { gsap } from "gsap";

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
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    BodyComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PasosDeRegistroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  panelOpenState = false;
 }
