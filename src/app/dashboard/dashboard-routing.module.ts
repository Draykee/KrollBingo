import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {extract} from '@core/i18n';
import {DashboardComponent} from '@app/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, data: {title: extract('Dashboard')}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {
}
