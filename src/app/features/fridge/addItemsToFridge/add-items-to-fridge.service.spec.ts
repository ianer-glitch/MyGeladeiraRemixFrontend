import { TestBed } from '@angular/core/testing';

import { AddItemsToFridgeService } from './add-items-to-fridge.service';

describe('AddItemsToFridgeService', () => {
  let service: AddItemsToFridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddItemsToFridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
