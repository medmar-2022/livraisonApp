import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coli } from 'src/app/models/colis';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UpdateColiComponent } from '../admindashbord/update-coli/update-coli.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userUpdateForm:FormGroup;
  user!:User;
  constructor( public dialogRef: MatDialogRef<UpdateColiComponent>,@Inject(MAT_DIALOG_DATA) public data:User,private fb: FormBuilder,private admin:AdminService
  ,private alertify:AlertifyService) {
    this.userUpdateForm = this.fb.group({ 
     
      storeName: ['', Validators.required],
      email: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', Validators.required],
      cinUrl:['',Validators.required]
     
    })
  this.user=data;
   }

  ngOnInit(): void {

  }
updateuser(){
  
    this.admin.updateUser(this.user.userId,this.userUpdateForm.value).subscribe(
      ()=>{this.alertify.success('votre données est bien modifiées');
      location.reload();},
      error=>{this.alertify.error(error)}
    )
  }
}
