import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPopUpSecondComponent } from './calculator-pop-up-second.component';

describe('CalculatorPopUpSecondComponent', () => {
  let component: CalculatorPopUpSecondComponent;
  let fixture: ComponentFixture<CalculatorPopUpSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorPopUpSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPopUpSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
