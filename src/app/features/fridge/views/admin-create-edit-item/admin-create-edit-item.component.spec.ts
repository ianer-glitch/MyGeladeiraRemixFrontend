import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateEditItemComponent } from './admin-create-edit-item.component';

describe('AdminCreateEditItemComponent', () => {
  let component: AdminCreateEditItemComponent;
  let fixture: ComponentFixture<AdminCreateEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateEditItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
