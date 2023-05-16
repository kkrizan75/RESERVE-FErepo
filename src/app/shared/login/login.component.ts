import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { LoggedIn } from '../model/logged-in';
import { SharedService } from '../service/shared.service';
//import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-login-landing-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private sharedService:SharedService) {}

  public Username?: string
  public Password?: string
  public lgd:LoggedIn = {
    username: "",
    password: ""
  }


  registerNavigate(){
    this.router.navigate(['/app/register']);
  }

  public logIn(){

  this.lgd.username = "" + this.Username
  this.lgd.password = "" +this.Password
  this.sharedService.login(this.lgd)
  }
  updateData() {
    throw new Error('Method not implemented.');
  }

}
