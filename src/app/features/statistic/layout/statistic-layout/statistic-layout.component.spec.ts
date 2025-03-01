import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticLayoutComponent } from './statistic-layout.component';

describe('StatisticLayoutComponent', () => {
  let component: StatisticLayoutComponent;
  let fixture: ComponentFixture<StatisticLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
