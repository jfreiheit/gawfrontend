import { Component, OnInit } from '@angular/core';
import {Coachee} from "../../models";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService, AuthenticationService} from "../../services";
import {AlertComponent} from "ngx-bootstrap/alert";

@Component({
  selector: 'app-login-coachee',
  templateUrl: './login-coachee.component.html',
  styleUrls: ['./login-coachee.component.css']
})
export class LoginCoacheeComponent implements OnInit {
  notification = '';
  strengthChange = 0;
  loginForm: FormGroup;
  loginFormSubmitAttempt: boolean;


  // notification
  public alerts: any[] = [];

  constructor(
    private alertService: AlertService,
    private form: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.loginForm = this.form.group({
      email: [null, [ <any> Validators.required]],
      password: [null, [ Validators.required as any]],
    });

    this.loginFormSubmitAttempt = false;
  }

  checkPasswordStrength(value:any) {
    this.strengthChange = value;
  }

  login() {
    this.loginFormSubmitAttempt = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      this.authenticationService.loginCoachee(email, password)
        .subscribe(
          data => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            this.router.navigate(['/login-coachee/verify']);
          },
          error => {
            alert('Ihr Passwort oder Ihre E-Mail ist falsch.');
          });
    } else {
      // validate all form fields
      this.validateAllFormFields(this.loginForm);
    }
  }


  isLoginFieldValid(field: string) {
    return (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.loginFormSubmitAttempt);
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

  logout() {
    this.authenticationService.logout();
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
}
