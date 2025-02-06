import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoursecurryComponent } from './maincoursecurry.component';

describe('MaincoursecurryComponent', () => {
  let component: MaincoursecurryComponent;
  let fixture: ComponentFixture<MaincoursecurryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincoursecurryComponent]
    });
    fixture = TestBed.createComponent(MaincoursecurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
