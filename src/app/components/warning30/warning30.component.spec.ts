import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning30Component } from './warning30.component';

describe('Warning30Component', () => {
  let component: Warning30Component;
  let fixture: ComponentFixture<Warning30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Warning30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Warning30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
