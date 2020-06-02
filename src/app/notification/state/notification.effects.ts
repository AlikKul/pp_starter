import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NotificationService } from '../notification.service';
import { Action } from '@ngrx/store';
import * as notificationActions from './notification.actions';
import { Notification } from '../notification.interface';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NotificationEffects {

  constructor(
    private actions$: Actions,
    private notificationService: NotificationService
  ) {}

  @Effect()
  getNotifications$: Observable<Action> = this.actions$.pipe(
    ofType(notificationActions.NotificationActionsTypes.GetNotifications),
    switchMap(() => this.notificationService.getNotifications().pipe(
      map((notifications: Notification[]) => (new notificationActions.GetNotificationsSuccess(notifications))),
      catchError(() => of(new notificationActions.GetNotificationsFail()))
    ))
  );

}
