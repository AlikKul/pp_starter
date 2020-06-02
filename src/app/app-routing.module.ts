import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationContainerComponent } from './notification/notification-component/notification-container.component';


const routes: Routes = [
  { path: '', component: NotificationContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
