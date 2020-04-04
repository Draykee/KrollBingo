import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialModule} from '@app/material.module';
import {LoaderComponent} from './loader/loader.component';
import {HideHeaderDirective} from '@shared/directive/hide-header.directive';
import {VerticalMenuComponent} from '@shared/components/vertical-menu/vertical-menu.component';
import {HorizontalMenuComponent} from '@shared/components/horizontal-menu/horizontal-menu.component';
import {RouterModule} from '@angular/router';
import {TopToolBarComponent} from '@shared/components/top-toolbar/top-tool-bar.component';
import {FooterComponent} from '@shared/components/footer/footer.component';
import {ContactsComponent} from '@shared/components/contacts/contacts.component';
import {LangComponent} from '@shared/components/lang/lang.component';
import {UserMenuComponent} from '@shared/components/user-menu/user-menu.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LoaderComponent,
    HideHeaderDirective,
    TopToolBarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FooterComponent,
    ContactsComponent,
    LangComponent,
    UserMenuComponent
  ],
  exports: [
    LoaderComponent,
    HideHeaderDirective,
    TopToolBarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FooterComponent,
    UserMenuComponent,
    LangComponent
  ]
})
export class SharedModule {
}
