import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClientdashbordComponent } from './clientdashbord/clientdashbord.component';
import { AdmindashbordComponent } from './admin/admindashbord/admindashbord.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommandService } from './services/command.service';
import { AuthGuard } from './guards/auth.guard';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { JwtModule } from '@auth0/angular-jwt';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashbordClientComponent } from './dashbord-client/dashbord-client.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { ChartModule } from 'angular-highcharts';
import { AddReclamComponent } from './add-reclam/add-reclam.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReclamService } from './services/reclam.service';
import { DashbordService } from './services/dashbord.service';
import { EditColiComponent } from './admin/edit-coli/edit-coli.component';
import { GridColisComponent } from './admin/grid-colis/grid-colis.component';
import { UpdateColiComponent } from './admin/admindashbord/update-coli/update-coli.component';
import { AdminService } from './services/admin.service';
import { UpdateReclamComponent } from './admin/update-reclam/update-reclam.component';
import { DashComponent } from './admin/dash/dash.component';
import { AdminChartComponent } from './admin/admin-chart/admin-chart.component';
import { ClientListComponent } from './admin/client-list/client-list.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [							
    AppComponent,
      NavComponent,
      LoginComponent,
      RegisterComponent,
      ClientdashbordComponent,
      AdmindashbordComponent,
      QuisuisjeComponent,
      ClientComponent,
      SideNavComponent,
      DashbordClientComponent,
      TopWidgetsComponent,
      SalesByMonthComponent,
      SalesByCategoryComponent,
      AddReclamComponent,
      EditColiComponent,
      GridColisComponent,
      UpdateColiComponent,
      UpdateReclamComponent,
      DashComponent,
      AdminChartComponent,
      ClientListComponent,
      UpdateUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
       
      }
    }),
    FormsModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    FontAwesomeModule,
    ChartModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    ScrollingModule
  ],
  providers: [
    AlertifyService,
    AuthGuard,
    AuthService,
   CommandService,
   ReclamService,
   DashbordService,
   AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
