import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetReviewPopUpComponent } from './budget-review-pop-up.component';

describe('BudgetReviewPopUpComponent', () => {
  let component: BudgetReviewPopUpComponent;
  let fixture: ComponentFixture<BudgetReviewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetReviewPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetReviewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
