import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderComponent } from './leader/leader.component';
import { DashboardLeaderComponent } from './dashboard-leader/dashboard-leader.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { StaffComponent } from './staff/staff.component';
import { DashboardStaffComponent } from './dashboard-staff/dashboard-staff.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LeaderComponent,
    DashboardLeaderComponent,
    ProjectComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ListProjectComponent,
    LoginComponent,
    TaskComponent,
    StaffComponent,
    DashboardStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
