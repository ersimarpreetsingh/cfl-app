import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningModalsComponent } from './warning-modals.component';

describe('WarningModalsComponent', () => {
  let component: WarningModalsComponent;
  let fixture: ComponentFixture<WarningModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
