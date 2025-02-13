import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberButtonsComponent } from './input-number-buttons.component';

describe('InputNumberButtonsComponent', () => {
  let component: InputNumberButtonsComponent;
  let fixture: ComponentFixture<InputNumberButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
