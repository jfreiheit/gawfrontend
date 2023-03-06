import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService, Fragen2Service} from "../../../services";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-massnahmenentwicklung',
  templateUrl: './massnahmenentwicklung.component.html',
  styleUrls: ['./massnahmenentwicklung.component.css']
})
export class MassnahmenentwicklungComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  massnahmenentwicklungFragen: FrageAntwort [];
  massnahmenentwicklungTitle: string;

  ngOnInit(): void {
    this.massnahmenentwicklungFragen = this.fragenService.getFragen6();
    this.massnahmenentwicklungTitle = this.fragenService.getTitle6();
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
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
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.massnahmenentwicklungFragen[0].frage, antwort: values.dateControl.toString()},
      {frage: this.massnahmenentwicklungFragen[1].frage, antwort: values.antwortControl2.toString()},
      {frage: this.massnahmenentwicklungFragen[2].frage, antwort: values.antwortControl3.toString()},
      {frage: this.massnahmenentwicklungFragen[3].frage, antwort: values.antwortControl4.toString()},
      {frage: this.massnahmenentwicklungFragen[4].frage, antwort: values.antwortControl5.toString()},
      {frage: this.massnahmenentwicklungFragen[5].frage, antwort: values.antwortControl6.toString()},
      {frage: this.massnahmenentwicklungFragen[6].frage, antwort: values.antwortControl7.toString()},
      {frage: this.massnahmenentwicklungFragen[7].frage, antwort: values.antwortControl8.toString()},
      {frage: this.massnahmenentwicklungFragen[8].frage, antwort: values.antwortControl9.toString()},
      {frage: this.massnahmenentwicklungFragen[9].frage, antwort: values.antwortControl10.toString()},
      {frage: this.massnahmenentwicklungFragen[10].frage, antwort: values.antwortControl11.toString()},
      {frage: this.massnahmenentwicklungFragen[11].frage, antwort: values.antwortControl12.toString()},
      {frage: this.massnahmenentwicklungFragen[12].frage, antwort: values.antwortControl13.toString()},
      {frage: this.massnahmenentwicklungFragen[13].frage, antwort: values.antwortControl14.toString()},
      {frage: this.massnahmenentwicklungFragen[14].frage, antwort: values.antwortControl15.toString()},
      {frage: this.massnahmenentwicklungFragen[15].frage, antwort: values.antwortControl16.toString()},
      {frage: this.massnahmenentwicklungFragen[16].frage, antwort: values.antwortControl17.toString()},
      {frage: this.massnahmenentwicklungFragen[17].frage, antwort: values.antwortControl18.toString()},
    ];
    this.formulare.title = this.massnahmenentwicklungTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    alert('Erfolgreich gespeichert.');
    this.form.disable();
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
  var data = document.getElementById('pdfmase');
  if (data !== null) {html2canvas(data).then(canvas => {
   var imgWidth = 208;
   var imgHeight = canvas.height * imgWidth / canvas.width;
   const contentDataURL = canvas.toDataURL('image/png')
   let pdf = new jspdf('p', 'mm', 'a4');
   var position = 0;
   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
   pdf.save('Maßnahmen.pdf');
  });}
 }


}
