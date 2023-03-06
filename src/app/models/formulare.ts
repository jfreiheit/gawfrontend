import {FrageAntwort} from "./FrageAntwort";

export interface Formulare{
  _id: number,
  title: string,
  user: string, //??
  coachee: string, //??
  inhalt?:
    FrageAntwort [],
  pdf?: string
}
