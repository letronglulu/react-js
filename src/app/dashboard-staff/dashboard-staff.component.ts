import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Task } from '../enttites/task';
import { User } from '../enttites/user';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard-staff',
  templateUrl: './dashboard-staff.component.html',
  styleUrls: ['./dashboard-staff.component.css']
})
export class DashboardStaffComponent implements OnInit {

  constructor(private userService:UserService, private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTask()
  }
  user: User = {
    _id: null,
    name: null,
    email: null,
    password: null,
    date: null
  }
  tasks:Task[] = []
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
  getTask() {
    this.userService.getUser('verified').subscribe((data: any) => {
      this.user = data.user
      console.log(this.user);
      console.log(data)
      
      this.taskService.get(`user/${this.user._id}`).subscribe((data: any) => {
        this.tasks = data
        console.log(this.tasks);
  
      })
    })
    
  }
  complete(_id){
    this.taskService.get(`detail/${_id}`).subscribe((data:any)=>{
      this.task=data.task
      let updatedTask:Task={taskName: this.task.taskName, description: this.task.description, id_project: this.task.id_project, priority: this.task.priority, assignedTo: this.task.assignedTo, status:1} as Task
        this.taskService.update(`update/${_id}`,updatedTask).subscribe(data=>{this.getTask()})
     
    })

  }
  delete(_id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.delete(`delete/${_id}`).subscribe(data=>{
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.getTask()
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }
}
