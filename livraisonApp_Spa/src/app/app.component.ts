import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
   constructor(public authService:AuthService) { }
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authService.decodedToken=this.jwtHelper.decodeToken(token!);
    this.loggedIn();
  }
  loggedIn(){
    // const token = localStorage.getItem('token');
    // return !! token;
    return this.authService.loggedIn();
  }
}
