import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  datos: any;

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.ApiService.GetServicios().subscribe(
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
