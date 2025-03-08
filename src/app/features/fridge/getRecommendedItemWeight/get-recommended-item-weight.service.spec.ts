import { TestBed } from '@angular/core/testing';

import { GetRecommendedItemWeightService } from './get-recommended-item-weight.service';

describe('GetRecommendedItemWeightService', () => {
  let service: GetRecommendedItemWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecommendedItemWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
