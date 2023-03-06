import { Component, OnInit } from '@angular/core';
import {AuthenticationService, AuthorisationService, TermineService} from "../../../services";
import {Termine} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit {
  termine!: Termine[]
  termin!: Termine
  updated: boolean
  form: FormGroup
  newTermin: Termine
  terminId: string
  userId: string
  coacheeId: string


  constructor(private termineService: TermineService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private authenticationService: AuthenticationService,
              private authorisationService: AuthorisationService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
        datum: ['', Validators.required],
        uhrzeit: ['', Validators.required],
        stunden: ['', Validators.required],
        ort: ['', Validators.required],
        inhalt: ['', Validators.required],
        status: ['', Validators.required],
        aufgabe: ['', Validators.required],
      }
    )
    this.newTermin = {
      _id: '',
      user: '',
      coachee: '',
      datum: '',
      uhrzeit: '',
      stunden: '',
      ort: '',
      inhalt: '',
      status: '',
      aufgabe: '',
    }
  }

  ngOnInit(): void {
    //this.userId = JSON.parse(localStorage.getItem('user')).id
    this.coacheeId = this.route.snapshot.paramMap.get('id') || JSON.parse(localStorage.getItem('coachee')).id
    //console.log('userId = ' + this.userId)
    console.log('coacheeId = ' + this.coacheeId)
    this.readAll();
  }

  create():void {
    const data = this.form.value
    this.newTermin.datum = data.datum
    this.newTermin.uhrzeit = data.uhrzeit
    this.newTermin.stunden = data.stunden
    this.newTermin.ort = data.ort
    this.newTermin.inhalt = data.inhalt
    this.newTermin.status = data.status
    this.newTermin.aufgabe = data.aufgabe
    this.termineService.createTermin(this.coacheeId, this.newTermin).subscribe(
      (response: any) => {
        console.log('response: ', response)
        if (response.status == 204){
          console.log(response.status)
          this.reload(true)
        } else {
          console.log(response.status)
          console.log(response.error)
          this.reload(false)
        }
      },
      error => console.log(error))
  }
  readAll(): void {
    this.termineService.getCoacheesTermine(this.coacheeId).subscribe(
      (
        response: Termine[]) => {
        this.termine = response;
        console.log(this.termine);
        return this.termine;
      }, (error: any) => console.log(error)
    );
  }

  delete(_id:string): void {
    this.termineService.delete(_id)
  .subscribe(
      (response: any) => {
        console.log('response: ', response)
        if (response.status == 204){
          console.log(response.status)
          this.reload(true)
        } else {
          console.log(response.status)
          console.log(response.error)
          this.reload(false)
        }
      }, (error: any) => console.log(error)
    )
  }
  reload(updated: boolean){
    this.updated = updated
    this.readAll()
    this.router.navigateByUrl('/termine/'+this.coacheeId)
  }
  cancel(): void {
    this.location.back();
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }
  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }
  hasAccess(roles:any) {
    return this.authorisationService.hasAccess(roles);
  }

}

