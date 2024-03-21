import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { WorkerService } from './worker.service';
@Injectable({   // <-- This is important
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private service : WorkerService,private router: Router) {}

  canActivate(): boolean {
    if(this.service.isUserLoggedIn){
      return true;
      
    }
 else{
  this.router.navigate(['login']);
  return false;
 }
  
  }

}

