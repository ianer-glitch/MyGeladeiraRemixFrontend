import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBarLoginComponent } from './step-bar-login.component';

describe('StepBarLoginComponent', () => {
  let component: StepBarLoginComponent;
  let fixture: ComponentFixture<StepBarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
