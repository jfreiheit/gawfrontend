import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../models";
import { AuthorisationService, UserService } from "../../services";

@Component({
  selector: 'app-uebersicht-users',
  templateUrl: './uebersicht-users.component.html',
  styleUrls: ['./uebersicht-users.component.css']
})
export class UebersichtUsersComponent implements OnInit {
  isNewUser: boolean
  users!: User[]
  userId: number
  role: string;

  constructor(private us: UserService,
    private as: AuthorisationService,
    private router: Router,) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user')).id
    this.role = JSON.parse(localStorage.getItem('user')).role
    console.log(this.userId + ' und ' + this.role)
    this.us.getAll().subscribe(
      (
        response: User[]) => {
        this.users = response;
        console.log(this.users);
        return this.users;
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

  create() {
    this.isNewUser = true
    console.log('is new user:  ' + this.isNewUser)
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('user'));
  }
  hasAccess(roles: any) {
    return this.as.hasAccess(roles);
  }

  delete(_id: number): void {
    if (confirm("Sind Sie sicher, dass der Coach gelöscht werden soll?")) {
      this.us.delete(_id)
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
