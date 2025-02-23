import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineEmailComponent } from './define-email.component';

describe('DefineEmailComponent', () => {
  let component: DefineEmailComponent;
  let fixture: ComponentFixture<DefineEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
