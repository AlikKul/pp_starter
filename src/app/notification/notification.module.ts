import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/notification.reducer';
import { EffectsModule } from '@ngrx/effects';

import { NotificationComponent } from './notification-component/notification.component';
import { NotificationContainerComponent } from './notification-component/notification-container.component';
import { NotificationEffects } from './state/notification.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notification', reducer),
    EffectsModule.forFeature([NotificationEffects])
  ],
  declarations: [
    NotificationComponent,
    NotificationContainerComponent
  ],
  exports: [
    NotificationComponent,
    NotificationContainerComponent
  ]
})

export class NotificationModule {}
