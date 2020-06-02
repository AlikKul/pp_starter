import { Notification } from '../notification.interface';
import { NotificationActions, NotificationActionsTypes } from './notification.actions';

export interface NotificationState {
  notifications: Notification[];
  hidden: boolean;
}

const initialState: NotificationState = {
  notifications: [],
  hidden: false
};

export function reducer(state: NotificationState = initialState, action: NotificationActions) {
  switch (action.type) {

    case NotificationActionsTypes.GetNotificationsSuccess:
      return {
        ...state,
        notifications: action.payload.slice(0, 4)
      };

    case NotificationActionsTypes.GetNotificationsFail:
      return {
        ...state,
        hidden: true,
        notifications: [{
          title: 'Блок уведомлений',
          text: 'К сожалению, в данный момент уведомления недоступны.'
        }]
      };

      case NotificationActionsTypes.SetHiddenFlag:
        return {
          ...state,
          hidden: action.payload
        };

    default:
      return state;
  }
}
