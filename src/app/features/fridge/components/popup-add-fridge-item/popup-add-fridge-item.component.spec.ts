import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddFridgeItemComponent } from './popup-add-fridge-item.component';

describe('PopupAddFridgeItemComponent', () => {
  let component: PopupAddFridgeItemComponent;
  let fixture: ComponentFixture<PopupAddFridgeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupAddFridgeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddFridgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
