import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Chart } from 'angular-highcharts';
import { DashbordData } from '../models/dashbordData';
import { AlertifyService } from '../services/alertify.service';
import { DashbordService } from '../services/dashbord.service';
import { Count } from '../models/count';
import { getLocaleMonthNames } from '@angular/common';


@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css']
})
export class SalesByCategoryComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  decodedToken:any;
  count!:Count;
  data: Array<number> = [];
  chart=new Chart();
  titre=new Date().toLocaleDateString();
  

  constructor(private dashbord:DashbordService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
  var tokn=localStorage.getItem("token");
  var res=this.jwtHelper.decodeToken(tokn!).nameid;
  this.dashbord.getSommcount(res).subscribe(
    (count:Count)=>{
      this.count=count;
      this.chart = new Chart({
        chart: {
          type: 'pie',
          height: 325
        },
        title: {
          text: 'Situation des colis en '+this.titre
        },
        xAxis: {
          categories: [
            'Livrée',
            'Envoyée',
            'Retournée',
            'Facturée',
            
          ]
        },
        yAxis: {
          title: {
            text: 'Revenue in %'
          }
        },
        series: [
         {
          type: 'pie',
          data: [
            {
              name: 'Livrée',
              y: this.count.sommColiLiv ,
              color: '#044342',
            },
            {
              name: 'Envoyée',
              y: this.count.sommColiEnv ,
              color: '#6920fb',
            },
            {
              name: 'Retournée',
              y: this.count.sommColiRet ,
              color: '#7e0505',
            },
            {
              name: 'Facturée',
              y: this.count.sommColiFac,
              color: '#ed9e20',
            }
           
          ]
         }
        ],
        credits: {
          enabled: false
        }
      })
    }
  )
 }
}
