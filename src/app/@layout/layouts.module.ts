import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageLayoutModule} from '@app/@layout/landing-page-layout/landing-page-layout.module';
import {AdminPageLayoutModule} from '@app/@layout/admin-page-layout/admin-page-layout.module';
import {UserPageLayoutModule} from '@app/@layout/user-page-layout/user-page-layout.module';
import {SharedModule} from '@shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LandingPageLayoutModule,
    AdminPageLayoutModule,
    UserPageLayoutModule
  ],
  exports: []
})
export class LayoutsModule {
}
