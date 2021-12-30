import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Project } from '../enttites/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: Project = {
    _id: null,
    projectName: null,
    teamSize: null,
    create_date: null,
    dateStart: null
  }
  constructor(private proService: ProjectService , private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(this.project);
    const newProject:Project = {projectName: this.project.projectName, teamSize: this.project.teamSize, dateStart: this.project.dateStart} as Project
    this.proService.create('', newProject).subscribe((data:any)=>{
      console.log(data);
      Swal.fire({
        title: 'Them thanh cong',
        icon: 'success'
      }).then(()=>{
        this.router.navigate(['leader/project'])
      })
    }, error=>{
    console.log(error);
    
      
    })
  }

}
