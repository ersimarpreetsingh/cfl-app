import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFunFunComponent } from './fun-fun-fun.component';

describe('FunFunFunComponent', () => {
  let component: FunFunFunComponent;
  let fixture: ComponentFixture<FunFunFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFunFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFunFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
