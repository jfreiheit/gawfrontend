import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {AuthenticationService} from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const currentUser = this.authenticationService.currentUserValue;
    const currentCoache = this.authenticationService.currentCoacheeValue;
    const token = this.authenticationService.tokenValue;

    const isLoggedIn = currentUser && token;
    const isLoggedInCoachee = currentCoache && token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    } else if (isLoggedInCoachee && token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    return next.handle(request);
  }
}
