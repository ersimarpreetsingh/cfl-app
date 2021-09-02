import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalseFoodNutritionComponent } from './truefalse-food-nutrition.component';

describe('TruefalseFoodNutritionComponent', () => {
  let component: TruefalseFoodNutritionComponent;
  let fixture: ComponentFixture<TruefalseFoodNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruefalseFoodNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalseFoodNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
