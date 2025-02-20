import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeItemListComponent } from './admin-home-item-list.component';

describe('AdminHomeItemListComponent', () => {
  let component: AdminHomeItemListComponent;
  let fixture: ComponentFixture<AdminHomeItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHomeItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomeItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
