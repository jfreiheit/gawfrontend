import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, FragenService} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-ewduread',
  templateUrl: './ewduread.component.html',
  styleUrls: ['./ewduread.component.css']
})
export class EWDUreadComponent implements OnInit {

  form: FormGroup;
  formular: Formulare;
  id: string;
  coacheeName: string;
  coacheeVorname: string;
  einwilligungDatenuebermittlungFragen: FrageAntwort [];
  einwilligungDatenuebermittlungTitle: string;

  ngOnInit(): void {
    this.einwilligungDatenuebermittlungFragen = this.fragenService.getFragen5();
    this.einwilligungDatenuebermittlungTitle = this.fragenService.getTitle5();

    this.id = this.route.snapshot.paramMap.get('formular.id');
    console.log('id = ' + this.id);
    this.readOne(this.id);
  }

  constructor(
    private fb: FormBuilder,
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
        antwortControl3: ['', Validators.required],
        antwortControl4: ['', Validators.required],
        antwortControl5: ['', Validators.required],
        antwortControl6: ['', Validators.required],
        antwortControl7: ['', Validators.required],
        antwortControl8: ['', Validators.required],
        antwortControl9: ['', Validators.required],
        date: [(new Date()).toISOString().substring(0,10), Validators.required],
        date1: [(new Date()).toISOString().substring(0,10), Validators.required],
        date2: [(new Date()).toISOString().substring(0,10), Validators.required],
        date3: [(new Date()).toISOString().substring(0,10), Validators.required],
        date4: [(new Date()).toISOString().substring(0,10), Validators.required]
      });

    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name || JSON.parse(localStorage.getItem('coachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname || JSON.parse(localStorage.getItem('coachee')).vorname;
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
          antwortControl1: this.formular?.inhalt[1]?.antwort,
          antwortControl2: this.formular?.inhalt[2]?.antwort,
          antwortControl3: this.formular?.inhalt[3]?.antwort,
          antwortControl4: this.formular?.inhalt[4]?.antwort,
          antwortControl5: this.formular?.inhalt[5]?.antwort,
          antwortControl6: this.formular?.inhalt[6]?.antwort,
          antwortControl7: this.formular?.inhalt[7]?.antwort,
          antwortControl8: this.formular?.inhalt[8]?.antwort,
          antwortControl9: this.formular?.inhalt[9]?.antwort,
          date: this.formular?.inhalt[10]?.antwort,
          date1: this.formular?.inhalt[11]?.antwort,
          date2: this.formular?.inhalt[12]?.antwort,
          date3: this.formular?.inhalt[13]?.antwort,
          date4: this.formular?.inhalt[14]?.antwort,
        });
        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    const values = this.form.value;
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [{frage: this.einwilligungDatenuebermittlungFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[7].frage, antwort: values.antwortControl7.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[8].frage, antwort: values.antwortControl8.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[9].frage, antwort: values.antwortControl9.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[10].frage, antwort: values.date.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[11].frage, antwort: values.date1.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[12].frage, antwort: values.date2.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[13].frage, antwort: values.date3.toString()},
      {frage: this.einwilligungDatenuebermittlungFragen[14].frage, antwort: values.date4.toString()}
    ];
    this.formular.title = this.einwilligungDatenuebermittlungTitle;
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

  cancel(): void {
    this.location.back();
  }

  generatePDF() {
    var data = document.getElementById('pdfdue');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Datenuebermittlung.pdf');
    });
    }
  }
}
