import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {FragenService} from "../../../services";


@Component({
  selector: 'app-datenschutzerklarung',
  templateUrl: './datenschutzerklarung.component.html',
  styleUrls: ['./datenschutzerklarung.component.css']
})
export class DatenschutzerklarungComponent implements OnInit {

  form: FormGroup;
  formulare: Formulare;
  userName: string;
  userVorname: string;
  coacheeName: string;
  coacheeVorname: string;
  datenschutzprotokollFragen: FrageAntwort [];
  datenschutzprotokollTitle: string;

  ngOnInit(): void {
    this.datenschutzprotokollFragen = this.fragenService.getFragen2();
    this.datenschutzprotokollTitle = this.fragenService.getTitle2();
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
        date: [(new Date()).toISOString().substring(0,10), Validators.required]
      });

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

  hasAccess(roles:any)
  {
    return this.authorisationService.hasAccess(roles);
  }

  onSubmit() {
    if (confirm("Sind Sie sicher, dass das Formular abgespeichert werden soll? " +
      "Unterschriften werden NICHT gespeichert. " +
      "Um eine Unterschrift zu speichern nutzen Sie bitte die Export-Funktion.")){
    console.warn(this.form.value);
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.datenschutzprotokollFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.datenschutzprotokollFragen[1].frage, antwort: values.date.toString()},
      {frage: this.datenschutzprotokollFragen[2].frage, antwort: values.antwortControl1.toString()},
      {frage: this.datenschutzprotokollFragen[3].frage, antwort: values.antwortControl2.toString()}
      ];
    console.log(this.formulare.inhalt);
    this.formulare.title = this.datenschutzprotokollTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
    this.router.navigate(['formulare']);
  }}

  generatePDF()
  {

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
}
