import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashbordService } from '../services/dashbord.service';
import { AlertifyService } from '../services/alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Count } from '../models/count';
import { DashbordData } from '../models/dashbordData';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  decodedToken:any;
  dashbordData!:DashbordData;
  data: Array<number> = [];
  chart=new Chart();
 

  constructor(private dashbord:DashbordService,private alertify:AlertifyService) { }

  ngOnInit(): void {
  
    this.getCounts();
    
  }
  
getCounts(){
  var tokn=localStorage.getItem("token");
  var res=this.jwtHelper.decodeToken(tokn!).nameid
  this.dashbord.getcount(res).subscribe(
    (dashbordData:DashbordData)=>{this.dashbordData=dashbordData;
      this.chart = new Chart({
        chart: {
          type: 'line',
          height: 325
        },
        title: {
          text: 'Colies par mois'
        },
        xAxis: {
          categories: [
            'Jan',
            'Fev',
            'Mar',
            'Avr',
            'May',
            'Jun',
            'Jul',
            'Aout',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis: {
          title: {
            text: 'Nombre de colies'
          }
        },
        series: [
          {
            name: "Livrées",
            type: "line",
            color: '#044342',
            data:this.dashbordData.countLivData
            
          },
          {
            name: 'Retournées',
            type: 'line',
            color: '#7e0505',
            data:this.dashbordData.countRetData
          },
          {
            name: 'Facturées',
            type: 'line',
            color: '#ed9e20',
            data:this.dashbordData.countFacData
          },
        ],
        credits: {
          enabled: false
        }
      })
    },
    error=>{this.alertify.error('erreur')}
  )

}
}
