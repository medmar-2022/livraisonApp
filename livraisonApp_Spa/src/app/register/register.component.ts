import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router,private alertify:AlertifyService) {
      this.registerForm = this.fb.group({ 
        storename: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        
        ville: ['', Validators.required],
        telephone: ['', Validators.required],
        ripurl: ['', Validators.required],
        cinurl: ['', Validators.required]
      })
      
   }

  ngOnInit() {
    
  }
  passwordMatchValidator(form: FormGroup) {
 
    return form.get('password')?.value === form.get('confirmPassword')  ? null: { 'mismatch': true };
  }
 register(){
  this.auth.register(this.registerForm.value).subscribe(
    ()=>{this.router.navigate(['/login'])},
    (error)=>{this.alertify.error('erreur')}
    
   
    )
  
 }
}
