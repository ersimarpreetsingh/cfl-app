import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensGoodPopupReimbursementComponent } from './life-happens-good-popup-reimbursement.component';

describe('LifeHappensGoodPopupReimbursementComponent', () => {
  let component: LifeHappensGoodPopupReimbursementComponent;
  let fixture: ComponentFixture<LifeHappensGoodPopupReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensGoodPopupReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensGoodPopupReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
