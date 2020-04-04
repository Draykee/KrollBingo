import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about.component';
import {extract} from '@core/i18n';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {path: '', component: AboutComponent, data: {title: extract('About')}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {
}
