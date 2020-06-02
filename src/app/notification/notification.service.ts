import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) {}

  getNotifications() {
    return this.http.get('https://pp86.hostco.ru/api/rest/article');
  }

}
