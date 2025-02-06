import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoursespecialComponent } from './maincoursespecial.component';

describe('MaincoursespecialComponent', () => {
  let component: MaincoursespecialComponent;
  let fixture: ComponentFixture<MaincoursespecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincoursespecialComponent]
    });
    fixture = TestBed.createComponent(MaincoursespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
