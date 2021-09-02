import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointFormComponent } from './checkpoint-form.component';

describe('CheckpointFormComponent', () => {
  let component: CheckpointFormComponent;
  let fixture: ComponentFixture<CheckpointFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpointFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
