import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService, AuthorisationService} from "../../services";
import { person } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person = person;
  public verify = true;
  twoFactorFormSubmitAttempt: boolean

  constructor(private authenticationService: AuthenticationService,
              private authorisationService: AuthorisationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  getCoacheeID() {
    if (JSON.parse(localStorage.getItem('coachee'))) {
      return JSON.parse(localStorage.getItem('coachee')).id;
    } else {
      return '';
    }  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

  getFirstName() {
    if (JSON.parse(localStorage.getItem('user'))) {
      return JSON.parse(localStorage.getItem('user')).vorname;
    } else {
      return '';
    }
  }

  getRolle() {
    if (JSON.parse(localStorage.getItem('user'))) {
      return JSON.parse(localStorage.getItem('user')).role;
    } else {
      return '';
    }
  }

  hasAccess(roles:any) {
    return this.authorisationService.hasAccess(roles);
  }
}
