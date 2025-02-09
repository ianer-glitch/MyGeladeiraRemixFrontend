import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeIconComponent } from './prime-icon.component';

describe('PrimeIconComponent', () => {
  let component: PrimeIconComponent;
  let fixture: ComponentFixture<PrimeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
