import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  
  getUserLogged() {
    // const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

}
