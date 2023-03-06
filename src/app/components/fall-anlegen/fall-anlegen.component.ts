import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coachee } from "../../models";
import { UserService } from "../../services";

@Component({
  selector: 'app-fall-anlegen',
  templateUrl: './fall-anlegen.component.html',
  styleUrls: ['./fall-anlegen.component.css']
})
export class FallAnlegenComponent implements OnInit {
  form: FormGroup;
  data: Coachee;
  FormSubmitAttempt: boolean;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,) {
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        vorname: ['', Validators.required],
        firmenname: ['', Validators.required],
        firmen_str: ['', Validators.required],
        firmen_nr: ['', Validators.required],
        firmen_ort: ['', Validators.required],
        firmen_plz: ['', Validators.required],
        telefonnummer: [''],
        arbeitgeber_str: [''],
        arbeitgeber_nr: [''],
        arbeitgeber_ort: [''],
        arbeitgeber_plz: [''],
        privat_str: [''],
        privat_nr: [''],
        privat_ort: [''],
        privat_plz: [''],
        mobil: [''],
        email: ['', Validators.required],
        password: ['', Validators.required],
        secret: ['', Validators.required],
        privat_email: [''],
      }
    );

    this.FormSubmitAttempt = false;

    this.data = {
      _id: 0,
      name: '',
      vorname: '',
      firmenname: '',
      firmen_str: '',
      firmen_nr: '',
      firmen_ort: '',
      firmen_plz: '',
      email: '',
      telefonnummer: '',
      user: '',
      password: '',
      secret: '',
      arbeitgeber_str: '',
      arbeitgeber_nr: '',
      arbeitgeber_ort: '',
      arbeitgeber_plz: '',
      privat_str: '',
      privat_nr: '',
      privat_ort: '',
      privat_plz: '',
      mobil: '',
      privat_email: '',
    };
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.FormSubmitAttempt);
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

  validateAllFormFields(formGroup: FormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.warn(this.form.value);
      const value = this.form.value;
      this.data.name = value.name;
      this.data.vorname = value.vorname;
      this.data.firmenname = value.firmenname;
      this.data.firmen_str = value.firmen_str;
      this.data.firmen_nr = value.firmen_nr;
      this.data.firmen_ort = value.firmen_ort;
      this.data.firmen_plz = value.firmen_plz;
      this.data.email = value.email;
      this.data.telefonnummer = value.telefonnummer;
      this.data.user = JSON.parse(localStorage.getItem('user')).id;
      this.data.password = value.password;
      this.data.secret = value.secret;
      this.data.arbeitgeber_str = value.arbeitgeber_str;
      this.data.arbeitgeber_nr = value.arbeitgeber_nr;
      this.data.arbeitgeber_ort = value.arbeitgeber_ort;
      this.data.arbeitgeber_plz = value.arbeitgeber_plz;
      this.data.privat_str = value.privat_str;
      this.data.privat_nr = value.privat_nr;
      this.data.privat_ort = value.privat_ort;
      this.data.privat_plz = value.privat_plz;
      this.data.mobil = value.mobil;
      this.data.privat_email = value.privat_email;
      console.log(this.data);
      this.FormSubmitAttempt = true;
      this.userService.createCoachee(this.data)
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  cancel(): void {
    this.router.navigate(['/meine-vorgaenge']);
  }

  ngOnInit(): void {
  }

}
