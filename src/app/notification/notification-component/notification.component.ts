import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notifications: Notification[];
  @Input() hidden: boolean;
  @Output() toggleNotifications = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  onToggleNotifications() {
    this.toggleNotifications.emit(!this.hidden);
  }

}
