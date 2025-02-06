import { TestBed } from '@angular/core/testing';

import { MaincoursespecialService } from './maincoursespecial.service';

describe('MaincoursespecialService', () => {
  let service: MaincoursespecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincoursespecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
