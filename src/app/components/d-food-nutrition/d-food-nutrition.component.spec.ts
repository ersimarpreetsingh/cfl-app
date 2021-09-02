import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFoodNutritionComponent } from './d-food-nutrition.component';

describe('DFoodNutritionComponent', () => {
  let component: DFoodNutritionComponent;
  let fixture: ComponentFixture<DFoodNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFoodNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DFoodNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
