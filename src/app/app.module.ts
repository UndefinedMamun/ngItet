import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { SearchPanelService } from './services/search-panel.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { AimsComponent } from './aims/aims.component';
import { ExecutiveComponent } from './executive/executive.component';
import { ConstitutionComponent } from './constitution/constitution.component';
import { MissingPhotoComponent } from './missing-photo/missing-photo.component';
import { AboutMembershipComponent } from './about-membership/about-membership.component';
import { MembershipCriteriaComponent } from './membership-criteria/membership-criteria.component';
import { HowToGetComponent } from './how-to-get/how-to-get.component';
import { MemberShipFormComponent } from './member-ship-form/member-ship-form.component';
import { MembershipFeeComponent } from './membership-fee/membership-fee.component';
import { DownLoadsComponent } from './down-loads/down-loads.component';
import { CenterComponent } from './center/center.component';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    ResultViewComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactComponent,
    FooterComponent,
    PaymentsComponent,
    AimsComponent,
    ExecutiveComponent,
    ConstitutionComponent,
    MissingPhotoComponent,
    AboutMembershipComponent,
    MembershipCriteriaComponent,
    HowToGetComponent,
    MemberShipFormComponent,
    MembershipFeeComponent,
    DownLoadsComponent,
    CenterComponent,
    PhotoGalaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'search', component: SearchPanelComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'aims', component: AimsComponent },
      { path: 'eob', component: ExecutiveComponent },
      { path: 'constitution', component: ConstitutionComponent },
      { path: 'missing-photo', component: MissingPhotoComponent },
      { path: 'about-membership', component: AboutMembershipComponent },
      { path: 'membership-criteria', component: MembershipCriteriaComponent },
      { path: 'how-to-get', component: HowToGetComponent },
      { path: 'membership-fee', component: MembershipFeeComponent },
      { path: 'membership-form', component: MemberShipFormComponent },
      { path: 'downloads', component: DownLoadsComponent },
      { path: 'center', component: CenterComponent },
      { path: 'photo-galary', component: PhotoGalaryComponent }

    ])
  ],
  providers: [
    SearchPanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
