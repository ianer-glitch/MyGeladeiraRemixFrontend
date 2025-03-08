import { TestBed } from '@angular/core/testing';

import { AskRecipesService } from './ask-recipes.service';

describe('AskRecipesService', () => {
  let service: AskRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
