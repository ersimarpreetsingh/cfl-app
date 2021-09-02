import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseYourCreditScoreComponent } from './increase-your-credit-score.component';

describe('IncreaseYourCreditScoreComponent', () => {
  let component: IncreaseYourCreditScoreComponent;
  let fixture: ComponentFixture<IncreaseYourCreditScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseYourCreditScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseYourCreditScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
