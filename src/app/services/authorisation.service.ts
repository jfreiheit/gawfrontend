import { Injectable } from '@angular/core';

@Injectable()
export class AuthorisationService {

  constructor() {
  }

  hasAccess(roles: any) {
    if (localStorage.getItem('user') && roles) {
      for (let index = 0; index < roles.length; index++) {
        if (JSON.parse(localStorage.getItem('user')).role === roles[index]) {
          return true;
        }
      }
    }
  }
}
