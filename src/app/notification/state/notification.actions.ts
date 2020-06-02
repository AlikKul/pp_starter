import { Action } from '@ngrx/store';
import { Notification } from '../notification.interface';

export enum NotificationActionsTypes {
  GetNotifications = '[Notifications] Get Notifications',
  GetNotificationsSuccess = '[Notifications] Get Notifications Success',
  GetNotificationsFail = '[Notifications] Get Notifications Fail',
  SetHiddenFlag = '[Notifications] Set Hidden Flag'
}

export class GetNotifications implements Action {
  readonly type = NotificationActionsTypes.GetNotifications;
}

export class GetNotificationsSuccess implements Action {
  readonly type = NotificationActionsTypes.GetNotificationsSuccess;
  constructor(public payload: Notification[]) {}
}

export class GetNotificationsFail implements Action {
  readonly type = NotificationActionsTypes.GetNotificationsFail;
}

export class SetHiddenFlag implements Action {
  readonly type = NotificationActionsTypes.SetHiddenFlag;
  constructor(public payload: boolean) {}
}

export type NotificationActions =
    GetNotifications
  | GetNotificationsSuccess
  | GetNotificationsFail
  | SetHiddenFlag;
