import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableGivingComponent } from './charitable-giving.component';

describe('CharitableGivingComponent', () => {
  let component: CharitableGivingComponent;
  let fixture: ComponentFixture<CharitableGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableGivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
