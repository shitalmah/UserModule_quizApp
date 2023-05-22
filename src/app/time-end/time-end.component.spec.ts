import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEndComponent } from './time-end.component';

describe('TimeEndComponent', () => {
  let component: TimeEndComponent;
  let fixture: ComponentFixture<TimeEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEndComponent]
    });
    fixture = TestBed.createComponent(TimeEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
