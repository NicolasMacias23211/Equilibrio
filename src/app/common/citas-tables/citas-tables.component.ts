import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-citas-tables',
  templateUrl: './citas-tables.component.html',
  styleUrls: ['./citas-tables.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CitasTablesComponent implements OnInit {
  displayedColumns: string[] = ['DireccionDeLaCita', 'NombreCompletoEmpleado',
     'NombreCompletoUsuario', 'NombreServicio', 'EstadoDeCita'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.GetCitas().subscribe(data => {      
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }
}
