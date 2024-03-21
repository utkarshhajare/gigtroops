import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { WorkerService } from './worker.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: WorkerService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.getUserLoggedStatus()) {
        // User is already logged in, redirect to another route
        this.router.navigate(['/dashboard']); // Example: redirect to dashboard
        return false;
    }
    return true;
}
}
