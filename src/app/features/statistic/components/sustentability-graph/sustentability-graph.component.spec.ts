import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentabilityGraphComponent } from './sustentability-graph.component';

describe('SustentabilityGraphComponent', () => {
  let component: SustentabilityGraphComponent;
  let fixture: ComponentFixture<SustentabilityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustentabilityGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustentabilityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
