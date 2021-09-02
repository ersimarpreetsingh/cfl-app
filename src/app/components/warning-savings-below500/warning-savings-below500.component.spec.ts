import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSavingsBelow500Component } from './warning-savings-below500.component';

describe('WarningSavingsBelow500Component', () => {
  let component: WarningSavingsBelow500Component;
  let fixture: ComponentFixture<WarningSavingsBelow500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningSavingsBelow500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSavingsBelow500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
