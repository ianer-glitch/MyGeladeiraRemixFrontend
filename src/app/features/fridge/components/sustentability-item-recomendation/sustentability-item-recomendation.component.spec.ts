import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentabilityItemRecomendationComponent } from './sustentability-item-recomendation.component';

describe('SustentabilityItemRecomendationComponent', () => {
  let component: SustentabilityItemRecomendationComponent;
  let fixture: ComponentFixture<SustentabilityItemRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustentabilityItemRecomendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustentabilityItemRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
