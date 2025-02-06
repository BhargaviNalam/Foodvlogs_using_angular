import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoursebiryaniComponent } from './maincoursebiryani.component';

describe('MaincoursebiryaniComponent', () => {
  let component: MaincoursebiryaniComponent;
  let fixture: ComponentFixture<MaincoursebiryaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincoursebiryaniComponent]
    });
    fixture = TestBed.createComponent(MaincoursebiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
