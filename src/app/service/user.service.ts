import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../enttites/user';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:5000/auth";
  token: string = null
  setToken(token:string){
    this.token = token
  }
  getToken(){
    return this.token
  }

  getUser(endPoint:string){
    return this.http.get(`${this.url}/${endPoint}`,{
      headers:new HttpHeaders({'Authorization':localStorage.getItem('usertoken')})
    })

    
  }

  constructor(private http:HttpClient) { }
  Login(endPoint: string, user: User){ 
    return this.http.post(`${this.url}/${endPoint}`,user)
  }
  
}
