import { TestBed } from '@angular/core/testing';

import { GetStatisticByUserService } from './get-statistic-by-user.service';

describe('GetStatisticByUserService', () => {
  let service: GetStatisticByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatisticByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
