import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth.guard';
import { CarcleanerComponent } from './carcleaner/carcleanercomponent';


import { CarpenterComponent } from './carpenter/carpenter.component';
import { ConstructionworkerComponent } from './constructionworker/constructionworker.component';
import { CookComponent } from './cook/cook.component';
import { DetailsComponent } from './details/details.component';
import { DriverComponent } from './driver/driver.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { GardenerComponent } from './gardener/gardener.component';
import { HomeComponent } from './home/home.component';
import { HousekeeperComponent } from './housekeeper/housekeeper.component';
import { LabourComponent } from './labour/labour.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './loginauth.guard';

import { LogoutComponent } from './logout/logout.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { NotificationComponent } from './notification/notification.component';
import { PainterComponent } from './painter/painter.component';
import { PlastererComponent } from './plasterer/plasterer.component';
import { PlumberComponent } from './plumber/plumber.component';
import { RegisterComponent } from './register/register.component';
import { SecurityguardComponent } from './securityguard/securityguard.component';
import { WorkerdisplayComponent } from './workerdisplay/workerdisplay.component';
import { WorkerhComponent } from './workerh/workerh.component';
import { WorkerLoginComponent } from './workerlogin/workerlogin.component';
import { WorkerprofileComponent } from './workerprofile/workerprofile.component';
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
  {path: 'carpenter',component:CarpenterComponent},
  {path: 'plumber',component:PlumberComponent},
  {path: 'labour',component:LabourComponent},
  {path: 'painter',component:PainterComponent},
  {path: 'cook',component:CookComponent},  {path: 'housekeeper',component:HousekeeperComponent},
  {path: 'gardener',component:GardenerComponent},
  {path: 'carcleaner',component:CarcleanerComponent},  {path: 'securityguard',component:SecurityguardComponent},
  {path: 'plasterer',component:PlastererComponent},
  {path: 'constructionworker',component:ConstructionworkerComponent},
  {path: 'mechanic',component:MechanicComponent},
  {path: 'workerhome',component:WorkerhComponent},
  {path: 'workerprofile',component:WorkerprofileComponent},
  {path: 'details/:id',component:DetailsComponent,canActivate:[AuthGuard]},
  {path: 'notification',component:NotificationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
