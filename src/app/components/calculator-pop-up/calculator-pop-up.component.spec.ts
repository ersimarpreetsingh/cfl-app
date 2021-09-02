import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPopUpComponent } from './calculator-pop-up.component';

describe('CalculatorPopUpComponent', () => {
  let component: CalculatorPopUpComponent;
  let fixture: ComponentFixture<CalculatorPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
