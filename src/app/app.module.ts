import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/client/navbar/navbar.component';
import { WelcomeComponent } from './components/client/client-home/welcome/welcome.component';
import { WhyChooseUsComponent } from './components/client/client-home/why-choose-us/why-choose-us.component';
import { HowWorkComponent } from './components/client/client-home/how-work/how-work.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { AboutUsComponent } from './components/client/client-home/about-us/about-us.component';
import { FootbarComponent } from './components/client/footbar/footbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ClientComponent,
    NavbarComponent,
    WelcomeComponent,
    WhyChooseUsComponent,
    HowWorkComponent,
    ClientHomeComponent,
    AboutUsComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
