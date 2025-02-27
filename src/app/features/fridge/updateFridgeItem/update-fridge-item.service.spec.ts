import { TestBed } from '@angular/core/testing';

import { UpdateFridgeItemService } from './update-fridge-item.service';

describe('UpdateFridgeItemService', () => {
  let service: UpdateFridgeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFridgeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
