import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, Fragen2Service} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-mwread',
  templateUrl: './mwread.component.html',
  styleUrls: ['./mwread.component.css']
})
export class MWreadComponent implements OnInit {
  form: FormGroup;
  formular: Formulare;
  id: string;
  massnahmenworkshopFragen: FrageAntwort [];
  massnahmenworkshopTitle: string;

  ngOnInit(): void {
    this.massnahmenworkshopFragen = this.fragenService.getFragen5();
    this.massnahmenworkshopTitle = this.fragenService.getTitle5();

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
              private fragenService: Fragen2Service) {
    this.form = this.fb.group(
      {
        titleControl: ['', Validators.required],
        coacheeControl: ['', Validators.required],
        userControl: ['', Validators.required],
        antwortControl2: ['', Validators.required],
        antwortControl3: ['', Validators.required],
        antwortControl4: ['', Validators.required],
        antwortControl5: ['', Validators.required],
        antwortControl6: ['', Validators.required],
        antwortControl7: ['', Validators.required],
        antwortControl8: ['', Validators.required],
        antwortControl9: ['', Validators.required],
        antwortControl10: ['', Validators.required],
        antwortControl11: ['', Validators.required],
        antwortControl12: ['', Validators.required],
        antwortControl13: ['', Validators.required],
        antwortControl14: ['', Validators.required],
        antwortControl15: ['', Validators.required],
        antwortControl16: ['', Validators.required],
        antwortControl17: [(new Date()).toISOString().substring(0,10), Validators.required],
        antwortControl18: ['', Validators.required],
        dateControl: [(new Date()).toISOString().substring(0,10), Validators.required]
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

  cancel(): void {
    this.location.back();
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
          dateControl: this.formular?.inhalt[0]?.antwort,
          antwortControl2: this.formular?.inhalt[1]?.antwort,
          antwortControl3: this.formular?.inhalt[2]?.antwort,
          antwortControl4: this.formular?.inhalt[3]?.antwort,
          antwortControl5: this.formular?.inhalt[4]?.antwort,
          antwortControl6: this.formular?.inhalt[5]?.antwort,
          antwortControl7: this.formular?.inhalt[6]?.antwort,
          antwortControl8: this.formular?.inhalt[7]?.antwort,
          antwortControl9: this.formular?.inhalt[8]?.antwort,
          antwortControl10: this.formular?.inhalt[9]?.antwort,
          antwortControl11: this.formular?.inhalt[10]?.antwort,
          antwortControl12: this.formular?.inhalt[11]?.antwort,
          antwortControl13: this.formular?.inhalt[12]?.antwort,
          antwortControl14: this.formular?.inhalt[13]?.antwort,
          antwortControl15: this.formular?.inhalt[14]?.antwort,
          antwortControl16: this.formular?.inhalt[15]?.antwort,
          antwortControl17: this.formular?.inhalt[16]?.antwort,
          antwortControl18: this.formular?.inhalt[17]?.antwort,
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
    this.formular.inhalt = [
      {frage: this.massnahmenworkshopFragen[0].frage, antwort: values.dateControl.toString()},
      {frage: this.massnahmenworkshopFragen[1].frage, antwort: values.antwortControl2.toString()},
      {frage: this.massnahmenworkshopFragen[2].frage, antwort: values.antwortControl3.toString()},
      {frage: this.massnahmenworkshopFragen[3].frage, antwort: values.antwortControl4.toString()},
      {frage: this.massnahmenworkshopFragen[4].frage, antwort: values.antwortControl5.toString()},
      {frage: this.massnahmenworkshopFragen[5].frage, antwort: values.antwortControl6.toString()},
      {frage: this.massnahmenworkshopFragen[6].frage, antwort: values.antwortControl7.toString()},
      {frage: this.massnahmenworkshopFragen[7].frage, antwort: values.antwortControl8.toString()},
      {frage: this.massnahmenworkshopFragen[8].frage, antwort: values.antwortControl9.toString()},
      {frage: this.massnahmenworkshopFragen[9].frage, antwort: values.antwortControl10.toString()},
      {frage: this.massnahmenworkshopFragen[10].frage, antwort: values.antwortControl11.toString()},
      {frage: this.massnahmenworkshopFragen[11].frage, antwort: values.antwortControl12.toString()},
      {frage: this.massnahmenworkshopFragen[12].frage, antwort: values.antwortControl13.toString()},
      {frage: this.massnahmenworkshopFragen[13].frage, antwort: values.antwortControl14.toString()},
      {frage: this.massnahmenworkshopFragen[14].frage, antwort: values.antwortControl15.toString()},
      {frage: this.massnahmenworkshopFragen[15].frage, antwort: values.antwortControl16.toString()},
      {frage: this.massnahmenworkshopFragen[16].frage, antwort: values.antwortControl17.toString()},
      {frage: this.massnahmenworkshopFragen[17].frage, antwort: values.antwortControl18.toString()},
    ];
    this.formular.title = this.massnahmenworkshopTitle;
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

  row = [
    {
      id : '',
      name: '',
      email: ''
    },

  ];

  addTable() {
    const obj = {
      id: '',
      name: '',
      email: ''
    }
    this.row.push(obj)
  }

  deleteRow(x: number){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }
  }

  generatePDF() {
    var data = document.getElementById('pdfmasw');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MaßnahmenWS.pdf');
    });}
  }


}
