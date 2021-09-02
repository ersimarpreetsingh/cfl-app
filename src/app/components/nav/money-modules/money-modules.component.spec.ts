import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyModulesComponent } from './money-modules.component';

describe('MoneyModulesComponent', () => {
  let component: MoneyModulesComponent;
  let fixture: ComponentFixture<MoneyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
