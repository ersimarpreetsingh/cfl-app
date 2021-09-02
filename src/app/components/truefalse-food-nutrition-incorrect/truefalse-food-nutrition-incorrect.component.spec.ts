import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalseFoodNutritionIncorrectComponent } from './truefalse-food-nutrition-incorrect.component';

describe('TruefalseFoodNutritionIncorrectComponent', () => {
  let component: TruefalseFoodNutritionIncorrectComponent;
  let fixture: ComponentFixture<TruefalseFoodNutritionIncorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruefalseFoodNutritionIncorrectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalseFoodNutritionIncorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
