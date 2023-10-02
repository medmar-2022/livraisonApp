import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommandService } from '../services/command.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  user!:User;
  isPhonePortrait = false;
vieu=false;
  constructor(private alertify:AlertifyService,private router:Router,public auth:AuthService,private command:CommandService
    ,private responsive: BreakpointObserver) { }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetLandscape,      
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait
      ])
    .subscribe(result => {

      this.isPhonePortrait = false; 

      if (result.matches) {
        this.isPhonePortrait = true;
        console.log("screens matches")
      }

});  
this.getVieu()
  }
  loggedOut(){
    localStorage.removeItem('token');
    this.alertify.message('Deconextion');
    this.router.navigate(['/login']);
  }
  loggedIn(){
    // const token = localStorage.getItem('token');
    // return !! token;
    return this.auth.loggedIn();
  }
getVieu(){
  const element = <HTMLElement> document.getElementsByClassName('cal-meeting')[0];
  const element1 = <HTMLElement> document.getElementsByClassName('nav-links')[0];
  if(element1.style.height='0px'){
    
    element.style.height = '220px';
  }
  else element.style.height='0px'
  
 
}

}
