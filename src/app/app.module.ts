import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

// Modules
import { ScheduleVisitAuthorizedComponent } from './schedule_visit_authorized/schedule-visit-authorized.component';
import { ScheduleVisitAuthorizedContainerComponent } from './schedule_visit_authorized/schedule-visit-authorized-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleVisitAuthorizedComponent,
    ScheduleVisitAuthorizedContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
