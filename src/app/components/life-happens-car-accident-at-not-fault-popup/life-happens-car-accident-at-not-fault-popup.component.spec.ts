import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensCarAccidentAtNotFaultPopupComponent } from './life-happens-car-accident-at-not-fault-popup.component';

describe('LifeHappensCarAccidentAtNotFaultPopupComponent', () => {
  let component: LifeHappensCarAccidentAtNotFaultPopupComponent;
  let fixture: ComponentFixture<LifeHappensCarAccidentAtNotFaultPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensCarAccidentAtNotFaultPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensCarAccidentAtNotFaultPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
