import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

// Components
import { ScheduleVisitAuthorizedComponent } from './schedule-visit-authorized/schedule-visit-authorized.component';
import { ScheduleVisitAuthorizedContainerComponent } from './schedule-visit-authorized/schedule-visit-authorized-container.component';

// Modules
import { NotificationModule } from './notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleVisitAuthorizedComponent,
    ScheduleVisitAuthorizedContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    NotificationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
