import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import {AdminPageLayoutComponent} from '@app/@layout/admin-page-layout/admin-page-layout.component';

/**
 * Provides helper methods to create routes.
 */
export class AdminShell {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: 'admin',
      component: AdminPageLayoutComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
