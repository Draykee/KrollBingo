import { Routes, Route } from '@angular/router';

import {LandingPageLayoutComponent} from '@layout/landing-page-layout/landing-page-layout.component';

/**
 * Provides helper methods to create routes.
 */
export class LandingShell {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LandingPageLayoutComponent,
      children: routes,
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
