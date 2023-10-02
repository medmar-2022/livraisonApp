import { Component, OnInit } from '@angular/core';

import { Coli } from '../models/colis';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommandService } from '../services/command.service';
import { Router } from '@angular/router';
import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  constructor(private command:CommandService,private alertify:AlertifyService,private router:Router
    ,private responsive: BreakpointObserver) { }
  colis!: Coli[];
  coli!:Coli;
  faCoffee = faCoffee;
  faPlusCircle=faPlusCircle
  user!:User;
  jwtHelper = new JwtHelperService();
  decodedToken:any;
  setColor=false
  hideSideMenu = false;
  ngOnInit(){
   
    this.getcoli();
    this.getColor();
    this.responsive.observe([
      Breakpoints.HandsetLandscape,      
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait
     

      
      ])
      .subscribe(result => {

        this.hideSideMenu  = false; 

        if (result.matches) {
          this.hideSideMenu = true;
        }

  });
  }


getcoli(){
  var tokn=localStorage.getItem("token");
  var res=this.jwtHelper.decodeToken(tokn!).nameid;
  this.command.getColi(res).subscribe(
   (colis:Coli[])=>{this.colis=colis;
    
  } ,
   error=>{this.alertify.error(error)}
  )
}
addcoli(){
this.router.navigate(['/addcoli'])
}

getColor(){
  var v=document.getElementById('sc')?.textContent;
 if(v='en attente')
  this.setColor=true
}

}





