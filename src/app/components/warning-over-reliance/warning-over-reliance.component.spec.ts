import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningOverRelianceComponent } from './warning-over-reliance.component';

describe('WarningOverRelianceComponent', () => {
  let component: WarningOverRelianceComponent;
  let fixture: ComponentFixture<WarningOverRelianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningOverRelianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningOverRelianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
