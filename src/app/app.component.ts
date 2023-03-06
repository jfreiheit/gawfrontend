import { Component } from '@angular/core';
import {AuthenticationService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Willkommen';

  constructor(private authenticationService: AuthenticationService) {
    if (localStorage.getItem('token')) {
        if (this.authenticationService.isTokenExpired()) {
          this.authenticationService.logout();
        }
    }
  }
}
