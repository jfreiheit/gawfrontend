import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthenticationService, AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormulareService, Fragen2Service} from "../../../services";
import {Formulare, FrageAntwort} from "../../../models";

@Component({
  selector: 'app-vereinbarungsmerkzettel2',
  templateUrl: './vereinbarungsmerkzettel2.component.html',
  styleUrls: ['./vereinbarungsmerkzettel2.component.css']
})
export class Vereinbarungsmerkzettel2Component implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  vereinbarungsmerkzettel2Frage: FrageAntwort[];
  vereinbarungsMerkzettelTitle: string;

  ngOnInit():void{
    this.vereinbarungsmerkzettel2Frage= this.fragen2Service.getFragen();
  this.vereinbarungsMerkzettelTitle = this.fragen2Service.getTitle();
  }

  constructor(private authenticationService: AuthenticationService,
              private authorisationService: AuthorisationService,
              private fb: FormBuilder,
              private router: Router,
              private fragen2Service: Fragen2Service,
              private formulareService: FormulareService) {
    this.form = this.fb.group({
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

  hasAccess(roles:any)
  {
    return this.authorisationService.hasAccess(roles);
  }

  onSubmit() {
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.vereinbarungsmerkzettel2Frage[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[6].frage, antwort: values.date.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[7].frage, antwort: values.date1.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[8].frage, antwort: values.date2.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[9].frage, antwort: values.date3.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[10].frage, antwort: values.date4.toString()},
      {frage: this.vereinbarungsmerkzettel2Frage[11].frage, antwort: values.date5.toString()}
    ];
    this.formulare.title = this.vereinbarungsMerkzettelTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
  }

  generatePDF() {
    var data = document.getElementById('pdfvbamz2');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('Vereinbarungen2.pdf');
  });
  }
}


}
