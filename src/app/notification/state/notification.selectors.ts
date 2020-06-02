import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './notification.reducer';

const getNotificationFeatureSlice = createFeatureSelector<NotificationState>('notification');

export const getNotifications = createSelector(
  getNotificationFeatureSlice,
  state => state.notifications
);

export const getHiddenFlag = createSelector(
  getNotificationFeatureSlice,
  state => state.hidden
);
