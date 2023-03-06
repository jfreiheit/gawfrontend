import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService, AuthenticationService} from "../../services";
import {AlertComponent} from "ngx-bootstrap/alert";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-secret',
  templateUrl: './forgot-secret.component.html',
  styleUrls: ['./forgot-secret.component.css']
})
export class ForgotSecretComponent implements OnInit {
  forgotForm: FormGroup;
  alerts: any[] = [];
  forgotFormSubmitAttempt = false;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
    });
  }

  forgot() {
    this.forgotFormSubmitAttempt = true;
    this.authenticationService.forgotSecret(this.forgotForm.value.email)
      .subscribe(
        data => {
          alert(data.message)
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

}
