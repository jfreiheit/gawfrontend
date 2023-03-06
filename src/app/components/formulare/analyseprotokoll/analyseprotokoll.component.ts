import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Formulare, FrageAntwort } from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {FragenService} from "../../../services";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-analyseprotokoll',
  templateUrl: './analyseprotokoll.component.html',
  styleUrls: ['./analyseprotokoll.component.css']
})
export class AnalyseprotokollComponent implements OnInit {

  form: FormGroup;
  userName: string;
  userVorname: string;
  coacheeName: string;
  coacheeVorname: string;
  coacheeUN: string;
  id: string;
  formulare: Formulare;
  analyseprotokollFragen: FrageAntwort [];
  analyseprotokollTitle: string;

  ngOnInit(): void {
  this.analyseprotokollFragen = this.fragenService.getFragen();
  this.analyseprotokollTitle = this.fragenService.getTitle();

  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
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
        antwortControl10: ['', Validators.required],
        antwortControl11: ['', Validators.required],
        antwortControl12: ['', Validators.required],
        antwortControl13: ['', Validators.required],
        antwortControl14: ['', Validators.required],
        antwortControl15: ['', Validators.required],
        antwortControl16: ['', Validators.required],
        antwortControl17: ['', Validators.required],
      });
    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name || JSON.parse(localStorage.getItem('coachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname || JSON.parse(localStorage.getItem('coachee')).name;
    this.coacheeUN = JSON.parse(localStorage.getItem('aktuellerCoachee')).firmenname || JSON.parse(localStorage.getItem('coachee')).name;

    this.formulare = {
      _id: 0,
      title: '',
      user: '',
      coachee: '',
      inhalt: []
    };
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  hasAccess(roles: any) {
    return this.authorisationService.hasAccess(roles);
  }

  onSubmit() {
    //console.warn(this.form.value);
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.analyseprotokollFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.analyseprotokollFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.analyseprotokollFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.analyseprotokollFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.analyseprotokollFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.analyseprotokollFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.analyseprotokollFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.analyseprotokollFragen[7].frage, antwort: values.antwortControl7.toString()},
      {frage: this.analyseprotokollFragen[8].frage, antwort: values.antwortControl8.toString()},
      {frage: this.analyseprotokollFragen[9].frage, antwort: values.antwortControl9.toString()},
      {frage: this.analyseprotokollFragen[10].frage, antwort: values.antwortControl10.toString()},
      {frage: this.analyseprotokollFragen[11].frage, antwort: values.antwortControl11.toString()},
      {frage: this.analyseprotokollFragen[12].frage, antwort: values.antwortControl12.toString()},
      {frage: this.analyseprotokollFragen[13].frage, antwort: values.antwortControl13.toString()},
      {frage: this.analyseprotokollFragen[14].frage, antwort: values.antwortControl14.toString()},
      {frage: this.analyseprotokollFragen[15].frage, antwort: values.antwortControl15.toString()},
      {frage: this.analyseprotokollFragen[16].frage, antwort: values.antwortControl16.toString()},
      {frage: this.analyseprotokollFragen[17].frage, antwort: values.antwortControl17.toString()}
    ];
    //console.log(this.formulare.inhalt);
    this.formulare.title = this.analyseprotokollTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    console.log(this.formulare);
    this.form.disable();
  }

  generatePDF() {
    var data = document.getElementById('pdfanalyp');
    if (data !== null) {html2canvas(data).then(canvas => {
     var imgWidth = 208;
     var imgHeight = canvas.height * imgWidth / canvas.width-50;
     const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
     var position = 0;
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     pdf.save('Analyseprotokoll.pdf');
    });}
   }

}
