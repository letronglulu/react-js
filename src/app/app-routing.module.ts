import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLeaderComponent } from './dashboard-leader/dashboard-leader.component';
import { ProjectComponent } from './project/project.component';
import { LeaderComponent } from './leader/leader.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component'
import { StaffComponent } from './staff/staff.component';
import { DashboardStaffComponent } from './dashboard-staff/dashboard-staff.component';
import { TaskComponent } from './task/task.component'
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'leader', component: LeaderComponent,  canActivate:[AuthGuard], data:{role: 1}, children: [
      { path: '', component: DashboardLeaderComponent },
      {
        path: 'project', component: ProjectComponent, children: [
          { path: '', component: ListProjectComponent },
          { path: 'create', component: CreateProjectComponent },
          { path: 'edit/:id', component: EditProjectComponent }
        ]
      }
    ]
  },
  {
    path: 'employee', component: StaffComponent, canActivate:[AuthGuard], data:{role: 0}, children: [
      { path: '', component: DashboardStaffComponent },
      { path: 'task', component: TaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
