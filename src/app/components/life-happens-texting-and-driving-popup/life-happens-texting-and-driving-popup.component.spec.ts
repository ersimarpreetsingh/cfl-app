import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensTextingAndDrivingPopupComponent } from './life-happens-texting-and-driving-popup.component';

describe('LifeHappensTextingAndDrivingPopupComponent', () => {
  let component: LifeHappensTextingAndDrivingPopupComponent;
  let fixture: ComponentFixture<LifeHappensTextingAndDrivingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensTextingAndDrivingPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensTextingAndDrivingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
