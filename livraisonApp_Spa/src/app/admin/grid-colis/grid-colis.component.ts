import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Coli } from 'src/app/models/colis';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CommandService } from 'src/app/services/command.service';
import { UpdateColiComponent } from '../admindashbord/update-coli/update-coli.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-grid-colis',
  templateUrl: './grid-colis.component.html',
  styleUrls: ['./grid-colis.component.css']
})
export class GridColisComponent implements OnInit {
  message = "hello";
  colis!: Coli[];
  coli!: Coli
  user!: User;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  selectedRow:any;
  
  displayedColumns: string[] = ['coli', 'nom', 'telephone', 'ville', 'adresse', 'montant', 'situation', 'date de livraison','modifier'];
  constructor(private admin: AdminService, private alertify: AlertifyService, private router: Router
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getcoli();
   
  }
  getcoli() {
    
    this.admin.getColis().subscribe(
      (colis: Coli[]) => {
        this.colis = colis;

      },
      error => { this.alertify.error(error) }
    )
  }
  onRowClicked(row: any) {
    this.selectedRow= row;
    const dialogRef =this.dialog.open(UpdateColiComponent, {
      width: "600px",
      height: "600px",
      data: {coliId:this.selectedRow.coliId,
        clientName:this.selectedRow.clientName,
        clientVille:this.selectedRow.clientVille,
        clientAdress:this.selectedRow.clientAdress,
        clientTele:this.selectedRow.clientTele,
        montant:this.selectedRow.montant,
        situationColi:this.selectedRow.situationColi
      }
      
    });
}
 /* openDialog() {
    
  
    const dialogRef =this.dialog.open(UpdateColiComponent, {
      width: "600px",
      height: "600px",
      data: {coliId:this.selectedRow.coliId,
        clientName:this.selectedRow.clientName,
        clientVille:this.selectedRow.clientVille,
        clientAdress:this.selectedRow.clientAdress
      }
      
    });
    console.log(this.selectedRow)
  }*/
 
  }




