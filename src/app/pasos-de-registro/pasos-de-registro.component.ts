import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,style,transition,animate, state} from '@angular/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-pasos-de-registro',
  templateUrl: './pasos-de-registro.component.html',
  styleUrls: ['./pasos-de-registro.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  animations:[
    trigger('Entrada',[
      state('void',style({
        opacity:0
      })),
      transition(':enter',[
        animate(800,style({
          opacity:1
        }))
      ])
    ])
  ]
})
export class PasosDeRegistroComponent {
  isVisible: boolean = true; 
  isChecked: boolean = false;
  firstFormGroup = this._formBuilder.group({
    Nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
    Sexo: ['', Validators.required],
    Correo: ['', Validators.email],
    teléfono: ['', Validators.required],
    Dirección: ['', Validators.required],
    RH: ['', Validators.required],
    Ocupación: ['', Validators.required],
    FechaNacimiento : ['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  constructor(private _formBuilder: FormBuilder) {}

}
