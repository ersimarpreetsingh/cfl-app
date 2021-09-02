import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMyBudgetReviewComponent } from './d-my-budget-review.component';

describe('DMyBudgetReviewComponent', () => {
  let component: DMyBudgetReviewComponent;
  let fixture: ComponentFixture<DMyBudgetReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMyBudgetReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DMyBudgetReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
