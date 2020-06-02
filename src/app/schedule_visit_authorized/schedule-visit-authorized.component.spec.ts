import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleVisitAuthorizedComponent } from './schedule-visit-authorized.component';

describe('ScheduleVisitAuthorizedComponent', () => {
  let component: ScheduleVisitAuthorizedComponent;
  let fixture: ComponentFixture<ScheduleVisitAuthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleVisitAuthorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleVisitAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
