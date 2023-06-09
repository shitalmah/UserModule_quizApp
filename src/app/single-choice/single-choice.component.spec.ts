import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceComponent } from './single-choice.component';

describe('SingleChoiceComponent', () => {
  let component: SingleChoiceComponent;
  let fixture: ComponentFixture<SingleChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleChoiceComponent]
    });
    fixture = TestBed.createComponent(SingleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
