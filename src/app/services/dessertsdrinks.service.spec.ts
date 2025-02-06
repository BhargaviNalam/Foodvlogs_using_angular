import { TestBed } from '@angular/core/testing';

import { DessertsdrinksService } from './dessertsdrinks.service';

describe('DessertsdrinksService', () => {
  let service: DessertsdrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DessertsdrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
