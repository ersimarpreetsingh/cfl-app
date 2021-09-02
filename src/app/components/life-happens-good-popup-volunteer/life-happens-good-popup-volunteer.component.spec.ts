import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensGoodPopupVolunteerComponent } from './life-happens-good-popup-volunteer.component';

describe('LifeHappensGoodPopupVolunteerComponent', () => {
  let component: LifeHappensGoodPopupVolunteerComponent;
  let fixture: ComponentFixture<LifeHappensGoodPopupVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensGoodPopupVolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensGoodPopupVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
