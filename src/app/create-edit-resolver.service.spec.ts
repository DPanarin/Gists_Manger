import { TestBed } from '@angular/core/testing';

import { CreateEditResolverService } from './create-edit-resolver.service';

describe('CreateEditResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEditResolverService = TestBed.get(CreateEditResolverService);
    expect(service).toBeTruthy();
  });
});
