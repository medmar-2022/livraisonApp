import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
faCoffee = faCoffee;
hideSideMenu = false;
  constructor(private auth:AuthService,private fb: FormBuilder,private alertify:AlertifyService,private router:Router
    ,private responsive: BreakpointObserver) { 
    this.loginForm = this.fb.group({ 
      
      email: ['', Validators.required],
      password: ['', Validators.required],
      
     
    })
  }

  ngOnInit() {
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
  login(){
    this.auth.login(this.loginForm.value).subscribe(
      next=>{this.alertify.success('Bienvenue' )},
      error=>{this.alertify.error(error)},
      ()=>{this.router.navigate(['/dashbord']);}
    )
  }
}
