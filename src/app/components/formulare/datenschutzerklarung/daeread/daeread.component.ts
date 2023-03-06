import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, FragenService} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-daeread',
  templateUrl: './daeread.component.html',
  styleUrls: ['./daeread.component.css']
})
export class DAEreadComponent implements OnInit {

  form: FormGroup;
  formular: Formulare;
  userName: string;
  userVorname: string;
  coacheeName: string;
  coacheeVorname: string;
  id: string;
  datenschutzprotokollFragen: FrageAntwort [];
  datenschutzprotokollTitle: string;

  ngOnInit(): void {
    this.datenschutzprotokollFragen = this.fragenService.getFragen2();
    this.datenschutzprotokollTitle = this.fragenService.getTitle2();

    this.id = this.route.snapshot.paramMap.get('formular.id');
    console.log('id = ' + this.id);
    this.readOne(this.id);
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formulareService: FormulareService,
              private authorisationService: AuthorisationService,
              private fragenService: FragenService) {
    this.form = this.fb.group(
      {
        titleControl: ['', Validators.required],
        coacheeControl: ['', Validators.required],
        userControl: ['', Validators.required],
        antwortControl: ['', Validators.required],
        antwortControl1: ['', Validators.required],
        antwortControl2: ['', Validators.required],
        date: [(new Date()).toISOString().substring(0,10), Validators.required]
      });
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }
  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  hasAccess(roles:any)
  {
    return this.authorisationService.hasAccess(roles);
  }

  readOne(id: string): void {
    this.formulareService.getFormular(id).subscribe(
      (
        response: Formulare) => {
        this.formular = response;
        console.log(this.formular);

        this.form.patchValue({
          titleControl: this.formular?.title,
          coacheeControl: this.formular?.coachee,
          userControl: this.formular?.user,
          antwortControl: this.formular?.inhalt[0]?.antwort,
          antwortControl1: this.formular?.inhalt[2]?.antwort,
          antwortControl2: this.formular?.inhalt[3]?.antwort,
          date: this.formular?.inhalt[1]?.antwort
        });

        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.warn(this.form.value);
    const values = this.form.value;
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [
      {frage: this.datenschutzprotokollFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.datenschutzprotokollFragen[1].frage, antwort: values.date.toString()},
      {frage: this.datenschutzprotokollFragen[2].frage, antwort: values.antwortControl1.toString()},
      {frage: this.datenschutzprotokollFragen[3].frage, antwort: values.antwortControl2.toString()}
    ];
    console.log(this.formular.inhalt);
    this.formular.title = this.datenschutzprotokollTitle;
    this.formular.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.update(this.id, this.formular)
      .subscribe(
        (
          response: Formulare) => {
          console.log(this.formular);
        },
        (error: any) => {
          console.log(error);
        }
      );
    this.router.navigateByUrl('/meine-vorgaenge');
  }

  generatePDF() {
    var data = document.getElementById('pdfdsche');
    if (data !== null) {
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('Datenschutz.pdf');
      });
    }
  }

  cancel(): void {
    this.location.back();
  }
}
