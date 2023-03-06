import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models';
import { Location } from '@angular/common';
import {Coachee} from "../../../models";
import { CoacheeService } from 'src/app/services';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-coacheedaten',
  templateUrl: './update-coacheedaten.component.html',
  styleUrls: ['./update-coacheedaten.component.css']
})
export class UpdateCoacheedatenComponent implements OnInit {
  coacheeId: string
  coachee: Coachee
  form: FormGroup

  constructor(private coacheeService: CoacheeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
) {
  this.form = this.fb.group(
    {
      nameControl: [''],
      vornameControl: [''],
      firmennameControl: ['', Validators.required],
      firmen_strControl: ['', Validators.required],
      firmen_nrControl: ['', Validators.required],
      firmen_ortControl: ['', Validators.required],
      firmen_plzControl: ['', Validators.required],
      telefonnummerControl: [''],
      arbeitgeber_strControl: [''],
      arbeitgeber_nrControl: [''],
      arbeitgeber_ortControl: [''],
      arbeitgeber_plzControl: [''],
      privat_strControl: [''],
      privat_nrControl: [''],
      privat_ortControl: [''],
      privat_plzControl: [''],
      mobilControl: [''],
      emailControl: ['', Validators.required],
      passwordControl: ['', Validators.required],
      secretControl: ['', Validators.required],
      privat_emailControl: [''],
    }
  )
}

ngOnInit() {
  this.coacheeId = JSON.parse(localStorage.getItem('coachee')).id;
  this.getOne(this.coacheeId)
}

  getOne(id: string): void {
    this.coacheeService.getCoachee(id)
      .subscribe((coachee: Coachee) => {
          this.coachee = coachee
          console.log(this.coachee)
          this.form.patchValue({
            nameControl: this.coachee?.name,
            vornameControl: this.coachee?.vorname,
            firmen_strControl: this.coachee?.firmen_str,
            firmen_nrControl: this.coachee?.firmen_nr,
            firmen_ortControl: this.coachee?.firmen_ort,
            firmen_plzControl: this.coachee?.firmen_plz,
            telefonnummerControl: this.coachee?.telefonnummer,
            arbeitgeber_strControl: this.coachee?.arbeitgeber_str,
            arbeitgeber_nrControl: this.coachee?.arbeitgeber_nr,
            arbeitgeber_ortControl: this.coachee?.arbeitgeber_ort,
            arbeitgeber_plzControl: this.coachee?.arbeitgeber_plz,
            emailControl: this.coachee?.email,
            mobilControl: this.coachee?.mobil,
            privat_emailControl: this.coachee?.privat_email,
            privat_strControl: this.coachee?.privat_str,
            privat_nrControl: this.coachee?.privat_nr,
            privat_ortControl: this.coachee?.privat_ort,
            privat_plzControl: this.coachee?.privat_plz,
            firmennameControl: this.coachee?.firmenname
          })
          return this.coachee
        },
        (error: any) => console.log(error)
      );
  }

  onSubmit() {
    this.form.disable()
    const values = this.form.value
    this.coachee.name = values.nameControl
    this.coachee.vorname = values.vornameControl
    this.coachee.telefonnummer = values.telefonnummerControl
    this.coachee.firmen_str = values.firmen_strControl
    this.coachee.firmen_nr = values.firmen_nrControl
    this.coachee.firmen_ort = values.firmen_ortControl
    this.coachee.firmen_plz = values.firmen_plzControl
    this.coachee.arbeitgeber_str = values.arbeitgeber_strControl
    this.coachee.arbeitgeber_nr = values.arbeitgeber_nrControl
    this.coachee.arbeitgeber_ort = values.arbeitgeber_ortControl
    this.coachee.arbeitgeber_plz = values.arbeitgeber_plzControl
    this.coachee.email = values.emailControl
    this.coachee.mobil = values.mobilControl
    this.coachee.privat_str = values.privat_strControl
    this.coachee.privat_nr = values.privat_nrControl
    this.coachee.privat_ort = values.privat_ortControl
    this.coachee.privat_plz = values.privat_plzControl
    this.coachee.privat_email = values.privat_emailControl
    this.coachee.firmenname = values.firmennameControl
    this.coacheeService.update(this.coacheeId, this.coachee).subscribe(
      (response) => {
        console.log(response)
        console.log(response._id)
        this.form.enable()
      },
      (error: any) => console.log(error)
    )

    this.router.navigateByUrl('/meine-vorgaenge/:coachee.id')
  }

  cancel(): void {
    this.location.back();
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }
}
