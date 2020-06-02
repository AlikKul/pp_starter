import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../notification.interface';
import { Store, select } from '@ngrx/store';
import { NotificationState } from './notification.reducer';
import { getNotifications, getHiddenFlag } from './notification.selectors';
import * as notificationActions from './notification.actions';

@Injectable({providedIn: 'root'})
export class NotificationFacade {

  notifications$: Observable<Notification[]>;
  hidden$: Observable<boolean>;

  constructor(
    private store: Store<NotificationState>
  ) {
    this.notifications$ = this.store.pipe(select(getNotifications));
    this.hidden$ = this.store.pipe(select(getHiddenFlag));
  }

  getNotifications() {
    this.store.dispatch(new notificationActions.GetNotifications());
  }

  setHiddenFlag(value) {
    this.store.dispatch(new notificationActions.SetHiddenFlag(value));
  }

}
