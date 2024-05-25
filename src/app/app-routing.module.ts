import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'clientHome', component: ClientHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
