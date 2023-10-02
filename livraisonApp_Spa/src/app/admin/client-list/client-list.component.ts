import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UpdateColiComponent } from '../admindashbord/update-coli/update-coli.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom','email','telephone', 'ville','cinUrl', 'password','modifier'];
  selectedRow:any;
  user!:User[]
  constructor(private admin: AdminService, private alertify: AlertifyService, private router: Router
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getusers()
  }
  getusers() {
    
    this.admin.getUsers().subscribe(
      (user:User[]) => {
        this.user = user;

      },
      error => { this.alertify.error(error) }
    )
  }
  onRowClicked(row: any) {
    this.selectedRow= row;
    const dialogRef =this.dialog.open(UpdateUserComponent, {
      width: "600px",
      height: "600px",
      data: {userId:this.selectedRow.userId,
        storeName:this.selectedRow.storeName,
        email:this.selectedRow.email,
        ville:this.selectedRow.ville,
        telephone:this.selectedRow.telephone,
        cinUrl:this.selectedRow.cinUrl
       
      }
      
    });
}
}
