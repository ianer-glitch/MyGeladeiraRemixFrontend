import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeLayoutComponent } from './fridge-layout.component';

describe('FridgeLayoutComponent', () => {
  let component: FridgeLayoutComponent;
  let fixture: ComponentFixture<FridgeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FridgeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FridgeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
