import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage-coachee',
  templateUrl: './landingpage-coachee.component.html',
  styleUrls: ['./landingpage-coachee.component.css']
})
export class LandingpageCoacheeComponent implements OnInit {

  coacheeId: string
  constructor() { }


  ngOnInit(): void {
    this.coacheeId = JSON.parse(localStorage.getItem('coachee')).id
  }

  getCoacheeId(): void{

  }
  CardOn1 = false;

  toggleDisplayDiv1(): void {
    if(this.CardOn1){

      this.CardOn1 = false;
    }
    else{
      this.CardOn1 = true;
      window.scrollTo(0, 500);

    }
  }

  isLoggedInCoachee() {
    return !!JSON.parse(localStorage.getItem('secret')) && !!JSON.parse(localStorage.getItem('coachee'));
  }

  CardOn2 = false;

  toggleDisplayDiv2(): void {
    if(this.CardOn2){

      this.CardOn2 = false;
    }
    else{
      this.CardOn2 = true;
      window.scrollTo(0, 500);
    }
  }

}
