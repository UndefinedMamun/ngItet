import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { SearchPanelService } from './services/search-panel.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HeaderComponent},
      { path: 'search', component: SearchPanelComponent},
    ])
  ],
  providers: [
    SearchPanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
