import { Component, OnInit } from '@angular/core';
import {AuthenticationService, AuthorisationService} from "../../../services";

@Component({
  selector: 'app-kurzfragebogen',
  templateUrl: './kurzfragebogen.component.html',
  styleUrls: ['./kurzfragebogen.component.css']
})
export class KurzfragebogenComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private authorisationService: AuthorisationService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }
  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  hasAccess(roles:any)
  {
    return this.authorisationService.hasAccess(roles);
  }
}
