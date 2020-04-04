import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {extract} from '@core/i18n';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: extract('Home')}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
