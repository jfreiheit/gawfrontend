import { Component, OnInit } from '@angular/core';
import { Coachee } from "../../models";
import { CoacheeService, UserService } from "../../services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-uebersicht-vorgaenge',
  templateUrl: './uebersicht-vorgaenge.component.html',
  styleUrls: ['./uebersicht-vorgaenge.component.css']
})
export class UebersichtVorgaengeComponent implements OnInit {
  coachees!: Coachee[];
  userId: number;

  constructor(private userService: UserService,
    private coacheeService: CoacheeService,
    private router: Router) { }


  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.getCoachees(this.userId);
  }

  getCoachees(id: number): void {
    this.userService.getCoachees(id).subscribe(
      (
        response: Coachee[]) => {
        this.coachees = response;
        console.log(this.coachees);
        return this.coachees;
      },
      error => console.log(error)
    );
  }

  getFirstName() {
    if (JSON.parse(localStorage.getItem('user'))) {
      return JSON.parse(localStorage.getItem('user')).vorname;
    } else {
      return '';
    }
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  deleteCoachee(_id: number): void {
    if (confirm("Sind Sie sicher, dass der Coachee gelöscht werden soll?")) {
      this.userService.deleteCoachee(_id)
        .subscribe(
          (response: any) => {
            console.log('response: ', response)
            if (response.status == 204) {
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
  }
  reload(updated: boolean) {
    window.location.reload();
  }
}
