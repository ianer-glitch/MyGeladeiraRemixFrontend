import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationTimeSelectorComponent } from './expiration-time-selector.component';

describe('ExpirationTimeSelectorComponent', () => {
  let component: ExpirationTimeSelectorComponent;
  let fixture: ComponentFixture<ExpirationTimeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpirationTimeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirationTimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
