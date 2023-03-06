import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/models';
import {UserService} from 'src/app/services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-coachdaten',
  templateUrl: './update-coachdaten.component.html',
  styleUrls: ['./update-coachdaten.component.css']
})
export class UpdateCoachdatenComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef
  @ViewChild('output') outputRef: ElementRef
  userId: string
  form: FormGroup
  paramsId: string
  user: User
  image: File
  isUpdate: boolean

  imagePreview: any = ''

  constructor(private us: UserService,
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
        roleControl: ['', Validators.required],
        passwordControl: ['', Validators.required],
        secretControl: ['', Validators.required],
      }
    )
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('user.id')) {
      this.paramsId = this.route.snapshot.paramMap.get('user.id');
      this.userId = this.paramsId
    }else if(this.isLoggedIn()){
      this.userId = JSON.parse(localStorage.getItem('user')).id
    }
    this.getOne(this.userId)
  }

  //anstatt input src (der ist nicht schön) wird input auf button übertragen
  triggerClick() {
    this.inputRef.nativeElement.click()
  }

//Bild hochladen
  onFileUpload(event: any) {
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

  getOne(id: string): void {
    this.us.getUser(id)
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
            imageSrcControl: this.user?.imageSrc,
            rechnungsadresse_strControl: this.user?.rechnungsadresse_str,
            rechnungsadresse_nrControl: this.user?.rechnungsadresse_nr,
            rechnungsadresse_ortControl: this.user?.rechnungsadresse_ort,
            rechnungsadresse_plzControl: this.user?.rechnungsadresse_plz,
            emailControl: this.user?.email
          })
          this.imagePreview = user.imageSrc
          this.form.enable()
          return this.user
        },
        (error: any) => console.log(error)
      );
  }

  onSubmit() {
    this.form.disable()
    const values = this.form.value
    this.user.name = values.nameControl
    this.user.vorname = values.vornameControl
    this.user.telefonnummer = values.telefonnummerControl
    this.user.kontaktadresse_str = values.kontaktadresse_strControl
    this.user.kontaktadresse_nr = values.kontaktadresse_nrControl
    this.user.kontaktadresse_ort = values.kontaktadresse_ortControl
    this.user.kontaktadresse_plz = values.kontaktadresse_plzControl
    this.user.rechnungsadresse_str = values.rechnungsadresse_strControl
    this.user.rechnungsadresse_nr = values.rechnungsadresse_nrControl
    this.user.rechnungsadresse_ort = values.rechnungsadresse_ortControl
    this.user.rechnungsadresse_plz = values.rechnungsadresse_plzControl
    this.user.email = values.emailControl
    this.user.imageSrc = this.imagePreview
    this.us.update(this.userId, this.user).subscribe(
      (response) => {
        console.log(response)
        console.log(response._id)
        this.form.enable()
      },
      (error: any) => console.log(error)
    )
    this.router.navigateByUrl('/stammdaten')
  }


  cancel(): void {
    this.location.back();
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

}
