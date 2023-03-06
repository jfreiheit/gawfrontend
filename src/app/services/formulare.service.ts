import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

import {map} from 'rxjs/operators';
import {Formulare} from "../models";
import {Observable} from "rxjs";
import {Coachee} from "../models";

@Injectable()
export class FormulareService {
  constructor(private http: HttpClient) {
  }

  getAll(_id: string): Observable<Formulare[]> {   //Alle Formulare
    return this.http.get<Formulare[]>(`${environment.apiUrl}/`+ _id + `/formulare`).pipe(map(response => response));
  }

  getFormular( formularId: string): any { //Einzelnes Formular
    return this.http.get<any>(`${environment.apiUrl}/formular/` + formularId).pipe(map(response => response));
  }

  create(formulare: Formulare, _id: string): void {
     this.http.post<any>(`${environment.apiUrl}/` + _id + `/formulare`,  formulare)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  update(formularId: string, formular : Formulare): any {
    return this.http.put<any>(`${environment.apiUrl}/formular/` + formularId, formular);
  }

  delete(_id: number): any {
    return this.http.delete(`${environment.apiUrl}/formular/` + _id).pipe(map(response => response));
  }

}
