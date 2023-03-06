import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, Fragen2Service} from "../../../../services";
import {Location} from "@angular/common";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-stkread',
  templateUrl: './stkread.component.html',
  styleUrls: ['./stkread.component.css']
})
export class StkreadComponent implements OnInit {
  form: FormGroup;
  formular: Formulare;
  stockwerkeFragen: FrageAntwort [];
  stockwerkeTitle: string;
  id: string

  ngOnInit(): void {
    this.stockwerkeFragen = this.fragenService.getFragen9();
    this.stockwerkeTitle = this.fragenService.getTitle9();

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
        antwortControl36: ['', Validators.required],
        antwortControl37: ['', Validators.required],
        antwortControl38: ['', Validators.required],
        antwortControl39: ['', Validators.required],
        antwortControl40: ['', Validators.required],
      });

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
          antwortControl26: this.formular?.inhalt[26]?.antwort,
          antwortControl27: this.formular?.inhalt[27]?.antwort,
          antwortControl28: this.formular?.inhalt[28]?.antwort,
          antwortControl29: this.formular?.inhalt[29]?.antwort,
          antwortControl30: this.formular?.inhalt[30]?.antwort,
          antwortControl31: this.formular?.inhalt[31]?.antwort,
          antwortControl32: this.formular?.inhalt[32]?.antwort,
          antwortControl33: this.formular?.inhalt[33]?.antwort,
          antwortControl34: this.formular?.inhalt[34]?.antwort,
          antwortControl35: this.formular?.inhalt[35]?.antwort,
          antwortControl36: this.formular?.inhalt[36]?.antwort,
          antwortControl37: this.formular?.inhalt[37]?.antwort,
          antwortControl38: this.formular?.inhalt[38]?.antwort,
          antwortControl39: this.formular?.inhalt[39]?.antwort,
          antwortControl40: this.formular?.inhalt[40]?.antwort,
        });

        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  update() {
    console.warn(this.form.value);
    const values = this.form.value;
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [
      {frage: this.stockwerkeFragen[0].frage, antwort: values.antwortControl.toString()},
      {frage: this.stockwerkeFragen[1].frage, antwort: values.antwortControl1.toString()},
      {frage: this.stockwerkeFragen[2].frage, antwort: values.antwortControl2.toString()},
      {frage: this.stockwerkeFragen[3].frage, antwort: values.antwortControl3.toString()},
      {frage: this.stockwerkeFragen[4].frage, antwort: values.antwortControl4.toString()},
      {frage: this.stockwerkeFragen[5].frage, antwort: values.antwortControl5.toString()},
      {frage: this.stockwerkeFragen[6].frage, antwort: values.antwortControl6.toString()},
      {frage: this.stockwerkeFragen[7].frage, antwort: values.antwortControl7.toString()},
      {frage: this.stockwerkeFragen[8].frage, antwort: values.antwortControl8.toString()},
      {frage: this.stockwerkeFragen[9].frage, antwort: values.antwortControl9.toString()},
      {frage: this.stockwerkeFragen[10].frage, antwort: values.antwortControl10.toString()},
      {frage: this.stockwerkeFragen[11].frage, antwort: values.antwortControl11.toString()},
      {frage: this.stockwerkeFragen[12].frage, antwort: values.antwortControl12.toString()},
      {frage: this.stockwerkeFragen[13].frage, antwort: values.antwortControl13.toString()},
      {frage: this.stockwerkeFragen[14].frage, antwort: values.antwortControl14.toString()},
      {frage: this.stockwerkeFragen[15].frage, antwort: values.antwortControl15.toString()},
      {frage: this.stockwerkeFragen[16].frage, antwort: values.antwortControl16.toString()},
      {frage: this.stockwerkeFragen[17].frage, antwort: values.antwortControl17.toString()},
      {frage: this.stockwerkeFragen[18].frage, antwort: values.antwortControl18.toString()},
      {frage: this.stockwerkeFragen[19].frage, antwort: values.antwortControl19.toString()},
      {frage: this.stockwerkeFragen[20].frage, antwort: values.antwortControl20.toString()},
      {frage: this.stockwerkeFragen[21].frage, antwort: values.antwortControl21.toString()},
      {frage: this.stockwerkeFragen[22].frage, antwort: values.antwortControl22.toString()},
      {frage: this.stockwerkeFragen[23].frage, antwort: values.antwortControl23.toString()},
      {frage: this.stockwerkeFragen[24].frage, antwort: values.antwortControl24.toString()},
      {frage: this.stockwerkeFragen[25].frage, antwort: values.antwortControl25.toString()},
      {frage: this.stockwerkeFragen[26].frage, antwort: values.antwortControl26.toString()},
      {frage: this.stockwerkeFragen[27].frage, antwort: values.antwortControl27.toString()},
      {frage: this.stockwerkeFragen[28].frage, antwort: values.antwortControl28.toString()},
      {frage: this.stockwerkeFragen[29].frage, antwort: values.antwortControl29.toString()},
      {frage: this.stockwerkeFragen[30].frage, antwort: values.antwortControl30.toString()},
      {frage: this.stockwerkeFragen[31].frage, antwort: values.antwortControl31.toString()},
      {frage: this.stockwerkeFragen[32].frage, antwort: values.antwortControl32.toString()},
      {frage: this.stockwerkeFragen[33].frage, antwort: values.antwortControl33.toString()},
      {frage: this.stockwerkeFragen[34].frage, antwort: values.antwortControl34.toString()},
      {frage: this.stockwerkeFragen[35].frage, antwort: values.antwortControl35.toString()},
      {frage: this.stockwerkeFragen[36].frage, antwort: values.antwortControl36.toString()},
      {frage: this.stockwerkeFragen[37].frage, antwort: values.antwortControl37.toString()},
      {frage: this.stockwerkeFragen[38].frage, antwort: values.antwortControl38.toString()},
      {frage: this.stockwerkeFragen[39].frage, antwort: values.antwortControl39.toString()},
      {frage: this.stockwerkeFragen[40].frage, antwort: values.antwortControl40.toString()},

    ];
    this.formular.title = this.stockwerkeTitle;
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

  cancel(): void {
    this.location.back();
  }
  generatePDF() {
    this.toggleDisplayDiv1();
    this.toggleDisplayDiv2();
    this.toggleDisplayDiv3();
    this.toggleDisplayDiv4();
    this.toggleDisplayDiv5();
    this.toggleDisplayDiv6();
    setTimeout (() => {
      var data = document.getElementById('pdfallread');
      if (data !== null) {html2canvas(data).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight+24)
        heightLeft -= pageHeight;

        while (heightLeft > pageHeight) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position+4, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        }
      pdf.save('AnalyseprStockwerke.pdf');

    });}
   },2000);
   setTimeout (() => {
    this.toggleDisplayDiv1();
    this.toggleDisplayDiv2();
    this.toggleDisplayDiv3();
    this.toggleDisplayDiv4();
    this.toggleDisplayDiv5();
    this.toggleDisplayDiv6();
  },5000);
   }

}
