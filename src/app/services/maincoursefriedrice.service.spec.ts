import { TestBed } from '@angular/core/testing';

import { MaincoursefriedriceService } from './maincoursefriedrice.service';

describe('MaincoursefriedriceService', () => {
  let service: MaincoursefriedriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincoursefriedriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
