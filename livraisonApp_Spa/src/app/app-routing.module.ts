import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { ClientdashbordComponent } from './clientdashbord/clientdashbord.component';
import { AdmindashbordComponent } from './admin/admindashbord/admindashbord.component';
import { RegisterComponent } from './register/register.component';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { DashbordClientComponent } from './dashbord-client/dashbord-client.component';
import { AddReclamComponent } from './add-reclam/add-reclam.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login',component:LoginComponent,pathMatch:'full'},
  { path: 'register',component:RegisterComponent},
  { path: 'quisuisje', component: QuisuisjeComponent },
 
  { path: 'dashbord', component: TopWidgetsComponent,runGuardsAndResolvers: 'always'
  , canActivate: [AuthGuard],},
  { path: 'colis', component: ClientComponent ,runGuardsAndResolvers: 'always'
  , canActivate: [AuthGuard],},
  { path: 'reclamations', component: AddReclamComponent ,runGuardsAndResolvers: 'always'
  , canActivate: [AuthGuard],},
  { path: 'addcoli', component: ClientdashbordComponent ,runGuardsAndResolvers: 'always'
  , canActivate: [AuthGuard],},
  { path: 'app-admin', component: AdmindashbordComponent,runGuardsAndResolvers: 'always'
  , canActivate: [AuthGuard],},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
