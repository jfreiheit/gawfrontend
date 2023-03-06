import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService, FragenService} from "../../../services";

@Component({
  selector: 'app-datenschutz2',
  templateUrl: './datenschutz2.component.html',
  styleUrls: ['./datenschutz2.component.css']
})
export class Datenschutz2Component implements OnInit {

  form: FormGroup;
  formulare: Formulare;
  datenschutz2Fragen: FrageAntwort [];
  datenschutz2Title: string;
  coacheeName: string;
  coacheeVorname: string;
  date: string;
  datenschutz2Inhalt: {datenschutz2Fragen: FrageAntwort [];
    datenschutz2Title: string}

  ngOnInit(): void {
    this.datenschutz2Fragen = this.fragenService.getFragen3();
    this.datenschutz2Title = this.fragenService.getTitle3();
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
        date: [(new Date()).toISOString().substring(0,10), Validators.required]
      });

    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name || JSON.parse(localStorage.getItem('coachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname || JSON.parse(localStorage.getItem('coachee')).vorname;

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
    if (confirm("Sind Sie sicher, dass das Formular abgespeichert werden soll? " +
      "Unterschriften werden NICHT gespeichert. " +
      "Um eine Unterschrift zu speichern nutzen Sie bitte die Export-Funktion."))

    { console.warn(this.form.value);
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.datenschutz2Fragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.datenschutz2Fragen[1].frage, antwort: values.date.toString()},
      {frage: this.datenschutz2Fragen[2].frage, antwort: values.antwortControl1.toString()},
    ];
    console.log(this.formulare);
    this.formulare.title = this.datenschutz2Title;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
    this.router.navigate(['formulare']);
  } }


    generatePDF()
    {
      var data = document.getElementById('pdfdsche2');
      if (data !== null) {
        html2canvas(data).then(canvas => {
          var imgWidth = 208;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          const contentDataURL = canvas.toDataURL('image/png')
          let pdf = new jspdf('p', 'mm', 'a4');
          var position = 0;
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          pdf.save('Datenschutz2.pdf');
        });
      }
    }
}
