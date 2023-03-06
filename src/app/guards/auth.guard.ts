import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {User} from '../models';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      const role = user.role;
      if (role === "admin" || role === "coach") {
        return true;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    }
  }
}
