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
   DetailsComponent,
   WorkerhComponent,
   ToastComponent
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
