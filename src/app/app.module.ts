import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/client/navbar/navbar.component';
import { WelcomeComponent } from './components/client/welcome/welcome.component';
import { WhyChooseUsComponent } from './components/client/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ClientComponent,
    NavbarComponent,
    WelcomeComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
