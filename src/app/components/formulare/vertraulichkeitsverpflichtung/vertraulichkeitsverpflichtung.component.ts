import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthenticationService, AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {FragenService, FormulareService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vertraulichkeitsverpflichtung',
  templateUrl: './vertraulichkeitsverpflichtung.component.html',
  styleUrls: ['./vertraulichkeitsverpflichtung.component.css']
})
export class VertraulichkeitsverpflichtungComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  coacheeName: string;
  coacheeVorname: string;
  vertraulichkeitsverpflichtungFragen: FrageAntwort [];
  vertraulichkeitsverpflichtungTitle: string;

  ngOnInit(): void {
    this.vertraulichkeitsverpflichtungFragen = this.fragenService.getFragen8();
    this.vertraulichkeitsverpflichtungTitle = this.fragenService.getTitle8();
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
        date: [(new Date()).toISOString().substring(0,10), Validators.required],
        date1: [(new Date()).toISOString().substring(0,10), Validators.required]
      });

    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname;

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
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.vertraulichkeitsverpflichtungFragen[0].frage, antwort: values.date.toString()},
      {frage: this.vertraulichkeitsverpflichtungFragen[1].frage, antwort: values.antwortControl.toString()},
      {frage: this.vertraulichkeitsverpflichtungFragen[2].frage, antwort: values.date1.toString()},
      {frage: this.vertraulichkeitsverpflichtungFragen[3].frage, antwort: values.antwortControl1.toString()},
    ];
    this.formulare.title = this.vertraulichkeitsverpflichtungTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
    this.router.navigate(['formulare']);
  }}



  generatePDF()
  {
     var data = document.getElementById('pdfvv');
     if (data !== null) {html2canvas(data).then(canvas => {
     var imgWidth = 210;
     var pageHeight = 295;
     var imgHeight = canvas.height * imgWidth / canvas.width -3;
     var heightLeft = imgHeight;
     var contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
     var position = 0;
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     heightLeft -= pageHeight;

     while (heightLeft >= 0) {
      position = heightLeft - imgHeight -0.5;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
     }
     pdf.save('Vertraulichkeit.pdf');
     });}

   }

}
