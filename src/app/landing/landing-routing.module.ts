import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract} from '@core/i18n';
import {LandingComponent} from '@app/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent, data: { title: extract('APP_NAME') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
