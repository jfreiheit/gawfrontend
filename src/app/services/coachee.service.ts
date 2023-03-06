import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Coachee, User} from '../models';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class CoacheeService {
  public currentCoachee: Observable<Coachee>;
  private currentCoacheeSubject: BehaviorSubject<Coachee>;

  constructor(private http: HttpClient) {
    this.currentCoacheeSubject = new BehaviorSubject<Coachee>(JSON.parse(localStorage.getItem('aktuellerCoachee')));
    this.currentCoachee = this.currentCoacheeSubject.asObservable();
  }

  getCoachee(_id: string) {
    return this.http.get<any>(`${environment.apiUrl}/coachee/` + _id).pipe(map(data => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('aktuellerCoachee', JSON.stringify(data));
      this.currentCoacheeSubject.next(data);
      return data;
    }));
  }

  update(id: string, coachee: Coachee): Observable<Coachee> {
    return this.http.put<Coachee>(`${environment.apiUrl}/coachee/` + coachee._id, coachee).pipe(map(response => response));
  }

}
