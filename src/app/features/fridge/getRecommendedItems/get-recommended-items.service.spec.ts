import { TestBed } from '@angular/core/testing';

import { GetRecommendedItemsService } from './get-recommended-items.service';

describe('GetRecommendedItemsService', () => {
  let service: GetRecommendedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecommendedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
