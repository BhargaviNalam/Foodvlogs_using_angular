import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoursefriedriceComponent } from './maincoursefriedrice.component';

describe('MaincoursefriedriceComponent', () => {
  let component: MaincoursefriedriceComponent;
  let fixture: ComponentFixture<MaincoursefriedriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincoursefriedriceComponent]
    });
    fixture = TestBed.createComponent(MaincoursefriedriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
