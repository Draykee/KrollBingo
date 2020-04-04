import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {Angulartics2Module} from 'angulartics2';

import {environment} from '@env/environment';
import {CoreModule} from '@core';
import {SharedModule} from '@shared';
import {AuthModule} from '@app/auth';
import {HomeModule} from './home/home.module';
import {ShellModule} from './shell/shell.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from '@app/@layout/layouts.module';
import {WINDOW_PROVIDERS} from '@core/window.service';
import {AppState} from '@app/app.state';
import {LandingModule} from '@app/landing/landing.module';
import {DashboardModule} from '@app/dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutsModule,
    CoreModule,
    SharedModule,
    ShellModule,
    Angulartics2Module.forRoot(),

    // Pages
    AuthModule,

    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    WINDOW_PROVIDERS,
    AppState
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
