import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseYourCreditScoreAnswersOneComponent } from './increase-your-credit-score-answers-one.component';

describe('IncreaseYourCreditScoreAnswersOneComponent', () => {
  let component: IncreaseYourCreditScoreAnswersOneComponent;
  let fixture: ComponentFixture<IncreaseYourCreditScoreAnswersOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseYourCreditScoreAnswersOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseYourCreditScoreAnswersOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
