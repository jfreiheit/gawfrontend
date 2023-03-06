import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeineVorgaengeComponent} from './components/meine-vorgaenge/meine-vorgaenge.component';
import {UebersichtVorgaengeComponent} from './components/uebersicht-vorgaenge/uebersicht-vorgaenge.component';
import {FallAnlegenComponent} from './components/fall-anlegen/fall-anlegen.component';
import {FormulareComponent} from './components/formulare/formulare.component';
import {StammdatenComponent} from './components/stammdaten/stammdaten.component';
import {LoginComponent} from './components/login/login.component';
import {ZweifaktorComponent} from './components/zweifaktor/zweifaktor.component';
import {HomeComponent} from './components/home/home.component';
import {AnalyseprotokollComponent} from "./components/formulare/analyseprotokoll/analyseprotokoll.component";
import {APreadComponent} from "./components/formulare/analyseprotokoll/apread/apread.component";
import {AbschlussgespraechprotokollComponent} from "./components/formulare/abschlussgespraechprotokoll/abschlussgespraechprotokoll.component";
import {DokumentationworkshopComponent} from "./components/formulare/dokumentationworkshop/dokumentationworkshop.component";
import {HinweiszettelComponent} from "./components/formulare/hinweiszettel/hinweiszettel.component";
import {FallarbeitComponent} from "./components/formulare/fallarbeit/fallarbeit.component";
import {VereinbarungsmerkzettelComponent} from "./components/formulare/vereinbarungsmerkzettel/vereinbarungsmerkzettel.component";
import {Vereinbarungsmerkzettel2Component} from "./components/formulare/vereinbarungsmerkzettel2/vereinbarungsmerkzettel2.component";
import {MassnahmenentwicklungComponent} from "./components/formulare/massnahmenentwicklung/massnahmenentwicklung.component";
import { AgbComponent } from "./components/footer/agb/agb.component";
import { AnschriftComponent} from "./components/footer/anschrift/anschrift.component";
import { DatenschutzComponent} from "./components/footer/datenschutz/datenschutz.component";
import {ImpressumComponent} from "./components/footer/impressum/impressum.component";
import {KurzfragebogenRessourcenComponent} from "./components/formulare/kurzfragebogen-ressourcen/kurzfragebogen-ressourcen.component";
import { KurzfragebogenComponent } from './components/formulare/kurzfragebogen/kurzfragebogen.component';
import { KurzfragebogenBelastungenComponent } from './components/formulare/kurzfragebogen-belastungen/kurzfragebogen-belastungen.component';
import {FaqComponent} from "./components/faq/faq.component";
import {SchweigepflichtentbindungComponent} from "./components/formulare/schweigepflichtentbindung/schweigepflichtentbindung.component";
import { EinwilligungDatenuebermittlungComponent } from './components/formulare/einwilligung-datenuebermittlung/einwilligung-datenuebermittlung.component';
import { EinwilligungDatenerhebungComponent } from './components/formulare/einwilligung-datenerhebung/einwilligung-datenerhebung.component';
import { LandingpageCoacheeComponent } from './components/landingpage-coachee/landingpage-coachee.component';
import { VertraulichkeitsverpflichtungComponent } from './components/formulare/vertraulichkeitsverpflichtung/vertraulichkeitsverpflichtung.component';
import {ResetpwComponent} from "./components/resetpw/resetpw.component";
import {ForgotpwComponent} from "./components/forgotpw/forgotpw.component";
import {LoginCoacheeComponent} from "./components/login-coachee/login-coachee.component";
import {ZweifaktorCoacheeComponent} from "./components/zweifaktor-coachee/zweifaktor-coachee.component";
import {DatenschutzerklarungComponent} from "./components/formulare/datenschutzerklarung/datenschutzerklarung.component";
import {Datenschutz2Component} from "./components/formulare/datenschutz2/datenschutz2.component";
import {VereinbarungComponent} from "./components/formulare/vereinbarung/vereinbarung.component";
import {MassnahmenworkshopComponent} from "./components/formulare/massnahmenworkshop/massnahmenworkshop.component";
import { UpdateCoachdatenComponent } from './components/stammdaten/update-coachdaten/update-coachdaten.component';
import { UpdateCoacheedatenComponent } from './components/meine-vorgaenge/update-coacheedaten/update-coacheedaten.component';
import {UebersichtUsersComponent} from "./components/uebersicht-users/uebersicht-users.component";
import {UserRegisterComponent} from "./components/uebersicht-users/user-register/user-register.component";
import {ForgotSecretComponent} from "./components/forgot-secret/forgot-secret.component";
import {ResetSecretComponent} from "./components/reset-secret/reset-secret.component";
import {AnalyseprotokollStockwerkeComponent} from './components/formulare/analyseprotokoll-stockwerke/analyseprotokoll-stockwerke.component';
import {DAEreadComponent} from "./components/formulare/datenschutzerklarung/daeread/daeread.component";
import {DAE2readComponent} from "./components/formulare/datenschutz2/dae2read/dae2read.component";
import {ASGPreadComponent} from "./components/formulare/abschlussgespraechprotokoll/asgpread/asgpread.component";
import {StkreadComponent} from "./components/formulare/analyseprotokoll-stockwerke/stkread/stkread.component";
import {DWreadComponent} from "./components/formulare/dokumentationworkshop/dwread/dwread.component";
import {EWDHreadComponent} from "./components/formulare/einwilligung-datenerhebung/ewdhread/ewdhread.component";
import {EWDUreadComponent} from "./components/formulare/einwilligung-datenuebermittlung/ewduread/ewduread.component";
import {HZreadComponent} from "./components/formulare/hinweiszettel/hzread/hzread.component";
import {KFBreadComponent} from "./components/formulare/kurzfragebogen-belastungen/kfbread/kfbread.component";
import {TermineComponent} from "./components/formulare/termine/termine.component";
import {UpdateTermineComponent} from "./components/formulare/termine/update-termine/update-termine.component";
import {KFRreadComponent} from "./components/formulare/kurzfragebogen-ressourcen/kfrread/kfrread.component";
import {MEreadComponent} from "./components/formulare/massnahmenentwicklung/meread/meread.component";
import {MWreadComponent} from "./components/formulare/massnahmenworkshop/mwread/mwread.component";
import {SBreadComponent} from "./components/formulare/schweigepflichtentbindung/sbread/sbread.component";
import {VreadComponent} from "./components/formulare/vereinbarung/vread/vread.component";
import {VMreadComponent} from "./components/formulare/vereinbarungsmerkzettel/vmread/vmread.component";
import {VM2readComponent} from "./components/formulare/vereinbarungsmerkzettel2/vm2read/vm2read.component";
import {VVreadComponent} from "./components/formulare/vertraulichkeitsverpflichtung/vvread/vvread.component";
import {CoacheeComponent} from "./components/forgot-secret/coachee/coachee.component";
import {ForgotpwCoacheeComponent} from "./components/forgotpw/forgotpw-coachee/forgotpw-coachee.component";
import {
  ResetSecretCoacheeComponent
} from "./components/reset-secret/reset-secret-coachee/reset-secret-coachee.component";
import {ResetpwCoacheeComponent} from "./components/resetpw/resetpw-coachee/resetpw-coachee.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'meine-vorgaenge', component: UebersichtVorgaengeComponent},
  {path: 'meine-vorgaenge/:coachee.id', component: MeineVorgaengeComponent},
  {path: 'termine/:id', component: TermineComponent},
  {path: 'termin/:id', component: UpdateTermineComponent},
  {path: 'fall-anlegen', component: FallAnlegenComponent},
  {path: 'formulare', component: FormulareComponent},
  {path: 'stammdaten', component: StammdatenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-coachee', component: LoginCoacheeComponent},
  {path: 'reset-password/:token', component: ResetpwComponent},
  {path: 'reset-password-coachee/:token', component: ResetpwCoacheeComponent},
  {path: 'forgot-password', component: ForgotpwComponent},
  {path: 'forgot-password-coachee', component: ForgotpwCoacheeComponent},
  {path: 'forgot-secret', component: ForgotSecretComponent},
  {path: 'forgot-secret-coachee', component: CoacheeComponent},
  {path: 'reset-secret/:token', component: ResetSecretComponent},
  {path: 'reset-secret-coachee/:token', component: ResetSecretCoacheeComponent},
  {path: 'login/verify', component: ZweifaktorComponent},
  {path: 'login-coachee/verify', component: ZweifaktorCoacheeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'analyseprotokoll', component: AnalyseprotokollComponent},
  {path: 'analyseprotokoll/:formular.id', component: APreadComponent},
  {path: 'abschlussgespraechprotokoll', component: AbschlussgespraechprotokollComponent},
  {path: 'abschlussgespraechprotokoll/:formular.id', component: ASGPreadComponent},
  {path: 'dokumentationworkshop', component: DokumentationworkshopComponent},
  {path: 'dokumentationworkshop/:formular.id', component: DWreadComponent},
  {path: 'hinweiszettel', component: HinweiszettelComponent},
  {path: 'hinweiszettel/:formular.id', component: HZreadComponent},
  {path: 'fallarbeit', component: FallarbeitComponent},
  {path: 'vereinbarungsmerkzettel', component: VereinbarungsmerkzettelComponent},
  {path: 'vereinbarungsmerkzettel/:formular.id', component: VMreadComponent},
  {path: 'massnahmenentwicklung', component: MassnahmenentwicklungComponent},
  {path: 'massnahmenentwicklung/:formular.id', component: MEreadComponent},
  {path: 'analyseprotokoll-stockwerke', component: AnalyseprotokollStockwerkeComponent},
  {path: 'analyseprotokoll-stockwerke/:formular.id', component: StkreadComponent},
  {path: 'agb', component: AgbComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'anschrift', component: AnschriftComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'kurzfragebogen-ressourcen', component: KurzfragebogenRessourcenComponent},
  {path: 'kurzfragebogen-ressourcen/:formular.id', component: KFRreadComponent},
  {path: 'kurzfragebogen', component: KurzfragebogenComponent},
  {path: 'kurzfragebogen-belastungen', component:KurzfragebogenBelastungenComponent},
  {path: 'kurzfragebogen-belastungen/:formular.id', component: KFBreadComponent},
  {path: 'vereinbarungsmerkzettel2', component: Vereinbarungsmerkzettel2Component},
  {path: 'vereinbarungsmerkzettel2/:formular.id', component: VM2readComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'schweigepflichtentbindung', component: SchweigepflichtentbindungComponent},
  {path: 'schweigepflichtentbindung/:formular.id', component: SBreadComponent},
  {path: 'einwilligung-datenerhebung', component: EinwilligungDatenerhebungComponent},
  {path: 'einwilligung-datenerhebung/:formular.id', component: EWDHreadComponent},
  {path: 'einwilligung-datenuebermittlung/:formular.id', component: EWDUreadComponent},
  {path: 'einwilligung-datenuebermittlung', component: EinwilligungDatenuebermittlungComponent},
  {path: 'landingpage-coachee', component: LandingpageCoacheeComponent},
  {path: 'vertraulichkeitsverpflichtung', component: VertraulichkeitsverpflichtungComponent},
  {path: 'vertraulichkeitsverpflichtung/:formular.id', component: VVreadComponent},
  {path: 'datenschutzerklarung', component: DatenschutzerklarungComponent},
  {path: 'datenschutzerklarung/:formular.id', component: DAEreadComponent},
  {path: 'datenschutz2', component: Datenschutz2Component},
  {path: 'datenschutz2/:formular.id', component: DAE2readComponent},
  {path: 'vereinbarung', component: VereinbarungComponent},
  {path: 'vereinbarung/:formular.id', component: VreadComponent},
  {path: 'massnahmenworkshop', component: MassnahmenworkshopComponent},
  {path: 'massnahmenworkshop/:formular.id', component: MWreadComponent},
  {path: 'update-coachdaten', component: UpdateCoachdatenComponent},
  {path: 'update-coachdaten/:user.id', component: UpdateCoachdatenComponent},
  {path: 'update-coacheedaten', component: UpdateCoacheedatenComponent},
  {path: 'uebersicht-users', component: UebersichtUsersComponent},
  {path: 'uebersicht-users/:user.id', component: StammdatenComponent},
  {path: 'user-register', component: UserRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
