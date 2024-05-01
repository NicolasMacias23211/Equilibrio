import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  private API_URL = 'http://localhost:8080';


  login(email: string, password: string): Observable<any> {
    const body = { email: email, contraseña: password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post(`${this.API_URL}/autenticacion`, body,{ headers: headers });
  }

  GetEmpleados():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(`${this.API_URL}/empleados`,{ headers: headers });
  }

  GetServicios():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(`${this.API_URL}/servicios`,{ headers: headers });
  }

 sendPostRequest(userData: any) {
  const url = 'http://localhost:8080/autenticacion'; // Reemplaza con la URL real
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  return this.http.post(url, userData, { headers: headers });
}

}

