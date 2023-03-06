import {Component, OnInit, ViewChild} from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthenticationService, AuthorisationService} from "../../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulareService} from "../../../services";
import {FragenService} from "../../../services";


@Component({
  selector: 'app-schweigepflichtentbindung',
  templateUrl: './schweigepflichtentbindung.component.html',
  styleUrls: ['./schweigepflichtentbindung.component.css']
})
export class SchweigepflichtentbindungComponent implements OnInit {

  form: FormGroup;
  formulare: Formulare;
  coacheeName: string;
  coacheeVorname: string;
  firmen_ort: string;
  firmen_plz: string;
  schweigepflichtentbindungFragen: FrageAntwort [];
  schweigepflichtentbindungTitle: string;

  ngOnInit(): void {
    this.schweigepflichtentbindungFragen = this.fragenService.getFragen6();
    this.schweigepflichtentbindungTitle = this.fragenService.getTitle6();
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
        antwortControl6: ['', Validators.required],
        date: [(new Date()).toISOString().substring(0,10), Validators.required],
        date1: [(new Date()).toISOString().substring(0,10), Validators.required]
      });
    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname;
    this.firmen_ort = JSON.parse(localStorage.getItem('aktuellerCoachee')).firmen_ort;
    this.firmen_plz = JSON.parse(localStorage.getItem('aktuellerCoachee')).firmen_plz;

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
      {frage: this.schweigepflichtentbindungFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.schweigepflichtentbindungFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.schweigepflichtentbindungFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.schweigepflichtentbindungFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.schweigepflichtentbindungFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.schweigepflichtentbindungFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.schweigepflichtentbindungFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.schweigepflichtentbindungFragen[7].frage, antwort: values.date.toString()},
      {frage: this.schweigepflichtentbindungFragen[8].frage, antwort: values.date1.toString()}
    ];
    console.log(this.formulare.inhalt);
    this.formulare.title = this.schweigepflichtentbindungTitle;
    this.formulare.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.create(this.formulare, this.formulare.coachee);
    this.form.disable();
    this.router.navigate(['formulare']);
  }}


    generatePDF()
    {
    var data = document.getElementById('pdfspfe');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('Schweigepflichtentb.pdf');
  });
  }
}

}
