import { TestBed } from '@angular/core/testing';

import { MaincoursecurryService } from './maincoursecurry.service';

describe('MaincoursecurryService', () => {
  let service: MaincoursecurryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincoursecurryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
