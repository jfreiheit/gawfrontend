import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services";
import {Router} from "@angular/router";
import {AlertComponent} from "ngx-bootstrap/alert";

@Component({
  selector: 'app-zweifaktor-coachee',
  templateUrl: './zweifaktor-coachee.component.html',
  styleUrls: ['./zweifaktor-coachee.component.css']
})
export class ZweifaktorCoacheeComponent implements OnInit {
  twoFactorForm: FormGroup;
  twoFactorFormSubmitAttempt: boolean;
  notification = '';
  public alerts: any[] = [];

  constructor(private authenticationService: AuthenticationService, private form: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.twoFactorForm = this.form.group({
      secret: [null, [Validators.required as any]],
    });

    this.twoFactorFormSubmitAttempt = false;
  }

  verifyCoachee() {
    this.twoFactorFormSubmitAttempt = true;
    if (this.twoFactorForm.valid) {
      const email =JSON.parse(localStorage.getItem('coachee')).email;
      const secret = this.twoFactorForm.get('secret').value;
      this.authenticationService.verifyCoachee(email, secret)
        .subscribe(
          data => {
            this.router.navigate(['/landingpage-coachee']);
          },
          error => {
            alert( 'Ihr Secret ist falsch. Sie werden wieder zum Login weitergeleitet.');
            this.router.navigate(['/login-coachee']);
            this.twoFactorFormSubmitAttempt = false;
          });
    }
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
