import { TestBed } from '@angular/core/testing';

import { HobbyService } from './hobby.service';

describe('HobbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbyService = TestBed.get(HobbyService);
    expect(service).toBeTruthy();
  });
});
