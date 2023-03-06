export interface User {
  _id: Number,
  email: string,
  password: string,
  name: string,
  vorname: string,
  kontaktadresse_str: string,
  kontaktadresse_nr: string,
  kontaktadresse_ort: string,
  kontaktadresse_plz: string,
  role: string,
  user: string,
  telefonnummer: string,
  secret: string,
  imageSrc?: string,
  unterschrift?: string,
  rechnungsadresse_str?: string,
  rechnungsadresse_nr?: string,
  rechnungsadresse_ort?: string,
  rechnungsadresse_plz?: string,
}
