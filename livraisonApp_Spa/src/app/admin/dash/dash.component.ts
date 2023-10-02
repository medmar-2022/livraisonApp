import { Component, OnInit } from '@angular/core';
import { Count } from 'src/app/models/count';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
count!:Count;
  constructor(private admin:AdminService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getCount();
  }
  getCount(){
    
      this.admin.getSommcount().subscribe(
       (count:Count) =>{this.count=count},
       error=>{this.alertify.error(error)}
      )
  }
}
