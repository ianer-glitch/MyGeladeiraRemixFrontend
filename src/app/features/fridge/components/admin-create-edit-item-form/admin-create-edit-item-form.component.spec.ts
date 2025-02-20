import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateEditItemFormComponent } from './admin-create-edit-item-form.component';

describe('AdminCreateEditItemFormComponent', () => {
  let component: AdminCreateEditItemFormComponent;
  let fixture: ComponentFixture<AdminCreateEditItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateEditItemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateEditItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
