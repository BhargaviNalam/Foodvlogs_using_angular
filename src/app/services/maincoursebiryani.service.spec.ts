import { TestBed } from '@angular/core/testing';

import { MaincoursebiryaniService } from './maincoursebiryani.service';

describe('MaincoursebiryaniService', () => {
  let service: MaincoursebiryaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincoursebiryaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
