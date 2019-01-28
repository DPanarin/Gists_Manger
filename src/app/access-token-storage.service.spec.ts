import { TestBed } from '@angular/core/testing';

import { AccessTokenStorageService } from './access-token-storage.service';

describe('AccessTokenStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessTokenStorageService = TestBed.get(AccessTokenStorageService);
    expect(service).toBeTruthy();
  });
});
