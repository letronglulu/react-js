import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../enttites/project';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';
import {Task} from '../enttites/task'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    _id: null,
    taskName: '',
    description: null,
    id_project: null,
    created_date: null,
    priority: null,
    status: null,
    assignedTo: null
  }
 projects: Project[]=[]
  constructor(private proService: ProjectService, private userService: UserService, private taskService:TaskService, private router: Router) { }

  ngOnInit(): void {
    this.proService.get('').subscribe((data:any)=>{
      this.projects=data.projects
    })
    this.userService.getUser('verified').subscribe((data: any)=>{
      console.log(data);
      this.task.assignedTo = data.user._id
    })
  }
  onSubmit(form: NgForm) { 
    console.log(this.task);
    const newTask: Task = {taskName: this.task.taskName, description: this.task.description, id_project: this.task.id_project, priority: this.task.priority, assignedTo: this.task.assignedTo} as Task;
    this.taskService.create('', newTask).subscribe((data:any)=>{
      Swal.fire({
        title: 'them thanh cong',
        icon: 'success'
      }).then(()=>{
        this.router.navigate(['employee'])
      })
      
    })
  }

}
