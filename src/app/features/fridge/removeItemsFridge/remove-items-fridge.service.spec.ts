import { TestBed } from '@angular/core/testing';

import { RemoveItemsFridgeService } from './remove-items-fridge.service';

describe('RemoveItemsFridgeService', () => {
  let service: RemoveItemsFridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveItemsFridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
