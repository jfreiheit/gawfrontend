import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models";
import {AlertService, UserService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef
  userId: string
  formUser: FormGroup
  userNew: User
  image: File
  imagePreview: any = ''
  FormSubmitAttempt: boolean;

  constructor(private us: UserService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private router: Router,
              private alertService: AlertService){
    this.formUser = this.fb.group(
      {
        nameControl: ['', Validators.required],
        vornameControl: ['', Validators.required],
        kontaktadresse_strControl: ['', Validators.required],
        kontaktadresse_nrControl: ['', Validators.required],
        kontaktadresse_ortControl: ['', Validators.required],
        kontaktadresse_plzControl: ['', Validators.required],
        telefonnummerControl: ['', Validators.required],
        imageSrcControl: ['', Validators.required],
        rechnungsadresse_strControl: [''],
        rechnungsadresse_nrControl: [''],
        rechnungsadresse_ortControl: [''],
        rechnungsadresse_plzControl: [''],
        emailControl: ['', Validators.required],
        roleControl: ['', Validators.required],
        passwordControl: ['', Validators.required],
        secretControl: ['', Validators.required],
      }
    );
    this.userNew = {
      _id: 0,
      name: '',
      vorname: '',
      kontaktadresse_str: '',
      kontaktadresse_nr: '',
      kontaktadresse_ort: '',
      kontaktadresse_plz: '',
      email: '',
      telefonnummer: '',
      user: '',
      password: '',
      secret: '',
      rechnungsadresse_str: '',
      rechnungsadresse_nr: '',
      rechnungsadresse_ort: '',
      rechnungsadresse_plz: '',
      imageSrc: '',
      role: '',
      unterschrift: '',
    };
  }

  get f() { return this.formUser.controls; }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user')).id
    console.log('userId = ' + this.userId)
  }


  onSubmit(): void {
   // if (this.formUser.valid) {
      const data = this.formUser.value
      this.userNew.name = data.nameControl
      this.userNew.vorname = data.vornameControl
      this.userNew.telefonnummer = data.telefonnummerControl
      this.userNew.kontaktadresse_str = data.kontaktadresse_strControl
      this.userNew.kontaktadresse_nr = data.kontaktadresse_nrControl
      this.userNew.kontaktadresse_ort = data.kontaktadresse_ortControl
      this.userNew.kontaktadresse_plz = data.kontaktadresse_plzControl
      this.userNew.rechnungsadresse_str = data.rechnungsadresse_strControl
      this.userNew.rechnungsadresse_nr = data.rechnungsadresse_nrControl
      this.userNew.rechnungsadresse_ort = data.rechnungsadresse_ortControl
      this.userNew.rechnungsadresse_plz = data.rechnungsadresse_plzControl
      this.userNew.role = data.roleControl
      this.userNew.email = data.emailControl
      this.userNew.user = JSON.parse(localStorage.getItem('user')).id
      this.userNew.password = data.passwordControl
      this.userNew.secret = data.secretControl
      this.userNew.imageSrc = this.imagePreview
      this.FormSubmitAttempt = true
      this.us.registerUser(this.userNew).subscribe(
        (response) => {
          console.log(response)
          console.log(response._id)
          this.router.navigate(['/uebersicht-users'])
        },
        (error: any) => alert(error.message)
    )
  }

  //anstatt input src (der ist nicht schön) wird input auf button übertragen
  triggerClick() {
    this.inputRef.nativeElement.click()
  }

//Bild hochladen
  onFile(event: any) {
    console.log((event))
    //zugang zu dem file, den wir hochgeladen haben
    const file = event.target.files[0] //wir holen diesen file vom PC ein
    this.image = file //und speichern ins image
    //preview dieses files
    const reader = new FileReader() //standard class zum review

    reader.onload = () => {
      this.imagePreview = reader.result//hier speichern bildinfo
    }
    reader.readAsDataURL(file)
  }

  getAdminName() {
    if (JSON.parse(localStorage.getItem('user'))) {
      return JSON.parse(localStorage.getItem('user')).vorname;
    } else {
      return '';
    }
  }

  cancel(): void {
    this.location.back();
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

  isFieldValid(field: string) {
    return (!this.formUser.get(field).valid && this.formUser.get(field).touched) ||
      (this.formUser.get(field).untouched && this.FormSubmitAttempt);
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
}
