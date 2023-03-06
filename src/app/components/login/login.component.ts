import {Component, OnInit} from '@angular/core';
import {AlertService, AuthenticationService, UserService} from "../../services";
import {Router} from "@angular/router";
import {AlertComponent} from "ngx-bootstrap/alert";
import {User} from "../../models";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  notification = '';
  strengthChange = 0;
  loginForm: FormGroup;
  loginFormSubmitAttempt: boolean;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private alertService: AlertService,
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
      console.log('email', email)
      console.log('passw', password)
      this.authenticationService.login(email, password)
        .subscribe(
          data => {
            this.alertService.success('Login successful', { keepAfterRouteChange: true });
            this.router.navigate(['/login/verify']);
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

  get f() { return this.loginForm.controls; }

}
