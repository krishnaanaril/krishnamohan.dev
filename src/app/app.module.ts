// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScullyLibModule } from '@scullyio/ng-lib';

// import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    // BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ScullyLibModule,
    // FlexLayoutModule,
    // HttpClientModule,
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
