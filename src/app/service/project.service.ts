import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../enttites/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
url: string = "http://localhost:5000/project"
  constructor(private http: HttpClient) { }
  get(endPoint: string){
    return this.http.get(`${this.url}/${endPoint}`);
  }
  create(endPoint: string, project: Project){
    return this.http.post(`${this.url}/${endPoint}`, project)
  }

  update(endPoint: string, project: Project){
    return this.http.patch(`${this.url}/${endPoint}`, project)
  }
  delete(endPoint: string){
    return this.http.delete(`${this.url}/${endPoint}`,{
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        Authorization: "my-auth-token"
      })
    });
  }
}