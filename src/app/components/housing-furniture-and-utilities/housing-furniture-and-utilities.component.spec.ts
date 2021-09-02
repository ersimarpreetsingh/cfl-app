import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingFurnitureAndUtilitiesComponent } from './housing-furniture-and-utilities.component';

describe('HousingFurnitureAndUtilitiesComponent', () => {
  let component: HousingFurnitureAndUtilitiesComponent;
  let fixture: ComponentFixture<HousingFurnitureAndUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingFurnitureAndUtilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingFurnitureAndUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
