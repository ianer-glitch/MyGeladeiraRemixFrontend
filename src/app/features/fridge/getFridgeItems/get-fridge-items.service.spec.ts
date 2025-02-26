import { TestBed } from '@angular/core/testing';

import { GetFridgeItemsService } from './get-fridge-items.service';

describe('GetFridgeItemsService', () => {
  let service: GetFridgeItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFridgeItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
