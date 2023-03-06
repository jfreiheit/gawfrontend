export interface Termine{
  _id: string,
  user: string,
  coachee: string,
  datum: string,
  uhrzeit: string,
  stunden: string,
  ort: string,
  inhalt: string,
  status?: string,
  aufgabe?: string,
}
