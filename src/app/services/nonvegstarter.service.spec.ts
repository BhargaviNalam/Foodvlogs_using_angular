import { TestBed } from '@angular/core/testing';

import { NonvegstarterService } from './nonvegstarter.service';

describe('NonvegstarterService', () => {
  let service: NonvegstarterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonvegstarterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
