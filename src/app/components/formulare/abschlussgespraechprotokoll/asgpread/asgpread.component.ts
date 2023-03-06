import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulare, FrageAntwort} from "../../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorisationService, FormulareService, Fragen2Service} from "../../../../services";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {Location} from "@angular/common";

@Component({
  selector: 'app-asgpread',
  templateUrl: './asgpread.component.html',
  styleUrls: ['./asgpread.component.css']
})
export class ASGPreadComponent implements OnInit {
  form: FormGroup;
  formular: Formulare;
  abschlussgespraechFragen: FrageAntwort [];
  abschlussgespaechTitle: string;
  id: string;

  ngOnInit(): void {
    this.abschlussgespraechFragen= this.fragenService.getFragen3();
    this.abschlussgespaechTitle = this.fragenService.getTitle3();

    this.id = this.route.snapshot.paramMap.get('formular.id');
    console.log('id = ' + this.id);
    this.readOne(this.id);
  }

  constructor (
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
              private formulareService: FormulareService,
              private authorisationService: AuthorisationService,
              private fragenService: Fragen2Service) {
    this.form = this.fb.group(
      {
        titleControl: ['', Validators.required],
        coacheeControl: ['', Validators.required],
        userControl: ['', Validators.required],
        dateControl: [(new Date()).toISOString().substring(0,10), Validators.required],
        timeControl: ['', Validators.required],
        ortControl: ['', Validators.required],
        coacheeNameControl: ['', Validators.required],
        coacheeVornameControl: ['', Validators.required],
        unternehmenControl: ['', Validators.required],
        arbeitsbereichControl: ['', Validators.required],
        positionControl: ['', Validators.required],
        coachNameControl: ['', Validators.required],
        coachVornameControl: ['', Validators.required],
        antwortControl: ['', Validators.required],
        antwort2Control: ['', Validators.required],
        antwort3Control: ['', Validators.required],
        antwort4Control: ['', Validators.required],
        antwort5Control: ['', Validators.required],
        antwort6Control: ['', Validators.required],
        antwort7Control: ['', Validators.required],
        antwort8Control: ['', Validators.required],
        antwort9Control: ['', Validators.required],
        antwort10Control: ['', Validators.required],
        antwort11Control: ['', Validators.required],
        antwort12Control: ['', Validators.required],
        antwort13Control: ['', Validators.required],
        antwort14Control: ['', Validators.required],
        antwort15Control: ['', Validators.required],
        antwort16Control: ['', Validators.required],
        antwort17Control: ['', Validators.required],
        antwort18Control: ['', Validators.required],
        antwort19Control: ['', Validators.required],
        antwort20Control: ['', Validators.required],
        antwort21Control: ['', Validators.required],
        antwort22Control: ['', Validators.required],
        antwort23Control: ['', Validators.required],
        antwort24Control: ['', Validators.required],
        antwort25Control: ['', Validators.required],
        antwort26Control: ['', Validators.required],
        antwort27Control: ['', Validators.required],
        antwort28Control: ['', Validators.required],
        antwort29Control: [(new Date()).toISOString().substring(0,10), Validators.required],
        antwort30Control: ['', Validators.required],
        antwort31Control: ['', Validators.required],
      });
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
          dateControl: this.formular?.inhalt[0].antwort,
          timeControl: this.formular?.inhalt[1]?.antwort,
          ortControl: this.formular?.inhalt[2]?.antwort,
          coacheeNameControl: this.formular?.inhalt[3]?.antwort,
          coacheeVornameControl: this.formular?.inhalt[4]?.antwort,
          unternehmenControl: this.formular?.inhalt[5]?.antwort,
          arbeitsbereichControl: this.formular?.inhalt[6]?.antwort,
          positionControl: this.formular?.inhalt[7]?.antwort,
          coachNameControl: this.formular?.inhalt[8]?.antwort,
          coachVornameControl: this.formular?.inhalt[9]?.antwort,
          antwortControl: this.formular?.inhalt[10]?.antwort,
          antwort2Control: this.formular?.inhalt[11]?.antwort,
          antwort3Control: this.formular?.inhalt[12]?.antwort,
          antwort4Control: this.formular?.inhalt[13]?.antwort,
          antwort5Control: this.formular?.inhalt[14]?.antwort,
          antwort6Control: this.formular?.inhalt[15]?.antwort,
          antwort7Control: this.formular?.inhalt[16]?.antwort,
          antwort8Control: this.formular?.inhalt[17]?.antwort,
          antwort9Control: this.formular?.inhalt[18]?.antwort,
          antwort10Control: this.formular?.inhalt[19]?.antwort,
          antwort11Control: this.formular?.inhalt[20]?.antwort,
          antwort12Control: this.formular?.inhalt[21]?.antwort,
          antwort13Control: this.formular?.inhalt[22]?.antwort,
          antwort14Control: this.formular?.inhalt[23]?.antwort,
          antwort15Control: this.formular?.inhalt[24]?.antwort,
          antwort16Control: this.formular?.inhalt[25]?.antwort,
          antwort17Control: this.formular?.inhalt[26]?.antwort,
          antwort18Control: this.formular?.inhalt[27]?.antwort,
          antwort19Control: this.formular?.inhalt[28]?.antwort,
          antwort20Control: this.formular?.inhalt[29]?.antwort,
          antwort21Control: this.formular?.inhalt[30]?.antwort,
          antwort22Control: this.formular?.inhalt[31]?.antwort,
          antwort23Control: this.formular?.inhalt[32]?.antwort,
          antwort24Control: this.formular?.inhalt[33]?.antwort,
          antwort25Control: this.formular?.inhalt[34]?.antwort,
          antwort26Control: this.formular?.inhalt[35]?.antwort,
          antwort27Control: this.formular?.inhalt[36]?.antwort,
          antwort28Control: this.formular?.inhalt[37]?.antwort,
          antwort29Control: this.formular?.inhalt[38]?.antwort,
          antwort30Control: this.formular?.inhalt[39]?.antwort,
          antwort31Control: this.formular?.inhalt[40]?.antwort,
        });

        return this.formular;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.warn(this.form.value);
    const values = this.form.value;
    this.formular.coachee = JSON.parse(localStorage.getItem('aktuellerCoachee'))._id;
    this.formular.inhalt = [
      {frage: this.abschlussgespraechFragen[0].frage, antwort: values.dateControl.toString()},
      {frage: this.abschlussgespraechFragen[1].frage, antwort: values.timeControl.toString()},
      {frage: this.abschlussgespraechFragen[2].frage, antwort: values.ortControl.toString()},
      {frage: this.abschlussgespraechFragen[3].frage, antwort: values.coacheeNameControl.toString()},
      {frage: this.abschlussgespraechFragen[4].frage, antwort: values.coacheeVornameControl.toString()},
      {frage: this.abschlussgespraechFragen[5].frage, antwort: values.unternehmenControl.toString()},
      {frage: this.abschlussgespraechFragen[6].frage, antwort: values.arbeitsbereichControl.toString()},
      {frage: this.abschlussgespraechFragen[7].frage, antwort: values.positionControl.toString()},
      {frage: this.abschlussgespraechFragen[8].frage, antwort: values.coachNameControl.toString()},
      {frage: this.abschlussgespraechFragen[9].frage, antwort: values.coachVornameControl.toString()},
      {frage: this.abschlussgespraechFragen[10].frage, antwort: values.antwortControl.toString()},
      {frage: this.abschlussgespraechFragen[11].frage, antwort: values.antwort2Control.toString()},
      {frage: this.abschlussgespraechFragen[12].frage, antwort: values.antwort3Control.toString()},
      {frage: this.abschlussgespraechFragen[13].frage, antwort: values.antwort4Control.toString()},
      {frage: this.abschlussgespraechFragen[14].frage, antwort: values.antwort5Control.toString()},
      {frage: this.abschlussgespraechFragen[15].frage, antwort: values.antwort6Control.toString()},
      {frage: this.abschlussgespraechFragen[16].frage, antwort: values.antwort7Control.toString()},
      {frage: this.abschlussgespraechFragen[17].frage, antwort: values.antwort8Control.toString()},
      {frage: this.abschlussgespraechFragen[18].frage, antwort: values.antwort9Control.toString()},
      {frage: this.abschlussgespraechFragen[19].frage, antwort: values.antwort10Control.toString()},
      {frage: this.abschlussgespraechFragen[20].frage, antwort: values.antwort11Control.toString()},
      {frage: this.abschlussgespraechFragen[21].frage, antwort: values.antwort12Control.toString()},
      {frage: this.abschlussgespraechFragen[22].frage, antwort: values.antwort13Control.toString()},
      {frage: this.abschlussgespraechFragen[23].frage, antwort: values.antwort14Control.toString()},
      {frage: this.abschlussgespraechFragen[24].frage, antwort: values.antwort15Control.toString()},
      {frage: this.abschlussgespraechFragen[25].frage, antwort: values.antwort16Control.toString()},
      {frage: this.abschlussgespraechFragen[26].frage, antwort: values.antwort17Control.toString()},
      {frage: this.abschlussgespraechFragen[27].frage, antwort: values.antwort18Control.toString()},
      {frage: this.abschlussgespraechFragen[28].frage, antwort: values.antwort19Control.toString()},
      {frage: this.abschlussgespraechFragen[29].frage, antwort: values.antwort20Control.toString()},
      {frage: this.abschlussgespraechFragen[30].frage, antwort: values.antwort21Control.toString()},
      {frage: this.abschlussgespraechFragen[31].frage, antwort: values.antwort22Control.toString()},
      {frage: this.abschlussgespraechFragen[32].frage, antwort: values.antwort23Control.toString()},
      {frage: this.abschlussgespraechFragen[33].frage, antwort: values.antwort24Control.toString()},
      {frage: this.abschlussgespraechFragen[34].frage, antwort: values.antwort25Control.toString()},
      {frage: this.abschlussgespraechFragen[35].frage, antwort: values.antwort26Control.toString()},
      {frage: this.abschlussgespraechFragen[36].frage, antwort: values.antwort27Control.toString()},
      {frage: this.abschlussgespraechFragen[37].frage, antwort: values.antwort28Control.toString()},
      {frage: this.abschlussgespraechFragen[38].frage, antwort: values.antwort29Control.toString()},
      {frage: this.abschlussgespraechFragen[39].frage, antwort: values.antwort30Control.toString()},
      {frage: this.abschlussgespraechFragen[40].frage, antwort: values.antwort31Control.toString()},
    ];
    this.formular.title = this.abschlussgespaechTitle;
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
    var data = document.getElementById('pdfabschgread');
    if (data !== null) {html2canvas(data).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width +60;
      var heightLeft = imgHeight;
      var contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('Abschluss.pdf');
    });}
  }

  cancel(): void {
    this.location.back();
  }
}
