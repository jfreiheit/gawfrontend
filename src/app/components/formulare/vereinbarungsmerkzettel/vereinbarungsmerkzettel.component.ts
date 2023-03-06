import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthenticationService, AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {FragenService} from "../../../services";

@Component({
  selector: 'app-vereinbarungsmerkzettel',
  templateUrl: './vereinbarungsmerkzettel.component.html',
  styleUrls: ['./vereinbarungsmerkzettel.component.css']
})
export class VereinbarungsmerkzettelComponent implements OnInit {

  form: FormGroup;
  formulare: Formulare;
  vereinbarungsmerkzettelFragen: FrageAntwort [];
  vereinbarungsmerkzettelTitle: string;

  ngOnInit(): void {
    this.vereinbarungsmerkzettelFragen = this.fragenService.getFragen1();
    this.vereinbarungsmerkzettelTitle = this.fragenService.getTitle1();
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
        date: [(new Date()).toISOString().substring(0,10), Validators.required],
        date1: [(new Date()).toISOString().substring(0,10), Validators.required],
        date2: [(new Date()).toISOString().substring(0,10), Validators.required],
        date3: [(new Date()).toISOString().substring(0,10), Validators.required],
        date4: [(new Date()).toISOString().substring(0,10), Validators.required],
        date5: [(new Date()).toISOString().substring(0,10), Validators.required]
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

  hasAccess(roles: any) {
    return this.authorisationService.hasAccess(roles);
  }

  onSubmit() {
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.vereinbarungsmerkzettelFragen[0].frage, antwort: values.antwortControl},
      {frage: this.vereinbarungsmerkzettelFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[6].frage, antwort: values.date.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[7].frage, antwort: values.date1.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[8].frage, antwort: values.date2.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[9].frage, antwort: values.date3.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[10].frage, antwort: values.date4.toString()},
      {frage: this.vereinbarungsmerkzettelFragen[11].frage, antwort: values.date5.toString()}
    ];
    this.formulare.title = this.vereinbarungsmerkzettelTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    alert('Erfolgreich gespeichert.');
    this.form.disable();
  }

  generatePDF() {
    var data = document.getElementById('pdfvbamz1');
    if (data !== null) {
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('Vereinbarungen1.pdf');
      });
    }
  }
}
