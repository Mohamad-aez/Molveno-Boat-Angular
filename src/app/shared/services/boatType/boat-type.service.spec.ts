import { TestBed } from '@angular/core/testing';

import { BoatTypeService } from './boat-type.service';

describe('BoatTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoatTypeService = TestBed.get(BoatTypeService);
    expect(service).toBeTruthy();
  });
});
