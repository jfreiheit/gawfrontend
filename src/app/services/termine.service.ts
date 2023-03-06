import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Termine} from "../models"
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";


@Injectable({providedIn: 'root'})
export class TermineService {



  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  createTermin(_id: string, termin: Termine): Observable<Termine> {
    return this.http.post<Termine>(`${environment.apiUrl}/` + _id + `/termin`, termin).pipe(map(response => response));
  }
  getOneTermine(_id: string): Observable<Termine> {
    return this.http.get<Termine>(`${environment.apiUrl}/termin/` + _id).pipe(map(response => response));
  }

  getAllTermine(id: number): Observable<Termine[]> {
    return this.http.get<Termine[]>(`${environment.apiUrl}/termine/` + id).pipe(map(response => response));
  }

  getCoacheesTermine(_id: string): Observable<Termine[]> {
    return this.http.get<Termine[]>(`${environment.apiUrl}/termine/` + _id).pipe(map(response => response));
  }

  update(_id: string, data: Termine): Observable<Termine> {
    return this.http.put<Termine>(`${environment.apiUrl}/termin/`+ _id, data).pipe(map(response => response));
  }

  delete(id: string): Observable<Termine> {
    return this.http.delete<Termine>(`${environment.apiUrl}/termin/` + id).pipe(map(response => response));
  }

}
