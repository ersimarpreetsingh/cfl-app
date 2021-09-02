import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensCarAccidentAtFaultPopupComponent } from './life-happens-car-accident-at-fault-popup.component';

describe('LifeHappensCarAccidentAtFaultPopupComponent', () => {
  let component: LifeHappensCarAccidentAtFaultPopupComponent;
  let fixture: ComponentFixture<LifeHappensCarAccidentAtFaultPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensCarAccidentAtFaultPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensCarAccidentAtFaultPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
