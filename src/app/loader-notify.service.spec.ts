import { TestBed } from '@angular/core/testing';

import { LoaderNotifyService } from './loader-notify.service';

describe('LoaderNotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderNotifyService = TestBed.get(LoaderNotifyService);
    expect(service).toBeTruthy();
  });
});
