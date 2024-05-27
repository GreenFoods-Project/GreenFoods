import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/client/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ClientHomeComponent,
    ClientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
