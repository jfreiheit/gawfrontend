import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-formulare',
  templateUrl: './formulare.component.html',
  styleUrls: ['./formulare.component.css']
})
export class FormulareComponent implements OnInit {

  coacheeId: string
  links = [

    {url:'/datenschutzerklarung', name: 'Datenschutzerklärung'},
    {url:'/datenschutz2', name: 'Datenschutzerklärung Fortsetzung'},
    {url:'/vertraulichkeitsverpflichtung', name: 'Anlage zur Verpflichtung auf die Vertraulichkeit'},
    {url:'/einwilligung-datenerhebung', name: 'Einwilligungserklärung zur Erhebung von Daten'},
    {url:'/einwilligung-datenuebermittlung', name: 'Einwilligungserklärung zur Übermittlung an Dritte'},
    {url:'/schweigepflichtentbindung', name: 'Schweigepflichtentbindung'},
    {url:'/vereinbarungsmerkzettel', name: 'Vereinbarungsmerkzettel'},
    {url:'/vereinbarung', name: 'Coachingvertrag'},
    {url:'/analyseprotokoll', name: 'Protokoll Analyse Arbeitsfähigkeit'},
    {url:'/analyseprotokoll-stockwerke', name: 'Analyseprotokoll Stockwerke (Protokoll Analyse der Arbeitsfähigkeit - Fortsetzung)'},
    {url:'/kurzfragebogen', name: 'Kurzfragebogen'},
    {url:'/vereinbarungsmerkzettel2', name: 'Vereinbarungsmerkzettel 2'},
    {url:'/massnahmenentwicklung', name: 'Protokoll Maßnahmenentwicklung'},
    {url:'/massnahmenworkshop', name: 'Protokoll Maßnahmenworkshop'},
    {url:'/dokumentationworkshop', name: 'Ergänzung Workshop Dokumentation'},
    {url:'/abschlussgespraechprotokoll', name: 'Abschlussgespräch'},
    {url:'/hinweiszettel', name: 'Hinweiszettel'},


  ]
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  getAktuellerCoacheeV() {
    if (JSON.parse(localStorage.getItem('aktuellerCoachee'))) {
      return JSON.parse(localStorage.getItem('aktuellerCoachee')).vorname;
    } else {
      return '';
    }
  }

  getAktuellerCoacheeN() {
    if (JSON.parse(localStorage.getItem('aktuellerCoachee'))) {
      return JSON.parse(localStorage.getItem('aktuellerCoachee')).name;
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

  cancel(): void {
    this.location.back();
  }

}
