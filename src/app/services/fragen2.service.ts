import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Fragen2Service {

  vereinbarungsmerkzettel2Fragen = [
    {"frage": '4', "antwort" : ""},
    {"frage": '5', "antwort" : ""},
    {"frage": '6', "antwort" : ""},
    {"frage": '4', "antwort" : ""},
    {"frage": '5', "antwort" : ""},
    {"frage": '6', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""}
  ];

  vereinbarungsMerkzettelTitle = "Merkzettel für Vereinbarungen 2";

  hinweiszettelFragen = [
    {"frage": 'AFCoach® Name', "antwort" : ""},
    {"frage": 'AFCoach® Vorname', "antwort" : ""},
    {"frage": 'Kontakt', "antwort" : ""},
    {"frage": 'Folgende Punkte sind im BEM-Prozess aufgefallen:', "antwort" : ""},
    {"frage": 'Datum', "antwort" : ""},
  ];

  hinweiszettelTitle= "Hinweiszettel zur betrieblichen Prävention";

  abschlussgespraechFragen = [
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Zeit', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Name BEM Berechtigte/r', "antwort" : ""},
    {"frage": 'Vorname BEM Berechtigte/r', "antwort" : ""},
    {"frage": 'Unternehmen BEM Berechtigte/r', "antwort" : ""},
    {"frage": 'Arbeitsbereich BEM Berechtigte/r', "antwort" : ""},
    {"frage": 'Position/Stelle', "antwort" : ""},
    {"frage": 'AFCoach® Name', "antwort" : ""},
    {"frage": 'AFCoach® Vorname', "antwort" : ""},
    {"frage": '1. Hat sich bei Ihrer Arbeit / Tätigkeit / Ihren Arbeitsabläufen etwas verändert? Wenn ja, was hat sich verändert?', "antwort" : ""},
    {"frage": '2. Arbeitsfähigkeit im Vergleich zu der besten, je erreichten Arbeitsfähigkeit', "antwort" : ""},
    {"frage": '3. Derzeitige Arbeitsfähigkeit im Vergleich zu der besten, je erreichten Arbeitsfähigkeit', "antwort" : ""},
    {"frage": 'Anmerkungen', "antwort" : ""},
    {"frage": 'Körperliche Arbeitsanforderungen', "antwort" : ""},
    {"frage": 'Physische Arbeitsanforderungen', "antwort" : ""},
    {"frage": 'Wie schätzen Sie Ihre derzeitige Arbeitsfähigkeit in Bezug auf die körperlichen Arbeitsanforderungen ein?', "antwort" : ""},
    {"frage": 'Wie schätzen Sie Ihre derzeitige Arbeitsfähigkeit in Bezug auf die psychischen Arbeitsanforderungen ein?', "antwort" : ""},
    {"frage": 'Konnten Sie etwas tun, um ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Konnte das Unternehmen etwas tun, um hier Ihre Arbeitsfähigkeit zu verbessern? ', "antwort" : ""},
    {"frage": 'Wunsch an Sie selbst?', "antwort" : ""},
    {"frage": ' Wunsch an das Unternehmen?', "antwort" : ""},
    {"frage": 'Konnten Sie etwas tun, um ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Konnte das Unternehmen etwas tun, um hier Ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Wunsch an Sie selbst?', "antwort" : ""},
    {"frage": ' Wunsch an das Unternehmen?', "antwort" : ""},
    {"frage": 'Konnten Sie etwas tun, um ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Konnte das Unternehmen etwas tun, um hier Ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Wunsch an Sie selbst?', "antwort" : ""},
    {"frage": ' Wunsch an das Unternehmen?', "antwort" : ""},
    {"frage": 'Konnten Sie etwas tun, um ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Konnte das Unternehmen etwas tun, um hier Ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Wunsch an Sie selbst?', "antwort" : ""},
    {"frage": ' Wunsch an das Unternehmen?', "antwort" : ""},
    {"frage": 'Konnten Sie etwas tun, um ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Konnte das Unternehmen etwas tun, um hier Ihre Arbeitsfähigkeit zu verbessern?', "antwort" : ""},
    {"frage": 'Wunsch an Sie selbst?', "antwort" : ""},
    {"frage": ' Wunsch an das Unternehmen?', "antwort" : ""},
    {"frage": ' Datum', "antwort" : ""},
    {"frage": ' Ort', "antwort" : ""},
    {"frage": ' Weitere Anmerkungen', "antwort" : ""},
  ];

  abschlussgespraechTitle = "Abschlussgespräch Protokoll";

  dokumentationworkshopFragen = [
    {"frage": 'Datum', "antwort" : ""},
    {"frage": '1. Ausgangssituation', "antwort" : ""},
    {"frage": '2. Maßnahmen', "antwort" : ""},
    {"frage": '3. Wer ist zuständig? Bis wann?', "antwort" : ""},
    {"frage": '4. Ergebnis/Vereinbarungen', "antwort" : ""},
  ];

  dokumentationworkshopTitle: 'Ergänzung zur Dokumentation des Workshops';

  massnahmenworkshopFragen = [
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Zeit', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Sitzung', "antwort" : ""},
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Alter', "antwort" : ""},
    {"frage": 'Unternehmen', "antwort" : ""},
    {"frage": 'Arbeitsstelle', "antwort" : ""},
    {"frage": 'Position/Stelle', "antwort" : ""},
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Leitfaden Nummer', "antwort" : ""},
    {"frage": 'Status', "antwort" : ""},
    {"frage": 'Maßnahme', "antwort" : ""},
    {"frage": 'Verantwortlich für Umsetzung', "antwort" : ""},
    {"frage": 'Umsetzung bis:', "antwort" : ""},
    {"frage": 'Umsetzung erfolgreich?', "antwort" : ""},
  ];
  massnahmenworkshopTitle= "2. Dokumentation BEM / Arbeitsfähigkeitscoaching®";

  massnahmenentwicklungFragen = [
    {"frage": 'Datum', "antwort" : ""},
    {"frage": 'Zeit', "antwort" : ""},
    {"frage": 'Ort', "antwort" : ""},
    {"frage": 'Sitzung', "antwort" : ""},
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Alter', "antwort" : ""},
    {"frage": 'Unternehmen', "antwort" : ""},
    {"frage": 'Arbeitsstelle', "antwort" : ""},
    {"frage": 'Position/Stelle', "antwort" : ""},
    {"frage": 'Name', "antwort" : ""},
    {"frage": 'Vorname', "antwort" : ""},
    {"frage": 'Leitfaden Nummer', "antwort" : ""},
    {"frage": 'Status', "antwort" : ""},
    {"frage": 'Maßnahme', "antwort" : ""},
    {"frage": 'Verantwortlich für Umsetzung', "antwort" : ""},
    {"frage": 'Umsetzung bis:', "antwort" : ""},
    {"frage": 'Umsetzung erfolgreich?', "antwort" : ""},
  ];
 massnahmenentwicklungTitle= "1. Dokumentation BEM / Arbeitsfähigkeitscoaching®";


  kurzfragebogenRessourcenFragen = [
    {"frage": 'HS01a IST', "antwort" : ""},
    {"frage": 'HS01b SOLL', "antwort" : ""},
    {"frage": 'HS02a IST ', "antwort" : ""},
    {"frage": 'HS02b SOLL', "antwort" : ""},
    {"frage": 'HS03a IST', "antwort" : ""},
    {"frage": 'HS03b SOLL', "antwort" : ""},
    {"frage": 'SR01a IST ', "antwort" : ""},
    {"frage": 'SR01b SOLL', "antwort" : ""},
    {"frage": 'SR02a IST', "antwort" : ""},
    {"frage": 'SR02b SOLL', "antwort" : ""},
    {"frage": 'SR03a IST ', "antwort" : ""},
    {"frage": 'SR03b SOLL', "antwort" : ""},
    {"frage": 'ZA01a IST', "antwort" : ""},
    {"frage": 'ZA01b SOLL', "antwort" : ""},
    {"frage": 'ZA02a IST ', "antwort" : ""},
    {"frage": 'ZA02b SOLL', "antwort" : ""},
    {"frage": 'ZA03a IST', "antwort" : ""},
    {"frage": 'ZA03b SOLL', "antwort" : ""},
    {"frage": 'IM01a IST ', "antwort" : ""},
    {"frage": 'IM01b SOLL', "antwort" : ""},
    {"frage": 'IM02a IST', "antwort" : ""},
    {"frage": 'IM02b SOLL', "antwort" : ""},
    {"frage": 'EM01a IST ', "antwort" : ""},
    {"frage": 'EM01b SOLL', "antwort" : ""},
    {"frage": 'EM02a IST', "antwort" : ""},
    {"frage": 'EM02b SOLL', "antwort" : ""},
  ];

  kurzfragebogenRessourcenTitle = "Kurzfragebogen Ressourcen";
  constructor() { }
  getFragen():{frage:string, antwort: string}[]{
    return this.vereinbarungsmerkzettel2Fragen;
  }
  kurzfragebogenBelastungFragen = [
    {"frage": 'VA01a IST', "antwort" : ""},
    {"frage": 'VA01b SOLL', "antwort" : ""},
    {"frage": 'VA02a IST ', "antwort" : ""},
    {"frage": 'VA02b SOLL', "antwort" : ""},
    {"frage": 'VA03a IST', "antwort" : ""},
    {"frage": 'VA3b SOLL', "antwort" : ""},
    {"frage": 'GA01a IST ', "antwort" : ""},
    {"frage": 'GA01b SOLL', "antwort" : ""},
    {"frage": 'GA02a IST', "antwort" : ""},
    {"frage": 'GA02b SOLL', "antwort" : ""},
    {"frage": 'PI01a IST ', "antwort" : ""},
    {"frage": 'PI01b SOLL', "antwort" : ""},
    {"frage": 'PI02a IST', "antwort" : ""},
    {"frage": 'PI02b SOLL', "antwort" : ""},
    {"frage": 'PM01a IST ', "antwort" : ""},
    {"frage": 'PM01b SOLL', "antwort" : ""},
    {"frage": 'PM02a IST', "antwort" : ""},
    {"frage": 'PM02b SOLL', "antwort" : ""},
    {"frage": 'AA01a IST ', "antwort" : ""},
    {"frage": 'AA01b SOLL', "antwort" : ""},
    {"frage": 'AA02a IST', "antwort" : ""},
    {"frage": 'AA02b SOLL', "antwort" : ""},
    {"frage": 'AU01a IST ', "antwort" : ""},
    {"frage": 'AU01b SOLL', "antwort" : ""},
    {"frage": 'AU02a IST', "antwort" : ""},
    {"frage": 'AU02b SOLL', "antwort" : ""},
    {"frage": 'AZ01a IST ', "antwort" : ""},
    {"frage": 'AZ01b SOLL', "antwort" : ""},
    {"frage": 'AZ02a IST', "antwort" : ""},
    {"frage": 'AZ02b SOLL', "antwort" : ""},
    {"frage": 'AZ03a IST ', "antwort" : ""},
    {"frage": 'AZ03b SOLL', "antwort" : ""},
    {"frage": 'AZ04a IST', "antwort" : ""},
    {"frage": 'AZ04b SOLL', "antwort" : ""},
    {"frage": 'AZ05a IST', "antwort" : ""},
    {"frage": 'AZ05b SOLL', "antwort" : ""},
  ];
  kurzfragebogenBelastungTitle = "Kurzfragebogen Belastungen";

  stockwerkeFragen = [
    {"frage": 'Wie fördert Ihre Gesundheit aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Wie geht es Ihnen gesundheitlich? Wie fühlen Sie sich mental/körperlich? Was hilft Ihnen dabei körperlich/mental gesund zu bleiben? Haben Sie körperliche Einschränkungen?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie verringert Ihre Gesundheit aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Wie geht es Ihnen gesundheitlich? Wie fühlen Sie sich mental/körperlich? Was hilft Ihnen dabei körperlich/mental gesund zu bleiben? Haben Sie körperliche Einschränkungen?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was können Sie tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Gesundheit zu verbessern? Was wollen Sie für sich tun, um körperlich und geistig gesund zu werden/bleiben?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was kann Ihr Unternehmen tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Gesundheit zu verbessern? Welche Unterstützung brauchen Sie vom Betrieb, um Ihre Gesundheit wiederherzustellen/zu erhalten/zu fördern?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie fördert Ihre Kompetenz/Qualitfikation aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Welche Qualifikationen/Kompetenzen haben Sie? Fehlt etwas, um Ihre Arbeit zu erledigen? 1. fachlich 2. methodisch 3. sozial 4. Selbstkompetenz)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie verringert Ihre Kompetenz/Qualitfikation aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Welche Qualifikationen/Kompetenzen haben Sie? Fehlt etwas, um Ihre Arbeit zu erledigen? 1. fachlich 2. methodisch 3. sozial 4. Selbstkompetenz)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was können Sie tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Kompetenz/Qualifikation zu verbessern? (z.B. Fort-/Weiterbildung)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was kann Ihr Unternehmen tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Kompetenz/Qualifikation zu verbessern? Haben Sie Entwicklungswünsche und -möglichkeiten, die Ihre Arbeitsfähigkeit unterstützen (z.B. Schulungen/Jobrotation)?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie fördert Ihre Einstellung und Motivation aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Fühlen Sie sich gerecht behandelt und wertgeschätzt bei der Arbeit? Sind Sie motiviert? Gefällt Ihnen Ihre Aufgabe und macht Ihnen die Arbeit Spaß?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie verringert Ihre Einstellung und Motivation aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Fühlen Sie sich gerecht behandelt und wertgeschätzt bei der Arbeit? Sind Sie motiviert? Gefällt Ihnen Ihre Aufgabe und macht Ihnen die Arbeit Spaß?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was können Sie tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Werte/Einstellungen/Motivation zu verbessern? Was können Sie bewegen/ändern/anpassen?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was kann Ihr Unternehmen tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Werte/Einstellungen/Motivation zu verbessern? Was brauchen Sie vom Unternehmen, damit Sie eine positive Einstellung bekommen und motiviert sind?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie fördern die Arbeitsbedingungen und die Führung aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Wie ist das Verhältnis zu Ihrer Führungskraft und Ihren Kolleg*innen? Wie ist die Zusammenarbeit generell? Wie sind die Umgebungsbedingungen im Unternehmen (Klima/Licht/Schadstoffe)? Haben Sie die nötigen Ressourcen zur Aufgabenerfüllung (ergonomisch/technisch/Handlungsspielraum)?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie verringern die Arbeitsbedingungen und die Führung aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Wie ist das Verhältnis zu Ihrer Führungskraft und Ihren Kolleg*innen? Wie ist die Zusammenarbeit generell? Wie sind die Umgebungsbedingungen im Unternehmen (Klima/Licht/Schadstoffe)? Haben Sie die nötigen Ressourcen zur Aufgabenerfüllung (ergonomisch/technisch/Handlungsspielraum)?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was können Sie tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Arbeitsbedingungen und die Führung zu verbessern? Können Sie selbst Arbeitsschritte/-abläufe anpassen? Können Sie selbst Ihre Beziehung zu Führungskräften/Kolleg*innen verbessern?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was kann Ihr Unternehmen tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihre Arbeitsbedingungen/Führung zu verbessern? Welche Arbeitsbedingungen würden Ihnen helfen, Ihre Arbeitsfähigkeit zu erhalten oder zu verbessern? Welche Arbeitsorganisation? Was müsste sich an der Führung ändern?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie fördert Ihr persönliches und regionales Umfeld aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Gibt es zu pflegende Angehörige oder Kinder? Haben Sie Menschen in Ihrem Umfeld (Familie/Freunde), die Sie unterstützen? Wie kommen Sie zur Arbeit? Nehmen Sie am Vereinsleben teil? Hilft Ihnen das bei der Arbeitsbewältigung?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Wie verringert Ihr persönliches und regionales Umfeld aktuell Ihre Arbeitsfähigkeit/Bewältigung der Arbeit? (Beispielfragen: Gibt es zu pflegende Angehörige oder Kinder? Haben Sie Menschen in Ihrem Umfeld (Familie/Freunde), die Sie unterstützen? Wie kommen Sie zur Arbeit? Nehmen Sie am Vereinsleben teil? Hilft Ihnen das bei der Arbeitsbewältigung?)', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was können Sie tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihr persönliches Umfeld zu verbessern?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Was kann Ihr Unternehmen tun, um Ihre Arbeitsfähigkeit in Bezug auf Ihr persönliches Umfeld zu verbessern?', "antwort" : ""},
    {"frage": 'Maßnahmen', "antwort" : ""},
    {"frage": 'Weitere Anmerkungen', "antwort" : ""},

  ];

  stockwerkeTitle ="Analyseprotokoll Stockwerke (Protokoll Analyse der Arbeitsfähigkeit - Fortsetzung)";

  getTitle():string{
    return this.vereinbarungsMerkzettelTitle;
  }
  getFragen2(): {frage: string, antwort: string}[]{
    return this.hinweiszettelFragen;
  }
  getTitle2(): string{
    return this.hinweiszettelTitle;
  }

  getFragen3(): {frage: string, antwort: string}[]{
    return this.abschlussgespraechFragen;
  }
  getTitle3(): string{
    return this.abschlussgespraechTitle;
  }

  getFragen4(): {frage: string, antwort: string}[]{
    return this.dokumentationworkshopFragen;
  }

  getTitle4(): string{
    return this.dokumentationworkshopTitle;
  }
  getFragen5(): {frage: string, antwort: string}[]{
    return this.massnahmenworkshopFragen;
  }
  getTitle5(): string{
    return this.massnahmenworkshopTitle;
  }
  getFragen6(): {frage: string, antwort: string}[]{
    return this.massnahmenentwicklungFragen;
  }
  getTitle6(): string{
    return this.massnahmenentwicklungTitle;
  }
  getFragen7(): {frage: string, antwort: string}[]{
    return this.kurzfragebogenRessourcenFragen;
  }
  getTitle7(): string{
    return this.kurzfragebogenRessourcenTitle;
  }
  getFragen8(): {frage: string, antwort: string}[]{
    return this.kurzfragebogenBelastungFragen;
  }
  getTitle8(): string{
    return this.kurzfragebogenBelastungTitle;
  }
  getFragen9(): {frage: string, antwort: string}[]{
    return this.stockwerkeFragen;
  }
  getTitle9(): string{
    return this.stockwerkeTitle;
  }


}
