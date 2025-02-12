import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemComponent } from './list-tem.component';

describe('ListTemComponent', () => {
  let component: ListTemComponent;
  let fixture: ComponentFixture<ListTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
