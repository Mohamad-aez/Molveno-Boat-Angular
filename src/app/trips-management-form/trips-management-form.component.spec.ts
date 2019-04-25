import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsManagementFormComponent } from './trips-management-form.component';

describe('TripsManagementFormComponent', () => {
  let component: TripsManagementFormComponent;
  let fixture: ComponentFixture<TripsManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsManagementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
