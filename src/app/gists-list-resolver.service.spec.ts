import { TestBed } from '@angular/core/testing';

import { GistsListResolverService } from './gists-list-resolver.service';

describe('GistsListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GistsListResolverService = TestBed.get(GistsListResolverService);
    expect(service).toBeTruthy();
  });
});
