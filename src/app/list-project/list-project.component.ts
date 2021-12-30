import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Project } from '../enttites/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects: Project[]=[]
  constructor(private proService: ProjectService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.proService.get('').subscribe((data:any)=>{
      console.log(data);
      this.projects = data.projects
    })
  }

  remove(id:any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {

        this.proService.delete(`delete/${id}`).subscribe(data=>{
          console.log(data);
          this.getAll()
          Swal.fire(
            'Deleted!',
            '',
            'success'
          )
        })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }

}
