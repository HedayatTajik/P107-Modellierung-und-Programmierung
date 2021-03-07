import { TestBed } from '@angular/core/testing';

import { NetWeightService } from './net-weight.service';

describe('NetWeightService', () => {
  let service: NetWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
