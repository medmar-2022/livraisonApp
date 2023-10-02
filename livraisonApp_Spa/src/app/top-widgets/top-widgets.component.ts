import { Component, OnInit } from '@angular/core';
import { faLocation, faShop, faBoxes, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Count } from '../models/count';
import { AlertifyService } from '../services/alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommandService } from '../services/command.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  count!:Count;
  jwtHelper = new JwtHelperService();
  isPhonePortrait = false;

  constructor(private alertify:AlertifyService,private command :CommandService
    ,private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.getCount();
    this.responsive.observe([
      Breakpoints.HandsetLandscape,      
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait
      ])
    .subscribe(result => {

      this.isPhonePortrait = false; 

      if (result.matches) {
        this.isPhonePortrait = true;
        console.log("screens matches")
      }

});
  }
getCount(){
  var tokn=localStorage.getItem("token");
    var res=this.jwtHelper.decodeToken(tokn!).nameid;
    this.command.getcount(res).subscribe(
     (count:Count) =>{this.count=count},
     error=>{this.alertify.error('erreur')}
    )
}
}
