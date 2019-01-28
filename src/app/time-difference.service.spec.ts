import { TestBed } from '@angular/core/testing';

import { TimeDifferenceService } from './time-difference.service';

describe('TimeDifferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeDifferenceService = TestBed.get(TimeDifferenceService);
    expect(service).toBeTruthy();
  });
});
