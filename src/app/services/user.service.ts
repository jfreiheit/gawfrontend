import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models';
import {map} from 'rxjs/operators';
import {Coachee} from "../models";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient, private alertService: AlertService, private authenticationService: AuthenticationService, private router: Router) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/register`, user).pipe(map(response => response));
  }
  update(id: string, data: User): Observable<User>{
    return this.http.put<User>(`${environment.apiUrl}/user/` + id, data).pipe(map(response => response));
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(map(response => response));
  }

  getUser(_id: string): any {
    return this.http.get<any>(`${environment.apiUrl}/user/` + _id).pipe(map(response => response));
  }

  createCoachee(coachee: Coachee): void {
    this.http.post<Coachee>(`${environment.apiUrl}/createCoachee`,  coachee)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/meine-vorgaenge']);
        },
        error => {
          console.log(error);
          alert(error.message);
        }
      );
  }


  delete(_id: number): any {
    return this.http.delete(`${environment.apiUrl}/user/` + _id).pipe(map(response => response));
  }

  deleteCoachee(_id: number): any {
    return this.http.delete(`${environment.apiUrl}/coachee/` + _id).pipe(map(response => response));
  }

  getCoachees(_id: number): Observable<Coachee[]> {
    return this.http.get<Coachee[]>(`${environment.apiUrl}/`+ _id + `/coachees`);
  }
}
