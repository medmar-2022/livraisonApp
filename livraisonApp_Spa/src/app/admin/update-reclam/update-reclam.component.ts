import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Reclam } from 'src/app/models/reclam';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { EditColiComponent } from '../edit-coli/edit-coli.component';

@Component({
  selector: 'app-update-reclam',
  templateUrl: './update-reclam.component.html',
  styleUrls: ['./update-reclam.component.css']
})
export class UpdateReclamComponent implements OnInit {
  displayedColumns: string[] = ['datereclamation', 'titre','message','situation','userid','modifier'];
  selectedRow:any
  reclam!:Reclam[];
  constructor(private admin: AdminService, private alertify: AlertifyService, private router: Router
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getReclams();
  }
  getReclams() {
    
    this.admin.getreclams().subscribe(
      (reclam:Reclam[]) => {
        this.reclam = reclam;

      },
      error => { this.alertify.error(error) }
    )
  }
  onRowClicked(row: any) {
    this.selectedRow= row;
    const dialogRef =this.dialog.open(EditColiComponent, {
      width: "600px",
      height: "600px",
      data: {reclamId:this.selectedRow.reclamId,
        dateRecl:this.selectedRow.dateRecl,
        repenseRecl:this.selectedRow.repenseRecl,
       situation:this.selectedRow.situation
       
      }
      
    });
}

}
