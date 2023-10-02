import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-dashbord-client',
  templateUrl: './dashbord-client.component.html',
  styleUrls: ['./dashbord-client.component.css']
})
export class DashbordClientComponent implements OnInit {

  constructor(private alertify:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }
  loggedOut(){
    localStorage.removeItem('token');
    this.alertify.message('Deconextion');
    this.router.navigate(['/login']);
  }
}
