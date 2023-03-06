import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, FragenService} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-vread',
  templateUrl: './vread.component.html',
  styleUrls: ['./vread.component.css']
})
export class VreadComponent implements OnInit {
  form: FormGroup;
  formular: Formulare;
  id: string;
  coacheeName: string;
  coacheeVorname: string;
  coacheeUN: string;
  vereinbarungFragen: FrageAntwort [];
  vereinbarungTitle: string;

  ngOnInit(): void {
    this.vereinbarungFragen = this.fragenService.getFragen7();
    this.vereinbarungTitle = this.fragenService.getTitle7();

    this.id = this.route.snapshot.paramMap.get('formular.id');
    console.log('id = ' + this.id);
    this.readOne(this.id);
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
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

    this.coacheeName = JSON.parse(localStorage.getItem('aktuellerCoachee')).name || JSON.parse(localStorage.getItem('coachee')).name;
    this.coacheeVorname = JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname || JSON.parse(localStorage.getItem('coachee')).vorname;
    this.coacheeUN = JSON.parse(localStorage.getItem('aktuellerCoachee')).firmenname || JSON.parse(localStorage.getItem('coachee')).firmenname;
  }

  cancel(): void {
    this.location.back();
  }

  readOne(id: string): void {
    this.formulareService.getFormular(id).subscribe(
      (
        response: Formulare) => {
        this.formular = response;
        console.log(this.formular);

        this.form.patchValue({
          titleControl: this.formular?.title,
          coacheeControl: this.formular?.coachee,
          userControl: this.formular?.user,
          date: this.formular?.inhalt[1]?.antwort,
          antwortControl: this.formular?.inhalt[0]?.antwort,
          antwortControl1: this.formular?.inhalt[2]?.antwort,

        });
        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
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
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [
      {frage: this.vereinbarungFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.vereinbarungFragen[1].frage, antwort: values.date.toString()},
      {frage: this.vereinbarungFragen[2].frage, antwort: values.antwortControl1.toString()},
    ];
    this.formular.title = this.vereinbarungTitle;
    this.formular.user = JSON.parse(localStorage.getItem('user')).id;
    this.formulareService.update(this.id, this.formular)
      .subscribe(
        (
          response: Formulare) => {
          console.log(this.formular);
        },
        (error: any) => {
          console.log(error);
        }
      );
    this.router.navigateByUrl('/meine-vorgaenge');
  }


  generatePDF() {
    var data = document.getElementById('pdfvba');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight +65)
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
