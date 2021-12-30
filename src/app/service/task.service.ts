import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../enttites/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = 'http://localhost:5000/task'
  constructor(private http: HttpClient) { }

  create(endPoint: string, task: Task){
    return this.http.post(`${this.url}/${endPoint}`, task)
  }
  get(endPoint: string){
    return this.http.get(`${this.url}/${endPoint}`)
  }
  update(endPoint: string, task: Task){
    return this.http.patch(`${this.url}/${endPoint}`, task)
  }
  delete(endPoint: string){
    return this.http.delete(`${this.url}/${endPoint}`)
  }

}
