import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeComponent } from './silde.component';

describe('SildeComponent', () => {
  let component: SildeComponent;
  let fixture: ComponentFixture<SildeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SildeComponent]
    });
    fixture = TestBed.createComponent(SildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
