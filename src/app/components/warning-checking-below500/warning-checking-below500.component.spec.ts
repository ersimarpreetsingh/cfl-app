import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCheckingBelow500Component } from './warning-checking-below500.component';

describe('WarningCheckingBelow500Component', () => {
  let component: WarningCheckingBelow500Component;
  let fixture: ComponentFixture<WarningCheckingBelow500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningCheckingBelow500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCheckingBelow500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
