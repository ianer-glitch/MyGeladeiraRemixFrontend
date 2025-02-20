import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeSpeedDialComponent } from './fridge-speed-dial.component';

describe('FridgeSpeedDialComponent', () => {
  let component: FridgeSpeedDialComponent;
  let fixture: ComponentFixture<FridgeSpeedDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FridgeSpeedDialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FridgeSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
