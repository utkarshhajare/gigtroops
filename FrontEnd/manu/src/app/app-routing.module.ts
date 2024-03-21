import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth.guard';


import { CarpenterComponent } from './carpenter/carpenter.component';
import { DetailsComponent } from './details/details.component';
import { DriverComponent } from './driver/driver.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './loginauth.guard';

import { LogoutComponent } from './logout/logout.component';
import { PlumberComponent } from './plumber/plumber.component';
import { RegisterComponent } from './register/register.component';
import { WorkerdisplayComponent } from './workerdisplay/workerdisplay.component';
import { WorkerhComponent } from './workerh/workerh.component';
import { WorkerLoginComponent } from './workerlogin/workerlogin.component';
import { WorkerRegisterComponent } from './workerregister/workerregister.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login', component : LoginComponent},//,canActivate:[ LoginAuthGuard]
  {path: 'workerlogin', component : WorkerLoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'workerregister', component: WorkerRegisterComponent},
  {path: 'workerdisplay', component: WorkerdisplayComponent,},//canActivate:[AuthGuard]
  {path: 'logout', component : LogoutComponent },
  {path: 'electrician', component : ElectricianComponent },
  {path: 'aboutus', component: AboutusComponent},
  {path: 'admin',component:AdminpageComponent,canActivate:[AuthGuard]},
  {path: 'driver',component:DriverComponent},
  {path: 'carpenter',component:CarpenterComponent,canActivate:[AuthGuard]},
  {path: 'plumber',component:PlumberComponent,canActivate:[AuthGuard]},
  {path: 'workerhome',component:WorkerhComponent},
  {path: 'details/:id',component:DetailsComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
