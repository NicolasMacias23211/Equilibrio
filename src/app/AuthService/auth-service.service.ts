import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;

  constructor() { }

  setUserId(id: number) {
    this.userId = id;
    localStorage.setItem('userId', id.toString()); // Guarda la ID en localStorage
  }

  getUserId(): number | null {
    const userIdString = localStorage.getItem('userId');
    if (userIdString !== null) {
      this.userId = parseInt(userIdString, 10);
      return this.userId;
    }
    return null;
  }
  

  isLoggedIn(): boolean {
    return !!this.getUserId();
  }

  logout() {
    this.userId = null;
    localStorage.removeItem('userId'); // Elimina la ID de localStorage al cerrar sesión
  }
}
