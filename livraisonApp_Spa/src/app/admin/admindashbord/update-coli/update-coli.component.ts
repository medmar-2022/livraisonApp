import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { Coli } from 'src/app/models/colis';
import { Inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { error } from 'highcharts';

@Component({
  selector: 'app-update-coli',
  templateUrl: './update-coli.component.html',
  styleUrls: ['./update-coli.component.css']
})
export class UpdateColiComponent implements OnInit {
  commandUpdateForm:FormGroup;
//coli!:Coli;
 coli!:Coli
  constructor( public dialogRef: MatDialogRef<UpdateColiComponent>,@Inject(MAT_DIALOG_DATA) public data:Coli,private fb: FormBuilder,private admin:AdminService
  ,private alertify:AlertifyService)
   { 
    this.commandUpdateForm = this.fb.group({ 
     
       clientName: ['', Validators.required],
       clientTele: ['', Validators.required],
       clientVille: ['', Validators.required],
       clientAdress: ['', Validators.required],
       situationColi:['',Validators.required],
       montant: ['', Validators.required],
       dateLivraison:Date
      
     })
   this.coli=data;
    
  }

  ngOnInit(): void {
  
  }
  updatecoli(){
  
    this.admin.updateColi(this.coli.coliId,this.commandUpdateForm.value).subscribe(
      ()=>{this.alertify.success('votre colie est bien modifiée');
      location.reload();},
      error=>{this.alertify.error(error)}
    )
  }

}
