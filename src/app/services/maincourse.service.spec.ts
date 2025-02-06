import { TestBed } from '@angular/core/testing';

import { MaincourseService } from './maincourse.service';

describe('MaincourseService', () => {
  let service: MaincourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
