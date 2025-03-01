import { TestBed } from '@angular/core/testing';

import { GetItemsShoppingListService } from './get-items-shopping-list.service';

describe('GetItemsShoppingListService', () => {
  let service: GetItemsShoppingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetItemsShoppingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
