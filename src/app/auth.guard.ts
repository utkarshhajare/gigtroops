import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { WorkerService } from './worker.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({   // <-- This is important
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private service : WorkerService,private router : Router) {}

  canActivate(): boolean {
    // Check if the user is logged in and return true
if (this.service.getUserLoggedStatus()){
  return true;
}
    // else navigate to login component and return false
 else{
  this.router.navigate(['login']);
  return false;
 }
  }

}

