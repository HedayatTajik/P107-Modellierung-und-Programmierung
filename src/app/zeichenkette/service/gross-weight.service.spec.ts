import { TestBed } from '@angular/core/testing';

import { GrossWeightService } from './gross-weight.service';

describe('GrossWeightService', () => {
  let service: GrossWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrossWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
