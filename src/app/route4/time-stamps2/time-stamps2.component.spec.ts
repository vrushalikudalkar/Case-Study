import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStamps2Component } from './time-stamps2.component';

describe('TimeStamps2Component', () => {
  let component: TimeStamps2Component;
  let fixture: ComponentFixture<TimeStamps2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStamps2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStamps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
