import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import { AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {FragenService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";

@Component({
  selector: 'app-vereinbarung',
  templateUrl: './vereinbarung.component.html',
  styleUrls: ['./vereinbarung.component.css']
})
export class VereinbarungComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  userName: string;
  userVorname: string;
  coacheeName: string;
  coacheeVorname: string;
  coacheeUN: string;
  vereinbarungFragen: FrageAntwort [];
  vereinbarungTitle: string;

  ngOnInit(): void {
    this.vereinbarungFragen = this.fragenService.getFragen7();
    this.vereinbarungTitle = this.fragenService.getTitle7();
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

    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname;
    this.coacheeUN = JSON.parse(localStorage.getItem('aktuellerCoachee')).firmenname;

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
      {frage: this.vereinbarungFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.vereinbarungFragen[1].frage, antwort: values.date.toString()},
      {frage: this.vereinbarungFragen[2].frage, antwort: values.antwortControl1.toString()},
    ];
    console.log(this.formulare.inhalt);
    this.formulare.title = this.vereinbarungTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
    this.router.navigate(['formulare']);
  }}



  generatePDF()
  {
     var data = document.getElementById('pdfvba');
     if (data !== null) {html2canvas(data).then(canvas => {
     var imgWidth = 210;
     var pageHeight = 295;
     var imgHeight = canvas.height * imgWidth / canvas.width;
     var heightLeft = imgHeight;
     var contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
     var position = 0;
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight +70)
     heightLeft -= pageHeight;

     while (heightLeft >= 0) {
      position = heightLeft - imgHeight + 45;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
     }
     pdf.save('Coachingvertrag.pdf');
     });}

   }
}
