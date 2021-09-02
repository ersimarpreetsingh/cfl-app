import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantReportComponent } from './participant-report.component';

describe('ParticipantReportComponent', () => {
  let component: ParticipantReportComponent;
  let fixture: ComponentFixture<ParticipantReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
