import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseYourCreditScoreOneComponent } from './increase-your-credit-score-one.component';

describe('IncreaseYourCreditScoreOneComponent', () => {
  let component: IncreaseYourCreditScoreOneComponent;
  let fixture: ComponentFixture<IncreaseYourCreditScoreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseYourCreditScoreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseYourCreditScoreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
