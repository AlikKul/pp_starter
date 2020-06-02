import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-visit-authorized',
  templateUrl: './schedule-visit-authorized.component.html',
  styleUrls: ['./schedule-visit-authorized.component.scss']
})
export class ScheduleVisitAuthorizedComponent implements OnInit {

  children = ['Марианна', 'Милана', 'Unborn son'];
  selectedChild = this.children[0];

  currentStep = 1;
  typeOfPatient = 'self';

  constructor() { }

  ngOnInit() {}

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  giveTicket() {
    alert('Выписываем талон');
    this.currentStep = 1;
  }

  cancel() {
    this.currentStep = 1;
  }

}
