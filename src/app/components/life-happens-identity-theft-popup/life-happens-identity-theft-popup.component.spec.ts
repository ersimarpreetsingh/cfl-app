import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHappensIdentityTheftPopupComponent } from './life-happens-identity-theft-popup.component';

describe('LifeHappensIdentityTheftPopupComponent', () => {
  let component: LifeHappensIdentityTheftPopupComponent;
  let fixture: ComponentFixture<LifeHappensIdentityTheftPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHappensIdentityTheftPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHappensIdentityTheftPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
