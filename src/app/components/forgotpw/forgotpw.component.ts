import {Component, OnInit} from '@angular/core';
import {AlertService, AuthenticationService} from '../../services';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AlertComponent} from 'ngx-bootstrap/alert';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit {

  forgotForm: FormGroup;
  alerts: any[] = [];
  forgotFormSubmitAttempt = false;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
    });
  }

  forgot() {
    this.forgotFormSubmitAttempt = true;
    this.authenticationService.forgotPassword(this.forgotForm.value.email)
      .subscribe(
        succ => {
          alert(succ.message)
          this.router.navigateByUrl('/home')
        },
        error => {
          alert(error.message)
        });
    this.forgotFormSubmitAttempt = false;
  }

  isForgotFieldValid(field: string): boolean {
    return (!this.forgotForm.get(field).valid && this.forgotForm.get(field).touched) ||
      (this.forgotForm.get(field).untouched && this.forgotFormSubmitAttempt);
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


  onCloseNotification(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  pushNotification(msg:any): void {
    this.alerts = [];
    this.alerts.push({
      msg: msg
    });
  }
}
