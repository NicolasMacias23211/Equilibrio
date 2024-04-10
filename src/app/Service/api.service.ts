import { LoginI } from './../modelos/login.interface';
import { ResponseI } from './../modelos/response.interfase';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

 // public GetAuthentication(form:any) : Observable<ResponseI>{
 //   let dirección= this.URL+"autenticacion";
 //   return this.http.post<ResponseI>(dirección,form)
 // }

 sendPostRequest(userData: any) {
  const url = 'http://localhost:8080/autenticacion'; // Reemplaza con la URL real
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  return this.http.post(url, userData, { headers: headers });
}

}

