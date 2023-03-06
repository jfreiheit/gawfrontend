import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthorisationService, TermineService} from "../../../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Termine} from "../../../../models";

@Component({
  selector: 'app-update-termine',
  templateUrl: './update-termine.component.html',
  styleUrls: ['./update-termine.component.css']
})
export class UpdateTermineComponent implements OnInit {
  form: FormGroup
  termin!: Termine
  userId: string
  coacheeId: string
  terminId: string

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
    this.termin = {
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
    this.coacheeId = this.route.snapshot.paramMap.get('id')
    this.terminId = this.route.snapshot.paramMap.get('id') || ''
    //console.log('userId = ' + this.userId)
    console.log('coacheeId = ' + this.coacheeId)
    console.log('terminId = ' + this.terminId)
    this.getOne(this.terminId)
  }

  update(): void {
    const values = this.form.value;
    this.termin.datum = values.datum;
    this.termin.uhrzeit = values.uhrzeit;
    this.termin.stunden = values.stunden;
    this.termin.ort = values.ort;
    this.termin.inhalt = values.inhalt;
    this.termin.status = values.status;
    this.termin.aufgabe = values.aufgabe;
    this.termineService.update(this.terminId, this.termin)
      .subscribe(
        (response: any) => {
          console.log('response: ', response)
          console.log(response._id)
        }, (error: any) => console.log(error)
      )
    this.cancel()
  }


  getOne(id: string): void {
    this.termineService.getOneTermine(id).subscribe(
      (
        response: Termine) => {
        this.termin = response;
        this.form.patchValue({
          datum: this.termin?.datum,
          uhrzeit: this.termin?.uhrzeit,
          stunden: this.termin?.stunden,
          ort: this.termin?.ort,
          inhalt: this.termin?.inhalt,
          status: this.termin?.status,
          aufgabe: this.termin?.aufgabe,
        });
        console.log(this.termin)
        return this.termin;
      },
      error => console.log(error)
    );
  }

  /*onSubmit(): void {
    // if (this.formUser.valid) {
    const data = this.form.value
    this.termin.datum = data.datum
    this.termin.uhrzeit = data.uhrzeit
    this.termin.stunden = data.stunden
    this.termin.ort = data.ort
    this.termin.inhalt = data.inhalt
    this.termin.status = data.status
    this.termin.aufgabe = data.aufgabe
    this.termineService.update(this.coacheeId, this.termin).subscribe(
      (response: any) => {
        if (response.status == 204) {
          console.log(response.status)
        } else {
          console.log(response.status)
          console.log(response.error)
        }
      }, (error: any) => console.log(error)
    )
    this.router.navigateByUrl('/meine-vorgaenge/:coacheeId');
  }*/

  cancel(): void {
    this.location.back();
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  hasAccess(roles: any) {
    return this.authorisationService.hasAccess(roles);
  }


}
