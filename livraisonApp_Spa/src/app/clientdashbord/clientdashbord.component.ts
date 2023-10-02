import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { CommandService } from '../services/command.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-clientdashbord',
  templateUrl: './clientdashbord.component.html',
  styleUrls: ['./clientdashbord.component.css']
})
export class ClientdashbordComponent implements OnInit {
commandForm:FormGroup
jwtHelper = new JwtHelperService();
id!:number
  constructor(private fb: FormBuilder,private command:CommandService,private router:Router,private alertify:AlertifyService)
 
  { 
    var tokn=localStorage.getItem("token");
    var res=this.jwtHelper.decodeToken(tokn!).nameid;
    this.commandForm = this.fb.group({ 
     userId:res,
      clientName: ['', Validators.required],
      clientTele: ['', Validators.required],
      clientVille: ['', Validators.required],
      clientAdress: ['', Validators.required],
      
      montant: ['', Validators.required],
     
     
    })
  }
 
  ngOnInit() {
    console.log( this.commandForm.controls['userId'].value)
  }

addcoli(){
  
  
this.command.addColi(this.commandForm.value).subscribe(
  next=>{this.alertify.success('coli ajouté');
  location.reload();
},
  (error)=>{this.alertify.error("tapez de informations correct")},
 
  

)
 
  }

}
