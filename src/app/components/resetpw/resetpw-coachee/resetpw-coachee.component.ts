import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService, AuthenticationService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomValidators} from "../../../helpers/custom-validators";
import {AlertComponent} from "ngx-bootstrap/alert";

@Component({
  selector: 'app-resetpw-coachee',
  templateUrl: './resetpw-coachee.component.html',
  styleUrls: ['./resetpw-coachee.component.css']
})
export class ResetpwCoacheeComponent implements OnInit {
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
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
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
      this.authenticationService.resetPasswordCoachee(this.resetForm.value.password, this.token)
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
}
