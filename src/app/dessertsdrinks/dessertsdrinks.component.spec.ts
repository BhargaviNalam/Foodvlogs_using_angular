import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsdrinksComponent } from './dessertsdrinks.component';

describe('DessertsdrinksComponent', () => {
  let component: DessertsdrinksComponent;
  let fixture: ComponentFixture<DessertsdrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsdrinksComponent]
    });
    fixture = TestBed.createComponent(DessertsdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
