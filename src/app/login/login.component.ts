import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../enttites/user';
import { UserService } from '../service/user.service';
import jwt_decode from 'jwt-decode'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    _id: null,
    email: null,
    name: null,
    password: null,
    date: null
  }

  constructor(private userService: UserService, private router: Router) { 

  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const loginUser: User = {email: this.user.email, password: this.user.password} as User;
    this.userService.Login(`login`,loginUser).subscribe((data:any)=>{
      console.log(data);
      this.userService.setToken(data.token);
      localStorage.setItem('usertoken', this.userService.getToken())
     var tokenPayLoad : any
     tokenPayLoad = jwt_decode(this.userService.getToken());
     console.log(tokenPayLoad);
     if(tokenPayLoad.typeUser ==0 ){
       this.router.navigate(['employee'])
     }
     else {
       this.router.navigate(['leader'])
     }
    })
  }


}
