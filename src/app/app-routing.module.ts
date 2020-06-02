import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleVisitAuthorizedContainerComponent } from './schedule_visit_authorized/schedule-visit-authorized-container.component';


const routes: Routes = [
  { path: '', component: ScheduleVisitAuthorizedContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
