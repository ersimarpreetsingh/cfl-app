import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseYourCreditScoreTwoComponent } from './increase-your-credit-score-two.component';

describe('IncreaseYourCreditScoreTwoComponent', () => {
  let component: IncreaseYourCreditScoreTwoComponent;
  let fixture: ComponentFixture<IncreaseYourCreditScoreTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseYourCreditScoreTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseYourCreditScoreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
