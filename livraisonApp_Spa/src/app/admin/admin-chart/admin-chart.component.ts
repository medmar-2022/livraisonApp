import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashbordData } from 'src/app/models/dashbordData';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent implements OnInit {
  data: Array<number> = [];
  chart=new Chart();
  dashbordData!:DashbordData;
  constructor(private admin:AdminService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getCounts();
  }
  getCounts(){
    
    this.admin.getcount().subscribe(
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
              text: 'Nombre d colies'
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
