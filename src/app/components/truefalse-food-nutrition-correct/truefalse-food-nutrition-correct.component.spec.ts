import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalseFoodNutritionCorrectComponent } from './truefalse-food-nutrition-correct.component';

describe('TruefalseFoodNutritionCorrectComponent', () => {
  let component: TruefalseFoodNutritionCorrectComponent;
  let fixture: ComponentFixture<TruefalseFoodNutritionCorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruefalseFoodNutritionCorrectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalseFoodNutritionCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
