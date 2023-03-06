import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, Fragen2Service} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-kfrread',
  templateUrl: './kfrread.component.html',
  styleUrls: ['./kfrread.component.css']
})
export class KFRreadComponent implements OnInit {
  form: FormGroup;
  formular: Formulare;
  id: string;
  kurzfragebogenRessourcenFragen: FrageAntwort [];
  kurzfragebogenRessourcenTitle: string;

  ngOnInit(): void {
    this.kurzfragebogenRessourcenFragen = this.fragenService.getFragen7();
    this.kurzfragebogenRessourcenTitle = this.fragenService.getTitle7();

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
      });
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
          antwortControl: this.formular?.inhalt[0]?.antwort,
          antwortControl1: this.formular?.inhalt[1]?.antwort,
          antwortControl2: this.formular?.inhalt[2]?.antwort,
          antwortControl3: this.formular?.inhalt[3]?.antwort,
          antwortControl4: this.formular?.inhalt[4]?.antwort,
          antwortControl5: this.formular?.inhalt[5]?.antwort,
          antwortControl6: this.formular?.inhalt[6]?.antwort,
          antwortControl7: this.formular?.inhalt[7]?.antwort,
          antwortControl8: this.formular?.inhalt[8]?.antwort,
          antwortControl9: this.formular?.inhalt[9]?.antwort,
          antwortControl10: this.formular?.inhalt[10]?.antwort,
          antwortControl11: this.formular?.inhalt[11]?.antwort,
          antwortControl12: this.formular?.inhalt[12]?.antwort,
          antwortControl13: this.formular?.inhalt[13]?.antwort,
          antwortControl14: this.formular?.inhalt[14]?.antwort,
          antwortControl15: this.formular?.inhalt[15]?.antwort,
          antwortControl16: this.formular?.inhalt[16]?.antwort,
          antwortControl17: this.formular?.inhalt[17]?.antwort,
          antwortControl18: this.formular?.inhalt[18]?.antwort,
          antwortControl19: this.formular?.inhalt[19]?.antwort,
          antwortControl20: this.formular?.inhalt[20]?.antwort,
          antwortControl21: this.formular?.inhalt[21]?.antwort,
          antwortControl22: this.formular?.inhalt[22]?.antwort,
          antwortControl23: this.formular?.inhalt[23]?.antwort,
          antwortControl24: this.formular?.inhalt[24]?.antwort,
          antwortControl25: this.formular?.inhalt[25]?.antwort,
        });
        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    const values = this.form.value;
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [
      {frage: this.kurzfragebogenRessourcenFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[7].frage, antwort: values.antwortControl7.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[8].frage, antwort: values.antwortControl8.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[9].frage, antwort: values.antwortControl9.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[10].frage, antwort: values.antwortControl10.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[11].frage, antwort: values.antwortControl11.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[12].frage, antwort: values.antwortControl12.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[13].frage, antwort: values.antwortControl13.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[14].frage, antwort: values.antwortControl14.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[15].frage, antwort: values.antwortControl15.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[16].frage, antwort: values.antwortControl16.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[17].frage, antwort: values.antwortControl17.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[18].frage, antwort: values.antwortControl18.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[19].frage, antwort: values.antwortControl19.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[20].frage, antwort: values.antwortControl20.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[21].frage, antwort: values.antwortControl21.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[22].frage, antwort: values.antwortControl22.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[23].frage, antwort: values.antwortControl23.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[24].frage, antwort: values.antwortControl24.toString()},
      {frage: this.kurzfragebogenRessourcenFragen[25].frage, antwort: values.antwortControl25.toString()},
    ];
    this.formular.title = this.kurzfragebogenRessourcenTitle;
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
    else{
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
    else{
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
    else{
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
    else{
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
    else{
      this.buttonLabel5 = 'fa fa-angle-up';
      this.CardOn5 = true;
    }
  }

  generatePDF() {
    this.toggleDisplayDiv1();
    this.toggleDisplayDiv2();
    this.toggleDisplayDiv3();
    this.toggleDisplayDiv4();
    this.toggleDisplayDiv5();
    setTimeout (() => {
      var data = document.getElementById('rescard1');
      if (data !== null) {html2canvas(data).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight +30)
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position+20, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('KzfbRessourcen.pdf');
      });}
    },2000);
    setTimeout (() => {
      this.toggleDisplayDiv1();
      this.toggleDisplayDiv2();
      this.toggleDisplayDiv3();
      this.toggleDisplayDiv4();
      this.toggleDisplayDiv5();
    },5000);
  }
}
