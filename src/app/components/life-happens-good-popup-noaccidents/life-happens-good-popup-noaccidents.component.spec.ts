import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensGoodPopupNoaccidentsComponent } from './life-happens-good-popup-noaccidents.component';

describe('LifeHappensGoodPopupNoaccidentsComponent', () => {
  let component: LifeHappensGoodPopupNoaccidentsComponent;
  let fixture: ComponentFixture<LifeHappensGoodPopupNoaccidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensGoodPopupNoaccidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensGoodPopupNoaccidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
