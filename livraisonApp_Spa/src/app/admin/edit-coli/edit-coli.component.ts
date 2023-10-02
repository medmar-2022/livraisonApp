import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reclam } from 'src/app/models/reclam';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UpdateColiComponent } from '../admindashbord/update-coli/update-coli.component';

@Component({
  selector: 'app-edit-coli',
  templateUrl: './edit-coli.component.html',
  styleUrls: ['./edit-coli.component.css']
})
export class EditColiComponent implements OnInit {
  reclamUpdateForm:FormGroup;
  reclam!:Reclam;
  constructor( public dialogRef: MatDialogRef<UpdateColiComponent>,@Inject(MAT_DIALOG_DATA) public data:Reclam,private fb: FormBuilder,private admin:AdminService
  ,private alertify:AlertifyService) { 
    this.reclamUpdateForm = this.fb.group({ 
     
      
      
      repenseRecl: ['', Validators.required],
      situation: ['', Validators.required],
     
     
    })
  this.reclam=data;
  }

  ngOnInit(): void {
  }
  updatereclam(){
  
    this.admin.updateReclam(this.reclam.reclamId,this.reclamUpdateForm.value).subscribe(
      ()=>{this.alertify.success('votre reclamation est bien modifiée');
      location.reload();},
      error=>{this.alertify.error(error)}
    )
  }
}
