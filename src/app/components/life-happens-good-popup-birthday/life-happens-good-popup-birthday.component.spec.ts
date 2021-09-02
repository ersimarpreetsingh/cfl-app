import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensGoodPopupBirthdayComponent } from './life-happens-good-popup-birthday.component';

describe('LifeHappensGoodPopupBirthdayComponent', () => {
  let component: LifeHappensGoodPopupBirthdayComponent;
  let fixture: ComponentFixture<LifeHappensGoodPopupBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensGoodPopupBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensGoodPopupBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
