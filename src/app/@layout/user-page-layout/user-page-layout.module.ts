import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '@app/material.module';
import {AuthModule} from '@app/auth';
import {I18nModule} from '@core/i18n';
import {UserPageLayoutComponent} from '@app/@layout/user-page-layout/user-page-layout.component';


@NgModule({
  declarations: [UserPageLayoutComponent],
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
  exports: [UserPageLayoutComponent]
})
export class UserPageLayoutModule {
}
