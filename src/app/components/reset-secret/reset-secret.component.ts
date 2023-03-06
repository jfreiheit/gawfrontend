import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService, AuthenticationService} from "../../services";
import {CustomValidators} from "../../helpers/custom-validators";
import {AlertComponent} from "ngx-bootstrap/alert";

@Component({
  selector: 'app-reset-secret',
  templateUrl: './reset-secret.component.html',
  styleUrls: ['./reset-secret.component.css']
})
export class ResetSecretComponent implements OnInit {
  token: string;
  resetForm: FormGroup;
  resetFormSubmitAttempt = false;

  public alerts: any[] = [];

  constructor(
    private form: FormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params.token) {
        this.token = params.token;
      }
    });

    this.resetForm = this.form.group({
        secret: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }
            ),
            Validators.minLength(6)
          ])
        ],
        confirmSecret: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  reset() {
    this.resetFormSubmitAttempt = true;
    if (this.resetForm.valid) {
      this.authenticationService.resetSecret(this.resetForm.value.secret, this.token)
        .subscribe(
          success => {
            alert(success.message)
            this.router.navigateByUrl('/home')
          },
          error => {
            alert(error.message)
          });
    }
    this.resetFormSubmitAttempt = false;
  }

  isResetFieldValid(field: string): boolean {
    return (!this.resetForm.get(field).valid && this.resetForm.get(field).touched) ||
      (this.resetForm.get(field).untouched && this.resetFormSubmitAttempt);
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
