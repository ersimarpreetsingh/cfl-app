import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseYourCreditScoreAnswersTwoComponent } from './increase-your-credit-score-answers-two.component';

describe('IncreaseYourCreditScoreAnswersTwoComponent', () => {
  let component: IncreaseYourCreditScoreAnswersTwoComponent;
  let fixture: ComponentFixture<IncreaseYourCreditScoreAnswersTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseYourCreditScoreAnswersTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseYourCreditScoreAnswersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
