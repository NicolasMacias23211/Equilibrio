import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  datos: any;

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.ApiService.GetEmpleados().subscribe(
      data => {
        this.datos = data;
        console.log(this.datos)
      },
      error => {
        console.error(error);
      }
    );
  }

}
