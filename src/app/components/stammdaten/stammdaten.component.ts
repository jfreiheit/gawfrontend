import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Coachee, User} from '../../models';
import {CoacheeService, UserService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stammdaten',
  templateUrl: './stammdaten.component.html',
  styleUrls: ['./stammdaten.component.css']
})
export class StammdatenComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef
  userId: string
  coacheeId: string
  form: FormGroup
  user: User
  coachee: Coachee
  image: File
  paramsId: string
  isUpdate: boolean

  imagePreview: any = ''

  constructor(private us: UserService,
              private cs: CoacheeService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private router: Router,
  ) {
    this.form = this.fb.group(
      {
        nameControl: ['', Validators.required],
        vornameControl: ['', Validators.required],
        kontaktadresse_strControl: ['', Validators.required],
        kontaktadresse_nrControl: ['', Validators.required],
        kontaktadresse_ortControl: ['', Validators.required],
        kontaktadresse_plzControl: ['', Validators.required],
        telefonnummerControl: ['', Validators.required],
        imageSrcControl: ['', Validators.required],
        rechnungsadresse_strControl: ['', Validators.required],
        rechnungsadresse_nrControl: ['', Validators.required],
        rechnungsadresse_ortControl: ['', Validators.required],
        rechnungsadresse_plzControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    )
  }

  ngOnInit() {

    if (this.route.snapshot.paramMap.get('user.id')) {
      this.paramsId = this.route.snapshot.paramMap.get('user.id');
      this.userId = this.paramsId
    }else if(this.isLoggedIn()){
      this.userId = JSON.parse(localStorage.getItem('user')).id
      //this.paramsId = '0'
    }
    else{
      this.coacheeId = JSON.parse(localStorage.getItem('coachee')).id;
      console.log('coacheeId = ' + this.coacheeId);
      this.userId = JSON.parse(localStorage.getItem('coachee')).user
      //this.paramsId = '0'
    }
    this.getOne(this.userId)
  }

  getOne(id: string): void {
    return this.us.getUser(id)
      .subscribe((user: User) => {
          this.user = user
          console.log(this.user)
          this.form.patchValue({
            nameControl: this.user?.name,
            vornameControl: this.user?.vorname,
            kontaktadresse_strControl: this.user?.kontaktadresse_str,
            kontaktadresse_nrControl: this.user?.kontaktadresse_nr,
            kontaktadresse_ortControl: this.user?.kontaktadresse_ort,
            kontaktadresse_plzControl: this.user?.kontaktadresse_plz,
            telefonnummerControl: this.user?.telefonnummer,
            rechnungsadresse_strControl: this.user?.rechnungsadresse_str,
            rechnungsadresse_nrControl: this.user?.rechnungsadresse_nr,
            rechnungsadresse_ortControl: this.user?.rechnungsadresse_ort,
            rechnungsadresse_plzControl: this.user?.rechnungsadresse_plz,
            emailControl: this.user?.email
          })
          this.imagePreview = user.imageSrc
          return this.user
        },
        (error: any) => console.log(error)
      );
  }

  updateUser(){
    this.isUpdate = true
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

}


