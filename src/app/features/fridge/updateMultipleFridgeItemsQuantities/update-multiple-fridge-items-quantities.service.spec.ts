import { TestBed } from '@angular/core/testing';

import { UpdateMultipleFridgeItemsQuantitiesService } from './update-multiple-fridge-items-quantities.service';

describe('UpdateMultipleFridgeItemsQuantitiesService', () => {
  let service: UpdateMultipleFridgeItemsQuantitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMultipleFridgeItemsQuantitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
