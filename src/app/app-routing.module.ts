import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LandingShell} from '@app/@layout/landing-page-layout/landing-shell.service';
import {UserShell} from '@layout/user-page-layout/user-shell.service';
import {AdminShell} from '@layout/admin-page-layout/admin-shell.service';

const routes: Routes = [
  LandingShell.childRoutes([
    // {root}
    {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
    // /about
    {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)}
  ]),
  UserShell.childRoutes([
    // /user
    {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
  ]),
  AdminShell.childRoutes([
    // /admin
    {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
  ]),
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
