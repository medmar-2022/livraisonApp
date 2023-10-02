import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ReclamService } from '../services/reclam.service';
import { Reclam } from '../models/reclam';
import { AlertifyService } from '../services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reclam',
  templateUrl: './add-reclam.component.html',
  styleUrls: ['./add-reclam.component.css']
})
export class AddReclamComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  reclam!:Reclam[]
  reclamForm:FormGroup
  constructor(private reclamservice:ReclamService,private alertify:AlertifyService,private fb: FormBuilder) { 
    var tokn=localStorage.getItem("token");
    var res=this.jwtHelper.decodeToken(tokn!).nameid;
    this.reclamForm = this.fb.group({ 
     userId:res,
     titreRecl: ['', Validators.required],
     messRecl: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getRec();
  }
  getRec(){
    var tokn=localStorage.getItem("token");
    var res=this.jwtHelper.decodeToken(tokn!).nameid;
    this.reclamservice.getReclams(res).subscribe(
     (reclam:Reclam[])=>{this.reclam=reclam} ,
     error=>{this.alertify.error(error)}
    )
  }
  addRec(){
this.reclamservice.addreclam(this.reclamForm.value).subscribe(
  ()=>{this.alertify.success('Réclamation ajoutéé');
  location.reload();
},
error=>{this.alertify.error('erreur')}
)
  }

}
