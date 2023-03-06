import {Component, OnInit} from '@angular/core';
import {Coachee, Formulare} from "../../models";
import {CoacheeService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';
import { FormulareService } from 'src/app/services/formulare.service';

@Component({
  selector: 'app-meine-vorgaenge',
  templateUrl: './meine-vorgaenge.component.html',
  styleUrls: ['./meine-vorgaenge.component.css']
})
export class MeineVorgaengeComponent implements OnInit {
  coachee: Coachee;
  id: string;
  coacheeId: string
  form: FormGroup;
  formulare!: Formulare[];
  formularID: string;

  constructor(public coacheeService: CoacheeService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private fb: FormBuilder,
              private fs: FormulareService) {
    this.form = this.fb.group(
      {
        vornameControl: ['', Validators.required],
        nameControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    if (this.isLoggedInCoachee()) {
      this.coacheeId = JSON.parse(localStorage.getItem('coachee')).id
      console.log('coacheeId = ' + this.coacheeId);
      this.readOne(this.coacheeId);
      this.readFormulare(this.coacheeId);
    } else {
    this.id = this.route.snapshot.paramMap.get('coachee.id');
    console.log('id = ' + this.id);
    this.readOne(this.id);
    this.readFormulare(this.id);
    }
    this.form.patchValue({
      vornameControl: this.coachee?.vorname,
      nameControl: this.coachee?.name,
    });
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  readOne(id: string): void {
    this.coacheeService.getCoachee(id).subscribe(
      (
        response: Coachee) => {
        this.coachee = response;
        console.log(this.coachee);
        return this.coachee;
      },
        (error: any) => {
        console.log(error);
      }
    );
  }

  readFormulare(id: string): void {
    this.fs.getAll(id).subscribe(
      (
          response: Formulare[]) => {
          this.formulare = response;
          console.log(this.formulare);
          return this.formulare;
        },
        (error: any) => {
        console.log(error);
      }
    )
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }

  cancel(): void {
    this.location.back();
    localStorage.removeItem('aktuellerCoachee');
  }

  deleteFormular(_id: number): void {
    this.fs.delete(_id)
      .subscribe(
        (response: any) => {
          console.log('response: ', response)
          if (response.status == 204){
            console.log(response.status)
            this.reload(true)
          } else {
            console.log(response.status)
            console.log(response.error)
            this.reload(false)
          }
        }, (error: any) => console.log(error)
      )
  }

  reload(updated: boolean){
    window.location.reload();
  }

  getFormularAnsicht(): Promise<boolean> {
    return this.router.navigate([`/formulare/`]);
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }
}
