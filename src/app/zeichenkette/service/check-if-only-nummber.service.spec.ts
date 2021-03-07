import { TestBed } from '@angular/core/testing';

import { CheckIfOnlyNummberService } from './check-if-only-nummber.service';

describe('CheckIfOnlyNummberService', () => {
  let service: CheckIfOnlyNummberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIfOnlyNummberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
