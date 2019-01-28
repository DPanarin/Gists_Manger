import { TestBed } from '@angular/core/testing';

import { GistResolverService } from './gist-resolver.service';

describe('GistResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GistResolverService = TestBed.get(GistResolverService);
    expect(service).toBeTruthy();
  });
});
