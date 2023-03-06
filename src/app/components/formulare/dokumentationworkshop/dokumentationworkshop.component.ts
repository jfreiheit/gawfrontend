import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {Fragen2Service} from "../../../services";
import {Formulare, FrageAntwort} from "../../../models";

@Component({
  selector: 'app-dokumentationworkshop',
  templateUrl: './dokumentationworkshop.component.html',
  styleUrls: ['./dokumentationworkshop.component.css']
})
export class DokumentationworkshopComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  dokumentationworkshopFragen: FrageAntwort [];
  dokumentationworkshopTitle: string;

  ngOnInit(): void {
    this.dokumentationworkshopFragen =this.fragenService.getFragen4();
    this.dokumentationworkshopTitle = 'Ergänzung zur Dokumentation des Workshops';

    console.log(this.dokumentationworkshopTitle)
  }
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private formulareService: FormulareService,
              private authorisationService: AuthorisationService,
              private fragenService: Fragen2Service
    ) {    this.form = this.fb.group(
    {
      titleControl: ['', Validators.required],
      coacheeControl: ['', Validators.required],
      userControl: ['', Validators.required],
      antwortControl: ['', Validators.required],
      antwortControl2: ['', Validators.required],
      antwortControl3: ['', Validators.required],
      antwortControl4: ['', Validators.required],
      dateControl: [(new Date()).toISOString().substring(0,10), Validators.required]
    });
    this.formulare = {
      _id: 0,
      title: '',
      user: '',
      coachee: '',
      inhalt: []
    };}


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
    console.warn(this.form.value);
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.dokumentationworkshopFragen[1].frage, antwort: values.antwortControl.toString()},
      {frage: this.dokumentationworkshopFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.dokumentationworkshopFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.dokumentationworkshopFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.dokumentationworkshopFragen[0].frage, antwort: values.dateControl.toString()},
    ];
    this.formulare.title = this.dokumentationworkshopTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    alert('Erfolgreich gespeichert.');
    this.form.disable();
  }

  generatePDF() {
    var data = document.getElementById('pdfdokuws');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('DokumentationsWS.pdf');
    });
    }
  }


}
