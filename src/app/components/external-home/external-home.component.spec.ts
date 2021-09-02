import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalHomeComponent } from './external-home.component';

describe('ExternalHomeComponent', () => {
  let component: ExternalHomeComponent;
  let fixture: ComponentFixture<ExternalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
