import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private service : WorkerService,private router : Router){
    this.service.setUserLogout();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
