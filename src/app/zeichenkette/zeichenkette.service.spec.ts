import { TestBed } from '@angular/core/testing';

import { ZeichenketteService } from './service/zeichenkette.service';

describe('ZeichenketteService', () => {
  let service: ZeichenketteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeichenketteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
