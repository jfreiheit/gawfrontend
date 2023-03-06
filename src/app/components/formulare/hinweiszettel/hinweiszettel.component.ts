import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {Formulare, FrageAntwort} from "../../../models";
import {Fragen2Service} from "../../../services";

@Component({
  selector: 'app-hinweiszettel',
  templateUrl: './hinweiszettel.component.html',
  styleUrls: ['./hinweiszettel.component.css']
})
export class HinweiszettelComponent implements OnInit {
  form: FormGroup;
  formulare: Formulare;
  hinweiszettelFragen: FrageAntwort [];
  hinweiszettelTitle: string;

  ngOnInit() {
    this.hinweiszettelFragen = this.fragenService.getFragen2();
    this.hinweiszettelTitle = this.fragenService.getTitle2();
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
    this.formulare.title = this.hinweiszettelTitle;
    this.formulare.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formulare.inhalt = [
      {frage: this.hinweiszettelFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.hinweiszettelFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.hinweiszettelFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.hinweiszettelFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.hinweiszettelFragen[4].frage, antwort: values.dateControl.toString()},
    ];
    console.log(this.formulare.inhalt);
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
  }

  generatePDF() {
    var data = document.getElementById('pdfhz');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('Hinweiszettel.pdf');
  });
  }
}


}
