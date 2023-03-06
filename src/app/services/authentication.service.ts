import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {User, Coachee} from '../models';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentCoacheeSubject: BehaviorSubject<Coachee>;
  private currentSecretSubject: BehaviorSubject<User['secret']>;
  public currentUser: Observable<User>;
  public currentCoachee: Observable<Coachee>;
  private tokenSubject: BehaviorSubject<string>;
  private token: Observable<string>;
  private secret: Observable<string>;

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentSecretSubject = new BehaviorSubject<User['secret']>(JSON.parse(localStorage.getItem('secret')));
    console.log(localStorage.getItem('token'))
    this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
    this.currentCoacheeSubject = new BehaviorSubject<Coachee>(JSON.parse(localStorage.getItem('coachee')));
    this.token = this.tokenSubject.asObservable();
    this.secret = this.currentSecretSubject.asObservable();
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentCoachee = this.currentCoacheeSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get currentCoacheeValue(): Coachee {
    return this.currentCoacheeSubject.value;
  }

  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  public get secretValue(): string {
    return this.currentSecretSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, {email: email,password: password}).pipe(map(data => {
      console.log('data', data)
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token));
      this.currentUserSubject.next(data);
      this.tokenSubject.next(data.token);
      return data.user;
    }));
  }


  loginCoachee(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login-coachee`, {email,password}).pipe(map(data => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('coachee', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token));
      this.currentCoacheeSubject.next(data);
      this.tokenSubject.next(data.token);
      return data.coachee;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('secret');
    localStorage.removeItem('coachee');
    localStorage.removeItem('aktuellerCoachee');
    this.currentSecretSubject.next(null);
    this.currentCoacheeSubject.next(null);
    this.currentUserSubject.next(null);
  }

  forgotPassword(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/forgot-password`, {email}).pipe((response) => response);
  }

  forgotPasswordCoachee(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/forgot-password-coachee`, {email}).pipe((response) => response);
  }

  verify(email: string, secret: string) {
    return this.http.post<any>(`${environment.apiUrl}/login/verify`, {email, secret}).pipe(map(data => {
      localStorage.setItem('secret', JSON.stringify(data.secret));
      this.currentSecretSubject.next(data.secret);
      return data.secret;
    }));
  }

  verifyCoachee(email: string, secret: string) {
    return this.http.post<any>(`${environment.apiUrl}/login-coachee/verify`, {email, secret}).pipe(map(data => {
      localStorage.setItem('secret', JSON.stringify(data.secret));
      this.currentSecretSubject.next(data.secret);
      return data.secret;
    }));
  }



  resetPassword(password: string, token: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-password`, {
      password,
      token
    }).pipe((response) => response);
  }

  resetPasswordCoachee(password: string, token: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-password-coachee`, {
      password,
      token
    }).pipe((response) => response);
  }

  forgotSecret(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/forgot-secret`, {email}).pipe((response) => response);
  }

  forgotSecretCoachee(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/forgot-secret-coachee`, {email}).pipe((response) => response);
  }

  resetSecret(secret: string, token: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-secret`, {
      secret,
      token
    }).pipe((response) => response);
  }

  resetSecretCoachee(secret: string, token: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-secret-coachee`, {
      secret,
      token
    }).pipe((response) => response);
  }

  isTokenExpired() {
    return this.jwtHelperService.isTokenExpired(localStorage.getItem('token'));
  }

}
