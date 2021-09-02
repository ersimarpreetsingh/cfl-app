import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPlanningForTheFutureComponent } from './d-planning-for-the-future.component';

describe('DPlanningForTheFutureComponent', () => {
  let component: DPlanningForTheFutureComponent;
  let fixture: ComponentFixture<DPlanningForTheFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPlanningForTheFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DPlanningForTheFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
