import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatTypeFormComponent } from './boat-type-form.component';

describe('BoatTypeFormComponent', () => {
  let component: BoatTypeFormComponent;
  let fixture: ComponentFixture<BoatTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
