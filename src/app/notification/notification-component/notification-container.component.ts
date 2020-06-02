import { Component, OnInit } from '@angular/core';
import { NotificationFacade } from '../state/notification.facade';
import { Notification } from '../notification.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-container',
  template: `
    <app-notification
      [notifications]="notifications$ | async"
      [hidden]="hidden$ | async"
      (toggleNotifications)="toggleNotifications($event)"
    ></app-notification>
  `
})
export class NotificationContainerComponent implements OnInit {

  notifications$: Observable<Notification[]>;
  hidden$: Observable<boolean>;

  constructor(
    private notificationFacade: NotificationFacade
  ) {
    this.notifications$ = this.notificationFacade.notifications$;
    this.hidden$ = this.notificationFacade.hidden$;
  }

  ngOnInit() {
    this.notificationFacade.getNotifications();
  }

  toggleNotifications(value) {
    this.notificationFacade.setHiddenFlag(value);
  }

}
