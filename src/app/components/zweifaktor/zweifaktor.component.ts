import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertComponent} from "ngx-bootstrap/alert";

@Component({
  selector: 'app-zweifaktor',
  templateUrl: './zweifaktor.component.html',
  styleUrls: ['./zweifaktor.component.css']
})
export class ZweifaktorComponent implements OnInit {
  twoFactorForm: FormGroup;
  twoFactorFormSubmitAttempt: boolean;
  notification = '';
  public alerts: any[] = [];

  constructor(private authenticationService: AuthenticationService,
              private form: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.twoFactorForm = this.form.group({
      secret: [null, [Validators.required]],
    });

    this.twoFactorFormSubmitAttempt = false;
  }

  verify() {
    this.twoFactorFormSubmitAttempt = true;
    if (this.twoFactorForm.valid) {
      const email =JSON.parse(localStorage.getItem('user')).email;
      const secret = this.twoFactorForm.get('secret').value;
      this.authenticationService.verify(email, secret)
        .subscribe(
          data => {
            this.router.navigate(['/meine-vorgaenge']);
          },
          error => {
            alert( 'Ihr Secret ist falsch. Sie werden wieder zum Login weitergeleitet.');
            this.router.navigate(['/login']);
            this.twoFactorFormSubmitAttempt = false;
          });
    } else {this.validateAllFormFields(this.twoFactorForm);}
  }

  validateAllFormFields(formGroup: FormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }

  pushNotification(msg:any): void {
    this.alerts = [];
    this.alerts.push({
      msg: msg
    });
  }

  onCloseNotification(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  reloadPage(): void {
    window.location.reload();
  }
}
