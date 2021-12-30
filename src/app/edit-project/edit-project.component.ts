import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Project } from '../enttites/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project = {
    _id: null,
    projectName: null,
    teamSize: null,
    create_date: null,
    dateStart: null
  }
  constructor(private route:ActivatedRoute, private proService: ProjectService, private router: Router) { }

  ngOnInit(): void { let id = this.route.snapshot.paramMap.get('id');
  this.proService.get(`${id}`).subscribe((data:any)=>{
    console.log(data);
    this.project = data
  })
  }

  onSubmit(form: NgForm){
    const updateProject:Project={projectName: this.project.projectName, teamSize: this.project.teamSize, dateStart: this.project.dateStart} as Project;
    this.proService.update(`update/${this.project._id}`, updateProject).subscribe((data:any)=>{
      console.log(data);
      Swal.fire({
        title:"update successfully",
        icon: 'success'
      }).then(()=>{
        this.router.navigate(['leader/project'])
      })
    }, error=>{
      console.log(error);
      
    })
  }

}
