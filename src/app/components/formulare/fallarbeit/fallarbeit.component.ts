import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService, AuthorisationService, CoacheeService, UserService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Coachee, User} from "../../../models";
import {ActivatedRoute} from "@angular/router";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-fallarbeit',
  templateUrl: './fallarbeit.component.html',
  styleUrls: ['./fallarbeit.component.css']
})
export class FallarbeitComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef
  id: string
  userId: string
  form: FormGroup
  user: User
  image: File
  imagePreview: any = ''

  constructor(private route: ActivatedRoute,
              private us: UserService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
        nameControl: ['', Validators.required],
        vornameControl: ['', Validators.required],
        kontaktadresseControl: ['', Validators.required],
        telefonnummerControl: ['', Validators.required],
        imageSrcControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      })
  }

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('user')).id;
    console.log('id = ' + this.id);
    this.getOneUser(this.id);
    this.form.patchValue({
      nameControl: this.user?.name,
      vornameControl: this.user?.vorname,
      // kontaktadresseControl: this.user?.kontaktadresse,
      telefonnummerControl: this.user?.telefonnummer,
      imageSrcControl: this.user?.imageSrc,
      emailControl: this.user?.email
    })
  }

  getOneUser(id: string): void {
    this.us.getUser(id)
      .subscribe(
        (
          response: User) => {
          this.user = response;
          console.log(this.user);
          this.imagePreview = this.user.imageSrc
          return this.user;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }
  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  generatePDF() {
      var data = document.getElementById('pdffall');
      if (data !== null) {html2canvas(data).then(canvas => {
       var imgWidth = 208;
       var imgHeight = canvas.height * imgWidth / canvas.width;
       const contentDataURL = canvas.toDataURL('image/png')
       let pdf = new jspdf('p', 'mm', 'a4');
       var position = 0;
       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
       pdf.save('Fallarbeit.pdf');
      });}
     }

}
