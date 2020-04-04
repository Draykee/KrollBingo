import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '@app/material.module';
import {AuthModule} from '@app/auth';
import {I18nModule} from '@core/i18n';
import {AdminPageLayoutComponent} from '@app/@layout/admin-page-layout/admin-page-layout.component';


@NgModule({
  declarations: [AdminPageLayoutComponent],
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
  exports: [AdminPageLayoutComponent]
})
export class AdminPageLayoutModule {
}
