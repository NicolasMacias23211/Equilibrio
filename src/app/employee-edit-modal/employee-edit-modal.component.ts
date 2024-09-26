import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css'],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  standalone : true
})

export class EmployeeEditModalComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      Nombre: [data?.Nombre, Validators.required],
      PrimerApellido: [data?.PrimerApellido, Validators.required],
      SegundoApellido: [data?.SegundoApellido, Validators.required],
      Telefono: [data?.Telefono, Validators.required],
      Documento: [data?.Documento, Validators.required],
      Correo: [data?.Correo, Validators.required],
      CampoDeProfundizacion: [data?.CampoDeProfundizacion, Validators.required],
      UltimoTituloProfesional: [data?.UltimoTituloProfesional, Validators.required],
      IdEmpleado: [data?.IdEmpleado]
    });
  }

  saveChanges(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }

  cancelEdit(): void {
    this.dialogRef.close();
  }
}
