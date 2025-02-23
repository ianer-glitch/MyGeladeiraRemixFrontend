import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineEmailFormComponent } from './define-email-form.component';

describe('DefineEmailFormComponent', () => {
  let component: DefineEmailFormComponent;
  let fixture: ComponentFixture<DefineEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineEmailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
