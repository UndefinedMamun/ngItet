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
    PaymentsComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'search', component: SearchPanelComponent},
      { path: 'about', component: AboutPageComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'payments', component: PaymentsComponent}

    ])
  ],
  providers: [
    SearchPanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
