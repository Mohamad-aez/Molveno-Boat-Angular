import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTripFormComponent } from './start-trip-form.component';

describe('StartTripFormComponent', () => {
  let component: StartTripFormComponent;
  let fixture: ComponentFixture<StartTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
