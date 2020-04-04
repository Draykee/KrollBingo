import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageLayoutComponent} from '@app/@layout/landing-page-layout/landing-page-layout.component';
import {SharedModule} from '@shared';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '@app/material.module';
import {AuthModule} from '@app/auth';
import {I18nModule} from '@core/i18n';


@NgModule({
  declarations: [LandingPageLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    I18nModule,
    RouterModule
  ],
  exports: [LandingPageLayoutComponent]
})
export class LandingPageLayoutModule {
}
