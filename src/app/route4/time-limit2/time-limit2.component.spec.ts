import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLimit2Component } from './time-limit2.component';

describe('TimeLimit2Component', () => {
  let component: TimeLimit2Component;
  let fixture: ComponentFixture<TimeLimit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLimit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLimit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
