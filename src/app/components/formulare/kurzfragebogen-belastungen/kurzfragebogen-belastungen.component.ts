import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {Fragen2Service} from "../../../services";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-kurzfragebogen-belastungen',
  templateUrl: './kurzfragebogen-belastungen.component.html',
  styleUrls: ['./kurzfragebogen-belastungen.component.css']
})
export class KurzfragebogenBelastungenComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  kurzfragebogenBelastungFragen: FrageAntwort [];
  kurzfragebogenBelastungTitle: string;

  ngOnInit(): void {
    this.kurzfragebogenBelastungFragen = this.fragenService.getFragen8();
    this.kurzfragebogenBelastungTitle = this.fragenService.getTitle8();
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
        antwortControl18: ['', Validators.required],
        antwortControl19: ['', Validators.required],
        antwortControl20: ['', Validators.required],
        antwortControl21: ['', Validators.required],
        antwortControl22: ['', Validators.required],
        antwortControl23: ['', Validators.required],
        antwortControl24: ['', Validators.required],
        antwortControl25: ['', Validators.required],
        antwortControl26: ['', Validators.required],
        antwortControl27: ['', Validators.required],
        antwortControl28: ['', Validators.required],
        antwortControl29: ['', Validators.required],
        antwortControl30: ['', Validators.required],
        antwortControl31: ['', Validators.required],
        antwortControl32: ['', Validators.required],
        antwortControl33: ['', Validators.required],
        antwortControl34: ['', Validators.required],
        antwortControl35: ['', Validators.required],
      });

    this.formulare = {
      _id: 0,
      title: '',
      user: '',
      coachee: '',
      inhalt: []
    };
  }
  onSubmit() {
    const values = this.form.value;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.kurzfragebogenBelastungFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.kurzfragebogenBelastungFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.kurzfragebogenBelastungFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.kurzfragebogenBelastungFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.kurzfragebogenBelastungFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.kurzfragebogenBelastungFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.kurzfragebogenBelastungFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.kurzfragebogenBelastungFragen[7].frage, antwort: values.antwortControl7.toString()},
      {frage: this.kurzfragebogenBelastungFragen[8].frage, antwort: values.antwortControl8.toString()},
      {frage: this.kurzfragebogenBelastungFragen[9].frage, antwort: values.antwortControl9.toString()},
      {frage: this.kurzfragebogenBelastungFragen[10].frage, antwort: values.antwortControl10.toString()},
      {frage: this.kurzfragebogenBelastungFragen[11].frage, antwort: values.antwortControl11.toString()},
      {frage: this.kurzfragebogenBelastungFragen[12].frage, antwort: values.antwortControl12.toString()},
      {frage: this.kurzfragebogenBelastungFragen[13].frage, antwort: values.antwortControl13.toString()},
      {frage: this.kurzfragebogenBelastungFragen[14].frage, antwort: values.antwortControl14.toString()},
      {frage: this.kurzfragebogenBelastungFragen[15].frage, antwort: values.antwortControl15.toString()},
      {frage: this.kurzfragebogenBelastungFragen[16].frage, antwort: values.antwortControl16.toString()},
      {frage: this.kurzfragebogenBelastungFragen[17].frage, antwort: values.antwortControl17.toString()},
      {frage: this.kurzfragebogenBelastungFragen[18].frage, antwort: values.antwortControl18.toString()},
      {frage: this.kurzfragebogenBelastungFragen[19].frage, antwort: values.antwortControl19.toString()},
      {frage: this.kurzfragebogenBelastungFragen[20].frage, antwort: values.antwortControl20.toString()},
      {frage: this.kurzfragebogenBelastungFragen[21].frage, antwort: values.antwortControl21.toString()},
      {frage: this.kurzfragebogenBelastungFragen[22].frage, antwort: values.antwortControl22.toString()},
      {frage: this.kurzfragebogenBelastungFragen[23].frage, antwort: values.antwortControl23.toString()},
      {frage: this.kurzfragebogenBelastungFragen[24].frage, antwort: values.antwortControl24.toString()},
      {frage: this.kurzfragebogenBelastungFragen[25].frage, antwort: values.antwortControl25.toString()},
      {frage: this.kurzfragebogenBelastungFragen[26].frage, antwort: values.antwortControl26.toString()},
      {frage: this.kurzfragebogenBelastungFragen[27].frage, antwort: values.antwortControl27.toString()},
      {frage: this.kurzfragebogenBelastungFragen[28].frage, antwort: values.antwortControl28.toString()},
      {frage: this.kurzfragebogenBelastungFragen[29].frage, antwort: values.antwortControl29.toString()},
      {frage: this.kurzfragebogenBelastungFragen[30].frage, antwort: values.antwortControl30.toString()},
      {frage: this.kurzfragebogenBelastungFragen[31].frage, antwort: values.antwortControl31.toString()},
      {frage: this.kurzfragebogenBelastungFragen[32].frage, antwort: values.antwortControl32.toString()},
      {frage: this.kurzfragebogenBelastungFragen[33].frage, antwort: values.antwortControl33.toString()},
      {frage: this.kurzfragebogenBelastungFragen[34].frage, antwort: values.antwortControl34.toString()},
      {frage: this.kurzfragebogenBelastungFragen[35].frage, antwort: values.antwortControl35.toString()},
    ];
    this.formulare.title = this.kurzfragebogenBelastungTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    alert('Erfolgreich gespeichert.');
    this.form.disable();
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

  CardOn1 = false;
  buttonLabel1 = 'fa fa-angle-down';

  toggleDisplayDiv1(): void {
    if(this.buttonLabel1 === 'fa fa-angle-up'){
      this.buttonLabel1 = 'fa fa-angle-down';
      this.CardOn1 = false;
    }
    else {
      this.buttonLabel1 = 'fa fa-angle-up';
      this.CardOn1 = true;
    }
  }

  CardOn2 = false;
  buttonLabel2 = 'fa fa-angle-down';

  toggleDisplayDiv2(): void {
    if(this.buttonLabel2 === 'fa fa-angle-up'){
      this.buttonLabel2 = 'fa fa-angle-down';
      this.CardOn2 = false;
    }
    else {
      this.buttonLabel2 = 'fa fa-angle-up';
      this.CardOn2 = true;
    }
  }

  CardOn3 = false;
  buttonLabel3 = 'fa fa-angle-down';

  toggleDisplayDiv3(): void {
    if(this.buttonLabel3 === 'fa fa-angle-up'){
      this.buttonLabel3 = 'fa fa-angle-down';
      this.CardOn3 = false;
    }
    else {
      this.buttonLabel3 = 'fa fa-angle-up';
      this.CardOn3 = true;
    }
  }

  CardOn4 = false;
  buttonLabel4 = 'fa fa-angle-down';

  toggleDisplayDiv4(): void {
    if(this.buttonLabel4 === 'fa fa-angle-up'){
      this.buttonLabel4 = 'fa fa-angle-down';
      this.CardOn4 = false;
    }
    else {
      this.buttonLabel4 = 'fa fa-angle-up';
      this.CardOn4 = true;
    }
  }

  CardOn5 = false;
  buttonLabel5 = 'fa fa-angle-down';

  toggleDisplayDiv5(): void {
    if(this.buttonLabel5 === 'fa fa-angle-up'){
      this.buttonLabel5 = 'fa fa-angle-down';
      this.CardOn5 = false;
    }
    else {
      this.buttonLabel5 = 'fa fa-angle-up';
      this.CardOn5 = true;
    }
  }

  CardOn6 = false;
  buttonLabel6 = 'fa fa-angle-down';

  toggleDisplayDiv6(): void {
    if(this.buttonLabel6 === 'fa fa-angle-up'){
      this.buttonLabel6 = 'fa fa-angle-down';
      this.CardOn6 = false;
    }
    else {
      this.buttonLabel6 = 'fa fa-angle-up';
      this.CardOn6 = true;
    }
  }

  CardOn7 = false;
  buttonLabel7 = 'fa fa-angle-down';

  toggleDisplayDiv7(): void {
    if(this.buttonLabel7 === 'fa fa-angle-up'){
      this.buttonLabel7 = 'fa fa-angle-down';
      this.CardOn7 = false;
    }
    else {
      this.buttonLabel7 = 'fa fa-angle-up';
      this.CardOn7 = true;
    }
  }

  generatePDF() {
    this.toggleDisplayDiv1();
    this.toggleDisplayDiv2();
    this.toggleDisplayDiv3();
    this.toggleDisplayDiv4();
    this.toggleDisplayDiv5();
    this.toggleDisplayDiv6();
    this.toggleDisplayDiv7();
    setTimeout (() => {
    var data = document.getElementById('kfzab-card1');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 0, position+2, imgWidth, imgHeight -5);
      heightLeft -= pageHeight;
      }
    pdf.save('KFZABelastung.pdf');
    });}
   },2000);
   setTimeout (() => {
    this.toggleDisplayDiv1();
    this.toggleDisplayDiv2();
    this.toggleDisplayDiv3();
    this.toggleDisplayDiv4();
    this.toggleDisplayDiv5();
    this.toggleDisplayDiv6();
    this.toggleDisplayDiv7();
  },5000);
   }


}
