import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WorkerdisplayComponent } from './workerdisplay/workerdisplay.component';
import { WorkerRegisterComponent } from './workerregister/workerregister.component';
import { HomeComponent } from './home/home.component';
import { WorkerLoginComponent } from './workerlogin/workerlogin.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DriverComponent } from './driver/driver.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { PlumberComponent } from './plumber/plumber.component';
import { DetailsComponent } from './details/details.component';
import { WorkerhComponent } from './workerh/workerh.component';
import { ToastComponent } from './toast/toast.component';
import { WorkerprofileComponent } from './workerprofile/workerprofile.component';
import { CarcleanerComponent } from './carcleaner/carcleanercomponent';
import { PlastererComponent } from './plasterer/plasterer.component';
import { SecurityguardComponent } from './securityguard/securityguard.component';
import { ConstructionworkerComponent } from './constructionworker/constructionworker.component';
import { CookComponent } from './cook/cook.component';
import { GardenerComponent } from './gardener/gardener.component';
import { HousekeeperComponent } from './housekeeper/housekeeper.component';
import { LabourComponent } from './labour/labour.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { PainterComponent } from './painter/painter.component';
import { NotificationComponent } from './notification/notification.component';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    WorkerRegisterComponent,
    WorkerdisplayComponent,
    HomeComponent,
    WorkerLoginComponent,
    ElectricianComponent,
    AboutusComponent,
    AdminpageComponent,
    DriverComponent,
    CarpenterComponent,
    PlumberComponent,
    CarcleanerComponent,
    PlastererComponent,
    SecurityguardComponent,
    ConstructionworkerComponent,
    CookComponent,
    GardenerComponent,HousekeeperComponent,LabourComponent,MechanicComponent,PainterComponent,
   DetailsComponent,
   WorkerhComponent,
   ToastComponent,
   WorkerprofileComponent,
   NotificationComponent,
   TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
