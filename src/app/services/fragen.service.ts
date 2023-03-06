import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FragenService {

  analyseprotokollFragen = [{"frage": 'Beschreiben Sie Ihre (bisherige) Arbeit/Tätigkeit im Unternehmen (körperliche oder geistige) Tätigkeit? Wie sieht der Arbeitsablauf aus? Welche Handgriffe sind notwendig? Welches Produkt/Ergebnis gibt es am Ende? etc.', "antwort" : ""},
    {"frage": 'Wenn Sie Ihre beste, je erreichte Arbeitsfähigkeit mit 10 Punkten bewerten: Wie viele Punkte würden Sie dann für Ihre derzeitige Arbeitsfähigkeit geben?', "antwort" : ""},
    {"frage": 'Anmerkungen', "antwort" : ""},
    {"frage": 'Wie schätzen Sie Ihre derzeitige Arbeitsfähigkeit in Bezug auf die körperlichen Arbeitsanforderungen ein?', "antwort" : ""},
    {"frage": 'Wie schätzen Sie Ihre derzeitige Arbeitsfähigkeit in Bezug auf die psychischen Arbeitsanforderungen ein?', "antwort" : ""},
    {"frage": 'Wie lange sind Sie bereits im Unternehmen?', "antwort" : ""},
    {"frage": 'Wie lange auf dieser Stelle?', "antwort" : ""},
    {"frage": 'Gibt es eine relevante Vorgeschichte?', "antwort" : ""},
    {"frage": 'Haben Sie eine Behinderung? Wenn ja, wie hoch ist der Grad der Behinderung? Besteht ggf. eine Gleichstellung?', "antwort" : ""},
    {"frage": 'Haben Sie bereits Hilfen/ Unterstützung durch die Rehabilitationsträger oder das Integrationsamt/ einen Integrationsfachdienst in Anspruch genommen? Wenn ja, um was ging es?', "antwort" : ""},
    {'frage': 'Datum', 'antwort': ''},
    {'frage': 'Zeit', 'antwort': ''},
    {'frage': 'Ort', 'antwort': ''},
    {'frage': 'Alter', 'antwort': ''},
    {'frage': 'Arbeitsbereich', 'antwort': ''},
    {'frage': 'Position', 'antwort': ''},
    {'frage': 'Coach Name', 'antwort': ''},
    {'frage': 'Coach Vorname', 'antwort': ''},
  ];
  analyseprotokollTitle = "Protokoll Analyse Arbeitsfähigkeit";

  vereinbarungsmerkzettelFragen = [
    {"frage": '1', "antwort" : ""},
    {"frage": '2', "antwort" : ""},
    {"frage": '3', "antwort" : ""},
    {"frage": '1', "antwort" : ""},
    {"frage": '2', "antwort" : ""},
    {"frage": '3', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""}
  ];
  vereinbarungsmerkzettelTitle = "Merkzettel für Vereinbarungen";

  datenschutzprotokollFragen = [{ "frage": 'Ort', "antwort" : ''},
                                { "frage": 'Datum', "antwort" : ''},
    {'frage': 'Coachee', 'antwort': ''}, {'frage': 'Coach', 'antwort': ''}];
  datenschutzprotokollTitle = "Datenschutzerklärung";

  datenschutz2Fragen = [{ "frage": 'Ort', "antwort" : ''},
                        { "frage": 'Datum', "antwort" : ''}, {"frage": 'Abteilung/ Tätigkeit', "antwort": ''}];
  datenschutz2Title = "Datenschutzerklärung Fortsetzung";

  einwilligungDatenerhebungFragen = [
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Betrieb/ Abteilung', "antwort" : ""},
    {"frage": 'Personalnummer', "antwort" : ""},
    {"frage": 'Vorgesetzte/r', "antwort" : ""},
    {"frage": 'Kostenstelle', "antwort" : ""},
    {"frage": 'Bitte eintragen: Herr/Frau Name, Vorname', "antwort" : ""},
    {"frage": 'Bitte eintragen: Herr/Frau Name, Vorname BEM-Berechtige/r', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""}
  ];
  einwilligungDatenerhebungTitle = "Einwilligungserklärung zur Erhebung von Daten";

  einwilligungDatenuebermittlungFragen = [{"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Betrieb / Abteilung', "antwort" : ""},
    {"frage": 'Personalnummer', "antwort" : ""},
    {"frage": 'Vorgesetzter/r', "antwort" : ""},
    {"frage": 'Kostenstelle', "antwort" : ""},
    {"frage": 'Bitte eintragen: Institution / Person XY', "antwort" : ""},
    {"frage": 'Arztbericht von Herrn/Frau', "antwort" : ""},
    {"frage": 'Sonstiges', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Informationsgespräch vom', "antwort" : ""},
    {"frage": 'Erstgespräch vom', "antwort" : ""},
    {"frage": 'Verlaufsdokumentation vom', "antwort" : ""},
    {"frage": 'vom', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""}
  ];
  einwilligungDatenuebermittlungTitle = "Einwilligungserklärung zur Übermittlung an Dritte";

  schweigepflichtentbindungFragen = [
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'PLZ', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Hiermit entbinde ich', "antwort" : ""},
    {"frage": 'von der Schweigepflicht gegenüber', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Geburtsdatum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""}
  ];
  schweigepflichtentbindungTitle = "Schweigepflichtentbindung";

  vereinbarungFragen = [
    {"frage": 'Ort', "antwort": ''},
    {"frage": 'Datum', "antwort": ''},
    {"frage": 'Coach', "antwort": ''}];
  vereinbarungTitle = "Arbeitsfähigkeitscoaching® im Rahmen des Betrieblichen Eingliederungsmanagements";

  vertraulichkeitsverpflichtungFragen = [
    {"frage": 'vom', "antwort": ''},
    {"frage": 'Ort', "antwort": ''},
    {"frage": 'Datum', "antwort": ''},
    {"frage": 'Coach', "antwort": ''}];
  vertraulichkeitsverpflichtungTitle ="Anlage zur Verpflichtung auf die Vertraulichkeit";

  constructor() { }

  getFragen(): {frage: string, antwort: string}[]{
    return this.analyseprotokollFragen;
  }

  getTitle(): string{
    return this.analyseprotokollTitle;
  }

  getFragen1(): {frage: string, antwort: string}[]{
    return this.vereinbarungsmerkzettelFragen;
  }

  getTitle1(): string{
    return this.vereinbarungsmerkzettelTitle;
  }

  getFragen2(): {frage: string, antwort: string}[]{
  return this.datenschutzprotokollFragen;
}

  getTitle2(): string{
  return this.datenschutzprotokollTitle;
}

  getFragen3(): {frage: string, antwort: string}[]{
    return this.datenschutz2Fragen;
  }

  getTitle3(): string{
    return this.datenschutz2Title;
  }

  getFragen4(): {frage: string, antwort: string}[]{
    return this.einwilligungDatenerhebungFragen;
  }

  getTitle4(): string{
    return this.einwilligungDatenerhebungTitle;
  }

  getFragen5(): {frage: string, antwort: string}[]{
    return this.einwilligungDatenuebermittlungFragen;
  }

  getTitle5(): string{
    return this.einwilligungDatenuebermittlungTitle;
  }

  getFragen6(): {frage: string, antwort: string}[]{
    return this.schweigepflichtentbindungFragen;
  }

  getTitle6(): string{
    return this.schweigepflichtentbindungTitle;
  }

  getFragen7(): {frage: string, antwort: string}[]{
    return this.vereinbarungFragen;
  }

  getTitle7(): string{
    return this.vereinbarungTitle;
  }

  getFragen8(): {frage: string, antwort: string}[]{
    return this.vertraulichkeitsverpflichtungFragen;
  }

  getTitle8(): string{
    return this.vertraulichkeitsverpflichtungTitle;
  }
}
