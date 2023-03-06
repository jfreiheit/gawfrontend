import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule, NgbDropdownModule, NgbDropdown, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import {JwtInterceptor, ErrorInterceptor} from './helpers/';
import { JwtModule} from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MeineVorgaengeComponent } from './components/meine-vorgaenge/meine-vorgaenge.component';
import { FallAnlegenComponent } from './components/fall-anlegen/fall-anlegen.component';
import { FormulareComponent } from './components/formulare/formulare.component';
import { StammdatenComponent } from './components/stammdaten/stammdaten.component';
import { LoginComponent } from './components/login/login.component';
import { ZweifaktorComponent } from './components/zweifaktor/zweifaktor.component';
import { HomeComponent } from './components/home/home.component';
import { UebersichtVorgaengeComponent } from './components/uebersicht-vorgaenge/uebersicht-vorgaenge.component';
import { FallarbeitComponent } from './components/formulare/fallarbeit/fallarbeit.component';
import { VereinbarungsmerkzettelComponent } from './components/formulare/vereinbarungsmerkzettel/vereinbarungsmerkzettel.component';
import { MassnahmenentwicklungComponent } from './components/formulare/massnahmenentwicklung/massnahmenentwicklung.component';
import { AnalyseprotokollStockwerkeComponent } from './components/formulare/analyseprotokoll-stockwerke/analyseprotokoll-stockwerke.component';
import { AgbComponent } from './components/footer/agb/agb.component';
import { ImpressumComponent } from './components/footer/impressum/impressum.component';
import { DatenschutzComponent } from './components/footer/datenschutz/datenschutz.component';
import { AnschriftComponent } from './components/footer/anschrift/anschrift.component';
import { KurzfragebogenRessourcenComponent } from './components/formulare/kurzfragebogen-ressourcen/kurzfragebogen-ressourcen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AnalyseprotokollComponent} from "./components/formulare/analyseprotokoll/analyseprotokoll.component";
import { NgxBootstrapIconsModule, boxArrowRight, laptop, person, envelopeFill, telephoneFill, printerFill, trash, pencil } from 'ngx-bootstrap-icons';
import { KurzfragebogenComponent } from './components/formulare/kurzfragebogen/kurzfragebogen.component';
import { KurzfragebogenBelastungenComponent } from './components/formulare/kurzfragebogen-belastungen/kurzfragebogen-belastungen.component';
import { AuthenticationService, AuthorisationService, UserService} from "./services";
import {ValidationMsgComponent} from "./components/alert/validation-msg.component";
import {AlertModule} from "ngx-bootstrap/alert";
import { Vereinbarungsmerkzettel2Component } from './components/formulare/vereinbarungsmerkzettel2/vereinbarungsmerkzettel2.component';
import { SchweigepflichtentbindungComponent } from './components/formulare/schweigepflichtentbindung/schweigepflichtentbindung.component';
import { FaqComponent } from './components/faq/faq.component';
import { EinwilligungDatenuebermittlungComponent } from './components/formulare/einwilligung-datenuebermittlung/einwilligung-datenuebermittlung.component';
import { EinwilligungDatenerhebungComponent } from './components/formulare/einwilligung-datenerhebung/einwilligung-datenerhebung.component';
import { LandingpageCoacheeComponent } from './components/landingpage-coachee/landingpage-coachee.component';
import { VertraulichkeitsverpflichtungComponent } from './components/formulare/vertraulichkeitsverpflichtung/vertraulichkeitsverpflichtung.component';
import {FormulareService} from "./services";
import { ResetpwComponent } from './components/resetpw/resetpw.component';
import { ResetSecretComponent } from './components/reset-secret/reset-secret.component';
import { ForgotpwComponent } from './components/forgotpw/forgotpw.component';
import { ForgotSecretComponent } from './components/forgot-secret/forgot-secret.component';
import { LoginCoacheeComponent } from './components/login-coachee/login-coachee.component';
import { ZweifaktorCoacheeComponent } from './components/zweifaktor-coachee/zweifaktor-coachee.component';
import {CoacheeService} from './services';
import {DatenschutzerklarungComponent} from './components/formulare/datenschutzerklarung/datenschutzerklarung.component';
import {Datenschutz2Component} from './components/formulare/datenschutz2/datenschutz2.component';
import { TermineComponent } from './components/formulare/termine/termine.component';
import { VereinbarungComponent } from './components/formulare/vereinbarung/vereinbarung.component';
import {HinweiszettelComponent} from "./components/formulare/hinweiszettel/hinweiszettel.component";
import {AbschlussgespraechprotokollComponent} from "./components/formulare/abschlussgespraechprotokoll/abschlussgespraechprotokoll.component";
import {DokumentationworkshopComponent} from "./components/formulare/dokumentationworkshop/dokumentationworkshop.component";
import {MassnahmenworkshopComponent} from "./components/formulare/massnahmenworkshop/massnahmenworkshop.component";
import { LoaderComponent } from './services/loader/loader.component';
import { UpdateCoachdatenComponent } from './components/stammdaten/update-coachdaten/update-coachdaten.component';
import { UpdateCoacheedatenComponent } from './components/meine-vorgaenge/update-coacheedaten/update-coacheedaten.component';
import { UebersichtUsersComponent } from './components/uebersicht-users/uebersicht-users.component';
import { UserRegisterComponent } from './components/uebersicht-users/user-register/user-register.component';
import {Fragen2Service} from "./services";
import {FragenService, AlertService, TermineService} from "./services";
import {SignaturePadModule} from "angular2-signaturepad";
import { SignaturepadComponent } from './components/signaturepad/signaturepad.component';
import { APreadComponent } from './components/formulare/analyseprotokoll/apread/apread.component';
import { DAEreadComponent } from './components/formulare/datenschutzerklarung/daeread/daeread.component';
import { DAE2readComponent } from './components/formulare/datenschutz2/dae2read/dae2read.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ASGPreadComponent } from './components/formulare/abschlussgespraechprotokoll/asgpread/asgpread.component';
import { StkreadComponent } from './components/formulare/analyseprotokoll-stockwerke/stkread/stkread.component';
import { DWreadComponent } from './components/formulare/dokumentationworkshop/dwread/dwread.component';
import { EWDHreadComponent } from './components/formulare/einwilligung-datenerhebung/ewdhread/ewdhread.component';
import { EWDUreadComponent } from './components/formulare/einwilligung-datenuebermittlung/ewduread/ewduread.component';
import { HZreadComponent } from './components/formulare/hinweiszettel/hzread/hzread.component';
import { KFBreadComponent } from './components/formulare/kurzfragebogen-belastungen/kfbread/kfbread.component';
import { UpdateTermineComponent } from './components/formulare/termine/update-termine/update-termine.component';
import { KFRreadComponent } from './components/formulare/kurzfragebogen-ressourcen/kfrread/kfrread.component';
import { MEreadComponent } from './components/formulare/massnahmenentwicklung/meread/meread.component';
import { MWreadComponent } from './components/formulare/massnahmenworkshop/mwread/mwread.component';
import { SBreadComponent } from './components/formulare/schweigepflichtentbindung/sbread/sbread.component';
import { VreadComponent } from './components/formulare/vereinbarung/vread/vread.component';
import { VMreadComponent } from './components/formulare/vereinbarungsmerkzettel/vmread/vmread.component';
import { VM2readComponent } from './components/formulare/vereinbarungsmerkzettel2/vm2read/vm2read.component';
import { VVreadComponent } from './components/formulare/vertraulichkeitsverpflichtung/vvread/vvread.component';
import { CoacheeComponent } from './components/forgot-secret/coachee/coachee.component';
import { ForgotpwCoacheeComponent } from './components/forgotpw/forgotpw-coachee/forgotpw-coachee.component';
import { ResetSecretCoacheeComponent } from './components/reset-secret/reset-secret-coachee/reset-secret-coachee.component';
import { ResetpwCoacheeComponent } from './components/resetpw/resetpw-coachee/resetpw-coachee.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}
const icons = {
  boxArrowRight,
  person,
  envelopeFill,
  telephoneFill,
  printerFill,
  laptop,
  trash,
  pencil
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MeineVorgaengeComponent,
    FallAnlegenComponent,
    FormulareComponent,
    StammdatenComponent,
    LoginComponent,
    ZweifaktorComponent,
    HomeComponent,
    UebersichtVorgaengeComponent,
    FallarbeitComponent,
    VereinbarungsmerkzettelComponent,
    MassnahmenentwicklungComponent,
    AnalyseprotokollStockwerkeComponent,
    AnalyseprotokollComponent,
    AgbComponent,
    ImpressumComponent,
    DatenschutzComponent,
    AnschriftComponent,
    KurzfragebogenRessourcenComponent,
    KurzfragebogenComponent,
    KurzfragebogenBelastungenComponent,
    ValidationMsgComponent,
    Vereinbarungsmerkzettel2Component,
    SchweigepflichtentbindungComponent,
    FaqComponent,
    EinwilligungDatenuebermittlungComponent,
    EinwilligungDatenerhebungComponent,
    LandingpageCoacheeComponent,
    VertraulichkeitsverpflichtungComponent,
    ResetpwComponent,
    ResetSecretComponent,
    ForgotpwComponent,
    ForgotSecretComponent,
    LoginCoacheeComponent,
    ZweifaktorCoacheeComponent,
    DatenschutzerklarungComponent,
    Datenschutz2Component,
    TermineComponent,
    VereinbarungComponent,
    HinweiszettelComponent,
    AbschlussgespraechprotokollComponent,
    DokumentationworkshopComponent,
    MassnahmenworkshopComponent,
    LoaderComponent,
    UpdateCoachdatenComponent,
    UpdateCoacheedatenComponent,
    UebersichtUsersComponent,
    UserRegisterComponent,
    SignaturepadComponent,
    APreadComponent,
    DAEreadComponent,
    DAE2readComponent,
    ASGPreadComponent,
    StkreadComponent,
    DWreadComponent,
    EWDHreadComponent,
    EWDUreadComponent,
    HZreadComponent,
    KFBreadComponent,
    UpdateTermineComponent,
    KFRreadComponent,
    MEreadComponent,
    MWreadComponent,
    SBreadComponent,
    VreadComponent,
    VMreadComponent,
    VM2readComponent,
    VVreadComponent,
    CoacheeComponent,
    ForgotpwCoacheeComponent,
    ResetSecretCoacheeComponent,
    ResetpwCoacheeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    NgxBootstrapIconsModule.pick(icons),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost', 'htwhost.com'],
        disallowedRoutes: ['example.com/examplebadroute/']
      }
    }),
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    SignaturePadModule,
    MatOptionModule,
    MatSelectModule,
    ButtonsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    AuthorisationService,
    CoacheeService,
    AlertService,
    NgbDropdown,
    NgbAlertConfig,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    FormulareService,
    Fragen2Service,
    FragenService,
    TermineService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

